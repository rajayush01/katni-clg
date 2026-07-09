import React from 'react';
import { motion } from 'framer-motion';
import { 
  Share2, 
  Calendar, 
  BookOpen, 
  Home, 
  Shield, 
  Briefcase, 
  GraduationCap, 
  Users, 
  Download, 
  Building2 
} from 'lucide-react';

interface QuickLink {
  id: number;
  title: string;
  icon: React.ReactNode;
  link: string;
}

const QuickLinks: React.FC = () => {
  const quickLinks: QuickLink[] = [
    {
      id: 1,
      title: 'Social Media Accounts',
      icon: <Share2 className="w-5 h-5" />,
      link: '/social-media'
    },
    {
      id: 2,
      title: 'RDVV Time Table',
      icon: <Calendar className="w-5 h-5" />,
      link: '/timetable'
    },
    {
      id: 3,
      title: 'Library',
      icon: <BookOpen className="w-5 h-5" />,
      link: '/library'
    },
    {
      id: 4,
      title: 'Hostel Facility',
      icon: <Home className="w-5 h-5" />,
      link: '/hostel'
    },
    {
      id: 5,
      title: 'NCC',
      icon: <Shield className="w-5 h-5" />,
      link: '/ncc'
    },
    {
      id: 6,
      title: 'Training & Placement Cell',
      icon: <Briefcase className="w-5 h-5" />,
      link: '/placement'
    },
    {
      id: 7,
      title: 'Student Corner',
      icon: <GraduationCap className="w-5 h-5" />,
      link: '/student-corner'
    },
    {
      id: 8,
      title: 'Alumni',
      icon: <Users className="w-5 h-5" />,
      link: '/alumni'
    },
    {
      id: 9,
      title: 'Download Syllabus (NEP-2020)',
      icon: <Download className="w-5 h-5" />,
      link: '/syllabus'
    },
    {
      id: 10,
      title: 'MP Higher Education - Government of Madhya Pradesh',
      icon: <Building2 className="w-5 h-5" />,
      link: '/mp-higher-education'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-12 bg-gradient-to-br from-gray-10 to-blue-10 relative overflow-hidden">
      {/* Decorative background */}
      {/* <div className="absolute top-0 right-0 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            <span className="text-[#e5be10]">Quick </span>
            <span className="text-[#e5be10] ">Links</span>
          </h2>
          {/* <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Excellent is governed by a board comprising of eminent educationists and administrators.
          </p> */}
        </motion.div>

        {/* Quick Links Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-wrap justify-center gap-4 md:gap-6"
        >
          {quickLinks.map((link) => (
            <motion.a
              key={link.id}
              href={link.link}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.98 }}
              className="group relative overflow-hidden"
            >
              <div className="relative flex items-center gap-3 px-8 py-4 bg-white border-2 border-gray-800 rounded-full shadow-md hover:shadow-xl transition-all duration-300 min-w-[200px] overflow-hidden">
                {/* Dark blue sliding background from left to right */}
                <div className="absolute inset-0 bg-blue-900 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
                
                {/* Icon */}
                <div className="relative z-10 text-gray-700 group-hover:text-white transition-colors duration-300">
                  {link.icon}
                </div>
                
                {/* Text */}
                <span className="relative z-10 text-base font-semibold text-orange-900 group-hover:text-white transition-colors duration-300">
                  {link.title}
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default QuickLinks;