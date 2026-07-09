import React from 'react';

interface TestimonialCardProps {
  name: string;
  role: string;
  image: string;
  quote: string;
}

export default function TestimonialCard({ name, role, image, quote }: TestimonialCardProps) {
  return (
    <div className="bg-blue-900/10 backdrop-blur-lg rounded-2xl p-8 text-black hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 border-2">
      <div className="flex items-center space-x-4 mb-4">
        <img 
          src={image} 
          alt={name} 
          className="w-16 h-16 rounded-full object-cover border-2 border-white/30"
        />
        <div>
          <p className="font-bold text-xl">{name}</p>
          {/* <p className="text-blue-900 text-sm">{role}</p> */}
        </div>
      </div>
      <p className="text-lg leading-relaxed italic">{quote}</p>
    </div>
  );
}