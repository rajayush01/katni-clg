import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { allInfoData, DepartmentType } from '@/data/allInfoData';

const GOLD = '#e5be10';

const EventsSection: React.FC = () => {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const handleItemClick = (deptKey: DepartmentType, itemIndex: number) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const dept = allInfoData[deptKey];
    if (!dept) return;
    const link = dept.itemLinks?.[itemIndex];
    if (link) {
      navigate(`/all-info/${deptKey}?section=${link.section}&item=${link.itemId}`);
    } else {
      navigate(`/all-info/${deptKey}`);
    }
  };

  const handleViewAll = (key: DepartmentType) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate(`/all-info/${key}`);
  };

  return (
    <section
      style={{
        background: '#ffffff',
        padding: 'clamp(48px,8vw,72px) clamp(16px,5vw,32px) clamp(56px,9vw,80px)',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: 'Georgia, serif',
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&display=swap');

        .ev2-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }
        @media (min-width: 560px) {
          .ev2-grid { grid-template-columns: repeat(2, 1fr); gap: 22px; }
        }
        @media (min-width: 900px) {
          .ev2-grid { grid-template-columns: repeat(3, 1fr); gap: 24px; }
        }

        .ev2-card {
          background: #fff;
          border: 1.5px solid #eeeeee;
          border-radius: 16px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow: 0 2px 16px rgba(0,0,0,0.05);
          transition: transform 0.28s, box-shadow 0.28s, border-color 0.28s;
          min-width: 0;
        }
        .ev2-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 40px rgba(0,0,0,0.1);
          border-color: rgba(229,190,16,0.5);
        }
        @media (hover: none) {
          .ev2-card:hover { transform: none; }
        }

        .ev2-item {
          padding: 13px 16px;
          border-bottom: 1px solid #f0f0f0;
          font-size: 13.5px;
          color: #444444;
          font-family: sans-serif;
          line-height: 1.55;
          display: flex;
          align-items: flex-start;
          gap: 10px;
          cursor: pointer;
          transition: background 0.18s, color 0.18s, padding-left 0.18s;
          word-break: break-word;
        }
        @media (min-width: 480px) {
          .ev2-item { padding: 14px 20px; font-size: 14px; }
        }
        .ev2-item:last-child { border-bottom: none; }
        .ev2-item:hover {
          background: #fafafa;
          color: #1a1a1a;
          padding-left: 24px;
        }
        .ev2-item-dot {
          width: 5px; height: 5px; border-radius: 50%;
          background: ${GOLD}; flex-shrink: 0; margin-top: 7px;
          transition: transform 0.18s;
        }
        .ev2-item:hover .ev2-item-dot {
          transform: scale(1.5);
        }
        .ev2-btn {
          background: #1a1a1a;
          color: ${GOLD};
          border: none;
          padding: 13px 20px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          cursor: pointer;
          font-family: sans-serif;
          text-align: center;
          width: 100%;
          transition: background 0.2s, letter-spacing 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
        }
        .ev2-btn:hover { background: #333333; letter-spacing: 0.14em; }

        .ev2-scroll {
          max-height: 240px;
          overflow-y: auto;
        }
        @media (min-width: 560px) {
          .ev2-scroll { max-height: 280px; }
        }
        @media (min-width: 900px) {
          .ev2-scroll { max-height: 320px; }
        }
        .ev2-scroll::-webkit-scrollbar { width: 3px; }
        .ev2-scroll::-webkit-scrollbar-track { background: transparent; }
        .ev2-scroll::-webkit-scrollbar-thumb { background: rgba(229,190,16,0.4); border-radius: 2px; }

        .ev2-card-head {
          padding: 16px 16px 12px;
        }
        @media (min-width: 480px) {
          .ev2-card-head { padding: 18px 20px 14px; }
        }
        .ev2-card-title {
          font-size: 14px;
        }
        @media (min-width: 480px) {
          .ev2-card-title { font-size: 15px; }
        }
      `}</style>

      <div style={{ maxWidth: 1120, margin: '0 auto', width: '100%' }}>

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: -18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 'clamp(32px,6vw,48px)' }}
        >
          <div style={{ display:'inline-flex', alignItems:'center', gap:10, marginBottom:14, flexWrap: 'wrap', justifyContent: 'center' }}>
            <div style={{ height:1, width:44, background:'linear-gradient(90deg,transparent,#e5be10)' }} />
            <span style={{ fontSize:10, fontWeight:700, letterSpacing:'0.18em', textTransform:'uppercase', color:'#aaaaaa', fontFamily:'sans-serif' }}>
              Resources &amp; Governance
            </span>
            <div style={{ height:1, width:44, background:'linear-gradient(90deg,#e5be10,transparent)' }} />
          </div>
          <h2 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(26px,6vw,44px)',
            fontWeight: 800,
            color: '#1a1a1a',
            lineHeight: 1.15,
            margin: '0 0 12px',
          }}>
            Quick Information
          </h2>
          <p style={{ fontSize:'clamp(13px,2.2vw,14px)', color:'#888888', fontFamily:'sans-serif', maxWidth:460, margin:'0 auto', lineHeight:1.65, padding: '0 8px' }}>
            Access important resources about our institute's administration, policies, and governance.
          </p>
        </motion.div>

        {/* ── Cards grid ── */}
        <div className="ev2-grid">
          {(Object.keys(allInfoData) as DepartmentType[]).map((key, idx) => {
            const dept = allInfoData[key]!;
            return (
              <motion.div
                key={key}
                className="ev2-card"
                initial={{ opacity:0, y:32 }}
                whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }}
                transition={{ duration:0.4, delay: idx * 0.08 }}
                onMouseEnter={() => setHoveredCard(key)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Card header */}
                <div
                  className="ev2-card-head"
                  style={{
                    background: '#fafafa',
                    borderBottom: '1px solid #eeeeee',
                    position: 'relative',
                  }}
                >
                  <div style={{ position:'absolute', top:0, left:0, right:0, height:2, background:`linear-gradient(90deg,${GOLD},transparent)` }} />
                  <div style={{ display:'flex', alignItems:'center', gap:10, minWidth: 0 }}>
                    <div style={{
                      width:34, height:34, borderRadius:8,
                      background:'rgba(229,190,16,0.12)',
                      border:'1px solid rgba(229,190,16,0.3)',
                      display:'flex', alignItems:'center', justifyContent:'center',
                      flexShrink:0,
                    }}>
                      <svg viewBox="0 0 20 20" fill={GOLD} width="16" height="16">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div style={{ minWidth: 0 }}>
                      <div style={{ fontSize:9, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', color:'#aaaaaa', fontFamily:'sans-serif', marginBottom:2 }}>
                        {key}
                      </div>
                      <div className="ev2-card-title" style={{ fontWeight:700, color:'#1a1a1a', fontFamily:'sans-serif', lineHeight:1.3, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        {dept.title}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Items list */}
                <div className="ev2-scroll" style={{ flex:1 }}>
                  {dept.items.map((item, i) => (
                    <div
                      key={i}
                      className="ev2-item"
                      onClick={() => handleItemClick(key, i)}
                      title={`Go to: ${item}`}
                    >
                      <span className="ev2-item-dot" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* View all button */}
                <button className="ev2-btn" onClick={() => handleViewAll(key)}>
                  <span>View All</span>
                  <svg viewBox="0 0 16 16" width="11" height="11" fill="currentColor">
                    <path fillRule="evenodd" d="M4 8a.5.5 0 01.5-.5h5.793L8.146 5.354a.5.5 0 11.708-.708l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L10.293 8.5H4.5A.5.5 0 014 8z" clipRule="evenodd" />
                  </svg>
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;