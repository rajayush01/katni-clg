import React from 'react';
import { motion } from 'framer-motion';

const BROWN = '#753300';
const BROWN2 = '#9a4a10';
const GOLD = '#e5be10';
const CREAM = '#fdf8ee';
const DARK = '#3a1a00';
const TEXT = '#4a2000';
const MUTED = '#b08060';

const functions = [
  'To evaluate and approve all proposals for workshop/seminars/conferences to be submitted to any funding agency by Department/Functional Unit of the College.',
  'To evaluate and forward submission of project/workshop/seminars/conferences reports.',
  'To promote student trips to research and development centers of national and international repute.',
  'To organize seminars, workshops and conferences at college level.',
  'To motivate faculty members to apply for major and minor research projects.',
  'To maintain a record of all research activities carried out in the college.',
];

const stats = [
  { value: '30+', label: 'Research Projects' },
  { value: '15+', label: 'Publications' },
  { value: '50+', label: 'Seminars Held' },
  { value: '200+', label: 'Participants' },
];

const ResearchCell = () => {
  return (
    <div style={{ fontFamily: 'Georgia, serif', background: '#ffffff', padding: '52px 20px 72px', minHeight: '100vh' }}>
      <style>{`
        .rc-fn-item { display:flex; align-items:flex-start; gap:16px; padding:14px 24px; border-bottom:1px solid rgba(229,190,16,0.12); transition:background .2s; }
        .rc-fn-item:last-child { border-bottom:none; }
        .rc-fn-item:hover { background:rgba(229,190,16,0.07); }
        .rc-contact-btn { display:inline-flex; align-items:center; gap:8px; font-size:13px; font-weight:600; color:${CREAM}; background:linear-gradient(135deg,${BROWN},${BROWN2}); border:none; border-radius:10px; padding:10px 20px; cursor:pointer; text-decoration:none; transition:opacity .2s; white-space:nowrap; }
        .rc-contact-btn:hover { opacity:.88; }
        @media(max-width:600px){ .rc-stats-grid{ grid-template-columns:repeat(2,1fr) !important; } }
      `}</style>

      <div style={{ maxWidth: 860, margin: '0 auto' }}>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ textAlign: 'center', marginBottom: 40 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
            <div style={{ height: 1, width: 36, background: 'linear-gradient(90deg,transparent,#e5be10)' }} />
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#9a6040', fontFamily: 'sans-serif' }}>Govt. Tilak P.G. College · Katni, M.P.</span>
            <div style={{ height: 1, width: 36, background: 'linear-gradient(90deg,#e5be10,transparent)' }} />
          </div>
          <h1 style={{ fontSize: 'clamp(28px,5vw,44px)', fontWeight: 800, background: `linear-gradient(135deg,${BROWN} 0%,${BROWN2} 50%,${GOLD} 100%)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', lineHeight: 1.15, margin: '0 0 8px' }}>
            Research Cell
          </h1>
          <p style={{ fontFamily: 'sans-serif', fontSize: 14, color: MUTED, margin: 0 }}>Promoting innovation, research &amp; academic excellence</p>
        </motion.div>

        {/* Gold divider */}
        <div style={{ width: 48, height: 2, background: `linear-gradient(90deg,${BROWN},${GOLD})`, borderRadius: 1, margin: '0 auto 36px' }} />

        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

          {/* About Card */}
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            style={{ background: CREAM, border: '1.5px solid rgba(229,190,16,0.3)', borderRadius: 16, padding: 28, display: 'flex', gap: 20, alignItems: 'flex-start' }}>
            <div style={{ flexShrink: 0, width: 48, height: 48, borderRadius: 13, background: `linear-gradient(135deg,${BROWN},${BROWN2})`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: 22, height: 22 }}>
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
            </div>
            <div>
              <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 18, fontWeight: 700, color: DARK, marginBottom: 10 }}>The Research Cell</h2>
              <p style={{ fontFamily: 'sans-serif', fontSize: 14, lineHeight: 1.8, color: TEXT, margin: 0 }}>
                The Research and Development Cell is established to promote, monitor and address research activities at Govt. Tilak P.G. College, Katni. The objective of the cell is to monitor and administer research programs for Faculty and Students, and encourage research activities by providing the necessary infrastructural set up to faculty and students at large.
              </p>
            </div>
          </motion.div>

          {/* Stats */}
          <div className="rc-stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14 }}>
            {stats.map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.5 }}
                style={{ background: `linear-gradient(135deg,${BROWN},${BROWN2})`, borderRadius: 14, padding: '22px 12px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: -20, right: -20, width: 70, height: 70, background: 'rgba(229,190,16,0.12)', borderRadius: '50%' }} />
                <p style={{ fontFamily: 'Georgia, serif', fontSize: 28, fontWeight: 800, color: GOLD, lineHeight: 1, margin: 0 }}>{s.value}</p>
                <p style={{ fontFamily: 'sans-serif', fontSize: 11, fontWeight: 600, color: 'rgba(253,248,238,0.75)', marginTop: 6, textTransform: 'uppercase', letterSpacing: '0.07em' }}>{s.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Functions Card */}
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            style={{ background: CREAM, border: '1.5px solid rgba(229,190,16,0.3)', borderRadius: 16, overflow: 'hidden' }}>
            <div style={{ padding: '18px 24px', borderBottom: '1px solid rgba(229,190,16,0.2)', display: 'flex', alignItems: 'center', gap: 12, background: 'rgba(229,190,16,0.06)' }}>
              <div style={{ width: 4, height: 22, background: `linear-gradient(180deg,${BROWN},${GOLD})`, borderRadius: 2, flexShrink: 0 }} />
              <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 17, fontWeight: 700, color: DARK, margin: 0 }}>Functions of Research Cell</h2>
            </div>
            {functions.map((fn, i) => (
              <div key={i} className="rc-fn-item">
                <span style={{ flexShrink: 0, width: 28, height: 28, borderRadius: 8, background: `linear-gradient(135deg,${BROWN},${BROWN2})`, color: GOLD, fontSize: 11, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 1 }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p style={{ fontFamily: 'sans-serif', fontSize: 13.5, lineHeight: 1.75, color: TEXT, margin: 0 }}>{fn}</p>
              </div>
            ))}
          </motion.div>

          {/* Contact Strip */}
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            style={{ background: 'linear-gradient(135deg,rgba(229,190,16,0.08),rgba(117,51,0,0.05))', border: '1.5px solid rgba(229,190,16,0.3)', borderRadius: 16, padding: '22px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
            <div>
              <p style={{ fontFamily: 'Georgia, serif', fontSize: 15, fontWeight: 700, color: BROWN, margin: 0 }}>Interested in Research Collaboration?</p>
              <p style={{ fontFamily: 'sans-serif', fontSize: 12, color: MUTED, marginTop: 4 }}>Reach out to the Research Cell coordinator</p>
            </div>
            <a href="mailto:research@tilakcollege.ac.in" className="rc-contact-btn">
              <svg viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: 15, height: 15 }}>
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              Contact Us
            </a>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default ResearchCell;