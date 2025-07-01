
import React, { useState } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ProgramsSection from '../components/ProgramsSection';
import MissionSection from '../components/MissionSection';
import OffersSection from '../components/OffersSection';
import BenefitsSection from '../components/BenefitsSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import CallToActionBar from '../components/CallToActionBar';
import StatisticsSection from '../components/StatisticsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className="font-inter antialiased text-gray-900">
      <Header 
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
        scrollToSection={scrollToSection}
      />

      <HeroSection scrollToSection={scrollToSection} />

      <ProgramsSection />

      <MissionSection scrollToSection={scrollToSection} />

      <OffersSection />

      <BenefitsSection />

      <WhyChooseUsSection />

      <CallToActionBar scrollToSection={scrollToSection} />

      <StatisticsSection />

      <ContactSection />

      <Footer />
    </div>
  );
};

export default Index;
