import React from 'react';
import { MapPin, Phone, Mail, ArrowRight, Facebook, Twitter, Youtube, Instagram } from 'lucide-react';

const footerLinks = {
  'Quick Links': ['Home', 'About College', 'IQAC', 'Admissions', 'Programmes', 'Student Corner'],
  'Facilities': ['Library', 'Hostel', 'Sports Complex', 'Career Guidance Cell', 'Research Cell', 'Clubs & Activities'],
  'Important': ['RTI Portal', 'World Bank', 'AISE Portal', 'Scholarship Portal', 'Alumni Network', 'MoUs & Collaborations'],
};

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0a1f35] to-[#060f1a] text-white relative overflow-hidden">
      {/* Decorative top border */}
      <div className="h-1 bg-gradient-to-r from-amber-500 via-emerald-500 to-sky-500" />

      {/* Newsletter strip */}
      <div className="bg-gradient-to-r from-[#0f4c35] to-[#1a3a5c] py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-black text-white mb-1">Stay Updated</h3>
            <p className="text-white/60 text-sm">Get latest notices, events and news directly in your inbox.</p>
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 md:w-72 bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-amber-400 transition-colors"
            />
            <button className="flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-white font-bold px-5 py-3 rounded-xl transition-all hover:scale-105 shadow-lg shadow-amber-500/30">
              Subscribe <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* College info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center shadow-lg shadow-amber-500/30">
                <span className="text-white font-black text-lg">GTC</span>
              </div>
              <div>
                <p className="text-[10px] text-emerald-400 font-semibold tracking-widest uppercase">Pradhanmantri College of Excellence</p>
                <h2 className="text-base font-black text-white">Govt. Tilak P.G. College</h2>
                <p className="text-[10px] text-white/40">Katni, Madhya Pradesh</p>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Shaasakiya Tilak Snaatakottar Mahavidyalaya, Katni — a premier institution of higher learning in Madhya Pradesh, committed to academic excellence, research, and holistic development since 1972.
            </p>

            {/* Contact info */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-amber-400 mt-0.5 flex-shrink-0" />
                <span className="text-white/60 text-sm">Katni, Madhya Pradesh — 483501, India</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-amber-400 flex-shrink-0" />
                <span className="text-white/60 text-sm">+91-7622-XXXXXX</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-amber-400 flex-shrink-0" />
                <a href="mailto:info@govttilakpgcollege.ac.in" className="text-white/60 hover:text-amber-400 text-sm transition-colors">
                  info@govttilakpgcollege.ac.in
                </a>
              </div>
            </div>

            {/* Social links */}
            <div className="flex gap-3 mt-6">
              {[Facebook, Twitter, Youtube, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-lg bg-white/10 hover:bg-amber-500 flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg hover:shadow-amber-500/30">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-white font-bold mb-5 relative">
                {heading}
                <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-amber-500 rounded-full" />
              </h4>
              <ul className="space-y-2.5 mt-4">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-white/50 hover:text-amber-400 text-sm flex items-center gap-2 group transition-colors">
                      <ArrowRight size={10} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs text-center sm:text-left">
            © 2024 Govt. Tilak P.G. College, Katni. All rights reserved. | NAAC Accredited B++ (2.99/4)
          </p>
          <div className="flex gap-4">
            {['Privacy Policy', 'Terms of Use', 'Sitemap'].map((item) => (
              <a key={item} href="#" className="text-white/30 hover:text-white/70 text-xs transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative BG orbs */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-900/20 rounded-full translate-x-1/2 translate-y-1/2 pointer-events-none blur-3xl" />
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-amber-900/20 rounded-full -translate-x-1/2 pointer-events-none blur-3xl" />
    </footer>
  );
}