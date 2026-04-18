// import React from 'react'
// import CircularText from '../ui/CircularText'

// const About = () => {
//   return (
//     <div>
//       {/* <CircularText
//   text="IB*TECHNOLOGIES*"
//   onHover="speedUp"
//   spinDuration={20}
//   className="custom-class"
// /> */}
//         <h1>About Section</h1>
//         <div></div>
//     </div>
//   )
// }

// export default About

import { Award, Lightbulb, Target, Users } from 'lucide-react';
import React from 'react';
import CircularText from '@/components/ui/CircularText';
import about from '@/assets/about.jpg';

const AboutUs = () => {
	const features = [
		{
			icon: Users,
			title: 'Expert Team',
			description: 'Our skilled professionals bring years of industry experience to deliver exceptional results.',
		},
		{
			icon: Target,
			title: 'Precision Solutions',
			description: 'Tailored approaches that address your specific business challenges and goals.',
		},
		{
			icon: Lightbulb,
			title: 'Innovation Focus',
			description: 'Cutting-edge technology solutions that keep you ahead of the competition.',
		},
		{
			icon: Award,
			title: 'Proven Results',
			description: 'Track record of successful implementations and satisfied clients across industries.',
		},
	];

	return (
		<section id="about-section" className="py-20">
			<div className="container mx-auto px-6 ">
				{/* Circular Text Animation */}
				<div className="text-center mb-16 mt-10">
					<CircularText text="IB*TECHNOLOGIES*" onHover="speedUp" spinDuration={20} className="mb-8" />

					<h2 className="text-5xl md:text-6xl font-bold mb-8">
						<span className="text-gray-900">About</span>{' '}
						<span className="bg-gradient-to-l from-red-300 to-red-500 bg-clip-text text-transparent">
							Bio Palette
						</span>
					</h2>

					<p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
						At Bio Palette, we are passionate about transforming businesses through innovative technology
						solutions. With years of expertise across multiple industries, we deliver comprehensive IT
						services that drive growth, efficiency, and digital transformation.
					</p>
				</div>

				{/* Company Images and Stats */}
				<div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
					<div className="relative">
						{/* Main Company Image Placeholder */}
						<div className="relative bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-8 shadow-2xl">
							<div className="aspect-video rounded-2xl flex items-center justify-center">
								<div className="text-center text-white">
									<img
										src={about}
										alt="about"
										className="hover:scale-105 transition-all duration-700 rounded-lg"
									/>
								</div>
							</div>
						</div>

						{/* Floating Stats */}
						<div className="absolute -top-8 -right-8 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
							<div className="text-center">
								<div className="text-3xl font-bold text-blue-600">25+</div>
								<div className="text-sm text-gray-600">Projects Delivered</div>
							</div>
						</div>

						<div className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
							<div className="text-center">
								<div className="text-3xl font-bold text-green-600">200</div>
								<div className="text-sm text-gray-600">Hour Of Support</div>
							</div>
						</div>
					</div>

					<div className="space-y-8">
						<h3 className="text-4xl font-bold text-gray-900 mb-6">
							Transforming Ideas into Digital Reality
						</h3>

						<p className="text-lg text-gray-600 leading-relaxed">
							Since our inception, we have been committed to delivering excellence in every project. Our
							multidisciplinary approach combines technical expertise with deep industry knowledge to
							create solutions that not only meet current needs but anticipate future challenges.
						</p>

						<p className="text-lg text-gray-600 leading-relaxed">
							From healthcare to finance, agriculture to pharmaceuticals, we understand that each industry
							has unique requirements. Our tailored solutions ensure that technology becomes an enabler of
							growth rather than a complexity.
						</p>

						{/* Key Features Grid */}
						<div className="grid md:grid-cols-2 gap-6 mt-12">
							{features.map((feature, index) => (
								<div
									key={index}
									className="flex items-start space-x-4 p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300"
								>
									<div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
										<feature.icon className="w-6 h-6 text-white" />
									</div>
									<div>
										<h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
										<p className="text-sm text-gray-600">{feature.description}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutUs;
