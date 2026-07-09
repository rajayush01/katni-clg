import React from "react";

const Grievance = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fff8ee] via-[#fdf3d8] to-white">

      {/* HERO SECTION */}
      <div className="relative py-20 text-center bg-gradient-to-r from-[#753300] via-[#b36000] to-orange-800">
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-wide">
          Grievance Redressal Cell
        </h1>

        {/* Divider */}
        <div className="mt-4 mx-auto w-32 h-1 bg-gradient-to-r from-[#753300] to-[#e5be10] rounded-full"></div>
      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-6 py-12">

        <div className="bg-[#fdf8ee] border border-[rgba(229,190,16,0.25)] rounded-2xl shadow-lg p-8">

          <h2 className="text-2xl md:text-3xl font-semibold text-[#3a1a00] mb-4">
            Grievance Redressal Cell
          </h2>

          <p className="text-[#4a2000] leading-relaxed">
            The Grievance Redressal Cell is established to address the concerns,
            complaints, and issues faced by students and staff in a fair and
            transparent manner. It ensures a safe, supportive, and respectful
            environment within the institution.
          </p>

          {/* FEATURES */}
          <div className="mt-8 grid md:grid-cols-3 gap-6">

            {/* Card 1 */}
            <div className="p-5 rounded-xl bg-[#fdf8ee] border border-[rgba(229,190,16,0.25)] hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-[#753300] mb-2">
                Submit Complaints
              </h3>
              <p className="text-[#b08060] text-sm">
                Easily raise your concerns through a structured complaint system.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-5 rounded-xl bg-[#fdf8ee] border border-[rgba(229,190,16,0.25)] hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-[#753300] mb-2">
                Fair Resolution
              </h3>
              <p className="text-[#b08060] text-sm">
                Ensuring unbiased and timely resolution of all grievances.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-5 rounded-xl bg-[#fdf8ee] border border-[rgba(229,190,16,0.25)] hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-[#753300] mb-2">
                Confidentiality
              </h3>
              <p className="text-[#b08060] text-sm">
                Maintaining privacy and confidentiality of all submitted issues.
              </p>
            </div>

          </div>

          {/* CTA BUTTON */}
          <div className="mt-10 text-center">
            <button className="px-6 py-3 rounded-full text-white font-medium 
              bg-gradient-to-br from-[#753300] to-[#9a4a10] 
              hover:scale-105 transition">
              Submit a Grievance
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Grievance;