import React, { useState, useEffect, useRef } from 'react';
import { BookOpen, ChevronRight, Microscope, Landmark, TrendingUp, ArrowRight } from 'lucide-react';

const faculties = [
  {
    name: 'Faculty of Arts',
    icon: Landmark,
    color: 'from-purple-500 to-indigo-600',
    light: 'bg-purple-50 border-purple-100',
    accent: 'text-purple-600',
    ug: ['B.A. (Hindi, English, History)', 'B.A. (Economics, Geography)', 'B.A. (Political Science, Sociology)'],
    pg: ['M.A. Hindi', 'M.A. English', 'M.A. Sociology', 'M.A. Political Science', 'M.A. Economics', 'M.A. Geography'],
    depts: ['Hindi', 'English', 'History', 'Economics', 'Political Science', 'Geography', 'Sociology', 'Sanskrit', 'Physical Education'],
  },
  {
    name: 'Faculty of Science',
    icon: Microscope,
    color: 'from-emerald-500 to-teal-600',
    light: 'bg-emerald-50 border-emerald-100',
    accent: 'text-emerald-600',
    ug: ['B.Sc. CBZ (Chemistry, Botany, Zoology)', 'B.Sc. PCM (Physics, Chemistry, Math)', 'B.Sc. Plain'],
    pg: ['M.Sc. Mathematics', 'M.Sc. Physics', 'M.Sc. Chemistry', 'M.Sc. Botany', 'M.Sc. Zoology'],
    depts: ['Physics', 'Chemistry', 'Mathematics', 'Botany', 'Zoology', 'Computer Science', 'Biotechnology', 'Geology'],
  },
  {
    name: 'Faculty of Commerce',
    icon: TrendingUp,
    color: 'from-amber-500 to-orange-600',
    light: 'bg-amber-50 border-amber-100',
    accent: 'text-amber-600',
    ug: ['B.Com (General)', 'B.Com (Computer Applications)'],
    pg: ['M.Com (Commerce)'],
    depts: ['Commerce', 'Computer Applications'],
  },
];

export default function Programmes() {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const fac = faculties[active];

  return (
    <section ref={ref} className="py-20 bg-white relative overflow-hidden">
      {/* SVG background */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="prog-dots" width="30" height="30" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="#10b981" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#prog-dots)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className={`text-center mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block bg-amber-100 text-amber-700 text-xs font-bold px-4 py-1.5 rounded-full mb-3 tracking-widest uppercase">Academic Programmes</span>
          <h2 className="text-4xl font-black text-slate-800 mb-3">Explore Our <span className="text-amber-600">Courses</span></h2>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-emerald-500 rounded-full mx-auto mb-4" />
          <p className="text-slate-500 max-w-xl mx-auto text-sm">Choose from a rich spectrum of UG and PG programmes spanning arts, science, and commerce.</p>
        </div>

        {/* Faculty selector */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {faculties.map((f, i) => (
            <button
              key={f.name}
              onClick={() => setActive(i)}
              className={`group flex items-center gap-3 px-6 py-4 rounded-2xl border-2 font-semibold text-sm transition-all duration-300 hover:scale-105 ${
                active === i
                  ? `bg-gradient-to-r ${f.color} text-white border-transparent shadow-lg`
                  : `${f.light} ${f.accent} border-transparent hover:border-current`
              }`}
            >
              <f.icon size={18} />
              {f.name}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className={`transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid md:grid-cols-3 gap-6">
            {/* UG Programmes */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className={`bg-gradient-to-r ${fac.color} px-5 py-4`}>
                <h3 className="text-white font-bold flex items-center gap-2">
                  <BookOpen size={16} />
                  Under Graduate (UG)
                </h3>
              </div>
              <ul className="p-5 space-y-3">
                {fac.ug.map((prog) => (
                  <li key={prog} className="flex items-start gap-3 text-sm text-slate-700 hover:text-emerald-700 cursor-pointer group/item transition-colors">
                    <ChevronRight size={14} className={`mt-0.5 flex-shrink-0 ${fac.accent} group-hover/item:translate-x-1 transition-transform`} />
                    {prog}
                  </li>
                ))}
              </ul>
              <div className="px-5 pb-4">
                <button className={`text-xs font-semibold ${fac.accent} flex items-center gap-1 hover:gap-2 transition-all`}>
                  Know More <ArrowRight size={12} />
                </button>
              </div>
            </div>

            {/* PG Programmes */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className={`bg-gradient-to-r ${fac.color} px-5 py-4`}>
                <h3 className="text-white font-bold flex items-center gap-2">
                  <BookOpen size={16} />
                  Post Graduate (PG)
                </h3>
              </div>
              <ul className="p-5 space-y-3">
                {fac.pg.map((prog) => (
                  <li key={prog} className="flex items-start gap-3 text-sm text-slate-700 hover:text-emerald-700 cursor-pointer group/item transition-colors">
                    <ChevronRight size={14} className={`mt-0.5 flex-shrink-0 ${fac.accent} group-hover/item:translate-x-1 transition-transform`} />
                    {prog}
                  </li>
                ))}
              </ul>
              <div className="px-5 pb-4">
                <button className={`text-xs font-semibold ${fac.accent} flex items-center gap-1 hover:gap-2 transition-all`}>
                  Know More <ArrowRight size={12} />
                </button>
              </div>
            </div>

            {/* Departments */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className={`bg-gradient-to-r ${fac.color} px-5 py-4`}>
                <h3 className="text-white font-bold flex items-center gap-2">
                  <Landmark size={16} />
                  Departments
                </h3>
              </div>
              <div className="p-5 flex flex-wrap gap-2">
                {fac.depts.map((dept) => (
                  <span
                    key={dept}
                    className={`text-xs font-medium px-3 py-1.5 rounded-full border cursor-pointer hover:scale-105 transition-all ${fac.light} ${fac.accent} border-transparent`}
                  >
                    {dept}
                  </span>
                ))}
              </div>
              <div className="px-5 pb-4">
                <button className={`text-xs font-semibold ${fac.accent} flex items-center gap-1 hover:gap-2 transition-all`}>
                  View All Departments <ArrowRight size={12} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={`mt-10 text-center transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <button className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0f4c35] to-[#1a3a5c] text-white font-bold px-8 py-4 rounded-2xl shadow-lg hover:shadow-emerald-900/30 hover:scale-105 transition-all duration-300">
            View Complete Programme Guide
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}