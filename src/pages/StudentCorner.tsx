import React from 'react';
import { Link } from 'react-router-dom';

interface CornerItem {
  label: string;
  href: string;
  icon: React.ReactNode;
}

const BROWN = '#753300';
const BROWN2 = '#9a4a10';
const GOLD = '#e5be10';
const CREAM = '#fdf8ee';
const DARK = '#3a1a00';
const MUTED = '#b08060';

const items: CornerItem[] = [
  {
    label: 'Result',
    href: '/result',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="9" y1="13" x2="15" y2="13"/>
        <line x1="9" y1="17" x2="15" y2="17"/>
        <line x1="9" y1="9" x2="11" y2="9"/>
      </svg>
    ),
  },
  {
    label: 'Admission',
    href: '/admission',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    label: 'Rules',
    href: '/rules',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
  {
    label: 'Academic Calendar',
    href: '/academic-calendar',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
  },
  {
    label: 'Scholarship',
    href: '/scholarship',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
        <path d="M6 12v5c3 3 9 3 12 0v-5"/>
      </svg>
    ),
  },
  {
    label: 'Syllabus',
    href: '/syllabus',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
        <line x1="9" y1="7" x2="15" y2="7"/>
        <line x1="9" y1="11" x2="15" y2="11"/>
      </svg>
    ),
  },
  {
    label: 'LMS',
    href: '/lms',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
  },
  {
    label: 'Virtual Lab',
    href: '/virtual-lab',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"/>
      </svg>
    ),
  },
];

const StudentCorner = () => {
  return (
    <div style={{ fontFamily: 'Georgia, serif', background: '#ffffff', minHeight: '100vh', padding: '52px 24px 72px' }}>
      <style>{`
        .sc-card { display:flex; flex-direction:column; align-items:center; justify-content:center; gap:14px; padding:28px 16px 22px; background:${CREAM}; border:1.5px solid rgba(229,190,16,0.28); border-radius:16px; text-decoration:none; transition:border-color 0.25s,box-shadow 0.25s,background 0.25s; }
        .sc-card:hover { border-color:rgba(117,51,0,0.45); box-shadow:0 6px 28px rgba(117,51,0,0.10); background:#fff8ee; }
        .sc-icon-wrap { width:52px; height:52px; border-radius:14px; display:flex; align-items:center; justify-content:center; background:rgba(117,51,0,0.09); border:1.5px solid rgba(229,190,16,0.3); transition:background 0.25s,border-color 0.25s; color:${BROWN2}; }
        .sc-card:hover .sc-icon-wrap { background:linear-gradient(135deg,${BROWN},${BROWN2}); border-color:${BROWN}; color:${GOLD}; }
        .sc-arrow { font-size:13px; color:${MUTED}; opacity:0.6; transition:color 0.25s,opacity 0.25s; }
        .sc-card:hover .sc-arrow { color:${BROWN}; opacity:1; }
      `}</style>

      <div style={{ maxWidth: 860, margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
            <div style={{ height: 1, width: 36, background: 'linear-gradient(90deg,transparent,#e5be10)' }} />
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#9a6040', fontFamily: 'sans-serif' }}>Govt. Tilak P.G. College · Katni, M.P.</span>
            <div style={{ height: 1, width: 36, background: 'linear-gradient(90deg,#e5be10,transparent)' }} />
          </div>
          <h1 style={{ fontSize: 'clamp(28px,5vw,44px)', fontWeight: 800, background: `linear-gradient(135deg,${BROWN} 0%,${BROWN2} 50%,${GOLD} 100%)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', lineHeight: 1.15, margin: '0 0 8px', fontFamily: 'Georgia, serif' }}>
            Student Corner
          </h1>
          <p style={{ fontFamily: 'sans-serif', fontSize: 14, color: MUTED, margin: 0 }}>
            Quick access to all student resources
          </p>
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 16 }}>
          {items.map((item) => (
            <Link key={item.label} to={item.href} className="sc-card">
              <div className="sc-icon-wrap">
                <span style={{ width: 24, height: 24, display: 'flex' }}>
                  {item.icon}
                </span>
              </div>
              <span style={{ fontSize: 13, fontWeight: 600, color: DARK, textAlign: 'center', lineHeight: 1.3, fontFamily: 'sans-serif' }}>
                {item.label}
              </span>
              <span className="sc-arrow">→</span>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
};

export default StudentCorner;