import React, { useEffect, useRef } from 'react';

const facilities = [
  { title: 'Spacious Rooms', desc: 'Airy and well-lit rooms designed for comfort and focused study.' },
  { title: 'Dining Hall', desc: 'Nutritious meals served in a well-maintained dining facility.' },
  { title: 'Recreation', desc: 'Indoor games, television room and open courtyard for leisure.' },
  { title: 'Library & Lounge', desc: 'Dedicated reading space and lounge for relaxation.' },
  { title: 'Prayer Room', desc: 'A serene space catering to the spiritual growth of students.' },
  { title: 'Medical Aid', desc: 'Regular physician visits providing medical support as required.' },
  { title: 'Visitor\'s Room', desc: 'Designated space for family and approved visitors.' },
  { title: 'Security', desc: 'Dedicated and vigilant hostel authorities ensuring foolproof security.' },
];

const FadeIn: React.FC<{ children: React.ReactNode; delay?: string }> = ({ children, delay = '0ms' }) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('opacity-100', 'translate-y-0');
          el.classList.remove('opacity-0', 'translate-y-4');
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className="opacity-0 translate-y-4 transition-all duration-700 ease-out"
      style={{ transitionDelay: delay }}
    >
      {children}
    </div>
  );
};

const Hostel = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-0 sm:pt-0 pb-20">

      {/* Hero */}
      <div className="relative bg-[#753300] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-white" />
          <div className="absolute -bottom-10 -left-10 w-64 h-64 rounded-full bg-white" />
        </div>
        <div className="relative max-w-5xl mx-auto px-6 py-16 text-center">
          <span className="inline-block text-amber-200 text-xs uppercase tracking-[0.25em] mb-4 font-medium">
            Govt. Tilak P.G. College, Katni (M.P.)
          </span>
          <h1 className="text-3xl md:text-4xl font-semibold text-white mb-4 leading-tight">
            College Hostel
          </h1>
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-px bg-amber-300" />
            <span className="text-amber-200 text-sm italic">A Home Away From Home</span>
            <div className="w-10 h-px bg-amber-300" />
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-14 space-y-8">

        {/* About */}
        <FadeIn delay="0ms">
          <div className="bg-white border border-gray-200 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-1 h-6 bg-[#753300] rounded-full" />
              <h2 className="text-base font-medium text-gray-900">About the Hostel</h2>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Tilak College provides the opportunity for discovery and growth for young aspiring students
              who venture, often from smaller towns, in search of dreams that give them access to
              high-quality education. We provide a safe environment for our girls to pursue their
              academic careers.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Life in a hostel is about stepping into the space of responsible citizenship. The balance
              between rights and duties is carefully calibrated. It is also about being a caring community
              that celebrates diversity across regional, linguistic, class, religious and ideological
              differences — embracing an identity of womanhood that is confident, poised and ready to
              grapple with the challenges and opportunities that await them in this century.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              The hostel atmosphere fosters basic human qualities, adds discipline and good manners so
              that each girl contributes her part in maintaining a home-like atmosphere. Every effort is
              made to dissolve the grievances of students through proper communication with parents and
              teachers. Hostel life thus inculcates social responsibilities and trains students mentally,
              morally and spiritually for a successful and practical life.
            </p>
          </div>
        </FadeIn>

        {/* Stats */}
        <FadeIn delay="100ms">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { value: '2', label: 'Hostels' },
              { value: '200+', label: 'Students Accommodated' },
              { value: '8+', label: 'Facilities' },
              { value: '24/7', label: 'Security' },
            ].map((s) => (
              <div key={s.label} className="bg-[#753300] rounded-2xl p-5 text-center">
                <p className="text-2xl font-medium text-white">{s.value}</p>
                <p className="text-xs text-amber-200 mt-1 leading-tight">{s.label}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Facilities */}
        <FadeIn delay="150ms">
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
            <div className="px-8 py-5 border-b border-gray-100 flex items-center gap-3">
              <div className="w-1 h-6 bg-[#753300] rounded-full" />
              <h2 className="text-base font-medium text-gray-900">Hostel Facilities</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x-0 divide-gray-50">
              {facilities.map((f, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 px-8 py-5 hover:bg-gray-50 transition-colors border-b border-gray-50"
                >
                  <span className="flex-shrink-0 w-6 h-6 rounded-lg bg-amber-50 text-[#753300] text-xs font-medium flex items-center justify-center mt-0.5">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <p className="text-sm font-medium text-gray-900 mb-0.5">{f.title}</p>
                    <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Closing note */}
        <FadeIn delay="200ms">
          <div className="bg-[#753300] rounded-2xl p-8 text-center">
            <p className="text-amber-100 text-sm leading-relaxed max-w-2xl mx-auto">
              The college runs two hostels constructed with an appropriate ambiance — spacious, airy
              and well-lit — accommodating approximately 200 students in a nurturing and secure environment.
            </p>
          </div>
        </FadeIn>

      </div>
    </div>
  );
};

export default Hostel;
