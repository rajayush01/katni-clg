import React from "react";
import nss from '../assets/nsspic.png'
const Nss = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fff8ee] via-[#fdf3d8] to-white">

      {/* HERO */}
      <div className="py-20 text-center bg-gradient-to-r from-[#753300] via-[#b36000] to-orange-800">
        <h1 className="text-4xl md:text-5xl font-bold text-white">NSS</h1>
        <div className="mt-4 mx-auto w-28 h-1 bg-gradient-to-r from-[#753300] to-[#e5be10] rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* IMAGE */}
        <div className="overflow-hidden rounded-2xl shadow-lg border border-[rgba(229,190,16,0.25)]">
          <img
            src={nss}
            alt="NSS"
            className="w-full h-[280px] md:h-[420px] object-cover hover:scale-105 transition duration-500"
          />
        </div>

        {/* INTRO */}
        <div className="mt-10 bg-[#fdf8ee] border border-[rgba(229,190,16,0.25)] rounded-2xl p-8 shadow-md">

          <h2 className="text-3xl font-bold text-[#753300] mb-4">
            NATIONAL SERVICE SCHEME (NSS)
          </h2>

          <p className="text-[#4a2000] leading-relaxed mb-4">
            Govt. Tilak P.G. College, Katni has three NSS units coordinated under
            Rani Durgawati Vishwavidyalaya. Students interested in social service
            and community development can actively participate.
          </p>

          <p className="text-[#4a2000] leading-relaxed">
            NSS provides opportunities for students to engage with society through
            camps, literacy programs, awareness drives, and social initiatives,
            helping them grow as responsible citizens.
          </p>

          {/* Motto Highlight */}
          <div className="mt-6 bg-gradient-to-r from-[#753300] to-[#9a4a10] text-white rounded-xl px-6 py-4 text-center">
            <p className="font-semibold tracking-wide">
              Motto: “NOT ME, BUT YOU”
            </p>
          </div>

        </div>

        {/* SERVICES */}
        <div className="mt-10">

          <h3 className="text-2xl font-semibold text-[#3a1a00] mb-4">
            Services
          </h3>

          <div className="grid md:grid-cols-2 gap-3">

            {[
              "Free tuition classes for school dropouts",
              "Student-led literacy initiatives",
              "Tree plantation drives",
              "Village and slum development work",
              "Blood donation camps",
              "Non-formal education programs",
              "Health & family welfare awareness",
              "AIDS awareness campaigns",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#fdf8ee] border border-[rgba(229,190,16,0.25)] rounded-xl p-4 text-[#4a2000] shadow-sm hover:shadow-md transition"
              >
                • {item}
              </div>
            ))}

          </div>

        </div>

        {/* COMPOSITION + JOIN */}
        <div className="mt-10 grid md:grid-cols-2 gap-8">

          <div className="bg-[#fdf8ee] border border-[rgba(229,190,16,0.25)] rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-[#3a1a00] mb-3">
              Composition of NSS Unit
            </h3>
            <p className="text-[#4a2000] text-sm">
              Three NSS units, each with 100 volunteers, led by Programme Officers.
            </p>
          </div>

          <div className="bg-[#fdf8ee] border border-[rgba(229,190,16,0.25)] rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-[#3a1a00] mb-3">
              How to Join NSS
            </h3>
            <p className="text-[#4a2000] text-sm">
              Submit a consent form signed by parents to the NSS Programme Officer.
            </p>
          </div>

        </div>

        {/* OFFICERS */}
        <div className="mt-10 bg-gradient-to-br from-[#753300] to-[#9a4a10] text-white rounded-2xl p-8 shadow-lg">

          <h3 className="text-2xl font-semibold mb-6 text-center">
            NSS Programme Officers
          </h3>

          <div className="space-y-3 text-sm md:text-base">
            <p>• Dr. Madhuri Garg (Women Wing) – +91-9424956438</p>
            <p>• Dr. Ajay Kumar Thakur (Combined Wing) – +91-6207120913</p>
            <p>• Mr. Atul Kumar (Men Wing) – +91-8543820500</p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Nss;


// // import React from 'react';
// // import logo from '../assets/nsspic.png'
// // const services = [
// //   'Free of cost tuition classes to school dropouts on Sundays at the college campus, conducted by faculty as a selfless gesture of service.',
// //   'About 100 students have adopted two student dropouts each from their neighborhood, undertaking the job of teaching. 30 more students have adopted three adults each to teach them to read and write.',
// //   'Tree plantation drives are carried out regularly.',
// //   'Constructive work in adopted villages and slums.',
// //   'Blood donation camps.',
// //   'Non-formal education initiatives.',
// //   'Health, nutrition, and family welfare awareness drives.',
// //   'AIDS awareness campaigns.',
// // ];

// // const officers = [
// //   { name: 'Dr. Madhuri Garg', role: 'Programme Officer (Women Wings)', phone: '+91-9424956438' },
// //   { name: 'Dr. Ajay Kumar Thakur', role: 'Programme Officer (Women & Men Combined Wings)', phone: '+91-6207120913' },
// //   { name: 'Mr. Atul Kumar', role: 'Programme Officer (Men Wings)', phone: '+91-8543820500' },
// // ];

// // const Nss = () => {
// //   return (
// //     <div className="min-h-screen bg-gray-50 py-16 sm:py-44">

// //       {/* Hero with image */}
// //       <div className="relative h-72 md:h-96  overflow-hidden">
// //         <img
// //           src={logo}
// //           alt="NSS"
// //           className="w-full h-full object-contain object-center"
// //           onError={(e) => { (e.target as HTMLImageElement).src = ''; }}
// //         />
// //         {/* Dark overlay */}
// //         <div className="absolute inset-0 " />
// //         {/* Content on overlay */}
// //         <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
// //           <span className="text-blue-200 text-xs uppercase tracking-[0.2em] mb-3 font-medium">
// //             Govt. Tilak P.G. College, Katni (M.P.)
// //           </span>
// //           <h1 className="text-3xl md:text-4xl font-semibold text-white mb-3">
// //             National Service Scheme
// //           </h1>
// //           <div className="flex items-center gap-2">
// //             <div className="w-8 h-px bg-blue-300" />
// //             <span className="text-blue-200 text-sm italic">"Not Me, But You"</span>
// //             <div className="w-8 h-px bg-blue-300" />
// //           </div>
// //         </div>
// //       </div>

// //       <div className="max-w-5xl mx-auto px-6 py-14 space-y-10">

// //         {/* About */}
// //         <div className="bg-white border border-gray-200 rounded-2xl p-8">
// //           <div className="flex items-center gap-3 mb-5">
// //             <div className="w-1 h-6 bg-[#e5be10] rounded-full" />
// //             <h2 className="text-base font-medium text-gray-900">About NSS</h2>
// //           </div>
// //           <p className="text-sm text-gray-600 leading-relaxed">
// //             Govt. Tilak P.G. College, Katni (M.P.) has to its credit three units of National Service
// //             Scheme. Three regular N.S.S officers coordinate the activity under the direction and guidance
// //             of the Director of NSS, Rani Durgawati Vishwavidyalaya. Students who believe in social values
// //             and are eager to make themselves socially relevant may join these units. Students have the
// //             satisfaction and a sense of achievement in sharing their responsibility towards the society of
// //             which they are a part. In the camps organized under the banner of NSS, these students get an
// //             opportunity to relate with society at close quarters and try their best to strike at the
// //             prevalent social evils. They organize literacy and awareness programmes to teach the ignorant
// //             the basic principles of hygiene and cleanliness, and thus improve upon the quality of their lives.
// //           </p>
// //         </div>

// //         {/* Stats */}
// //         <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
// //           {[
// //             { value: '3', label: 'NSS Units' },
// //             { value: '300+', label: 'Volunteers' },
// //             { value: '100+', label: 'Students Teaching' },
// //             { value: '3', label: 'Programme Officers' },
// //           ].map((s) => (
// //             <div key={s.label} className="bg-[#e5be10] rounded-2xl p-5 text-center">
// //               <p className="text-2xl font-medium text-white">{s.value}</p>
// //               <p className="text-xs text-blue-200 mt-1 leading-tight">{s.label}</p>
// //             </div>
// //           ))}
// //         </div>

// //         {/* Services */}
// //         <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
// //           <div className="px-8 py-5 border-b border-gray-100 flex items-center gap-3">
// //             <div className="w-1 h-6 bg-[#e5be10] rounded-full" />
// //             <h2 className="text-base font-medium text-gray-900">Services</h2>
// //           </div>
// //           <div className="divide-y divide-gray-50">
// //             {services.map((s, i) => (
// //               <div key={i} className="flex items-start gap-4 px-8 py-4 hover:bg-gray-50 transition-colors">
// //                 <span className="flex-shrink-0 w-6 h-6 rounded-lg bg-blue-50 text-[#e5be10] text-xs font-medium flex items-center justify-center mt-0.5">
// //                   {String(i + 1).padStart(2, '0')}
// //                 </span>
// //                 <p className="text-sm text-gray-600 leading-relaxed">{s}</p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>

// //         {/* Two col: Composition + How to join */}
// //         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
// //           <div className="bg-white border border-gray-200 rounded-2xl p-6">
// //             <div className="flex items-center gap-3 mb-4">
// //               <div className="w-8 h-8 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
// //                 <svg className="w-4 h-4 text-[#e5be10]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
// //                   <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
// //                   <circle cx="9" cy="7" r="4"/>
// //                   <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
// //                   <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
// //                 </svg>
// //               </div>
// //               <h2 className="text-sm font-medium text-gray-900">Composition of N.S.S. Unit</h2>
// //             </div>
// //             <p className="text-sm text-gray-600 leading-relaxed">
// //               Three NSS units comprising of 100 student volunteers each are led by three teacher
// //               in-charges, also known as NSS Programme Officers.
// //             </p>
// //           </div>

// //           <div className="bg-white border border-gray-200 rounded-2xl p-6">
// //             <div className="flex items-center gap-3 mb-4">
// //               <div className="w-8 h-8 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
// //                 <svg className="w-4 h-4 text-[#e5be10]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
// //                   <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
// //                   <path d="M6 12v5c3 3 9 3 12 0v-5"/>
// //                 </svg>
// //               </div>
// //               <h2 className="text-sm font-medium text-gray-900">How to Join NSS</h2>
// //             </div>
// //             <p className="text-sm text-gray-600 leading-relaxed">
// //               Students interested in volunteering for community service can submit the consent form
// //               duly signed by their parents to the NSS Programme Officer of the college.
// //             </p>
// //           </div>
// //         </div>

// //         {/* Officers */}
// //         <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
// //           <div className="px-8 py-5 border-b border-gray-100 flex items-center gap-3">
// //             <div className="w-1 h-6 bg-[#e5be10] rounded-full" />
// //             <h2 className="text-base font-medium text-gray-900">NSS Programme Officers</h2>
// //           </div>
// //           <div className="divide-y divide-gray-50">
// //             {officers.map((o, i) => (
// //               <div key={i} className="flex items-center justify-between gap-6 px-8 py-4 hover:bg-gray-50 transition-colors flex-wrap">
// //                 <div className="flex items-center gap-4">
// //                   <div className="w-9 h-9 rounded-full bg-[#e5be10] flex items-center justify-center flex-shrink-0">
// //                     <span className="text-white text-xs font-medium">
// //                       {o.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
// //                     </span>
// //                   </div>
// //                   <div>
// //                     <p className="text-sm font-medium text-gray-900">{o.name}</p>
// //                     <p className="text-xs text-gray-500">{o.role}</p>
// //                   </div>
// //                 </div>
                
// //                 <a  href={`tel:${o.phone.replace(/\s/g, '')}`}
// //                   className="inline-flex items-center gap-1.5 text-xs font-medium text-[#e5be10] bg-blue-50 px-3 py-1.5 rounded-lg hover:bg-blue-100 transition-colors flex-shrink-0"
// //                 >
// //                   <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
// //                     <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.72a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16z"/>
// //                   </svg>
// //                   {o.phone}
// //                 </a>
// //               </div>
// //             ))}
// //           </div>
// //         </div>

// //       </div>
// //     </div>
// //   );
// // };

// // export default Nss;



// import React, { useState } from 'react';

// // ── palette ──────────────────────────────────────────────────────────────────
// // BROWN  #753300   BROWN2 #9a4a10   GOLD #e5be10
// // CREAM  #fdf8ee   DARK   #3a1a00   TEXT #4a2000   MUTED #b08060

// const services = [
//   'Free of cost tuition classes to school dropouts on Sundays at the college campus, conducted by faculty as a selfless gesture of service.',
//   'About 100 students have adopted two student dropouts each from their neighborhood, undertaking the job of teaching. 30 more students have adopted three adults each to teach them to read and write.',
//   'Tree plantation drives are carried out regularly.',
//   'Constructive work in adopted villages and slums.',
//   'Blood donation camps.',
//   'Non-formal education initiatives.',
//   'Health, nutrition, and family welfare awareness drives.',
//   'AIDS awareness campaigns.',
// ];

// const officers = [
//   { name: 'Dr. Madhuri Garg',       role: 'Programme Officer (Women Wings)',              phone: '+91-9424956438' },
//   { name: 'Dr. Ajay Kumar Thakur',  role: 'Programme Officer (Women & Men Combined Wings)', phone: '+91-6207120913' },
//   { name: 'Mr. Atul Kumar',         role: 'Programme Officer (Men Wings)',                phone: '+91-8543820500' },
// ];

// // ── tiny helpers ──────────────────────────────────────────────────────────────
// const initials = (name) =>
//   name.split(' ').map((n) => n[0]).slice(0, 2).join('');

// // ── icons (inline SVG, no deps) ───────────────────────────────────────────────
// const PeopleIcon = () => (
//   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: 18, height: 18 }}>
//     <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
//     <circle cx="9" cy="7" r="4"/>
//     <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
//     <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
//   </svg>
// );

// const GradCapIcon = () => (
//   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: 18, height: 18 }}>
//     <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
//     <path d="M6 12v5c3 3 9 3 12 0v-5"/>
//   </svg>
// );

// const PhoneIcon = () => (
//   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: 13, height: 13 }}>
//     <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.72a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16z"/>
//   </svg>
// );

// // ── subcomponents ─────────────────────────────────────────────────────────────
// const SectionLabel = ({ children }) => (
//   <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
//     <div style={{
//       width: 4, height: 24, borderRadius: 4,
//       background: 'linear-gradient(180deg,#753300,#e5be10)',
//       flexShrink: 0,
//     }} />
//     <h2 style={{ margin: 0, fontSize: 15, fontWeight: 700, color: '#3a1a00', fontFamily: "'Playfair Display', Georgia, serif", letterSpacing: 0.2 }}>
//       {children}
//     </h2>
//   </div>
// );

// const Card = ({ children, style = {} }) => (
//   <div style={{
//     background: '#fdf8ee',
//     border: '1.5px solid rgba(229,190,16,0.30)',
//     borderRadius: 18,
//     overflow: 'hidden',
//     ...style,
//   }}>
//     {children}
//   </div>
// );

// // ── main component ────────────────────────────────────────────────────────────
// const Nss = () => {
//   const [hovered, setHovered] = useState(null);

//   return (
//     <>
//       {/* Google Fonts */}
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;900&family=Source+Serif+4:ital,wght@0,300;0,400;0,600;1,400&display=swap');

//         *{box-sizing:border-box;}

//         .nss-root {
//           min-height: 100vh;
//           background: linear-gradient(160deg,#fff8ee 0%,#fdf3d8 55%,#fff 100%);
//           font-family: 'Source Serif 4', Georgia, serif;
//           color: #4a2000;
//         }

//         /* ── Hero ── */
//         .nss-hero {
//           position: relative;
//           padding: 72px 24px 56px;
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           text-align: center;
//           overflow: hidden;
//         }
//         .nss-hero::before {
//           content:'';
//           position:absolute; inset:0;
//           background: radial-gradient(ellipse 80% 60% at 50% 0%, rgba(117,51,0,.08) 0%, transparent 70%);
//           pointer-events:none;
//         }

//         .hero-eyebrow {
//           font-size: 11px;
//           letter-spacing: .22em;
//           text-transform: uppercase;
//           color: #b08060;
//           margin-bottom: 14px;
//           font-family: 'Source Serif 4', serif;
//           font-weight: 600;
//         }

//         .hero-badge {
//           display: inline-flex;
//           align-items: center;
//           gap: 8px;
//           background: rgba(117,51,0,.08);
//           border: 1px solid rgba(229,190,16,.4);
//           border-radius: 999px;
//           padding: 4px 14px;
//           margin-bottom: 22px;
//         }
//         .hero-badge-dot {
//           width:6px; height:6px; border-radius:50%;
//           background: linear-gradient(135deg,#753300,#e5be10);
//         }

//         .hero-h1 {
//           margin: 0 0 16px;
//           font-family: 'Playfair Display', Georgia, serif;
//           font-size: clamp(28px, 6vw, 52px);
//           font-weight: 900;
//           line-height: 1.15;
//           background: linear-gradient(90deg,#753300 0%,#b36000 50%,#e5be10 100%);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//         }

//         .hero-divider {
//           display:flex; align-items:center; gap:12px; margin-bottom:18px;
//         }
//         .hero-divider-line {
//           height:1px; width:48px;
//           background: linear-gradient(90deg,transparent,#e5be10);
//         }
//         .hero-divider-line.r { background: linear-gradient(90deg,#e5be10,transparent); }
//         .hero-tagline {
//           font-style:italic;
//           font-size:14px;
//           color:#9a4a10;
//           letter-spacing:.05em;
//         }

//         .hero-nssmotto {
//           margin-top:6px;
//           font-size:12px;
//           color:#b08060;
//           letter-spacing:.12em;
//           text-transform: uppercase;
//         }

//         /* ── Decorative symbol ── */
//         .hero-emblem {
//           width: clamp(70px, 12vw, 100px);
//           height: clamp(70px, 12vw, 100px);
//           border-radius: 50%;
//           background: linear-gradient(135deg,#753300,#9a4a10);
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           margin-bottom: 28px;
//           box-shadow: 0 8px 32px rgba(117,51,0,.22), 0 0 0 6px rgba(229,190,16,.18);
//           flex-shrink: 0;
//         }
//         .hero-emblem-text {
//           font-family:'Playfair Display',serif;
//           font-size: clamp(22px, 4vw, 36px);
//           font-weight:900;
//           color:#e5be10;
//           letter-spacing:.04em;
//         }

//         /* ── Gold divider ── */
//         .gold-rule {
//           height:2px;
//           background: linear-gradient(90deg,transparent 0%,#753300 20%,#e5be10 50%,#753300 80%,transparent 100%);
//           border:none; margin:0;
//         }

//         /* ── Layout ── */
//         .nss-body { max-width:860px; margin:0 auto; padding:36px 16px 64px; display:flex; flex-direction:column; gap:28px; }
//         @media(min-width:600px){ .nss-body{ padding:48px 32px 80px; } }

//         /* ── Stats ── */
//         .stats-grid {
//           display: grid;
//           grid-template-columns: repeat(2,1fr);
//           gap: 14px;
//         }
//         @media(min-width:480px){ .stats-grid{ grid-template-columns: repeat(4,1fr); } }

//         .stat-card {
//           background: linear-gradient(135deg,#753300,#9a4a10);
//           border-radius:16px;
//           padding:20px 12px;
//           text-align:center;
//           position:relative;
//           overflow:hidden;
//         }
//         .stat-card::after {
//           content:'';
//           position:absolute; bottom:-8px; right:-8px;
//           width:40px; height:40px; border-radius:50%;
//           background:rgba(229,190,16,.18);
//         }
//         .stat-value {
//           font-family:'Playfair Display',serif;
//           font-size:clamp(22px,4vw,30px);
//           font-weight:900;
//           color:#e5be10;
//           margin:0 0 4px;
//         }
//         .stat-label {
//           font-size:11px;
//           color:rgba(253,248,238,.75);
//           font-weight:600;
//           letter-spacing:.06em;
//           text-transform:uppercase;
//           margin:0;
//         }

//         /* ── Services list ── */
//         .services-list { padding:0; margin:0; list-style:none; }
//         .service-item {
//           display:flex; align-items:flex-start; gap:14px;
//           padding:14px 24px;
//           border-bottom:1px solid rgba(229,190,16,.15);
//           transition: background .18s;
//         }
//         .service-item:last-child{ border-bottom:none; }
//         .service-item:hover{ background:rgba(229,190,16,.07); }
//         .service-num {
//           flex-shrink:0;
//           width:28px; height:28px; border-radius:8px;
//           background:linear-gradient(135deg,rgba(117,51,0,.12),rgba(229,190,16,.20));
//           border:1px solid rgba(229,190,16,.35);
//           color:#753300;
//           font-size:11px; font-weight:700;
//           display:flex; align-items:center; justify-content:center;
//           margin-top:1px;
//           font-family:'Source Serif 4',serif;
//         }
//         .service-text { font-size:14px; line-height:1.65; color:#4a2000; margin:0; }

//         /* ── Two col grid ── */
//         .two-col { display:grid; grid-template-columns:1fr; gap:16px; }
//         @media(min-width:560px){ .two-col{ grid-template-columns:1fr 1fr; } }

//         .info-card-inner { padding:22px; }
//         .info-icon-wrap {
//           width:40px; height:40px; border-radius:12px;
//           background:rgba(229,190,16,.14);
//           border:1px solid rgba(229,190,16,.28);
//           display:flex; align-items:center; justify-content:center;
//           color:#753300; flex-shrink:0; margin-bottom:14px;
//         }
//         .info-card-title {
//           font-family:'Playfair Display',serif;
//           font-size:14px; font-weight:700; color:#3a1a00; margin:0 0 8px;
//         }
//         .info-card-text { font-size:13.5px; line-height:1.65; color:#4a2000; margin:0; }

//         /* ── Officers ── */
//         .officer-item {
//           display:flex; align-items:center; justify-content:space-between;
//           gap:12px; padding:16px 24px;
//           border-bottom:1px solid rgba(229,190,16,.15);
//           flex-wrap: wrap;
//           transition:background .18s;
//         }
//         .officer-item:last-child{ border-bottom:none; }
//         .officer-item:hover{ background:rgba(229,190,16,.06); }

//         .officer-left { display:flex; align-items:center; gap:12px; min-width:0; }
//         .officer-avatar {
//           width:40px; height:40px; border-radius:50%; flex-shrink:0;
//           background:linear-gradient(135deg,#753300,#9a4a10);
//           display:flex; align-items:center; justify-content:center;
//           color:#e5be10; font-size:13px; font-weight:700;
//           font-family:'Playfair Display',serif;
//           box-shadow: 0 2px 8px rgba(117,51,0,.18);
//         }
//         .officer-name { font-size:14px; font-weight:600; color:#3a1a00; margin:0 0 2px; }
//         .officer-role { font-size:12px; color:#b08060; margin:0; line-height:1.4; }

//         .phone-btn {
//           display:inline-flex; align-items:center; gap:6px;
//           font-size:12px; font-weight:600; color:#753300;
//           background:rgba(229,190,16,.14);
//           border:1px solid rgba(229,190,16,.35);
//           padding:7px 13px; border-radius:10px;
//           text-decoration:none;
//           transition:background .18s, color .18s;
//           white-space:nowrap; flex-shrink:0;
//         }
//         .phone-btn:hover{ background:rgba(229,190,16,.28); color:#3a1a00; }

//         /* ── Card header ── */
//         .card-header {
//           padding:18px 24px;
//           border-bottom:1.5px solid rgba(229,190,16,.20);
//         }
//         .about-body { padding:22px 24px; }

//         /* ── Mission callout ── */
//         .mission-callout {
//           background:linear-gradient(135deg,#753300,#9a4a10);
//           border-radius:18px;
//           padding:28px 24px;
//           position:relative;
//           overflow:hidden;
//         }
//         .mission-callout::before {
//           content:'"';
//           position:absolute; top:-10px; left:16px;
//           font-family:'Playfair Display',serif;
//           font-size:120px; color:rgba(229,190,16,.15);
//           line-height:1; pointer-events:none;
//         }
//         .mission-text {
//           font-family:'Playfair Display',serif;
//           font-size:clamp(14px,2.5vw,17px);
//           font-style:italic;
//           color:#fdf8ee;
//           line-height:1.7;
//           margin:0 0 10px;
//           position:relative;
//         }
//         .mission-attribution {
//           font-size:12px; color:rgba(253,248,238,.6);
//           letter-spacing:.1em; text-transform:uppercase; margin:0;
//           position:relative;
//         }
//       `}</style>

//       <div className="nss-root">

//         {/* ── HERO ── */}
//         <div className="nss-hero">
//           <p className="hero-eyebrow">Govt. Tilak P.G. College, Katni (M.P.)</p>

//           <div className="hero-emblem">
//             <span className="hero-emblem-text">NSS</span>
//           </div>

//           <div className="hero-badge">
//             <div className="hero-badge-dot" />
//             <span style={{ fontSize: 11, color: '#753300', fontWeight: 600, letterSpacing: '.08em', textTransform: 'uppercase' }}>
//               National Service Scheme
//             </span>
//           </div>

//           <h1 className="hero-h1">Serving Society,<br />Shaping Future</h1>

//           <div className="hero-divider">
//             <div className="hero-divider-line" />
//             <span className="hero-tagline">"Not Me, But You"</span>
//             <div className="hero-divider-line r" />
//           </div>

//           <p className="hero-nssmotto">Committed to Community · Dedicated to Nation</p>
//         </div>

//         <hr className="gold-rule" />

//         {/* ── BODY ── */}
//         <div className="nss-body">

//           {/* About */}
//           <Card>
//             <div className="card-header">
//               <SectionLabel>About NSS</SectionLabel>
//             </div>
//             <div className="about-body">
//               <p style={{ margin: 0, fontSize: 14, lineHeight: 1.75, color: '#4a2000' }}>
//                 Govt. Tilak P.G. College, Katni (M.P.) has to its credit three units of National Service
//                 Scheme. Three regular N.S.S officers coordinate the activity under the direction and guidance
//                 of the Director of NSS, Rani Durgawati Vishwavidyalaya. Students who believe in social values
//                 and are eager to make themselves socially relevant may join these units. Students have the
//                 satisfaction and a sense of achievement in sharing their responsibility towards the society of
//                 which they are a part. In the camps organized under the banner of NSS, these students get an
//                 opportunity to relate with society at close quarters and try their best to strike at the
//                 prevalent social evils. They organize literacy and awareness programmes to teach the ignorant
//                 the basic principles of hygiene and cleanliness, and thus improve upon the quality of their lives.
//               </p>
//             </div>
//           </Card>

//           {/* Stats */}
//           <div className="stats-grid">
//             {[
//               { value: '3',    label: 'NSS Units' },
//               { value: '300+', label: 'Volunteers' },
//               { value: '100+', label: 'Students Teaching' },
//               { value: '3',    label: 'Programme Officers' },
//             ].map((s) => (
//               <div className="stat-card" key={s.label}>
//                 <p className="stat-value">{s.value}</p>
//                 <p className="stat-label">{s.label}</p>
//               </div>
//             ))}
//           </div>

//           {/* Services */}
//           <Card>
//             <div className="card-header">
//               <SectionLabel>Services &amp; Activities</SectionLabel>
//             </div>
//             <ul className="services-list">
//               {services.map((s, i) => (
//                 <li className="service-item" key={i}>
//                   <span className="service-num">{String(i + 1).padStart(2, '0')}</span>
//                   <p className="service-text">{s}</p>
//                 </li>
//               ))}
//             </ul>
//           </Card>

//           {/* Two-col: Composition + Join */}
//           <div className="two-col">
//             <Card>
//               <div className="info-card-inner">
//                 <div className="info-icon-wrap"><PeopleIcon /></div>
//                 <h3 className="info-card-title">Composition of N.S.S. Unit</h3>
//                 <p className="info-card-text">
//                   Three NSS units comprising of 100 student volunteers each are led by three teacher
//                   in-charges, also known as NSS Programme Officers.
//                 </p>
//               </div>
//             </Card>

//             <Card>
//               <div className="info-card-inner">
//                 <div className="info-icon-wrap"><GradCapIcon /></div>
//                 <h3 className="info-card-title">How to Join NSS</h3>
//                 <p className="info-card-text">
//                   Students interested in volunteering for community service can submit the consent form
//                   duly signed by their parents to the NSS Programme Officer of the college.
//                 </p>
//               </div>
//             </Card>
//           </div>

//           {/* Mission callout */}
//           <div className="mission-callout">
//             <p className="mission-text">
//               "In the camps organized under the banner of NSS, students get an opportunity to relate
//               with society at close quarters and strike at prevalent social evils through literacy and
//               awareness programmes."
//             </p>
//             <p className="mission-attribution">— NSS Mission, Govt. Tilak P.G. College</p>
//           </div>

//           {/* Officers */}
//           <Card>
//             <div className="card-header">
//               <SectionLabel>NSS Programme Officers</SectionLabel>
//             </div>
//             {officers.map((o, i) => (
//               <div className="officer-item" key={i}>
//                 <div className="officer-left">
//                   <div className="officer-avatar">{initials(o.name)}</div>
//                   <div style={{ minWidth: 0 }}>
//                     <p className="officer-name">{o.name}</p>
//                     <p className="officer-role">{o.role}</p>
//                   </div>
//                 </div>
//                 <a href={`tel:${o.phone.replace(/\s/g, '')}`} className="phone-btn">
//                   <PhoneIcon />
//                   {o.phone}
//                 </a>
//               </div>
//             ))}
//           </Card>

//         </div>
//       </div>
//     </>
//   );
// };

// export default Nss;