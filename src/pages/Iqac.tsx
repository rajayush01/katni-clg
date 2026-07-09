import React, { useState } from 'react';

interface MenuItem {
  id: string;
  label: string;
  content: {
    title: string;
    description?: string;
    links?: { label: string; href: string }[];
  };
}

const menuItems: MenuItem[] = [
  {
    id: 'about',
    label: 'About Us',
    content: {
      title: 'About Us',
      description:
        'The Internal Quality Assurance Cell (IQAC) of Govt. Tilak P.G. College, Katni was established to develop a system for conscious, consistent and catalytic improvement in the overall performance of the institution. It works towards channelizing the efforts and measures of an institution towards academic excellence.',
    },
  },
  {
    id: 'vision',
    label: 'Vision, Mission and Objectives',
    content: {
      title: 'Vision, Mission and Objectives',
      description:
        'Vision: To be a centre of excellence in higher education committed to holistic development of students. Mission: To impart quality education and foster research, innovation and social responsibility among students and faculty.',
    },
  },
  {
    id: 'composition',
    label: 'IQAC Composition',
    content: {
      title: 'IQAC Composition',
      links: [
        { label: 'Composition IQAC 2020–22', href: '/iqac/composition-2020-22.pdf' },
        { label: 'Composition of IQAC 2022–23', href: '/iqac/composition-2022-23.pdf' },
        { label: 'Composition of IQAC 2023–24', href: '/iqac/composition-2023-24.pdf' },
      ],
    },
  },
  {
    id: 'quality-policy',
    label: 'IQAC Quality Policy',
    content: {
      title: 'IQAC Quality Policy',
      description:
        'The college is committed to providing quality education through continuous improvement in teaching-learning processes, research activities, and administrative functions, ensuring overall development of students and society.',
    },
  },
  {
    id: 'meetings',
    label: 'IQAC Meetings and ATR',
    content: {
      title: 'IQAC Meetings and ATR',
      links: [
        { label: 'ATR 2022–23', href: '/iqac/atr-2022-23.pdf' },
        { label: 'ATR 2023–24', href: '/iqac/atr-2023-24.pdf' },
      ],
    },
  },
  {
    id: 'aqar',
    label: 'AQAR Reports',
    content: {
      title: 'AQAR Reports',
      links: [
        { label: 'AQAR 2018–19', href: '/iqac/aqar-2018-19.pdf' },
        { label: 'AQAR 2019–20', href: '/iqac/aqar-2019-20.pdf' },
        { label: 'AQAR 2020–21', href: '/iqac/aqar-2020-21.pdf' },
        { label: 'AQAR 2022–23', href: '/iqac/aqar-2022-23.pdf' },
      ],
    },
  },
  {
    id: 'compendium',
    label: 'Compendium of Institutional Policies and Processes',
    content: {
      title: 'Compendium of Institutional Policies and Processes',
      links: [
        { label: 'Anti-Ragging and Gender-equity Policy', href: '/iqac/anti-ragging-policy.pdf' },
        { label: 'Clean and Green Campus Policy', href: '/iqac/green-campus-policy.pdf' },
        { label: 'Research Policy', href: '/iqac/research-policy.pdf' },
      ],
    },
  },
  {
    id: 'other-audits',
    label: 'Other Audits',
    content: {
      title: 'Other Audits',
      links: [
        { label: 'Geen Audit Report 2023–24', href: '/iqac/geen-audit-2023-24.pdf' },
      ],
    },
  },
  {
    id: 'admin-audit',
    label: 'Academic and Administrative Audit',
    content: {
      title: 'Academic and Administrative Audit',
      description:
        'The Academic and Administrative Audit is conducted annually to ensure transparency and accountability in academic delivery and administrative functioning of the institution.',
    },
  },
  {
    id: 'idp',
    label: 'IDP Perspective Plan',
    content: {
      title: 'IDP Perspective Plan',
      description:
        'The Institutional Development Plan outlines the long-term perspective and strategic goals of the college for academic, infrastructural, and societal growth over the coming years.',
    },
  },
  {
    id: 'strategic',
    label: 'Strategic Plans and ATRs',
    content: {
      title: 'Strategic Plans and ATRs',
      description:
        'Strategic plans are formulated annually by the IQAC in consultation with all stakeholders. Action Taken Reports (ATRs) are prepared to track progress against these plans.',
    },
  },
  {
    id: 'initiatives',
    label: 'IQAC Initiatives',
    content: {
      title: 'IQAC Initiatives',
      description:
        'IQAC has taken several quality enhancement initiatives including faculty development programmes, student feedback systems, green campus drives, and digital learning infrastructure upgrades.',
    },
  },
  {
    id: 'best-practices',
    label: 'Best Practices',
    content: {
      title: 'Best Practices',
      description:
        'The college follows several best practices including free tuition for underprivileged students, tree plantation drives, blood donation camps, digital literacy programmes, and community outreach activities.',
    },
  },
  {
    id: 'distinctiveness',
    label: 'Institutional Distinctiveness',
    content: {
      title: 'Institutional Distinctiveness',
      description:
        'Govt. Tilak P.G. College is distinguished by its commitment to inclusive education, strong community engagement, research culture, and consistent academic performance in the Katni region.',
    },
  },
  {
    id: 'certificates',
    label: 'Certificates',
    content: {
      title: 'Certificates',
      description:
        'Certificates of recognition, accreditation, and participation awarded to the institution and its members are documented here for transparency and institutional record.',
    },
  },
  {
    id: 'feedback',
    label: 'Feedback Analysis and Action Taken Report',
    content: {
      title: 'Feedback Analysis and Action Taken Report',
      description:
        'Feedback is collected from students, parents, alumni, and employers annually. The analysis and resulting action taken reports are reviewed by IQAC to improve institutional quality.',
    },
  },
  {
    id: 'code-of-conduct',
    label: 'Institutional Code of Conduct',
    content: {
      title: 'Institutional Code of Conduct',
      description:
        'The institutional code of conduct defines the expected standards of behaviour for students, faculty, and staff to maintain a respectful, safe, and productive academic environment.',
    },
  },
  {
    id: 'academic-calendar',
    label: 'Academic Calendar',
    content: {
      title: 'Academic Calendar',
      links: [
        { label: 'Academic Calendar 2022–23', href: '/iqac/academic-calendar-2022-23.pdf' },
        { label: 'Academic Calendar 2023–24', href: '/iqac/academic-calendar-2023-24.pdf' },
      ],
    },
  },
  {
    id: 'nirf',
    label: 'NIRF',
    content: {
      title: 'NIRF',
      description:
        'National Institutional Ranking Framework (NIRF) data submissions and ranking reports are maintained here for institutional transparency and benchmarking.',
    },
  },
  {
    id: 'aishe',
    label: 'AISHE',
    content: {
      title: 'AISHE',
      description:
        'All India Survey on Higher Education (AISHE) data submitted by the institution annually, reflecting student enrolment, faculty strength, and infrastructure details.',
    },
  },
  {
    id: 'nep',
    label: 'NEP',
    content: {
      title: 'NEP',
      description:
        'Documents and implementation reports related to the National Education Policy 2020 adopted by the institution, including curriculum changes, multidisciplinary approach, and outcome-based education.',
    },
  },
];

// Theme tokens
const T = {
  BROWN:  '#753300',
  BROWN2: '#9a4a10',
  GOLD:   '#e5be10',
  CREAM:  '#fdf8ee',
  DARK:   '#3a1a00',
  TEXT:   '#4a2000',
  MUTED:  '#b08060',
};

const FileIcon = () => (
  <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
  </svg>
);

const DownloadIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="7 10 12 15 17 10"/>
    <line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
);

const Iqac = () => {
  const [activeId, setActiveId]           = useState('about');
  const [isMobileMenuOpen, setMobileMenu] = useState(false);

  const active = menuItems.find((m) => m.id === activeId)!;

  return (
    <div style={{ background: 'linear-gradient(160deg, #fff8ee 0%, #fdf3d8 50%, #fff 100%)', minHeight: '100vh' }}>

      {/* ── Hero ── */}
      <div style={{ background: `linear-gradient(135deg, ${T.BROWN} 0%, ${T.BROWN2} 60%, #b36000 100%)`, position: 'relative', overflow: 'hidden' }}
        className="py-16 text-center">
        {/* dot pattern */}
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: `radial-gradient(circle, ${T.GOLD} 1px, transparent 1px)`, backgroundSize: '28px 28px' }} />
        <p className="relative text-xs uppercase tracking-[0.2em] mb-3 font-medium" style={{ color: T.GOLD }}>
          Govt. Tilak P.G. College, Katni
        </p>
        <h1 className="relative text-4xl font-semibold"
          style={{ background: `linear-gradient(90deg, #fff 0%, ${T.GOLD} 100%)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          IQAC
        </h1>
        {/* gold underline */}
        <div className="mx-auto mt-4 h-0.5 w-20 rounded-full"
          style={{ background: `linear-gradient(90deg, ${T.BROWN} 0%, ${T.GOLD} 100%)` }} />
      </div>

      {/* ── Mobile menu toggle ── */}
      <div className="lg:hidden border-b px-4 py-3 flex items-center justify-between"
        style={{ background: T.CREAM, borderColor: `rgba(229,190,16,0.3)` }}>
        <span className="text-sm font-medium" style={{ color: T.TEXT }}>{active.label}</span>
        <button
          onClick={() => setMobileMenu(!isMobileMenuOpen)}
          className="flex items-center gap-2 text-sm font-medium px-3 py-1.5 rounded-lg border"
          style={{ color: T.BROWN, borderColor: T.BROWN, background: 'transparent' }}
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
          Menu
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-6 items-start">

          {/* ── Sidebar ── */}
          <aside className={`lg:block lg:w-64 flex-shrink-0 ${isMobileMenuOpen ? 'block w-full' : 'hidden'} lg:sticky lg:top-6`}>
            <div className="rounded-2xl overflow-hidden border"
              style={{ background: T.CREAM, borderColor: `rgba(229,190,16,0.35)` }}>

              {/* sidebar header */}
              <div className="px-4 py-3 border-b" style={{ borderColor: `rgba(229,190,16,0.3)`, background: `rgba(117,51,0,0.06)` }}>
                <p className="text-sm font-medium" style={{ color: T.DARK }}>Menu</p>
                <div className="mt-2 h-0.5 w-10 rounded-full"
                  style={{ background: `linear-gradient(90deg, ${T.BROWN}, ${T.GOLD})` }} />
              </div>

              {/* menu items */}
              <nav className="py-1">
                {menuItems.map((item) => {
                  const isActive = activeId === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => { setActiveId(item.id); setMobileMenu(false); }}
                      className="w-full text-left flex items-start gap-2.5 px-4 py-3 text-sm border-b transition-all"
                      style={{
                        borderColor: `rgba(229,190,16,0.15)`,
                        background: isActive
                          ? `linear-gradient(135deg, rgba(117,51,0,0.1) 0%, rgba(229,190,16,0.12) 100%)`
                          : 'transparent',
                        color: isActive ? T.BROWN : T.MUTED,
                        fontWeight: isActive ? 500 : 400,
                      }}
                    >
                      <span className="mt-0.5 flex-shrink-0 text-base leading-none"
                        style={{ color: isActive ? T.GOLD : `rgba(176,128,96,0.4)` }}>
                        →
                      </span>
                      <span className="leading-snug">{item.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* ── Content ── */}
          <main className="flex-1 min-w-0">
            <div className="rounded-2xl overflow-hidden border"
              style={{ background: T.CREAM, borderColor: `rgba(229,190,16,0.35)` }}>

              {/* content header */}
              <div className="px-8 py-6 border-b" style={{ borderColor: `rgba(229,190,16,0.25)`, background: `rgba(117,51,0,0.04)` }}>
                <div className="flex items-center gap-3 mb-1">
                  {/* accent bar */}
                  <div className="w-1 h-7 rounded-full"
                    style={{ background: `linear-gradient(180deg, ${T.BROWN} 0%, ${T.GOLD} 100%)` }} />
                  <h2 className="text-xl font-medium" style={{ color: T.DARK }}>
                    {active.content.title}
                  </h2>
                </div>
                {/* gold divider */}
                <div className="mt-3 h-px w-full"
                  style={{ background: `linear-gradient(90deg, ${T.BROWN}, ${T.GOLD}, transparent)` }} />
                <p className="text-xs mt-2 ml-4 uppercase tracking-wider" style={{ color: T.MUTED }}>
                  IQAC · Govt. Tilak P.G. College
                </p>
              </div>

              {/* content body */}
              <div className="px-8 py-7">

                {active.content.description && (
                  <p className="text-sm leading-relaxed" style={{ color: T.TEXT }}>
                    {active.content.description}
                  </p>
                )}

                {active.content.links && active.content.links.length > 0 && (
                  <div className="space-y-3 mt-2">
                    {active.content.links.map((link, i) => (
                      
                     <a   key={i}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between gap-4 p-4 rounded-xl border transition-all group"
                        style={{
                          borderColor: `rgba(229,190,16,0.3)`,
                          background: 'rgba(255,255,255,0.6)',
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.borderColor = T.GOLD;
                          (e.currentTarget as HTMLElement).style.background = `rgba(229,190,16,0.08)`;
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.borderColor = `rgba(229,190,16,0.3)`;
                          (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.6)';
                        }}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-all"
                            style={{ background: `linear-gradient(135deg, ${T.BROWN} 0%, ${T.BROWN2} 100%)`, color: '#fff' }}>
                            <FileIcon />
                          </div>
                          <span className="text-sm font-medium transition-colors" style={{ color: T.DARK }}>
                            {link.label}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs flex-shrink-0 transition-colors"
                          style={{ color: T.MUTED }}>
                          <DownloadIcon />
                          <span>Download</span>
                        </div>
                      </a>
                    ))}
                  </div>
                )}

                {/* Empty state */}
                {!active.content.description && (!active.content.links || active.content.links.length === 0) && (
                  <div className="text-center py-14">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
                      style={{ background: `rgba(117,51,0,0.08)`, color: T.MUTED }}>
                      <FileIcon />
                    </div>
                    <p className="text-sm" style={{ color: T.MUTED }}>Content will be available soon.</p>
                  </div>
                )}
              </div>
            </div>
          </main>

        </div>
      </div>
    </div>
  );
};

export default Iqac;