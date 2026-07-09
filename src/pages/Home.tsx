//import EventsSection from '@/components/home/EventsSection'
import HeroSection from '@/components/home/HeroSection'
import StatsSection from '@/components/home/StatsSection'
import React from 'react'
//import News from '@/components/home/News'
//import ImpLinks from '@/components/home/ImpLinks'
import About from '@/components/home/About'
// import UniversitySongs from '@/components/home/UniversitySongs'
// import GalleryPreview from '@/components/home/GalleryPreview'
import ChancellorNoticesSection from '@/components/home/ChancellorNoticesSection'
import StarSection from '@/components/home/StarSection'
import QuickLinks from '@/components/home/QuickLinks'
import Mission from '@/components/home/Mission';
// import TestimonialCard from '@/components/home/TestimonialCard'
// import Testimonials from '@/components/home/Testimonials'
import TestimonialsSection from '@/components/home/TestimonialsSection'
//import ImpLinks from '@/components/home/ImpLinks'
//import ViceChancellorNoticesSection from '@/components/home/ViceChancellorNoticesSection'
import EventsSection from '@/components/home/EventsSection'
import AboutSection from '@/components/home/AboutSection'

const Home = () => {
  return (
    <div className="antialiased bg-white">
      {/* NO FLOATING BUTTON COMPONENT HERE! It's already in App.tsx */}
      <HeroSection />
      <About/>
      <AboutSection/>
      <div className='flex flex-col gap-10'>
        <ChancellorNoticesSection/>
        {/* <ViceChancellorNoticesSection/> */}
      </div>
      <StatsSection />
    <EventsSection />
      <StarSection/>
      {/* <QuickLinks/> */}
      <Mission/>
        {/* <ImpLinks/> */}
      {/* <Testimonials/> */}
      <TestimonialsSection />
      {/* <News/>

    
      <UniversitySongs/>

      <GalleryPreview/> */}
      
      {/* <div className='flex flex-col px-10 gap-10'>
        <ChancellorNoticesSection/>
        <ViceChancellorNoticesSection/>
      </div> */}
      
      {/* <OurInstitutions/> */}
      {/* <AboutSection /> */}

      {/* <LinkItem/> */}
      
     
      {/* <AdmissionEnquiry/> */}
      {/* <CampusLife />
      <Upcomingevents/>
      
      <CTASection /> */}
    </div>
  )
}

export default Home