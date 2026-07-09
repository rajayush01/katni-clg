import React, { useState } from 'react';
import img1 from "../../assets/bhojdarshan.png"
import img2 from "../../assets/facebook.png"
import img3 from "../../assets/nep.png"
import img4 from "../../assets/bhojvani.png"
import img5 from "../../assets/Satellite_icon.png"
import img6 from "../../assets/youtube.png"

export default function ImpLinks() {
const [hoveredId, setHoveredId] = useState<string | null>(null);

  const navItems = [
    {
      id: 'bhojdarshan',
      image: img1,
      title: 'Bhojdarshan',
      subtitle: 'An Internet Video Of MPBOU',
    },
    {
      id: 'facebook',
      image: img2,
      title: 'Facebook',
      subtitle: 'Connect With Us',
    },
    {
      id: 'nep2020',
      image: img3,
      title: 'राष्ट्रीय शिक्षा नीति',
      subtitle: '2020',
    },
    {
      id: 'bhojvani',
      image: img4,
      title: 'Bhojvani',
      subtitle: 'An Internet Radio Of MPBOU',
    },
    {
      id: 'bhopal',
      image: img5,
      title: 'भोपाल दुरदर्शन पर',
      subtitle: 'शैक्षिक कार्यक्रम',
    },
    {
      id: 'youtube',
      image: img6,
      title: 'YouTube',
      subtitle: 'Video Content',
    },
  ];

  return (
    <div className="w-full bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Grid View */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-3" style={{ color: '#e5be10' }}>Quick Links</h2>
            <div className="w-24 h-1 mx-auto rounded-full" style={{ background: 'linear-gradient(to right, #e5be10, #B8860B)' }}></div>
            <p className="mt-3" style={{ color: '#e5be10' }}>Explore our educational resources</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {navItems.map((item) => (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group cursor-pointer h-full"
              >
                <div className={`
                  relative bg-white rounded-2xl p-6 shadow-md border-2 h-full flex flex-col
                  transition-all duration-300 ease-out
                  ${hoveredId === item.id ? 'shadow-2xl -translate-y-2 scale-105' : 'hover:shadow-xl'}
                `}
                style={{ borderColor: hoveredId === item.id ? '#B8860B' : '#e5e7eb' }}
                >
                  <div className="flex justify-center mb-4">
                    <div className={`
                      w-20 h-20 rounded-2xl flex items-center justify-center overflow-hidden
                      transition-all duration-300
                      ${hoveredId === item.id ? 'rotate-6 scale-110' : 'group-hover:scale-105'}
                    `}
                    style={{ backgroundColor: hoveredId === item.id ? '#B8860B' : '#e5be10' }}
                    >
                      <img src={item.image} alt={item.title} className="w-16 h-16 object-contain" />
                    </div>
                  </div>

                  <div className="text-center flex-grow flex flex-col justify-center min-h-[60px]">
                    <h3 className="font-bold text-sm mb-1 transition-colors duration-300"
                        style={{ color: '#e5be10' }}>
                      {item.title}
                    </h3>
                    <p className="text-xs leading-tight" style={{ color: '#B8860B' }}>
                      {item.subtitle}
                    </p>
                  </div>

                  <div className={`
                    absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl
                    transition-all duration-300
                    ${hoveredId === item.id ? 'opacity-100' : 'opacity-0'}
                  `}
                  style={{ background: 'linear-gradient(to right, #e5be10, #B8860B)' }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}