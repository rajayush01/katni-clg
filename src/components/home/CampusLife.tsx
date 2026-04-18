import React, { useEffect, useRef, useState } from 'react';
import { Camera, Users, Shield, Flag, Music, Play } from 'lucide-react';

const activities = [
  { icon: Shield, name: 'NCC', desc: 'National Cadet Corps — discipline and leadership training for future defense personnel.', color: 'from-olive-500 to-green-700', gradient: 'from-green-900 to-green-700', badge: '3 Wings Active' },
  { icon: Users, name: 'NSS', desc: 'National Service Scheme — community service, social awareness, and nation building.', color: 'from-blue-500 to-indigo-700', gradient: 'from-blue-900 to-blue-700', badge: '2 Units Active' },
  { icon: Flag, name: 'Sports', desc: 'Inter-college sports tournaments, state-level representation, athletics, and yoga.', color: 'from-orange-500 to-red-600', gradient: 'from-orange-900 to-red-700', badge: '15+ Sports' },
  { icon: Music, name: 'Cultural', desc: 'Pratibha Utsav, fine arts, debates, literary society — celebrating talent and creativity.', color: 'from-purple-500 to-pink-600', gradient: 'from-purple-900 to-pink-700', badge: 'Annual Fest' },
];

// Fake gallery grid with colored placeholder tiles
const gallery = [
  { label: 'Annual Convocation 2023', color: 'bg-gradient-to-br from-amber-200 to-orange-300', span: 'col-span-2 row-span-2' },
  { label: 'Science Lab', color: 'bg-gradient-to-br from-sky-200 to-blue-300', span: '' },
  { label: 'Library', color: 'bg-gradient-to-br from-emerald-200 to-teal-300', span: '' },
  { label: 'Campus Garden', color: 'bg-gradient-to-br from-green-200 to-lime-300', span: '' },
  { label: 'Sports Day', color: 'bg-gradient-to-br from-orange-200 to-red-300', span: 'col-span-2' },
  { label: 'Cultural Fest', color: 'bg-gradient-to-br from-purple-200 to-pink-300', span: '' },
];

export default function CampusLife() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6">
        <div className={`text-center mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block bg-purple-100 text-purple-700 text-xs font-bold px-4 py-1.5 rounded-full mb-3 tracking-widest uppercase">Campus Life</span>
          <h2 className="text-4xl font-black text-slate-800 mb-3">Life Beyond <span className="text-purple-600">Classroom</span></h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-4" />
          <p className="text-slate-500 max-w-xl mx-auto text-sm">Vibrant clubs, co-curricular activities, sports, and cultural events that shape well-rounded personalities.</p>
        </div>

        {/* Activity cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {activities.map((a, i) => (
            <div
              key={a.name}
              className={`group relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br ${a.gradient} text-white hover:scale-105 hover:shadow-2xl transition-all duration-400 cursor-pointer ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${100 + i * 80}ms` }}
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-500" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <a.icon size={22} />
                </div>
                <span className="text-[10px] font-bold bg-white/20 px-2 py-1 rounded-full mb-2 inline-block">{a.badge}</span>
                <h3 className="text-xl font-black mb-2">{a.name}</h3>
                <p className="text-white/75 text-xs leading-relaxed">{a.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery preview */}
        <div className={`transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-black text-slate-800 flex items-center gap-2">
              <Camera size={20} className="text-purple-500" />
              Photo Gallery
            </h3>
            <button className="text-sm font-semibold text-purple-600 hover:text-purple-700 flex items-center gap-1 hover:gap-2 transition-all">
              View All <Camera size={14} />
            </button>
          </div>

          <div className="grid grid-cols-3 gap-3 h-72">
            {gallery.map((item, i) => (
              <div
                key={item.label}
                className={`${item.color} ${item.span} rounded-xl relative overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300`}
              >
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-white/30 backdrop-blur flex items-center justify-center">
                      <Play size={14} className="text-white" />
                    </div>
                    <span className="text-white text-xs font-semibold text-center px-2">{item.label}</span>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute inset-0 flex items-center justify-center opacity-30">
                  <Camera size={32} className="text-white/50" />
                </div>
                <div className="absolute bottom-2 left-2 right-2">
                  <span className="text-[10px] font-semibold text-white/70 bg-black/20 backdrop-blur px-2 py-0.5 rounded-full">
                    {item.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}