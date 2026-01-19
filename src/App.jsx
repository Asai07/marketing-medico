import React from 'react';
import { ReactLenis } from 'lenis/react';

// Componentes
import Navbar from './app/layout/Navbar';
import CustomCursor from './app/components/ui/CustomCursor';
import Hero from './app/components/sections/Hero';
import Services from './app/components/sections/Services';
import Metrics from './app/components/sections/Metrics';
import Marquee from './app/components/ui/Marquee';
import Process from './app/components/sections/Process';
import SelectedCases from './app/components/sections/SelectedCases';
import Testimonials from './app/components/sections/Testimonials';
import FAQ from './app/components/sections/FAQ';
import Footer from './app/layout/Footer';

const MadaMarketing = () => {
  return (
    <ReactLenis root>

      <div className="w-full relative bg-[#F8F9FF] text-[#374e86] font-sans-body cursor-none selection:bg-[#bcb5ff] selection:text-[#374e86]">

        {/* UI Global */}
        <CustomCursor />
        <Navbar />

        {/* Secciones */}
        <Hero />
        <Services />
        <Process />
        <Metrics />
        <Marquee />
        <SelectedCases />
        <Testimonials />
        <FAQ />
        <Footer />

      </div>
    </ReactLenis>
  );
};

export default MadaMarketing;