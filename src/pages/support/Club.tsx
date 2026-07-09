import React, { useEffect, useRef } from 'react';

const values = [
	{ title: 'Responsible Citizenship', desc: 'Balancing rights and duties in a carefully calibrated environment.' },
	{
		title: 'Celebrating Diversity',
		desc: 'Embracing regional, linguistic, class, religious and ideological differences.',
	},
	{
		title: 'Confident Womanhood',
		desc: 'Fostering an identity that is poised and ready for 21st century challenges.',
	},
	{ title: 'Caring Community', desc: 'Building bonds that go beyond academics into lifelong fellowship.' },
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
			{ threshold: 0.1 },
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

const Club = () => {
	return (
		<div className="min-h-screen bg-gray-50  pb-20">
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
					<h1 className="text-3xl md:text-4xl font-semibold text-white mb-4 leading-tight">College Club</h1>
					<div className="flex items-center justify-center gap-3">
						<div className="w-10 h-px bg-amber-300" />
						<span className="text-amber-200 text-sm italic">Where Citizenship Meets Community</span>
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
							<h2 className="text-base font-medium text-gray-900">About the Club</h2>
						</div>
						<p className="text-sm text-gray-600 leading-relaxed mb-4">
							Tilak College provides the opportunity for discovery and growth for young aspiring students
							who venture, often from smaller towns, in search of dreams that give them access to
							high-quality education. We provide a safe environment for our girls to pursue their academic
							careers.
						</p>
						<p className="text-sm text-gray-600 leading-relaxed">
							Life in a Club is about stepping into the space of responsible citizenship. The balance
							between rights and duties is carefully calibrated. It is also about being a caring community
							that celebrates diversity across regional, linguistic, class, religious and ideological
							differences — embracing an identity of womanhood that is confident, poised and ready to
							grapple with the challenges and opportunities that await them in this century.
						</p>
					</div>
				</FadeIn>

				{/* Values grid */}
				<FadeIn delay="100ms">
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
						{values.map((v, i) => (
							<div
								key={i}
								className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
							>
								<div className="flex items-center gap-3 mb-3">
									<div className="w-8 h-8 bg-amber-50 rounded-xl flex items-center justify-center flex-shrink-0">
										<span className="text-[#753300] text-xs font-semibold">
											{String(i + 1).padStart(2, '0')}
										</span>
									</div>
									<h3 className="text-sm font-medium text-gray-900">{v.title}</h3>
								</div>
								<p className="text-sm text-gray-500 leading-relaxed pl-11">{v.desc}</p>
							</div>
						))}
					</div>
				</FadeIn>

				{/* Hostel note */}
				<FadeIn delay="150ms">
					<div className="bg-[#753300] rounded-2xl p-8 text-center">
						<p className="text-amber-100 text-sm leading-relaxed max-w-2xl mx-auto">
							The college hostel provides a home away from home for a considerable number of outstation
							students — a place where friendships are forged and futures are shaped.
						</p>
					</div>
				</FadeIn>
			</div>
		</div>
	);
};

export default Club;
