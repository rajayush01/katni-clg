import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { X, ChevronLeft, ChevronRight, ZoomIn, ArrowLeft } from 'lucide-react';
import {
  CategorySlug,
  CATEGORY_LABELS,
  // CATEGORY_TAGLINES,
  CATEGORY_ORDER,
  getImagesByCategory,
} from '@/data/galleryData';

const GOLD = '#e5be10';
const INK = '#1a1a1a';

const isValidCategory = (val: string | undefined): val is CategorySlug =>
  !!val && (CATEGORY_ORDER as string[]).includes(val);

const GalleryCategoryPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState(0);
  const touchStartX = useRef<number | null>(null);

  // Guard against an unknown / mistyped category in the URL.
  useEffect(() => {
    if (!isValidCategory(category)) {
      navigate('/gallery', { replace: true });
    }
  }, [category, navigate]);

  const images = useMemo(
    () => (isValidCategory(category) ? getImagesByCategory(category) : []),
    [category]
  );

  const openAt = (idx: number) => { setDirection(0); setSelectedIndex(idx); };
  const close = useCallback(() => setSelectedIndex(null), []);
  const goNext = useCallback(() => { setDirection(1); setSelectedIndex((i) => (i === null ? null : (i + 1) % images.length)); }, [images.length]);
  const goPrev = useCallback(() => { setDirection(-1); setSelectedIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length)); }, [images.length]);

  useEffect(() => {
    if (selectedIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [selectedIndex, close, goNext, goPrev]);

  const onTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 50) { dx < 0 ? goNext() : goPrev(); }
    touchStartX.current = null;
  };

  const ROW_UNIT = 8;   // must match grid-auto-rows above
  const ROW_GAP = 20;   // must match the grid gap above

  const getSpan = (height: number) => Math.ceil((height + ROW_GAP) / (ROW_UNIT + ROW_GAP));

  const current = selectedIndex !== null ? images[selectedIndex] : null;

  const slideVariants = {
    enter: (d: number) => ({ x: d > 0 ? 80 : d < 0 ? -80 : 0, opacity: 0, scale: 0.98 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (d: number) => ({ x: d > 0 ? -80 : d < 0 ? 80 : 0, opacity: 0, scale: 0.98 }),
  };

  if (!isValidCategory(category)) return null; // redirecting via effect above

  const label = CATEGORY_LABELS[category];
  // const tagline = CATEGORY_TAGLINES[category];
  const otherCategories = CATEGORY_ORDER.filter((c) => c !== category);

  return (
    <div style={{ background: '#ffffff', minHeight: '100vh', fontFamily: 'Georgia, serif' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&display=swap');

        .gcp-hero { position: relative; overflow: hidden; background: ${INK}; padding: 90px 24px 70px; text-align: center; }
        .gcp-hero-glow-a { position:absolute; width:520px; height:520px; top:-220px; left:-140px; border-radius:50%; background:radial-gradient(circle,rgba(229,190,16,0.14),transparent 70%); pointer-events:none; }
        .gcp-hero-glow-b { position:absolute; width:420px; height:420px; bottom:-200px; right:-120px; border-radius:50%; background:radial-gradient(circle,rgba(229,190,16,0.10),transparent 70%); pointer-events:none; }

        .gcp-back { position:absolute; top:24px; left:24px; z-index:2; display:inline-flex; align-items:center; gap:8px; font-family:sans-serif; font-size:12px; font-weight:700; letter-spacing:0.06em; text-transform:uppercase; color:rgba(255,255,255,0.6); text-decoration:none; transition: color 0.2s; }
        .gcp-back:hover { color:${GOLD}; }

        .gcp-crumbs { display:flex; flex-wrap:wrap; justify-content:center; gap:8px; margin: 34px auto 6px; padding: 0 20px; }
        .gcp-crumb { font-family:sans-serif; font-size:12px; font-weight:600; letter-spacing:0.04em; color:#999; text-decoration:none; padding:8px 16px; border-radius:20px; border:1px solid #eee; transition: color 0.2s, border-color 0.2s, background 0.2s; }
        .gcp-crumb:hover { color:${INK}; border-color:#ddd; background:#fafafa; }

        .gal-masonry {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          grid-auto-rows: 8px;
          gap: 20px;
          max-width: 1280px;
          margin: 0 auto;
          padding: 36px 24px 100px;
        }
        @media (min-width: 560px) { .gal-masonry { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 900px) { .gal-masonry { grid-template-columns: repeat(3, 1fr); } }
        @media (min-width: 1200px) { .gal-masonry { grid-template-columns: repeat(4, 1fr); } }

        .gal-item { border-radius: 16px; overflow: hidden; position: relative; cursor: pointer; box-shadow: 0 2px 14px rgba(0,0,0,0.06); border: 1px solid #f0f0f0; }        .gal-item img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.7s cubic-bezier(.19,1,.22,1); }
        .gal-item:hover img { transform: scale(1.07); }
        .gal-item-overlay {
          position:absolute; inset:0;
          background: linear-gradient(to top, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.35) 35%, transparent 65%);
          opacity: 1; /* always visible now */
          transition: background 0.3s;
          display:flex; flex-direction:column; justify-content:flex-end; padding: 16px;
        }
        .gal-item:hover .gal-item-overlay {
          background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.15) 45%, transparent 70%);
        }
        .gal-item-zoom { position:absolute; top:12px; right:12px; width:32px; height:32px; border-radius:50%; background:rgba(255,255,255,0.15); backdrop-filter: blur(6px); border:1px solid rgba(255,255,255,0.3); display:flex; align-items:center; justify-content:center; color:#fff; opacity:0; transform: scale(0.8); transition: opacity 0.25s, transform 0.25s; }
        .gal-item:hover .gal-item-zoom { opacity: 1; transform: scale(1); }

        .gal-lb-overlay { position:fixed; inset:0; background:rgba(8,8,8,0.92); backdrop-filter: blur(14px); z-index:100; display:flex; align-items:center; justify-content:center; }
        .gal-lb-close { position:absolute; top:20px; right:20px; width:44px; height:44px; border-radius:50%; background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.18); color:#fff; display:flex; align-items:center; justify-content:center; cursor:pointer; transition: background 0.2s, transform 0.2s; z-index:5; }
        .gal-lb-close:hover { background:rgba(255,255,255,0.18); transform: rotate(90deg); }
        .gal-lb-nav { position:absolute; top:50%; transform:translateY(-50%); width:52px; height:52px; border-radius:50%; background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.18); color:#fff; display:flex; align-items:center; justify-content:center; cursor:pointer; transition: background 0.2s, transform 0.2s; z-index:5; }
        .gal-lb-nav:hover { background:rgba(229,190,16,0.9); color:${INK}; transform: translateY(-50%) scale(1.06); }
        .gal-lb-prev { left: 18px; }
        .gal-lb-next { right: 18px; }
        @media (max-width: 640px) { .gal-lb-nav { width:40px; height:40px; } .gal-lb-prev { left:8px; } .gal-lb-next { right:8px; } }

        .gal-lb-counter { position:absolute; top:24px; left:50%; transform:translateX(-50%); font-family:sans-serif; font-size:12px; letter-spacing:0.1em; color:rgba(255,255,255,0.7); background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.15); padding:6px 16px; border-radius:20px; z-index:5; }
        .gal-lb-caption { position:absolute; bottom:26px; left:50%; transform:translateX(-50%); text-align:center; max-width:88vw; }
      `}</style>

      {/* ── Hero ── */}
      <motion.section className="gcp-hero" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <Link to="/gallery" className="gcp-back"><ArrowLeft size={14} /> All Categories</Link>
        <div className="gcp-hero-glow-a" />
        <div className="gcp-hero-glow-b" />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <div style={{ height: 1, width: 44, background: `linear-gradient(90deg,transparent,${GOLD})` }} />
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', fontFamily: 'sans-serif' }}>
              Photo Gallery
            </span>
            <div style={{ height: 1, width: 44, background: `linear-gradient(90deg,${GOLD},transparent)` }} />
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(38px,6.5vw,64px)', fontWeight: 800, color: '#fff', margin: '0 0 12px', lineHeight: 1.08 }}>
            {label}
          </h1>
          
        </div>
      </motion.section>

      {/* ── Other categories ── */}
      <div className="gcp-crumbs">
        {otherCategories.map((c) => (
          <Link key={c} to={`/gallery/${c}`} className="gcp-crumb">{CATEGORY_LABELS[c]}</Link>
        ))}
      </div>

      {/* ── Masonry grid (this category only) ── */}
      <motion.div layout className="gal-masonry">
        <AnimatePresence>
          {images.map((img, idx) => (
            <motion.div
              key={img.id}
              layout
              className="gal-item"
              style={{ gridRowEnd: `span ${getSpan(img.height)}` }}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.45, delay: (idx % 8) * 0.04, ease: [0.19, 1, 0.22, 1] }}
              onClick={() => openAt(idx)}
              whileHover={{ y: -4 }}
            >
              <img src={img.src} alt={img.caption} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div className="gal-item-overlay">
                <div style={{ fontFamily: 'sans-serif', fontSize: 13, fontWeight: 600, color: '#fff', lineHeight: 1.4 }}>
                  {img.caption}
                </div>
              </div>
              <div className="gal-item-zoom"><ZoomIn size={15} /></div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {images.length === 0 && (
        <p style={{ textAlign: 'center', fontFamily: 'sans-serif', color: '#999', padding: '0 24px 100px' }}>
          No photos in this category yet.
        </p>
      )}

      {/* ── Fullscreen lightbox ── */}
      <AnimatePresence>
        {current && selectedIndex !== null && (
          <motion.div
            className="gal-lb-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={close}
          >
            <button className="gal-lb-close" onClick={close} aria-label="Close"><X size={18} /></button>
            <button className="gal-lb-nav gal-lb-prev" onClick={(e) => { e.stopPropagation(); goPrev(); }} aria-label="Previous image"><ChevronLeft size={22} /></button>
            <button className="gal-lb-nav gal-lb-next" onClick={(e) => { e.stopPropagation(); goNext(); }} aria-label="Next image"><ChevronRight size={22} /></button>

            <div className="gal-lb-counter">{selectedIndex + 1} / {images.length}</div>

            <div
              style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '80px 70px' }}
              onClick={(e) => e.stopPropagation()}
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
            >
              <AnimatePresence mode="wait" custom={direction}>
                <motion.img
                  key={current.id}
                  src={current.src}
                  alt={current.caption}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.35, ease: [0.19, 1, 0.22, 1] }}
                  style={{ maxWidth: '100%', maxHeight: '78vh', borderRadius: 12, boxShadow: '0 30px 90px rgba(0,0,0,0.5)', objectFit: 'contain' }}
                  draggable={false}
                />
              </AnimatePresence>
            </div>

            <div className="gal-lb-caption">
              <div style={{ fontFamily: 'sans-serif', fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: GOLD, marginBottom: 6 }}>
                {label}
              </div>
              <div style={{ fontFamily: 'sans-serif', fontSize: 14, color: 'rgba(255,255,255,0.85)' }}>
                {current.caption}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryCategoryPage;