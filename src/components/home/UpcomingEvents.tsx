import React from "react";
import { Link, useNavigate } from "react-router-dom";

const events = [
  {
    link: "/events/sculpture-walk",
    img: "https://images.unsplash.com/photo-1590608897129-79da98d15969",
    date: { month: "DEC", day: "21" },
    type: "Tour",
    title: "Public Tour | Outdoor Sculpture Walk, Museum",
    time: "02:00 PM PT",
  },
  {
    link: "/events/papua-walk",
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    date: { month: "DEC", day: "28" },
    type: "Tour",
    title: "Public Tour | Papua New Guinea Sculpture Walk",
    time: "11:30 AM PT",
  },
  {
    link: "/events/krill-exhibit",
    img: "https://images.unsplash.com/photo-1582719471384-894fbb16e074",
    date: { month: "JAN", day: "05" },
    type: "Exhibition",
    title: "Branner Library Monthly Exhibit – Oceans & Krill",
  },
  {
    link: "/events/energy-seminar",
    img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d",
    date: { month: "JAN", day: "12" },
    type: "Lecture",
    title: "Energy Seminar | Allocating Electricity",
    time: "04:30 PM PT",
  },
  {
    link: "/events/ai-talk",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    date: { month: "FEB", day: "02" },
    type: "Talk",
    title: "AI & Society: The Next Frontier",
  },
  {
    link: "/events/biology-summit",
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
    date: { month: "FEB", day: "15" },
    type: "Summit",
    title: "Global Biology Research Summit",
  },
  {
    link: "/events/startup-meet",
    img: "https://images.unsplash.com/photo-1556761175-129418cb2dfe",
    date: { month: "MAR", day: "01" },
    type: "Networking",
    title: "Startup & Innovation Meet 2026",
  },
];

const Upcomingevents: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-white py-12 sm:py-16 px-2 overflow-hidden">
      {/* Header */}
      <div className="text-center mb-14">
        <h2 className="text-3xl sm:text-4xl font-bold">Upcoming <span className="text-blue-900">Events</span></h2>
      </div>

      {/* Auto Scrolling Container */}
      <div className="relative">
        <div className="flex gap-4 animate-marquee hover:[animation-play-state:paused] px-6">
          {[...events, ...events].map((event, index) => (
            <Link
              key={index}
              to={event.link}
              className="min-w-[280px] sm:min-w-[320px] bg-white shadow-md rounded-lg overflow-hidden group transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={event.img}
                  alt={event.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-500" />

                {/* Date badge */}
                <div className="absolute bottom-3 left-3 bg-black text-white text-center px-3 py-2 text-xs font-semibold tracking-wide">
                  <div>{event.date.month}</div>
                  <div>{event.date.day}</div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <span className="text-xs font-bold text-red-700 uppercase">
                  {event.type}
                </span>

                <h3 className="font-semibold mt-2 leading-snug group-hover:text-red-700 transition-colors">
                  {event.title}
                </h3>

                {event.time && (
                  <p className="text-sm text-gray-600 mt-2">{event.time}</p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Button */}
     <div className="flex justify-center mt-12">
  <button
    onClick={() => navigate("/events")}
    className="
      relative overflow-hidden
      bg-blue-900 text-white
      px-12 py-4 text-lg font-semibold
      group
    "
  >
    {/* Sliding gradient */}
    <span
      className="
        absolute inset-0
        bg-gradient-to-r from-blue-500 via-blue-700 to-blue-500
        translate-x-[-100%]
        group-hover:translate-x-0
        transition-transform duration-300 ease-out
      "
    />

    {/* Text */}
    <span className="relative z-10">
      More events
    </span>
  </button>
</div>


      {/* Tailwind animation */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 5s linear infinite;
          }
        `}
      </style>
      {/* Divider */}
      <div className="max-w-6xl mx-auto border-t border-gray-300 mt-10" />  
    </section>
    
  );
};

export default Upcomingevents;