import React from 'react';
import { BookOpen, Users, Globe, Award, TrendingUp, Target } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white mt-10 md:mt-36">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#e5be10] to-[#e5be10]/80 text-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="w-24 h-1 bg-[#B8860B] mb-6"></div>
          <h1 className="text-6xl font-bold mb-6">About the University</h1>
          <p className="text-2xl text-gray-200 max-w-4xl leading-relaxed">
            Empowering minds, transforming futures through open and distance learning since 1992
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* History Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-16 h-1 bg-[#B8860B] mb-6"></div>
              <h2 className="text-4xl font-bold text-[#e5be10] mb-6">Our Legacy</h2>
              <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                <p>
                  <span className="font-bold text-[#e5be10]">Madhya Pradesh Bhoj (Open) University (MPBOU)</span>, established on October 1, 1992, under the Madhya Pradesh University Act 1991, was inaugurated by President Dr. Shankar Dayal Sharma on October 19, 1992.
                </p>
                <p>
                  The university's emblem draws inspiration from a verse in Raja Bhoj's <span className="font-semibold italic">"Saraswati Kanthabharan"</span>, reflecting our deep connection to India's rich intellectual heritage and commitment to the pursuit of knowledge.
                </p>
                <p>
                  Located in Bhopal, MPBOU is a premier <span className="font-semibold">UGC-recognized State Open University</span> established in 1991, with a vision centered on extending education to underserved regions through the Open and Distance Learning System.
                </p>
              </div>

              {/* Recognition Badges */}
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="bg-gray-50 border-2 border-[#e5be10] px-6 py-3 rounded-lg">
                  <p className="text-sm text-gray-600">Recognized by</p>
                  <p className="font-bold text-[#e5be10]">UGC • DEB • AICTE</p>
                </div>
                <div className="bg-gray-50 border-2 border-[#B8860B] px-6 py-3 rounded-lg">
                  <p className="text-sm text-gray-600">Accredited by</p>
                  <p className="font-bold text-[#B8860B]">NCTE • RCI • AIU</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80"
                alt="University Building"
                className="w-full h-[500px] object-cover rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-8 bg-[#B8860B] text-white p-8 rounded-lg shadow-xl">
                <p className="text-5xl font-bold mb-2">1992</p>
                <p className="text-lg">Year Established</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Network Stats */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#e5be10] mb-4">Our Extensive Network</h2>
          <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
            Spanning across Madhya Pradesh, our infrastructure ensures accessible quality education for all
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-10 rounded-lg shadow-xl border-t-4 border-[#e5be10] transform hover:scale-105 transition-transform duration-300">
              <div className="text-7xl font-bold text-[#e5be10] mb-4">11</div>
              <p className="text-2xl font-semibold text-gray-800 mb-2">Regional Centers</p>
              <p className="text-gray-600">Strategically located across the state</p>
            </div>
            <div className="bg-white p-10 rounded-lg shadow-xl border-t-4 border-[#B8860B] transform hover:scale-105 transition-transform duration-300">
              <div className="text-7xl font-bold text-[#B8860B] mb-4">612</div>
              <p className="text-2xl font-semibold text-gray-800 mb-2">Study Centers</p>
              <p className="text-gray-600">Bringing education to your doorstep</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Objectives */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-24 h-1 bg-[#B8860B] mx-auto mb-6"></div>
            <h2 className="text-4xl font-bold text-[#e5be10] mb-4">Our Core Objectives</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Focused on transforming education and empowering communities
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-lg shadow-lg border-l-4 border-[#e5be10] hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-[#e5be10] p-3 rounded-lg">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#e5be10] mb-3">Promotion of Learning</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Utilizing diverse resources, including cutting-edge technology, for effective knowledge dissemination and innovative pedagogical approaches.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-lg shadow-lg border-l-4 border-[#B8860B] hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-[#B8860B] p-3 rounded-lg">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#e5be10] mb-3">Inclusive Higher Education</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Enhancing educational standards by offering opportunities to various segments of society, breaking barriers to quality education.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-lg shadow-lg border-l-4 border-[#e5be10] hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-[#e5be10] p-3 rounded-lg">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#e5be10] mb-3">Integration of Distance Education</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Incorporating open and distance learning into the state's educational framework, making quality education accessible to all.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-lg shadow-lg border-l-4 border-[#B8860B] hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-[#B8860B] p-3 rounded-lg">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#e5be10] mb-3">Human Resource Development</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Enabling National Education Policy implementation across courses, fostering skilled professionals for tomorrow.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#e5be10] to-[#e5be10]/90 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-1 bg-[#B8860B] mb-6"></div>
              <h2 className="text-4xl font-bold mb-6">Our Vision & Commitment</h2>
              <div className="space-y-6 text-lg leading-relaxed text-gray-100">
                <p>
                  The motto <span className="font-bold text-[#B8860B]">"Embrace, Engage, Enlighten, and Empower"</span> underscores the university's commitment to transformative ICT-based education.
                </p>
                <p>
                  Notably, study centers in rural areas reflect our dedication to uplift underprivileged higher education, ensuring that geography is never a barrier to knowledge.
                </p>
                <p>
                  Aligned with India's demographic potential, the <span className="font-semibold">New Education Policy 2020 (NEP-2020)</span> focuses on innovation, global welfare, and equity. It envisions larger multidisciplinary institutions, increased use of local languages, and necessitates investments in infrastructure and human resources.
                </p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20">
              <h3 className="text-2xl font-bold mb-6 text-[#B8860B]">Key Highlights</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-white/5 p-4 rounded-lg">
                  <Target className="w-6 h-6 text-[#B8860B] flex-shrink-0" />
                  <p>Premier UGC-recognized State Open University</p>
                </div>
                <div className="flex items-center gap-4 bg-white/5 p-4 rounded-lg">
                  <Target className="w-6 h-6 text-[#B8860B] flex-shrink-0" />
                  <p>Focus on underserved and rural regions</p>
                </div>
                <div className="flex items-center gap-4 bg-white/5 p-4 rounded-lg">
                  <Target className="w-6 h-6 text-[#B8860B] flex-shrink-0" />
                  <p>Transformative ICT-based education model</p>
                </div>
                <div className="flex items-center gap-4 bg-white/5 p-4 rounded-lg">
                  <Target className="w-6 h-6 text-[#B8860B] flex-shrink-0" />
                  <p>Commitment to NEP 2020 implementation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEP 2020 Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80"
                alt="Students Learning"
                className="w-full h-[500px] object-cover rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-lg shadow-xl border-4 border-[#B8860B]">
                <div className="flex items-center gap-4">
                  <TrendingUp className="w-12 h-12 text-[#B8860B]" />
                  <div>
                    <p className="text-3xl font-bold text-[#e5be10]">50%</p>
                    <p className="text-sm text-gray-600">GER Target by 2035</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="w-16 h-1 bg-[#B8860B] mb-6"></div>
              <h2 className="text-4xl font-bold text-[#e5be10] mb-6">NEP 2020 & Future Growth</h2>
              <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                <p>
                  <span className="font-bold">NEP 2020</span> restructures Open and Distance Learning (ODL) with a focus on accessible education. While prior policies encouraged state universities, NEP 2020 emphasizes allowing higher education institutions to conduct ODL and online programs.
                </p>
                <p>
                  The policy's multidisciplinary approach highlights the need for educational and vocational courses with credit transfer, preparing students for the evolving job market.
                </p>
                <div className="bg-gradient-to-r from-[#B8860B]/10 to-transparent p-6 rounded-lg border-l-4 border-[#B8860B]">
                  <p className="font-semibold text-[#e5be10] mb-2">Ambitious Growth Target</p>
                  <p>
                    Established ODL institutions like MPBOU can offer qualitative courses, potentially increasing registered ODL students from <span className="font-bold">4.3 million to 10 million</span>, aiming for a <span className="font-bold text-[#B8860B]">50% Gross Enrollment Ratio (GER) by 2035</span>.
                  </p>
                </div>
                <p>
                  Open and Distance Learning Institutions, including MPBOU, are well-positioned to meet these demands cost-effectively, contributing to the core objective of expanding access to quality education for all.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#e5be10] mb-6">Join Our Journey</h2>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Be part of a transformative educational experience that empowers millions across Madhya Pradesh and beyond
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-[#e5be10] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#e5be10]/90 transition-colors shadow-lg">
              Explore Programs
            </button>
            <button className="bg-white text-[#e5be10] border-2 border-[#e5be10] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors shadow-lg">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;