import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Tab = 'mission' | 'vision';

interface TabItem {
  key: Tab;
  label: string;
  heading: string;
  subheading: string;
  mainPara?: string;
  bullets?: string[];
  paragraphs?: string[];
  quote: string;
  badge: string;
  images: [string, string];
}

// TODO: swap these for real campus / student photography when available.
const tabs: TabItem[] = [
  {
    key: 'mission',
    label: 'Mission',
    badge: '✦ Our Purpose',
    heading: 'Our Mission',
    subheading: "Shaping tomorrow's leaders through purposeful education",
    mainPara:
      "Our mission is to develop life-long learners, equipped with competencies, nurtured through integration of academic learning with humanity. We endeavor to make our students' future-ready, confident of taking up professional and societal challenges with passion and maturity.",
    bullets: [
      'Implementation of the policies of higher education to ensure quality and equitable access across all students.',
      'Giving the benefit of welfare schemes like scholarships to SC/ST/OBC, minorities and weaker sections of society.',
      'To make students economically independent, academically strong and socially committed to the task of building a strong nation.',
    ],
    quote:
      '"Our mission is not merely to educate, but to transform — building citizens who are capable, compassionate, and committed to the greater good."',
    images: [
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=700&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=700&q=80&auto=format&fit=crop',
    ],
  },
  {
    key: 'vision',
    label: 'Vision',
    badge: '✦ Our Aspiration',
    heading: 'Our Vision',
    subheading: 'A beacon of knowledge, character and national progress',
    paragraphs: [
      'The vision of the college is to inculcate among the students a spirit of entrepreneurship, develop in them cultural values, a scientific temper and above all make them morally sound, responsible citizens of the country through innovative academic practices.',
      'To be an educational institution of repute dedicated to excellence with a humanities outlook contributing to social upliftment through improvement in the quality of life.',
      'Empowering youth for capacity-building, inculcating basic moral values, community development, and fair access for the poor and socially disadvantaged.',
    ],
    quote:
      '"We envision a college that is not just a seat of learning, but a beacon of hope — a torch-bearer for generations of students seeking purpose, knowledge, and excellence."',
    images: [
      'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=700&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=700&q=80&auto=format&fit=crop',
    ],
  },
];

const tabIcons: Record<Tab, React.ReactNode> = {
  mission: (
    <svg viewBox="0 0 20 20" width="14" height="14" fill="currentColor">
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
        clipRule="evenodd"
      />
    </svg>
  ),
  vision: (
    <svg viewBox="0 0 20 20" width="14" height="14" fill="currentColor">
      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
      <path
        fillRule="evenodd"
        d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
        clipRule="evenodd"
      />
    </svg>
  ),
};

const BROWN = '#753300';
const BROWN2 = '#9a4a10';
const GOLD = '#e5be10';
const CREAM = '#fdf8ee';
const DARK = '#3a1a00';
const TEXT = '#4a2000';
const MUTED = '#b08060';

export default function Mission() {
  const [activeTab, setActiveTab] = useState<Tab>('mission');
  const current = tabs.find((t) => t.key === activeTab)!;

  return (
    <section
      style={{
        background: '#ffffff',
        padding: '60px 24px 80px',
        fontFamily: 'Georgia, serif',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <style>{`
        .mv-tab-btn { display:flex; align-items:center; gap:8px; padding:13px 28px; font-family:sans-serif; font-size:15px; font-weight:500; color:${MUTED}; background:none; border:none; cursor:pointer; position:relative; transition:color 0.2s; }
        .mv-tab-btn:hover { color:${BROWN}; }
        .mv-tab-btn.active { color:${BROWN}; font-weight:700; }
        .mv-tab-btn.active::after { content:''; position:absolute; bottom:-2px; left:0; right:0; height:2px; background:linear-gradient(90deg,${BROWN},${GOLD}); border-radius:2px 2px 0 0; }
        .mv-tab-icon { width:28px; height:28px; border-radius:7px; background:rgba(229,190,16,0.15); border:1px solid rgba(229,190,16,0.3); display:flex; align-items:center; justify-content:center; color:${MUTED}; flex-shrink:0; transition:background 0.2s,border-color 0.2s,color 0.2s; }
        .mv-tab-btn.active .mv-tab-icon { background:linear-gradient(135deg,${BROWN},${BROWN2}); border-color:${BROWN}; color:${GOLD}; }
        .mv-bullet-row { display:flex; align-items:flex-start; gap:14px; padding:14px 18px; border-bottom:1px solid rgba(229,190,16,0.15); }
        .mv-bullet-row:last-child { border-bottom:none; }

        .mv-layout { display:grid; grid-template-columns:1fr; gap:44px; max-width:1160px; margin:0 auto; align-items:start; }
        @media (min-width: 960px) { .mv-layout { grid-template-columns: 0.85fr 1.15fr; gap:64px; } }

        .mv-collage { position:relative; height:340px; }
        @media (min-width: 960px) { .mv-collage { height:520px; position:sticky; top:100px; } }
        .mv-collage-img-back, .mv-collage-img-front { position:absolute; border-radius:20px; overflow:hidden; box-shadow:0 20px 50px rgba(58,26,0,0.18); border:6px solid #fff; }
        .mv-collage-img-back img, .mv-collage-img-front img { width:100%; height:100%; object-fit:cover; display:block; }
        .mv-collage-img-back { top:0; left:0; width:78%; height:72%; z-index:1; }
        .mv-collage-img-front { bottom:0; right:0; width:60%; height:56%; z-index:2; border-color:${CREAM}; }
        .mv-collage-badge { position:absolute; top:-14px; right:10%; z-index:3; background:linear-gradient(135deg,${GOLD},#c9a800); color:${DARK}; font-family:sans-serif; font-size:11px; font-weight:800; letter-spacing:0.08em; text-transform:uppercase; padding:9px 16px; border-radius:40px; box-shadow:0 10px 24px rgba(229,190,16,0.4); }
        @media (min-width: 960px) { .mv-collage-badge { top:-14px; right:6%; } }
        .mv-collage-ring { position:absolute; width:120px; height:120px; border:2px dashed rgba(229,190,16,0.4); border-radius:50%; top:-30px; left:-30px; z-index:0; }
      `}</style>

      <div style={{ maxWidth: 860, margin: '0 auto 0' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 44 }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
            <div style={{ height: 1, width: 44, background: 'linear-gradient(90deg,transparent,#e5be10)' }} />
            <span
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#9a6040',
                fontFamily: 'sans-serif',
              }}
            >
              Govt. Tilak P.G. College · Katni, M.P.
            </span>
            <div style={{ height: 1, width: 44, background: 'linear-gradient(90deg,#e5be10,transparent)' }} />
          </div>
          <h2
            style={{
              fontSize: 'clamp(30px,4.5vw,46px)',
              fontWeight: 800,
              background: `linear-gradient(135deg,${BROWN} 0%,#b36000 50%,${GOLD} 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              lineHeight: 1.1,
              margin: '0 0 10px',
            }}
          >
            Mission &amp; Vision
          </h2>
          <p
            style={{
              fontSize: 15,
              color: '#9a6040',
              maxWidth: 420,
              margin: '0 auto',
              lineHeight: 1.6,
              fontFamily: 'sans-serif',
              fontWeight: 400,
            }}
          >
            The mission that drives us and the vision that guides us forward.
          </p>
        </motion.div>

        {/* Tabs */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            borderBottom: '2px solid rgba(229,190,16,0.25)',
            marginBottom: 40,
          }}
        >
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`mv-tab-btn ${activeTab === tab.key ? 'active' : ''}`}
            >
              <span className="mv-tab-icon">{tabIcons[tab.key]}</span>
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Two-column layout: image collage + tab content */}
      <div className="mv-layout">
        {/* Image collage */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeTab}-collage`}
            className="mv-collage"
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -16 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <div className="mv-collage-ring" />
            <div className="mv-collage-img-back">
              <img src={current.images[0]} alt={`${current.heading} — college life`} loading="lazy" />
            </div>
            <div className="mv-collage-img-front">
              <img src={current.images[1]} alt={`${current.heading} — students`} loading="lazy" />
            </div>
            <span className="mv-collage-badge">Est. 1958</span>
          </motion.div>
        </AnimatePresence>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            {/* Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 5,
                fontSize: 9,
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: BROWN,
                background: 'rgba(229,190,16,0.18)',
                border: '1px solid rgba(229,190,16,0.35)',
                padding: '3px 10px',
                borderRadius: 20,
                marginBottom: 16,
                fontFamily: 'sans-serif',
              }}
            >
              {current.badge}
            </div>

            <h3
              style={{
                fontSize: 'clamp(24px,3.5vw,36px)',
                fontWeight: 800,
                color: DARK,
                margin: '0 0 6px',
              }}
            >
              {current.heading}
            </h3>
            <p
              style={{
                fontFamily: 'sans-serif',
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: GOLD,
                margin: '0 0 20px',
              }}
            >
              {current.subheading}
            </p>
            <div
              style={{
                width: 48,
                height: 2,
                background: `linear-gradient(90deg,${BROWN},${GOLD})`,
                borderRadius: 1,
                margin: '0 0 32px',
              }}
            />

            {/* Mission */}
            {current.key === 'mission' && current.mainPara && (
              <div
                style={{
                  background: `linear-gradient(135deg,${BROWN},${BROWN2})`,
                  borderRadius: 16,
                  padding: '22px 24px',
                  marginBottom: 20,
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: -40,
                    right: -40,
                    width: 150,
                    height: 150,
                    background: 'rgba(229,190,16,0.1)',
                    borderRadius: '50%',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    bottom: -30,
                    left: 40,
                    width: 90,
                    height: 90,
                    background: 'rgba(229,190,16,0.07)',
                    borderRadius: '50%',
                  }}
                />
                <div
                  style={{
                    fontFamily: 'sans-serif',
                    fontSize: 9,
                    fontWeight: 700,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'rgba(229,190,16,0.8)',
                    marginBottom: 10,
                  }}
                >
                  ✦ Mission Statement
                </div>
                <p
                  style={{
                    fontSize: 15,
                    lineHeight: 1.75,
                    color: 'rgba(253,248,238,0.9)',
                    fontFamily: 'sans-serif',
                    fontWeight: 400,
                    margin: 0,
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  {current.mainPara}
                </p>
              </div>
            )}

            {current.bullets && (
              <ul
                style={{
                  listStyle: 'none',
                  margin: '0 0 20px',
                  padding: 0,
                  background: CREAM,
                  border: '1.5px solid rgba(229,190,16,0.3)',
                  borderRadius: 14,
                  overflow: 'hidden',
                }}
              >
                {current.bullets.map((b, i) => (
                  <li key={i} className="mv-bullet-row">
                    <span
                      style={{
                        width: 28,
                        height: 28,
                        flexShrink: 0,
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg,#e5be10,#c9a800)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 12,
                        color: '#3a1a00',
                      }}
                    >
                      ★
                    </span>
                    <span
                      style={{
                        fontFamily: 'sans-serif',
                        fontSize: 14,
                        lineHeight: 1.65,
                        color: TEXT,
                        fontWeight: 400,
                        paddingTop: 4,
                      }}
                    >
                      {b}
                    </span>
                  </li>
                ))}
              </ul>
            )}

            {/* Vision */}
            {current.key === 'vision' && current.paragraphs && (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 20 }}>
                {current.paragraphs.map((p, i) => (
                  <div
                    key={i}
                    style={{
                      background: CREAM,
                      border: '1.5px solid rgba(229,190,16,0.25)',
                      borderRadius: 14,
                      padding: '18px',
                      gridColumn: i === 0 ? '1 / -1' : 'auto',
                    }}
                  >
                    <div
                      style={{
                        fontFamily: 'sans-serif',
                        fontSize: 9,
                        fontWeight: 700,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: MUTED,
                        marginBottom: 8,
                      }}
                    >
                      {['✦ Core Vision', '✦ Academic Excellence', '✦ Empowerment'][i]}
                    </div>
                    <p
                      style={{
                        fontFamily: 'sans-serif',
                        fontSize: 13.5,
                        lineHeight: 1.7,
                        color: TEXT,
                        margin: 0,
                        fontWeight: 400,
                      }}
                    >
                      {p}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Quote */}
            <div
              style={{
                marginTop: 28,
                borderLeft: '4px solid #e5be10',
                background: 'linear-gradient(135deg,rgba(229,190,16,0.08),rgba(117,51,0,0.04))',
                padding: '20px 22px',
                borderRadius: '0 12px 12px 0',
              }}
            >
              <p
                style={{
                  fontSize: 16,
                  fontStyle: 'italic',
                  color: DARK,
                  fontWeight: 600,
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {current.quote}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}