
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import SolutionsSection from '@/components/SolutionsSection';
import TechnologiesSection from '@/components/TechnologiesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <SolutionsSection />
      <TechnologiesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
