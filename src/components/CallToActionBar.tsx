
import React from 'react';

interface CallToActionBarProps {
  scrollToSection: (id: string) => void;
}

const CallToActionBar: React.FC<CallToActionBarProps> = ({ scrollToSection }) => {
  return (
    <section className="bg-gradient-to-r from-primary-800 to-primary-900 text-white py-16 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between rounded-2xl shadow-large m-4 md:m-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-transparent animate-pulse"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-brand-blue-300 rounded-full blur-2xl"></div>
      </div>
      <h3 className="relative text-2xl md:text-3xl font-bold mb-6 md:mb-0 text-center md:text-left font-inter max-w-2xl">
        Odpowiednia strategia dla Twojego biznesu jest na wyciągnięcie ręki
      </h3>
      <button
        onClick={() => scrollToSection('kontakt')}
        className="relative group bg-white text-primary-800 px-10 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-medium font-inter tracking-wide hover:shadow-large hover:scale-105 active:scale-95 animate-pulse"
      >
        <span className="flex items-center">
          Kontakt
          <svg className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </span>
      </button>
    </section>
  );
};

export default CallToActionBar;
