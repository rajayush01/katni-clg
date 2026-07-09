import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Award, ArrowLeft, ArrowRight } from 'lucide-react';
import shivani from '../../assets/shivani1.png';

interface Star {
  id: number;
  name: string;
  image: string;
  title?: string;
  session: string;
  fatherName: string;
  class: string;
  achievement: string;
}

const GOLD = '#e5be10';
const GOLD_DEEP = '#c9a800';
const INK = '#1a1a1a';

const StarSection: React.FC = () => {
  const [selectedStar, setSelectedStar] = useState<Star | null>(null);
  const [progress, setProgress] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);
  const dragged = useRef(false);

  const stars: Star[] = [
    { id: 1, name: 'Ms. Shivani Gupta', image: shivani, title: 'Top Performer', session: '2021–22', fatherName: 'Mr. Kamalesh Gupta', class: 'Master of Science (M.Sc.)', achievement: 'Qualified IIT JAM (Mathematics) in 2022 and GATE (Mathematics) in 2023. Also got admission in Department of Mathematical Sciences, IIT (BHU) for a research project in 2023.' },
    { id: 2, name: 'Star Name 2', image: '', title: 'Position / Title', session: '2022–23', fatherName: 'Father Name', class: 'Bachelor of Science (B.Sc.)', achievement: 'Achievement details here' },
    { id: 3, name: 'Star Name 3', image: shivani, title: 'Position / Title', session: '2022–23', fatherName: 'Father Name', class: 'Bachelor of Science (B.Sc.)', achievement: 'Achievement details here' },
    { id: 4, name: 'Star Name 4', image: '', title: 'Position / Title', session: '2022–23', fatherName: 'Father Name', class: 'Bachelor of Science (B.Sc.)', achievement: 'Achievement details here' },
    { id: 5, name: 'Star Name 5', image: shivani, title: 'Position / Title', session: '2022–23', fatherName: 'Father Name', class: 'Bachelor of Science (B.Sc.)', achievement: 'Achievement details here' },
    { id: 6, name: 'Star Name 6', image: '', title: 'Position / Title', session: '2022–23', fatherName: 'Father Name', class: 'Bachelor of Science (B.Sc.)', achievement: 'Achievement details here' },
    { id: 7, name: 'Star Name 7', image: shivani, title: 'Position / Title', session: '2022–23', fatherName: 'Father Name', class: 'Bachelor of Science (B.Sc.)', achievement: 'Achievement details here' },
    { id: 8, name: 'Star Name 8', image: '', title: 'Position / Title', session: '2022–23', fatherName: 'Father Name', class: 'Bachelor of Science (B.Sc.)', achievement: 'Achievement details here' },
  ];

  const getPlaceholder = (name: string) =>
    `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&size=400&background=f5f5f5&color=333333&bold=true&format=png`;

  const updateEdges = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    const pct = max <= 0 ? 0 : el.scrollLeft / max;
    setProgress(pct);
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft >= max - 4);
  }, []);

  useEffect(() => {
    updateEdges();
    const el = trackRef.current;
    if (!el) return;
    const onResize = () => updateEdges();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [updateEdges]);

  const scrollByCard = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector('[data-card]') as HTMLElement | null;
    const step = card ? card.offsetWidth + 24 : 300;
    el.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  // Note: we deliberately do NOT use setPointerCapture here — capturing the
  // pointer on the track also redirects the resulting `click` event to the
  // track itself, so individual card clicks would never fire. Instead we
  // track the drag with window-level listeners so clicks bubble normally.
  const onWindowPointerMove = useCallback((e: PointerEvent) => {
    if (!isDown.current || !trackRef.current) return;
    const dx = e.clientX - startX.current;
    if (Math.abs(dx) > 4) dragged.current = true;
    trackRef.current.scrollLeft = scrollLeftStart.current - dx;
  }, []);

  const onWindowPointerUp = useCallback(() => {
    isDown.current = false;
    window.removeEventListener('pointermove', onWindowPointerMove);
    window.removeEventListener('pointerup', onWindowPointerUp);
  }, [onWindowPointerMove]);

  const onPointerDown = (e: React.PointerEvent) => {
    const el = trackRef.current;
    if (!el) return;
    isDown.current = true;
    dragged.current = false;
    startX.current = e.clientX;
    scrollLeftStart.current = el.scrollLeft;
    window.addEventListener('pointermove', onWindowPointerMove);
    window.addEventListener('pointerup', onWindowPointerUp);
  };

  const openStar = (star: Star) => {
    if (dragged.current) return;
    setSelectedStar(star);
  };

  return (
    <section style={{ background: '#ffffff', padding: '90px 0 100px', position: 'relative', overflow: 'hidden', fontFamily: 'Georgia, serif' }}>
      <style>{`
        .star-track { display:flex; gap:24px; overflow-x:auto; scroll-snap-type:x proximity; padding: 10px 24px 30px; cursor:grab; scrollbar-width:none; -ms-overflow-style:none; touch-action: pan-y; user-select:none; }
        .star-track::-webkit-scrollbar { display:none; }
        .star-track:active { cursor:grabbing; }
        .star-card { scroll-snap-align:center; flex:0 0 auto; width:250px; background:#fff; border-radius:22px; overflow:hidden; border:1.5px solid #eee; box-shadow:0 6px 24px rgba(0,0,0,0.05); position:relative; transition: transform 0.45s cubic-bezier(.19,1,.22,1), box-shadow 0.45s cubic-bezier(.19,1,.22,1), border-color 0.35s; }
        .star-card:hover { transform: translateY(-10px); box-shadow: 0 28px 60px rgba(0,0,0,0.14), 0 0 0 1px rgba(229,190,16,0.35); border-color: rgba(229,190,16,0.45); }
        .star-card:first-child { margin-left: 0; }
        .star-img-wrap { height: 300px; overflow: hidden; position: relative; }
        .star-img-wrap img { width:100%; height:100%; object-fit:cover; display:block; transition: transform 0.7s cubic-bezier(.19,1,.22,1); }
        .star-card:hover .star-img-wrap img { transform: scale(1.08); }
        .star-nav { width:48px; height:48px; border-radius:50%; background:#fff; border:1.5px solid #dddddd; color:#333; display:flex; align-items:center; justify-content:center; cursor:pointer; box-shadow:0 4px 14px rgba(0,0,0,0.08); transition: background 0.2s, border-color 0.2s, transform 0.2s, opacity 0.2s; }
        .star-nav:hover:not(:disabled) { background:${INK}; border-color:${INK}; color:${GOLD}; transform: scale(1.08); }
        .star-nav:disabled { opacity: 0.3; cursor: default; }
        .star-progress-rail { height: 3px; background: #ececec; border-radius: 3px; overflow: hidden; flex: 1; }
        .star-progress-fill { height: 100%; background: linear-gradient(90deg, ${GOLD_DEEP}, ${GOLD}); border-radius: 3px; }
        .rp-btn { width:100%; background:${INK}; color:${GOLD}; border:none; border-radius:10px; padding:10px 0; font-size:11px; font-weight:700; letter-spacing:0.06em; cursor:pointer; transition:background 0.18s; }
        .rp-btn:hover { background:#333333; }
        .sm-overlay { position:fixed; inset:0; background:rgba(10,10,10,0.55); backdrop-filter:blur(10px); z-index:50; display:flex; align-items:center; justify-content:center; padding:16px; }
        .sm-close { margin-left:auto; width:34px; height:34px; border-radius:50%; background:#f5f5f5; border:1.5px solid #dddddd; color:#555555; display:flex; align-items:center; justify-content:center; cursor:pointer; flex-shrink:0; transition:background 0.18s,transform 0.22s; }
        .sm-close:hover { background:#eeeeee; transform:rotate(90deg); }
        .modal-fields-grid { display: grid; grid-template-columns: 1fr; gap: 12px; }
        @media (min-width: 480px) { .modal-fields-grid { grid-template-columns: 1fr 1fr; } }
        .modal-inner { background: #fff; border-radius: 22px; width: 100%; max-width: 640px; max-height: 90vh; overflow-y: auto; box-shadow: 0 40px 100px rgba(0,0,0,0.28); border: 1.5px solid #eeeeee; }
        .stars-marquee-track { display:inline-flex; white-space:nowrap; animation: stars-marquee 28s linear infinite; }
        @keyframes stars-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @media (max-width: 640px) { .star-nav { display:none; } }
      `}</style>

      {/* Ambient background: giant faint outline word + soft gold glows */}
      <div aria-hidden style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '4%', left: '50%', transform: 'translateX(-50%)', fontSize: 'clamp(90px,16vw,220px)', fontWeight: 800, color: 'transparent', WebkitTextStroke: '1px rgba(0,0,0,0.045)', whiteSpace: 'nowrap', letterSpacing: '0.02em' }}>
          STARS
        </div>
        <div style={{ position: 'absolute', width: 420, height: 420, top: -160, right: -160, borderRadius: '50%', background: 'radial-gradient(circle,rgba(229,190,16,0.10),transparent 70%)' }} />
        <div style={{ position: 'absolute', width: 320, height: 320, bottom: -120, left: -100, borderRadius: '50%', background: 'radial-gradient(circle,rgba(229,190,16,0.08),transparent 70%)' }} />
      </div>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', position: 'relative' }}>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ textAlign: 'center', marginBottom: 20 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
            <div style={{ height: 1, width: 44, background: 'linear-gradient(90deg,transparent,#e5be10)' }} />
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#aaaaaa', fontFamily: 'sans-serif' }}>Hall of Fame</span>
            <div style={{ height: 1, width: 44, background: 'linear-gradient(90deg,#e5be10,transparent)' }} />
          </div>
          <h2 style={{ fontSize: 'clamp(36px,6vw,58px)', fontWeight: 800, color: '#1a1a1a', lineHeight: 1.05, marginBottom: 10 }}>
            GTC Stars
          </h2>
          <p style={{ fontSize: 15, color: '#888888', maxWidth: 420, margin: '0 auto', lineHeight: 1.6, fontFamily: 'sans-serif' }}>
            Celebrating the extraordinary journeys of those who made us proud
          </p>
        </motion.div>

        {/* Thin rotating marquee strip */}
        <div style={{ overflow: 'hidden', marginBottom: 36, maskImage: 'linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)', WebkitMaskImage: 'linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)' }}>
          <div className="stars-marquee-track">
            {Array.from({ length: 2 }).map((_, r) => (
              <span key={r} style={{ display: 'inline-flex', alignItems: 'center' }}>
                {stars.map((s) => (
                  <span key={s.id} style={{ fontFamily: 'sans-serif', fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#c9c9c9', margin: '0 22px', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ color: GOLD }}>★</span>{s.name}
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>

        {/* Gallery */}
        <motion.div
          ref={trackRef}
          className="star-track"
          onScroll={updateEdges}
          onPointerDown={onPointerDown}
        >
          {stars.map((star, i) => (
            <motion.div
              key={star.id}
              data-card
              className="star-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.06, ease: [0.19, 1, 0.22, 1] }}
              onClick={() => openStar(star)}
            >
              <div className="star-img-wrap">
                <img
                  src={star.image || getPlaceholder(star.name)}
                  alt={star.name}
                  draggable={false}
                  onError={(e) => { (e.target as HTMLImageElement).src = getPlaceholder(star.name); }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,rgba(0,0,0,0.55) 0%,rgba(0,0,0,0.05) 45%,transparent 65%)' }} />
                <div style={{ position: 'absolute', top: 12, right: 12, width: 34, height: 34, borderRadius: '50%', background: `linear-gradient(135deg,${GOLD},${GOLD_DEEP})`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 15, boxShadow: '0 4px 12px rgba(229,190,16,0.45)' }}>★</div>
                <div style={{ position: 'absolute', left: 16, bottom: 14, right: 16 }}>
                  <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: GOLD, marginBottom: 4, fontFamily: 'sans-serif' }}>✦ GTC Star</div>
                  <div style={{ fontSize: 16, fontWeight: 700, color: '#fff', lineHeight: 1.3, fontFamily: 'sans-serif' }}>{star.name}</div>
                </div>
              </div>
              <div style={{ padding: '14px 16px' }}>
                {star.title && <div style={{ fontSize: 11, color: '#888888', fontStyle: 'italic', marginBottom: 6, fontFamily: 'sans-serif' }}>{star.title}</div>}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #f0f0f0', paddingTop: 8 }}>
                  <span style={{ fontSize: 10, color: '#aaaaaa', fontFamily: 'sans-serif' }}>Session {star.session}</span>
                  <span style={{ fontSize: 10, color: GOLD_DEEP, fontWeight: 700, fontFamily: 'sans-serif' }}>View →</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Controls: progress rail + arrows */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, maxWidth: 520, margin: '18px auto 0' }}>
          <button className="star-nav" onClick={() => scrollByCard(-1)} disabled={atStart} aria-label="Previous"><ArrowLeft size={18} /></button>
          <div className="star-progress-rail"><div className="star-progress-fill" style={{ width: `${Math.max(8, progress * 100)}%` }} /></div>
          <button className="star-nav" onClick={() => scrollByCard(1)} disabled={atEnd} aria-label="Next"><ArrowRight size={18} /></button>
        </div>
        <p style={{ marginTop: 14, fontSize: 12, color: '#aaaaaa', fontStyle: 'italic', textAlign: 'center', fontFamily: 'sans-serif' }}>Drag, or use the arrows — click a card for full details</p>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedStar && (
          <motion.div key="ov" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.22 }} className="sm-overlay" onClick={() => setSelectedStar(null)}>
            <motion.div key="md" initial={{ scale: 0.92, opacity: 0, y: 24 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.92, opacity: 0, y: 24 }} transition={{ type: 'spring', stiffness: 300, damping: 28 }} className="modal-inner" onClick={(e) => e.stopPropagation()}>
              <div style={{ background: '#1a1a1a', padding: 26, position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: -40, right: -40, width: 150, height: 150, background: 'rgba(229,190,16,0.07)', borderRadius: '50%' }} />
                <div style={{ display: 'flex', gap: 18, alignItems: 'flex-start', position: 'relative', zIndex: 1 }}>
                  <img src={selectedStar.image || getPlaceholder(selectedStar.name)} alt={selectedStar.name} style={{ width: 84, height: 84, borderRadius: 16, objectFit: 'cover', border: '2px solid rgba(229,190,16,0.5)', flexShrink: 0, boxShadow: '0 8px 24px rgba(0,0,0,0.3)' }} onError={(e) => { (e.target as HTMLImageElement).src = getPlaceholder(selectedStar.name); }} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 9, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#1a1a1a', background: 'linear-gradient(90deg,#e5be10,#f0d040)', padding: '3px 10px', borderRadius: 20, marginBottom: 9, fontFamily: 'sans-serif' }}>
                      <Award size={9} /> GTC Star
                    </div>
                    <div style={{ fontSize: 19, fontWeight: 700, color: '#e5be10', marginBottom: 4, fontFamily: 'Georgia,serif' }}>{selectedStar.name}</div>
                    {selectedStar.title && <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', fontStyle: 'italic', fontFamily: 'sans-serif' }}>{selectedStar.title}</div>}
                  </div>
                  <button className="sm-close" onClick={() => setSelectedStar(null)} aria-label="Close"><X size={15} /></button>
                </div>
              </div>
              <div style={{ padding: '22px 26px' }}>
                <div className="modal-fields-grid">
                  {[{ label: 'Session', value: selectedStar.session }, { label: "Father's Name", value: selectedStar.fatherName }].map(f => (
                    <div key={f.label} style={{ background: '#fafafa', border: '1px solid #eeeeee', borderRadius: 14, padding: '13px 15px' }}>
                      <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#aaaaaa', marginBottom: 5, fontFamily: 'sans-serif' }}>{f.label}</div>
                      <div style={{ fontSize: 14, fontWeight: 600, color: '#1a1a1a', fontFamily: 'sans-serif' }}>{f.value}</div>
                    </div>
                  ))}
                  <div style={{ background: '#fafafa', border: '1px solid #eeeeee', borderRadius: 14, padding: '13px 15px', gridColumn: '1/-1' }}>
                    <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#aaaaaa', marginBottom: 5, fontFamily: 'sans-serif' }}>Programme</div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: '#1a1a1a', fontFamily: 'sans-serif' }}>{selectedStar.class}</div>
                  </div>
                  <div style={{ background: '#fffdf0', border: '1px solid rgba(229,190,16,0.3)', borderLeft: '4px solid #e5be10', borderRadius: 14, padding: '13px 15px', gridColumn: '1/-1' }}>
                    <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#aaaaaa', marginBottom: 5, fontFamily: 'sans-serif' }}>Achievement</div>
                    <div style={{ fontSize: 14, fontWeight: 500, color: '#333333', lineHeight: 1.6, fontFamily: 'sans-serif' }}>{selectedStar.achievement}</div>
                  </div>
                </div>
              </div>
              <div style={{ padding: '14px 26px 20px', display: 'flex', justifyContent: 'center', gap: 7, borderTop: '1px solid #eeeeee' }}>
                {['#e5be10', '#dddddd', '#1a1a1a'].map(c => <div key={c} style={{ width: 8, height: 8, borderRadius: '50%', background: c }} />)}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default StarSection;   