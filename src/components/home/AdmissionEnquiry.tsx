import React, { useState } from "react";

interface AdmissionEnquiryProps {
  onClose?: () => void;
}

const AdmissionEnquiry: React.FC<AdmissionEnquiryProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    program: "",
    branch: "",
    placeName: ""
  });

  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const programs = [
    "B.Tech",
    "M.Tech",
    "MBA",
    "BBA",
    "B.Sc",
    "M.Sc",
    "B.Com",
    "M.Com",
    "BA",
    "MA",
    "PhD"
  ];

  const branches = [
    "Computer Science",
    "Mechanical Engineering",
    "Civil Engineering",
    "Electrical Engineering",
    "Electronics & Communication",
    "Information Technology",
    "Management",
    "Commerce",
    "Science",
    "Arts"
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setShowSuccessPopup(true);
  };

  const closePopup = () => {
    setShowSuccessPopup(false);
    setFormData({
      fullName: "",
      mobile: "",
      email: "",
      program: "",
      branch: "",
      placeName: ""
    });
    if (onClose) {
      onClose();
    }
  };

  return (
    <section className={`${!onClose ? 'min-h-screen' : ''} bg-gradient-to-br from-slate-50 via-white to-slate-50  py-4 px-4`}>
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-5">
          <h1 className="text-4xl font-bold text-gray-900 mb-3 tracking-tight">
            Admission Enquiry
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 text-lg">
            Fill out the form below and we'll get back to you shortly.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white transition-shadow duration-300">
          <form onSubmit={handleSubmit}>
            {/* Personal Information */}
            <div className="mb-10">
              <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full"></div>
                Personal Information
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Student Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter full name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="Enter mobile number"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
              </div>
            </div>

            {/* Academic Preferences */}
            <div className="mb-10">
              <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full"></div>
                Academic Preferences
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Program <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="program"
                    value={formData.program}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white"
                  >
                    <option value="">Choose program</option>
                    {programs.map((program, index) => (
                      <option key={index} value={program}>
                        {program}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Branch <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="branch"
                    value={formData.branch}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white"
                  >
                    <option value="">Choose branch</option>
                    {branches.map((branch, index) => (
                      <option key={index} value={branch}>
                        {branch}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    City / Location <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="placeName"
                    value={formData.placeName}
                    onChange={handleChange}
                    placeholder="Enter city"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex flex-col items-center gap-4 pt-2">
              <button
                type="submit"
                className="px-12 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-lg rounded-lg shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-indigo-700 transform hover:scale-[1.02] transition-all duration-200"
              >
                Submit Enquiry
              </button>
              <p className="text-sm text-gray-500">
                <span className="text-red-500">*</span> All fields are required
              </p>
            </div>
          </form>
        </div>

        {/* Contact Info */}
        <div className="mt-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur rounded-full px-6 py-3 border border-gray-200 shadow-sm">
            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="text-sm text-gray-600">
              Need help? Email us at{" "}
              <a href="mailto:admissions@university.edu" className="text-blue-600 hover:text-blue-700 font-medium transition-colors">
                admissions@university.edu
              </a>
            </span>
          </div>
        </div>
      </div>

      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden">
            {/* Gradient Header */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8">
              {/* Success Icon */}
              <div className="flex justify-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <svg 
                    className="w-10 h-10 text-green-500" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={3} 
                      d="M5 13l4 4L19 7" 
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-3">
                Enquiry Submitted!
              </h3>
              <p className="text-gray-600 text-center mb-6 leading-relaxed">
                Thank you for your interest. We'll contact you at{" "}
                <span className="font-semibold text-blue-600">{formData.email}</span> within 24 hours.
              </p>

              {/* Summary */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-5 mb-6 space-y-3 border border-blue-100">
                <div className="flex justify-between items-center pb-3 border-b border-blue-200/50">
                  <span className="text-sm font-medium text-gray-600">Name</span>
                  <span className="font-semibold text-gray-900">{formData.fullName}</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-blue-200/50">
                  <span className="text-sm font-medium text-gray-600">Program</span>
                  <span className="font-semibold text-blue-600">{formData.program}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-600">Branch</span>
                  <span className="font-semibold text-gray-900">{formData.branch}</span>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={closePopup}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-3.5 rounded-lg hover:from-blue-700 hover:to-indigo-700 transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AdmissionEnquiry;