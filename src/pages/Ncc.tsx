import React from "react";
import ncc from '../assets/images/ncc.png';
const Ncc = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fff8ee] via-[#fdf3d8] to-white">

      {/* HERO */}
      <div className="py-20 text-center bg-gradient-to-r from-[#753300] via-[#b36000] to-orange-800">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          NCC
        </h1>
        <div className="mt-4 mx-auto w-28 h-1 bg-gradient-to-r from-[#753300] to-[#e5be10] rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* IMAGE */}
        <div className="overflow-hidden rounded-2xl shadow-lg border border-[rgba(229,190,16,0.25)]">
          <img
            src={ncc}
            alt="NCC"
            className="w-full h-[280px] md:h-[420px] object-cover hover:scale-105 transition duration-500"
          />
        </div>

        {/* INTRO */}
        <div className="mt-10 bg-[#fdf8ee] border border-[rgba(229,190,16,0.25)] rounded-2xl p-8 shadow-md">
          <h2 className="text-3xl font-bold text-[#753300] mb-4">
            NATIONAL CADET CORPS (NCC)
          </h2>

          <p className="text-[#4a2000] leading-relaxed mb-4">
            National Cadet Corps aims at developing character and comradeship,
            as well as keenness for service and leadership in youth. It provides
            military training and builds a ready reserve for national emergencies.
          </p>

          <p className="text-[#4a2000] leading-relaxed">
            NCC motivates students through scholarships, medals, and awards.
            Cadets also participate in community development, youth exchange,
            and adventure training programs. NCC activities are guided by
            Associate NCC Officer, Major Sardar Diwakar.
          </p>
        </div>

        {/* N.C.C AT GTC */}
        <div className="mt-10 bg-[#fdf8ee] border border-[rgba(229,190,16,0.25)] rounded-2xl p-6">
          <h3 className="text-2xl font-semibold text-[#3a1a00] mb-3">
            N.C.C at GTC
          </h3>
          <p className="text-[#4a2000]">
            GTC has an Army Wing of the strength of 54 cadets.
          </p>
        </div>

        {/* OBJECTIVES */}
        <div className="mt-10 grid md:grid-cols-2 gap-8">

          <div className="bg-[#fdf8ee] border border-[rgba(229,190,16,0.25)] rounded-2xl p-6">
            <h3 className="text-2xl font-semibold text-[#3a1a00] mb-4">
              Objectives
            </h3>

            <ul className="space-y-3 text-[#4a2000]">
              <li>• Develop character, discipline & leadership</li>
              <li>• Build trained and motivated youth</li>
              <li>• Encourage Armed Forces careers</li>
            </ul>
          </div>

          {/* TRAINING */}
          <div className="bg-gradient-to-br from-[#753300] to-[#9a4a10] text-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">
              Institutional Training
            </h3>

            <p className="text-sm leading-relaxed">
              Drill, Shooting, Physical Fitness, Map Reading, First Aid,
              Flying Training, Camps and National Integration Programs.
            </p>
          </div>

        </div>

        {/* COMMUNITY + ADVENTURE */}
        <div className="mt-10 grid md:grid-cols-2 gap-8">

          <div className="bg-[#fdf8ee] border border-[rgba(229,190,16,0.25)] rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-[#3a1a00] mb-3">
              Community Development
            </h3>
            <p className="text-[#4a2000] text-sm">
              Activities include blood donation, literacy drives, anti-drug
              campaigns, tree plantation, and social awareness initiatives.
            </p>
          </div>

          <div className="bg-[#fdf8ee] border border-[rgba(229,190,16,0.25)] rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-[#3a1a00] mb-3">
              Adventure Training
            </h3>
            <p className="text-[#4a2000] text-sm">
              Trekking, Mountaineering, Para Jumping, Scuba Diving,
              Sailing, Cycling expeditions and more.
            </p>
          </div>

        </div>

        {/* DEFENCE OPPORTUNITIES */}
        <div className="mt-10 bg-[#fdf8ee] border border-[rgba(229,190,16,0.25)] rounded-2xl p-8">

          <h3 className="text-2xl font-semibold text-[#3a1a00] mb-4">
            Opportunities in Defence Forces
          </h3>

          <ul className="space-y-2 text-[#4a2000] text-sm">
            <li>• Army, Navy, Air Force direct entries for NCC cadets</li>
            <li>• Bonus marks in recruitment exams</li>
            <li>• Preference in government & security jobs</li>
            <li>• Eligibility for instructor roles</li>
          </ul>

        </div>

        {/* OFFICER */}
        <div className="mt-10 bg-gradient-to-r from-[#753300] to-[#9a4a10] text-white rounded-2xl p-6 text-center shadow-lg">
          <h3 className="text-xl font-semibold mb-2">
            NCC Programme Officer
          </h3>
          <p className="text-lg">Major Sardar Diwakar</p>
          <p className="text-sm mt-1">📞 +91-9826854306</p>
        </div>

      </div>
    </div>
  );
};

export default Ncc;