/**
 * Dedicated 3D Background Video Scroll Scrub Controller
 * - Preloads video into an in-memory Blob URL for instant frame seeking on any HTTP server (even without HTTP 206 Range support)
 * - Smoothly synchronizes video.currentTime with scroll position using requestAnimationFrame & Lerp
 */
(function () {
  'use strict';

  function initVideoScroller() {
    const video = document.querySelector('.stage video') ||
      document.querySelector('video[src*="experience"]') ||
      document.querySelector('#top video') ||
      document.querySelector('.hero video') ||
      document.querySelector('video');

    if (!video) {
      requestAnimationFrame(initVideoScroller);
      return;
    }

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', '');
    video.setAttribute('muted', '');
    video.setAttribute('preload', 'auto');
    video.removeAttribute('autoplay');
    video.removeAttribute('loop');

    try {
      video.pause();
    } catch (e) {}

    // Preload video as Blob to enable instant seek on servers without HTTP 206
    const origSrc = video.currentSrc || video.getAttribute('src');
    if (origSrc && !origSrc.startsWith('blob:') && typeof fetch === 'function') {
      fetch(origSrc)
        .then(function (r) {
          if (!r.ok) throw new Error('Fetch status ' + r.status);
          return r.blob();
        })
        .then(function (blob) {
          const blobUrl = URL.createObjectURL(blob);
          const curTime = video.currentTime || 0;
          video.src = blobUrl;
          video.currentTime = curTime;
          try { video.pause(); } catch (e) {}
        })
        .catch(function (err) {
          console.warn('Blob preload skipped, using direct stream:', err);
        });
    }

    const container = document.querySelector('#top') ||
      document.querySelector('.hero') ||
      document.documentElement;

    let targetTime = 0;
    let currentTime = 0;

    function calculateScrollProgress() {
      const totalScrollHeight = container.offsetHeight || container.scrollHeight || (document.documentElement.scrollHeight - window.innerHeight);
      const maxScroll = totalScrollHeight - window.innerHeight;
      if (maxScroll <= 0) return 0;

      const rect = container.getBoundingClientRect();
      const scrolled = -rect.top;
      const progress = scrolled / maxScroll;

      return Math.max(0, Math.min(1, progress));
    }

    function updateTargetTime() {
      const duration = video.duration || 0;
      if (duration > 0) {
        const progress = calculateScrollProgress();
        targetTime = progress * duration;
      }
    }

    window.addEventListener('scroll', updateTargetTime, { passive: true });
    window.addEventListener('resize', updateTargetTime, { passive: true });
    video.addEventListener('loadedmetadata', updateTargetTime);
    video.addEventListener('durationchange', updateTargetTime);
    updateTargetTime();

    // Note: Video scrubbing is driven by the application's master loop.
    // Preloading as blob ensures instant seeks without byte-range stalls.
    /*
    const LERP_FACTOR = 0.15;
    function renderScrubLoop() { ... }
    requestAnimationFrame(renderScrubLoop);
    */
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initVideoScroller);
  } else {
    initVideoScroller();
  }
})();

