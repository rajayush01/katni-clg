import React from 'react';
import { Users, Heart, Shield, TrendingUp, Eye, Handshake, Star } from 'lucide-react';

const Values: React.FC = () => {
  const values = [
    {
      title: "Access",
      icon: Users,
      description: "As a resource within the reach of all the stakeholders, who need higher education, we are committed to reach the unreached. All have equal access to opportunities and resources, particularly those who are marginalized or excluded or belonging to other minority groups.",
      color: "from-[#e5be10] to-[#e5be10]/80",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80"
    },
    {
      title: "Inclusion",
      icon: Heart,
      description: "Reflection of a culture that seeks, greets, and moves forward with talented minds from different socio-economic backgrounds, irrespective of age, sex, race, ethnicity, language, religion, political or other opinions, national or social origin, as well as persons with disabilities, migrants, indigenous, especially those in vulnerable situations or another status. Respect to all individuals equally by building a foundation of mutual trust, acceptance, understanding, and accountability.",
      color: "from-[#B8860B] to-[#9a7209]",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80"
    },
    {
      title: "Ethics",
      icon: Shield,
      description: "Commitment to the highest moral standards in personal and professional behavior, and always be transparent and accountable in institutional governance, where such an environment maintained that is consistent, open, and honest, which encourages interactive and respectful dialogue.",
      color: "from-[#e5be10] to-[#e5be10]/80",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80"
    },
    {
      title: "Excellence",
      icon: TrendingUp,
      description: "Commitment to a continuous improvement in academic programs and services through teamwork, empowerment, perseverance, and innovation.",
      color: "from-[#B8860B] to-[#9a7209]",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80"
    }
  ];

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-20 px-6  mt-10 md:mt-36">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-[#e5be10] to-[#e5be10]/80 text-white px-12 py-6 rounded-full mb-8">
            <h2 className="text-4xl font-bold">Values</h2>
          </div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            The core principles that guide our commitment to excellence and inclusive education
          </p>
        </div>

        {/* Values Cards */}
        <div className="space-y-12">
          {values.map((value, index) => {
            const Icon = value.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div
                key={value.title}
                className={`grid lg:grid-cols-2 gap-8 items-center ${
                  isEven ? '' : 'lg:grid-flow-dense'
                }`}
              >
                {/* Image Side */}
                <div className={`relative ${isEven ? 'lg:col-start-1' : 'lg:col-start-2'}`}>
                  <div className="relative overflow-hidden rounded-lg shadow-2xl group">
                    <img
                      src={value.image}
                      alt={value.title}
                      className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                    
                    {/* Floating Icon Badge */}
                    <div className={`absolute ${isEven ? 'top-8 right-8' : 'top-8 left-8'} bg-white p-4 rounded-full shadow-xl`}>
                      <Icon className="w-8 h-8 text-[#B8860B]" />
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className={`${isEven ? 'lg:col-start-2' : 'lg:col-start-1'} ${isEven ? '' : 'lg:row-start-1'}`}>
                  <div className="bg-white p-8 rounded-lg shadow-xl border-t-4 border-[#B8860B] hover:shadow-2xl transition-shadow duration-300">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`bg-gradient-to-br ${value.color} p-4 rounded-lg`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold text-[#e5be10]">{value.title}</h3>
                    </div>
                    
                    <div className="prose prose-lg">
                      <p className="text-gray-800 leading-relaxed text-lg">
                        {value.description}
                      </p>
                    </div>

                    {/* Decorative Element */}
                    <div className="mt-6 flex items-center gap-2">
                      <div className="flex-1 h-1 bg-gradient-to-r from-[#B8860B] to-transparent"></div>
                      <Star className="w-5 h-5 text-[#B8860B]" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Values Summary Cards */}
        <div className="mt-20 grid md:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-[#e5be10] to-[#e5be10]/80 text-white p-8 rounded-lg text-center transform hover:scale-105 transition-transform duration-300 shadow-lg">
            <Users className="w-12 h-12 mx-auto mb-4" />
            <h4 className="text-xl font-bold mb-2">Access</h4>
            <p className="text-sm text-gray-200">Reaching the unreached</p>
          </div>
          
          <div className="bg-gradient-to-br from-[#B8860B] to-[#9a7209] text-white p-8 rounded-lg text-center transform hover:scale-105 transition-transform duration-300 shadow-lg">
            <Heart className="w-12 h-12 mx-auto mb-4" />
            <h4 className="text-xl font-bold mb-2">Inclusion</h4>
            <p className="text-sm text-gray-200">Embracing diversity</p>
          </div>
          
          <div className="bg-gradient-to-br from-[#e5be10] to-[#e5be10]/80 text-white p-8 rounded-lg text-center transform hover:scale-105 transition-transform duration-300 shadow-lg">
            <Shield className="w-12 h-12 mx-auto mb-4" />
            <h4 className="text-xl font-bold mb-2">Ethics</h4>
            <p className="text-sm text-gray-200">Highest moral standards</p>
          </div>
          
          <div className="bg-gradient-to-br from-[#B8860B] to-[#9a7209] text-white p-8 rounded-lg text-center transform hover:scale-105 transition-transform duration-300 shadow-lg">
            <TrendingUp className="w-12 h-12 mx-auto mb-4" />
            <h4 className="text-xl font-bold mb-2">Excellence</h4>
            <p className="text-sm text-gray-200">Continuous improvement</p>
          </div>
        </div>

        {/* Core Values Statement */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-gray-50 to-white border-l-4 border-[#e5be10] rounded-lg p-10 shadow-lg">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="bg-[#B8860B] p-4 rounded-full">
                  <Handshake className="w-10 h-10 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#e5be10] mb-4">Our Commitment to You</h3>
                <p className="text-gray-800 text-lg leading-relaxed">
                  These values are not just words on a page—they represent our unwavering commitment to creating an educational environment that is accessible, inclusive, ethical, and excellent. Every decision we make, every program we develop, and every interaction we have is guided by these fundamental principles. Together, we build a foundation of trust, mutual respect, and shared growth that empowers learners to become responsible global citizens.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <div className="mt-16 text-center">
          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
              <Eye className="w-64 h-64 text-[#e5be10]" />
            </div>
            <div className="relative bg-white border-4 border-[#B8860B] rounded-lg p-12 max-w-4xl mx-auto">
              <div className="text-6xl text-[#B8860B] mb-4">"</div>
              <p className="text-2xl font-semibold text-[#e5be10] mb-4 italic">
                Building bridges to education, one learner at a time
              </p>
              <p className="text-lg text-gray-700">
                Through our core values, we create pathways to success for all
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;