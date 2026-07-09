// import React, { useState, useEffect } from 'react';
// import { Menu, X, ChevronDown } from 'lucide-react';
// import { Link } from 'react-router-dom';
// import logo from '../../assets/tilaklogo1.png';

// export interface NavLink {
//   label: string;
//   href?: string;
//   hasDropdown?: boolean;
//   dropdownItems?: NavLink[];
//   subItems?: NavLink[];
// }

// const DropdownItem = ({ item, level = 0 }: { item: NavLink; level?: number }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div className="relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
//       <Link
//         to={item.href || '#'}
//         className="hdr-dd-link flex items-center justify-between px-4 py-2 text-sm gap-4"
//         style={{ whiteSpace: level === 0 ? 'nowrap' : 'normal' }}
//       >
//         {item.label}
//         {item.subItems && item.subItems.length > 0 && (
//           <ChevronDown className="w-3 h-3 -rotate-90 flex-shrink-0" style={{ color: '#b08060' }} />
//         )}
//       </Link>
//       {isHovered && item.subItems && item.subItems.length > 0 && (
//         <>
//           <div className="absolute top-0 left-full w-2 h-full z-40" />
//           <div className="absolute top-0 left-full ml-2 rounded-lg shadow-xl py-2 z-50" style={{ minWidth: '220px', maxWidth: '320px', width: 'max-content', background: '#fff', border: '1px solid rgba(229,190,16,0.2)', boxShadow: '0 8px 32px rgba(117,51,0,0.15)' }}>
//             {item.subItems.map((sub) => (
//               <DropdownItem key={sub.label} item={sub} level={level + 1} />
//             ))}
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// const navLinks: NavLink[] = [
//   { label: 'Home', href: '/', hasDropdown: false },
//   {
//     label: 'College', hasDropdown: true,
//     dropdownItems: [
//       { label: 'Mission & Vision', href: '/vision-mission' },
//       { label: 'Academic Calendar', href: '/academic-calendar' },
//       { label: 'Stars', href: '/stars' },
//       { label: 'Library', href: '/library' },
//       { label: 'GTC at a Glance', href: '/gtc-at-a-glance' },
//       { label: 'IQAC', href: '/iqac' },
//     ],
//   },
//   {
//     label: 'Programmes', hasDropdown: true,
//     dropdownItems: [
//       {
//         label: 'UG', href: '/programmes/ug',
//         subItems: [
//           { label: 'Bachelor of Science (B.Sc.)', href: '/programmes/ug/bsc', subItems: [{ label: 'CBZ', href: '/programmes/ug/bsc/cbz' }, { label: 'Plain', href: '/programmes/ug/bsc/plain' }] },
//           { label: 'Bachelor of Commerce (B.Com)', href: '/programmes/ug/bcom' },
//           { label: 'Bachelor of Arts (B.A.)', href: '/programmes/ug/ba' },
//         ],
//       },
//       {
//         label: 'PG', href: '/programmes/pg',
//         subItems: [
//           { label: 'Master of Science (M.Sc.)', href: '/programmes/pg/msc', subItems: [{ label: 'Mathematics', href: '/programmes/pg/msc/mathematics' }, { label: 'Physics', href: '/programmes/pg/msc/physics' }, { label: 'Chemistry', href: '/programmes/pg/msc/chemistry' }, { label: 'Botany', href: '/programmes/pg/msc/botany' }, { label: 'Zoology', href: '/programmes/pg/msc/zoology' }] },
//           { label: 'Master of Commerce (M.Com)', href: '/programmes/pg/mcom', subItems: [{ label: 'Commerce', href: '/programmes/pg/mcom/commerce' }] },
//           { label: 'Master of Arts (M.A.)', href: '/programmes/pg/ma', subItems: [{ label: 'Sociology', href: '/programmes/pg/ma/sociology' }, { label: 'Hindi', href: '/programmes/pg/ma/hindi' }, { label: 'English', href: '/programmes/pg/ma/english' }, { label: 'Political Science', href: '/programmes/pg/ma/political-science' }, { label: 'Economics', href: '/programmes/pg/ma/economics' }, { label: 'Geography', href: '/programmes/pg/ma/geography' }] },
//         ],
//       },
//     ],
//   },
//   {
//     label: 'Department', hasDropdown: true,
//     dropdownItems: [
//       { label: 'Faculty of Arts', href: '/department/arts', subItems: [{ label: 'Department of Sanskrit', href: '/department/arts/sanskrit' }, { label: 'Department of Physical Education & sports', href: '/department/arts/physical-education' }, { label: 'Department of English', href: '/department/arts/english' }, { label: 'Department of Sociology', href: '/department/arts/sociology' }, { label: 'Department of Geography', href: '/department/arts/geography' }, { label: 'Department of Political Science', href: '/department/arts/political-science' }, { label: 'Department of History', href: '/department/arts/history' }, { label: 'Department of Hindi', href: '/department/arts/hindi' }, { label: 'Department of Economics', href: '/department/arts/economics' }] },
//       { label: 'Faculty of Science', href: '/department/science', subItems: [{ label: 'Department of computer science', href: '/department/science/computer-science' }, { label: 'Department of Biotechnology', href: '/department/science/biotechnology' }, { label: 'Department of Geology', href: '/department/science/geology' }, { label: 'Department of physics', href: '/department/science/physics' }, { label: 'Department of Mathematics', href: '/department/science/mathematics' }, { label: 'Department of Chemistry', href: '/department/science/chemistry' }, { label: 'Department of Botany', href: '/department/science/botany' }, { label: 'Department of Zoology', href: '/department/science/zoology' }] },
//       { label: 'Faculty of Commerce', href: '/department/commerce', subItems: [{ label: 'Department of computer Applications', href: '/department/commerce/computer-applications' }, { label: 'Department of Commerce', href: '/department/commerce/commerce' }] },
//     ],
//   },
//   { label: 'Support Services', hasDropdown: true, dropdownItems: [{ label: 'Swami Vivekananda career Guidance cell', href: '/support/career-guidance' }, { label: 'Club', href: '/support/club' }, { label: 'Hostel', href: '/support/hostel' }] },
//   { label: 'Staff', href: '/staff' },
//   { label: 'Research', href: '/research' },
//   { label: 'Committee', hasDropdown: true, dropdownItems: [{ label: 'Entrepreneurship Development committee', href: '/committee/entrepreneurship' }, { label: 'Grievance redressal cell', href: '/committee/grievance' }, { label: 'Planning Committee', href: '/committee/planning' }, { label: 'Internal complaint committee', href: '/committee/internal-complaint' }, { label: 'statutory committee', href: '/committee/statutory' }, { label: 'Anti ragging committee', href: '/committee/anti-ragging' }] },
//   { label: 'Curriculum Activity', hasDropdown: true, dropdownItems: [{ label: 'NSS', href: '/activity/nss' }, { label: 'Sports', href: '/activity/sports' }, { label: 'NCC', href: '/activity/ncc' }] },
//   { label: 'Study Center', hasDropdown: true, dropdownItems: [{ label: 'BHOJ', href: '/study-center/bhoj' }, { label: 'IGNOU', href: '/study-center/ignou' }] },
//   { label: 'Gallery', hasDropdown: true, dropdownItems: [{ label: 'Photo Gallery', href: '/gallery/photos' }, { label: 'Media Gallery', href: '/gallery/media' }, { label: 'Video Gallery', href: '/gallery/videos' }] },
//   { label: 'Student Corner', href: '/student-corner' },
// ];

// const announcements = [
//   '🎓 Admissions Open for 2025-26 — Apply Now!',
//   '📢 Exam Schedule for Semester IV Released — Check Now',
//   '🏆 Tilak College ranked among Top 50 Colleges in MP',
//   '📋 Last Date for Scholarship Applications: 30th April 2025',
//   '🔬 New Research Lab Inauguration on 20th May 2025',
//   '📌 Guest Lecture Series by Industry Experts — Register Today',
//   '🎉 Annual Cultural Fest "Utsav 2025" — 15th to 17th May',
// ];

// const socialLinks = [
//   { label: 'Facebook', href: 'https://facebook.com', icon: <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg> },
//   { label: 'LinkedIn', href: 'https://linkedin.com', icon: <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg> },
//   { label: 'Twitter', href: 'https://twitter.com', icon: <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor"><path d="M4 4l16 16M4 20L20 4" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" fill="none" /></svg> },
//   { label: 'Instagram', href: 'https://instagram.com', icon: <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg> },
// ];

// export default function Header() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 50);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const tickerText = announcements.join('     ●     ');

//   return (
//     <>
//       <style>{`
//         /* ── Palette ── */
//         :root {
//           --gold: #e5be10;
//           --gold-deep: #c9a800;
//           --brown: #753300;
//           --brown-light: #9a4a10;
//           --cream: #fdf8ee;
//           --cream-dark: #f5edcf;
//         }

//         /* Ticker */
//         @keyframes ticker-scroll { 0% { transform:translateX(0); } 100% { transform:translateX(-50%); } }
//         .hdr-ticker-container { overflow:hidden; position:relative; width:100%; }
//         .hdr-ticker-track { display:inline-flex; white-space:nowrap; animation:ticker-scroll 60s linear infinite; will-change:transform; }
//         .hdr-ticker-track:hover { animation-play-state:paused; }
//         .hdr-ticker-item { display:inline-block; padding-right:100px; }

//         /* Social icons */
//         .hdr-social { display:flex; align-items:center; justify-content:center; width:32px; height:32px; border-radius:8px; color:var(--brown); background:var(--cream-dark); border:1px solid rgba(229,190,16,0.4); transition:background 0.15s,color 0.15s,border-color 0.15s,transform 0.15s; text-decoration:none; flex-shrink:0; }
//         .hdr-social:hover { background:var(--brown); color:var(--gold); border-color:var(--brown); transform:translateY(-2px); }

//         /* Dropdown link */
//         .hdr-dd-link { color:#3a1a00; font-family:'Georgia',serif; transition:background 0.15s,color 0.15s; }
//         .hdr-dd-link:hover { background:rgba(229,190,16,0.12); color:var(--brown); }

//         /* Nav button */
//         .hdr-nav-btn { color:#fff; padding:14px 8px; font-weight:600; font-size:11px; text-transform:uppercase; letter-spacing:0.06em; transition:background 0.15s,color 0.15s; display:flex; align-items:center; gap:2px; white-space:nowrap; background:none; border:none; cursor:pointer; font-family:'Georgia',serif; position:relative; }
//         .hdr-nav-btn::after { content:''; position:absolute; bottom:0; left:50%; right:50%; height:2px; background:var(--gold); transition:left 0.2s,right 0.2s; }
//         .hdr-nav-btn:hover::after { left:8px; right:8px; }
//         .hdr-nav-btn:hover { color:var(--gold); }

//         .hdr-nav-link { color:#fff; padding:14px 8px; font-weight:600; font-size:11px; text-transform:uppercase; letter-spacing:0.06em; transition:background 0.15s,color 0.15s; display:block; white-space:nowrap; font-family:'Georgia',serif; text-decoration:none; position:relative; }
//         .hdr-nav-link::after { content:''; position:absolute; bottom:0; left:50%; right:50%; height:2px; background:var(--gold); transition:left 0.2s,right 0.2s; }
//         .hdr-nav-link:hover::after { left:8px; right:8px; }
//         .hdr-nav-link:hover { color:var(--gold); }

//         /* Dropdown panel */
//         .hdr-dd-panel { background:#fff; border-radius:12px; box-shadow:0 12px 40px rgba(117,51,0,0.15); border:1px solid rgba(229,190,16,0.2); overflow:visible; }

//         /* Mobile items */
//         .hdr-mob-item { display:flex; align-items:center; justify-content:space-between; width:100%; padding:11px 12px; border-radius:10px; color:#3a1a00; font-size:14px; font-weight:600; background:none; border:none; cursor:pointer; transition:background 0.15s,color 0.15s; text-align:left; font-family:'Georgia',serif; }
//         .hdr-mob-item:hover { background:rgba(229,190,16,0.12); color:var(--brown); }
//         .hdr-mob-sub { display:block; padding:9px 12px; border-radius:10px; color:#6B7280; font-size:13px; text-decoration:none; transition:background 0.15s,color 0.15s; }
//         .hdr-mob-sub:hover { background:rgba(229,190,16,0.12); color:var(--brown); }

//         /* Sticky */
//         .hdr-sticky { position:sticky; top:0; z-index:50; transition:box-shadow 0.3s; }
//         .hdr-sticky.scrolled { box-shadow:0 4px 24px rgba(117,51,0,0.22); }

//         /* Gold separator line under logo area */
//         .hdr-gold-line { height:3px; background:linear-gradient(90deg,var(--brown),var(--gold),var(--brown)); }
//       `}</style>

//       {/* ── TOP: Ticker + Logo (scrolls away) ── */}
//       <div>
//         {/* Ticker bar */}
//         <div style={{ background: 'linear-gradient(90deg,#753300,#8a3a00,#753300)', color: '#fff' }}>
//           <div className="max-w-full mx-auto px-4 lg:px-16">
//             <div className="flex items-center gap-3 overflow-hidden" style={{ height: 44 }}>
//               <span style={{ background: 'linear-gradient(135deg,#e5be10,#c9a800)', color: '#3a1a00', fontWeight: 800, fontSize: 11, padding: '3px 12px', borderRadius: 20, flexShrink: 0, letterSpacing: '0.06em', textTransform: 'uppercase', fontFamily: 'Georgia,serif', boxShadow: '0 2px 8px rgba(229,190,16,0.4)' }}>
//                 📣 News
//               </span>
//               <div className="hdr-ticker-container flex-1">
//                 <div className="hdr-ticker-track">
//                   <span className="hdr-ticker-item" style={{ fontSize: 13, fontWeight: 600, color: 'rgba(253,248,238,0.92)' }}>{tickerText}</span>
//                   <span className="hdr-ticker-item" style={{ fontSize: 13, fontWeight: 600, color: 'rgba(253,248,238,0.92)' }}>{tickerText}</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Logo + social row */}
//         <div style={{ background: '#fff', borderBottom: '1px solid rgba(229,190,16,0.2)' }}>
//           <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-16">
//             <div className="flex items-center justify-between py-2 sm:py-3 gap-4">
//               <div className="flex items-center flex-shrink-0">
//                 <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
//                   <img src={logo} className="w-60 sm:w-full sm:h-auto object-contain block" style={{ maxWidth: 420 }} alt="Tilak College Logo" />
//                 </Link>
//               </div>
//               <div className="flex items-center gap-3">
//                 {/* Social icons */}
//                 <div className="hidden lg:flex items-center gap-2">
//                   {socialLinks.map((s) => (
//                     <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="hdr-social" title={s.label}>{s.icon}</a>
//                   ))}
//                 </div>
//                 {/* Vertical divider */}
//                 <div className="hidden lg:block" style={{ width: 1, height: 32, background: 'rgba(229,190,16,0.35)' }} />
//                 {/* Admission button — desktop */}
//                 <a href="/admission" className="hidden lg:flex items-center gap-2 px-5 py-2 rounded-full font-semibold text-sm transition-all" style={{ background: 'linear-gradient(135deg,#753300,#9a4a10)', color: '#e5be10', fontFamily: 'Georgia,serif', letterSpacing: '0.04em', boxShadow: '0 4px 16px rgba(117,51,0,0.25)', textDecoration: 'none', whiteSpace: 'nowrap' }}
//                   onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 6px 20px rgba(117,51,0,0.4)'; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-1px)'; }}
//                   onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 4px 16px rgba(117,51,0,0.25)'; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)'; }}
//                 >
//                   🎓 Apply Now
//                 </a>
//                 {/* Mobile hamburger */}
//                 <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden p-2 mr-2 rounded-xl transition-colors" style={{ background: isMobileMenuOpen ? '#753300' : 'linear-gradient(135deg,#e5be10,#c9a800)', border: 'none', cursor: 'pointer' }} aria-label="Toggle menu">
//                   {isMobileMenuOpen ? <X className="w-6 h-6" style={{ color: '#e5be10' }} /> : <Menu className="w-6 h-6" style={{ color: '#753300' }} />}
//                 </button>
//               </div>
//             </div>
//           </div>
//           {/* Gold accent line */}
//           <div className="hdr-gold-line" />
//         </div>
//       </div>

//       {/* ── STICKY NAV BAR ── */}
//       <div className={`hdr-sticky ${isScrolled ? 'scrolled' : ''}`}>
//         {/* Desktop nav */}
//         <div className="hidden lg:block" style={{ background: 'linear-gradient(90deg,#753300 0%,#8a3800 50%,#753300 100%)' }}>
//           <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-16">
//             <div className="flex items-center justify-between">
//               {navLinks.map((link) => (
//                 <div
//                   key={link.label}
//                   className="relative"
//                   onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.label)}
//                   onMouseLeave={() => setActiveDropdown(null)}
//                 >
//                   {link.hasDropdown ? (
//                     <>
//                       <button className="hdr-nav-btn">
//                         <span>{link.label}</span>
//                         <ChevronDown className="w-3 h-3" style={{ opacity: 0.7 }} />
//                       </button>
//                       {activeDropdown === link.label && (
//                         <div className="absolute top-full left-0 pt-1 z-50" style={{ minWidth: '200px', maxWidth: '320px', width: 'max-content' }}>
//                           <div className="hdr-dd-panel py-2">
//                             {link.dropdownItems?.map((item) => (
//                               <DropdownItem key={item.label} item={item} />
//                             ))}
//                           </div>
//                         </div>
//                       )}
//                     </>
//                   ) : (
//                     <Link to={link.href || '#'} className="hdr-nav-link">{link.label}</Link>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Mobile menu */}
//         {isMobileMenuOpen && (
//           <div className="lg:hidden shadow-xl" style={{ background: '#fff', borderTop: '2px solid rgba(229,190,16,0.3)', maxHeight: 'calc(100vh - 56px)', overflowY: 'auto' }}>
//             {/* Follow us */}
//             <div className="flex items-center gap-2 px-4 py-3" style={{ background: 'rgba(229,190,16,0.06)', borderBottom: '1px solid rgba(229,190,16,0.15)' }}>
//               <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#b08060', marginRight: 4, fontFamily: 'Georgia,serif' }}>Follow Us</span>
//               {socialLinks.map((s) => (
//                 <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="hdr-social" title={s.label}>{s.icon}</a>
//               ))}
//               <a href="/admission" className="ml-auto px-4 py-1.5 rounded-full font-semibold text-xs" style={{ background: 'linear-gradient(135deg,#753300,#9a4a10)', color: '#e5be10', textDecoration: 'none', fontFamily: 'Georgia,serif' }}>
//                 🎓 Apply
//               </a>
//             </div>
//             {/* Links */}
//             <div className="px-3 py-3 space-y-0.5">
//               {navLinks.map((link) => (
//                 <div key={link.label}>
//                   {link.hasDropdown ? (
//                     <div>
//                       <button onClick={() => setActiveDropdown(activeDropdown === link.label ? null : link.label)} className="hdr-mob-item">
//                         <span>{link.label}</span>
//                         <ChevronDown className="w-4 h-4 flex-shrink-0" style={{ transition: 'transform 0.2s', transform: activeDropdown === link.label ? 'rotate(180deg)' : 'rotate(0deg)', color: '#e5be10' }} />
//                       </button>
//                       {activeDropdown === link.label && (
//                         <div className="pl-3 pt-0.5 pb-1 space-y-0.5">
//                           {link.dropdownItems?.map((item) => (
//                             <Link key={item.label} to={item.href || '#'} onClick={() => setIsMobileMenuOpen(false)} className="hdr-mob-sub">{item.label}</Link>
//                           ))}
//                         </div>
//                       )}
//                     </div>
//                   ) : (
//                     <Link to={link.href || '#'} onClick={() => setIsMobileMenuOpen(false)} className="hdr-mob-item" style={{ display: 'flex' }}>{link.label}</Link>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// }

import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../../assets/tilaklogo1.png';

export interface NavLink {
  label: string;
  href?: string;
  hasDropdown?: boolean;
  dropdownItems?: NavLink[];
  subItems?: NavLink[];
}

const DropdownItem = ({ item, level = 0 }: { item: NavLink; level?: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <Link
        to={item.href || '#'}
        className="hdr-dd-link flex items-center justify-between px-4 py-2 text-sm gap-4"
        style={{ whiteSpace: level === 0 ? 'nowrap' : 'normal' }}
      >
        {item.label}
        {item.subItems && item.subItems.length > 0 && (
          <ChevronDown className="w-3 h-3 -rotate-90 flex-shrink-0" style={{ color: '#b08060' }} />
        )}
      </Link>
      {isHovered && item.subItems && item.subItems.length > 0 && (
        <>
          <div className="absolute top-0 left-full w-2 h-full z-40" />
          <div className="absolute top-0 left-full ml-2 rounded-lg shadow-xl py-2 z-50" style={{ minWidth: '220px', maxWidth: '320px', width: 'max-content', background: '#fff', border: '1px solid rgba(229,190,16,0.2)', boxShadow: '0 8px 32px rgba(117,51,0,0.15)' }}>
            {item.subItems.map((sub) => (
              <DropdownItem key={sub.label} item={sub} level={level + 1} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const navLinks: NavLink[] = [
  { label: 'Home', href: '/', hasDropdown: false },
  {
    label: 'College', hasDropdown: true,
    dropdownItems: [
      { label: 'Mission & Vision', href: '/vision-mission' },
      { label: 'Academic Calendar', href: '/academic-calendar' },
      { label: 'Stars', href: '/stars' },
      { label: 'Library', href: '/library' },
      { label: 'GTC at a Glance', href: '/gtc-at-a-glance' },
      { label: 'IQAC', href: '/iqac' },
    ],
  },
  {
    label: 'Programmes', hasDropdown: true,
    dropdownItems: [
      {
        label: 'UG', href: '/programmes/ug',
        subItems: [
          { label: 'Bachelor of Science (B.Sc.)', href: '/programmes/ug/bsc', subItems: [{ label: 'CBZ', href: '/programmes/ug/bsc/cbz' }, { label: 'Plain', href: '/programmes/ug/bsc/plain' }] },
          { label: 'Bachelor of Commerce (B.Com)', href: '/programmes/ug/bcom' },
          { label: 'Bachelor of Arts (B.A.)', href: '/programmes/ug/ba' },
        ],
      },
      {
        label: 'PG', href: '/programmes/pg',
        subItems: [
          { label: 'Master of Science (M.Sc.)', href: '/programmes/pg/msc', subItems: [{ label: 'Mathematics', href: '/programmes/pg/msc/mathematics' }, { label: 'Physics', href: '/programmes/pg/msc/physics' }, { label: 'Chemistry', href: '/programmes/pg/msc/chemistry' }, { label: 'Botany', href: '/programmes/pg/msc/botany' }, { label: 'Zoology', href: '/programmes/pg/msc/zoology' }] },
          { label: 'Master of Commerce (M.Com)', href: '/programmes/pg/mcom', subItems: [{ label: 'Commerce', href: '/programmes/pg/mcom/commerce' }] },
          { label: 'Master of Arts (M.A.)', href: '/programmes/pg/ma', subItems: [{ label: 'Sociology', href: '/programmes/pg/ma/sociology' }, { label: 'Hindi', href: '/programmes/pg/ma/hindi' }, { label: 'English', href: '/programmes/pg/ma/english' }, { label: 'Political Science', href: '/programmes/pg/ma/political-science' }, { label: 'Economics', href: '/programmes/pg/ma/economics' }, { label: 'Geography', href: '/programmes/pg/ma/geography' }] },
        ],
      },
    ],
  },
  {
    label: 'Department', hasDropdown: true,
    dropdownItems: [
      { label: 'Faculty of Arts', href: '/department/arts', subItems: [{ label: 'Department of Sanskrit', href: '/department/arts/sanskrit' }, { label: 'Department of Physical Education & sports', href: '/department/arts/physical-education' }, { label: 'Department of English', href: '/department/arts/english' }, { label: 'Department of Sociology', href: '/department/arts/sociology' }, { label: 'Department of Geography', href: '/department/arts/geography' }, { label: 'Department of Political Science', href: '/department/arts/political-science' }, { label: 'Department of History', href: '/department/arts/history' }, { label: 'Department of Hindi', href: '/department/arts/hindi' }, { label: 'Department of Economics', href: '/department/arts/economics' }] },
      { label: 'Faculty of Science', href: '/department/science', subItems: [{ label: 'Department of computer science', href: '/department/science/computer-science' }, { label: 'Department of Biotechnology', href: '/department/science/biotechnology' }, { label: 'Department of Geology', href: '/department/science/geology' }, { label: 'Department of physics', href: '/department/science/physics' }, { label: 'Department of Mathematics', href: '/department/science/mathematics' }, { label: 'Department of Chemistry', href: '/department/science/chemistry' }, { label: 'Department of Botany', href: '/department/science/botany' }, { label: 'Department of Zoology', href: '/department/science/zoology' }] },
      { label: 'Faculty of Commerce', href: '/department/commerce', subItems: [{ label: 'Department of computer Applications', href: '/department/commerce/computer-applications' }, { label: 'Department of Commerce', href: '/department/commerce/commerce' }] },
    ],
  },
  { label: 'Support Services', hasDropdown: true, dropdownItems: [{ label: 'Swami Vivekananda career Guidance cell', href: '/support/career-guidance' }, { label: 'Club', href: '/support/club' }, { label: 'Hostel', href: '/support/hostel' }] },
  { label: 'Staff', href: '/staff' },
  { label: 'Research', href: '/research' },
  { label: 'Committee', hasDropdown: true, dropdownItems: [{ label: 'Entrepreneurship Development committee', href: '/committee/entrepreneurship' }, { label: 'Grievance redressal cell', href: '/committee/grievance' }, { label: 'Planning Committee', href: '/committee/planning' }, { label: 'Internal complaint committee', href: '/committee/internal-complaint' }, { label: 'statutory committee', href: '/committee/statutory' }, { label: 'Anti ragging committee', href: '/committee/anti-ragging' }] },
  { label: 'Curriculum Activity', hasDropdown: true, dropdownItems: [{ label: 'NSS', href: '/activity/nss' }, { label: 'Sports', href: '/activity/sports' }, { label: 'NCC', href: '/activity/ncc' }] },
  { label: 'Study Center', hasDropdown: true, dropdownItems: [{ label: 'BHOJ', href: '/study-center/bhoj' }, { label: 'IGNOU', href: '/study-center/ignou' }] },
  { label: 'Gallery', hasDropdown: true, dropdownItems: [{ label: 'Photo Gallery', href: '/gallery/photos' }, { label: 'Media Gallery', href: '/gallery/media' }, { label: 'Video Gallery', href: '/gallery/videos' }] },
  { label: 'Student Corner', href: '/student-corner' },
];

// ── Announcements with individual links ───────────────────────────────────────
const announcements = [
  { text: '🎓 Admissions Open for 2025-26 — Apply Now!',                         href: '/admission' },
  { text: '📢 Exam Schedule for Semester IV Released — Check Now',                href: '/academic-calendar' },
  { text: '🏆 Tilak College ranked among Top 50 Colleges in MP',                  href: '/gtc-at-a-glance' },
  { text: '📋 Last Date for Scholarship Applications: 30th April 2025',           href: '/student-corner' },
  { text: '🔬 New Research Lab Inauguration on 20th May 2025',                    href: '/research' },
  { text: '📌 Guest Lecture Series by Industry Experts — Register Today',         href: '/student-corner' },
  { text: '🎉 Annual Cultural Fest "Utsav 2025" — 15th to 17th May',             href: '/gallery/photos' },
];

const socialLinks = [
  { label: 'Facebook', href: 'https://facebook.com', icon: <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg> },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg> },
  { label: 'Twitter', href: 'https://twitter.com', icon: <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor"><path d="M4 4l16 16M4 20L20 4" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" fill="none" /></svg> },
  { label: 'Instagram', href: 'https://instagram.com', icon: <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg> },
];

// ── Single ticker announcement item ──────────────────────────────────────────
const TickerItem = ({ text, href }: { text: string; href: string }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <span
      className="inline-block"
      style={{ paddingRight: 60 }}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          fontSize: 13,
          fontWeight: 600,
          color: hovered ? '#e5be10' : 'rgba(253,248,238,0.92)',
          textDecoration: 'none',
          borderBottom: hovered ? '1.5px solid #e5be10' : '1.5px solid transparent',
          paddingBottom: 1,
          transition: 'color 0.18s, border-color 0.18s',
          cursor: 'pointer',
          fontFamily: 'Georgia, serif',
        }}
      >
        {text}
      </a>
      <span style={{ color: 'rgba(229,190,16,0.5)', marginLeft: 60, fontWeight: 400 }}>●</span>
    </span>
  );
};

// ── Ticker track — duplicated for seamless loop ───────────────────────────────
const NewsTicker = () => {
  const [paused, setPaused] = useState(false);

  return (
    <div
      style={{ overflow: 'hidden', position: 'relative', width: '100%' }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        style={{
          display: 'inline-flex',
          whiteSpace: 'nowrap',
          animation: 'ticker-scroll 60s linear infinite',
          animationPlayState: paused ? 'paused' : 'running',
          willChange: 'transform',
        }}
      >
        {/* Render twice for seamless loop */}
        {[...announcements, ...announcements].map((item, i) => (
          <TickerItem key={i} text={item.text} href={item.href} />
        ))}
      </div>
    </div>
  );
};

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <style>{`
        :root {
          --gold: #e5be10;
          --gold-deep: #c9a800;
          --brown: #753300;
          --brown-light: #9a4a10;
          --cream: #fdf8ee;
          --cream-dark: #f5edcf;
        }

        @keyframes ticker-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .hdr-social { display:flex; align-items:center; justify-content:center; width:32px; height:32px; border-radius:8px; color:var(--brown); background:var(--cream-dark); border:1px solid rgba(229,190,16,0.4); transition:background 0.15s,color 0.15s,border-color 0.15s,transform 0.15s; text-decoration:none; flex-shrink:0; }
        .hdr-social:hover { background:var(--brown); color:var(--gold); border-color:var(--brown); transform:translateY(-2px); }

        .hdr-dd-link { color:#3a1a00; font-family:'Georgia',serif; transition:background 0.15s,color 0.15s; }
        .hdr-dd-link:hover { background:rgba(229,190,16,0.12); color:var(--brown); }

        .hdr-nav-btn { color:#fff; padding:14px 8px; font-weight:600; font-size:11px; text-transform:uppercase; letter-spacing:0.06em; transition:background 0.15s,color 0.15s; display:flex; align-items:center; gap:2px; white-space:nowrap; background:none; border:none; cursor:pointer; font-family:'Georgia',serif; position:relative; }
        .hdr-nav-btn::after { content:''; position:absolute; bottom:0; left:50%; right:50%; height:2px; background:var(--gold); transition:left 0.2s,right 0.2s; }
        .hdr-nav-btn:hover::after { left:8px; right:8px; }
        .hdr-nav-btn:hover { color:var(--gold); }

        .hdr-nav-link { color:#fff; padding:14px 8px; font-weight:600; font-size:11px; text-transform:uppercase; letter-spacing:0.06em; transition:background 0.15s,color 0.15s; display:block; white-space:nowrap; font-family:'Georgia',serif; text-decoration:none; position:relative; }
        .hdr-nav-link::after { content:''; position:absolute; bottom:0; left:50%; right:50%; height:2px; background:var(--gold); transition:left 0.2s,right 0.2s; }
        .hdr-nav-link:hover::after { left:8px; right:8px; }
        .hdr-nav-link:hover { color:var(--gold); }

        .hdr-dd-panel { background:#fff; border-radius:12px; box-shadow:0 12px 40px rgba(117,51,0,0.15); border:1px solid rgba(229,190,16,0.2); overflow:visible; }

        .hdr-mob-item { display:flex; align-items:center; justify-content:space-between; width:100%; padding:11px 12px; border-radius:10px; color:#3a1a00; font-size:14px; font-weight:600; background:none; border:none; cursor:pointer; transition:background 0.15s,color 0.15s; text-align:left; font-family:'Georgia',serif; }
        .hdr-mob-item:hover { background:rgba(229,190,16,0.12); color:var(--brown); }
        .hdr-mob-sub { display:block; padding:9px 12px; border-radius:10px; color:#6B7280; font-size:13px; text-decoration:none; transition:background 0.15s,color 0.15s; }
        .hdr-mob-sub:hover { background:rgba(229,190,16,0.12); color:var(--brown); }

        .hdr-sticky { position:sticky; top:0; z-index:50; transition:box-shadow 0.3s; }
        .hdr-sticky.scrolled { box-shadow:0 4px 24px rgba(117,51,0,0.22); }

        .hdr-gold-line { height:3px; background:linear-gradient(90deg,var(--brown),var(--gold),var(--brown)); }
      `}</style>

      {/* ── TOP: Ticker + Logo ── */}
      <div>
        {/* Ticker bar */}
        <div style={{ background: 'linear-gradient(90deg,#753300,#8a3a00,#753300)', color: '#fff' }}>
          <div className="max-w-full mx-auto px-4 lg:px-16">
            <div className="flex items-center gap-3 overflow-hidden" style={{ height: 44 }}>
              {/* News badge */}
              <span style={{
                background: 'linear-gradient(135deg,#e5be10,#c9a800)',
                color: '#3a1a00',
                fontWeight: 800,
                fontSize: 11,
                padding: '3px 12px',
                borderRadius: 20,
                flexShrink: 0,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                fontFamily: 'Georgia,serif',
                boxShadow: '0 2px 8px rgba(229,190,16,0.4)',
              }}>
                📣 News
              </span>

              {/* Scrolling ticker */}
              <NewsTicker />
            </div>
          </div>
        </div>

        {/* Logo + social row */}
        <div style={{ background: '#fff', borderBottom: '1px solid rgba(229,190,16,0.2)' }}>
          <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-16">
            <div className="flex items-center justify-between py-2 sm:py-3 gap-4">
              <div className="flex items-center flex-shrink-0">
                <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                  <img src={logo} className="w-60 sm:w-full sm:h-auto object-contain block" style={{ maxWidth: 420 }} alt="Tilak College Logo" />
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <div className="hidden lg:flex items-center gap-2">
                  {socialLinks.map((s) => (
                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="hdr-social" title={s.label}>{s.icon}</a>
                  ))}
                </div>
                <div className="hidden lg:block" style={{ width: 1, height: 32, background: 'rgba(229,190,16,0.35)' }} />
                <a
                  href="/admission"
                  className="hidden lg:flex items-center gap-2 px-5 py-2 rounded-full font-semibold text-sm transition-all"
                  style={{ background: 'linear-gradient(135deg,#753300,#9a4a10)', color: '#e5be10', fontFamily: 'Georgia,serif', letterSpacing: '0.04em', boxShadow: '0 4px 16px rgba(117,51,0,0.25)', textDecoration: 'none', whiteSpace: 'nowrap' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 6px 20px rgba(117,51,0,0.4)'; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-1px)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 4px 16px rgba(117,51,0,0.25)'; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)'; }}
                >
                   Apply Now
                </a>
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="lg:hidden p-2 mr-2 rounded-xl transition-colors"
                  style={{ background: isMobileMenuOpen ? '#753300' : 'linear-gradient(135deg,#e5be10,#c9a800)', border: 'none', cursor: 'pointer' }}
                  aria-label="Toggle menu"
                >
                  {isMobileMenuOpen
                    ? <X className="w-6 h-6" style={{ color: '#e5be10' }} />
                    : <Menu className="w-6 h-6" style={{ color: '#753300' }} />}
                </button>
              </div>
            </div>
          </div>
          <div className="hdr-gold-line" />
        </div>
      </div>

      {/* ── STICKY NAV BAR ── */}
      <div className={`hdr-sticky ${isScrolled ? 'scrolled' : ''}`}>
        {/* Desktop nav */}
        <div className="hidden lg:block" style={{ background: 'linear-gradient(90deg,#753300 0%,#8a3800 50%,#753300 100%)' }}>
          <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-16">
            <div className="flex items-center justify-between">
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {link.hasDropdown ? (
                    <>
                      <button className="hdr-nav-btn">
                        <span>{link.label}</span>
                        <ChevronDown className="w-3 h-3" style={{ opacity: 0.7 }} />
                      </button>
                      {activeDropdown === link.label && (
                        <div className="absolute top-full left-0 pt-1 z-50" style={{ minWidth: '200px', maxWidth: '320px', width: 'max-content' }}>
                          <div className="hdr-dd-panel py-2">
                            {link.dropdownItems?.map((item) => (
                              <DropdownItem key={item.label} item={item} />
                            ))}
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    <Link to={link.href || '#'} className="hdr-nav-link">{link.label}</Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden shadow-xl" style={{ background: '#fff', borderTop: '2px solid rgba(229,190,16,0.3)', maxHeight: 'calc(100vh - 56px)', overflowY: 'auto' }}>
            <div className="flex items-center gap-2 px-4 py-3" style={{ background: 'rgba(229,190,16,0.06)', borderBottom: '1px solid rgba(229,190,16,0.15)' }}>
              <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#b08060', marginRight: 4, fontFamily: 'Georgia,serif' }}>Follow Us</span>
              {socialLinks.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="hdr-social" title={s.label}>{s.icon}</a>
              ))}
              <a href="/admission" className="ml-auto px-4 py-2.5 rounded-full font-semibold text-xs" style={{ background: 'linear-gradient(135deg,#753300,#9a4a10)', color: '#e5be10', textDecoration: 'none', fontFamily: 'Georgia,serif' }}>
                 Apply
              </a>
            </div>
            <div className="px-3 py-3 space-y-0.5">
              {navLinks.map((link) => (
                <div key={link.label}>
                  {link.hasDropdown ? (
                    <div>
                      <button onClick={() => setActiveDropdown(activeDropdown === link.label ? null : link.label)} className="hdr-mob-item">
                        <span>{link.label}</span>
                        <ChevronDown className="w-4 h-4 flex-shrink-0" style={{ transition: 'transform 0.2s', transform: activeDropdown === link.label ? 'rotate(180deg)' : 'rotate(0deg)', color: '#e5be10' }} />
                      </button>
                      {activeDropdown === link.label && (
                        <div className="pl-3 pt-0.5 pb-1 space-y-0.5">
                          {link.dropdownItems?.map((item) => (
                            <Link key={item.label} to={item.href || '#'} onClick={() => setIsMobileMenuOpen(false)} className="hdr-mob-sub">{item.label}</Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link to={link.href || '#'} onClick={() => setIsMobileMenuOpen(false)} className="hdr-mob-item" style={{ display: 'flex' }}>{link.label}</Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}