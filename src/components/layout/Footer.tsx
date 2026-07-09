import React from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import logo from '../../assets/footerlogo.png';

const GOLD = '#e5be10';
const BG = '#4a2100'; // darkened from #763300

const quickLinks1 = [
  { name: 'Exam Timetable', href: '#' },
  { name: 'Alumni Registration', href: '#' },
  { name: 'Student Corner', href: '#' },
  { name: 'Teacher Login', href: '#' },
  { name: 'FAQ', href: '#' },
  { name: 'Contact Us', href: '#' },
  { name: 'Photo Gallery', href: '#' },
];

const quickLinks2 = [
  { name: 'World Bank', href: '#' },
  { name: 'Right to Information', href: '#' },
  { name: 'AISE Portal', href: '#' },
  { name: 'Tender', href: '#' },
  { name: 'Recruitment', href: '#' },
  { name: 'Scholarship', href: '#' },
  { name: 'Alumni', href: '#' },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      style={{
        background: BG,
        fontFamily: 'Georgia, serif',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap');
        .footer-link {
          font-family: sans-serif;
          font-size: 13px;
          color: rgba(253,248,238,0.5);
          text-decoration: none;
          transition: color 0.2s, padding-left 0.2s;
          display: block;
          padding: 3px 0;
        }
        .footer-link:hover { color: ${GOLD}; padding-left: 6px; }
        .footer-social-btn {
          width: 36px; height: 36px; border-radius: 8px;
          background: rgba(229,190,16,0.1); border: 1px solid rgba(229,190,16,0.25);
          display: flex; align-items: center; justify-content: center;
          color: rgba(253,248,238,0.5); transition: background 0.2s, color 0.2s, border-color 0.2s;
          cursor: pointer;
        }
        .footer-social-btn:hover { background: rgba(229,190,16,0.2); color: ${GOLD}; border-color: rgba(229,190,16,0.5); }
        .footer-contact-row { display: flex; align-items: flex-start; gap: 10px; margin-bottom: 14px; }
        .footer-contact-icon { width: 32px; height: 32px; border-radius: 8px; background: rgba(229,190,16,0.12); border: 1px solid rgba(229,190,16,0.2); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }

        .footer-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px 40px;
          margin-bottom: 48px;
        }
        @media (min-width: 540px) {
          .footer-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (min-width: 900px) {
          .footer-grid { grid-template-columns: 1.6fr 1fr 1fr 1.2fr; }
        }
        .footer-brand-col { grid-column: 1 / -1; }
        @media (min-width: 900px) { .footer-brand-col { grid-column: auto; } }

        .footer-bottom {
          display: flex;
          flex-direction: column;
          gap: 8px;
          align-items: center;
          text-align: center;
        }
        @media (min-width: 640px) {
          .footer-bottom { flex-direction: row; justify-content: space-between; text-align: left; }
        }
      `}</style>

      {/* Top gold accent bar */}
      <div style={{ height: 3, background: `linear-gradient(90deg,transparent,${GOLD},transparent)` }} />

      <div style={{ margin: '0 auto', padding: '56px 32px 40px', position: 'relative', zIndex: 1 }}>
        <div className="footer-grid">

          {/* ── Col 1: Brand ── */}
          <div className="footer-brand-col">
            <img src={logo} alt="College Logo" style={{ height: 100, marginBottom: 20, filter: 'brightness(1.1)' }} />
            <p style={{ fontFamily: 'sans-serif', fontSize: 13, lineHeight: 1.8, color: 'rgba(253,248,238,0.6)', margin: '0 0 24px', maxWidth: 400 }}>
              Govt. Tilak P.G. College, Katni (M.P.) was established in August 1958. A multi-faculty institution affiliated to Rani Durgawati University Jabalpur — the leading college of Katni district.
            </p>
            <div style={{ borderLeft: `3px solid ${GOLD}`, paddingLeft: 14, marginBottom: 24 }}>
              <p style={{ fontFamily: 'Georgia, serif', fontSize: 12, fontStyle: 'italic', color: 'rgba(229,190,16,0.8)', lineHeight: 1.6, margin: 0 }}>
                "Idquoyogh karmsu kaushallam"<br />
                <span style={{ fontFamily: 'sans-serif', fontSize: 11, color: 'rgba(253,248,238,0.45)', fontStyle: 'normal' }}>
                  Perfection in one's work is true yoga
                </span>
              </p>
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              {[
                { icon: <Facebook size={15} />, label: 'Facebook' },
                { icon: <Linkedin size={15} />, label: 'LinkedIn' },
                { icon: <Twitter size={15} />, label: 'Twitter' },
                { icon: <Instagram size={15} />, label: 'Instagram' },
              ].map((s) => (
                <a key={s.label} href="#" className="footer-social-btn" aria-label={s.label}>{s.icon}</a>
              ))}
            </div>
          </div>

          {/* ── Col 2: Quick Links 1 ── */}
          <div>
            <div style={{ marginBottom: 20 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                <div style={{ width: 18, height: 2, background: GOLD, borderRadius: 1 }} />
                <span style={{ fontFamily: 'sans-serif', fontSize: 9, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: GOLD }}>Quick Links</span>
              </div>
              <h4 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 18, fontWeight: 700, color: '#fdf8ee', margin: 0 }}>Student</h4>
            </div>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              {quickLinks1.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="footer-link">
                    <span style={{ color: 'rgba(229,190,16,0.5)', marginRight: 6, fontSize: 10 }}>›</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 3: Quick Links 2 ── */}
          <div>
            <div style={{ marginBottom: 20 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                <div style={{ width: 18, height: 2, background: GOLD, borderRadius: 1 }} />
                <span style={{ fontFamily: 'sans-serif', fontSize: 9, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: GOLD }}>Portals</span>
              </div>
              <h4 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 18, fontWeight: 700, color: '#fdf8ee', margin: 0 }}>Resources</h4>
            </div>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              {quickLinks2.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="footer-link">
                    <span style={{ color: 'rgba(229,190,16,0.5)', marginRight: 6, fontSize: 10 }}>›</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 4: Contact ── */}
          <div>
            <div style={{ marginBottom: 20 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                <div style={{ width: 18, height: 2, background: GOLD, borderRadius: 1 }} />
                <span style={{ fontFamily: 'sans-serif', fontSize: 9, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: GOLD }}>Reach Us</span>
              </div>
              <h4 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 18, fontWeight: 700, color: '#fdf8ee', margin: 0 }}>Contact Us</h4>
            </div>

            <div className="footer-contact-row">
              <div className="footer-contact-icon"><MapPin size={14} color={GOLD} /></div>
              <div style={{ fontFamily: 'sans-serif', fontSize: 12.5, color: 'rgba(253,248,238,0.6)', lineHeight: 1.7 }}>
                Shahadol Road Khirahani<br />
                Katni, Madhya Pradesh<br />
                07622292113 · 07622235723
              </div>
            </div>

            <div className="footer-contact-row">
              <div className="footer-contact-icon"><Phone size={14} color={GOLD} /></div>
              <div style={{ fontFamily: 'sans-serif', fontSize: 12.5, color: 'rgba(253,248,238,0.6)', lineHeight: 1.7 }}>
                Tollfree: 18002700320
              </div>
            </div>

            <div className="footer-contact-row">
              <div className="footer-contact-icon"><Mail size={14} color={GOLD} /></div>
              <div style={{ fontFamily: 'sans-serif', fontSize: 12.5, color: 'rgba(253,248,238,0.6)', lineHeight: 1.7 }}>
                gtc_katni@gmail.com
              </div>
            </div>

            <div style={{ marginTop: 18, background: 'rgba(229,190,16,0.1)', border: '1px solid rgba(229,190,16,0.25)', borderRadius: 10, padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: GOLD, flexShrink: 0, boxShadow: `0 0 6px ${GOLD}` }} />
              <span style={{ fontFamily: 'sans-serif', fontSize: 11, color: 'rgba(229,190,16,0.8)', letterSpacing: '0.04em' }}>
                Katni, Madhya Pradesh — India
              </span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: 'linear-gradient(90deg,transparent,rgba(229,190,16,0.3),transparent)', marginBottom: 28 }} />

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p style={{ fontFamily: 'sans-serif', fontSize: 12, color: 'rgba(253,248,238,0.4)', margin: 0 }}>
            Copyright © 2025 Govt. Tilak P.G. College, Katni. All rights reserved.
          </p>
          <p style={{ fontFamily: 'sans-serif', fontSize: 12, color: 'rgba(253,248,238,0.4)', margin: 0, display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap', justifyContent: 'center' }}>
            Powered by{' '}
            <a href="https://elite8digital.in/" style={{ color: 'rgba(229,190,16,0.65)', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = GOLD)}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(229,190,16,0.65)')}>
              Elite8 Digital
            </a>
            <span style={{ color: 'rgba(253,248,238,0.2)' }}>·</span>
            Last Updated: 20-Feb-2026
          </p>
        </div>

        <div style={{ textAlign: 'center', marginTop: 14 }}>
          <span style={{ fontFamily: 'sans-serif', fontSize: 11, color: 'rgba(253,248,238,0.2)' }}>
            Internal Release — 20-Feb-2026
          </span>
        </div>
      </div>
    </footer>
  );
}