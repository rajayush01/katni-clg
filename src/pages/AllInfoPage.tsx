import { motion, AnimatePresence } from 'framer-motion';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { allInfoData, detailedInfoData, DepartmentType } from '@/data/allInfoData';

const GOLD = '#e5be10';
const BROWN = '#753300';
const BROWN2 = '#9a4a10';
const DARK = '#3a1a00';
const CREAM = '#fdf8ee';
const TEXT = '#4a2000';
const MUTED = '#b08060';

const AllInfoPage: React.FC = () => {
  const { department } = useParams<{ department: string }>();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [selectedSection, setSelectedSection] = useState<string>('');
  // The item that should be highlighted and auto-expanded
  const [pinnedItemId, setPinnedItemId] = useState<string | null>(null);
  // Hover state (existing behaviour)
  const [hoveredItemId, setHoveredItemId] = useState<string | null>(null);
  const pinnedItemRef = useRef<HTMLDivElement | null>(null);

  const currentDept = department ? allInfoData[department as DepartmentType] : null;
  const sections = department ? detailedInfoData[department as DepartmentType] : null;

  // ── Resolve section + item from URL params ──────────────────────────────
  useEffect(() => {
    if (!sections) return;
    const sectionKeys = Object.keys(sections);

    const sectionParam = searchParams.get('section');
    const itemParam    = searchParams.get('item');

    // Pick section: prefer the URL param if valid, else first section
    const targetSection = sectionParam && sectionKeys.includes(sectionParam)
      ? sectionParam
      : sectionKeys[0];

    setSelectedSection(targetSection);
    setPinnedItemId(itemParam ?? null);
  }, [department, sections, searchParams]);

  // ── Scroll pinned item into view once it renders ────────────────────────
  useEffect(() => {
    if (!pinnedItemId) return;
    // Small delay to let the section switch animation finish
    const timer = setTimeout(() => {
      pinnedItemRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 350);
    return () => clearTimeout(timer);
  }, [pinnedItemId, selectedSection]);

  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, []);

  // ── Not found state ──────────────────────────────────────────────────────
  if (!currentDept || !sections) {
    return (
      <div
        style={{
          minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center',
          background:'linear-gradient(160deg,#fff8ee,#fdf3d8)',
          fontFamily:'Georgia,serif',
        }}
      >
        <div style={{ textAlign:'center', padding:32 }}>
          <div style={{ fontSize:64, marginBottom:16 }}>📭</div>
          <h2 style={{ fontSize:28, fontWeight:800, color:DARK, marginBottom:8 }}>Department not found</h2>
          <p style={{ fontFamily:'sans-serif', fontSize:14, color:MUTED, marginBottom:24 }}>The section you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate('/')}
            style={{
              background:`linear-gradient(90deg,${BROWN},${BROWN2})`, color:GOLD,
              border:'none', padding:'12px 28px', borderRadius:10, fontFamily:'sans-serif',
              fontSize:13, fontWeight:700, letterSpacing:'0.06em', cursor:'pointer',
            }}
          >
            ← Back Home
          </button>
        </div>
      </div>
    );
  }

  const sectionKeys = Object.keys(sections);
  const currentSection = sections[selectedSection];
  const currentData = currentSection?.items || [];

  // An item is "active" if it's being hovered OR it's the pinned target
  const isItemActive = (itemId: string) =>
    hoveredItemId === itemId || pinnedItemId === itemId;

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#ffffff',
        fontFamily: 'Georgia, serif',
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&display=swap');

        .ai-sidebar-btn {
          width: 100%; text-align: left; background: none; border: none;
          padding: 12px 16px; cursor: pointer; display: flex; align-items: center;
          gap: 10px; font-family: sans-serif; font-size: 13px; font-weight: 500;
          color: ${TEXT}; border-bottom: 1px solid rgba(117,51,0,0.07);
          transition: background 0.2s, color 0.2s, padding-left 0.2s;
          position: relative;
        }
        .ai-sidebar-btn:last-child { border-bottom: none; }
        .ai-sidebar-btn:hover { background: rgba(229,190,16,0.08); color: ${BROWN}; padding-left: 20px; }
        .ai-sidebar-btn.active {
          background: rgba(229,190,16,0.12);
          color: ${BROWN};
          font-weight: 700;
          border-left: 3px solid ${BROWN};
          padding-left: 13px;
        }
        .ai-content-row {
          padding: 14px 20px;
          border-bottom: 1px solid rgba(229,190,16,0.1);
          display: flex; align-items: flex-start; gap: 14px;
          cursor: pointer; transition: background 0.2s, padding-left 0.2s;
          position: relative;
        }
        .ai-content-row:last-child { border-bottom: none; }
        .ai-content-row:hover { background: rgba(229,190,16,0.07); padding-left: 26px; }
        /* Pinned item gets a persistent highlight */
        .ai-content-row.pinned {
          background: rgba(229,190,16,0.13);
          padding-left: 26px;
          border-left: 3px solid ${GOLD};
        }
        .ai-back-btn {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(229,190,16,0.12); border: 1px solid rgba(229,190,16,0.3);
          color: ${GOLD}; padding: 8px 16px; border-radius: 8px;
          font-family: sans-serif; font-size: 12px; font-weight: 700;
          letter-spacing: 0.06em; cursor: pointer; transition: background 0.2s;
          text-transform: uppercase;
        }
        .ai-back-btn:hover { background: rgba(229,190,16,0.22); }
        .ai-new-badge {
          font-family: sans-serif; font-size: 9px; font-weight: 700;
          letter-spacing: 0.1em; text-transform: uppercase;
          background: linear-gradient(90deg,${BROWN},${BROWN2});
          color: ${GOLD}; padding: 2px 8px; border-radius: 20px;
          flex-shrink: 0; align-self: flex-start; margin-top: 3px;
        }
        .ai-scroll::-webkit-scrollbar { width: 5px; }
        .ai-scroll::-webkit-scrollbar-track { background: rgba(229,190,16,0.05); }
        .ai-scroll::-webkit-scrollbar-thumb { background: rgba(229,190,16,0.25); border-radius: 3px; }
      `}</style>

      <div style={{ maxWidth: 1120, margin: '0 auto', padding: '0 24px 60px' }}>

        {/* ── Page Header ── */}
        <motion.div
          initial={{ opacity:0, y:-16 }}
          animate={{ opacity:1, y:0 }}
          transition={{ duration:0.5 }}
          style={{ marginBottom:36 }}
        >
          {/* Breadcrumb */}
          <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:20, fontFamily:'sans-serif', fontSize:12, color:MUTED }}>
            <button className="ai-back-btn mt-5" onClick={() => navigate('/')}>← Home</button>
            <span style={{ color:'rgba(176,128,96,0.4)' }}>›</span>
            <span style={{ color:MUTED }}>Quick Information</span>
            <span style={{ color:'rgba(176,128,96,0.4)' }}>›</span>
            <span style={{ color:BROWN, fontWeight:700 }}>{currentDept.title}</span>
          </div>

          {/* Title block */}
          <div style={{ display:'flex', alignItems:'center', gap:16 }}>
            <div style={{ width:52, height:52, borderRadius:14, background:`linear-gradient(135deg,${BROWN},${BROWN2})`, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, boxShadow:`0 4px 16px rgba(117,51,0,0.3)` }}>
              <svg viewBox="0 0 20 20" fill={GOLD} width="22" height="22">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <div style={{ fontFamily:'sans-serif', fontSize:9, fontWeight:700, letterSpacing:'0.16em', textTransform:'uppercase', color:MUTED, marginBottom:4 }}>
                ✦ Quick Information
              </div>
              <h1 style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 'clamp(22px,3.5vw,36px)',
                fontWeight: 800,
                color: DARK,
                margin: 0,
                lineHeight: 1.15,
              }}>
                {currentDept.title}
              </h1>
            </div>
          </div>

          <div style={{ height:1, background:'linear-gradient(90deg,rgba(229,190,16,0.5),transparent)', marginTop:24 }} />
        </motion.div>

        {/* ── Two-column layout ── */}
        <div style={{ display:'grid', gridTemplateColumns:'260px 1fr', gap:24, alignItems:'start' }}>

          {/* ── LEFT SIDEBAR ── */}
          <motion.div
            initial={{ opacity:0, x:-20 }}
            animate={{ opacity:1, x:0 }}
            transition={{ duration:0.55, delay:0.15 }}
            style={{ position:'sticky', top:100 }}
          >
            <div
              style={{
                background:'#fff',
                borderRadius:16,
                overflow:'hidden',
                border:'1.5px solid rgba(117,51,0,0.12)',
                boxShadow:'0 2px 12px rgba(117,51,0,0.06)',
              }}
            >
              {/* Sidebar header */}
              <div
                style={{
                  padding:'16px 16px 14px',
                  background:'linear-gradient(135deg,#fff8ee,#fdf3d8)',
                  borderBottom:'1.5px solid rgba(117,51,0,0.1)',
                  position:'relative', overflow:'hidden',
                }}
              >
                <div style={{ position:'absolute', top:0, left:0, right:0, height:2, background:`linear-gradient(90deg,${GOLD},transparent)` }} />
                <div style={{ fontFamily:'sans-serif', fontSize:8, fontWeight:700, letterSpacing:'0.16em', textTransform:'uppercase', color:MUTED, marginBottom:4 }}>
                  Navigation
                </div>
                <div style={{ fontFamily:"'Playfair Display', Georgia, serif", fontSize:16, fontWeight:700, color:BROWN, position:'relative', zIndex:1 }}>
                  Sections
                </div>
              </div>

              {/* Section links */}
              <nav>
                {sectionKeys.map((key) => {
                  const sec = sections[key];
                  const isActive = selectedSection === key;
                  return (
                    <button
                      key={key}
                      className={`ai-sidebar-btn${isActive ? ' active' : ''}`}
                      onClick={() => {
                        setSelectedSection(key);
                        // Clear pinned item when user manually switches sections
                        setPinnedItemId(null);
                      }}
                    >
                      {sec.icon && <span style={{ fontSize:16, flexShrink:0 }}>{sec.icon}</span>}
                      <span style={{ flex:1, textAlign:'left' }}>{sec.label}</span>
                      {isActive && (
                        <svg viewBox="0 0 8 12" width="7" height="12" fill={BROWN}>
                          <path d="M1.5 1l5 5-5 5" stroke={BROWN} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Info hint card */}
            <motion.div
              initial={{ opacity:0, y:10 }}
              animate={{ opacity:1, y:0 }}
              transition={{ delay:0.5 }}
              style={{
                marginTop:16,
                background:'#fff',
                border:'1.5px solid rgba(117,51,0,0.12)',
                borderRadius:14,
                padding:'14px 16px',
                boxShadow:'0 2px 12px rgba(117,51,0,0.06)',
              }}
            >
              <div style={{ display:'flex', gap:10, alignItems:'flex-start' }}>
                <div style={{ width:34, height:34, borderRadius:10, background:'rgba(229,190,16,0.15)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                  <span style={{ fontSize:16 }}>ℹ️</span>
                </div>
                <div>
                  <div style={{ fontFamily:'sans-serif', fontSize:12, fontWeight:700, color:BROWN, marginBottom:4 }}>Need Help?</div>
                  <p style={{ fontFamily:'sans-serif', fontSize:11, color:MUTED, lineHeight:1.6, margin:0 }}>
                    Contact the department office or visit the university help desk for further assistance.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Quick nav box */}
            <motion.div
              initial={{ opacity:0, y:10 }}
              animate={{ opacity:1, y:0 }}
              transition={{ delay:0.6 }}
              style={{
                marginTop:16,
                background:'#fff',
                border:'1.5px solid rgba(117,51,0,0.12)',
                borderRadius:14,
                overflow:'hidden',
                boxShadow:'0 2px 12px rgba(117,51,0,0.06)',
              }}
            >
              {/* Header */}
              <div style={{ padding:'12px 16px', borderBottom:'1px solid rgba(117,51,0,0.1)', display:'flex', alignItems:'center', gap:8 }}>
                <div style={{ width:6, height:6, borderRadius:'50%', background:GOLD, flexShrink:0 }} />
                <span style={{ fontFamily:'sans-serif', fontSize:10, fontWeight:700, letterSpacing:'0.14em', textTransform:'uppercase', color:MUTED }}>
                  Quick Navigate
                </span>
              </div>
              {(['administration','academics','admissions'] as DepartmentType[]).map((key) => {
                const dept = allInfoData[key as DepartmentType];
                const isCurrentDept = department === key;
                return (
                  <button
                    key={key}
                    onClick={() => { window.scrollTo({ top:0, behavior:'smooth' }); navigate(`/all-info/${key}`); }}
                    style={{
                      width:'100%', textAlign:'left',
                      background: isCurrentDept ? 'rgba(229,190,16,0.1)' : 'none',
                      border:'none', borderBottom:'1px solid rgba(117,51,0,0.07)',
                      borderLeft: isCurrentDept ? `3px solid ${BROWN}` : '3px solid transparent',
                      padding:'11px 14px', cursor:'pointer', display:'flex', alignItems:'center',
                      gap:10, fontFamily:'sans-serif', fontSize:13,
                      fontWeight: isCurrentDept ? 700 : 500,
                      color: isCurrentDept ? BROWN : TEXT,
                      transition:'background 0.2s, color 0.2s',
                    }}
                    onMouseEnter={e => { if (!isCurrentDept) { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(229,190,16,0.07)'; (e.currentTarget as HTMLButtonElement).style.color = BROWN; } }}
                    onMouseLeave={e => { if (!isCurrentDept) { (e.currentTarget as HTMLButtonElement).style.background = 'none'; (e.currentTarget as HTMLButtonElement).style.color = TEXT; } }}
                  >
                    <span style={{ fontSize:15 }}>
                      {key === 'administration' ? '🏛️' : key === 'academics' ? '📚' : '📝'}
                    </span>
                    <span style={{ flex:1 }}>{dept?.title || key}</span>
                    {isCurrentDept && (
                      <svg viewBox="0 0 8 12" width="7" height="12">
                        <path d="M1.5 1l5 5-5 5" stroke={BROWN} strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </button>
                );
              })}
            </motion.div>
          </motion.div>

          {/* ── RIGHT CONTENT ── */}
          <motion.div
            initial={{ opacity:0, x:20 }}
            animate={{ opacity:1, x:0 }}
            transition={{ duration:0.55, delay:0.2 }}
          >
            <div
              style={{
                background:'#fff',
                border:'1.5px solid rgba(229,190,16,0.28)',
                borderRadius:20,
                overflow:'hidden',
                boxShadow:'0 6px 28px rgba(117,51,0,0.08)',
              }}
            >
              {/* Panel header */}
              <div
                style={{
                  background:`linear-gradient(135deg,${CREAM},#fff8e0)`,
                  borderBottom:`2px solid rgba(229,190,16,0.35)`,
                  padding:'18px 24px',
                  display:'flex',
                  alignItems:'center',
                  justifyContent:'space-between',
                  gap:12,
                }}
              >
                <div>
                  <div style={{ fontFamily:'sans-serif', fontSize:9, fontWeight:700, letterSpacing:'0.14em', textTransform:'uppercase', color:MUTED, marginBottom:4 }}>
                    Currently Viewing
                  </div>
                  <h2 style={{
                    fontFamily:"'Playfair Display', Georgia, serif",
                    fontSize:'clamp(18px,2.5vw,26px)',
                    fontWeight:700,
                    color:DARK,
                    margin:0,
                    lineHeight:1.2,
                  }}>
                    {currentSection?.label || 'Information'}
                  </h2>
                </div>
                <div
                  style={{
                    fontFamily:'sans-serif', fontSize:11, fontWeight:700,
                    color:BROWN, background:'rgba(229,190,16,0.18)',
                    border:'1px solid rgba(229,190,16,0.35)',
                    padding:'4px 12px', borderRadius:20, whiteSpace:'nowrap',
                  }}
                >
                  {currentData.length} item{currentData.length !== 1 ? 's' : ''}
                </div>
              </div>

              {/* Content list */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedSection}
                  initial={{ opacity:0, y:10 }}
                  animate={{ opacity:1, y:0 }}
                  exit={{ opacity:0, y:-6 }}
                  transition={{ duration:0.28 }}
                  className="ai-scroll"
                  style={{ maxHeight:600, overflowY:'auto' }}
                >
                  {currentData.length > 0 ? (
                    currentData.map((item, index) => {
                      const isPinned  = pinnedItemId === item.id;
                      const isActive  = isItemActive(item.id);
                      const isExpanded = isActive; // expand on hover OR when pinned

                      return (
                        <motion.div
                          key={item.id ?? index}
                          ref={isPinned ? pinnedItemRef : null}
                          className={`ai-content-row${isPinned ? ' pinned' : ''}`}
                          initial={{ opacity:0, x:-8 }}
                          animate={{ opacity:1, x:0 }}
                          transition={{ duration:0.2, delay: index * 0.04 }}
                          onMouseEnter={() => setHoveredItemId(item.id)}
                          onMouseLeave={() => setHoveredItemId(null)}
                          // Clicking a pinned item clears the pin (back to hover-only)
                          onClick={() => setPinnedItemId(prev => prev === item.id ? null : item.id)}
                        >
                          {/* Number badge */}
                          <div
                            style={{
                              width:28, height:28, borderRadius:8, flexShrink:0,
                              background: isActive
                                ? `linear-gradient(135deg,${BROWN},${BROWN2})`
                                : 'rgba(229,190,16,0.12)',
                              border:`1px solid ${isActive ? BROWN : 'rgba(229,190,16,0.3)'}`,
                              display:'flex', alignItems:'center', justifyContent:'center',
                              transition:'background 0.2s, border-color 0.2s',
                            }}
                          >
                            <span style={{ fontSize:10, fontWeight:700, fontFamily:'sans-serif', color: isActive ? GOLD : MUTED }}>
                              {String(index + 1).padStart(2, '0')}
                            </span>
                          </div>

                          {/* Text */}
                          <div style={{ flex:1 }}>
                            <p style={{
                              fontFamily:'sans-serif', fontSize:13.5,
                              color: isActive ? BROWN : TEXT,
                              fontWeight: isActive ? 600 : 400,
                              margin:0, lineHeight:1.6,
                              transition:'color 0.2s',
                            }}>
                              {item.title}
                            </p>
                            {item.date && (
                              <p style={{ fontFamily:'sans-serif', fontSize:11, color:MUTED, margin:'3px 0 0' }}>
                                {new Date(item.date).toLocaleDateString('en-IN', { year:'numeric', month:'long', day:'numeric' })}
                              </p>
                            )}
                            {item.content && (
                              <AnimatePresence>
                                {isExpanded && (
                                  <motion.p
                                    initial={{ opacity:0, height:0 }}
                                    animate={{ opacity:1, height:'auto' }}
                                    exit={{ opacity:0, height:0 }}
                                    transition={{ duration:0.25 }}
                                    style={{
                                      fontFamily:'sans-serif', fontSize:12, color:'#7a4010',
                                      lineHeight:1.65, margin:'6px 0 0', overflow:'hidden',
                                    }}
                                  >
                                    {item.content}
                                  </motion.p>
                                )}
                              </AnimatePresence>
                            )}
                          </div>

                          {/* Badges & arrow */}
                          <div style={{ display:'flex', flexDirection:'column', alignItems:'flex-end', gap:6, flexShrink:0 }}>
                            {item.isNew && <span className="ai-new-badge">New</span>}
                            <motion.span
                              animate={{ x: isActive ? 0 : -6, opacity: isActive ? 1 : 0 }}
                              transition={{ duration:0.2 }}
                              style={{ fontSize:16, color:BROWN }}
                            >
                              →
                            </motion.span>
                          </div>
                        </motion.div>
                      );
                    })
                  ) : (
                    <div style={{ padding:'60px 20px', textAlign:'center' }}>
                      <div style={{ fontSize:48, marginBottom:12 }}>📭</div>
                      <p style={{ fontFamily:'sans-serif', fontSize:14, color:MUTED, margin:0 }}>No items available at the moment.</p>
                      <p style={{ fontFamily:'sans-serif', fontSize:12, color:'rgba(176,128,96,0.6)', margin:'6px 0 0' }}>Check back later for updates.</p>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AllInfoPage;