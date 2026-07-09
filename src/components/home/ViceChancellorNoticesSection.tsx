import React, { useState } from 'react';
import { ExternalLink, Bell, ChevronRight, Quote, Calendar, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import vc from '../../assets/vc.jpg';

interface Notice {
	id: number;
	title: string;
	date: string;
	link: string;
	isNew?: boolean;
}

const notices: Notice[] = [
	{
		id: 1,
		title: 'Academic Calendar 2023-24 Released',
		date: '15 March 2023',
		link: '/notices/academic-calendar-2023',
		isNew: true,
	},
	{
		id: 2,
		title: 'Final Examination Schedule - May 2023',
		date: '10 March 2023',
		link: '/notices/exam-schedule-may-2023',
		isNew: true,
	},
	{
		id: 3,
		title: 'Summer Internship Program Registration',
		date: '05 March 2023',
		link: '/notices/summer-internship-2023',
	},
	{
		id: 4,
		title: 'Research Paper Submission Deadline Extended',
		date: '01 March 2023',
		link: '/notices/research-paper-deadline',
	},
	{
		id: 5,
		title: 'Campus Recruitment Drive - TCS & Infosys',
		date: '25 February 2023',
		link: '/notices/campus-recruitment-feb-2023',
	},
];

export default function ViceChancellorNoticesSection() {
	const [hoveredNotice, setHoveredNotice] = useState<number | null>(null);

	return (
		<section className="relative md:max-h-screen py-6 sm:py-1 border border-gray-200 rounded-xl shadow-xl mb-10">
			{/* Vice-Chancellor Section - Full Width Banner Style */}
			<div className="relative mb-2 sm:mb-3 overflow-hidden">
				{/* Background with Diagonal Split */}
				<div className="absolute inset-0 bg-white"></div>
				<div className="absolute inset-0 opacity-10" style={{
					backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.05) 10px, rgba(255,255,255,.05) 20px)`
				}}></div>
				
				<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
					<div className="grid lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
						{/* Left Side - Image with Unique Frame */}
						

						{/* Right Side - Content */}
						<div className="lg:col-span-8 text-white space-y-4 sm:space-y-6">
							{/* Small Label */}
							<div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/20">
								<TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-[#4a90c8]" />
								<span className="text-xs sm:text-sm font-semibold text-black/90">From the Vice-Chancellor's Desk</span>
							</div>

							{/* Name and Title */}
							<div>
								<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-2 tracking-tight">Dr. Milind Dattatray Dandekar</h2>
								<div className="flex items-center gap-2 sm:gap-3 text-lg sm:text-xl text-[#e5be10] font-semibold mb-2">
									<div className="w-8 sm:w-12 h-0.5 bg-[#e5be10]"></div>
									<span>Vice-Chancellor</span>
								</div>
								{/* <p className="text-black/70 italic text-xs sm:text-sm">
									(M.Sc., D.Phil., PGD (Chem. & Chem. Engg.) Tokyo Institute of Technology, Japan)
								</p> */}
							</div>

							{/* Message */}
							<div className="relative pl-4 sm:pl-6 border-l-2 border-[#e5be10]/50">
								<p className="text-base sm:text-lg text-black/80 leading-relaxed">
									मध्यप्रदेश भोज (मुक्त) विश्वविद्यालय, भोपाल की ओर से आप सभी का
                  हार्दिक अभिनन्दन! कार्यपालिक के रूप में उच्च शिक्षा के प्रति विश्वविद्यालय
                  के दायित्वों एवं इन दायित्वों के निर्वाहन के लिए अपनी प्रतिबद्धता
                  व्यक्त करता हूँ। एक मुक्त विश्वविद्यालय का मुख्य दायित्व ऐसे
                  विद्यार्थियों को उच्च शिक्षा उपलब्ध कराना है जो सामाजिक के आमाम,
                  रोज़गार की व्यस्तता अथवा किन्हीं अपरिहार्य कारणों से वंचित रह जाते
                  हैं। अतः मध्यप्रदेश भोज (मुक्त) विश्वविद्यालय के प्रमुख उद्देश्य
				  </p>
							</div>

							{/* CTA Button */}
							<Link
								to="/vice-chancellor-message"
								className="inline-flex items-center gap-2 sm:gap-3 bg-[#e5be10] hover:text-black hover:bg-[#2d4fae] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-base font-bold transition-all duration-300 group shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 hover:scale-105"
							>
								<span>Continue Reading</span>
								<ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform" />
							</Link>
						</div>
            <div className="lg:col-span-4">
							<div className="relative max-w-sm mx-auto lg:max-w-none">
								{/* Decorative Background Shape */}
								<div className="absolute -inset-4 bg-gradient-to-br from-[#4a90c8] to-[#5a9fd8] rounded-3xl rotate-3 opacity-20 blur-xl"></div>
								
								{/* Main Image Container */}
								<div className="relative">
									{/* Quote Icon Decoration */}
									<div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-12 h-12 sm:w-16 sm:h-16 bg-[#e5be10] rounded-full flex items-center justify-center shadow-2xl z-10">
										<Quote className="w-6 h-6 sm:w-8 sm:h-8 text-[#B8860B]" fill="currentColor" />
									</div>
									
									<div className="relative overflow-hidden rounded-2xl shadow-2xl border-4 border-white">
										<img 
											src={vc}
											alt="Dr. Milind Dattatray Dandekar"
											className="w-full h-[300px] sm:h-[350px] lg:h-[400px] object-cover"
										/>
										{/* Gradient Overlay */}
										<div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent"></div>
									</div>
									
									{/* Accent Corner Elements */}
									<div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-20 h-20 sm:w-24 sm:h-24 border-4 border-[#4a90c8] rounded-2xl -z-10"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			

			<style>{`
				@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&display=swap');
				
				section {
					font-family: 'Outfit', sans-serif;
				}
			`}</style>
		</section>
	);
}