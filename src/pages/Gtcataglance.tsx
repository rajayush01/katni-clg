import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import img1 from '../assets/images/c1.png';
import img2 from '../assets/images/c2.png';
import img3 from '../assets/images/c3.png';
import img4 from '../assets/images/c4.png';
import img5 from '../assets/images/c5.png';
import img6 from '../assets/images/c6.png';
import img7 from '../assets/images/c7.png';
import img8 from '../assets/images/c8.png';
const BROWN = '#753300';
const BROWN2 = '#9a4a10';
const GOLD = '#e5be10';
const CREAM = '#fdf8ee';
const MUTED = '#b08060';

const images = [
  { src: img1, alt: 'GTC Campus 1' },
  { src: img2, alt: 'GTC Campus 2' },
  { src: img3, alt: 'GTC Campus 3' },
  { src: img4, alt: 'GTC Campus 4' },
  { src: img5, alt: 'GTC Campus 5' },
  { src: img6, alt: 'GTC Campus 6' },
  { src: img7, alt: 'GTC Campus 7' },
  { src: img8, alt: 'GTC Campus 8' },
];

const DownloadIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: 14, height: 14 }}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="7 10 12 15 17 10"/>
    <line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
);

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 14, height: 14 }}>
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

const ChevronLeft = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#e5be10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 20, height: 20 }}>
    <polyline points="15 18 9 12 15 6"/>
  </svg>
);

const ChevronRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#e5be10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 20, height: 20 }}>
    <polyline points="9 18 15 12 9 6"/>
  </svg>
);

const Gtcataglance = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const openLb = (i: number) => setLightbox(i);
  const closeLb = () => setLightbox(null);
  const prev = useCallback(() => setLightbox(i => i !== null ? (i - 1 + images.length) % images.length : null), []);
  const next = useCallback(() => setLightbox(i => i !== null ? (i + 1) % images.length : null), []);

  useEffect(() => {
    if (lightbox !== null) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [lightbox]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (lightbox === null) return;
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'Escape') closeLb();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lightbox, prev, next]);

  const handleDownload = () => {
    if (lightbox === null) return;
    const a = document.createElement('a');
    a.href = images[lightbox].src;
    a.download = images[lightbox].alt.replace(/\s+/g, '-').toLowerCase() + '.jpg';
    a.target = '_blank';
    a.click();
  };

  return (
    <div style={{ fontFamily: 'Georgia, serif', background: '#ffffff', padding: '52px 20px 72px' }}>
      <style>{`
        .gtc-thumb { position:relative; border-radius:12px; overflow:hidden; border:1.5px solid rgba(229,190,16,0.35); aspect-ratio:4/3; background:#f5ede0; cursor:pointer; transition:border-color .25s,box-shadow .25s; }
        .gtc-thumb:hover { border-color:rgba(117,51,0,.5); box-shadow:0 8px 32px rgba(117,51,0,.15); }
        .gtc-thumb img { width:100%; height:100%; object-fit:cover; display:block; transition:transform .4s ease; }
        .gtc-thumb:hover img { transform:scale(1.07); }
        .gtc-thumb-overlay { position:absolute; inset:0; background:linear-gradient(to top,rgba(58,26,0,.55) 0%,transparent 60%); opacity:0; transition:opacity .3s; display:flex; align-items:flex-end; justify-content:center; padding-bottom:14px; }
        .gtc-thumb:hover .gtc-thumb-overlay { opacity:1; }
        .gtc-lb-btn { display:inline-flex; align-items:center; gap:7px; font-size:13px; font-weight:600; color:${BROWN}; background:rgba(117,51,0,.08); border:1.5px solid rgba(117,51,0,.22); border-radius:8px; padding:8px 18px; cursor:pointer; transition:background .2s,color .2s; font-family:sans-serif; }
        .gtc-lb-btn:hover { background:linear-gradient(135deg,${BROWN},${BROWN2}); color:${CREAM}; }
        .gtc-nav-btn { background:rgba(253,248,238,.12); border:1.5px solid rgba(229,190,16,.35); border-radius:50%; width:44px; height:44px; display:flex; align-items:center; justify-content:center; cursor:pointer; transition:background .2s,border-color .2s; backdrop-filter:blur(4px); }
        .gtc-nav-btn:hover { background:rgba(229,190,16,.18); border-color:#e5be10; }
        .gtc-close-btn { background:rgba(253,248,238,.1); border:1.5px solid rgba(229,190,16,.3); border-radius:50%; width:40px; height:40px; display:flex; align-items:center; justify-content:center; cursor:pointer; transition:background .2s; color:#e5be10; font-size:18px; line-height:1; }
        .gtc-close-btn:hover { background:rgba(229,190,16,.2); }
        @media(max-width:720px){ .gtc-grid{ grid-template-columns:repeat(2,1fr) !important; gap:10px !important; } }
      `}</style>

      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
            <div style={{ height: 1, width: 36, background: 'linear-gradient(90deg,transparent,#e5be10)' }} />
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#9a6040', fontFamily: 'sans-serif' }}>Govt. Tilak P.G. College · Katni, M.P.</span>
            <div style={{ height: 1, width: 36, background: 'linear-gradient(90deg,#e5be10,transparent)' }} />
          </div>
          <h2 style={{ fontSize: 'clamp(28px,5vw,44px)', fontWeight: 800, background: `linear-gradient(135deg,${BROWN} 0%,${BROWN2} 50%,${GOLD} 100%)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', lineHeight: 1.15, margin: '0 0 8px' }}>
            GTC at a Glance
          </h2>
          <p style={{ fontFamily: 'sans-serif', fontSize: 14, color: MUTED, margin: 0 }}>A glimpse into our campus, culture &amp; community</p>
        </div>

        <div style={{ width: 48, height: 2, background: `linear-gradient(90deg,${BROWN},${GOLD})`, borderRadius: 1, margin: '0 auto 32px' }} />

        {/* Grid */}
        <div className="gtc-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14 }}>
          {images.map((img, i) => (
            <motion.div
              key={i}
              className="gtc-thumb"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              onClick={() => openLb(i)}
            >
              <img src={img.src} alt={img.alt} />
              <div className="gtc-thumb-overlay">
                <span style={{ color: GOLD, fontSize: 22, fontWeight: 700 }}>⤢</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          style={{ position: 'fixed', inset: 0, background: 'rgba(26,10,0,0.93)', zIndex: 9999, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
          onClick={(e) => { if (e.target === e.currentTarget) closeLb(); }}
        >
          {/* Close top-right */}
          <button className="gtc-close-btn" onClick={closeLb} style={{ position: 'fixed', top: 20, right: 24 }}>✕</button>

          <div style={{ position: 'relative', width: '100%', maxWidth: 900, padding: '0 64px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {/* Prev */}
            <button className="gtc-nav-btn" onClick={prev} style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)' }}>
              <ChevronLeft />
            </button>
            {/* Next */}
            <button className="gtc-nav-btn" onClick={next} style={{ position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)' }}>
              <ChevronRight />
            </button>

            {/* Image */}
            <div style={{ width: '100%', borderRadius: 14, overflow: 'hidden', border: '2px solid rgba(229,190,16,0.4)', background: '#1a0a00', maxHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src={images[lightbox].src} alt={images[lightbox].alt} style={{ maxWidth: '100%', maxHeight: '70vh', objectFit: 'contain', display: 'block' }} />
            </div>

            {/* Counter */}
            <p style={{ fontFamily: 'sans-serif', fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', color: 'rgba(229,190,16,0.7)', marginTop: 14, textTransform: 'uppercase' }}>
              {lightbox + 1} / {images.length}
            </p>

            {/* Actions */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 16 }}>
              <button className="gtc-lb-btn" onClick={handleDownload}>
                <DownloadIcon /> Download
              </button>
              <button className="gtc-lb-btn" onClick={closeLb}>
                <CloseIcon /> Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gtcataglance;