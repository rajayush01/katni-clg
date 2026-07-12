import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { CATEGORY_ORDER, CATEGORY_LABELS, getCoverImage, getImagesByCategory } from '@/data/galleryData';

const GOLD = '#e5be10';
const INK = '#1a1a1a';

const Photogallery: React.FC = () => {
  const navigate = useNavigate();

  const goToCategory = (slug: string) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate(`/gallery/${slug}`);
  };

  return (
    <section style={{ background: '#ffffff', padding: '90px 24px 100px', fontFamily: 'Georgia, serif' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&display=swap');

        .gs-grid { display:grid; grid-template-columns: 1fr; gap:20px; max-width:1200px; margin:0 auto; }
        @media (min-width: 720px) {
          .gs-grid { grid-template-columns: repeat(6, 1fr); grid-auto-rows: 220px; }
          .gs-tile-0 { grid-column: span 4; grid-row: span 2; }
          .gs-tile-1 { grid-column: span 2; grid-row: span 1; }
          .gs-tile-2 { grid-column: span 2; grid-row: span 1; }
          .gs-tile-3 { grid-column: span 3; grid-row: span 1; }
          .gs-tile-4 { grid-column: span 3; grid-row: span 1; }
        }
        @media (max-width: 719px) {
          .gs-tile { height: 260px; }
        }

        .gs-tile { position:relative; border-radius:18px; overflow:hidden; cursor:pointer; border:1px solid #f0f0f0; }
        .gs-tile img { width:100%; height:100%; object-fit:cover; display:block; transition: transform 0.8s cubic-bezier(.19,1,.22,1); }
        .gs-tile:hover img { transform: scale(1.08); }
        .gs-tile-shade { position:absolute; inset:0; background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.15) 45%, transparent 68%); transition: background 0.3s; }
        .gs-tile:hover .gs-tile-shade { background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 45%, transparent 70%); }
        .gs-tile-content { position:absolute; left:22px; right:22px; bottom:20px; z-index:1; }
        .gs-tile-count { position:absolute; top:16px; right:16px; z-index:1; font-family:sans-serif; font-size:10px; font-weight:700; letter-spacing:0.08em; color:#fff; background:rgba(255,255,255,0.12); border:1px solid rgba(255,255,255,0.25); backdrop-filter: blur(6px); padding:5px 11px; border-radius:20px; }
        .gs-tile-cta { display:inline-flex; align-items:center; gap:6px; font-family:sans-serif; font-size:11px; font-weight:700; letter-spacing:0.08em; text-transform:uppercase; color:${GOLD}; opacity:0; transform: translateY(6px); transition: opacity 0.3s, transform 0.3s; margin-top:8px; }
        .gs-tile:hover .gs-tile-cta { opacity:1; transform: translateY(0); }
        .gs-tile-arrow-badge { position:absolute; top:16px; left:16px; z-index:1; width:34px; height:34px; border-radius:50%; background:rgba(255,255,255,0.1); border:1px solid rgba(255,255,255,0.25); backdrop-filter: blur(6px); display:flex; align-items:center; justify-content:center; color:#fff; opacity:0; transform: scale(0.7) rotate(-20deg); transition: opacity 0.3s, transform 0.3s; }
        .gs-tile:hover .gs-tile-arrow-badge { opacity:1; transform: scale(1) rotate(0deg); background: ${GOLD}; border-color: ${GOLD}; color:${INK}; }
      `}</style>

      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 48 }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
            <div style={{ height: 1, width: 44, background: 'linear-gradient(90deg,transparent,#e5be10)' }} />
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#aaaaaa', fontFamily: 'sans-serif' }}>
              Explore
            </span>
            <div style={{ height: 1, width: 44, background: 'linear-gradient(90deg,#e5be10,transparent)' }} />
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(32px,5vw,52px)', fontWeight: 800, color: INK, margin: '0 0 12px', lineHeight: 1.1 }}>
            Photo Gallery
          </h2>
          <p style={{ fontSize: 15, color: '#888888', fontFamily: 'sans-serif', maxWidth: 460, margin: '0 auto', lineHeight: 1.65 }}>
            Pick a category to step inside — each one opens its own gallery.
          </p>
        </motion.div>

        {/* Category tiles */}
        <div className="gs-grid">
          {CATEGORY_ORDER.map((slug, idx) => {
            const cover = getCoverImage(slug);
            const count = getImagesByCategory(slug).length;
            return (
              <motion.div
                key={slug}
                className={`gs-tile gs-tile-${idx}`}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.19, 1, 0.22, 1] }}
                onClick={() => goToCategory(slug)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter') goToCategory(slug); }}
              >
                <img src={cover.src} alt={CATEGORY_LABELS[slug]} loading="lazy" />
                <div className="gs-tile-shade" />
                <div className="gs-tile-arrow-badge"><ArrowUpRight size={16} /></div>
                <div className="gs-tile-count">{count} photo{count !== 1 ? 's' : ''}</div>
                <div className="gs-tile-content">
                  <div style={{ fontFamily: 'sans-serif', fontSize: 9, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: GOLD, marginBottom: 6 }}>
                    ✦ Gallery
                  </div>
                  <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: idx === 0 ? 'clamp(24px,3vw,34px)' : 'clamp(19px,2.4vw,24px)', fontWeight: 800, color: '#fff', lineHeight: 1.15, marginBottom: 4 }}>
                    {CATEGORY_LABELS[slug]}
                  </div>
                  {/* <div style={{ fontFamily: 'sans-serif', fontSize: 12.5, color: 'rgba(255,255,255,0.65)', lineHeight: 1.5, maxWidth: 320 }}>
                    {CATEGORY_TAGLINES[slug]}
                  </div> */}
                  <div className="gs-tile-cta">View Gallery <ArrowUpRight size={12} /></div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Photogallery;