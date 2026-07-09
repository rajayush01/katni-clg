import React from 'react';

interface UniversitySongSectionProps {
  videoId?: string;
  title?: string;
  description?: string;
}

const UniversitySongs: React.FC<UniversitySongSectionProps> = ({
  videoId = 'SnDQjCKGKRg',
  title = 'Our University Song',
  description = 'Experience the spirit and pride of our institution through our cherished university song.'
}) => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#e5be10] mb-4">
            {title}
          </h2>
          <div className="w-24 h-1 bg-[#B8860B] mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="relative w-full max-w-4xl mx-auto">
          <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-2xl border-4 border-[#B8860B]">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={`https://www.youtube.com/embed/${videoId}`}
              title="University Song"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 italic">
            "A melody that unites generations of scholars and leaders"
          </p>
        </div>
      </div>
    </section>
  );
};

export default UniversitySongs;