import React from 'react';
import { Target, Lightbulb, Users, Globe, TrendingUp, Award } from 'lucide-react';

const VisionMission: React.FC = () => {
  const missionPoints = [
    {
      id: 1,
      text: "To build an integrated open education system enabling the learners to attain their career as well as social and national goals.",
      icon: Target
    },
    {
      id: 2,
      text: "To emerge as a knowledge centre through ICT facilities in education delivery processes and academic governance.",
      icon: Lightbulb
    },
    {
      id: 3,
      text: "To attain the global standards of academic practices through research, institutional collaborations and need-based training programs.",
      icon: Globe
    },
    {
      id: 4,
      text: "To make learners competitive and socially responsible citizens by incorporation of humanistic values and vocational skills in academic programs/curriculum.",
      icon: Users
    },
    {
      id: 5,
      text: "To ensure inclusive and equitable quality higher education and promote lifelong learning opportunities to all sections of society.",
      icon: TrendingUp
    }
  ];

  return (
    <section className="bg-white py-20 px-6 mt-10 md:mt-36">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-[#e5be10] to-[#e5be10]/80 text-white px-12 py-6 rounded-full mb-8">
            <h2 className="text-4xl font-bold">Vision & Mission</h2>
          </div>
        </div>

        {/* Vision Section */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Vision Image */}
            <div className="relative order-2 lg:order-1">
              <div className="relative overflow-hidden rounded-lg shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80"
                  alt="Vision - Students collaborating"
                  className="w-full h-[450px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#e5be10]/60 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-white/95 backdrop-blur-sm p-6 rounded-lg">
                    <Award className="w-12 h-12 text-[#B8860B] mb-3" />
                    <p className="text-sm font-semibold text-[#e5be10]">Excellence in Open & Distance Education</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Vision Content */}
            <div className="order-1 lg:order-2">
              <div className="mb-6">
                <div className="w-16 h-1 bg-[#B8860B] mb-4"></div>
                <h3 className="text-4xl font-bold text-[#e5be10] mb-2">Vision</h3>
              </div>
              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-lg border-l-4 border-[#B8860B] shadow-lg">
                <p className="text-gray-800 text-lg leading-relaxed font-medium">
                  To be an institution of excellence in open and distance education (ODL) through its academic philosophy, inspirational ways of education delivery and systematic interventions in teaching-learning processes to serve the societal needs and sustainable development goals for making future global citizens.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div>
          <div className="text-center mb-12">
            <div className="w-24 h-1 bg-[#B8860B] mx-auto mb-6"></div>
            <h3 className="text-4xl font-bold text-[#e5be10] mb-4">Mission</h3>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our strategic roadmap to transform education and empower learners across all segments of society
            </p>
          </div>

          {/* Mission Points Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {missionPoints.map((point) => {
              const Icon = point.icon;
              return (
                <div
                  key={point.id}
                  className="bg-white border-2 border-gray-100 hover:border-[#B8860B] rounded-lg p-6 transition-all duration-300 hover:shadow-xl group"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="bg-gradient-to-br from-[#e5be10] to-[#e5be10]/80 group-hover:from-[#B8860B] group-hover:to-[#B8860B]/80 text-white w-12 h-12 rounded-lg flex items-center justify-center font-bold text-xl transition-colors duration-300">
                        {point.id}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <Icon className="w-6 h-6 text-[#B8860B]" />
                      </div>
                      <p className="text-gray-800 leading-relaxed">{point.text}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mission Image Showcase */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80"
                alt="Integrated Education System"
                className="w-full h-[250px] object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#e5be10]/90 to-transparent flex items-end p-6">
                <p className="text-white font-semibold">Integrated Education System</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80"
                alt="ICT-Enabled Learning"
                className="w-full h-[250px] object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#e5be10]/90 to-transparent flex items-end p-6">
                <p className="text-white font-semibold">ICT-Enabled Learning</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img
                src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&q=80"
                alt="Global Standards"
                className="w-full h-[250px] object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#e5be10]/90 to-transparent flex items-end p-6">
                <p className="text-white font-semibold">Global Standards</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Quote */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#e5be10] to-[#e5be10]/90 text-white py-12 px-8 rounded-lg shadow-2xl">
            <p className="text-2xl font-bold mb-4 italic">
              "Embrace, Engage, Enlighten, and Empower"
            </p>
            <p className="text-lg text-gray-200">
              Our commitment to transformative education that shapes future global citizens
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;