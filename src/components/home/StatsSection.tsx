import React, { useState, useEffect, useRef } from 'react';

const GOLD = '#e5be10';

const stats = [
  {
    label: 'Happy Students',
    end: 50000, suffix: '+',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{width:20,height:20}}><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>,
  },
  {
    label: 'Courses Offered',
    end: 20, suffix: '+',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{width:20,height:20}}><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>,
  },
  {
    label: 'Expert Teachers',
    end: 50, suffix: '+',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{width:20,height:20}}><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
  },
  {
    label: 'Awards Won',
    end: 20, suffix: '+',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{width:20,height:20}}><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>,
  },
];

function Counter({ end, suffix = '', duration = 2200 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting && !started) setStarted(true); }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let startTime: number;
    const frame = (ts: number) => {
      if (!startTime) startTime = ts;
      const p = Math.min((ts - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 4);
      setCount(Math.floor(ease * end));
      if (p < 1) requestAnimationFrame(frame);
      else setCount(end);
    };
    requestAnimationFrame(frame);
  }, [started, end, duration]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

export default function StatsSection() {
  return (
    <section style={{ background:'#fafafa', padding:'60px 24px', fontFamily:'Georgia,serif', position:'relative', overflow:'hidden' }}>
      <style>{`
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          border: 1.5px solid #eeeeee;
          border-radius: 16px;
          overflow: hidden;
          margin-top: 36px;
          background: #ffffff;
        }
        @media (min-width: 640px) {
          .stats-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }
        .stats-cell {
          padding: 32px 20px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          transition: background 0.22s;
          border-right: 1px solid #eeeeee;
          border-bottom: 1px solid #eeeeee;
        }
        .stats-cell:nth-child(2n) { border-right: none; }
        .stats-cell:nth-child(3), .stats-cell:nth-child(4) { border-bottom: none; }
        @media (min-width: 640px) {
          .stats-cell { border-right: 1px solid #eeeeee; border-bottom: none; }
          .stats-cell:nth-child(2n) { border-right: 1px solid #eeeeee; }
          .stats-cell:last-child { border-right: none; }
        }
        .stats-cell:hover { background: #fafafa; }
      `}</style>

      <div style={{ maxWidth:900, margin:'0 auto' }}>
        <div style={{ textAlign:'center' }}>
          <div style={{ display:'inline-flex', alignItems:'center', gap:10, marginBottom:14 }}>
            <div style={{ height:1, width:44, background:'linear-gradient(90deg,transparent,#e5be10)' }} />
            <span style={{ fontSize:11, fontWeight:700, letterSpacing:'0.15em', textTransform:'uppercase', color:'#aaaaaa', fontFamily:'sans-serif' }}>By the Numbers</span>
            <div style={{ height:1, width:44, background:'linear-gradient(90deg,#e5be10,transparent)' }} />
          </div>
          <h2 style={{ fontSize:'clamp(26px,4vw,38px)', fontWeight:800, color:'#1a1a1a', lineHeight:1.1, margin:'0 0 8px' }}>Our Impact in Numbers</h2>
          <p style={{ fontSize:14, color:'#888888', fontFamily:'sans-serif', fontWeight:400 }}>Decades of excellence measured in milestones</p>
        </div>

        <div className="stats-grid">
          {stats.map((s, i) => (
            <div key={i} className="stats-cell">
              <div style={{ width:44, height:44, borderRadius:'50%', background:'rgba(229,190,16,0.1)', border:'1.5px solid rgba(229,190,16,0.3)', display:'flex', alignItems:'center', justifyContent:'center' }}>
                {s.icon}
              </div>
              <div style={{ fontSize:32, fontWeight:800, color:'#1a1a1a', lineHeight:1 }}>
                <Counter end={s.end} suffix={s.suffix} />
              </div>
              <div style={{ fontSize:10, fontWeight:700, letterSpacing:'0.1em', textTransform:'uppercase', color:'#aaaaaa', fontFamily:'sans-serif' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}