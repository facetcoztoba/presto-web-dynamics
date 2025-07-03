import React, { useState, lazy, Suspense } from 'react';

// Leniwe ładowanie komponentów dla optymalizacji wydajności
const Header = lazy(() => import('../components/Header'));
const HeroSection = lazy(() => import('../components/HeroSection'));
const ProgramsSection = lazy(() => import('../components/ProgramsSection'));
const MissionSection = lazy(() => import('../components/MissionSection'));
const FundingSection = lazy(() => import('../components/FundingSection'));
const OffersSection = lazy(() => import('../components/OffersSection'));
const BenefitsSection = lazy(() => import('../components/BenefitsSection'));
const WhyChooseUsSection = lazy(() => import('../components/WhyChooseUsSection'));
const CallToActionBar = lazy(() => import('../components/CallToActionBar'));
const StatisticsSection = lazy(() => import('../components/StatisticsSection'));
const ContactSection = lazy(() => import('../components/ContactSection'));
const Footer = lazy(() => import('../components/Footer'));

const App = () => { // Zmieniono nazwę komponentu na App, aby pasowała do domyślnego eksportu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Funkcja do przewijania do sekcji
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Zamknij menu mobilne po przewinięciu
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className="font-inter antialiased text-gray-900">
      {/* Suspense fallback wyświetlany podczas ładowania komponentów */}
      <Suspense fallback={
        <div className="flex justify-center items-center h-screen text-lg">
          Ładowanie zawartości...
        </div>
      }>
        <Header
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen} // Bezpośrednie przekazanie settera
          scrollToSection={scrollToSection}
        />

        <HeroSection scrollToSection={scrollToSection} />

        <OffersSection />

        <ProgramsSection />

        <MissionSection scrollToSection={scrollToSection} />

        <FundingSection />

        <BenefitsSection />

        <WhyChooseUsSection />

        <CallToActionBar scrollToSection={scrollToSection} />

        <StatisticsSection />

        <ContactSection />

        <Footer />
      </Suspense>
    </div>
  );
};

export default App; // Domyślny eksport komponentu App
