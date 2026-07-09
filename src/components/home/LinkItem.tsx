import { motion } from "framer-motion";

type LinkItem = {
  label: string;
  href?: string;
};

const columns: LinkItem[][] = [
  [
    { label: "Covid19 Information" },
    { label: "Examination Results" },
    { label: "Examination Time Table" },
    { label: "Admission Enquiry" },
    { label: "Webinars" },
    { label: "WebMail Login" },
  ],
  [
    { label: "Academic Calendar" },
    { label: "Women Grievance Cell" },
    { label: "Anti Ragging" },
    { label: "Approvals" },
    { label: "UGC Recognised Order" },
    { label: "BHOJ NIRF Information" },
    { label: "Swayam Portal" },
    { label: "E-Tenders" },
  ],
  [
    { label: "Online Grievance Redressal" },
    { label: "Feedback" },
    { label: "National Academic Depository (NAD)" },
    { label: "Statutory Declaration" },
    { label: "Guidelines for NAAC Accreditation" },
    { label: "NAAC" },
    { label: "Walk-In Interview" },
    { label: "NCC" },
  ],
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
};

export default function ImportantLinks() {
  return (
    <section className="relative overflow-hidden py-12 px-4">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-500/10 via-sky-400/10 to-indigo-500/10 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mx-auto max-w-7xl rounded-3xl border border-white/20 bg-white/60 backdrop-blur-xl shadow-2xl"
      >
        {/* Header */}
        <div className="rounded-t-3xl bg-[#e5be10] py-6 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-wide text-white">
            Important Links
          </h2>
        </div>

        {/* Content */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6 md:px-10 py-8"
        >
          {columns.map((col, colIndex) => (
            <div key={colIndex} className="space-y-2">
              {col.map((link, index) => (
                <motion.a
                  key={index}
                  variants={item}
                  href={link.href || "#"}
                  whileHover={{ x: 6 }}
                  className="group flex items-center gap-3 rounded-xl px-4 py-2 text-[18px] font-medium text-slate-700 transition-all duration-300 hover:bg-blue-50 hover:text-blue-600 hover:shadow-md"
                >
                  {/* Bullet */}
                  <span className="relative flex h-3 w-3 items-center justify-center">
                    <span className="absolute h-3 w-3 rounded-full bg-blue-500/30 group-hover:scale-125 transition-transform" />
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                  </span>

                  {/* Text */}
                  <span className="leading-snug">
                    {link.label}
                  </span>
                </motion.a>
              ))}
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
