// Example data structure - customize this based on your actual data

export type DepartmentType = 
	| 'administration'
	| 'academics'
	| 'admissions'
	| 'research'
	| 'student-affairs'
	| 'facilities'
	| 'placements'
	| 'examinations';

export interface DepartmentData {
	title: string;
	items: string[];
	/** Maps each item (by index) to its section key + item id in detailedInfoData */
	itemLinks: Array<{ section: string; itemId: string }>;
}

export const allInfoData: Partial<Record<DepartmentType, DepartmentData>> = {
	administration: {
		title: 'Administration',
		items: [
			'University Governance Structure',
			'Administrative Policies and Guidelines',
			'Leadership Directory',
			'Organizational Chart',
			'Contact Information',
			'Office Hours and Locations',
			'Grievance Redressal Mechanism',
			'Right to Information (RTI)',
			'Anti-Ragging Policy',
			'Code of Conduct',
			'Sexual Harassment Prevention',
			'Committee Members',
		],
		itemLinks: [
			{ section: 'governance',    itemId: 'admin-gov-1'  }, // University Governance Structure
			{ section: 'policies',      itemId: 'admin-pol-1'  }, // Administrative Policies and Guidelines
			{ section: 'announcements', itemId: 'admin-ann-3'  }, // Leadership Directory
			{ section: 'governance',    itemId: 'admin-gov-1'  }, // Organizational Chart
			{ section: 'updates',       itemId: 'admin-upd-1'  }, // Contact Information
			{ section: 'updates',       itemId: 'admin-upd-1'  }, // Office Hours and Locations
			{ section: 'updates',       itemId: 'admin-upd-3'  }, // Grievance Redressal Mechanism
			{ section: 'announcements', itemId: 'admin-ann-5'  }, // Right to Information (RTI)
			{ section: 'announcements', itemId: 'admin-ann-4'  }, // Anti-Ragging Policy
			{ section: 'policies',      itemId: 'admin-pol-1'  }, // Code of Conduct
			{ section: 'policies',      itemId: 'admin-pol-2'  }, // Sexual Harassment Prevention
			{ section: 'governance',    itemId: 'admin-gov-2'  }, // Committee Members
		],
	},
	academics: {
		title: 'Academics',
		items: [
			'Academic Calendar 2025-26',
			'Course Catalog and Syllabus',
			'Examination Schedule',
			'Grading Policy and System',
			'Academic Regulations',
			'Faculty Directory',
			'Department Information',
			'Credit Transfer Guidelines',
			'Academic Probation Rules',
			'Course Registration Process',
			'Attendance Policy',
			'Internal Assessment Guidelines',
		],
		itemLinks: [
			{ section: 'announcements',   itemId: 'acad-ann-1'    }, // Academic Calendar 2025-26
			{ section: 'course-updates',  itemId: 'acad-course-1' }, // Course Catalog and Syllabus
			{ section: 'exam-notices',    itemId: 'acad-exam-1'   }, // Examination Schedule
			{ section: 'announcements',   itemId: 'acad-ann-1'    }, // Grading Policy and System
			{ section: 'announcements',   itemId: 'acad-ann-1'    }, // Academic Regulations
			{ section: 'faculty-updates', itemId: 'acad-fac-1'    }, // Faculty Directory
			{ section: 'course-updates',  itemId: 'acad-course-2' }, // Department Information
			{ section: 'announcements',   itemId: 'acad-ann-3'    }, // Credit Transfer Guidelines
			{ section: 'announcements',   itemId: 'acad-ann-4'    }, // Academic Probation Rules
			{ section: 'announcements',   itemId: 'acad-ann-3'    }, // Course Registration Process
			{ section: 'announcements',   itemId: 'acad-ann-1'    }, // Attendance Policy
			{ section: 'exam-notices',    itemId: 'acad-exam-4'   }, // Internal Assessment Guidelines
		],
	},
	admissions: {
		title: 'Admissions',
		items: [
			'Admission Process Overview',
			'Eligibility Criteria',
			'Application Forms',
			'Important Dates and Deadlines',
			'Fee Structure',
			'Entrance Exam Details',
			'Merit List and Cut-offs',
			'Document Verification',
			'Reservation Policy',
			'Foreign Students Admission',
			'Transfer and Migration',
			'Counseling Schedule',
		],
		itemLinks: [
			{ section: 'announcements',    itemId: 'adm-ann-1'   }, // Admission Process Overview
			{ section: 'announcements',    itemId: 'adm-ann-1'   }, // Eligibility Criteria
			{ section: 'announcements',    itemId: 'adm-ann-1'   }, // Application Forms
			{ section: 'announcements',    itemId: 'adm-ann-2'   }, // Important Dates and Deadlines
			{ section: 'scholarships',     itemId: 'adm-sch-1'   }, // Fee Structure
			{ section: 'entrance-exams',   itemId: 'adm-exam-1'  }, // Entrance Exam Details
			{ section: 'announcements',    itemId: 'adm-ann-4'   }, // Merit List and Cut-offs
			{ section: 'counseling',       itemId: 'adm-coun-2'  }, // Document Verification
			{ section: 'scholarships',     itemId: 'adm-sch-2'   }, // Reservation Policy
			{ section: 'announcements',    itemId: 'adm-ann-1'   }, // Foreign Students Admission
			{ section: 'announcements',    itemId: 'adm-ann-3'   }, // Transfer and Migration
			{ section: 'counseling',       itemId: 'adm-coun-1'  }, // Counseling Schedule
		],
	},
};

// ---------------------------------------------------------------------------
// Additional data structure for the detailed info pages
// ---------------------------------------------------------------------------

export interface InfoItem {
	id: string;
	title: string;
	date?: string;
	isNew?: boolean;
	content?: string;
	attachments?: string[];
}

export interface SectionData {
	label: string;
	icon: string;
	items: InfoItem[];
}

// Example structure for detailed information by department
export const detailedInfoData: Record<DepartmentType, Record<string, SectionData>> = {
	administration: {
		announcements: {
			label: 'Important Announcements',
			icon: '📌',
			items: [
				{
					id: 'admin-ann-1',
					title: 'Convocation 2026: Rehearsal Notice',
					date: '2026-02-10',
					isNew: true,
					content: 'All graduating students are required to attend the convocation rehearsal scheduled for February 20, 2026, at 10:00 AM in the main auditorium.',
				},
				{
					id: 'admin-ann-2',
					title: 'Notice Regarding Vidhan Sabha Satra Letter from 16th February 2026 to 06th March 2026',
					date: '2026-02-08',
					isNew: true,
					content: 'Due to the legislative assembly session, certain administrative services will have modified timings.',
				},
				{
					id: 'admin-ann-3',
					title: 'Final UTDs Teachers Seniority List Effective From 01.01.2026 to 31.12.2026',
					date: '2026-02-05',
					isNew: true,
					content: 'The updated seniority list of teaching staff has been published and is available for viewing.',
				},
				{
					id: 'admin-ann-4',
					title: 'Anti-Ragging Committee Meeting Minutes',
					date: '2026-01-28',
					isNew: false,
					content: 'Minutes of the anti-ragging committee meeting held on January 25, 2026.',
				},
				{
					id: 'admin-ann-5',
					title: 'Tender Notice for Campus Maintenance Services',
					date: '2026-01-22',
					isNew: false,
					content: 'Sealed tenders are invited for annual campus maintenance services. Last date for submission: February 15, 2026.',
				},
			],
		},
		updates: {
			label: 'Administrative Updates',
			icon: '🔔',
			items: [
				{
					id: 'admin-upd-1',
					title: 'Administrative Office Hour Changes',
					date: '2026-02-08',
					isNew: true,
					content: 'Updated office hours effective from February 15, 2026: Monday-Friday 9:30 AM - 5:00 PM.',
				},
				{
					id: 'admin-upd-2',
					title: 'New Online Portal for Document Requests',
					date: '2026-02-01',
					isNew: true,
					content: 'Students can now request transcripts, certificates, and other documents through our new online portal.',
				},
				{
					id: 'admin-upd-3',
					title: 'Updated Grievance Redressal Process',
					date: '2026-01-25',
					isNew: false,
					content: 'The university has streamlined its grievance redressal mechanism with faster response times.',
				},
			],
		},
		policies: {
			label: 'Policies & Guidelines',
			icon: '📋',
			items: [
				{
					id: 'admin-pol-1',
					title: 'Revised Code of Conduct for Students',
					date: '2026-01-15',
					isNew: false,
					content: 'The updated code of conduct is now in effect. All students are required to familiarize themselves with the new guidelines.',
				},
				{
					id: 'admin-pol-2',
					title: 'Data Privacy and Protection Policy',
					date: '2025-12-10',
					isNew: false,
					content: 'New data privacy policy ensuring the protection of student and staff personal information.',
				},
			],
		},
		governance: {
			label: 'Governance & Committees',
			icon: '⚖️',
			items: [
				{
					id: 'admin-gov-1',
					title: 'Academic Council Meeting Schedule - Spring 2026',
					date: '2026-02-01',
					isNew: false,
					content: 'The Academic Council will meet on the first Monday of every month throughout the spring semester.',
				},
				{
					id: 'admin-gov-2',
					title: 'Internal Quality Assurance Cell (IQAC) Annual Report',
					date: '2026-01-20',
					isNew: false,
					content: 'IQAC annual report for 2025 is now available for review.',
				},
			],
		},
	},

	academics: {
		announcements: {
			label: 'Academic Notices',
			icon: '📚',
			items: [
				{
					id: 'acad-ann-1',
					title: 'Academic Calendar Update for Spring Semester 2026',
					date: '2026-02-10',
					isNew: true,
					content: 'The spring semester academic calendar has been updated with revised exam dates and holidays.',
				},
				{
					id: 'acad-ann-2',
					title: 'Mid-Semester Examination Schedule Published',
					date: '2026-02-08',
					isNew: true,
					content: 'Mid-semester examinations will be conducted from March 15-22, 2026. Timetable available on the student portal.',
				},
				{
					id: 'acad-ann-3',
					title: 'Course Registration Deadline Extension',
					date: '2026-02-05',
					isNew: true,
					content: 'The deadline for course registration has been extended to February 18, 2026.',
				},
				{
					id: 'acad-ann-4',
					title: 'New Elective Courses for Spring 2026',
					date: '2026-01-30',
					isNew: false,
					content: 'Five new elective courses have been introduced across departments for the spring semester.',
				},
			],
		},
		'exam-notices': {
			label: 'Examination Notices',
			icon: '📝',
			items: [
				{
					id: 'acad-exam-1',
					title: 'Final Examination Schedule - Spring 2026',
					date: '2026-02-09',
					isNew: true,
					content: 'Final examinations for the spring semester will be held from April 20 to May 5, 2026.',
				},
				{
					id: 'acad-exam-2',
					title: 'Postponed All PG Supplementary Exam Dated: 07.02.2026',
					date: '2026-02-06',
					isNew: true,
					content: 'All postgraduate supplementary examinations scheduled for February 7 have been postponed. New dates will be announced soon.',
				},
				{
					id: 'acad-exam-3',
					title: 'Guidelines for Open Book Examinations',
					date: '2026-02-03',
					isNew: true,
					content: 'Detailed guidelines for conducting open book examinations have been released.',
				},
				{
					id: 'acad-exam-4',
					title: 'Answer Sheet Viewing Request Process',
					date: '2026-01-28',
					isNew: false,
					content: 'Students can now request to view their evaluated answer sheets online within 15 days of result declaration.',
				},
			],
		},
		'faculty-updates': {
			label: 'Faculty Updates',
			icon: '👨‍🏫',
			items: [
				{
					id: 'acad-fac-1',
					title: 'New Faculty Members Joining Spring 2026',
					date: '2026-02-01',
					isNew: true,
					content: 'We are pleased to welcome 12 new faculty members across various departments.',
				},
				{
					id: 'acad-fac-2',
					title: 'Faculty Development Program on Digital Pedagogy',
					date: '2026-01-25',
					isNew: false,
					content: 'A week-long faculty development program will be conducted from February 20-26, 2026.',
				},
			],
		},
		'course-updates': {
			label: 'Course & Syllabus Updates',
			icon: '📖',
			items: [
				{
					id: 'acad-course-1',
					title: 'Revised Syllabus for Computer Science Programs',
					date: '2026-02-07',
					isNew: true,
					content: 'The Computer Science department has updated its curriculum to include advanced AI and machine learning courses.',
				},
				{
					id: 'acad-course-2',
					title: 'New Minor Programs Available',
					date: '2026-01-30',
					isNew: false,
					content: 'Students can now enroll in minor programs in Data Science, Digital Marketing, and Environmental Studies.',
				},
			],
		},
	},

	admissions: {
		announcements: {
			label: 'Admission Updates',
			icon: '🎓',
			items: [
				{
					id: 'adm-ann-1',
					title: 'Admissions Open for Academic Year 2026-27',
					date: '2026-02-10',
					isNew: true,
					content: 'Applications are now open for undergraduate and postgraduate programs. Apply before March 31, 2026.',
				},
				{
					id: 'adm-ann-2',
					title: 'Last Date Extended for CUET (UG) - 2026 Registration',
					date: '2026-02-08',
					isNew: true,
					content: 'The registration deadline for CUET (UG) has been extended to February 25, 2026.',
				},
				{
					id: 'adm-ann-3',
					title: 'Last Date Extended for CUET (PG) 2026 Registration',
					date: '2026-02-08',
					isNew: true,
					content: 'CUET (PG) registration deadline extended to February 28, 2026.',
				},
				{
					id: 'adm-ann-4',
					title: 'Merit List for First Round of Admissions',
					date: '2026-02-05',
					isNew: true,
					content: 'The first merit list has been published. Selected candidates must complete document verification by February 15, 2026.',
				},
			],
		},
		'entrance-exams': {
			label: 'Entrance Examinations',
			icon: '✍️',
			items: [
				{
					id: 'adm-exam-1',
					title: 'University Entrance Test Schedule Announced',
					date: '2026-02-09',
					isNew: true,
					content: 'The entrance examination will be held on March 20, 2026. Admit cards will be available from March 10.',
				},
				{
					id: 'adm-exam-2',
					title: 'Sample Papers and Previous Year Questions',
					date: '2026-02-01',
					isNew: true,
					content: 'Sample papers and previous year question papers are now available on the admissions portal.',
				},
			],
		},
		'counseling': {
			label: 'Counseling & Selection',
			icon: '💬',
			items: [
				{
					id: 'adm-coun-1',
					title: 'First Round Counseling Schedule',
					date: '2026-02-10',
					isNew: true,
					content: 'First round of counseling will be held from February 25-28, 2026. Candidates must bring all original documents.',
				},
				{
					id: 'adm-coun-2',
					title: 'Document Verification Guidelines',
					date: '2026-02-07',
					isNew: true,
					content: 'Complete list of documents required for verification is now available on the website.',
				},
			],
		},
		'scholarships': {
			label: 'Scholarships & Financial Aid',
			icon: '💰',
			items: [
				{
					id: 'adm-sch-1',
					title: 'Merit Scholarship Application Process',
					date: '2026-02-08',
					isNew: true,
					content: 'Applications for merit-based scholarships are now open. Deadline: February 28, 2026.',
				},
				{
					id: 'adm-sch-2',
					title: 'Fee Waiver Schemes for SC/ST/OBC Students',
					date: '2026-02-05',
					isNew: true,
					content: 'Information about government fee waiver schemes and application procedures.',
				},
			],
		},
	},

	research: {
		announcements: {
			label: 'Research Announcements',
			icon: '🔬',
			items: [
				{
					id: 'res-ann-1',
					title: 'Ph.D. admission List (DET-Dec\'2025) at IET',
					date: '2026-02-09',
					isNew: true,
					content: 'The list of selected candidates for Ph.D. admission through DET December 2025 has been published.',
				},
				{
					id: 'res-ann-2',
					title: 'Notice for RAC (Interview) for Admission in Ph.D. (Journalism & Mass Communication)',
					date: '2026-02-08',
					isNew: true,
					content: 'Interview schedule for Ph.D. admission in Journalism & Mass Communication department.',
				},
				{
					id: 'res-ann-3',
					title: 'Reschedule Notice for RAC (Interview) for Admission in Ph.D. (Mathematics)',
					date: '2026-02-07',
					isNew: true,
					content: 'The interview for Ph.D. admission in Mathematics has been rescheduled to February 18, 2026.',
				},
				{
					id: 'res-ann-4',
					title: 'Notice for RAC (Interview) for Ph.D. Admission in LAW',
					date: '2026-02-06',
					isNew: true,
					content: 'Research Admission Committee interview for Law Ph.D. program scheduled for February 20, 2026.',
				},
			],
		},
		'funding': {
			label: 'Research Funding & Grants',
			icon: '💵',
			items: [
				{
					id: 'res-fund-1',
					title: 'Seed Money Grant Applications Open',
					date: '2026-02-10',
					isNew: true,
					content: 'Faculty members can apply for seed money grants up to ₹5 lakhs for innovative research projects.',
				},
				{
					id: 'res-fund-2',
					title: 'External Funding Opportunities from DST',
					date: '2026-02-05',
					isNew: true,
					content: 'Department of Science and Technology announces new funding schemes for research projects.',
				},
				{
					id: 'res-fund-3',
					title: 'Industry Collaboration Grants',
					date: '2026-01-28',
					isNew: false,
					content: 'Applications invited for industry-sponsored research projects.',
				},
			],
		},
		'publications': {
			label: 'Publications & Conferences',
			icon: '📄',
			items: [
				{
					id: 'res-pub-1',
					title: 'International Conference on AI and Machine Learning',
					date: '2026-02-08',
					isNew: true,
					content: 'Call for papers for the International Conference to be held on April 15-17, 2026.',
				},
				{
					id: 'res-pub-2',
					title: 'University Research Journal - New Issue',
					date: '2026-02-01',
					isNew: true,
					content: 'The latest issue of the university research journal is now available online.',
				},
			],
		},
		'facilities': {
			label: 'Research Facilities & Labs',
			icon: '🔭',
			items: [
				{
					id: 'res-fac-1',
					title: 'New High-Performance Computing Lab Inaugurated',
					date: '2026-02-09',
					isNew: true,
					content: 'State-of-the-art HPC lab with 100+ workstations now available for research scholars.',
				},
				{
					id: 'res-fac-2',
					title: 'Biotechnology Research Center Equipment Upgrade',
					date: '2026-01-30',
					isNew: false,
					content: 'The biotech research center has been equipped with advanced genomics and proteomics equipment.',
				},
			],
		},
	},

	'student-affairs': {
		announcements: {
			label: 'Student Notices',
			icon: '👥',
			items: [
				{
					id: 'std-ann-1',
					title: 'Notice Regarding Student Participation in Youth Festival Program 2026',
					date: '2026-02-10',
					isNew: true,
					content: 'All students interested in participating in the national youth festival should register by February 20, 2026.',
				},
				{
					id: 'std-ann-2',
					title: 'Student Council Elections - Nomination Process',
					date: '2026-02-08',
					isNew: true,
					content: 'Nominations for student council positions are open from February 12-15, 2026.',
				},
				{
					id: 'std-ann-3',
					title: 'Annual Cultural Fest - Registrations Open',
					date: '2026-02-05',
					isNew: true,
					content: 'Register your team for the annual cultural fest scheduled for March 10-12, 2026.',
				},
			],
		},
		'scholarships': {
			label: 'Scholarships & Financial Support',
			icon: '🎯',
			items: [
				{
					id: 'std-sch-1',
					title: 'National Scholarship Portal - Apply Now',
					date: '2026-02-09',
					isNew: true,
					content: 'Students can apply for various central government scholarships through NSP. Last date: February 28, 2026.',
				},
				{
					id: 'std-sch-2',
					title: 'Emergency Financial Assistance Program',
					date: '2026-02-03',
					isNew: true,
					content: 'Students facing financial difficulties can apply for emergency assistance through the Dean of Student Affairs.',
				},
			],
		},
		'hostel': {
			label: 'Hostel & Accommodation',
			icon: '🏘️',
			items: [
				{
					id: 'std-host-1',
					title: 'New Hostel Block Inauguration',
					date: '2026-02-10',
					isNew: true,
					content: 'A new hostel block with 200 rooms will be inaugurated on February 15, 2026.',
				},
				{
					id: 'std-host-2',
					title: 'Hostel Fee Payment Deadline',
					date: '2026-02-07',
					isNew: true,
					content: 'All hostel residents must pay their semester fees by February 20, 2026.',
				},
				{
					id: 'std-host-3',
					title: 'Mess Menu Revision',
					date: '2026-02-01',
					isNew: false,
					content: 'The hostel mess menu has been updated based on student feedback.',
				},
			],
		},
		'clubs': {
			label: 'Clubs & Activities',
			icon: '🎭',
			items: [
				{
					id: 'std-club-1',
					title: 'Robotics Club Recruitment Drive',
					date: '2026-02-08',
					isNew: true,
					content: 'Robotics club is recruiting new members. Orientation session on February 14, 2026.',
				},
				{
					id: 'std-club-2',
					title: 'Photography Exhibition by Arts Club',
					date: '2026-02-05',
					isNew: true,
					content: 'Annual photography exhibition will be held from February 18-22, 2026.',
				},
			],
		},
		'sports': {
			label: 'Sports & Recreation',
			icon: '⚽',
			items: [
				{
					id: 'std-sport-1',
					title: 'Inter-Department Sports Championship',
					date: '2026-02-10',
					isNew: true,
					content: 'Annual sports championship from March 1-7, 2026. Team registrations open now.',
				},
				{
					id: 'std-sport-2',
					title: 'Yoga and Meditation Sessions',
					date: '2026-02-06',
					isNew: true,
					content: 'Free yoga and meditation sessions every morning at 6:30 AM in the sports complex.',
				},
			],
		},
	},

	facilities: {
		announcements: {
			label: 'Facility Updates',
			icon: '🏛️',
			items: [
				{
					id: 'fac-ann-1',
					title: 'Library Extended Hours During Exam Period',
					date: '2026-02-10',
					isNew: true,
					content: 'The central library will be open 24/7 from March 15 to May 5 during the examination period.',
				},
				{
					id: 'fac-ann-2',
					title: 'New E-Resources Added to Digital Library',
					date: '2026-02-08',
					isNew: true,
					content: 'Access to 10 new international journals and databases has been added to the digital library.',
				},
				{
					id: 'fac-ann-3',
					title: 'Computer Lab Maintenance Schedule',
					date: '2026-02-05',
					isNew: true,
					content: 'Computer Lab 3 will be closed for upgrades from February 12-14, 2026.',
				},
			],
		},
		'library': {
			label: 'Library Services',
			icon: '📚',
			items: [
				{
					id: 'fac-lib-1',
					title: 'New Book Arrivals - February 2026',
					date: '2026-02-09',
					isNew: true,
					content: 'Over 500 new books across various disciplines have been added to the library collection.',
				},
				{
					id: 'fac-lib-2',
					title: 'Online Book Renewal System',
					date: '2026-02-03',
					isNew: true,
					content: 'Students can now renew borrowed books online through the library portal.',
				},
			],
		},
		'it-services': {
			label: 'IT Services',
			icon: '💻',
			items: [
				{
					id: 'fac-it-1',
					title: 'Campus-Wide Wi-Fi Upgrade Completed',
					date: '2026-02-08',
					isNew: true,
					content: 'Wi-Fi speed has been increased to 1 Gbps across all campus locations.',
				},
				{
					id: 'fac-it-2',
					title: 'Student Email Migration to New Platform',
					date: '2026-02-05',
					isNew: true,
					content: 'All student emails will be migrated to Microsoft 365 from February 15, 2026.',
				},
			],
		},
		'transport': {
			label: 'Transportation',
			icon: '🚌',
			items: [
				{
					id: 'fac-trans-1',
					title: 'New Bus Routes Added',
					date: '2026-02-10',
					isNew: true,
					content: 'Three new bus routes have been added to improve connectivity with the city.',
				},
				{
					id: 'fac-trans-2',
					title: 'E-Rickshaw Service Within Campus',
					date: '2026-02-01',
					isNew: true,
					content: 'Eco-friendly e-rickshaws now available for intra-campus transportation.',
				},
			],
		},
	},

	placements: {
		announcements: {
			label: 'Placement Notices',
			icon: '💼',
			items: [
				{
					id: 'plc-ann-1',
					title: 'Campus Placement Drive - Spring 2026',
					date: '2026-02-10',
					isNew: true,
					content: 'Major tech companies including Google, Microsoft, and Amazon will be visiting campus for placements.',
				},
				{
					id: 'plc-ann-2',
					title: 'Pre-Placement Talk by Industry Leaders',
					date: '2026-02-08',
					isNew: true,
					content: 'CEOs from top companies will conduct pre-placement talks on February 20, 2026.',
				},
				{
					id: 'plc-ann-3',
					title: 'Placement Statistics 2025-26',
					date: '2026-02-05',
					isNew: true,
					content: 'Highest package: ₹45 LPA | Average package: ₹12 LPA | 95% placement rate.',
				},
			],
		},
		'training': {
			label: 'Training Programs',
			icon: '📊',
			items: [
				{
					id: 'plc-train-1',
					title: 'Resume Building Workshop',
					date: '2026-02-09',
					isNew: true,
					content: 'Free workshop on creating effective resumes and cover letters on February 15, 2026.',
				},
				{
					id: 'plc-train-2',
					title: 'Mock Interview Sessions',
					date: '2026-02-07',
					isNew: true,
					content: 'Practice interviews with industry professionals scheduled throughout February.',
				},
				{
					id: 'plc-train-3',
					title: 'Coding Bootcamp for Final Year Students',
					date: '2026-02-03',
					isNew: true,
					content: 'Intensive 2-week coding bootcamp to prepare for technical interviews.',
				},
			],
		},
		'companies': {
			label: 'Recruiting Companies',
			icon: '🏢',
			items: [
				{
					id: 'plc-comp-1',
					title: 'New Partnership with Top MNCs',
					date: '2026-02-10',
					isNew: true,
					content: 'University signs placement partnership agreements with 15 new multinational companies.',
				},
				{
					id: 'plc-comp-2',
					title: 'Startup Hiring Drive',
					date: '2026-02-06',
					isNew: true,
					content: 'Leading startups offering exciting roles and equity options to graduating students.',
				},
			],
		},
		'internships': {
			label: 'Internships',
			icon: '🎓',
			items: [
				{
					id: 'plc-intern-1',
					title: 'Summer Internship Program 2026',
					date: '2026-02-09',
					isNew: true,
					content: 'Applications open for summer internships across 100+ companies. Apply by February 25, 2026.',
				},
				{
					id: 'plc-intern-2',
					title: 'Research Internships at ISRO',
					date: '2026-02-05',
					isNew: true,
					content: 'ISRO offers research internship opportunities for engineering students.',
				},
			],
		},
	},

	examinations: {
		announcements: {
			label: 'Exam Notifications',
			icon: '📋',
			items: [
				{
					id: 'exam-ann-1',
					title: 'Semester End Examination Schedule Published',
					date: '2026-02-10',
					isNew: true,
					content: 'Final semester examinations will commence from April 20, 2026. Download timetable from student portal.',
				},
				{
					id: 'exam-ann-2',
					title: 'Admit Card Download - Spring 2026',
					date: '2026-02-08',
					isNew: true,
					content: 'Admit cards for mid-semester exams are now available for download.',
				},
				{
					id: 'exam-ann-3',
					title: 'Guidelines for Online Proctored Exams',
					date: '2026-02-06',
					isNew: true,
					content: 'Detailed instructions for students appearing in online proctored examinations.',
				},
			],
		},
		'results': {
			label: 'Results & Grades',
			icon: '🎯',
			items: [
				{
					id: 'exam-res-1',
					title: 'Fall Semester 2025 Results Declared',
					date: '2026-02-09',
					isNew: true,
					content: 'Results for fall semester 2025 are now available. Check your grades on the student portal.',
				},
				{
					id: 'exam-res-2',
					title: 'Grade Card Download Process',
					date: '2026-02-07',
					isNew: true,
					content: 'Students can download their grade cards from the examination portal using their credentials.',
				},
			],
		},
		'revaluation': {
			label: 'Revaluation & Review',
			icon: '🔄',
			items: [
				{
					id: 'exam-reval-1',
					title: 'Revaluation Application Deadline',
					date: '2026-02-10',
					isNew: true,
					content: 'Last date to apply for answer sheet revaluation is February 22, 2026. Fee: ₹500 per paper.',
				},
				{
					id: 'exam-reval-2',
					title: 'Answer Sheet Photocopy Request',
					date: '2026-02-05',
					isNew: true,
					content: 'Students can request photocopies of their evaluated answer sheets within 15 days of result declaration.',
				},
			],
		},
		'supplementary': {
			label: 'Supplementary Exams',
			icon: '📝',
			items: [
				{
					id: 'exam-supp-1',
					title: 'Supplementary Examination Schedule',
					date: '2026-02-08',
					isNew: true,
					content: 'Supplementary exams for failed students will be held from March 10-20, 2026.',
				},
				{
					id: 'exam-supp-2',
					title: 'Exam Form Submission for Supplementary',
					date: '2026-02-03',
					isNew: true,
					content: 'Submit exam forms for supplementary examinations by February 15, 2026.',
				},
			],
		},
	},
};