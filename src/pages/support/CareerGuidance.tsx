import React, { useEffect, useRef } from 'react';

const activities = [
  'To gather and disseminate information on job avenues in Govt. and Private Sectors.',
  'Organize Seminars and Workshops by experts from the industry and Reputed Institutions on Soft skills.',
  'Emerging professional trends and events, leadership roles, entrepreneurship and career opportunities in different fields of study.',
  'Creating awareness about the opportunities to pursue higher studies in India and abroad.',
  'Facilitating the actual recruitment procedure.',
  'Maintaining record of all the activities and the outcome of each of them.',
];

const committee = [
  { name: 'Dr. Chitra Prabhat', role: 'Nodal Officer' },
  { name: 'Dr. V. K. Dwivedi', role: 'Coordinator' },
  { name: 'Mr. Sunil Tripathi', role: 'Member' },
  { name: 'Mr. Anand Pratap Singh', role: 'Member' },
];

function useFadeIn() {
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
  return ref;
}

const FadeIn: React.FC<{ children: React.ReactNode; delay?: string }> = ({ children, delay = '0ms' }) => {
  const ref = useFadeIn();
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

const CareerGuidance = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-0 sm:pt-0 pb-20">

      {/* Hero Banner */}
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
            Swami Vivekanand<br />Career Guidance Cell
          </h1>
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-px bg-amber-300" />
            <span className="text-amber-200 text-sm italic">Empowering Futures, Guiding Careers</span>
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
              <h2 className="text-base font-medium text-gray-900">About the Cell</h2>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Welcome to Swami Vivekanand Career Guidance Cell of Govt. Tilak P.G. College, Katni.
              The Career Guidance Cell provides information to students about various career opportunities.
              The cell informs about the latest job notifications and training programs. It also organizes
              lectures for students to prepare for various competitive exams.
            </p>
          </div>
        </FadeIn>

        {/* Stats */}
        <FadeIn delay="100ms">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { value: '6+', label: 'Core Activities' },
              { value: '4', label: 'Committee Members' },
              { value: '100+', label: 'Students Guided' },
              { value: '∞', label: 'Opportunities' },
            ].map((s) => (
              <div key={s.label} className="bg-[#753300] rounded-2xl p-5 text-center">
                <p className="text-2xl font-medium text-white">{s.value}</p>
                <p className="text-xs text-amber-200 mt-1 leading-tight">{s.label}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Activities */}
        <FadeIn delay="150ms">
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
            <div className="px-8 py-5 border-b border-gray-100 flex items-center gap-3">
              <div className="w-1 h-6 bg-[#753300] rounded-full" />
              <h2 className="text-base font-medium text-gray-900">Activities of the Cell</h2>
            </div>
            <div className="divide-y divide-gray-50">
              {activities.map((activity, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 px-8 py-4 hover:bg-gray-50 transition-colors"
                >
                  <span className="flex-shrink-0 w-6 h-6 rounded-lg bg-amber-50 text-[#753300] text-xs font-medium flex items-center justify-center mt-0.5">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="text-sm text-gray-600 leading-relaxed">{activity}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Committee */}
        <FadeIn delay="200ms">
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
            <div className="px-8 py-5 border-b border-gray-100 flex items-center gap-3">
              <div className="w-1 h-6 bg-[#753300] rounded-full" />
              <h2 className="text-base font-medium text-gray-900">Committee Members</h2>
            </div>
            <div className="divide-y divide-gray-50">
              {committee.map((member, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 px-8 py-4 hover:bg-gray-50 transition-colors"
                >
                  <div className="w-9 h-9 rounded-full bg-[#753300] flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-medium">
                      {member.name.split(' ').map((n) => n[0]).slice(0, 2).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{member.name}</p>
                    <p className="text-xs text-gray-500">{member.role}</p>
                  </div>
                  <span className="ml-auto text-xs font-medium text-[#753300] bg-amber-50 px-3 py-1 rounded-lg">
                    {member.role}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

      </div>
    </div>
  );
};

export default CareerGuidance;
