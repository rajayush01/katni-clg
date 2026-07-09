import React from 'react';

export default function CTASection() {
  return (
    <section id="admissions" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600&h=800&fit=crop&auto=format" 
          alt="University Campus" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 to-purple-900/95"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
          Ready to Begin Your Journey?
        </h2>
        <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
          Take the first step towards a transformative education. Join thousands of students who chose excellence.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-indigo-600 px-8 py-4 rounded-full font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300">
            Apply for Admission
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all duration-300">
            Download Prospectus
          </button>
        </div>
      </div>
    </section>
  );
}