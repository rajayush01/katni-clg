import React from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import Hero from "@/components/home/Hero";
import Announcements from "@/components/home/Announcements";
import Programmes from "@/components/home/Programmes";
import WhyGTC from "@/components/home/WhyGTC";
import Faculty from "@/components/home/Faculty";
import CampusLife from "@/components/home/CampusLife";


export default function Home() {
  useScrollReveal();

  return (
    <div className="min-h-screen font-['Sora',sans-serif] antialiased">
      <Hero />
      <Announcements />
      <Programmes />
      <WhyGTC />
      <Faculty />
      <CampusLife />
    </div>
  );
}