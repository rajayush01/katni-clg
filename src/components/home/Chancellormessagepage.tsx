import React from 'react';
import { ArrowLeft, Mail, Phone, MapPin, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import chancellor from '../../assets/rr1.png';

export default function ChancellorMessagePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 pt-20 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link 
          to="/"
          className="inline-flex items-center space-x-2 text-gray-600 hover:text-[#4a90c8] mb-6 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to Home</span>
        </Link>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#4a90c8] to-[#5a9fd8] rounded-2xl mb-4 shadow-lg">
            <Quote className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            A Word from Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4a90c8] to-[#5a9fd8]">Chancellor</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Insights and vision for excellence in education
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Sidebar - Chancellor Profile */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl shadow-xl p-8 sticky top-24">
              <div className="relative mb-6">
                <div className="w-full aspect-[3/4] bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden shadow-lg ring-4 ring-blue-50">
                  <img 
                    src={chancellor}
                    alt="Mangubhai Patel"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#4a90c8] to-[#5a9fd8] rounded-2xl opacity-10"></div>
              </div>

              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-1">Mangubhai Patel</h2>
                <p className="text-[#4a90c8] font-semibold text-lg mb-2">Chancellor</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Honorary Professor of Academic Union, Oxford, UK
                </p>
              </div>

              <div className="space-y-3 pt-6 border-t border-gray-100">
                <a href="mailto:chancellor@BHOJ.ac.in" className="flex items-center space-x-3 text-gray-600 hover:text-[#4a90c8] transition-colors group">
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                    <Mail className="w-5 h-5 text-[#4a90c8]" />
                  </div>
                  <span className="text-sm">chancellor@BHOJ.ac.in</span>
                </a>
                <div className="flex items-center space-x-3 text-gray-600">
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                    <Phone className="w-5 h-5 text-[#4a90c8]" />
                  </div>
                  <span className="text-sm">+91 755 1234567</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[#4a90c8]" />
                  </div>
                  <span className="text-sm">BHOJ University, Bhopal</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Message Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="p-8 md:p-12">
                {/* Opening Quote */}
                <div className="relative mb-10">
                  <div className="absolute -left-2 -top-2 text-6xl text-[#4a90c8]/10 font-serif">"</div>
                  <p className="text-xl md:text-2xl font-medium text-gray-800 leading-relaxed pl-8 italic">
                    Education is the prerequisite for socio-economic development of the Nation in general and people in particular.
                  </p>
                </div>

                {/* Message Body */}
                <div className="prose prose-lg max-w-none">
                  <div className="text-gray-700 space-y-6 leading-relaxed">
                    <p className="text-lg">
                      Not enough educational facilities are available for the people of this region. Keeping this in view, <strong className="text-gray-900">BHOJ University was established with the vision to provide quality education</strong> and create opportunities for holistic development.
                    </p>

                    <p>
                      At BHOJ University, we are committed to nurturing young minds and preparing them for the challenges of tomorrow. Our institution stands as a beacon of <strong className="text-gray-900">academic excellence, innovation, and research</strong>. We believe in creating an environment where students can explore their potential, develop critical thinking skills, and become responsible global citizens.
                    </p>

                    <p>
                      Our faculty members are dedicated professionals who bring extensive experience and expertise to the classroom. They mentor students not just in academics but also guide them in their personal and professional growth.
                    </p>

                    {/* Highlighted Section */}
                    <div className="relative my-10 p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border-l-4 border-[#4a90c8]">
                      <div className="absolute top-4 right-4 text-4xl text-[#4a90c8]/20">
                        <Quote className="w-10 h-10" />
                      </div>
                      <p className="text-lg text-gray-800 italic leading-relaxed">
                        The university offers state-of-the-art infrastructure, modern laboratories, well-stocked libraries, and excellent sports facilities. We encourage students to participate in extracurricular activities, cultural events, and community service programs to develop a well-rounded personality.
                      </p>
                    </div>

                    <p>
                      As we move forward, we remain committed to our mission of providing <strong className="text-gray-900">accessible, affordable, and quality education to all</strong>. We invite you to be part of this transformative journey and contribute to building a better future for yourself and society.
                    </p>

                    <p>
                      I wish all our students success in their academic pursuits and encourage them to make the most of the opportunities available at BHOJ University.
                    </p>
                  </div>
                </div>

                {/* Signature */}
                <div className="mt-10 pt-8 border-t border-gray-200">
                  <p className="text-gray-600 mb-1">With warm regards,</p>
                  <p className="text-2xl font-bold text-gray-900 mb-1">Mangubhai Patel</p>
                  <p className="text-gray-600">Chancellor, BHOJ University</p>
                </div>

                {/* Call to Action */}
                <div className="mt-10 grid sm:grid-cols-2 gap-4">
                  <Link
                    to="/about"
                    className="group relative overflow-hidden bg-gradient-to-r from-[#4a90c8] to-[#5a9fd8] text-white px-6 py-4 rounded-xl font-semibold text-center transition-all duration-300 hover:shadow-xl hover:scale-105"
                  >
                    <span className="relative z-10">Learn More About Us</span>
                    <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                  </Link>
                  <Link
                    to="/contact"
                    className="border-2 border-[#4a90c8] text-[#4a90c8] px-6 py-4 rounded-xl font-semibold text-center transition-all duration-300 hover:bg-[#4a90c8] hover:text-white hover:shadow-lg hover:scale-105"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}