import { AboutUsSection, HeroSection, Navbar, PopularDestinationSection } from '@/component'
import React from 'react'

const Landing = () => {
  return (
    <div className='w-full min-h-screen bg-[#F5F5F5]'>
      <Navbar />
      <HeroSection />
      <PopularDestinationSection />
      <AboutUsSection />
    </div>
  )
}

export default Landing