import React, { useState } from 'react';
import img1 from "../../assets/bhoj1.jpeg"
import img2 from "../../assets/bhoj2.jpeg"
import img3 from "../../assets/bhoj3.jpeg"



interface EventItem {
  id: number;
  title: string;
  date: string;
  image: string;
  badge?: {
    text: string;
    color: string;
  };
}

const News = () => {
  const [activeTab, setActiveTab] = useState<'webinars' | 'news' | 'events'>('webinars');

  const webinars: EventItem[] = [
    {
      id: 1,
      title: 'Viksit Bharat@2047: Voice of Youth',
      date: '16 December, 2023',
      image: img1,
    },
    {
      id: 2,
      title: 'राष्ट्रीय शिक्षा नीति-2020 और इसके एवं युवा शिक्षा पर भौतिक दृष्टि विशेषज्ञायुक्त के विचार',
      date: '22 July, 2023',
      image: img2,
    },
    {
      id: 3,
      title: 'मध्यप्रदेश भोज (मुक्त) विश्वविद्यालय भोपाल एवं पर्यावरण मंत्रालय के संयुक्त तत्वाधान में',
      date: '22 November, 2022',
      image: img3,
    },
  ];

  const news: EventItem[] = [
    {
      id: 1,
      title: 'M.Ed. Spl.Ed. Semi-Contact Class',
      date: 'Jul 9',
      badge: { text: 'New Updated', color: 'bg-red-500' },
      image: img1,
    },
    {
      id: 2,
      title: 'Application form B.Ed. (Special Education-Distance Education) 2023-25',
      date: 'Jan 12',
      badge: { text: 'New Updated', color: 'bg-red-500' },
      image: img2,
    },
    {
      id: 3,
      title: 'UGC approved programmes from academic year 2023-24, academic session beginning February, 2024 and onwards to Madhya Pradesh Bhoj (Open) University, Bhopal',
      date: 'Jan 12',
      badge: { text: 'New Updated', color: 'bg-red-500' },
      image: img3,
    },
  ];

  const events: EventItem[] = [
    {
      id: 1,
      title: 'Viksit Bharat@2047: Voice of Youth',
      date: '16 December, 2023',
      image: img1,
    },
    {
      id: 2,
      title: 'चार प्रतिभाशाली युवा उर्जा के उपयोग से ही हम देश में ऊर्जा स्वरूप परिवर्तन कर सकते हैं- डॉ प्रेम...',
      date: '26 August, 2023',
      image: img2,
    },
    {
      id: 3,
      title: 'राष्ट्रीय विज्ञान दिवस पर भोज विश्वविद्यालय में समारोह संपन्न।',
      date: '26 August, 2023',
      image: img3,
    },
  ];

  const getActiveData = () => {
    switch (activeTab) {
      case 'webinars':
        return webinars;
      case 'news':
        return news;
      case 'events':
        return events;
      default:
        return webinars;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-gradient-to-br from-gray-50 to-white">
      {/* Tabs Navigation */}
      <div className="flex flex-wrap gap-4 mb-8 border-b-2 border-gray-200">
        <button
          onClick={() => setActiveTab('webinars')}
          className={`relative pb-4 px-6 font-semibold text-lg transition-all duration-300 ${
            activeTab === 'webinars'
              ? 'text-[#e5be10]'
              : 'text-gray-500 hover:text-[#e5be10]'
          }`}
        >
          WEBINARS
          {activeTab === 'webinars' && (
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#B8860B] rounded-t-full"></div>
          )}
        </button>
        <button
          onClick={() => setActiveTab('news')}
          className={`relative pb-4 px-6 font-semibold text-lg transition-all duration-300 ${
            activeTab === 'news'
              ? 'text-[#e5be10]'
              : 'text-gray-500 hover:text-[#e5be10]'
          }`}
        >
          NEWS & UPDATES
          {activeTab === 'news' && (
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#B8860B] rounded-t-full"></div>
          )}
        </button>
        <button
          onClick={() => setActiveTab('events')}
          className={`relative pb-4 px-6 font-semibold text-lg transition-all duration-300 ${
            activeTab === 'events'
              ? 'text-[#e5be10]'
              : 'text-gray-500 hover:text-[#e5be10]'
          }`}
        >
          OUR EVENTS
          {activeTab === 'events' && (
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#B8860B] rounded-t-full"></div>
          )}
        </button>
        <div className="ml-auto pb-4 px-6">
          <button className="text-[#e5be10] hover:text-[#e5be10] font-semibold text-sm uppercase tracking-wide transition-colors duration-300 flex items-center gap-2">
            VIEW ALL
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {getActiveData().map((item, index) => (
          <div
            key={item.id}
            className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-purple-200 transform hover:-translate-y-2"
          >
            <div className="relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#B8860B]"></div>
              
              <div className="flex gap-4 p-6">
                {/* Date Badge */}
                {activeTab === 'news' && (
                  <div className="flex-shrink-0">
                    <div className="bg-gradient-to-br from-amber-400 to-orange-500 text-white rounded-lg p-3 text-center shadow-lg min-w-[60px]">
                      <div className="text-xs font-semibold uppercase mb-1">
                        {item.date.split(' ')[0]}
                      </div>
                      <div className="text-2xl font-bold">
                        {item.date.split(' ')[1]}
                      </div>
                    </div>
                  </div>
                )}

                {/* Image */}
                <div className="flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-24 h-24 object-cover rounded-lg shadow-md group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-gray-800 font-semibold text-sm leading-snug mb-2 line-clamp-3 group-hover:text-[#e5be10] transition-colors duration-300">
                    {item.title}
                  </h3>
                  {activeTab !== 'news' && (
                    <p className="text-gray-500 text-xs flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {item.date}
                    </p>
                  )}
                  {item.badge && (
                    <span className={`inline-block mt-2 ${item.badge.color} text-white text-xs px-3 py-1 rounded-full font-semibold shadow-sm`}>
                      {item.badge.text}
                    </span>
                  )}
                </div>
              </div>

              {/* Hover Effect Bottom Bar */}
              <div className="h-1 bg-[#B8860B] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom View All Link */}
      <div className="text-center mt-10">
        <button className="inline-flex items-center gap-2 bg-gradient-to-r from-[#e5be10] to-[#B8860B] text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
          View All {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default News;