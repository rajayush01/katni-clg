import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, FileText, Shield, Users, BookOpen, BarChart2, Award, Star, Clipboard, Calendar, Globe, Landmark, Link2, TrendingUp, Eye, Target, CheckCircle, Download } from 'lucide-react';

const GOLD = '#e5be10';
const BROWN = '#753300';
const BROWN2 = '#9a4a10';
const DARK = '#3a1a00';
const CREAM = '#fdf8ee';
const MUTED = '#b08060';

// ── Menu items with icons and content ──
const menuItems = [
  {
    id: 'about',
    label: 'About Us',
    icon: <Globe size={18} />,
    content: {
      title: 'About IQAC',
      body: `The Internal Quality Assurance Cell (IQAC) of Govt. Tilak P.G. College, Katni was established in accordance with the guidelines of the National Assessment and Accreditation Council (NAAC). The primary aim of IQAC is to develop a system for conscious, consistent and catalytic improvement in the overall performance of the institution.

IQAC serves as a nodal agency for coordinating quality-related activities and ensures that the institution continuously upgrades its academic and administrative processes. The cell works towards instilling a quality culture and inculcating best practices across all departments.`,
    },
  },
  {
    id: 'vision',
    label: 'Vision, Mission and Objectives',
    icon: <Eye size={18} />,
    content: {
      title: 'Vision, Mission & Objectives',
      body: `**Vision:** To be a centre of excellence that nurtures holistic education, ethical values, and lifelong learning.

**Mission:** To ensure quality enhancement and continuous improvement in all academic, administrative and co-curricular activities of the institution.

**Objectives:**
• To develop a quality system for conscious and consistent improvement in institutional performance.
• To channelize and systematize the efforts of an institution towards academic excellence.
• To promote research culture and innovative teaching-learning practices.
• To build an organized methodology of documentation and internal communication.`,
    },
  },
  {
    id: 'composition',
    label: 'IQAC Composition',
    icon: <Users size={18} />,
    content: {
      title: 'IQAC Composition',
      body: `The IQAC is constituted as per NAAC guidelines and includes:

• **Chairperson** — Principal, Govt. Tilak P.G. College
• **IQAC Coordinator** — Senior Faculty Member
• **Senior Administrative Officer**
• **Representatives of Teachers** — Three senior faculty members
• **Representatives of Students** — Two student representatives
• **External Experts** — From industry and education sector
• **Alumni Representative** — One distinguished alumnus
• **Stakeholder Representative** — Member from local community`,
    },
  },
  {
    id: 'policy',
    label: 'IQAC Quality Policy',
    icon: <Shield size={18} />,
    content: {
      title: 'IQAC Quality Policy',
      body: `Govt. Tilak P.G. College is committed to providing quality education through continuous improvement in teaching-learning processes, research activities, and institutional governance.

**Our Quality Commitments:**
• Adherence to NAAC accreditation standards and benchmarks
• Regular internal academic and administrative audits
• Faculty development programs and pedagogical innovation
• Student-centric learning environment and grievance redressal
• Transparent and accountable institutional governance
• Promotion of research, innovation, and entrepreneurship
• Community engagement and social responsibility`,
    },
  },
  {
    id: 'meetings',
    label: 'IQAC Meetings and ATR',
    icon: <Calendar size={18} />,
    content: {
      title: 'IQAC Meetings & Action Taken Reports',
      body: `IQAC conducts regular meetings to review quality parameters and take corrective actions.

**Meeting Schedule:**
• Quarterly meetings of the full IQAC committee
• Monthly coordination meetings of IQAC core team
• Special meetings for NAAC preparation and review

**Recent Meetings:**
• 2024-25: Q1 Meeting — April 2024
• 2024-25: Q2 Meeting — July 2024
• 2024-25: Q3 Meeting — October 2024
• 2024-25: Q4 Meeting — January 2025

Action Taken Reports (ATRs) are prepared after each meeting and circulated to all stakeholders for compliance and follow-up.`,
    },
  },
  {
    id: 'aqar',
    label: 'AQAR Reports',
    icon: <BarChart2 size={18} />,
    content: {
      title: 'AQAR Reports',
      body: `Annual Quality Assurance Reports (AQAR) are submitted to NAAC every year as part of the post-accreditation quality sustenance activities.

**Available Reports:**
• AQAR 2023-24 — Submitted
• AQAR 2022-23 — Submitted
• AQAR 2021-22 — Submitted
• AQAR 2020-21 — Submitted
• AQAR 2019-20 — Submitted

These reports capture qualitative and quantitative data across all seven criteria of NAAC and reflect the college's continuous journey towards academic excellence.`,
    },
  },
  {
    id: 'compendium',
    label: 'Compendium of Institutional Policies',
    icon: <BookOpen size={18} />,
    content: {
      title: 'Compendium of Institutional Policies & Processes',
      body: `The college maintains a comprehensive compendium of institutional policies and processes to ensure transparency and consistency in governance.

**Key Policies Included:**
• Academic policies and examination regulations
• Student admission and scholarship policies
• Faculty recruitment and promotion policies
• Research and publication guidelines
• Infrastructure development and maintenance policy
• Anti-ragging and student welfare policies
• Environmental and green campus policies
• Financial management and audit procedures`,
    },
  },
  {
    id: 'audits',
    label: 'Other Audits',
    icon: <CheckCircle size={18} />,
    content: {
      title: 'Other Audits',
      body: `The institution undergoes various external and internal audit processes to maintain accountability and transparency.

**Types of Audits Conducted:**
• Financial audit by Chartered Accountants
• Green Audit for environmental sustainability
• Energy Audit for efficient resource utilization
• Gender Audit for inclusive campus practices
• ICT Audit for digital infrastructure assessment
• Library Audit for resource management
• Laboratory Safety Audit

Reports are maintained and made available for stakeholder review upon request.`,
    },
  },
  {
    id: 'admin-audit',
    label: 'Academic and Administrative Audit',
    icon: <Clipboard size={18} />,
    content: {
      title: 'Academic & Administrative Audit',
      body: `Academic and Administrative Audits are conducted annually to evaluate institutional effectiveness and ensure alignment with quality benchmarks.

**Academic Audit covers:**
• Curriculum implementation and delivery
• Faculty workload and teaching quality
• Student performance and learning outcomes
• Research output and publications
• Library and laboratory utilization

**Administrative Audit covers:**
• Staff efficiency and HR practices
• Financial management and budget utilization
• Infrastructure maintenance and development
• Record-keeping and documentation practices`,
    },
  },
  {
    id: 'idp',
    label: 'IDP Perspective Plan',
    icon: <Target size={18} />,
    content: {
      title: 'IDP Perspective Plan',
      body: `The Institutional Development Plan (IDP) outlines the strategic roadmap for the college's growth and quality enhancement over the next five years.

**Key Focus Areas:**
• Infrastructure development and modernization
• Faculty enrichment and capacity building
• Student support services enhancement
• Research and innovation ecosystem
• Industry-academia collaboration
• Digital transformation of campus operations
• Community outreach and extension activities

The IDP is reviewed annually and updated based on stakeholder feedback and institutional performance data.`,
    },
  },
  {
    id: 'strategic',
    label: 'Strategic Plans and ATRs',
    icon: <TrendingUp size={18} />,
    content: {
      title: 'Strategic Plans & ATRs',
      body: `The college formulates annual strategic plans aligned with its long-term vision and NAAC quality parameters.

**2024-25 Strategic Priorities:**
• Enhancement of digital teaching infrastructure
• Introduction of new skill-based elective courses
• Strengthening of research committee activities
• Alumni engagement and mentorship programs
• Green campus initiatives expansion
• Increased participation in national rankings

Action Taken Reports document the progress against each strategic goal, enabling accountability and course correction.`,
    },
  },
  {
    id: 'initiatives',
    label: 'IQAC Initiatives',
    icon: <Star size={18} />,
    content: {
      title: 'IQAC Initiatives',
      body: `IQAC has spearheaded several transformative initiatives to enhance the quality of education and campus life.

**Notable Initiatives:**
• **Smart Classroom Project** — Digitization of classrooms across all departments
• **Faculty Development Program** — Monthly workshops and training sessions
• **Student Feedback System** — Online mechanism for continuous feedback
• **Mentor-Mentee Program** — Each faculty mentors a group of students
• **Research Culture Drive** — Support for minor research projects
• **Industry Interface Cell** — Bridging academia and industry
• **E-Library Enhancement** — Expanded digital resource access`,
    },
  },
  {
    id: 'best-practices',
    label: 'Best Practices',
    icon: <Award size={18} />,
    content: {
      title: 'Best Practices',
      body: `The college has institutionalized several best practices that distinguish it as a leader in quality education.

**Best Practice 1: Green Campus Initiative**
Comprehensive program for environmental sustainability including solar energy, rainwater harvesting, organic gardening, and plastic-free zones.

**Best Practice 2: Holistic Student Development Program**
Integration of skill development, personality enhancement, community service, and cultural activities as part of the academic curriculum to ensure 360° student growth beyond textbooks.`,
    },
  },
  {
    id: 'distinctiveness',
    label: 'Institutional Distinctiveness',
    icon: <Landmark size={18} />,
    content: {
      title: 'Institutional Distinctiveness',
      body: `What sets Govt. Tilak P.G. College apart is its unique blend of academic rigor, cultural heritage, and community commitment.

**Our Distinctive Qualities:**
• Only college in Katni district with a 400-meter athletic track
• NAAC accredited with B++ grade — a mark of sustained quality
• Lead College status for Katni district
• Legacy of 65+ years of service to rural and semi-urban students
• Strong alumni network across government, industry, and academia
• Rich cultural and literary traditions preserved through annual festivals
• Active NSS and NCC units with outstanding community service records`,
    },
  },
  {
    id: 'certificates',
    label: 'Certificates',
    icon: <FileText size={18} />,
    content: {
      title: 'Certificates',
      body: `The institution holds various accreditation certificates and recognitions that validate its commitment to quality education.

**Accreditation & Recognitions:**
• NAAC Accreditation Certificate — B++ Grade
• Lead College Certificate — Katni District
• Affiliation Certificate — Rani Durgawati University, Jabalpur
• 12B and 2(f) Status — University Grants Commission
• State Government Recognition Certificate

All certificates are available for verification and are part of the official institutional records maintained by the IQAC.`,
    },
  },
  {
    id: 'feedback',
    label: 'Feedback Analysis and Action Taken Report',
    icon: <BarChart2 size={18} />,
    content: {
      title: 'Feedback Analysis & Action Taken Report',
      body: `The college collects and analyzes feedback from multiple stakeholders to drive continuous improvement.

**Feedback Sources:**
• Student feedback on teaching quality (semester-wise)
• Alumni feedback on curriculum relevance
• Parent feedback on overall college performance
• Employer feedback on graduate competencies
• Faculty feedback on institutional support

**Analysis Process:**
Feedback is compiled, analyzed statistically, and presented to the IQAC. Action Taken Reports document improvements made based on feedback, closing the loop on quality enhancement.`,
    },
  },
  {
    id: 'code-of-conduct',
    label: 'Institutional Code of Conduct',
    icon: <Shield size={18} />,
    content: {
      title: 'Institutional Code of Conduct',
      body: `The Code of Conduct establishes the ethical framework governing all members of the college community.

**For Students:**
• Maintain academic integrity and honesty
• Respect all faculty, staff, and fellow students
• Adhere to dress code and campus discipline
• Active participation in academic activities

**For Faculty:**
• Punctuality and dedication to teaching
• Fair evaluation and continuous feedback
• Research and professional development
• Mentoring and student welfare

**For Staff:**
• Efficient and courteous service delivery
• Confidentiality and data protection
• Adherence to institutional policies`,
    },
  },
  {
    id: 'academic-calendar',
    label: 'Academic Calendar',
    icon: <Calendar size={18} />,
    content: {
      title: 'Academic Calendar 2024-25',
      body: `The Academic Calendar maps all key academic events, examinations, and activities for the session 2024-25.

**Semester I (July – November 2024):**
• Admission: June – July 2024
• Classes begin: July 15, 2024
• Mid-term Examinations: September 2024
• Cultural Festival: October 2024
• End-semester Examinations: November 2024

**Semester II (January – May 2025):**
• Classes begin: January 6, 2025
• Mid-term Examinations: March 2025
• Annual Sports Meet: February 2025
• Annual Day Celebrations: March 2025
• End-semester Examinations: April – May 2025`,
    },
  },
  {
    id: 'nirf',
    label: 'NIRF',
    icon: <BarChart2 size={18} />,
    content: {
      title: 'NIRF — National Institutional Ranking Framework',
      body: `The college participates in the National Institutional Ranking Framework (NIRF) annually, submitting comprehensive data across five parameters.

**NIRF Parameters:**
• Teaching, Learning & Resources (TLR)
• Research and Professional Practice (RP)
• Graduation Outcomes (GO)
• Outreach and Inclusivity (OI)
• Peer Perception (PP)

The college's NIRF data submissions are transparent, accurate, and reflect the true academic and administrative performance. Annual reports are available for public review on the NIRF portal and the institutional website.`,
    },
  },
  {
    id: 'aishe',
    label: 'AISHE',
    icon: <Globe size={18} />,
    content: {
      title: 'AISHE — All India Survey on Higher Education',
      body: `The college participates in the All India Survey on Higher Education (AISHE), an annual data collection exercise by the Ministry of Education, Government of India.

**AISHE Data Covers:**
• Student enrollment statistics (program-wise, gender-wise)
• Faculty strength and qualifications
• Infrastructure details
• Financial data including fees and expenditures
• Examination results and pass percentages
• Research output and publications

AISHE data is submitted annually through the official AISHE portal and contributes to national educational policy planning.`,
    },
  },
  {
    id: 'nep',
    label: 'NEP',
    icon: <BookOpen size={18} />,
    content: {
      title: 'NEP — National Education Policy 2020',
      body: `Govt. Tilak P.G. College is actively implementing the National Education Policy (NEP) 2020, embracing its transformative vision for Indian higher education.

**NEP Implementation Highlights:**
• Introduction of multidisciplinary courses and electives
• Choice Based Credit System (CBCS) adoption
• Internship and experiential learning integration
• Focus on Indian languages and knowledge systems
• Academic Bank of Credits (ABC) registration support
• Outcome-Based Education (OBE) framework adoption
• Enhanced focus on vocational and skill education

The college views NEP 2020 as a historic opportunity to reimagine education for the 21st century.`,
    },
  },
];

// ── Content renderer ──
function renderBody(text: string) {
  return text.split('\n').map((line, i) => {
    if (!line.trim()) return <div key={i} style={{ height: 8 }} />;
    if (line.startsWith('**') && line.endsWith('**')) {
      return (
        <p key={i} style={{ fontWeight: 700, color: DARK, fontSize: 15, margin: '16px 0 6px', fontFamily: 'Georgia, serif' }}>
          {line.replace(/\*\*/g, '')}
        </p>
      );
    }
    if (line.includes('**')) {
      const parts = line.split(/\*\*(.*?)\*\*/g);
      return (
        <p key={i} style={{ fontSize: 14, color: '#4a2000', lineHeight: 1.8, margin: '4px 0', fontFamily: 'sans-serif' }}>
          {parts.map((p, j) => j % 2 === 1 ? <strong key={j} style={{ color: BROWN, fontWeight: 700 }}>{p}</strong> : p)}
        </p>
      );
    }
    if (line.startsWith('•')) {
      return (
        <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', margin: '5px 0' }}>
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: GOLD, flexShrink: 0, marginTop: 7 }} />
          <p style={{ fontSize: 14, color: '#4a2000', lineHeight: 1.75, margin: 0, fontFamily: 'sans-serif' }}>
            {line.slice(1).trim()}
          </p>
        </div>
      );
    }
    return (
      <p key={i} style={{ fontSize: 14, color: '#4a2000', lineHeight: 1.85, margin: '4px 0', fontFamily: 'sans-serif' }}>
        {line}
      </p>
    );
  });
}

export default function IQACPage() {
  const [activeId, setActiveId] = useState('about');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const active = menuItems.find(m => m.id === activeId)!;

  return (
    <div style={{ background: '#ffffff', minHeight: '100vh', fontFamily: 'Georgia, serif' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&display=swap');

        /* ── HERO ── */
        .iqac-hero {
          position: relative;
          background: linear-gradient(135deg, #3a1a00 0%, #753300 55%, #9a4a10 100%);
          padding: 56px 24px 48px;
          text-align: center;
          overflow: hidden;
        }
        .iqac-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e5be10' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
        .iqac-hero-orb1 { position:absolute; width:300px; height:300px; top:-100px; right:-80px; border-radius:50%; background:rgba(229,190,16,0.1); pointer-events:none; }
        .iqac-hero-orb2 { position:absolute; width:200px; height:200px; bottom:-60px; left:-60px; border-radius:50%; background:rgba(229,190,16,0.07); pointer-events:none; }

        /* ── LAYOUT ── */
        .iqac-layout {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 0;
          max-width: 1200px;
          margin: 0 auto;
          padding: 40px 24px 80px;
          align-items: start;
        }
        @media (max-width: 900px) {
          .iqac-layout {
            grid-template-columns: 1fr;
            padding: 24px 16px 60px;
          }
        }

        /* ── SIDEBAR ── */
        .iqac-sidebar {
          position: sticky;
          top: 24px;
          background: #fff;
          border-radius: 20px;
          overflow: hidden;
          border: 1.5px solid rgba(229,190,16,0.3);
          box-shadow: 0 8px 32px rgba(117,51,0,0.1);
          margin-right: 28px;
        }
        @media (max-width: 900px) {
          .iqac-sidebar {
            position: static;
            margin-right: 0;
            margin-bottom: 24px;
          }
        }

        /* Mobile toggle */
        .iqac-sidebar-toggle {
          display: none;
          width: 100%;
          padding: 16px 20px;
          background: linear-gradient(135deg, #753300, #9a4a10);
          border: none;
          cursor: pointer;
          align-items: center;
          justify-content: space-between;
          color: #e5be10;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.04em;
          font-family: Georgia, serif;
        }
        @media (max-width: 900px) {
          .iqac-sidebar-toggle { display: flex; }
          .iqac-sidebar-nav { display: none; max-height: 0; overflow: hidden; transition: max-height 0.4s ease; }
          .iqac-sidebar-nav.open { display: block; max-height: 800px; overflow-y: auto; }
        }

        .iqac-sidebar-header {
          background: linear-gradient(135deg, #753300 0%, #9a4a10 60%, #b36000 100%);
          padding: 20px 20px 16px;
          position: relative;
          overflow: hidden;
        }
        @media (max-width: 900px) { .iqac-sidebar-header { display: none; } }
        .iqac-sidebar-header::after {
          content: '';
          position: absolute;
          top: -20px; right: -20px;
          width: 80px; height: 80px;
          background: rgba(229,190,16,0.12);
          border-radius: 50%;
        }

        .iqac-nav-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 13px 20px;
          cursor: pointer;
          border: none;
          background: none;
          width: 100%;
          text-align: left;
          font-family: sans-serif;
          font-size: 13px;
          color: #5a3010;
          font-weight: 500;
          border-bottom: 1px solid rgba(229,190,16,0.12);
          transition: all 0.2s ease;
          position: relative;
          line-height: 1.35;
        }
        .iqac-nav-item:last-child { border-bottom: none; }
        .iqac-nav-item:hover {
          background: rgba(229,190,16,0.1);
          color: #753300;
          padding-left: 26px;
        }
        .iqac-nav-item.active {
          background: linear-gradient(90deg, rgba(117,51,0,0.08), rgba(229,190,16,0.12));
          color: #753300;
          font-weight: 700;
          border-left: 3px solid #e5be10;
          padding-left: 17px;
        }
        .iqac-nav-item .nav-icon {
          flex-shrink: 0;
          color: #b08060;
          transition: color 0.2s;
        }
        .iqac-nav-item.active .nav-icon,
        .iqac-nav-item:hover .nav-icon {
          color: #753300;
        }
        .iqac-nav-chevron {
          margin-left: auto;
          flex-shrink: 0;
          opacity: 0;
          transition: opacity 0.2s, transform 0.2s;
          color: #e5be10;
        }
        .iqac-nav-item.active .iqac-nav-chevron,
        .iqac-nav-item:hover .iqac-nav-chevron {
          opacity: 1;
        }
        .iqac-nav-item.active .iqac-nav-chevron {
          transform: translateX(2px);
        }

        /* ── CONTENT PANEL ── */
        .iqac-content {
          background: #fff;
          border-radius: 20px;
          border: 1.5px solid rgba(229,190,16,0.25);
          box-shadow: 0 8px 32px rgba(117,51,0,0.08);
          overflow: hidden;
          min-height: 480px;
        }
        .iqac-content-header {
          background: linear-gradient(135deg, #fff8ee 0%, #fdf3d8 100%);
          padding: 32px 36px 28px;
          border-bottom: 1.5px solid rgba(229,190,16,0.2);
          position: relative;
          overflow: hidden;
        }
        @media (max-width: 600px) {
          .iqac-content-header { padding: 24px 20px 20px; }
        }
        .iqac-content-header::after {
          content: '';
          position: absolute;
          top: -40px; right: -40px;
          width: 160px; height: 160px;
          background: rgba(229,190,16,0.08);
          border-radius: 50%;
          pointer-events: none;
        }
        .iqac-content-body {
          padding: 32px 36px 40px;
        }
        @media (max-width: 600px) {
          .iqac-content-body { padding: 20px 20px 32px; }
        }

        /* Breadcrumb */
        .iqac-breadcrumb {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          color: #b08060;
          font-family: sans-serif;
          margin-bottom: 12px;
          flex-wrap: wrap;
        }

        /* Download button */
        .iqac-download-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 28px;
          padding: 10px 20px;
          background: linear-gradient(90deg, #753300, #9a4a10);
          color: #e5be10;
          border: none;
          border-radius: 10px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.06em;
          cursor: pointer;
          transition: opacity 0.2s, transform 0.15s;
          font-family: sans-serif;
        }
        .iqac-download-btn:hover { opacity: 0.88; transform: translateY(-1px); }
      `}</style>

      {/* ── HERO BANNER ── */}
      <div className="iqac-hero">
        <div className="iqac-hero-orb1" />
        <div className="iqac-hero-orb2" />
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ position: 'relative', zIndex: 1 }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <div style={{ height: 1, width: 40, background: 'linear-gradient(90deg,transparent,rgba(229,190,16,0.6))' }} />
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(229,190,16,0.7)', fontFamily: 'sans-serif' }}>
              Govt. Tilak P.G. College, Katni
            </span>
            <div style={{ height: 1, width: 40, background: 'linear-gradient(90deg,rgba(229,190,16,0.6),transparent)' }} />
          </div>
          <h1 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(32px,5vw,52px)',
            fontWeight: 800,
            color: GOLD,
            margin: '0 0 10px',
            lineHeight: 1.1,
          }}>
            IQAC
          </h1>
          <p style={{ fontSize: 'clamp(13px,2vw,16px)', color: 'rgba(253,248,238,0.7)', fontFamily: 'sans-serif', margin: 0 }}>
            Internal Quality Assurance Cell
          </p>
          {/* Decorative gold bar */}
          <div style={{ width: 60, height: 3, background: `linear-gradient(90deg,transparent,${GOLD},transparent)`, margin: '18px auto 0', borderRadius: 2 }} />
        </motion.div>
      </div>

      {/* ── MAIN LAYOUT ── */}
      <div className="iqac-layout">

        {/* ── SIDEBAR ── */}
        <motion.aside
          className="iqac-sidebar"
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          {/* Desktop header */}
          <div className="iqac-sidebar-header">
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                <div style={{ width: 28, height: 28, borderRadius: 8, background: 'linear-gradient(135deg,#e5be10,#c9a800)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: 13, color: DARK }}>✦</span>
                </div>
                <span style={{ fontSize: 14, fontWeight: 700, color: GOLD, fontFamily: 'Georgia,serif', letterSpacing: '0.04em' }}>Menu</span>
              </div>
              <p style={{ fontSize: 10, color: 'rgba(253,248,238,0.5)', fontFamily: 'sans-serif', margin: 0, letterSpacing: '0.06em' }}>
                IQAC Navigation
              </p>
            </div>
          </div>

          {/* Mobile toggle */}
          <button className="iqac-sidebar-toggle" onClick={() => setMobileMenuOpen(o => !o)}>
            <span>✦ IQAC Menu</span>
            <ChevronRight size={18} style={{ transform: mobileMenuOpen ? 'rotate(90deg)' : 'none', transition: 'transform 0.3s' }} />
          </button>

          {/* Nav items */}
          <nav className={`iqac-sidebar-nav ${mobileMenuOpen ? 'open' : ''}`}>
            {menuItems.map((item, i) => (
              <motion.button
                key={item.id}
                className={`iqac-nav-item ${activeId === item.id ? 'active' : ''}`}
                onClick={() => { setActiveId(item.id); setMobileMenuOpen(false); }}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
              >
                <span className="nav-icon">{item.icon}</span>
                <span style={{ flex: 1 }}>{item.label}</span>
                <ChevronRight size={13} className="iqac-nav-chevron" />
              </motion.button>
            ))}
          </nav>
        </motion.aside>

        {/* ── CONTENT PANEL ── */}
        <motion.div
          className="iqac-content"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeId}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.32, ease: [0.25, 1, 0.5, 1] }}
            >
              {/* Content header */}
              <div className="iqac-content-header">
                <div className="iqac-breadcrumb">
                  <span>IQAC</span>
                  <ChevronRight size={10} />
                  <span style={{ color: BROWN, fontWeight: 600 }}>{active.label}</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: 14,
                    background: `linear-gradient(135deg,${BROWN},${BROWN2})`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: GOLD, flexShrink: 0,
                    boxShadow: '0 4px 14px rgba(117,51,0,0.25)',
                  }}>
                    {active.icon}
                  </div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                      <div style={{ width: 28, height: 2, background: `linear-gradient(90deg,${BROWN},${GOLD})`, borderRadius: 1 }} />
                      <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: MUTED, fontFamily: 'sans-serif' }}>IQAC</span>
                    </div>
                    <h2 style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontSize: 'clamp(20px,3vw,30px)',
                      fontWeight: 800,
                      color: DARK,
                      margin: 0,
                      lineHeight: 1.2,
                    }}>
                      {active.content.title}
                    </h2>
                  </div>
                </div>
              </div>

              {/* Content body */}
              <div className="iqac-content-body">
                <div style={{
                  background: 'linear-gradient(135deg,rgba(229,190,16,0.06),rgba(117,51,0,0.03))',
                  borderRadius: 14,
                  padding: '20px 22px',
                  border: '1px solid rgba(229,190,16,0.18)',
                  marginBottom: 24,
                }}>
                  {renderBody(active.content.body)}
                </div>

                {/* Download / action button */}
                <button className="iqac-download-btn">
                  <Download size={14} />
                  Download Document
                </button>

                {/* Decorative bottom element */}
                <div style={{ marginTop: 32, display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg,rgba(229,190,16,0.3),transparent)' }} />
                  <span style={{ fontSize: 10, color: MUTED, fontFamily: 'sans-serif', letterSpacing: '0.08em' }}>IQAC · Govt. Tilak P.G. College</span>
                  <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg,transparent,rgba(229,190,16,0.3))' }} />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}