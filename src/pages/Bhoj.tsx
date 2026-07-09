import React from 'react';
import logo from '../assets/logo_bhoj.png';

const ExternalIcon = () => (
	<svg
		className="w-4 h-4"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="1.8"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
		<polyline points="15 3 21 3 21 9" />
		<line x1="10" y1="14" x2="21" y2="3" />
	</svg>
);

const Bhoj = () => {
	return (
		<div
			className="min-h-screen"
			style={{
				background: 'linear-gradient(160deg,#fff8ee 0%,#fdf3d8 55%,#fff 100%)',
				fontFamily: "'Georgia', serif",
			}}
		>
			{/* ── Hero Banner ── */}
			<div
				className="relative py-16  flex items-center justify-center overflow-hidden"
				style={{ background: 'linear-gradient(135deg,#753300 0%,#9a4a10 100%)' }}
			>
				{/* diagonal pattern */}
				<div
					className="absolute inset-0 opacity-10"
					style={{
						backgroundImage: `repeating-linear-gradient(45deg,rgba(229,190,16,.5) 0,rgba(229,190,16,.5) 1px,transparent 0,transparent 50%)`,
						backgroundSize: '20px 20px',
					}}
				/>
				{/* gold bottom border */}
				<div
					className="absolute bottom-0 left-0 right-0 h-[3px]"
					style={{ background: 'linear-gradient(90deg,transparent,#e5be10,transparent)' }}
				/>

				<h1
					className="relative z-10 font-black tracking-wide"
					style={{
						fontFamily: "'Georgia', serif",
						fontSize: 'clamp(28px,6vw,48px)',
						background: 'linear-gradient(90deg,#e5be10,#fdf8ee,#e5be10)',
						WebkitBackgroundClip: 'text',
						WebkitTextFillColor: 'transparent',
						backgroundClip: 'text',
					}}
				>
					Bhoj
				</h1>
			</div>

			{/* ── Main Content ── */}
			<div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
				<div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-12">
					{/* ── Logo ── */}
					<div className="flex-shrink-0 flex flex-col items-center gap-4 w-full max-w-[280px] md:max-w-[300px]">
						<div
							className="w-full rounded-2xl p-2 flex items-center justify-center"
							style={{
								aspectRatio: '4/3',
								background: '#fdf8ee',
								border: '1.5px solid rgba(229,190,16,0.30)',
								boxShadow: '0 4px 24px rgba(117,51,0,0.10)',
							}}
						>
							<img
								src={logo}
								alt="Bhoj University Logo"
								className="w-full h-full object-cover rounded-xl"
								onError={(e) => {
									const target = e.target as HTMLElement;
									target.style.display = 'none';

									const next = target.nextElementSibling as HTMLElement;
									if (next) next.style.display = 'flex';
								}}
							/>
							{/* Fallback */}
							<div
								className="w-full h-full rounded-xl items-center justify-center"
								style={{ display: 'none', background: 'linear-gradient(135deg,#753300,#9a4a10)' }}
							>
								<span
									style={{
										fontFamily: 'Georgia,serif',
										fontSize: 40,
										fontWeight: 900,
										color: '#e5be10',
									}}
								>
									BU
								</span>
							</div>
						</div>

						<div className="text-center">
							<p
								className="text-xs font-bold uppercase tracking-widest"
								style={{ color: '#753300', letterSpacing: '0.18em' }}
							>
								Est. 1991
							</p>
							<p className="text-xs mt-1" style={{ color: '#b08060' }}>
								Bhopal, Madhya Pradesh
							</p>
						</div>
					</div>

					{/* ── Text Content ── */}
					<div className="flex-1 min-w-0">
						{/* Accent line + heading */}
						<div className="flex items-center gap-3 mb-5">
							<div
								className="w-1 rounded-full flex-shrink-0"
								style={{ height: 32, background: 'linear-gradient(180deg,#753300,#e5be10)' }}
							/>
							<h2
								className="font-bold leading-snug"
								style={{
									fontFamily: 'Georgia,serif',
									fontSize: 'clamp(15px,2.5vw,19px)',
									color: '#3a1a00',
									margin: 0,
								}}
							>
								Madhya Pradesh Bhoj (Open) University
							</h2>
						</div>

						<p
							className="leading-relaxed mb-5"
							style={{ fontSize: 'clamp(13.5px,1.8vw,15px)', color: '#4a2000', lineHeight: 1.78 }}
						>
							Bhoj University was formed in 1991 under an act by the state legislature. This university
							aims to spread and promote higher education among the underprivileged and has set up study
							centres in remote rural areas. It has collaboration with institutes like the Rehabilitation
							Council of India, Indian Institute of Tourism and Travel Management and Indian Institute of
							Material Management, etc.
						</p>

						<p
							className="leading-relaxed mb-8"
							style={{ fontSize: 'clamp(13.5px,1.8vw,15px)', color: '#4a2000', lineHeight: 1.78 }}
						>
							The university aims to provide easily accessible system of teaching and learning through
							education inputs like practical classes, distance teaching, satellite communication
							teaching, etc. Bhoj University gives special emphasis to target groups of learners coming
							from rural areas and especially those with disability.
						</p>

						{/* Stat pills */}
						<div className="flex flex-wrap gap-3">
							{[
								{ label: 'Established', value: '1991' },
								{ label: 'Mode', value: 'Open University' },
								{ label: 'Location', value: 'Bhopal, MP' },
								{ label: 'Type', value: 'State University' },
							].map((stat) => (
								<div
									key={stat.label}
									className="flex flex-col px-4 py-2.5 rounded-xl"
									style={{ background: '#fdf8ee', border: '1.5px solid rgba(229,190,16,0.28)' }}
								>
									<span
										className="text-xs uppercase tracking-wider"
										style={{ color: '#b08060', letterSpacing: '0.12em' }}
									>
										{stat.label}
									</span>
									<span
										className="text-sm font-bold mt-0.5"
										style={{ color: '#753300', fontFamily: 'Georgia,serif' }}
									>
										{stat.value}
									</span>
								</div>
							))}
						</div>
					</div>
				</div>

				{/* ── Gold divider ── */}
				<div
					className="my-10 h-[2px] border-none rounded-full"
					style={{
						background:
							'linear-gradient(90deg,transparent,#753300 25%,#e5be10 50%,#753300 75%,transparent)',
					}}
				/>

				{/* ── Collaboration strip ── */}
				<div
					className="rounded-2xl p-6"
					style={{ background: '#fdf8ee', border: '1.5px solid rgba(229,190,16,0.28)' }}
				>
					<p
						className="text-xs font-bold uppercase mb-4"
						style={{ color: '#b08060', letterSpacing: '0.18em' }}
					>
						Key Collaborations
					</p>
					<div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
						{[
							'Rehabilitation Council of India',
							'Indian Institute of Tourism & Travel Management',
							'Indian Institute of Material Management',
						].map((org) => (
							<div
								key={org}
								className="flex items-start gap-3 p-3 rounded-xl"
								style={{
									background: 'rgba(255,248,238,0.9)',
									border: '1px solid rgba(229,190,16,0.22)',
								}}
							>
								<div
									className="flex-shrink-0 rounded-full mt-1.5"
									style={{
										width: 8,
										height: 8,
										background: 'linear-gradient(135deg,#753300,#e5be10)',
									}}
								/>
								<span className="text-sm leading-snug" style={{ color: '#4a2000' }}>
									{org}
								</span>
							</div>
						))}
					</div>
				</div>

				{/* ── Visit website link ── */}
				<div className="mt-6 flex justify-end">
					<a
						href="https://www.bhojvirtualuniversity.com"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-200"
						style={{
							color: '#753300',
							border: '1.5px solid rgba(117,51,0,0.35)',
							background: 'transparent',
						}}
						onMouseEnter={(e) => {
							e.currentTarget.style.background = 'linear-gradient(135deg,#753300,#9a4a10)';
							e.currentTarget.style.color = '#e5be10';
							e.currentTarget.style.borderColor = 'transparent';
						}}
						onMouseLeave={(e) => {
							e.currentTarget.style.background = 'transparent';
							e.currentTarget.style.color = '#753300';
							e.currentTarget.style.borderColor = 'rgba(117,51,0,0.35)';
						}}
					>
						Visit Official Website
						<ExternalIcon />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Bhoj;
