import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

const GOLD = '#e5be10';
const GOLD_DEEP = '#c9a800';
const INK = '#1a1a1a';

type Category = 'All' | 'Campus' | 'Academics' | 'Sports' | 'Cultural' | 'Convocation';

interface GalleryImage {
  id: number;
  src: string;
  category: Exclude<Category, 'All'>;
  caption: string;
  height: number; // controls masonry rhythm
}

// TODO: replace with real campus photography — these are placeholders.
const IMAGES: GalleryImage[] = [
  { id: 1, src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=900&q=80&auto=format&fit=crop', category: 'Campus', caption: 'The main library reading hall', height: 380 },
  { id: 2, src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=900&q=80&auto=format&fit=crop', category: 'Convocation', caption: 'Convocation day, 2025 batch', height: 280 },
  { id: 3, src: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=900&q=80&auto=format&fit=crop', category: 'Campus', caption: 'The heritage academic block', height: 440 },
  { id: 4, src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=900&q=80&auto=format&fit=crop', category: 'Academics', caption: 'Students at a seminar', height: 300 },
  { id: 5, src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=900&q=80&auto=format&fit=crop', category: 'Academics', caption: 'A lecture in progress', height: 360 },
  { id: 6, src: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=900&q=80&auto=format&fit=crop', category: 'Campus', caption: 'Students between classes', height: 260 },
  { id: 7, src: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=900&q=80&auto=format&fit=crop', category: 'Sports', caption: 'Annual sports meet', height: 420 },
  { id: 8, src: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=900&q=80&auto=format&fit=crop', category: 'Sports', caption: 'Athletics track day', height: 300 },
  { id: 9, src: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=900&q=80&auto=format&fit=crop', category: 'Cultural', caption: 'Cultural fest performance', height: 340 },
  { id: 10, src: 'https://images.unsplash.com/photo-1470229538611-16ba8c7ffbd7?w=900&q=80&auto=format&fit=crop', category: 'Cultural', caption: 'Traditional dance evening', height: 400 },
  { id: 11, src: 'https://images.unsplash.com/photo-1523289333742-be1143f6b766?w=900&q=80&auto=format&fit=crop', category: 'Campus', caption: 'The central courtyard', height: 300 },
  { id: 12, src: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=900&q=80&auto=format&fit=crop', category: 'Academics', caption: 'Research lab session', height: 380 },
  { id: 13, src: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=900&q=80&auto=format&fit=crop', category: 'Convocation', caption: 'Degrees being conferred', height: 260 },
  { id: 14, src: 'https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=900&q=80&auto=format&fit=crop', category: 'Sports', caption: 'Inter-college tournament', height: 340 },
  { id: 15, src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=900&q=80&auto=format&fit=crop', category: 'Cultural', caption: 'Annual day celebrations', height: 420 },
  { id: 16, src: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?w=900&q=80&auto=format&fit=crop', category: 'Campus', caption: 'Evening at the quad', height: 300 },
];

const CATEGORIES: Category[] = ['All', 'Campus', 'Academics', 'Sports', 'Cultural', 'Convocation'];

const Photogallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const filtered = activeCategory === 'All' ? IMAGES : IMAGES.filter((img) => img.category === activeCategory);

  const openAt = (idx: number) => {
    setDirection(0);
    setSelectedIndex(idx);
  };
  const close = useCallback(() => setSelectedIndex(null), []);

  const goNext = useCallback(() => {
    setDirection(1);
    setSelectedIndex((i) => (i === null ? null : (i + 1) % filtered.length));
  }, [filtered.length]);

  const goPrev = useCallback(() => {
    setDirection(-1);
    setSelectedIndex((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length));
  }, [filtered.length]);

  // Keyboard controls
  useEffect(() => {
    if (selectedIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [selectedIndex, close, goNext, goPrev]);

  const onTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 50) { dx < 0 ? goNext() : goPrev(); }
    touchStartX.current = null;
  };

  const current = selectedIndex !== null ? filtered[selectedIndex] : null;

  const slideVariants = {
    enter: (d: number) => ({ x: d > 0 ? 80 : d < 0 ? -80 : 0, opacity: 0, scale: 0.98 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (d: number) => ({ x: d > 0 ? -80 : d < 0 ? 80 : 0, opacity: 0, scale: 0.98 }),
  };

  return (
    <div style={{ background: '#ffffff', minHeight: '100vh', fontFamily: 'Georgia, serif' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&display=swap');

        .gal-hero { position: relative; overflow: hidden; background: ${INK}; padding: 110px 24px 80px; text-align: center; }
        .gal-hero-glow-a { position:absolute; width:520px; height:520px; top:-220px; left:-140px; border-radius:50%; background:radial-gradient(circle,rgba(229,190,16,0.14),transparent 70%); pointer-events:none; }
        .gal-hero-glow-b { position:absolute; width:420px; height:420px; bottom:-200px; right:-120px; border-radius:50%; background:radial-gradient(circle,rgba(229,190,16,0.10),transparent 70%); pointer-events:none; }
        .gal-hero-word { position:absolute; top:6%; left:50%; transform:translateX(-50%); font-size:clamp(80px,15vw,200px); font-weight:800; color:transparent; -webkit-text-stroke:1px rgba(255,255,255,0.05); white-space:nowrap; pointer-events:none; }

        .gal-filters { display:flex; flex-wrap:wrap; justify-content:center; gap:10px; margin: 0 auto 48px; max-width: 900px; padding: 0 20px; }
        .gal-filter-btn { position:relative; font-family:sans-serif; font-size:12.5px; font-weight:700; letter-spacing:0.05em; padding:10px 20px; border-radius:30px; border:1.5px solid #e6e6e6; background:#fff; color:#666; cursor:pointer; transition: color 0.25s, border-color 0.25s; }
        .gal-filter-btn.active { color:${INK}; border-color: transparent; }
        .gal-filter-pill { position:absolute; inset:0; border-radius:30px; background: linear-gradient(135deg,${GOLD},${GOLD_DEEP}); z-index:-1; box-shadow: 0 8px 20px rgba(229,190,16,0.35); }

        .gal-masonry { column-count: 1; column-gap: 20px; max-width: 1280px; margin: 0 auto; padding: 0 24px 100px; }
        @media (min-width: 560px) { .gal-masonry { column-count: 2; } }
        @media (min-width: 900px) { .gal-masonry { column-count: 3; } }
        @media (min-width: 1200px) { .gal-masonry { column-count: 4; } }

        .gal-item { break-inside: avoid; margin-bottom: 20px; border-radius: 16px; overflow: hidden; position: relative; cursor: pointer; box-shadow: 0 2px 14px rgba(0,0,0,0.06); border: 1px solid #f0f0f0; }
        .gal-item img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.7s cubic-bezier(.19,1,.22,1); }
        .gal-item:hover img { transform: scale(1.07); }
        .gal-item-overlay { position:absolute; inset:0; background: linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.05) 45%, transparent 65%); opacity: 0; transition: opacity 0.3s; display:flex; flex-direction:column; justify-content:flex-end; padding: 16px; }
        .gal-item:hover .gal-item-overlay { opacity: 1; }
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
      <motion.section
        className="gal-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="gal-hero-word">GALLERY</div>
        <div className="gal-hero-glow-a" />
        <div className="gal-hero-glow-b" />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <div style={{ height: 1, width: 44, background: `linear-gradient(90deg,transparent,${GOLD})` }} />
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', fontFamily: 'sans-serif' }}>
              Govt. Tilak P.G. College · Katni
            </span>
            <div style={{ height: 1, width: 44, background: `linear-gradient(90deg,${GOLD},transparent)` }} />
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(40px,7vw,72px)', fontWeight: 800, color: '#fff', margin: '0 0 14px', lineHeight: 1.05 }}>
            Campus <span style={{ color: GOLD }}>Gallery</span>
          </h1>
          <p style={{ fontFamily: 'sans-serif', fontSize: 15, color: 'rgba(255,255,255,0.55)', maxWidth: 480, margin: '0 auto', lineHeight: 1.7 }}>
            Moments from our classrooms, playgrounds, festivals and convocations — a visual walk through campus life.
          </p>
        </div>
      </motion.section>

      {/* ── Filters ── */}
      <div className="gal-filters" style={{ marginTop: 40 }}>
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={`gal-filter-btn ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {activeCategory === cat && (
              <motion.span layoutId="gal-filter-pill" className="gal-filter-pill" transition={{ type: 'spring', stiffness: 400, damping: 32 }} />
            )}
            {cat}
          </button>
        ))}
      </div>

      {/* ── Masonry grid ── */}
      <motion.div layout className="gal-masonry">
        <AnimatePresence>
          {filtered.map((img, idx) => (
            <motion.div
              key={img.id}
              layout
              className="gal-item"
              style={{ height: img.height }}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.45, delay: (idx % 8) * 0.04, ease: [0.19, 1, 0.22, 1] }}
              onClick={() => openAt(idx)}
              whileHover={{ y: -4 }}
            >
              <img src={img.src} alt={img.caption} loading="lazy" />
              <div className="gal-item-overlay">
                <div style={{ fontFamily: 'sans-serif', fontSize: 9, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: GOLD, marginBottom: 4 }}>
                  {img.category}
                </div>
                <div style={{ fontFamily: 'sans-serif', fontSize: 13, fontWeight: 600, color: '#fff', lineHeight: 1.4 }}>
                  {img.caption}
                </div>
              </div>
              <div className="gal-item-zoom"><ZoomIn size={15} /></div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

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
            <button
              className="gal-lb-nav gal-lb-prev"
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              aria-label="Previous image"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              className="gal-lb-nav gal-lb-next"
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              aria-label="Next image"
            >
              <ChevronRight size={22} />
            </button>

            <div className="gal-lb-counter">{selectedIndex + 1} / {filtered.length}</div>

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
                {current.category}
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

export default Photogallery