
import React from 'react';

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ scrollToSection }) => {
  return (
    <section id="home" className="relative flex flex-col md:flex-row min-h-screen pt-16">
      <div className="w-full md:w-2/3 bg-gradient-to-br from-brand-cream to-amber-50 flex items-center justify-center p-8 md:p-0 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20"></div>
        <img
          src="https://halstein.qodeinteractive.com/wp-content/uploads/2022/01/h3-img-1.jpg"
          alt="Kobieta w biurze"
          className="w-full h-full object-cover rounded-lg shadow-large md:rounded-none md:shadow-none transition-transform duration-700 hover:scale-105"
          onError={(e) => { 
            const target = e.target as HTMLImageElement;
            target.src = 'https://placehold.co/800x600/F4EBE2/121D35?text=Obraz+niedostępny'; 
          }}
        />
      </div>
      <div className="w-full md:w-1/3 bg-gradient-to-br from-brand-navy to-gray-900 text-white flex flex-col justify-end p-8 md:p-16 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url(https://placehold.co/600x800/1F0CD2/FFFFFF?text=Tło+abstrakcyjne)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 to-transparent"></div>
        <div className="relative z-10 animate-fade-in-up">
          <p className="text-lg text-brand-blue-300 mb-2 font-medium font-inter tracking-wide">
            Szkolenia strategiczne
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 font-inter">
            Zdobądź kompetencje, które 
            <span className="bg-gradient-to-r from-brand-blue-300 to-blue-400 bg-clip-text text-transparent"> zmieniają sposób</span>, 
            w jaki prowadzisz biznes
          </h1>
          <button
            onClick={() => scrollToSection('kontakt')}
            className="group bg-transparent border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-brand-navy transition-all duration-300 shadow-medium font-semibold font-inter tracking-wide hover:shadow-large hover:scale-105 active:scale-95"
          >
            <span className="flex items-center">
              Skontaktuj się z nami
              <svg className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
