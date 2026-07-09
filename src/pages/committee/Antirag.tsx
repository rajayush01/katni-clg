import React from "react";
import rag from '../../assets/images/rag.png';
const Antirag = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fff8ee] via-[#fdf3d8] to-white">

      {/* HERO */}
      <div className="relative py-20 text-center bg-gradient-to-r from-[#753300] via-[#b36000] to-orange-800">
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-wide">
          Anti Ragging Committee
        </h1>

        <div className="mt-4 mx-auto w-32 h-1 bg-gradient-to-r from-[#753300] to-[#e5be10] rounded-full"></div>
      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-6 py-12">

        <div className="bg-[#fdf8ee] border border-[rgba(229,190,16,0.25)] rounded-2xl shadow-lg p-8">

          {/* TOP SECTION (IMAGE + TEXT) */}
          <div className="grid md:grid-cols-2 gap-8 items-start">

            {/* IMAGE */}
            <div className="w-full">
              <img
                src={rag}
                alt="Anti Ragging"
                className="rounded-xl shadow-md w-full object-cover"
              />
            </div>

            {/* TEXT */}
            <div className="text-[#4a2000] space-y-4 leading-relaxed">
              <p>
                Ragging, an academic evil, is strictly prohibited and is not tolerated in any form in the college.
              </p>

              <p>
                Ragging is defined as an act that violates or is perceived to violate an individual student’s dignity.
                If any student is found guilty of ragging or if any complaint is received against any student then
                an offence of ragging may be charged or on independent finding of the college, U.G.C. Regulations on
                curbing the menace of ragging in higher educational institutions 2009 shall be strictly adhered to.
                The College has constituted an Anti-Ragging Committee which monitors the students and deals with complaints, if any.
              </p>

              <p>
                In accordance with U.G.C. Regulation on curbing the menace of ragging in Higher Educational Institutions, 2009,
                an Anti Ragging Team and Anti Ragging Squad have been constituted.
              </p>
            </div>

          </div>

          {/* COMMITTEE LIST */}
          <div className="mt-10">

            <h2 className="text-2xl font-semibold text-[#3a1a00] mb-4">
              Committee
            </h2>

            <div className="w-24 h-1 bg-gradient-to-r from-[#753300] to-[#e5be10] mb-6 rounded-full"></div>

            <ul className="space-y-3 text-[#4a2000]">
              <li className="bg-[#fdf8ee] border border-[rgba(229,190,16,0.25)] rounded-lg px-4 py-3">
                1. Dr. Hemlata Garg (Coordinator)
              </li>
              <li className="bg-[#fdf8ee] border border-[rgba(229,190,16,0.25)] rounded-lg px-4 py-3">
                2. Dr. Rukmani Pratap Singh (Member)
              </li>
              <li className="bg-[#fdf8ee] border border-[rgba(229,190,16,0.25)] rounded-lg px-4 py-3">
                3. Dr. Sardar Diwakar (Member)
              </li>
              <li className="bg-[#fdf8ee] border border-[rgba(229,190,16,0.25)] rounded-lg px-4 py-3">
                4. Dr. Rajkumar (Member)
              </li>
            </ul>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Antirag;