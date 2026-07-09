import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Award, ChevronLeft, ChevronRight } from 'lucide-react';
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

const StarSection: React.FC = () => {
  const [selectedStar, setSelectedStar] = useState<Star | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

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
    `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&size=400&background=f5edcf&color=753300&bold=true&format=png`;

  const goNext = () => { setDirection(1); setActiveIndex((i) => (i + 1) % stars.length); };
  const goPrev = () => { setDirection(-1); setActiveIndex((i) => (i - 1 + stars.length) % stars.length); };

  const prevIdx = (activeIndex - 1 + stars.length) % stars.length;
  const nextIdx = (activeIndex + 1) % stars.length;

  const slideVariants = {
    enter: (d: number) => ({ x: d > 0 ? 60 : -60, opacity: 0, scale: 0.97 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (d: number) => ({ x: d > 0 ? -60 : 60, opacity: 0, scale: 0.97 }),
  };

  const SideCard = ({ star, onClick, origin }: { star: Star; onClick: () => void; origin: string }) => (
    <div
      onClick={onClick}
      style={{
        width: 150, flexShrink: 0, cursor: 'pointer',
        background: '#fff', borderRadius: 18, overflow: 'hidden',
        border: '1.5px solid rgba(229,190,16,0.2)',
        boxShadow: '0 4px 16px rgba(117,51,0,0.08)',
        opacity: 0.65,
        transform: 'scale(0.9)',
        transformOrigin: origin,
        transition: 'opacity 0.2s, transform 0.2s',
      }}
      onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.opacity = '0.85'; }}
      onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.opacity = '0.65'; }}
    >
      <div style={{ height: 110, overflow: 'hidden', position: 'relative' }}>
        <img src={star.image || getPlaceholder(star.name)} alt={star.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} onError={(e) => { (e.target as HTMLImageElement).src = getPlaceholder(star.name); }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,rgba(117,51,0,0.3) 0%,transparent 55%)' }} />
        <div style={{ position: 'absolute', top: 8, right: 8, width: 26, height: 26, borderRadius: '50%', background: 'linear-gradient(135deg,#e5be10,#c9a800)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11 }}>★</div>
      </div>
      <div style={{ padding: '10px 12px' }}>
        <div style={{ fontSize: 8, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#753300', background: 'rgba(229,190,16,0.18)', border: '1px solid rgba(229,190,16,0.3)', padding: '1px 7px', borderRadius: 20, display: 'inline-block', marginBottom: 6 }}>GTC Star</div>
        <div style={{ fontSize: 11, fontWeight: 700, color: '#3a1a00', lineHeight: 1.3, marginBottom: 6, overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>{star.name}</div>
        <div style={{ borderTop: '1px solid rgba(229,190,16,0.18)', paddingTop: 6, fontSize: 9, color: '#b08060' }}>Session {star.session}</div>
      </div>
    </div>
  );

  return (
    <section style={{ background: '#ffffff', padding: '80px 0', position: 'relative', overflow: 'hidden', fontFamily: 'Georgia, serif' }}>
      <style>{`
        .sl-item { display:flex; align-items:center; gap:10px; padding:9px 12px; border-radius:12px; cursor:pointer; border:1px solid transparent; transition:background 0.18s,border-color 0.18s; margin-bottom:3px; }
        .sl-item:hover { background:rgba(229,190,16,0.12); border-color:rgba(229,190,16,0.3); }
        .sl-item-active { background:rgba(117,51,0,0.07); border-color:rgba(229,190,16,0.5) !important; }
        .s-nav { width:44px; height:44px; border-radius:50%; background:#fff; border:2px solid rgba(229,190,16,0.5); color:#753300; display:flex; align-items:center; justify-content:center; cursor:pointer; box-shadow:0 3px 12px rgba(117,51,0,0.13); transition:background 0.18s,color 0.18s,transform 0.18s; flex-shrink:0; }
        .s-nav:hover { background:#753300; border-color:#753300; color:#e5be10; transform:scale(1.08); }
        .s-dot { border:none; padding:0; cursor:pointer; border-radius:20px; height:6px; background:rgba(117,51,0,0.18); transition:width 0.3s,background 0.3s; }
        .s-dot-active { background:linear-gradient(90deg,#753300,#e5be10) !important; }
        .rp-btn { width:100%; background:linear-gradient(90deg,#753300,#9a4a10); color:#e5be10; border:none; border-radius:10px; padding:9px 0; font-size:11px; font-weight:700; letter-spacing:0.06em; cursor:pointer; margin-top:10px; transition:opacity 0.18s; }
        .rp-btn:hover { opacity:0.87; }
        .sm-overlay { position:fixed; inset:0; background:rgba(60,20,0,0.6); backdrop-filter:blur(8px); z-index:50; display:flex; align-items:center; justify-content:center; padding:16px; }
        .sm-close { margin-left:auto; width:34px; height:34px; border-radius:50%; background:rgba(229,190,16,0.15); border:1.5px solid rgba(229,190,16,0.35); color:#e5be10; display:flex; align-items:center; justify-content:center; cursor:pointer; flex-shrink:0; transition:background 0.18s,transform 0.22s; }
        .sm-close:hover { background:rgba(229,190,16,0.3); transform:rotate(90deg); }
      `}</style>

      {/* Decorative BG */}
      {/* <div style={{ position: 'absolute', width: 400, height: 400, top: -100, right: -100, borderRadius: '50%', background: 'rgba(229,190,16,0.07)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', width: 260, height: 260, bottom: -60, left: -80, borderRadius: '50%', background: 'rgba(117,51,0,0.05)', pointerEvents: 'none' }} /> */}

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ textAlign: 'center', marginBottom: 52 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
            <div style={{ height: 1, width: 44, background: 'linear-gradient(90deg,transparent,#e5be10)' }} />
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#9a6040' }}>Hall of Fame</span>
            <div style={{ height: 1, width: 44, background: 'linear-gradient(90deg,#e5be10,transparent)' }} />
          </div>
          <h2 style={{ fontSize: 52, fontWeight: 800, background: 'linear-gradient(135deg,#753300 0%,#b36000 50%,#e5be10 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', lineHeight: 1.1, marginBottom: 10 }}>
            GTC Stars
          </h2>
          <p style={{ fontSize: 15, color: '#9a6040', maxWidth: 420, margin: '0 auto', lineHeight: 1.6 }}>
            Celebrating the extraordinary journeys of those who made us proud
          </p>
        </motion.div>

        {/* 3-column layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '190px 1fr 190px', gap: 24, alignItems: 'start' }}>

          {/* LEFT sidebar */}
          <div>
            <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#b08060', marginBottom: 10, paddingLeft: 12 }}>All Stars</p>
            <div style={{ maxHeight: 380, overflowY: 'auto', paddingRight: 2 }}>
              {stars.map((star, i) => (
                <div key={star.id} className={`sl-item ${i === activeIndex ? 'sl-item-active' : ''}`} onClick={() => { setDirection(i > activeIndex ? 1 : -1); setActiveIndex(i); }}>
                  <img src={star.image || getPlaceholder(star.name)} alt={star.name} style={{ width: 36, height: 36, borderRadius: '50%', objectFit: 'cover', border: '2px solid rgba(229,190,16,0.4)', flexShrink: 0 }} onError={(e) => { (e.target as HTMLImageElement).src = getPlaceholder(star.name); }} />
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 700, color: '#3a1a00', lineHeight: 1.3 }}>{star.name}</div>
                    <div style={{ fontSize: 10, color: '#9a6040' }}>{star.session}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CENTER */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {/* Card row — flex, overflow hidden to clip sides */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, width: '100%' }}>
              <button className="s-nav" onClick={goPrev} aria-label="Previous"><ChevronLeft size={20} /></button>

              {/* Clipped strip */}
              <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, overflow: 'hidden', minHeight: 340 }}>
                <SideCard star={stars[prevIdx]} onClick={goPrev} origin="right center" />

                {/* Center card */}
                <div style={{ flex: 1, minWidth: 0, maxWidth: 230 }}>
                  <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                      key={activeIndex}
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.32, ease: [0.25, 1, 0.5, 1] }}
                      style={{
                        background: '#fff', borderRadius: 20, overflow: 'hidden',
                        border: '2px solid rgba(229,190,16,0.55)',
                        boxShadow: '0 16px 48px rgba(117,51,0,0.2), 0 0 0 3px rgba(229,190,16,0.15)',
                        cursor: 'pointer', width: '100%',
                      }}
                      onClick={() => setSelectedStar(stars[activeIndex])}
                      whileHover={{ y: -4 }}
                    >
                      <div style={{ height: 210, overflow: 'hidden', position: 'relative' }}>
                        <img src={stars[activeIndex].image || getPlaceholder(stars[activeIndex].name)} alt={stars[activeIndex].name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} onError={(e) => { (e.target as HTMLImageElement).src = getPlaceholder(stars[activeIndex].name); }} />
                        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,rgba(117,51,0,0.3) 0%,transparent 55%)' }} />
                        <div style={{ position: 'absolute', top: 10, right: 10, width: 32, height: 32, borderRadius: '50%', background: 'linear-gradient(135deg,#e5be10,#c9a800)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, boxShadow: '0 3px 10px rgba(229,190,16,0.45)' }}>★</div>
                      </div>
                      <div style={{ padding: '14px 16px' }}>
                        <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#753300', background: 'rgba(229,190,16,0.18)', border: '1px solid rgba(229,190,16,0.35)', padding: '2px 8px', borderRadius: 20, display: 'inline-block', marginBottom: 8 }}>✦ GTC Star</div>
                        <div style={{ fontSize: 14, fontWeight: 700, color: '#3a1a00', lineHeight: 1.35, marginBottom: 4 }}>{stars[activeIndex].name}</div>
                        {stars[activeIndex].title && <div style={{ fontSize: 11, color: '#9a6040', fontStyle: 'italic', marginBottom: 8 }}>{stars[activeIndex].title}</div>}
                        <div style={{ borderTop: '1px solid rgba(229,190,16,0.18)', paddingTop: 8, fontSize: 10, color: '#b08060' }}>Session {stars[activeIndex].session}</div>
                      </div>
                      <div style={{ background: 'linear-gradient(90deg,rgba(117,51,0,0.04),rgba(229,190,16,0.08))', borderTop: '1px solid rgba(229,190,16,0.15)', padding: '7px 16px', textAlign: 'center', fontSize: 10, color: '#9a6040', letterSpacing: '0.04em' }}>
                        Tap to view details →
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                <SideCard star={stars[nextIdx]} onClick={goNext} origin="left center" />
              </div>

              <button className="s-nav" onClick={goNext} aria-label="Next"><ChevronRight size={20} /></button>
            </div>

            {/* Dots */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: 7, marginTop: 20 }}>
              {stars.map((_, i) => (
                <button key={i} className={`s-dot ${i === activeIndex ? 's-dot-active' : ''}`} style={{ width: i === activeIndex ? 28 : 6 }} onClick={() => { setDirection(i > activeIndex ? 1 : -1); setActiveIndex(i); }} />
              ))}
            </div>
            <p style={{ marginTop: 12, fontSize: 12, color: '#9a6040', fontStyle: 'italic', textAlign: 'center' }}>Click the center card to view full details</p>
          </div>

          {/* RIGHT panel */}
          <div>
            <AnimatePresence mode="wait">
              <motion.div key={activeIndex} initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }} transition={{ duration: 0.28 }}>
                <div style={{ background: 'linear-gradient(135deg,#753300,#9a4a10)', borderRadius: 14, padding: 18, color: '#fdf8ee', marginBottom: 12, position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', top: -30, right: -30, width: 100, height: 100, background: 'rgba(229,190,16,0.1)', borderRadius: '50%' }} />
                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(229,190,16,0.8)', marginBottom: 7 }}>✦ Featured Star</div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: '#e5be10', marginBottom: 3, fontFamily: 'Georgia,serif' }}>{stars[activeIndex].name}</div>
                    <div style={{ fontSize: 11, color: 'rgba(253,248,238,0.65)', fontStyle: 'italic', marginBottom: 10 }}>{stars[activeIndex].title}</div>
                    <div style={{ borderTop: '1px solid rgba(229,190,16,0.2)', paddingTop: 9, fontSize: 11, color: 'rgba(253,248,238,0.7)' }}>
                      <span style={{ color: 'rgba(229,190,16,0.75)', fontWeight: 600 }}>Session: </span>{stars[activeIndex].session}
                    </div>
                  </div>
                </div>
                <div style={{ background: '#fdf8ee', border: '1px solid rgba(229,190,16,0.22)', borderRadius: 14, padding: 16 }}>
                  <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#b08060', marginBottom: 8 }}>Achievement Snapshot</div>
                  <p style={{ fontSize: 12, color: '#4a2000', lineHeight: 1.6, display: '-webkit-box', WebkitLineClamp: 4, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    {stars[activeIndex].achievement}
                  </p>
                  <button className="rp-btn" onClick={() => setSelectedStar(stars[activeIndex])}>Read Full Story →</button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedStar && (
          <motion.div key="ov" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.22 }} className="sm-overlay" onClick={() => setSelectedStar(null)}>
            <motion.div key="md" initial={{ scale: 0.9, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0, y: 20 }} transition={{ type: 'spring', stiffness: 300, damping: 28 }} style={{ background: '#fff', borderRadius: 24, width: '100%', maxWidth: 640, maxHeight: '90vh', overflowY: 'auto', boxShadow: '0 32px 80px rgba(117,51,0,0.35), 0 0 0 1.5px rgba(229,190,16,0.3)' }} onClick={(e) => e.stopPropagation()}>
              {/* Modal header */}
              <div style={{ background: 'linear-gradient(135deg,#753300 0%,#9a4a10 60%,#b36000 100%)', padding: 26, position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: -40, right: -40, width: 150, height: 150, background: 'rgba(229,190,16,0.1)', borderRadius: '50%' }} />
                <div style={{ position: 'absolute', bottom: -30, left: 50, width: 90, height: 90, background: 'rgba(229,190,16,0.07)', borderRadius: '50%' }} />
                <div style={{ display: 'flex', gap: 18, alignItems: 'flex-start', position: 'relative', zIndex: 1 }}>
                  <img src={selectedStar.image || getPlaceholder(selectedStar.name)} alt={selectedStar.name} style={{ width: 84, height: 84, borderRadius: 16, objectFit: 'cover', border: '3px solid rgba(229,190,16,0.6)', flexShrink: 0, boxShadow: '0 8px 24px rgba(0,0,0,0.25)' }} onError={(e) => { (e.target as HTMLImageElement).src = getPlaceholder(selectedStar.name); }} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 9, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#753300', background: 'linear-gradient(90deg,#e5be10,#f0d040)', padding: '3px 10px', borderRadius: 20, marginBottom: 9 }}>
                      <Award size={9} /> GTC Star
                    </div>
                    <div style={{ fontSize: 19, fontWeight: 700, color: '#e5be10', marginBottom: 4, fontFamily: 'Georgia,serif' }}>{selectedStar.name}</div>
                    {selectedStar.title && <div style={{ fontSize: 12, color: 'rgba(253,248,238,0.65)', fontStyle: 'italic' }}>{selectedStar.title}</div>}
                  </div>
                  <button className="sm-close" onClick={() => setSelectedStar(null)} aria-label="Close"><X size={15} /></button>
                </div>
              </div>
              {/* Modal body */}
              <div style={{ padding: '22px 26px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                {[{ label: 'Session', value: selectedStar.session }, { label: "Father's Name", value: selectedStar.fatherName }].map(f => (
                  <div key={f.label} style={{ background: '#fdf8ee', border: '1px solid rgba(229,190,16,0.2)', borderRadius: 14, padding: '13px 15px' }}>
                    <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#b08060', marginBottom: 5 }}>{f.label}</div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: '#3a1a00' }}>{f.value}</div>
                  </div>
                ))}
                <div style={{ background: '#fdf8ee', border: '1px solid rgba(229,190,16,0.2)', borderRadius: 14, padding: '13px 15px', gridColumn: '1/-1' }}>
                  <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#b08060', marginBottom: 5 }}>Programme</div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: '#3a1a00' }}>{selectedStar.class}</div>
                </div>
                <div style={{ background: 'linear-gradient(135deg,rgba(229,190,16,0.08),rgba(117,51,0,0.04))', border: '1px solid rgba(229,190,16,0.3)', borderLeft: '4px solid #e5be10', borderRadius: 14, padding: '13px 15px', gridColumn: '1/-1' }}>
                  <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#9a6040', marginBottom: 5 }}>Achievement</div>
                  <div style={{ fontSize: 14, fontWeight: 500, color: '#4a2000', lineHeight: 1.6 }}>{selectedStar.achievement}</div>
                </div>
              </div>
              <div style={{ padding: '14px 26px 20px', display: 'flex', justifyContent: 'center', gap: 7, borderTop: '1px solid rgba(229,190,16,0.15)' }}>
                {['#e5be10', '#c9a800', '#753300'].map(c => <div key={c} style={{ width: 8, height: 8, borderRadius: '50%', background: c }} />)}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default StarSection;