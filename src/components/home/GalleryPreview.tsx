import React from 'react';
import { useNavigate } from 'react-router-dom';

interface GalleryPreviewProps {
  title?: string;
  subtitle?: string;
}

const GalleryPreview: React.FC<GalleryPreviewProps> = ({
  title = 'Campus Life Gallery',
  subtitle = 'Capturing moments that define our community'
}) => {
  const navigate = useNavigate();

  // Sample images - replace with your actual image URLs
  const previewImages = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800',
      alt: 'Campus Building'
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800',
      alt: 'Students Studying'
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800',
      alt: 'Graduation Ceremony'
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800',
      alt: 'Library Interior'
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?w=800',
      alt: 'Student Activities'
    },
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800',
      alt: 'Campus Landscape'
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#e5be10] mb-4">
            {title}
          </h2>
          <div className="w-24 h-1 bg-[#B8860B] mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {previewImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 aspect-[4/3]"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#e5be10]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-semibold text-lg">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => navigate('/gallery')}
            className="inline-flex items-center px-8 py-4 bg-[#B8860B] text-white font-semibold rounded-lg shadow-lg hover:bg-[#9a7209] hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            <span>See More</span>
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;