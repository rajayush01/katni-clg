import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, BookOpen, Users, Award, GraduationCap } from 'lucide-react';

const slides = [
  {
    bg: 'from-[#0a2540] via-[#0f4c35] to-[#1a3a5c]',
    badge: 'NAAC Accredited B++ (2.99/4)',
    title: 'Shaping Futures,',
    title2: 'Building Nations',
    subtitle: 'Pradhanmantri College of Excellence — where academic rigor meets holistic development in the heart of Madhya Pradesh.',
    cta: 'Explore Programmes',
    cta2: 'Student Corner',
    pattern: 'circles',
  },
  {
    bg: 'from-[#1a2a1a] via-[#0f5a3e] to-[#1a4a2a]',
    badge: 'Estd. under Govt. of M.P.',
    title: 'Excellence in',
    title2: 'Education & Research',
    subtitle: 'Offering UG and PG programmes across Arts, Science, and Commerce with world-class faculty and infrastructure.',
    cta: 'View Departments',
    cta2: 'Research Cell',
    pattern: 'dots',
  },
  {
    bg: 'from-[#2a1a0a] via-[#5a3a0f] to-[#3a2a1a]',
    badge: 'Vibrant Campus Life',
    title: 'More Than',
    title2: 'Just a College',
    subtitle: 'NCC, NSS, Sports, Cultural clubs — a thriving ecosystem that nurtures leaders, thinkers, and change-makers.',
    cta: 'Campus Life',
    cta2: 'Gallery',
    pattern: 'grid',
  },
];

const stats = [
  { icon: Users, value: '5000+', label: 'Students', color: 'text-amber-400' },
  { icon: GraduationCap, value: '80+', label: 'Faculty', color: 'text-emerald-400' },
  { icon: BookOpen, value: '25+', label: 'Departments', color: 'text-sky-400' },
  { icon: Award, value: '50+', label: 'Years Legacy', color: 'text-rose-400' },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => goTo((current + 1) % slides.length), 6000);
    return () => clearInterval(timer);
  }, [current]);

  const goTo = (idx: number) => {
    setAnimating(true);
    setTimeout(() => {
      setCurrent(idx);
      setAnimating(false);
    }, 400);
  };

  const slide = slides[current];

  return (
    <section className="relative overflow-hidden">
      {/* Main Hero */}
      <div
        className={`relative min-h-[88vh] bg-gradient-to-br ${slide.bg} transition-all duration-700 flex items-center`}
      >
        {/* Animated background pattern */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Floating orbs */}
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-amber-500/10 blur-3xl animate-float" />
          <div className="absolute bottom-20 left-10 w-72 h-72 rounded-full bg-emerald-500/10 blur-3xl animate-float-delay" />
          <div className="absolute top-1/2 right-1/4 w-48 h-48 rounded-full bg-white/5 blur-2xl animate-pulse-slow" />

          {/* Geometric decorations */}
          <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hero-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid)" />
          </svg>

          {/* Decorative circles */}
          <div className="absolute -right-24 top-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white/10 rounded-full animate-spin-very-slow" />
          <div className="absolute -right-12 top-1/2 -translate-y-1/2 w-[350px] h-[350px] border border-amber-500/20 rounded-full animate-spin-reverse-slow" />

          {/* Floating particles */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-white/40"
              style={{
                left: `${5 + (i * 23) % 90}%`,
                top: `${10 + (i * 37) % 80}%`,
                animationDelay: `${i * 0.3}s`,
                animation: `floatParticle ${3 + (i % 3)}s ease-in-out infinite alternate`,
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className={`relative z-10 max-w-7xl mx-auto px-6 py-20 transition-all duration-500 ${animating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 text-amber-300 text-xs font-semibold px-4 py-2 rounded-full mb-6 animate-badge-pop">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              {slide.badge}
            </div>

            {/* Title */}
            <h2 className="text-5xl md:text-7xl font-black text-white leading-none mb-2 drop-shadow-2xl">
              {slide.title}
            </h2>
            <h2 className="text-5xl md:text-7xl font-black leading-none mb-6 drop-shadow-2xl"
              style={{ WebkitTextStroke: '2px rgba(251,191,36,0.8)', color: 'transparent' }}>
              {slide.title2}
            </h2>

            <p className="text-white/75 text-lg md:text-xl leading-relaxed max-w-2xl mb-8">
              {slide.subtitle}
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="group flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-white font-bold px-7 py-3.5 rounded-xl shadow-lg shadow-amber-500/40 hover:shadow-amber-400/60 hover:scale-105 transition-all duration-300">
                {slide.cta}
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur border border-white/25 text-white font-bold px-7 py-3.5 rounded-xl hover:scale-105 transition-all duration-300">
                {slide.cta2}
              </button>
            </div>
          </div>
        </div>

        {/* Slide controls */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 z-20">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`transition-all duration-300 rounded-full ${i === current ? 'w-8 h-3 bg-amber-400' : 'w-3 h-3 bg-white/40 hover:bg-white/70'}`}
            />
          ))}
        </div>

        <button
          onClick={() => goTo((current - 1 + slides.length) % slides.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur border border-white/20 text-white flex items-center justify-center transition-all duration-200 hover:scale-110"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => goTo((current + 1) % slides.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur border border-white/20 text-white flex items-center justify-center transition-all duration-200 hover:scale-110"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Stats bar */}
      <div className="bg-white border-b border-slate-100 shadow-xl shadow-slate-100">
        <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="flex items-center gap-4 group"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className={`w-12 h-12 rounded-xl bg-slate-50 group-hover:bg-emerald-50 flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${stat.color}`}>
                <stat.icon size={24} />
              </div>
              <div>
                <p className="text-2xl font-black text-slate-800">{stat.value}</p>
                <p className="text-xs text-slate-500 font-medium">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}