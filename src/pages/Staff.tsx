import React, { useState } from 'react';

// ── 44 dummy staff members ────────────────────────────────────────────────────

type StaffMember = {
  id: number;
  name: string;
  staffType: string;
  type: string;
  designation: string;
  dob: string;
  mobile: string;
  email: string;
  qualification: string;
};

const staffData = [
  { id: 1,  name: 'Dr. Padmaja Shukla',      staffType: 'Teaching', type: 'Regular',    designation: 'Asstt. Professor (HoD)', dob: '27-12-1958', mobile: '9424956186', email: 'padmajashukla@gmail.com',      qualification: 'M.Phil, M.Sc.' },
  { id: 2,  name: 'Dr. Ramesh Kumar Tiwari', staffType: 'Teaching', type: 'Regular',    designation: 'Associate Professor',    dob: '14-03-1965', mobile: '9826543210', email: 'rktiwari@gmail.com',            qualification: 'Ph.D, M.Sc.' },
  { id: 3,  name: 'Dr. Sunita Verma',        staffType: 'Teaching', type: 'Regular',    designation: 'Asstt. Professor',       dob: '05-07-1972', mobile: '9754321098', email: 'sunitaverma@gmail.com',         qualification: 'Ph.D, M.A.' },
  { id: 4,  name: 'Mr. Anil Patel',          staffType: 'Teaching', type: 'Guest',      designation: 'Guest Faculty',          dob: '22-11-1980', mobile: '9812345678', email: 'anilpatel@gmail.com',           qualification: 'M.Phil, M.Com.' },
  { id: 5,  name: 'Dr. Meena Sharma',        staffType: 'Teaching', type: 'Regular',    designation: 'Professor',              dob: '18-04-1960', mobile: '9630741852', email: 'meenasharma@gmail.com',         qualification: 'Ph.D, M.A., B.Ed.' },
  { id: 6,  name: 'Mr. Deepak Mishra',       staffType: 'Teaching', type: 'Guest',      designation: 'Guest Faculty',          dob: '30-09-1985', mobile: '9574125896', email: 'deepakmishra@gmail.com',        qualification: 'M.Sc., NET' },
  { id: 7,  name: 'Dr. Kavita Singh',        staffType: 'Teaching', type: 'Regular',    designation: 'Associate Professor',    dob: '12-01-1968', mobile: '9425874125', email: 'kavitasingh@gmail.com',         qualification: 'Ph.D, M.A.' },
  { id: 8,  name: 'Mrs. Priya Dubey',        staffType: 'Teaching', type: 'Regular',    designation: 'Asstt. Professor',       dob: '25-06-1975', mobile: '9988776655', email: 'priyadubey@gmail.com',          qualification: 'M.Phil, M.Sc.' },
  { id: 9,  name: 'Dr. Suresh Joshi',        staffType: 'Teaching', type: 'Regular',    designation: 'Professor',              dob: '08-02-1958', mobile: '9123456789', email: 'sureshjoshi@gmail.com',         qualification: 'Ph.D, M.Com., SLET' },
  { id: 10, name: 'Mr. Vikram Pandey',       staffType: 'Teaching', type: 'Guest',      designation: 'Guest Faculty',          dob: '14-08-1990', mobile: '9654321087', email: 'vikrampandey@gmail.com',        qualification: 'M.A., NET' },
  { id: 11, name: 'Dr. Anjali Gupta',        staffType: 'Teaching', type: 'Regular',    designation: 'Asstt. Professor',       dob: '19-05-1973', mobile: '9871234560', email: 'anjaligupta@gmail.com',         qualification: 'Ph.D, M.Sc.' },
  { id: 12, name: 'Mr. Rajesh Chouhan',      staffType: 'Teaching', type: 'Regular',    designation: 'Asstt. Professor',       dob: '03-10-1970', mobile: '9741258963', email: 'rajeshchouhan@gmail.com',       qualification: 'M.Phil, M.A.' },
  { id: 13, name: 'Dr. Neha Saxena',         staffType: 'Teaching', type: 'Regular',    designation: 'Associate Professor',    dob: '28-07-1966', mobile: '9456321780', email: 'nehasaxena@gmail.com',          qualification: 'Ph.D, M.A., B.Ed.' },
  { id: 14, name: 'Mrs. Rekha Yadav',        staffType: 'Teaching', type: 'Regular',    designation: 'Asstt. Professor',       dob: '11-12-1977', mobile: '9321456780', email: 'rekhayadav@gmail.com',          qualification: 'M.Phil, M.Sc.' },
  { id: 15, name: 'Mr. Ashok Soni',          staffType: 'Teaching', type: 'Guest',      designation: 'Guest Faculty',          dob: '07-03-1988', mobile: '9214567891', email: 'ashoksoni@gmail.com',           qualification: 'M.Com., NET' },
  { id: 16, name: 'Dr. Pushpa Rawat',        staffType: 'Teaching', type: 'Regular',    designation: 'Professor',              dob: '23-09-1955', mobile: '9103456781', email: 'pushparawat@gmail.com',         qualification: 'Ph.D, M.A.' },
  { id: 17, name: 'Mr. Hemant Bajpai',       staffType: 'Teaching', type: 'Regular',    designation: 'Asstt. Professor',       dob: '16-06-1979', mobile: '9987654321', email: 'hemantbajpai@gmail.com',        qualification: 'M.Phil, M.Sc.' },
  { id: 18, name: 'Dr. Usha Trivedi',        staffType: 'Teaching', type: 'Regular',    designation: 'Associate Professor',    dob: '04-01-1964', mobile: '9876543211', email: 'ushatrivedi@gmail.com',         qualification: 'Ph.D, M.Com.' },
  { id: 19, name: 'Mrs. Seema Pathak',       staffType: 'Teaching', type: 'Regular',    designation: 'Asstt. Professor',       dob: '29-04-1976', mobile: '9765432112', email: 'seemapathak@gmail.com',         qualification: 'M.Phil, M.A.' },
  { id: 20, name: 'Mr. Mohan Kaushik',       staffType: 'Teaching', type: 'Guest',      designation: 'Guest Faculty',          dob: '10-11-1992', mobile: '9654321123', email: 'mohankaushik@gmail.com',        qualification: 'M.Sc., NET' },
  { id: 21, name: 'Dr. Lata Mishra',         staffType: 'Teaching', type: 'Regular',    designation: 'Professor',              dob: '17-08-1957', mobile: '9543212134', email: 'latamishra@gmail.com',          qualification: 'Ph.D, M.A., SLET' },
  { id: 22, name: 'Mr. Dinesh Srivastava',   staffType: 'Teaching', type: 'Regular',    designation: 'Asstt. Professor',       dob: '02-02-1981', mobile: '9432123145', email: 'dineshsrivastava@gmail.com',    qualification: 'M.Phil, M.Sc.' },
  { id: 23, name: 'Dr. Geeta Shukla',        staffType: 'Teaching', type: 'Regular',    designation: 'Associate Professor',    dob: '21-06-1967', mobile: '9321234156', email: 'geetashukla@gmail.com',         qualification: 'Ph.D, M.A.' },
  { id: 24, name: 'Mrs. Archana Dixit',      staffType: 'Teaching', type: 'Regular',    designation: 'Asstt. Professor',       dob: '09-10-1974', mobile: '9212345167', email: 'archanadixit@gmail.com',        qualification: 'M.Phil, M.Com.' },
  { id: 25, name: 'Mr. Pradeep Tripathi',    staffType: 'Teaching', type: 'Guest',      designation: 'Guest Faculty',          dob: '26-03-1987', mobile: '9103456178', email: 'pradeeptripathi@gmail.com',     qualification: 'M.A., NET' },
  { id: 26, name: 'Dr. Sarla Dwivedi',       staffType: 'Teaching', type: 'Regular',    designation: 'Professor',              dob: '13-12-1956', mobile: '9876512349', email: 'sarladwivedi@gmail.com',        qualification: 'Ph.D, M.Sc.' },
  { id: 27, name: 'Mr. Naresh Pandey',       staffType: 'Teaching', type: 'Regular',    designation: 'Asstt. Professor',       dob: '31-07-1978', mobile: '9765423450', email: 'nareshpandey@gmail.com',        qualification: 'M.Phil, M.A.' },
  { id: 28, name: 'Dr. Indu Agrawal',        staffType: 'Teaching', type: 'Regular',    designation: 'Associate Professor',    dob: '06-05-1963', mobile: '9654334551', email: 'induagrawal@gmail.com',         qualification: 'Ph.D, M.Com., B.Ed.' },
  { id: 29, name: 'Mrs. Shobha Tiwari',      staffType: 'Teaching', type: 'Regular',    designation: 'Asstt. Professor',       dob: '24-09-1971', mobile: '9543245652', email: 'shobhatiwari@gmail.com',        qualification: 'M.Phil, M.Sc.' },
  { id: 30, name: 'Mr. Santosh Yadav',       staffType: 'Teaching', type: 'Guest',      designation: 'Guest Faculty',          dob: '15-01-1991', mobile: '9432156753', email: 'santoshyadav@gmail.com',        qualification: 'M.A., NET' },
  { id: 31, name: 'Dr. Manju Bansal',        staffType: 'Teaching', type: 'Regular',    designation: 'Professor',              dob: '08-08-1954', mobile: '9321067854', email: 'manjubansal@gmail.com',         qualification: 'Ph.D, M.A.' },
  { id: 32, name: 'Mr. Rakesh Jain',         staffType: 'Teaching', type: 'Regular',    designation: 'Asstt. Professor',       dob: '27-04-1982', mobile: '9210978965', email: 'rakeshjain@gmail.com',          qualification: 'M.Phil, M.Sc.' },
  { id: 33, name: 'Dr. Nirmala Khatri',      staffType: 'Teaching', type: 'Regular',    designation: 'Associate Professor',    dob: '19-11-1965', mobile: '9109890076', email: 'nirmalakhatri@gmail.com',       qualification: 'Ph.D, M.A., SLET' },
  { id: 34, name: 'Mrs. Vandana Shukla',     staffType: 'Teaching', type: 'Regular',    designation: 'Asstt. Professor',       dob: '05-03-1973', mobile: '9998701187', email: 'vandanashukla@gmail.com',       qualification: 'M.Phil, M.Com.' },
  { id: 35, name: 'Mr. Sunil Gupta',         staffType: 'Teaching', type: 'Guest',      designation: 'Guest Faculty',          dob: '22-07-1989', mobile: '9887612298', email: 'sunilgupta@gmail.com',          qualification: 'M.Sc., NET' },
  { id: 36, name: 'Dr. Kamla Prasad',        staffType: 'Teaching', type: 'Regular',    designation: 'Professor',              dob: '10-02-1953', mobile: '9776523309', email: 'kamlaprasad@gmail.com',         qualification: 'Ph.D, M.A.' },
  { id: 37, name: 'Mr. Ajay Thakur',         staffType: 'Teaching', type: 'Regular',    designation: 'Asstt. Professor',       dob: '03-06-1980', mobile: '9665434410', email: 'ajaythakur@gmail.com',          qualification: 'M.Phil, M.Sc.' },
  { id: 38, name: 'Dr. Sarita Chandra',      staffType: 'Teaching', type: 'Regular',    designation: 'Associate Professor',    dob: '16-10-1962', mobile: '9554345521', email: 'saritachandra@gmail.com',       qualification: 'Ph.D, M.A.' },
  { id: 39, name: 'Mrs. Mamta Singh',        staffType: 'Teaching', type: 'Regular',    designation: 'Asstt. Professor',       dob: '29-08-1970', mobile: '9443256632', email: 'mamtasingh@gmail.com',          qualification: 'M.Phil, M.Com.' },
  { id: 40, name: 'Mr. Devendra Mishra',     staffType: 'Teaching', type: 'Guest',      designation: 'Guest Faculty',          dob: '12-12-1993', mobile: '9332167743', email: 'devendramishara@gmail.com',     qualification: 'M.A., NET' },
  { id: 41, name: 'Dr. Renu Saxena',         staffType: 'Teaching', type: 'Regular',    designation: 'Professor',              dob: '07-04-1952', mobile: '9221078854', email: 'renusaxena@gmail.com',          qualification: 'Ph.D, M.Sc.' },
  { id: 42, name: 'Mr. Prakash Dubey',       staffType: 'Teaching', type: 'Regular',    designation: 'Asstt. Professor',       dob: '20-09-1983', mobile: '9110989965', email: 'prakashdubey@gmail.com',        qualification: 'M.Phil, M.A.' },
  { id: 43, name: 'Dr. Sushma Chouhan',      staffType: 'Non-Teaching', type: 'Regular', designation: 'Librarian',             dob: '14-05-1969', mobile: '9009901076', email: 'sushmachouhan@gmail.com',       qualification: 'M.Lib., Ph.D' },
  { id: 44, name: 'Mr. Bharat Prajapati',    staffType: 'Non-Teaching', type: 'Regular', designation: 'Lab Assistant',         dob: '01-01-1985', mobile: '8989812187', email: 'bharatprajapati@gmail.com',     qualification: 'B.Sc., Diploma' },
];

// ── initials helper ───────────────────────────────────────────────────────────
const getInitials = (name: string): string =>
  name.replace(/\(.*?\)/g, '').trim().split(' ').filter(Boolean).map((n: string) => n[0]).slice(0, 2).join('');

// gradient pool for avatar backgrounds
const avatarGradients = [
  'linear-gradient(135deg,#753300,#9a4a10)',
  'linear-gradient(135deg,#9a4a10,#c25e18)',
  'linear-gradient(135deg,#753300,#b36000)',
  'linear-gradient(135deg,#5a2600,#9a4a10)',
  'linear-gradient(135deg,#8b3d00,#e5be10)',
];

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
    strokeLinecap="round" strokeLinejoin="round" style={{ width: 12, height: 12, flexShrink: 0 }}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.72a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16z" />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
    strokeLinecap="round" strokeLinejoin="round" style={{ width: 12, height: 12, flexShrink: 0 }}>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const BadgeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
    strokeLinecap="round" strokeLinejoin="round" style={{ width: 12, height: 12, flexShrink: 0 }}>
    <circle cx="12" cy="8" r="6" /><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
  </svg>
);

const CalIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
    strokeLinecap="round" strokeLinejoin="round" style={{ width: 12, height: 12, flexShrink: 0 }}>
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

// ── Staff Card ────────────────────────────────────────────────────────────────
const StaffCard = ({ member, index }: { member: StaffMember; index: number }) => {
  const grad = avatarGradients[index % avatarGradients.length];
  const isGuest = member.type === 'Guest';

  return (
    <div
      className="flex flex-col rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
      style={{
        background: '#fdf8ee',
        border: '1.5px solid rgba(229,190,16,0.28)',
        boxShadow: '0 2px 12px rgba(117,51,0,0.07)',
      }}
    >
      {/* Top colour strip */}
      <div className="h-1.5 w-full" style={{ background: 'linear-gradient(90deg,#753300,#e5be10)' }} />

      {/* Avatar + badge */}
      <div className="flex flex-col items-center pt-6 pb-4 px-4 gap-3">
        <div
          className="flex items-center justify-center rounded-full text-xl font-black flex-shrink-0"
          style={{
            width: 72, height: 72,
            background: grad,
            color: '#e5be10',
            fontFamily: 'Georgia, serif',
            boxShadow: '0 4px 16px rgba(117,51,0,0.20)',
            border: '3px solid rgba(229,190,16,0.30)',
          }}
        >
          {getInitials(member.name)}
        </div>

        {/* Name */}
        <div className="text-center">
          <h3
            className="font-bold leading-tight mb-1"
            style={{ fontFamily: 'Georgia,serif', fontSize: 14, color: '#3a1a00' }}
          >
            {member.name}
          </h3>
          <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: '#753300' }}>
            {member.designation}
          </p>
        </div>

        {/* Type badge */}
        <div className="flex gap-2 flex-wrap justify-center">
          <span
            className="text-xs font-semibold px-2.5 py-0.5 rounded-full"
            style={{
              background: isGuest ? 'rgba(229,190,16,0.18)' : 'rgba(117,51,0,0.12)',
              color: isGuest ? '#9a6800' : '#753300',
              border: isGuest ? '1px solid rgba(229,190,16,0.40)' : '1px solid rgba(117,51,0,0.25)',
            }}
          >
            {member.type}
          </span>
          <span
            className="text-xs font-semibold px-2.5 py-0.5 rounded-full"
            style={{
              background: member.staffType === 'Teaching' ? 'rgba(117,51,0,0.08)' : 'rgba(154,74,16,0.10)',
              color: '#9a4a10',
              border: '1px solid rgba(154,74,16,0.22)',
            }}
          >
            {member.staffType}
          </span>
        </div>
      </div>

      {/* Divider */}
      <div className="mx-4 h-px" style={{ background: 'linear-gradient(90deg,transparent,rgba(229,190,16,0.35),transparent)' }} />

      {/* Details */}
      <div className="px-4 py-4 flex flex-col gap-2.5">
        {[
          { icon: <BadgeIcon />, label: 'Qualification', value: member.qualification },
          { icon: <CalIcon />,   label: 'DOB',           value: member.dob },
          { icon: <PhoneIcon />, label: 'Mobile',        value: member.mobile },
          { icon: <MailIcon />,  label: 'Email',         value: member.email, small: true },
        ].map(({ icon, label, value, small }) => (
          <div key={label} className="flex items-start gap-2">
            <span className="mt-0.5 flex-shrink-0" style={{ color: '#b08060' }}>{icon}</span>
            <div className="min-w-0">
              <span className="block text-xs font-semibold uppercase tracking-wide" style={{ color: '#b08060', fontSize: 10 }}>
                {label}
              </span>
              <span
                className="block font-medium truncate"
                style={{ fontSize: small ? 11 : 12, color: '#4a2000' }}
                title={value}
              >
                {value}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Serial number badge */}
      <div className="mt-auto px-4 pb-4 flex justify-end">
        <span
          className="text-xs font-black"
          style={{ color: 'rgba(176,128,96,0.5)', fontFamily: 'Georgia,serif', fontSize: 11 }}
        >
          #{String(member.id).padStart(2, '0')}
        </span>
      </div>
    </div>
  );
};

// ── Main Staff Component ──────────────────────────────────────────────────────
const Staff = () => {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');

  const tabs = ['All', 'Teaching', 'Non-Teaching', 'Regular', 'Guest'];

  const filtered = staffData.filter(m => {
    const matchFilter =
      filter === 'All' ? true :
      filter === 'Teaching' ? m.staffType === 'Teaching' :
      filter === 'Non-Teaching' ? m.staffType === 'Non-Teaching' :
      filter === 'Regular' ? m.type === 'Regular' :
      filter === 'Guest' ? m.type === 'Guest' : true;

    const q = search.toLowerCase();
    const matchSearch = !q ||
      m.name.toLowerCase().includes(q) ||
      m.designation.toLowerCase().includes(q) ||
      m.qualification.toLowerCase().includes(q);

    return matchFilter && matchSearch;
  });

  return (
    <div
      className="min-h-screen"
      style={{ background: 'linear-gradient(160deg,#fff8ee 0%,#fdf3d8 55%,#fff 100%)', fontFamily: 'Georgia,serif' }}
    >
      {/* ── Hero ── */}
      <div
        className="relative py-14 sm:py-20 flex flex-col items-center justify-center overflow-hidden text-center px-4"
        style={{ background: 'linear-gradient(135deg,#753300 0%,#9a4a10 100%)' }}
      >
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg,rgba(229,190,16,.5) 0,rgba(229,190,16,.5) 1px,transparent 0,transparent 50%)',
            backgroundSize: '20px 20px',
          }} />
        <div className="absolute bottom-0 left-0 right-0 h-[3px]"
          style={{ background: 'linear-gradient(90deg,transparent,#e5be10,transparent)' }} />

        <p className="relative z-10 text-xs font-bold uppercase tracking-widest mb-3" style={{ color: 'rgba(229,190,16,0.75)', letterSpacing: '0.22em' }}>
          Govt. Tilak P.G. College, Katni
        </p>
        <h1
          className="relative z-10 font-black mb-3"
          style={{
            fontFamily: 'Georgia,serif',
            fontSize: 'clamp(28px,6vw,52px)',
            background: 'linear-gradient(90deg,#e5be10,#fdf8ee,#e5be10)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Our Staff
        </h1>
        <p className="relative z-10 text-sm" style={{ color: 'rgba(253,248,238,0.65)' }}>
          Meet our dedicated faculty &amp; staff members
        </p>

        {/* Stat pills */}
        <div className="relative z-10 flex flex-wrap gap-3 justify-center mt-6">
          {[
            { v: staffData.length,                                      l: 'Total Staff' },
            { v: staffData.filter(s => s.staffType === 'Teaching').length,    l: 'Teaching' },
            { v: staffData.filter(s => s.staffType === 'Non-Teaching').length, l: 'Non-Teaching' },
            { v: staffData.filter(s => s.type === 'Regular').length,          l: 'Regular' },
            { v: staffData.filter(s => s.type === 'Guest').length,            l: 'Guest' },
          ].map(({ v, l }) => (
            <div
              key={l}
              className="flex flex-col items-center px-4 py-2 rounded-xl"
              style={{ background: 'rgba(253,248,238,0.10)', border: '1px solid rgba(229,190,16,0.30)' }}
            >
              <span className="font-black text-lg" style={{ color: '#e5be10', fontFamily: 'Georgia,serif' }}>{v}</span>
              <span className="text-xs" style={{ color: 'rgba(253,248,238,0.65)', fontSize: 10 }}>{l}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Filters + Search ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 pb-2">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between flex-wrap">

          {/* Tab filters */}
          <div className="flex flex-wrap gap-2">
            {tabs.map(t => (
              <button
                key={t}
                onClick={() => setFilter(t)}
                className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide transition-all duration-200"
                style={filter === t ? {
                  background: 'linear-gradient(135deg,#753300,#9a4a10)',
                  color: '#e5be10',
                  border: '1.5px solid transparent',
                } : {
                  background: '#fdf8ee',
                  color: '#753300',
                  border: '1.5px solid rgba(229,190,16,0.30)',
                }}
              >
                {t}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full sm:w-64">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5" viewBox="0 0 24 24" fill="none"
              stroke="#b08060" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              placeholder="Search name, designation…"
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-8 pr-4 py-2 rounded-xl text-sm outline-none"
              style={{
                background: '#fdf8ee',
                border: '1.5px solid rgba(229,190,16,0.30)',
                color: '#4a2000',
                fontFamily: 'Georgia,serif',
              }}
            />
          </div>
        </div>

        {/* result count */}
        <p className="mt-3 text-xs" style={{ color: '#b08060' }}>
          Showing <span style={{ color: '#753300', fontWeight: 700 }}>{filtered.length}</span> of {staffData.length} members
        </p>
      </div>

      {/* ── Gold rule ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 my-4">
        <div className="h-px" style={{ background: 'linear-gradient(90deg,transparent,#753300 25%,#e5be10 50%,#753300 75%,transparent)' }} />
      </div>

      {/* ── Cards Grid ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-16">
        {filtered.length === 0 ? (
          <div className="text-center py-24" style={{ color: '#b08060' }}>
            <p className="text-lg font-bold" style={{ color: '#753300' }}>No results found</p>
            <p className="text-sm mt-1">Try a different search or filter.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {filtered.map((member, i) => (
              <StaffCard key={member.id} member={member} index={i} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Staff;