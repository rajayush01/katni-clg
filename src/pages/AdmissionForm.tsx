import React, { useState } from 'react';

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    // College & Course Details
    program: '',
    year: '',
    courseName: '',
    programEligibility: '',
    regionalCenterName: '',
    studyCenterName: '',
    bhojUniversity: '',
    
    // Previous Qualification
    examPassed: '',
    universityBoard: '',
    rollNo: '',
    passingYear: '2026',
    stream12th: '',
    maxMarks: '',
    obtainMarks: '',
    studentType: 'New Enrollment',
    slm: '',
    admissionType: 'Distance Mode Regular',
    abcId: '',
    medium: '',
    
    // Personal Details
    firstName: '',
    lastName: '',
    nameInHindi: '',
    dob: '',
    gender: '',
    maritalStatus: '',
    fatherName: '',
    husbandName: '',
    motherName: '',
    category: '',
    nationality: '',
    disability: '',
    religion: '',
    area: '',
    employmentStatus: '',
    employmentType: '',
    
    // Correspondence Address
    corrHouseNo: '',
    corrColony: '',
    corrCity: '',
    corrState: 'Andhra Pradesh',
    corrDistrict: '',
    corrPincode: '',
    
    // Permanent Address
    permHouseNo: '',
    permColony: '',
    permCity: '',
    permState: 'Andhra Pradesh',
    permDistrict: '',
    permPincode: '',
    
    // Other Details
    mobileNumber: '',
    altMobileNumber: '',
    whatsappNumber: '',
    emailId: '',
    loginPassword: '',
    alumniUniversity: '',
    identityProofId: '',
    photoIdNo: '',
    voterId: '',
    
    // Bank Details
    bankName: '',
    accountHolderName: '',
    accountNo: '',
    ifscCode: '',
    
    // Enclosures
    proofDOB: false,
    marksheet: false,
    domicileCertificate: false,
    casteCertificate: false,
    
    // Declaration
    declaration: false,
    captcha: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8  mt-10 md:mt-36">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#e5be10] to-[#B8860B] rounded-t-lg shadow-sm overflow-hidden">
          <div className="px-8 py-8 text-center">
            <h1 className="text-3xl font-normal text-white tracking-wide">
              Admission Form
            </h1>
            <p className="text-blue-100 mt-2 text-base font-light">प्रवेश फार्म</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-b-lg shadow-sm">
          <div className="px-8 py-10">
            {/* College & Course Details Section */}
            <div className="mb-12">
              <div className="mb-6">
                <h2 className="text-xl font-medium text-gray-900">
                  College & Course Details
                </h2>
                <p className="text-sm text-gray-500 mt-1">कॉलेज और पाठ्यक्रम विवरण</p>
                <div className="mt-3 h-px bg-gradient-to-r from-[#e5be10] via-[#B8860B] to-transparent"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Program <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="program"
                    value={formData.program}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-[#e5be10] focus:ring-1 focus:ring-[#e5be10] focus:outline-none transition-colors"
                  >
                    <option value="">Select</option>
                    <option value="UG">Under Graduate</option>
                    <option value="PG">Post Graduate</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Course Name <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="courseName"
                    value={formData.courseName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-[#e5be10] focus:ring-1 focus:ring-[#e5be10] focus:outline-none transition-colors"
                  >
                    <option value="">-- Select --</option>
                    <option value="BA">BA</option>
                    <option value="BSc">BSc</option>
                    <option value="BCom">BCom</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Year <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="year"
                    value={formData.year}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-[#e5be10] focus:ring-1 focus:ring-[#e5be10] focus:outline-none transition-colors"
                  >
                    <option value="">Select</option>
                    <option value="1">First Year</option>
                    <option value="2">Second Year</option>
                    <option value="3">Third Year</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Program Eligibility <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="programEligibility"
                    value={formData.programEligibility}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-[#e5be10] focus:ring-1 focus:ring-[#e5be10] focus:outline-none transition-colors"
                  >
                    <option value="">Select</option>
                    <option value="12th">12th Pass</option>
                    <option value="Graduate">Graduate</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Regional Center Name <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="regionalCenterName"
                    value={formData.regionalCenterName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-[#e5be10] focus:ring-1 focus:ring-[#e5be10] focus:outline-none transition-colors"
                  >
                    <option value="">-- Select --</option>
                    <option value="Center1">Center 1</option>
                    <option value="Center2">Center 2</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Study Center Name <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="studyCenterName"
                    value={formData.studyCenterName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-[#e5be10] focus:ring-1 focus:ring-[#e5be10] focus:outline-none transition-colors"
                  >
                    <option value="">-- Select --</option>
                    <option value="Study1">Study Center 1</option>
                    <option value="Study2">Study Center 2</option>
                  </select>
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Is Student belongs to Bhoj University <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="bhojUniversity"
                    value={formData.bhojUniversity}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-[#e5be10] focus:ring-1 focus:ring-[#e5be10] focus:outline-none transition-colors"
                  >
                    <option value="">Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Previous Qualification Details Section */}
            <div className="mb-12">
              <div className="mb-6">
                <h2 className="text-xl font-medium text-gray-900">
                  Previous Qualification Details
                </h2>
                <p className="text-sm text-gray-500 mt-1">योग्यता विवरण</p>
                <div className="mt-3 h-px bg-gradient-to-r from-[#e5be10] via-[#B8860B] to-transparent"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Exam Passed <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="examPassed"
                    value={formData.examPassed}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-[#e5be10] focus:ring-1 focus:ring-[#e5be10] focus:outline-none transition-colors"
                  >
                    <option value="">Select</option>
                    <option value="10th">10th</option>
                    <option value="12th">12th</option>
                    <option value="Graduate">Graduate</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select University or Board <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="universityBoard"
                    value={formData.universityBoard}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-[#e5be10] focus:ring-1 focus:ring-[#e5be10] focus:outline-none transition-colors"
                  >
                    <option value="">Select</option>
                    <option value="CBSE">CBSE</option>
                    <option value="State Board">State Board</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Roll No <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="rollNo"
                    value={formData.rollNo}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-[#e5be10] focus:ring-1 focus:ring-[#e5be10] focus:outline-none transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Passing Year <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="passingYear"
                    value={formData.passingYear}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-[#e5be10] focus:ring-1 focus:ring-[#e5be10] focus:outline-none transition-colors"
                  >
                    <option value="2026">2026</option>
                    <option value="2025">2025</option>
                    <option value="2024">2024</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    12th MP Board Stream
                  </label>
                  <select
                    name="stream12th"
                    value={formData.stream12th}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-[#e5be10] focus:ring-1 focus:ring-[#e5be10] focus:outline-none transition-colors"
                  >
                    <option value="">Select</option>
                    <option value="Science">Science</option>
                    <option value="Commerce">Commerce</option>
                    <option value="Arts">Arts</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Max Marks <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="maxMarks"
                    value={formData.maxMarks}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-[#e5be10] focus:ring-1 focus:ring-[#e5be10] focus:outline-none transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Obtain Marks <span className="text-red-500">**</span>
                  </label>
                  <input
                    type="text"
                    name="obtainMarks"
                    value={formData.obtainMarks}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-[#e5be10] focus:ring-1 focus:ring-[#e5be10] focus:outline-none transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Student Type <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="studentType"
                    value={formData.studentType}
                    onChange={handleInputChange}
                    readOnly
                    className="w-full px-4 py-2.5 text-gray-500 bg-gray-50 border border-gray-200 rounded-md cursor-not-allowed"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Is SLM (Self Learning Material) <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="slm"
                    value={formData.slm}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-[#e5be10] focus:ring-1 focus:ring-[#e5be10] focus:outline-none transition-colors"
                  >
                    <option value="">Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Admission Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="admissionType"
                    value={formData.admissionType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-[#e5be10] focus:ring-1 focus:ring-[#e5be10] focus:outline-none transition-colors"
                  >
                    <option value="Distance Mode Regular">Distance Mode Regular</option>
                    <option value="Regular">Regular</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Academic Bank of Credit Id (ABC Id)
                  </label>
                  <input
                    type="text"
                    name="abcId"
                    value={formData.abcId}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-[#e5be10] focus:ring-1 focus:ring-[#e5be10] focus:outline-none transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Medium <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="medium"
                    value={formData.medium}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-[#e5be10] focus:ring-1 focus:ring-[#e5be10] focus:outline-none transition-colors"
                  >
                    <option value="">Select</option>
                    <option value="English">English</option>
                    <option value="Hindi">Hindi</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Personal Details Section */}
            <div className="mb-12">
              <div className="mb-6">
                <h2 className="text-xl font-medium text-gray-900">
                  Personal Details
                </h2>
                <p className="text-sm text-gray-500 mt-1">व्यक्तिगत विवरण</p>
                <div className="mt-3 h-px bg-gradient-to-r from-[#e5be10] via-[#B8860B] to-transparent"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name + Middle Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-[#e5be10] focus:ring-1 focus:ring-[#e5be10] focus:outline-none transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-[#e5be10] focus:ring-1 focus:ring-[#e5be10] focus:outline-none transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name in Hindi <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="nameInHindi"
                    value={formData.nameInHindi}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-[#e5be10] focus:ring-1 focus:ring-[#e5be10] focus:outline-none transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    DOB (DD/MM/YYYY) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-[#e5be10] focus:ring-1 focus:ring-[#e5be10] focus:outline-none transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Gender <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-[#e5be10] focus:ring-1 focus:ring-[#e5be10] focus:outline-none transition-colors"
                  >
                    <option value="">Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Marital Status <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="maritalStatus"
                    value={formData.maritalStatus}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-[#e5be10] focus:ring-1 focus:ring-[#e5be10] focus:outline-none transition-colors"
                  >
                    <option value="">Select</option>
                    <option value="Single">Single</option>
                    <option value="Married">Married</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Father's Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="fatherName"
                    value={formData.fatherName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-[#e5be10] focus:ring-1 focus:ring-[#e5be10] focus:outline-none transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Husband Name
                  </label>
                  <input
                    type="text"
                    name="husbandName"
                    value={formData.husbandName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-[#e5be10] focus:ring-1 focus:ring-[#e5be10] focus:outline-none transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mother's Name
                  </label>
                  <input
                    type="text"
                    name="motherName"
                    value={formData.motherName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-[#e5be10] focus:ring-1 focus:ring-[#e5be10] focus:outline-none transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-[#e5be10] focus:ring-1 focus:ring-[#e5be10] focus:outline-none transition-colors"
                  >
                    <option value="">Select</option>
                    <option value="General">General</option>
                    <option value="OBC">OBC</option>
                    <option value="SC">SC</option>
                    <option value="ST">ST</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nationality <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="nationality"
                    value={formData.nationality}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-[#e5be10] focus:ring-1 focus:ring-[#e5be10] focus:outline-none transition-colors"
                  >
                    <option value="">Select</option>
                    <option value="Indian">Indian</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Person with Disability <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="disability"
                    value={formData.disability}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-[#e5be10] focus:ring-1 focus:ring-[#e5be10] focus:outline-none transition-colors"
                  >
                    <option value="">Select</option>
                    <option value="No">No</option>
                    <option value="Yes">Yes</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Religion <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="religion"
                    value={formData.religion}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-[#e5be10] focus:ring-1 focus:ring-[#e5be10] focus:outline-none transition-colors"
                  >
                    <option value="">Select</option>
                    <option value="Hindu">Hindu</option>
                    <option value="Muslim">Muslim</option>
                    <option value="Christian">Christian</option>
                    <option value="Sikh">Sikh</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Area <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="area"
                    value={formData.area}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-[#e5be10] focus:ring-1 focus:ring-[#e5be10] focus:outline-none transition-colors"
                  >
                    <option value="">Select</option>
                    <option value="Urban">Urban</option>
                    <option value="Rural">Rural</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Employed/Unemployed <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="employmentStatus"
                    value={formData.employmentStatus}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-[#e5be10] focus:ring-1 focus:ring-[#e5be10] focus:outline-none transition-colors"
                  >
                    <option value="">Select</option>
                    <option value="Employed">Employed</option>
                    <option value="Unemployed">Unemployed</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Employment Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="employmentType"
                    value={formData.employmentType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-[#e5be10] focus:ring-1 focus:ring-[#e5be10] focus:outline-none transition-colors"
                  >
                    <option value="">Select</option>
                    <option value="Government">Government</option>
                    <option value="Private">Private</option>
                    <option value="Self-Employed">Self-Employed</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Address Section */}
            <div className="mb-12">
              <div className="mb-6">
                <h2 className="text-xl font-medium text-gray-900">
                  Address
                </h2>
                <p className="text-sm text-gray-500 mt-1">पते का विवरण</p>
                <div className="mt-3 h-px bg-gradient-to-r from-[#e5be10] via-[#B8860B] to-transparent"></div>
              </div>
              
              {/* Correspondence Address */}
              <div className="mb-8">
                <h3 className="text-base font-medium text-gray-700 mb-4 pl-3 border-l-4 border-[#e5be10]">Correspondence</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      House No/Village
                    </label>
                    <input
                      type="text"
                      name="corrHouseNo"
                      value={formData.corrHouseNo}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-[#e5be10] focus:ring-1 focus:ring-[#e5be10] focus:outline-none transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Colony/Post Office <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="corrColony"
                      value={formData.corrColony}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-[#e5be10] focus:ring-1 focus:ring-[#e5be10] focus:outline-none transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      City/Tehsil <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="corrCity"
                      value={formData.corrCity}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-[#e5be10] focus:ring-1 focus:ring-[#e5be10] focus:outline-none transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      State <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="corrState"
                      value={formData.corrState}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-[#e5be10] focus:ring-1 focus:ring-[#e5be10] focus:outline-none transition-colors"
                    >
                      <option value="Andhra Pradesh">Andhra Pradesh</option>
                      <option value="Maharashtra">Maharashtra</option>
                      <option value="Karnataka">Karnataka</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      District <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="corrDistrict"
                      value={formData.corrDistrict}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-[#e5be10] focus:ring-1 focus:ring-[#e5be10] focus:outline-none transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      PinCode <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="corrPincode"
                      value={formData.corrPincode}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-[#e5be10] focus:ring-1 focus:ring-[#e5be10] focus:outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>
              
              {/* Permanent Address */}
              <div>
                <h3 className="text-base font-medium text-gray-700 mb-4 pl-3 border-l-4 border-[#e5be10]">Permanent</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      House No/Village
                    </label>
                    <input
                      type="text"
                      name="permHouseNo"
                      value={formData.permHouseNo}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-[#e5be10] focus:ring-1 focus:ring-[#e5be10] focus:outline-none transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Colony/Post Office <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="permColony"
                      value={formData.permColony}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-[#e5be10] focus:ring-1 focus:ring-[#e5be10] focus:outline-none transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      City/Tehsil <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="permCity"
                      value={formData.permCity}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-[#e5be10] focus:ring-1 focus:ring-[#e5be10] focus:outline-none transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      State <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="permState"
                      value={formData.permState}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-[#e5be10] focus:ring-1 focus:ring-[#e5be10] focus:outline-none transition-colors"
                    >
                      <option value="Andhra Pradesh">Andhra Pradesh</option>
                      <option value="Maharashtra">Maharashtra</option>
                      <option value="Karnataka">Karnataka</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      District <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="permDistrict"
                      value={formData.permDistrict}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-[#e5be10] focus:ring-1 focus:ring-[#e5be10] focus:outline-none transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      PinCode <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="permPincode"
                      value={formData.permPincode}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-[#e5be10] focus:ring-1 focus:ring-[#e5be10] focus:outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Other Details Section */}
            <div className="mb-12">
              <div className="mb-6">
                <h2 className="text-xl font-medium text-gray-900">
                  Other Details
                </h2>
                <p className="text-sm text-gray-500 mt-1">संपर्क विवरण</p>
                <div className="mt-3 h-px bg-gradient-to-r from-[#e5be10] via-[#B8860B] to-transparent"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-[#e5be10] focus:ring-1 focus:ring-[#e5be10] focus:outline-none transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    WhatsApp No. (Is this is the what's app no.) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="whatsappNumber"
                    value={formData.whatsappNumber}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-[#e5be10] focus:ring-1 focus:ring-[#e5be10] focus:outline-none transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Alternative Mobile No. <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="altMobileNumber"
                    value={formData.altMobileNumber}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-[#e5be10] focus:ring-1 focus:ring-[#e5be10] focus:outline-none transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Id
                  </label>
                  <input
                    type="email"
                    name="emailId"
                    value={formData.emailId}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-[#e5be10] focus:ring-1 focus:ring-[#e5be10] focus:outline-none transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Login Password <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="password"
                    name="loginPassword"
                    value={formData.loginPassword}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-[#e5be10] focus:ring-1 focus:ring-[#e5be10] focus:outline-none transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Do you want to be alumni of the University <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="alumniUniversity"
                    value={formData.alumniUniversity}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-[#e5be10] focus:ring-1 focus:ring-[#e5be10] focus:outline-none transition-colors"
                  >
                    <option value="">Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Identity Proof Id <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="identityProofId"
                    value={formData.identityProofId}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-[#e5be10] focus:ring-1 focus:ring-[#e5be10] focus:outline-none transition-colors"
                  >
                    <option value="">Select</option>
                    <option value="Aadhar">Aadhar Card</option>
                    <option value="PAN">PAN Card</option>
                    <option value="DL">Driving License</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Photo ID No <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="photoIdNo"
                    value={formData.photoIdNo}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-[#e5be10] focus:ring-1 focus:ring-[#e5be10] focus:outline-none transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Voter id (Yes/No) <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="voterId"
                    value={formData.voterId}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-[#e5be10] focus:ring-1 focus:ring-[#e5be10] focus:outline-none transition-colors"
                  >
                    <option value="">Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Bank Details Section */}
            <div className="mb-12">
              <div className="mb-6">
                <h2 className="text-xl font-medium text-gray-900">
                  Bank Details
                </h2>
                <p className="text-sm text-gray-500 mt-1">बैंक विवरण</p>
                <div className="mt-3 h-px bg-gradient-to-r from-[#e5be10] via-[#B8860B] to-transparent"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Bank Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="bankName"
                    value={formData.bankName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-[#e5be10] focus:ring-1 focus:ring-[#e5be10] focus:outline-none transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Account Holder Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="accountHolderName"
                    value={formData.accountHolderName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-[#e5be10] focus:ring-1 focus:ring-[#e5be10] focus:outline-none transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Account No <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="accountNo"
                    value={formData.accountNo}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-[#e5be10] focus:ring-1 focus:ring-[#e5be10] focus:outline-none transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    IFSC Code <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="ifscCode"
                    value={formData.ifscCode}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-[#e5be10] focus:ring-1 focus:ring-[#e5be10] focus:outline-none transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Paper Details Section */}
            <div className="mb-12">
              <div className="mb-6">
                <h2 className="text-xl font-medium text-gray-900">
                  Paper Details
                </h2>
                <p className="text-sm text-gray-500 mt-1">पेपर विवरण</p>
                <div className="mt-3 h-px bg-gradient-to-r from-[#e5be10] via-[#B8860B] to-transparent"></div>
              </div>
              <button
                type="button"
                className="bg-[#e5be10] hover:bg-[#2563eb] text-white px-6 py-2.5 rounded-md font-medium transition-colors mb-6 text-sm"
              >
                Show Paper Details
              </button>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="font-medium text-gray-800 mb-2 text-sm">1) Compulsory Subject</h3>
                  <p className="text-gray-500 text-sm">Please select course and year first</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="font-medium text-gray-800 mb-2 text-sm">2) Optional Subject</h3>
                  <p className="text-gray-500 text-sm">Please select course and year first</p>
                </div>
              </div>
            </div>

            {/* Fee Details Section */}
            <div className="mb-12">
              <div className="mb-6">
                <h2 className="text-xl font-medium text-gray-900">
                  Fee Details
                </h2>
                <p className="text-sm text-gray-500 mt-1">शुल्क विवरण</p>
                <div className="mt-3 h-px bg-gradient-to-r from-[#e5be10] via-[#B8860B] to-transparent"></div>
              </div>
              <button
                type="button"
                className="bg-[#e5be10] hover:bg-[#2563eb] text-white px-6 py-2.5 rounded-md font-medium transition-colors mb-6 text-sm"
              >
                Show Fee Details
              </button>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white border border-gray-200 p-5 rounded-lg">
                  <p className="text-gray-600 text-xs mb-2 font-medium">Course Fee</p>
                  <p className="text-2xl font-semibold text-gray-900">₹0</p>
                </div>
                <div className="bg-white border border-gray-200 p-5 rounded-lg">
                  <p className="text-gray-600 text-xs mb-2 font-medium">Registration Fee</p>
                  <p className="text-2xl font-semibold text-gray-900">₹0</p>
                </div>
                <div className="bg-white border border-gray-200 p-5 rounded-lg">
                  <p className="text-gray-600 text-xs mb-2 font-medium">Portal Fee</p>
                  <p className="text-2xl font-semibold text-gray-900">₹0</p>
                </div>
                <div className="bg-gradient-to-br from-[#e5be10] to-[#B8860B] p-5 rounded-lg">
                  <p className="text-blue-100 text-xs mb-2 font-medium">Total Fee</p>
                  <p className="text-2xl font-bold text-white">₹0</p>
                </div>
              </div>
            </div>

            {/* Enclosures Section */}
            <div className="mb-12">
              <div className="mb-6">
                <h2 className="text-xl font-medium text-gray-900">
                  Enclosures
                </h2>
                <p className="text-sm text-gray-500 mt-1">संलग्न</p>
                <div className="mt-3 h-px bg-gradient-to-r from-[#e5be10] via-[#B8860B] to-transparent"></div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <input
                    type="checkbox"
                    name="proofDOB"
                    checked={formData.proofDOB}
                    onChange={handleInputChange}
                    className="mt-0.5 w-4 h-4 text-[#e5be10] focus:ring-[#e5be10] rounded border-gray-300"
                  />
                  <label className="flex-1 text-sm font-medium text-gray-700">
                    Proof for DOB
                  </label>
                  <div className="flex-1">
                    <input type="file" className="w-full text-xs text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-xs file:font-medium file:bg-[#e5be10] file:text-white hover:file:bg-[#2563eb] file:cursor-pointer" />
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <input
                    type="checkbox"
                    name="marksheet"
                    checked={formData.marksheet}
                    onChange={handleInputChange}
                    className="mt-0.5 w-4 h-4 text-[#e5be10] focus:ring-[#e5be10] rounded border-gray-300"
                  />
                  <label className="flex-1 text-sm font-medium text-gray-700">
                    Marksheet[10+2]/UG Course
                  </label>
                  <div className="flex-1">
                    <input type="file" className="w-full text-xs text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-xs file:font-medium file:bg-[#e5be10] file:text-white hover:file:bg-[#2563eb] file:cursor-pointer" />
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <input
                    type="checkbox"
                    name="domicileCertificate"
                    checked={formData.domicileCertificate}
                    onChange={handleInputChange}
                    className="mt-0.5 w-4 h-4 text-[#e5be10] focus:ring-[#e5be10] rounded border-gray-300"
                  />
                  <label className="flex-1 text-sm font-medium text-gray-700">
                    Domicile Certificate
                  </label>
                  <div className="flex-1">
                    <input type="file" className="w-full text-xs text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-xs file:font-medium file:bg-[#e5be10] file:text-white hover:file:bg-[#2563eb] file:cursor-pointer" />
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <input
                    type="checkbox"
                    name="casteCertificate"
                    checked={formData.casteCertificate}
                    onChange={handleInputChange}
                    className="mt-0.5 w-4 h-4 text-[#e5be10] focus:ring-[#e5be10] rounded border-gray-300"
                  />
                  <label className="flex-1 text-sm font-medium text-gray-700">
                    Caste Certificate
                  </label>
                  <div className="flex-1">
                    <input type="file" className="w-full text-xs text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-xs file:font-medium file:bg-[#e5be10] file:text-white hover:file:bg-[#2563eb] file:cursor-pointer" />
                  </div>
                </div>
              </div>
            </div>

            {/* Marksheet Attachment Section */}
            <div className="mb-12">
              <div className="mb-6">
                <h2 className="text-xl font-medium text-gray-900">
                  MarkSheet Attachment
                </h2>
                <p className="text-sm text-gray-500 mt-1">मार्कशीट अटैचमेंट</p>
                <div className="mt-3 h-px bg-gradient-to-r from-[#e5be10] via-[#B8860B] to-transparent"></div>
              </div>
              <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg mb-6">
                <p className="text-sm text-gray-700">
                  MarkSheet Attachment - मार्कशीट अटैचमेंट छात्र अपनी अंतिम अंकसूची को scan कर उसे .jpg format में अंर्तव करे
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Please Attach your Document <span className="text-red-500">*</span>
                </label>
                <input
                  type="file"
                  className="w-full px-4 py-2.5 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-[#e5be10] focus:ring-1 focus:ring-[#e5be10] focus:outline-none file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-[#e5be10] file:text-white hover:file:bg-[#2563eb] file:cursor-pointer"
                />
                <p className="text-xs text-gray-500 mt-2">अधिकतम 300 KB तक की अपलोड कर सकते हैं</p>
              </div>
            </div>

            {/* Declaration Section */}
            <div className="mb-12">
              <div className="mb-6">
                <h2 className="text-xl font-medium text-gray-900">
                  Declaration
                </h2>
                <p className="text-sm text-gray-500 mt-1">घोषणा</p>
                <div className="mt-3 h-px bg-gradient-to-r from-[#e5be10] via-[#B8860B] to-transparent"></div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <p className="text-sm text-gray-700 mb-4">
                  नोट:-ऑनलाइन फॉर्म जमा दिनांक से 3 माह तक ही फॉर्म वापसी के लिए आवेदन मान्य होगे।
                </p>
                <div className="flex items-start gap-3 mb-4">
                  <input
                    type="checkbox"
                    name="declaration"
                    checked={formData.declaration}
                    onChange={handleInputChange}
                    className="mt-0.5 w-4 h-4 text-[#e5be10] focus:ring-[#e5be10] rounded border-gray-300"
                  />
                  <label className="text-sm text-gray-700 leading-relaxed">
                    I hereby declare that the information filled by us, is true and complete as per my knowledge. If any information provided by us, is found false or incorrect then Student will be disqualified by the University
                  </label>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  नोट:-इस ऑनलाइन प्रवेश आवेदन पत्र के साथ अहर्ता दायक अंकसूचियां एवं अन्य अभिलेख (जो भी आवश्यक हो) अध्ययन केंद्र पर तीनो प्रतियों में जमा करने पर ही प्रवेश हेतु मान्य होगा अन्यथा आपको प्रवेश एवं पंजीयन स्वत: निरस्त हो जावेगा।
                </p>
              </div>
            </div>

            {/* Captcha and Submit Section */}
            <div className="border-t border-gray-200 pt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Enter Captcha</label>
                  <div className="bg-[#B8860B] text-white text-center py-3 rounded-md mb-3 font-mono text-xl tracking-widest select-none">
                    j132CS
                  </div>
                  <input
                    type="text"
                    name="captcha"
                    value={formData.captcha}
                    onChange={handleInputChange}
                    placeholder="Enter the code above"
                    className="w-full px-4 py-2.5 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-[#e5be10] focus:ring-1 focus:ring-[#e5be10] focus:outline-none transition-colors"
                  />
                </div>
                <div className="flex gap-4">
                  <button
                    type="submit"
                    className="flex-1 bg-[#e5be10] hover:scale-105 transition-all duration-300 text-white py-3 rounded-md font-medium"
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    className="flex-1 bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 py-3 rounded-md font-medium transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdmissionForm;