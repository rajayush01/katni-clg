import React from "react";

const Statutory = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fff8ee] via-[#fdf3d8] to-white">

      {/* HERO SECTION */}
      <div className="relative py-20 text-center bg-gradient-to-r from-[#753300] via-[#b36000] to-orange-800">
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-wide">
          Statutory Committee
        </h1>

        {/* Divider */}
        <div className="mt-4 mx-auto w-32 h-1 bg-gradient-to-r from-[#753300] to-[#e5be10] rounded-full"></div>
      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-6 py-12">

        <div className="bg-[#fdf8ee] border border-[rgba(229,190,16,0.25)] rounded-2xl shadow-lg p-8">

          <h2 className="text-2xl md:text-3xl font-semibold text-[#3a1a00] mb-4">
            Statutory Committee
          </h2>

          <p className="text-[#4a2000] leading-relaxed">
            The Statutory Committee ensures that the institution adheres to all
            legal, regulatory, and governance standards. It plays a vital role in
            maintaining transparency, accountability, and compliance with statutory
            requirements to uphold institutional integrity.
          </p>

          {/* FEATURES */}
          <div className="mt-8 grid md:grid-cols-3 gap-6">

            {/* Card 1 */}
            <div className="p-5 rounded-xl bg-[#fdf8ee] border border-[rgba(229,190,16,0.25)] hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-[#753300] mb-2">
                Compliance
              </h3>
              <p className="text-[#b08060] text-sm">
                Ensuring adherence to institutional rules and legal regulations.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-5 rounded-xl bg-[#fdf8ee] border border-[rgba(229,190,16,0.25)] hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-[#753300] mb-2">
                Governance
              </h3>
              <p className="text-[#b08060] text-sm">
                Promoting transparency and accountability in decision-making.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-5 rounded-xl bg-[#fdf8ee] border border-[rgba(229,190,16,0.25)] hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-[#753300] mb-2">
                Policy Implementation
              </h3>
              <p className="text-[#b08060] text-sm">
                Monitoring and enforcing institutional policies effectively.
              </p>
            </div>

          </div>

          {/* CTA BUTTON */}
          <div className="mt-10 text-center">
            <button className="px-6 py-3 rounded-full text-white font-medium 
              bg-gradient-to-br from-[#753300] to-[#9a4a10] 
              hover:scale-105 transition">
              View Policies
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Statutory;