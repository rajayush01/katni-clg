import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#' },
  {
    label: 'College',
    href: '#',
    children: ['Vision & Mission', 'Academic Calendar', 'Stars & Achievers', 'Library', 'GTC at a Glance'],
  },
  { label: 'IQAC', href: '#' },
  {
    label: 'Programmes',
    href: '#',
    children: ['B.Sc.', 'B.Com', 'B.A.', 'M.Sc.', 'M.Com', 'M.A.'],
  },
  {
    label: 'Departments',
    href: '#',
    children: ['Faculty of Arts', 'Faculty of Science', 'Faculty of Commerce'],
  },
  { label: 'Staff', href: '#' },
  { label: 'Research', href: '#' },
  { label: 'Gallery', href: '#' },
  { label: 'Student Corner', href: '#' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Top quick links bar */}
      <div className="bg-gradient-to-r from-[#1a3a5c] to-[#0f5a3e] text-white text-xs py-1.5 px-4 overflow-hidden relative">
        <div className="flex gap-6 animate-marquee whitespace-nowrap">
          {['World Bank', 'RTI Portal', 'AISE Portal', 'Janbhagidari Samiti', 'Scholarship', 'Alumni', 'Recruitment', 'MoUs', 'Journal'].map((item) => (
            <a key={item} href="#" className="hover:text-amber-300 transition-colors duration-200 cursor-pointer">
              {item}
            </a>
          ))}
        </div>
      </div>

      {/* Main navbar */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-lg shadow-xl shadow-emerald-900/10 py-2'
            : 'bg-white/90 backdrop-blur-md shadow-lg py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 group">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-400 via-orange-500 to-red-600 flex items-center justify-center shadow-lg group-hover:shadow-amber-400/50 group-hover:scale-105 transition-all duration-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-white/20 rounded-full animate-ping-slow" />
              <span className="text-white font-black text-xl z-10">GTC</span>
            </div>
            <div>
              <p className="text-[10px] text-emerald-700 font-semibold tracking-wider uppercase">Pradhanmantri College of Excellence</p>
              <h1 className="text-[13px] font-extrabold text-slate-800 leading-tight">Govt. Tilak P.G. College</h1>
              <p className="text-[9px] text-slate-500 tracking-wide">Katni, M.P. | NAAC B++ (2.99/4)</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={link.href}
                  className="flex items-center gap-1 px-3 py-2 text-[13px] font-semibold text-slate-700 hover:text-emerald-700 rounded-lg hover:bg-emerald-50 transition-all duration-200"
                >
                  {link.label}
                  {link.children && <ChevronDown size={12} className="group-hover:rotate-180 transition-transform duration-300" />}
                </a>
                {link.children && activeDropdown === link.label && (
                  <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-2xl border border-emerald-100 overflow-hidden animate-dropdown z-50">
                    {link.children.map((child, i) => (
                      <a
                        key={child}
                        href="#"
                        className="block px-4 py-2.5 text-xs text-slate-600 hover:text-emerald-700 hover:bg-emerald-50 hover:pl-6 transition-all duration-200 border-b border-slate-50 last:border-0"
                        style={{ animationDelay: `${i * 40}ms` }}
                      >
                        {child}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 rounded-xl bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 shadow-xl animate-slideDown">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block px-6 py-3 text-sm font-semibold text-slate-700 hover:text-emerald-700 hover:bg-emerald-50 border-b border-slate-50 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}