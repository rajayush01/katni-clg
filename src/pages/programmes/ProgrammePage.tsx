import React, { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';

interface Programme {
  title: string;
  degree: string;
  duration: string;
  eligibility: string;
  faculty: string;
  description: string;
  about?: string;
  researchAreas?: string[];
}

const programmeMap: Record<string, Programme> = {
  // UG
  'ug/bsc/cbz': {
    title: 'B.Sc. — CBZ', degree: 'Bachelor of Science', duration: '3 Years',
    eligibility: '10+2 with Science (PCB)', faculty: 'Faculty of Science',
    description: 'Chemistry, Botany & Zoology',
  },
  'ug/bsc/plain': {
    title: 'B.Sc. — Plain', degree: 'Bachelor of Science', duration: '3 Years',
    eligibility: '10+2 with Science', faculty: 'Faculty of Science',
    description: 'Core Science Disciplines',
  },
  'ug/bcom': {
    title: 'B.Com', degree: 'Bachelor of Commerce', duration: '3 Years',
    eligibility: '10+2 from any stream', faculty: 'Faculty of Commerce',
    description: 'Commerce & Business Studies',
  },
  'ug/ba': {
    title: 'B.A.', degree: 'Bachelor of Arts', duration: '3 Years',
    eligibility: '10+2 from any stream', faculty: 'Faculty of Arts',
    description: 'Humanities & Social Sciences',
  },
  // PG — M.Sc.
  'pg/msc/mathematics': {
    title: 'M.Sc. Mathematics', degree: 'Master of Science', duration: '2 Years',
    eligibility: 'Graduation from relevant subjects', faculty: 'Faculty of Science',
    description: 'Advanced Mathematics',
    about: `Department of Mathematics started its journey from 1971 for UG and 1984 for PG courses as a unit to offer Bachelor's and Master's degree to the students. It soon acquired the status of a full-fledged department in 1984. Its importance lies in the fact that it caters to the needs of the undergraduate as well as post-graduate students mostly coming from rural area. At present there are three permanent faculty members in the Mathematics Department. The faculty members of the department have international experiences and training.`,
    researchAreas: ['Numerical Analysis', 'Differential Equations', 'Integral Equations', 'Fuzzy Algebra & Fuzzy Aggregation Operator', 'Fuzzy Automata'],
  },
  'pg/msc/physics': {
    title: 'M.Sc. Physics', degree: 'Master of Science', duration: '2 Years',
    eligibility: 'Graduation from relevant subjects with 55% aggregate marks', faculty: 'Faculty of Science',
    description: 'Advanced Physics',
    about: `The main intent of the course is to provide in-depth knowledge to the students in advanced applied Physics and prepare them for various research activities. The enriched syllabus along with applied core papers includes projects and Internship in IV semester.`,
  },
  'pg/msc/chemistry': {
    title: 'M.Sc. Chemistry', degree: 'Master of Science', duration: '2 Years',
    eligibility: 'Graduation from relevant subjects with 55% aggregate marks', faculty: 'Faculty of Science',
    description: 'Advanced Chemistry',
  },
  'pg/msc/botany': {
    title: 'M.Sc. Botany', degree: 'Master of Science', duration: '2 Years',
    eligibility: 'Graduation from relevant subjects with 55% aggregate marks', faculty: 'Faculty of Science',
    description: 'Advanced Botany',
  },
  'pg/msc/zoology': {
    title: 'M.Sc. Zoology', degree: 'Master of Science', duration: '2 Years',
    eligibility: 'Graduation from relevant subjects with 55% aggregate marks', faculty: 'Faculty of Science',
    description: 'Advanced Zoology',
  },
  // PG — M.Com & M.A.
  'pg/mcom/commerce': {
    title: 'M.Com', degree: 'Master of Commerce', duration: '2 Years',
    eligibility: 'B.Com or equivalent', faculty: 'Faculty of Commerce',
    description: 'Advanced Commerce',
  },
  'pg/ma/sociology': {
    title: 'M.A. Sociology', degree: 'Master of Arts', duration: '2 Years',
    eligibility: 'Graduation from relevant subjects', faculty: 'Faculty of Arts',
    description: 'Sociology & Social Theory',
  },
  'pg/ma/hindi': {
    title: 'M.A. Hindi', degree: 'Master of Arts', duration: '2 Years',
    eligibility: 'Graduation from relevant subjects', faculty: 'Faculty of Arts',
    description: 'Hindi Language & Literature',
  },
  'pg/ma/english': {
    title: 'M.A. English', degree: 'Master of Arts', duration: '2 Years',
    eligibility: 'Graduation from relevant subjects', faculty: 'Faculty of Arts',
    description: 'English Language & Literature',
  },
  'pg/ma/political-science': {
    title: 'M.A. Political Science', degree: 'Master of Arts', duration: '2 Years',
    eligibility: 'Graduation from relevant subjects', faculty: 'Faculty of Arts',
    description: 'Political Theory & Governance',
  },
  'pg/ma/economics': {
    title: 'M.A. Economics', degree: 'Master of Arts', duration: '2 Years',
    eligibility: 'Graduation from relevant subjects', faculty: 'Faculty of Arts',
    description: 'Economic Theory & Policy',
  },
  'pg/ma/geography': {
    title: 'M.A. Geography', degree: 'Master of Arts', duration: '2 Years',
    eligibility: 'Graduation from relevant subjects', faculty: 'Faculty of Arts',
    description: 'Physical & Human Geography',
  },
};

const FadeIn: React.FC<{ children: React.ReactNode; delay?: string }> = ({ children, delay = '0ms' }) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.classList.add('opacity-100', 'translate-y-0');
        el.classList.remove('opacity-0', 'translate-y-5');
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={ref} className="opacity-0 translate-y-5 transition-all duration-700 ease-out" style={{ transitionDelay: delay }}>
      {children}
    </div>
  );
};

const ProgrammePage: React.FC = () => {
  const { level, stream, specialization } = useParams<{ level: string; stream: string; specialization?: string }>();
  const key = specialization ? `${level}/${stream}/${specialization}` : `${level}/${stream}`;
  const programme = programmeMap[key];

  const title       = programme?.title       ?? `${level?.toUpperCase()} Programme`;
  const degree      = programme?.degree      ?? 'Programme';
  const duration    = programme?.duration    ?? '—';
  const eligibility = programme?.eligibility ?? '—';
  const faculty     = programme?.faculty     ?? '—';
  const description = programme?.description ?? '';
  const about       = programme?.about;
  const researchAreas = programme?.researchAreas;
  const hasContent  = !!about;

  return (
    <div className="min-h-screen bg-[#ffffff] pt-0 sm:pt-0 pb-20">

      {/* Hero */}
      <div className="relative bg-[#753300] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white" />
          <div className="absolute -bottom-12 -left-12 w-64 h-64 rounded-full bg-white" />
        </div>
        <div className="relative max-w-5xl mx-auto px-6 py-16 text-center">
          <span className="inline-block text-amber-300 text-xs uppercase tracking-[0.25em] mb-3 font-medium">
            Govt. Tilak P.G. College, Katni (M.P.)
          </span>
          <h1 className="text-3xl md:text-4xl font-semibold text-white mb-2 leading-tight">{title}</h1>
          {description && <p className="text-amber-200 text-sm mb-4">{description}</p>}
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-px bg-amber-400" />
            <span className="text-amber-300 text-sm italic">{degree}</span>
            <div className="w-10 h-px bg-amber-400" />
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-14 space-y-8">

        {/* Info pills */}
        <FadeIn delay="0ms">
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              { label: 'Duration', value: duration },
              { label: 'Eligibility', value: eligibility },
              { label: 'Affiliation', value: 'Rani Durgawati University' },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2 bg-white border border-amber-200 rounded-full px-5 py-2 shadow-sm">
                <span className="text-xs text-gray-400 uppercase tracking-wide">{item.label}</span>
                <span className="w-px h-3 bg-amber-300" />
                <span className="text-sm font-medium text-[#753300]">{item.value}</span>
              </div>
            ))}
          </div>
        </FadeIn>

        {hasContent ? (
          <>
            {/* About the Department */}
            <FadeIn delay="100ms">
              <div className="bg-white border border-amber-100 rounded-2xl overflow-hidden shadow-sm">
                <div className="h-1 w-full bg-gradient-to-r from-[#753300] via-[#e5be10] to-[#753300]" />
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-1 h-6 bg-[#753300] rounded-full" />
                    <h2 className="text-base font-medium text-gray-900">About the Department</h2>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{about}</p>
                </div>
              </div>
            </FadeIn>

            {/* Research Areas */}
            {researchAreas && researchAreas.length > 0 && (
              <FadeIn delay="150ms">
                <div className="bg-white border border-amber-100 rounded-2xl overflow-hidden shadow-sm">
                  <div className="px-8 py-5 border-b border-gray-100 flex items-center gap-3">
                    <div className="w-1 h-6 bg-[#753300] rounded-full" />
                    <h2 className="text-base font-medium text-gray-900">Research Focus Areas</h2>
                  </div>
                  <div className="divide-y divide-gray-50">
                    {researchAreas.map((area, i) => (
                      <div key={i} className="flex items-center gap-4 px-8 py-4 hover:bg-amber-50/50 transition-colors">
                        <span className="flex-shrink-0 w-6 h-6 rounded-lg bg-amber-50 text-[#753300] text-xs font-medium flex items-center justify-center">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <p className="text-sm text-gray-700">{area}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            )}

            {/* Stats row */}
            <FadeIn delay="200ms">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  { value: duration, label: 'Duration' },
                  { value: faculty, label: 'Faculty' },
                  { value: 'RDU', label: 'University' },
                ].map((s) => (
                  <div key={s.label} className="bg-[#753300] rounded-2xl p-5 text-center">
                    <p className="text-lg font-semibold text-white leading-tight">{s.value}</p>
                    <p className="text-xs text-amber-200 mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </>
        ) : (
          /* Coming soon card for pages without content yet */
          <FadeIn delay="100ms">
            <div className="bg-white border border-amber-100 rounded-2xl overflow-hidden shadow-sm">
              <div className="h-1 w-full bg-gradient-to-r from-[#753300] via-[#e5be10] to-[#753300]" />
              <div className="flex flex-col items-center justify-center py-20 px-8 text-center">
                <div className="relative mb-8">
                  <div className="w-20 h-20 rounded-full bg-amber-50 border-2 border-amber-200 flex items-center justify-center">
                    <svg className="w-9 h-9 text-[#753300]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 rounded-full border-2 border-amber-300 animate-ping opacity-30" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Content Under Preparation</h2>
                <p className="text-sm text-gray-500 leading-relaxed max-w-md">
                  Detailed information for this programme — including syllabus, eligibility criteria,
                  fee structure and faculty details — is currently being compiled and will be available shortly.
                </p>
                <div className="flex items-center gap-3 my-8 w-full max-w-xs">
                  <div className="flex-1 h-px bg-amber-100" />
                  <span className="text-xs text-amber-400 uppercase tracking-widest">In the meantime</span>
                  <div className="flex-1 h-px bg-amber-100" />
                </div>
                <div className="flex flex-wrap gap-3 justify-center">
                  <Link to="/admission-form" className="inline-flex items-center gap-2 bg-[#753300] text-white text-sm font-medium px-5 py-2.5 rounded-xl hover:bg-[#5c2800] transition-colors">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="12" y1="18" x2="12" y2="12" /><line x1="9" y1="15" x2="15" y2="15" />
                    </svg>
                    Apply for Admission
                  </Link>
                  <Link to="/staff" className="inline-flex items-center gap-2 bg-amber-50 text-[#753300] border border-amber-200 text-sm font-medium px-5 py-2.5 rounded-xl hover:bg-amber-100 transition-colors">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                    Meet Our Faculty
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        )}

        {/* Contact bar */}
        <FadeIn delay="250ms">
          <div className="bg-[#753300] rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-amber-100 text-sm text-center sm:text-left">
              Need more information? Reach out to the college directly.
            </p>
            <a href="tel:07622292113" className="flex-shrink-0 inline-flex items-center gap-2 bg-[#e5be10] text-[#753300] font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-amber-300 transition-colors">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.72a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16z" />
              </svg>
              07622-292113
            </a>
          </div>
        </FadeIn>

      </div>
    </div>
  );
};

export default ProgrammePage;
