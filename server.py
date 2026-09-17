#!/usr/bin/env python3
"""
HTTP Server with full Range Request (HTTP 206 Partial Content) support.
Required for smooth video scrubbing and seeking in modern browsers (Chrome, Safari, Firefox).
"""
import os, re, sys
from http.server import HTTPServer, SimpleHTTPRequestHandler

class RangeRequestHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Cache-Control', 'no-cache')
        self.send_header('Accept-Ranges', 'bytes')
        super().end_headers()

    def send_head(self):
        path = self.translate_path(self.path)
        if os.path.isdir(path):
            return super().send_head()
        if not os.path.exists(path):
            return super().send_head()

        range_header = self.headers.get('Range')
        if not range_header or not os.path.isfile(path):
            return super().send_head()

        size = os.path.getsize(path)
        m = re.match(r'bytes=(\d+)-(\d*)', range_header)
        if not m:
            return super().send_head()

        start = int(m.group(1))
        end = int(m.group(2)) if m.group(2) else size - 1
        if start >= size:
            self.send_error(416, "Requested Range Not Satisfiable")
            return None

        end = min(end, size - 1)
        length = end - start + 1

        self.send_response(206)
        ctype = self.guess_type(path)
        self.send_header('Content-type', ctype)
        self.send_header('Content-Range', f'bytes {start}-{end}/{size}')
        self.send_header('Content-Length', str(length))
        self.end_headers()

        self._range_length = length
        f = open(path, 'rb')
        f.seek(start)
        return f

    def copyfile(self, source, outputfile):
        if hasattr(self, '_range_length') and self._range_length is not None:
            remaining = self._range_length
            self._range_length = None
            bufsize = 64 * 1024
            while remaining > 0:
                chunk = source.read(min(remaining, bufsize))
                if not chunk:
                    break
                outputfile.write(chunk)
                remaining -= len(chunk)
        else:
            super().copyfile(source, outputfile)

def run(port=8080):
    server_address = ('', port)
    httpd = HTTPServer(server_address, RangeRequestHandler)
    print(f"=======================================================")
    print(f" 3D Luxury Showcase Server running at:")
    print(f" -> http://localhost:{port}")
    print(f" Supports HTTP 206 Byte Ranges for instant 3D video scrub")
    print(f"=======================================================")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nServer stopped.")

if __name__ == '__main__':
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8080
    run(port)

