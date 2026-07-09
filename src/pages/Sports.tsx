import React from "react";
import sport from '../assets/images/sport.png';
const Sports = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fff8ee] via-[#fdf3d8] to-white">

      {/* HERO */}
      <div className="py-20 text-center bg-gradient-to-r from-[#753300] via-[#b36000] to-orange-800">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Sports
        </h1>
        <div className="mt-4 mx-auto w-28 h-1 bg-gradient-to-r from-[#753300] to-[#e5be10] rounded-full"></div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* IMAGE */}
        <div className="overflow-hidden rounded-2xl shadow-lg border border-[rgba(229,190,16,0.25)]">
          <img
            src={sport}
            alt="Sports"
            className="w-full h-[300px] md:h-[420px] object-cover hover:scale-105 transition duration-500"
          />
        </div>

        {/* INTRO CARD */}
        <div className="mt-10 bg-[#fdf8ee] border border-[rgba(229,190,16,0.25)] rounded-2xl p-8 shadow-md">

          <h2 className="text-3xl font-bold text-[#753300] mb-4">
            SPORTS
          </h2>

          <p className="text-[#4a2000] leading-relaxed mb-4">
            A healthy body is a prerequisite for a healthy mind. So we provide
            facilities for athletic events, indoor and outdoor games, and other
            recreational activities. These sports activities keep our students
            healthy and in good spirits and help them grow strong and fit through
            the college years; that is, we create a balanced atmosphere of
            academic, cultural, and sports activities for the overall personality
            development of the students.
          </p>

          <p className="text-[#4a2000] leading-relaxed mb-4">
            The students are encouraged to compete in a variety of sports events
            and games organized by the college and the university. Their potential
            in these events is utilized to the maximum, and as a result, the
            students bring many laurels to the institution, attaining positions
            in competitions including national, All India Interuniversity,
            West Zone Interuniversity, and M.P. Higher Education State-level events.
          </p>

          <p className="text-[#4a2000] leading-relaxed">
            Government Tilak PG College, Katni, has a regular sports officer to
            promote budding talents in physical education, sports, and games.
            There are a variety of outdoor and indoor games available. Exceptional
            students are provided additional facilities and support, and those
            excelling at national or international levels receive fee concessions
            upon admission.
          </p>
        </div>

        {/* OBJECTIVES */}
        <div className="mt-10 grid md:grid-cols-2 gap-8">

          {/* LEFT - OBJECTIVES */}
          <div className="bg-[#fdf8ee] border border-[rgba(229,190,16,0.25)] rounded-2xl p-6 shadow-md">
            <h3 className="text-2xl font-semibold text-[#3a1a00] mb-4">
              Objectives
            </h3>

            <div className="w-20 h-1 bg-gradient-to-r from-[#753300] to-[#e5be10] mb-6 rounded-full"></div>

            <ul className="space-y-3 text-[#4a2000]">
              <li>• To facilitate students' participation in intercollegiate competitions.</li>
              <li>• To organize sports meets for recognizing athletic talents.</li>
              <li>• To provide facilities for physical and mental fitness.</li>
              <li>• To develop sportsmanship, initiative, and team spirit.</li>
              <li>• To generate awareness of global sporting events.</li>
            </ul>
          </div>

          {/* RIGHT - SPORTS OFFICER */}
          <div className="bg-gradient-to-br from-[#753300] to-[#9a4a10] text-white rounded-2xl p-6 shadow-lg flex flex-col justify-center">

            <h3 className="text-2xl font-semibold mb-4">
              Sports Officer
            </h3>

            <div className="w-20 h-1 bg-gradient-to-r from-[#e5be10] to-white mb-6 rounded-full"></div>

            <p className="text-lg">
              Dr. Raj Kumar
            </p>
            <p className="text-sm opacity-90">
              (Sports Officer)
            </p>

            <p className="mt-3 font-medium">
              📞 +91-8917609351
            </p>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Sports;