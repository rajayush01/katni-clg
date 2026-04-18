import React, { useEffect, useRef, useState } from 'react';
import { Mail, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

const staff = [
  { name: 'Dr. Rajesh Kumar Sharma', role: 'Principal', dept: 'Administration', initials: 'RK', color: 'from-emerald-500 to-teal-600', specialization: 'Physics, Academic Administration' },
  { name: 'Dr. Sunita Devi Patel', role: 'HOD - Hindi', dept: 'Faculty of Arts', initials: 'SP', color: 'from-purple-500 to-indigo-600', specialization: 'Hindi Literature, Research' },
  { name: 'Prof. Anil Mishra', role: 'HOD - Chemistry', dept: 'Faculty of Science', initials: 'AM', color: 'from-sky-500 to-blue-600', specialization: 'Organic Chemistry, Research' },
  { name: 'Dr. Meena Tiwari', role: 'HOD - Commerce', dept: 'Faculty of Commerce', initials: 'MT', color: 'from-amber-500 to-orange-600', specialization: 'Business Studies, Finance' },
  { name: 'Prof. Dinesh Verma', role: 'HOD - Mathematics', dept: 'Faculty of Science', initials: 'DV', color: 'from-rose-500 to-pink-600', specialization: 'Applied Mathematics' },
  { name: 'Dr. Kavita Singh', role: 'HOD - English', dept: 'Faculty of Arts', initials: 'KS', color: 'from-teal-500 to-emerald-600', specialization: 'English Literature, Linguistics' },
];

export default function Faculty() {
  const [visible, setVisible] = useState(false);
  const [offset, setOffset] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const maxOffset = Math.max(0, staff.length - 3);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-slate-50 to-transparent pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        <div className={`flex items-end justify-between mb-12 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div>
            <span className="inline-block bg-sky-100 text-sky-700 text-xs font-bold px-4 py-1.5 rounded-full mb-3 tracking-widest uppercase">Our Faculty</span>
            <h2 className="text-4xl font-black text-slate-800 mb-2">Meet The <span className="text-sky-600">Educators</span></h2>
            <div className="w-16 h-1 bg-gradient-to-r from-sky-500 to-emerald-500 rounded-full" />
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setOffset(Math.max(0, offset - 1))}
              disabled={offset === 0}
              className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-sky-100 text-slate-600 hover:text-sky-700 flex items-center justify-center transition-all disabled:opacity-30"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => setOffset(Math.min(maxOffset, offset + 1))}
              disabled={offset >= maxOffset}
              className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-sky-100 text-slate-600 hover:text-sky-700 flex items-center justify-center transition-all disabled:opacity-30"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(calc(-${offset} * (100% / 3 + 1.5rem)))` }}
          >
            {staff.map((member, i) => (
              <div
                key={member.name}
                className={`flex-none w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] group bg-white border border-slate-100 rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-400 ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Card top */}
                <div className={`bg-gradient-to-br ${member.color} p-6 relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/10 -translate-y-1/2 translate-x-1/2" />
                  <div className="relative z-10 flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center text-white font-black text-xl shadow-lg">
                      {member.initials}
                    </div>
                    <div className="text-white">
                      <h3 className="font-bold text-base leading-tight">{member.name}</h3>
                      <p className="text-white/80 text-xs mt-0.5">{member.role}</p>
                    </div>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-5">
                  <span className="inline-block bg-slate-100 text-slate-600 text-xs font-medium px-3 py-1 rounded-full mb-3">{member.dept}</span>
                  <p className="text-sm text-slate-500 mb-4">
                    <span className="text-slate-700 font-semibold">Specialization: </span>
                    {member.specialization}
                  </p>
                  <div className="flex gap-2">
                    <button className="flex items-center gap-1.5 text-xs font-semibold text-sky-600 hover:text-sky-700 bg-sky-50 hover:bg-sky-100 px-3 py-2 rounded-lg transition-colors">
                      <Mail size={12} /> Email
                    </button>
                    <button className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-700 bg-slate-50 hover:bg-slate-100 px-3 py-2 rounded-lg transition-colors">
                      <ExternalLink size={12} /> Profile
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`mt-8 text-center transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <button className="inline-flex items-center gap-2 text-sm font-bold text-sky-600 hover:text-sky-700 border-2 border-sky-200 hover:border-sky-400 px-6 py-3 rounded-xl transition-all hover:bg-sky-50">
            View All Faculty Members
            <ExternalLink size={14} />
          </button>
        </div>
      </div>
    </section>
  );
}