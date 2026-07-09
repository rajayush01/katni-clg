import React from 'react';
import { motion } from 'framer-motion';

const highlights = [
  {
    title: 'Experienced Teachers',
    description: 'Competent faculty with rich teaching, scientific & managerial experience.',
    bgImage: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=70',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#e5be10" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" style={{ width:22, height:22 }}>
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
  },
  {
    title: 'Lead College',
    description: 'Govt. Tilak P.G. College is the Lead College in Katni, setting the standard for excellence.',
    bgImage: 'https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=800&q=70',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#e5be10" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" style={{ width:22, height:22 }}>
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    title: 'NAAC Accredited',
    description: 'College holds NAAC Accreditation with B++ grade, a mark of academic quality & trust.',
    bgImage: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=70',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#e5be10" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" style={{ width:22, height:22 }}>
        <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
];

const GOLD = '#e5be10';

export default function CollegeHighlights() {
  return (
    <section style={{ background: '#ffffff', position:'relative', overflow:'hidden', fontFamily:'Georgia,serif' }}>
      <style>{`
        .hl-gold-bar { height:2px; background:linear-gradient(90deg,transparent,#e5be10,transparent); }
        .hl-grid {
          display: flex;
          flex-direction: column;
          margin-top: 32px;
        }
        @media (min-width: 640px) {
          .hl-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .hl-cell {
          position:relative;
          padding:48px 32px;
          text-align:center;
          display:flex;
          flex-direction:column;
          align-items:center;
          gap:16px;
          border-bottom:1px solid #eeeeee;
          transition:background 0.3s;
          overflow:hidden;
        }
        @media (min-width: 640px) {
          .hl-cell {
            border-bottom: none;
            border-right: 1px solid #eeeeee;
          }
          .hl-cell:last-child { border-right:none; }
        }
        .hl-cell:last-child { border-bottom: none; }
        .hl-cell:hover { background:#fafafa; }
        .hl-bg { position:absolute; inset:0; background-size:cover; background-position:center; opacity:0.06; filter:saturate(0.2); transition:opacity 0.3s; }
        .hl-cell:hover .hl-bg { opacity:0.1; }
        .hl-icon { position:relative; z-index:1; width:56px; height:56px; border-radius:50%; border:1.5px solid rgba(229,190,16,0.5); background:rgba(229,190,16,0.08); display:flex; align-items:center; justify-content:center; transition:border-color 0.3s,background 0.3s; }
        .hl-cell:hover .hl-icon { border-color:#e5be10; background:rgba(229,190,16,0.14); }
      `}</style>
      <div className="hl-gold-bar" />

      <div style={{ textAlign:'center', padding:'40px 24px 0' }}>
        <div style={{ display:'inline-flex', alignItems:'center', gap:10, marginBottom:12 }}>
          <div style={{ height:1, width:44, background:'linear-gradient(90deg,transparent,rgba(229,190,16,0.6))' }} />
          <span style={{ fontSize:11, fontWeight:700, letterSpacing:'0.15em', textTransform:'uppercase', color:'#aaaaaa', fontFamily:'sans-serif' }}>Why Choose Us</span>
          <div style={{ height:1, width:44, background:'linear-gradient(90deg,rgba(229,190,16,0.6),transparent)' }} />
        </div>
        <h2 style={{ fontSize:'clamp(26px,4vw,38px)', fontWeight:800, color:'#1a1a1a', lineHeight:1.1, margin:'0 0 8px' }}>College Highlights</h2>
        <p style={{ fontSize:14, color:'#888888', fontFamily:'sans-serif', fontWeight:400 }}>What makes Govt. Tilak P.G. College stand apart</p>
      </div>

      <div className="hl-grid">
        {highlights.map((item, idx) => (
          <motion.div
            key={item.title}
            initial={{ opacity:0, y:20 }}
            whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true }}
            transition={{ duration:0.5, delay:idx * 0.12 }}
            className="hl-cell"
          >
            <div className="hl-bg" style={{ backgroundImage:`url('${item.bgImage}')` }} />
            <div className="hl-icon">{item.icon}</div>
            <div style={{ position:'relative', zIndex:1, width:36, height:2, borderRadius:1, background:'linear-gradient(90deg,transparent,#e5be10,transparent)' }} />
            <h3 style={{ position:'relative', zIndex:1, fontSize:17, fontWeight:700, color:'#1a1a1a', letterSpacing:'0.02em' }}>{item.title}</h3>
            <p style={{ position:'relative', zIndex:1, fontSize:13, color:'#666666', lineHeight:1.7, fontFamily:'sans-serif', fontWeight:400, maxWidth:220 }}>{item.description}</p>
          </motion.div>
        ))}
      </div>
      <div className="hl-gold-bar" />
    </section>
  );
}