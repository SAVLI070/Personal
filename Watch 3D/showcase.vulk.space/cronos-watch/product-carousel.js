/**
 * Luxury Interactive Components:
 * 1. Hero Phase 2 Horizontal Product Card Scrubber (Right-to-Left Scroll Scrub)
 * 2. Milestone Bento Box Grid (Line-by-Line Scroll Scrubbed Arrival)
 * Designed for CRONOS Watch, LUMIÈRE Gems, and NOCTIS Parfum
 */
(function () {
  'use strict';

  // Catalog Data for Hero Phase 2 Horizontal Scrubber
  const CATALOGS = {
    watch: {
      eyebrow: 'Collections',
      title: 'Measures of High Horology',
      swatches: ['Rose Gold', 'Titanium', 'Skeleton', 'Steel', 'Ceramic'],
      products: [
        {
          id: 'watch-1',
          name: 'Grandmaster Chronograph Slate Dial',
          subtitle: '18k Rose Gold · Automatic In-House Calibre',
          price: '₹ 2,45,000.00',
          emiText: 'or ₹20,416/Month',
          emiBadge: 'Reserve Piece',
          img: './assets/products/prod1.png',
          category: 'Rose Gold'
        },
        {
          id: 'watch-2',
          name: 'Flying Tourbillon Grade 5 Titanium',
          subtitle: 'Anthracite Bezel · 72h Power Reserve',
          price: '₹ 11,80,000.00',
          emiText: 'or ₹98,333/Month',
          emiBadge: 'Bespoke Order',
          img: './assets/products/prod2.png',
          category: 'Titanium'
        },
        {
          id: 'watch-3',
          name: 'Atelier Skeleton Platinum Manual',
          subtitle: 'Hand-Bevelled Bridges · Sapphire Back',
          price: '₹ 4,80,000.00',
          emiText: 'or ₹40,000/Month',
          emiBadge: 'Private Alloc.',
          img: './assets/products/prod3.png',
          category: 'Skeleton'
        },
        {
          id: 'watch-4',
          name: 'Classique Monopusher Brown Dial',
          subtitle: 'Havana Sunburst · Hand-Stitched Leather',
          price: '₹ 1,92,000.00',
          emiText: 'or ₹16,000/Month',
          emiBadge: 'Complimentary',
          img: './assets/products/prod4.png',
          category: 'Steel'
        },
        {
          id: 'watch-5',
          name: 'Dual-Time GMT Obsidian Ceramic',
          subtitle: 'Super-LumiNova · Grade 5 Titanium Core',
          price: '₹ 2,89,000.00',
          emiText: 'or ₹24,083/Month',
          emiBadge: 'Concierge',
          img: './assets/products/prod5.png',
          category: 'Ceramic'
        }
      ]
    },
    jewellery: {
      eyebrow: 'High Jewellery',
      title: 'Masterpieces in Brilliance',
      swatches: ['Brilliant', 'Rivière', 'Emerald', 'Cascades', 'Yellow Vivid'],
      products: [
        {
          id: 'jewel-1',
          name: 'The Solitaire Brilliant 3.0ct Platinum',
          subtitle: 'D-Flawless Center Stone · Six-Prong Crown',
          price: '₹ 3,40,000.00',
          emiText: 'or ₹28,333/Month',
          emiBadge: 'GIA Certified',
          img: './assets/products/prod1.png',
          category: 'Brilliant'
        },
        {
          id: 'jewel-2',
          name: 'The Rivière Diamond Line 18k White Gold',
          subtitle: '15ct Total Pavé · Seamless Articulation',
          price: '₹ 8,50,000.00',
          emiText: 'or ₹70,833/Month',
          emiBadge: 'Private Vault',
          img: './assets/products/prod2.png',
          category: 'Rivière'
        },
        {
          id: 'jewel-3',
          name: 'The Emerald Cut Halo Diamond Ring',
          subtitle: 'Radiant Micropavé · Platinum Shank',
          price: '₹ 4,20,000.00',
          emiText: 'or ₹35,000/Month',
          emiBadge: 'Atelier Setting',
          img: './assets/products/prod3.png',
          category: 'Emerald'
        },
        {
          id: 'jewel-4',
          name: 'The Haute Cascade Chandelier Drops',
          subtitle: 'Pear-Cut Diamonds · 18k White Gold',
          price: '₹ 6,80,000.00',
          emiText: 'or ₹56,666/Month',
          emiBadge: 'High Jewellery',
          img: './assets/products/prod4.png',
          category: 'Cascades'
        },
        {
          id: 'jewel-5',
          name: 'The Vault Marquise Vivid Yellow Diamond',
          subtitle: 'Fancy Vivid Yellow · Trapezoid Accents',
          price: '₹ 12,00,000.00',
          emiText: 'or ₹1,00,000/Month',
          emiBadge: 'Rare Mineral',
          img: './assets/products/prod5.png',
          category: 'Yellow Vivid'
        }
      ]
    },
    perfume: {
      eyebrow: 'Haute Parfumerie',
      title: 'Extracts of Scent and Shadow',
      swatches: ['Grand Flacon', 'Oud Noir', 'Aurora Rose', 'Santal', 'Couture'],
      products: [
        {
          id: 'perf-1',
          name: 'Noctis Grand Flacon 100ml Extrait',
          subtitle: 'Jasmine Sambac & Golden Amber Extrait',
          price: '₹ 38,000.00',
          emiText: 'or ₹3,166/Month',
          emiBadge: 'Bespoke Bottle',
          img: './assets/products/prod1.png',
          category: 'Grand Flacon'
        },
        {
          id: 'perf-2',
          name: 'Oud Immortel 100ml Pure Distillation',
          subtitle: 'Aged Wild Agarwood & Incense Smoke',
          price: '₹ 44,000.00',
          emiText: 'or ₹3,666/Month',
          emiBadge: 'Rare Batch',
          img: './assets/products/prod2.png',
          category: 'Oud Noir'
        },
        {
          id: 'perf-3',
          name: 'Rose de Minuit 100ml Vintage Nectar',
          subtitle: 'Grasse May Rose & Black Currant Nectar',
          price: '₹ 36,000.00',
          emiText: 'or ₹3,000/Month',
          emiBadge: 'Limited Harvest',
          img: './assets/products/prod3.png',
          category: 'Aurora Rose'
        },
        {
          id: 'perf-4',
          name: 'Santal Blanc 100ml Frosted Flacon',
          subtitle: 'Mysore Sandalwood & White Cardamom',
          price: '₹ 39,000.00',
          emiText: 'or ₹3,250/Month',
          emiBadge: 'Atelier Blend',
          img: './assets/products/prod4.png',
          category: 'Santal'
        },
        {
          id: 'perf-5',
          name: 'Couture Extrait 50ml with Silk Tassel',
          subtitle: 'Numbered Edition · Black Silk Flacon',
          price: '₹ 56,000.00',
          emiText: 'or ₹4,666/Month',
          emiBadge: 'Artisan Crafted',
          img: './assets/products/prod5.png',
          category: 'Couture'
        }
      ]
    }
  };

  // Bento Scroll Trigger Configurations
  // Watch: starts at "Read Closely" (0.46), finishes line-by-line arrival before "Finished, Forever" (0.78)
  // Jewellery: starts at "Set By Hand" (0.60), finishes line-by-line arrival before "Kept and Treasured" (0.78)
  // Perfume: starts at "An Evening Ritual" (0.46), finishes line-by-line arrival before "A Signature, Sealed" (0.78)
  const BENTO_CONFIG = {
    watch: {
      start: 0.46,
      settle: 0.74,
      end: 0.77
    },
    jewellery: {
      start: 0.60,
      settle: 0.74,
      end: 0.77
    },
    perfume: {
      start: 0.46,
      settle: 0.74,
      end: 0.77
    }
  };

  // Bento Content Data per showcase
  const BENTO_DATA = {
    watch: {
      row1: {
        card1: {
          eyebrow: 'HAUTE HORLOGERIE',
          title: 'Curated Luxury Watches, Guaranteed <span class="bento-gold-italic">Authentic</span>',
          sub: 'Authorized brands. Expert guidance. A boutique experience.'
        },
        card2: {
          title: 'Concord Collection',
          linkText: 'Explore',
          linkHref: '#enquire',
          img: './g2.jpg'
        }
      },
      row2: {
        card1: {
          title: 'For Her',
          linkText: 'Explore Watches',
          linkHref: '#enquire',
          img: './assets/products/prod4.jpg'
        },
        card2: {
          title: 'For Him',
          linkText: 'Explore Watches',
          linkHref: '#enquire',
          img: './assets/products/prod1.jpg'
        }
      },
      row3: [
        {
          title: 'Automatic Watches',
          linkText: 'Explore',
          linkHref: '#enquire',
          img: './assets/products/prod2.jpg'
        },
        {
          title: 'Limited Editions',
          linkText: 'Explore',
          linkHref: '#enquire',
          img: './assets/products/prod3.jpg'
        },
        {
          title: 'New Arrivals',
          linkText: 'Explore',
          linkHref: '#enquire',
          img: './assets/products/prod5.jpg'
        }
      ]
    },
    jewellery: {
      row1: {
        card1: {
          eyebrow: 'HAUTE JOAILLERIE',
          title: 'Curated Fine Jewellery, Guaranteed <span class="bento-gold-italic">Flawless</span>',
          sub: 'Conflict-free diamonds. Master setters. An intimate salon experience.'
        },
        card2: {
          title: 'Solitaire Suite',
          linkText: 'Explore',
          linkHref: '#enquire',
          img: './g1.jpg'
        }
      },
      row2: {
        card1: {
          title: 'For Her',
          linkText: 'Explore Jewellery',
          linkHref: '#enquire',
          img: './assets/products/prod1.jpg'
        },
        card2: {
          title: 'For Eternity',
          linkText: 'Explore Jewellery',
          linkHref: '#enquire',
          img: './assets/products/prod2.jpg'
        }
      },
      row3: [
        {
          title: 'Diamond Pavé',
          linkText: 'Explore',
          linkHref: '#enquire',
          img: './assets/products/prod3.jpg'
        },
        {
          title: 'Vault Editions',
          linkText: 'Explore',
          linkHref: '#enquire',
          img: './assets/products/prod4.jpg'
        },
        {
          title: 'New Arrivals',
          linkText: 'Explore',
          linkHref: '#enquire',
          img: './assets/products/prod5.jpg'
        }
      ]
    },
    perfume: {
      row1: {
        card1: {
          eyebrow: 'HAUTE PARFUMERIE',
          title: 'Curated Rare Scents, Guaranteed <span class="bento-gold-italic">Pure Extrait</span>',
          sub: 'Aged extractions. Hand-cut crystal flacons. An olfactory signature.'
        },
        card2: {
          title: 'Midnight Collection',
          linkText: 'Explore',
          linkHref: '#enquire',
          img: './g2.jpg'
        }
      },
      row2: {
        card1: {
          title: 'Pour Femme',
          linkText: 'Explore Scents',
          linkHref: '#enquire',
          img: './assets/products/prod3.jpg'
        },
        card2: {
          title: 'Pour Homme',
          linkText: 'Explore Scents',
          linkHref: '#enquire',
          img: './assets/products/prod2.jpg'
        }
      },
      row3: [
        {
          title: 'Grand Flacons',
          linkText: 'Explore',
          linkHref: '#enquire',
          img: './assets/products/prod1.jpg'
        },
        {
          title: 'Limited Harvest',
          linkText: 'Explore',
          linkHref: '#enquire',
          img: './assets/products/prod4.jpg'
        },
        {
          title: 'New Arrivals',
          linkText: 'Explore',
          linkHref: '#enquire',
          img: './assets/products/prod5.jpg'
        }
      ]
    }
  };

  function detectCatalogType() {
    const p = window.location.pathname.toLowerCase();
    const t = document.title.toLowerCase();
    if (p.includes('lumiere') || t.includes('lumière') || t.includes('jewelry') || t.includes('gem')) return 'jewellery';
    if (p.includes('noctis') || t.includes('noctis') || t.includes('parfum') || t.includes('perfume')) return 'perfume';
    return 'watch';
  }

  // 1. Setup Hero Milestone Scrubbing Overlay (Phase 2 Right-to-Left Scroll Scrub)
  function setupHeroMilestoneScrubber() {
    const stage = document.querySelector('.stage') || document.querySelector('#top .stage');
    if (!stage) return;
    if (stage.querySelector('#hero-product-scrub')) return;

    const catalogType = detectCatalogType();
    const catalog = CATALOGS[catalogType];

    const overlay = document.createElement('div');
    overlay.id = 'hero-product-scrub';
    overlay.className = 'hero-scrub-overlay';
    overlay.innerHTML = `
      <div class="hero-scrub-header">
        <span class="eyebrow">${catalog.eyebrow}</span>
        <h2>${catalog.title}</h2>
      </div>
      <div class="hero-scrub-track" id="hero-scrub-track">
        ${catalog.products.map((prod, idx) => `
          <article class="product-card" data-index="${idx}">
            <button class="product-card-wishlist" aria-label="Add to Wishlist" data-id="hero-${prod.id}">
              <svg viewBox="0 0 24 24">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </button>
            <div class="product-card-img-wrap">
              <img src="${prod.img}" onerror="if(!this.dataset.fb){this.dataset.fb=1;this.src=this.src.replace('.png','.jpg');}" alt="${prod.name}" loading="lazy" />
            </div>
            <div class="product-card-info">
              <div class="product-card-title">${prod.name}</div>
              <div class="product-card-subtitle">${prod.subtitle}</div>
              <div class="product-card-price-row">
                <span class="product-card-price">${prod.price}</span>
              </div>
              <div class="product-card-badge-row">
                <span class="product-card-emi-text">${prod.emiText}</span>
                <span class="product-card-emi-pill">${prod.emiBadge}</span>
              </div>
            </div>
          </article>
        `).join('')}
      </div>
    `;

    stage.appendChild(overlay);

    const wishlistBtns = overlay.querySelectorAll('.product-card-wishlist');
    wishlistBtns.forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation();
        btn.classList.toggle('active');
      });
    });

    const heroTrack = document.getElementById('hero-scrub-track');
    const heroSection = document.getElementById('top') || document.querySelector('.hero');
    let heroCurrentX = window.innerWidth;
    let heroTargetX = window.innerWidth;

    function updateHeroScrub() {
      if (!heroSection || !heroTrack) return;
      const rect = heroSection.getBoundingClientRect();
      const heroDist = heroSection.offsetHeight - window.innerHeight;
      if (heroDist <= 0) return;

      const p = Math.max(0, Math.min(1, -rect.top / heroDist));

      // Phase 2 Range: 0.16 to 0.38
      if (p >= 0.16 && p <= 0.38) {
        overlay.classList.add('visible');
        stage.classList.add('hero-scrub-active');

        // Sub-progress 0.0 -> 1.0
        const subP = (p - 0.16) / (0.38 - 0.16);

        const totalWidth = heroTrack.scrollWidth;
        const maxScrollDist = totalWidth - window.innerWidth + 140;

        // Slide Right to Left tied to scroll:
        heroTargetX = (window.innerWidth * 0.4) - (subP * (maxScrollDist + window.innerWidth * 0.4));
      } else {
        overlay.classList.remove('visible');
        stage.classList.remove('hero-scrub-active');
        if (p < 0.16) {
          heroTargetX = window.innerWidth;
        } else {
          heroTargetX = -heroTrack.scrollWidth;
        }
      }
    }

    let isHeroLoopRunning = false;

    function heroRenderLoop() {
      if (!heroTrack || !document.contains(heroTrack)) {
        isHeroLoopRunning = false;
        return;
      }
      
      const diff = heroTargetX - heroCurrentX;
      heroCurrentX += diff * 0.28;
      
      if (Math.abs(diff) < 0.15) {
        heroCurrentX = heroTargetX;
      }
      
      heroTrack.style.transform = `translate3d(${heroCurrentX.toFixed(1)}px, 0, 0)`;

      if (Math.abs(heroTargetX - heroCurrentX) >= 0.15 || overlay.classList.contains('visible')) {
        requestAnimationFrame(heroRenderLoop);
      } else {
        isHeroLoopRunning = false;
      }
    }

    function wakeHeroLoop() {
      if (!isHeroLoopRunning) {
        isHeroLoopRunning = true;
        requestAnimationFrame(heroRenderLoop);
      }
    }

    window.addEventListener('scroll', () => { updateHeroScrub(); wakeHeroLoop(); }, { passive: true });
    window.addEventListener('resize', () => { updateHeroScrub(); wakeHeroLoop(); }, { passive: true });
    updateHeroScrub();
    wakeHeroLoop();
  }

  // 2. Setup Bento Box Section (Line-by-Line Staggered Arrival Scrubbed by Scroll)
  function setupBentoBoxScrubber() {
    const stage = document.querySelector('.stage') || document.querySelector('#top .stage');
    if (!stage) return;
    if (stage.querySelector('#bento-box-overlay')) return;

    const catalogType = detectCatalogType();
    const cfg = BENTO_CONFIG[catalogType];
    const data = BENTO_DATA[catalogType];

    const overlay = document.createElement('div');
    overlay.id = 'bento-box-overlay';
    overlay.className = 'bento-box-overlay';
    overlay.innerHTML = `
      <div class="bento-stage-container">
        <!-- Line 1 -->
        <div class="bento-row bento-row-1" id="bento-row-1">
          <div class="bento-card bento-hero-card">
            <span class="bento-eyebrow">${data.row1.card1.eyebrow}</span>
            <h2 class="bento-hero-title">${data.row1.card1.title}</h2>
            <p class="bento-hero-sub">${data.row1.card1.sub}</p>
          </div>
          <div class="bento-card bento-img-card">
            <div class="bento-img-wrap">
              <img src="${data.row1.card2.img}" alt="${data.row1.card2.title}" loading="lazy" />
            </div>
            <div class="bento-card-gradient"></div>
            <div class="bento-card-content">
              <h3 class="bento-card-title">${data.row1.card2.title}</h3>
              <a href="${data.row1.card2.linkHref}" class="bento-link">${data.row1.card2.linkText} <span class="bento-arrow">→</span></a>
            </div>
          </div>
        </div>

        <!-- Line 2 -->
        <div class="bento-row bento-row-2" id="bento-row-2">
          <div class="bento-card bento-img-card">
            <div class="bento-img-wrap">
              <img src="${data.row2.card1.img}" alt="${data.row2.card1.title}" loading="lazy" />
            </div>
            <div class="bento-card-gradient"></div>
            <div class="bento-card-content">
              <h3 class="bento-card-title">${data.row2.card1.title}</h3>
              <a href="${data.row2.card1.linkHref}" class="bento-link">${data.row2.card1.linkText} <span class="bento-arrow">→</span></a>
            </div>
          </div>
          <div class="bento-card bento-img-card">
            <div class="bento-img-wrap">
              <img src="${data.row2.card2.img}" alt="${data.row2.card2.title}" loading="lazy" />
            </div>
            <div class="bento-card-gradient"></div>
            <div class="bento-card-content">
              <h3 class="bento-card-title">${data.row2.card2.title}</h3>
              <a href="${data.row2.card2.linkHref}" class="bento-link">${data.row2.card2.linkText} <span class="bento-arrow">→</span></a>
            </div>
          </div>
        </div>

        <!-- Line 3 -->
        <div class="bento-row bento-row-3" id="bento-row-3">
          ${data.row3.map(card => `
            <div class="bento-card bento-img-card">
              <div class="bento-img-wrap">
                <img src="${card.img}" alt="${card.title}" loading="lazy" />
              </div>
              <div class="bento-card-gradient"></div>
              <div class="bento-card-content">
                <h3 class="bento-card-title">${card.title}</h3>
                <a href="${card.linkHref}" class="bento-link">${card.linkText} <span class="bento-arrow">→</span></a>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    stage.appendChild(overlay);

    const row1 = overlay.querySelector('#bento-row-1');
    const row2 = overlay.querySelector('#bento-row-2');
    const row3 = overlay.querySelector('#bento-row-3');

    const heroSection = document.getElementById('top') || document.querySelector('.hero');

    // Values for smooth LERP scrubbing
    let curE1 = 0, curE2 = 0, curE3 = 0, curMaster = 0;
    let targetE1 = 0, targetE2 = 0, targetE3 = 0, targetMaster = 0;
    let isBentoLoopRunning = false;

    function updateBentoScrub() {
      if (!heroSection) return;
      const rect = heroSection.getBoundingClientRect();
      const heroDist = heroSection.offsetHeight - window.innerHeight;
      if (heroDist <= 0) return;

      const p = Math.max(0, Math.min(1, -rect.top / heroDist));

      if (p >= cfg.start && p <= cfg.end) {
        stage.classList.add('bento-active');
        overlay.classList.add('visible');

        // Check if in arriving phase or exiting phase
        if (p <= cfg.settle) {
          targetMaster = 1;
          const s = (p - cfg.start) / (cfg.settle - cfg.start); // 0.0 -> 1.0

          // Line 1: 0.00 -> 0.36
          const s1 = Math.max(0, Math.min(1, s / 0.36));
          targetE1 = s1 * (2 - s1);

          // Line 2: 0.30 -> 0.68
          const s2 = Math.max(0, Math.min(1, (s - 0.30) / 0.38));
          targetE2 = s2 * (2 - s2);

          // Line 3: 0.62 -> 1.00
          const s3 = Math.max(0, Math.min(1, (s - 0.62) / 0.38));
          targetE3 = s3 * (2 - s3);
        } else {
          // All lines fully arrived
          targetE1 = 1;
          targetE2 = 1;
          targetE3 = 1;

          // Smooth fade out before next milestone starts (at 0.78)
          const exitP = (p - cfg.settle) / (cfg.end - cfg.settle); // 0.0 -> 1.0
          targetMaster = Math.max(0, 1 - exitP);
        }
      } else {
        stage.classList.remove('bento-active');
        overlay.classList.remove('visible');
        targetMaster = 0;
        if (p < cfg.start) {
          targetE1 = 0;
          targetE2 = 0;
          targetE3 = 0;
        } else {
          targetE1 = 1;
          targetE2 = 1;
          targetE3 = 1;
        }
      }
    }

    function bentoRenderLoop() {
      if (!overlay || !document.contains(overlay)) {
        isBentoLoopRunning = false;
        return;
      }

      // Fast, responsive dampening without sluggish lag
      curMaster += (targetMaster - curMaster) * 0.28;
      curE1 += (targetE1 - curE1) * 0.25;
      curE2 += (targetE2 - curE2) * 0.25;
      curE3 += (targetE3 - curE3) * 0.25;

      if (curMaster < 0.003) {
        overlay.style.opacity = '0';
        overlay.style.pointerEvents = 'none';
        overlay.style.visibility = 'hidden';
      } else {
        overlay.style.visibility = 'visible';
        overlay.style.opacity = curMaster.toFixed(3);
        overlay.style.pointerEvents = curMaster > 0.4 ? 'auto' : 'none';
        overlay.style.transform = `translate3d(0, ${((1 - curMaster) * -16).toFixed(1)}px, 0)`;

        // Line 1: Pure GPU transform & opacity (NO rasterizing blur filter)
        row1.style.opacity = curE1.toFixed(3);
        row1.style.transform = `translate3d(0, ${((1 - curE1) * 36).toFixed(1)}px, 0) scale(${(0.97 + 0.03 * curE1).toFixed(3)})`;

        // Line 2: Pure GPU transform & opacity
        row2.style.opacity = curE2.toFixed(3);
        row2.style.transform = `translate3d(0, ${((1 - curE2) * 36).toFixed(1)}px, 0) scale(${(0.97 + 0.03 * curE2).toFixed(3)})`;

        // Line 3: Pure GPU transform & opacity
        row3.style.opacity = curE3.toFixed(3);
        row3.style.transform = `translate3d(0, ${((1 - curE3) * 36).toFixed(1)}px, 0) scale(${(0.97 + 0.03 * curE3).toFixed(3)})`;
      }

      const isStillAnimating = Math.abs(targetMaster - curMaster) >= 0.003 ||
                               Math.abs(targetE1 - curE1) >= 0.003 ||
                               Math.abs(targetE2 - curE2) >= 0.003 ||
                               Math.abs(targetE3 - curE3) >= 0.003 ||
                               overlay.classList.contains('visible');

      if (isStillAnimating) {
        requestAnimationFrame(bentoRenderLoop);
      } else {
        isBentoLoopRunning = false;
      }
    }

    function wakeBentoLoop() {
      if (!isBentoLoopRunning) {
        isBentoLoopRunning = true;
        requestAnimationFrame(bentoRenderLoop);
      }
    }

    window.addEventListener('scroll', () => { updateBentoScrub(); wakeBentoLoop(); }, { passive: true });
    window.addEventListener('resize', () => { updateBentoScrub(); wakeBentoLoop(); }, { passive: true });
    updateBentoScrub();
    wakeBentoLoop();
  }

  // Ensure scrubbers mount cleanly
  function init() {
    setupHeroMilestoneScrubber();
    setupBentoBoxScrubber();

    const interval = setInterval(() => {
      setupHeroMilestoneScrubber();
      setupBentoBoxScrubber();
    }, 200);
    setTimeout(() => clearInterval(interval), 4000);

    // Mutation observer to re-inject in stage if React re-renders root
    const observer = new MutationObserver(() => {
      const stage = document.querySelector('.stage');
      if (stage) {
        if (!stage.querySelector('#hero-product-scrub')) setupHeroMilestoneScrubber();
        if (!stage.querySelector('#bento-box-overlay')) setupBentoBoxScrubber();
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
