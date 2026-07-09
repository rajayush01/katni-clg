import React from 'react';
import { motion } from 'framer-motion';
import chancellor from '../../assets/rr1.png';

const GOLD = '#e5be10';

export default function ChancellorSection() {
  return (
    <section
      style={{
        padding: '72px 24px',
        background: '#fafafa',
        fontFamily: 'Georgia, serif',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,600&display=swap');
        .chancellor-card { transition: box-shadow 0.3s ease; }
        .chancellor-card:hover { box-shadow: 0 28px 80px rgba(0,0,0,0.1) !important; }
        .principal-img-wrap::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(160deg, transparent 40%, rgba(0,0,0,0.35) 100%);
          pointer-events: none;
        }
        .chancellor-grid {
          display: grid;
          grid-template-columns: 1fr;
        }
        @media (min-width: 768px) {
          .chancellor-grid {
            grid-template-columns: 1fr 560px;
          }
        }
        .chancellor-text-col {
          padding: 36px 24px;
          order: 2;
        }
        @media (min-width: 768px) {
          .chancellor-text-col {
            padding: 52px 48px;
            order: 1;
          }
        }
        .chancellor-img-col {
          min-height: 320px;
          position: relative;
          background: #e8e8e8;
          overflow: hidden;
          order: 1;
        }
        @media (min-width: 768px) {
          .chancellor-img-col {
            min-height: 480px;
            order: 2;
          }
        }
      `}</style>

      <div style={{ maxWidth: 1040, margin: '0 auto' }}>

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: 48 }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12 }}>
            <div style={{ height: 1, width: 56, background: 'linear-gradient(90deg,transparent,#e5be10)' }} />
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#aaaaaa', fontFamily: 'sans-serif' }}>
              From the Principal's Desk
            </span>
            <div style={{ height: 1, width: 56, background: 'linear-gradient(90deg,#e5be10,transparent)' }} />
          </div>
        </motion.div>

        {/* Main card */}
        <motion.div
          className="chancellor-card"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          style={{
            borderRadius: 24,
            overflow: 'hidden',
            border: '1.5px solid #eeeeee',
            boxShadow: '0 8px 40px rgba(0,0,0,0.07)',
            background: '#fff',
          }}
        >
          <div className="chancellor-grid">
            {/* ── LEFT: Text content ── */}
            <div
              className="chancellor-text-col"
              style={{
                background: '#ffffff',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: 0,
                position: 'relative',
              }}
            >
              {/* Top accent line */}
              <div style={{ width: 48, height: 3, background: `linear-gradient(90deg,#cccccc,${GOLD})`, borderRadius: 2, marginBottom: 28 }} />

              {/* Welcome badge */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  fontSize: 9,
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: '#555555',
                  background: 'rgba(229,190,16,0.1)',
                  border: '1px solid rgba(229,190,16,0.35)',
                  padding: '4px 12px',
                  borderRadius: 20,
                  fontFamily: 'sans-serif',
                  width: 'fit-content',
                  marginBottom: 20,
                }}
              >
                ✦ Welcome Message
              </div>

              <h2
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: 'clamp(22px,3.5vw,40px)',
                  fontWeight: 800,
                  color: '#1a1a1a',
                  lineHeight: 1.18,
                  margin: '0 0 24px',
                }}
              >
                Welcome to<br />
                <span style={{ color: '#333333' }}>
                  Govt. Tilak P.G. College
                </span>
              </h2>

              {/* Pull quote */}
              <div
                style={{
                  background: '#f5f5f5',
                  borderLeft: `3px solid ${GOLD}`,
                  borderRadius: '0 10px 10px 0',
                  padding: '18px 20px',
                  marginBottom: 24,
                }}
              >
                <svg viewBox="0 0 24 24" fill="rgba(229,190,16,0.6)" width="20" height="20" style={{ marginBottom: 8 }}>
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p
                  style={{
                    fontSize: 14,
                    fontStyle: 'italic',
                    color: '#444444',
                    lineHeight: 1.65,
                    margin: 0,
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontWeight: 600,
                  }}
                >
                  "A desire can change nothing, a decision can change something, but a determination can change everything."
                </p>
              </div>

              {/* Body paragraph */}
              <p
                style={{
                  fontSize: 14,
                  color: '#555555',
                  lineHeight: 1.85,
                  fontFamily: 'sans-serif',
                  fontWeight: 400,
                  margin: '0 0 32px',
                }}
              >
                It is my pleasure to welcome you to Govt. Tilak PG College Katni, an institution that has set itself a vision of leadership in quality education. The academic activities concentrate on helping the students gain an excellent theoretical knowledge base and develop the skills to implement them. There is also ample scope in co-curricular and extra-curricular activities, wherein students are encouraged to prove themselves as not only well-qualified graduates but also responsible, ideal citizens of our country.
              </p>

              {/* Signature area */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{ width: 44, height: 44, borderRadius: '50%', background: `linear-gradient(135deg,${GOLD},#c9a800)`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg viewBox="0 0 20 20" fill="#1a1a1a" width="18" height="18">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z" />
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: '#1a1a1a', fontFamily: 'sans-serif', letterSpacing: '0.02em' }}>
                    Principal
                  </div>
                  <div style={{ fontSize: 11, color: '#999999', fontFamily: 'sans-serif', fontWeight: 400 }}>
                    Govt. Tilak P.G. College, Katni (M.P.)
                  </div>
                </div>
              </div>
            </div>

            {/* ── RIGHT: Image panel ── */}
            <div className="chancellor-img-col">
              {/* Gold top bar */}
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg,${GOLD},#cccccc)`, zIndex: 3 }} />

              {/* Photo */}
              <div
                className="principal-img-wrap"
                style={{ position: 'absolute', inset: 0, zIndex: 2 }}
              >
                <img
                  src={chancellor}
                  alt="Principal"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
                />
              </div>

              {/* Bottom info chip */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 24,
                  left: 20,
                  right: 20,
                  background: 'rgba(255,255,255,0.85)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(229,190,16,0.4)',
                  borderRadius: 12,
                  padding: '12px 16px',
                  zIndex: 4,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                }}
              >
                <div style={{ width: 36, height: 36, borderRadius: '50%', background: `linear-gradient(135deg,${GOLD},#c9a800)`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg viewBox="0 0 20 20" fill="#1a1a1a" width="16" height="16">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: '#1a1a1a', fontFamily: 'sans-serif', letterSpacing: '0.04em' }}>Principal</div>
                  <div style={{ fontSize: 10, color: '#888888', fontFamily: 'sans-serif', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Govt. Tilak P.G. College</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}