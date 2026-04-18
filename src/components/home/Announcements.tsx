import React, { useState, useEffect, useRef } from 'react';
import { Bell, Calendar, ChevronRight, Megaphone, FileText, Star } from 'lucide-react';

const notices = [
  { tag: 'Admission', text: 'Online Admissions Open for UG/PG 2024-25 — Apply before July 31', date: '15 Jun 2024', hot: true, icon: Star },
  { tag: 'Exam', text: 'Annual Examination Time Table Published — Download from Student Portal', date: '12 Jun 2024', hot: false, icon: FileText },
  { tag: 'Event', text: 'Annual Cultural Fest "Pratibha Utsav 2024" — Registration Open', date: '10 Jun 2024', hot: true, icon: Megaphone },
  { tag: 'Scholarship', text: 'MP Government Scholarship Portal Registration Deadline: June 30', date: '08 Jun 2024', hot: false, icon: Bell },
  { tag: 'Sports', text: 'Inter-College Sports Competition Registrations Now Open', date: '05 Jun 2024', hot: false, icon: Star },
  { tag: 'Research', text: 'Research Cell invites applications for Minor Research Projects', date: '01 Jun 2024', hot: false, icon: FileText },
  { tag: 'Career', text: 'Campus Placement Drive — Infosys, HCL, Wipro visiting next week', date: '28 May 2024', hot: true, icon: Megaphone },
  { tag: 'Library', text: 'New e-Library portal launched — Access 10,000+ digital books', date: '25 May 2024', hot: false, icon: FileText },
];

const events = [
  { title: 'Graduation Ceremony 2024', date: 'Jun 25', color: 'bg-amber-500' },
  { title: 'Science Exhibition', date: 'Jul 5', color: 'bg-emerald-500' },
  { title: 'Alumni Meet', date: 'Jul 12', color: 'bg-sky-500' },
  { title: 'NAAC Peer Visit', date: 'Aug 1', color: 'bg-rose-500' },
];

const tagColors: Record<string, string> = {
  Admission: 'bg-emerald-100 text-emerald-700',
  Exam: 'bg-amber-100 text-amber-700',
  Event: 'bg-purple-100 text-purple-700',
  Scholarship: 'bg-sky-100 text-sky-700',
  Sports: 'bg-orange-100 text-orange-700',
  Research: 'bg-rose-100 text-rose-700',
  Career: 'bg-teal-100 text-teal-700',
  Library: 'bg-indigo-100 text-indigo-700',
};

export default function Announcements() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Decorative BG */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-50 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-amber-50 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className={`text-center mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block bg-emerald-100 text-emerald-700 text-xs font-bold px-4 py-1.5 rounded-full mb-3 tracking-widest uppercase">Latest Updates</span>
          <h2 className="text-4xl font-black text-slate-800 mb-3">Notices & <span className="text-emerald-600">Announcements</span></h2>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-amber-500 rounded-full mx-auto" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Notice board */}
          <div className={`lg:col-span-2 transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 overflow-hidden border border-slate-100">
              <div className="bg-gradient-to-r from-[#0f4c35] to-[#1a3a5c] px-6 py-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-400/20 flex items-center justify-center">
                  <Bell size={16} className="text-amber-300" />
                </div>
                <h3 className="text-white font-bold">Notice Board</h3>
                <span className="ml-auto text-white/60 text-xs">Latest {notices.length} notices</span>
              </div>

              <div className="divide-y divide-slate-50 max-h-[480px] overflow-y-auto scrollbar-thin">
                {notices.map((notice, i) => (
                  <div
                    key={i}
                    className="group flex items-start gap-4 px-6 py-4 hover:bg-emerald-50/50 transition-all duration-200 cursor-pointer"
                    style={{ animationDelay: `${i * 60}ms` }}
                  >
                    <div className={`mt-0.5 w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center ${tagColors[notice.tag] || 'bg-slate-100 text-slate-500'}`}>
                      <notice.icon size={14} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${tagColors[notice.tag] || 'bg-slate-100 text-slate-500'}`}>
                          {notice.tag}
                        </span>
                        {notice.hot && (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-100 text-red-600 animate-pulse">NEW</span>
                        )}
                        <span className="text-[10px] text-slate-400 ml-auto flex items-center gap-1">
                          <Calendar size={10} /> {notice.date}
                        </span>
                      </div>
                      <p className="text-sm text-slate-700 group-hover:text-emerald-700 transition-colors leading-snug">{notice.text}</p>
                    </div>
                    <ChevronRight size={14} className="text-slate-300 group-hover:text-emerald-500 flex-shrink-0 mt-1 group-hover:translate-x-1 transition-all" />
                  </div>
                ))}
              </div>

              <div className="px-6 py-3 bg-slate-50 border-t border-slate-100">
                <button className="text-xs font-semibold text-emerald-600 hover:text-emerald-700 flex items-center gap-1 hover:gap-2 transition-all">
                  View All Notices <ChevronRight size={12} />
                </button>
              </div>
            </div>
          </div>

          {/* Events sidebar */}
          <div className={`transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 overflow-hidden border border-slate-100">
              <div className="bg-gradient-to-r from-amber-500 to-orange-600 px-6 py-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                  <Calendar size={16} className="text-white" />
                </div>
                <h3 className="text-white font-bold">Upcoming Events</h3>
              </div>

              <div className="p-4 space-y-3">
                {events.map((ev, i) => (
                  <div
                    key={i}
                    className="group flex items-center gap-3 p-3 rounded-xl bg-slate-50 hover:bg-amber-50 border border-transparent hover:border-amber-200 transition-all duration-200 cursor-pointer"
                  >
                    <div className={`${ev.color} text-white text-xs font-black px-2 py-1.5 rounded-lg text-center w-14 flex-shrink-0 group-hover:scale-105 transition-transform`}>
                      {ev.date}
                    </div>
                    <p className="text-sm text-slate-700 font-medium group-hover:text-amber-700 transition-colors">{ev.title}</p>
                    <ChevronRight size={14} className="text-slate-300 group-hover:text-amber-500 ml-auto flex-shrink-0 group-hover:translate-x-1 transition-all" />
                  </div>
                ))}
              </div>
            </div>

            {/* Quick links */}
            <div className="mt-5 bg-gradient-to-br from-[#0a2540] to-[#0f4c35] rounded-2xl p-5 text-white">
              <h4 className="font-bold mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-md bg-amber-500/30 flex items-center justify-center">
                  <Star size={12} className="text-amber-300" />
                </span>
                Quick Links
              </h4>
              {['Student Portal', 'Results', 'Admit Card', 'Fee Payment', 'Academic Calendar', 'IQAC Reports'].map((link) => (
                <a key={link} href="#" className="flex items-center justify-between py-2.5 border-b border-white/10 last:border-0 text-sm text-white/80 hover:text-amber-300 group transition-colors">
                  {link}
                  <ChevronRight size={12} className="opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}