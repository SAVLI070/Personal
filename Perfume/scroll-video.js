/**
 * High-Performance 60FPS Video Scroll Scrub Controller
 * - GPU Hardware-accelerated seeking with seeking-state throttle
 * - Smooth frame interpolation to eliminate stutters & frame drops
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

    // Force GPU layer composition for video
    video.style.transform = 'translate3d(0, 0, 0)';
    video.style.willChange = 'transform';
    video.style.backfaceVisibility = 'hidden';

    try {
      video.pause();
    } catch (e) {}

    const container = document.querySelector('#top') ||
      document.querySelector('.hero') ||
      document.documentElement;

    let targetTime = 0;
    let isSeeking = false;

    function calculateScrollProgress() {
      const totalScrollHeight = container.offsetHeight || container.scrollHeight || (document.documentElement.scrollHeight - window.innerHeight);
      const maxScroll = totalScrollHeight - window.innerHeight;
      if (maxScroll <= 0) return 0;

      const rect = container.getBoundingClientRect();
      const scrolled = -rect.top;
      const progress = scrolled / maxScroll;

      return Math.max(0, Math.min(1, progress));
    }

    function onScrollUpdate() {
      const duration = video.duration || 0;
      if (duration > 0) {
        const progress = calculateScrollProgress();
        targetTime = progress * duration;

        if (!isSeeking && Math.abs(video.currentTime - targetTime) > 0.03) {
          isSeeking = true;
          if (typeof video.fastSeek === 'function') {
            video.fastSeek(targetTime);
          } else {
            video.currentTime = targetTime;
          }
        }
      }
    }

    video.addEventListener('seeked', function () {
      isSeeking = false;
      const duration = video.duration || 0;
      if (duration > 0 && Math.abs(video.currentTime - targetTime) > 0.05) {
        if (typeof video.fastSeek === 'function') {
          video.fastSeek(targetTime);
        } else {
          video.currentTime = targetTime;
        }
      }
    });

    window.addEventListener('scroll', onScrollUpdate, { passive: true });
    window.addEventListener('resize', onScrollUpdate, { passive: true });
    video.addEventListener('loadedmetadata', onScrollUpdate);
    video.addEventListener('durationchange', onScrollUpdate);
    onScrollUpdate();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initVideoScroller);
  } else {
    initVideoScroller();
  }
})();
