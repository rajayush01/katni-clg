import React from 'react';

interface CalendarYear {
  year: string;
  label: string;
  pdfPath: string;
  isCurrent?: boolean;
}

const calendars: CalendarYear[] = [
  { year: '2021–22', label: 'Academic Year 2021–22', pdfPath: '/pdfs/academic-calendar-2021-22.pdf' },
  { year: '2022–23', label: 'Academic Year 2022–23', pdfPath: '/pdfs/academic-calendar-2022-23.pdf' },
  { year: '2023–24', label: 'Academic Year 2023–24', pdfPath: '/pdfs/academic-calendar-2023-24.pdf' },
  { year: '2024–25', label: 'Academic Year 2024–25', pdfPath: '/pdfs/academic-calendar-2024-25.pdf', isCurrent: true },
];

const BROWN = '#753300';
const BROWN2 = '#9a4a10';
const GOLD = '#e5be10';
const CREAM = '#fdf8ee';
const DARK = '#3a1a00';
const MUTED = '#b08060';

const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: 22, height: 22 }}>
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const DownloadIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: 14, height: 14 }}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const FileIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke={MUTED} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: 13, height: 13 }}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
  </svg>
);

export default function AcademicCalendar() {
  return (
    <div style={{ fontFamily: 'Georgia, serif', background: '#ffffff', minHeight: '100vh', padding: '60px 24px 80px' }}>
      <style>{`
        .ac-card { background: ${CREAM}; border: 1.5px solid rgba(229,190,16,0.3); border-radius: 16px; overflow: hidden; transition: border-color 0.25s, box-shadow 0.25s; }
        .ac-card:hover { border-color: rgba(117,51,0,0.45); box-shadow: 0 6px 28px rgba(117,51,0,0.10); }
        .ac-card.current { border-color: ${GOLD}; border-width: 2px; }
        .ac-dl-btn { display: inline-flex; align-items: center; gap: 7px; font-size: 13px; font-weight: 600; color: ${BROWN}; background: rgba(117,51,0,0.07); border: 1.5px solid rgba(117,51,0,0.2); border-radius: 8px; padding: 7px 16px; text-decoration: none; transition: background 0.2s, color 0.2s; font-family: sans-serif; }
        .ac-dl-btn:hover { background: linear-gradient(135deg,${BROWN},${BROWN2}); color: ${CREAM}; }
      `}</style>

      <div style={{ maxWidth: 860, margin: '0 auto' }}>

        {/* Header */}
        <div style={{ marginBottom: 40 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
            <div style={{ height: 1, width: 36, background: 'linear-gradient(90deg,transparent,#e5be10)' }} />
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#9a6040', fontFamily: 'sans-serif' }}>Govt. Tilak P.G. College · Katni, M.P.</span>
            <div style={{ height: 1, width: 36, background: 'linear-gradient(90deg,#e5be10,transparent)' }} />
          </div>
          <h1 style={{ fontSize: 'clamp(28px,5vw,44px)', fontWeight: 800, background: `linear-gradient(135deg,${BROWN} 0%,${BROWN2} 50%,${GOLD} 100%)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', lineHeight: 1.15, margin: '0 0 8px' }}>
            Academic Calendar
          </h1>
          <p style={{ fontFamily: 'sans-serif', fontSize: 14, color: MUTED, margin: 0 }}>
            Download the official academic timetable for each session
          </p>
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 18 }}>
          {calendars.map((cal) => (
            <div key={cal.year} className={`ac-card${cal.isCurrent ? ' current' : ''}`}>

              {/* Gold top bar for current */}
              {cal.isCurrent && (
                <div style={{ height: 3, background: `linear-gradient(90deg,${BROWN},${GOLD},${BROWN})` }} />
              )}

              {/* Card top */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14, padding: '20px 20px 16px' }}>
                <div style={{ width: 46, height: 46, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, background: `linear-gradient(135deg,${BROWN},${BROWN2})`, color: GOLD }}>
                  <CalendarIcon />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  {cal.isCurrent && (
                    <div style={{ display: 'inline-flex', alignItems: 'center', fontSize: 9, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: BROWN, background: 'rgba(229,190,16,0.15)', border: '1px solid rgba(229,190,16,0.4)', borderRadius: 20, padding: '2px 8px', marginBottom: 6, fontFamily: 'sans-serif' }}>
                      ✦ Current Session
                    </div>
                  )}
                  <p style={{ fontSize: 15, fontWeight: 700, color: DARK, margin: '0 0 3px', fontFamily: 'Georgia, serif' }}>{cal.label}</p>
                  <p style={{ fontFamily: 'sans-serif', fontSize: 12, color: MUTED, margin: 0 }}>Session timetable &amp; exam schedule</p>
                </div>
                <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', padding: '4px 10px', borderRadius: 20, flexShrink: 0, fontFamily: 'sans-serif', background: cal.isCurrent ? 'rgba(229,190,16,0.22)' : 'rgba(117,51,0,0.08)', color: cal.isCurrent ? BROWN : '#9a6040', border: `1px solid ${cal.isCurrent ? 'rgba(229,190,16,0.5)' : 'rgba(117,51,0,0.15)'}` }}>
                  {cal.isCurrent ? 'Active' : cal.year}
                </span>
              </div>

              {/* Divider */}
              <div style={{ borderTop: '1px solid rgba(229,190,16,0.25)' }} />

              {/* Card foot */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '13px 20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <FileIcon />
                  <span style={{ fontFamily: 'sans-serif', fontSize: 11, color: MUTED }}>PDF Document</span>
                </div>
                <a href={cal.pdfPath} target="_blank" rel="noopener noreferrer" className="ac-dl-btn">
                  <DownloadIcon /> Download
                </a>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}