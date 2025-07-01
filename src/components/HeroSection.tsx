
import React from 'react';

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ scrollToSection }) => {
  return (
    <section id="home" className="relative flex flex-col md:flex-row min-h-screen pt-16">
      <div className="w-full md:w-2/3 bg-[#F4EBE2] flex items-center justify-center p-8 md:p-0">
        <img
          src="https://halstein.qodeinteractive.com/wp-content/uploads/2022/01/h3-img-1.jpg"
          alt="Kobieta w biurze"
          className="w-full h-full object-cover rounded-lg shadow-lg md:rounded-none md:shadow-none"
          onError={(e) => { 
            const target = e.target as HTMLImageElement;
            target.src = 'https://placehold.co/800x600/F4EBE2/121D35?text=Obraz+niedostępny'; 
          }}
        />
      </div>
      <div className="w-full md:w-1/3 bg-[#121D35] text-white flex flex-col justify-end p-8 md:p-16 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url(https://placehold.co/600x800/1F0CD2/FFFFFF?text=Tło+abstrakcyjne)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        ></div>
        <div className="relative z-10">
          <p className="text-lg text-blue-300 mb-2 font-medium">Szkolenia strategiczne</p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Zdobądź kompetencje, które zmieniają sposób, w jaki prowadzisz biznes
          </h1>
          <button
            onClick={() => scrollToSection('kontakt')}
            className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-blue-900 transition duration-300 shadow-lg"
          >
            Skontaktuj się z nami
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
