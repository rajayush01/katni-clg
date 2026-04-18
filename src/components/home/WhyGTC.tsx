import React, { useEffect, useRef, useState } from 'react';
import {  Shield, Globe, Leaf, Heart, Zap, Trophy } from 'lucide-react';

const features = [
  {
    icon: Trophy,
    title: 'NAAC B++ Accredited',
    desc: 'Recognized for academic excellence with a score of 2.99/4 by the National Assessment and Accreditation Council.',
    color: 'from-amber-400 to-orange-500',
    bg: 'bg-amber-50',
  },
  {
    icon: Globe,
    title: 'World Bank Supported',
    desc: 'One of the select colleges receiving World Bank funding for infrastructure and academic development in M.P.',
    color: 'from-sky-400 to-blue-500',
    bg: 'bg-sky-50',
  },
  {
    icon: Leaf,
    title: 'Green Campus',
    desc: 'Eco-certified campus with solar panels, rainwater harvesting, and a lush botanical garden maintained by Science dept.',
    color: 'from-emerald-400 to-teal-500',
    bg: 'bg-emerald-50',
  },
  {
    icon: Shield,
    title: 'Pradhanmantri College of Excellence',
    desc: 'Selected as a "College of Excellence" under the prestigious PM initiative for transformative higher education.',
    color: 'from-rose-400 to-pink-500',
    bg: 'bg-rose-50',
  },
  {
    icon: Zap,
    title: 'Research & Innovation',
    desc: 'Active Research Cell with faculty publications in national/international journals and ongoing minor research projects.',
    color: 'from-violet-400 to-purple-500',
    bg: 'bg-violet-50',
  },
  {
    icon: Heart,
    title: 'Student-Centric Culture',
    desc: 'From NCC to NSS, clubs to career guidance — holistic development at the heart of everything we do.',
    color: 'from-red-400 to-orange-400',
    bg: 'bg-red-50',
  },
];

const achievements = [
  { value: '50+', label: 'Years of Excellence', sub: 'Est. 1972' },
  { value: '100+', label: 'Faculty Members', sub: 'Qualified & Experienced' },
  { value: '5000+', label: 'Students Enrolled', sub: '2024-25 Session' },
  { value: '15000+', label: 'Alumni Network', sub: 'Across Industries' },
  { value: '25+', label: 'Departments', sub: 'Arts, Science, Commerce' },
  { value: '10+', label: 'MoU Partners', sub: 'Industry & Institutions' },
];

function CountUp({ target }: { target: string }) {
  const [display, setDisplay] = useState('0');
  const num = parseInt(target.replace(/\D/g, ''));
  const suffix = target.replace(/[0-9]/g, '');

  useEffect(() => {
    let start = 0;
    const step = Math.ceil(num / 40);
    const timer = setInterval(() => {
      start = Math.min(start + step, num);
      setDisplay(start + suffix);
      if (start >= num) clearInterval(timer);
    }, 40);
    return () => clearInterval(timer);
  }, [num, suffix]);

  return <>{display}</>;
}

export default function WhyGTC() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-amber-100 rounded-full blur-3xl opacity-40" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className={`text-center mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block bg-rose-100 text-rose-700 text-xs font-bold px-4 py-1.5 rounded-full mb-3 tracking-widest uppercase">Why Choose GTC</span>
          <h2 className="text-4xl font-black text-slate-800 mb-3">What Makes Us <span className="text-rose-600">Different</span></h2>
          <div className="w-16 h-1 bg-gradient-to-r from-rose-500 to-amber-500 rounded-full mx-auto mb-4" />
          <p className="text-slate-500 max-w-xl mx-auto text-sm">Decades of academic heritage combined with modern facilities and a passionate faculty.</p>
        </div>

        {/* Feature cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`group p-6 rounded-2xl border border-slate-100 bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-400 cursor-pointer ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${100 + i * 80}ms` }}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <f.icon size={22} className="text-white" />
              </div>
              <h3 className="font-bold text-slate-800 mb-2 group-hover:text-emerald-700 transition-colors">{f.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Stats counter strip */}
        <div className={`bg-gradient-to-r from-[#0a2540] via-[#0f4c35] to-[#1a3a5c] rounded-3xl p-8 transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {achievements.map((a, i) => (
              <div key={a.label} className="text-center group">
                <p className="text-3xl font-black text-amber-400 mb-1">
                  {visible ? <CountUp target={a.value} /> : '0'}
                </p>
                <p className="text-white text-xs font-semibold">{a.label}</p>
                <p className="text-white/40 text-[10px] mt-0.5">{a.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}