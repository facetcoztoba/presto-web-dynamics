
import React, { useEffect, useRef, useState } from 'react';

interface MissionSectionProps {
  scrollToSection: (id: string) => void;
}

const MissionSection: React.FC<MissionSectionProps> = ({ scrollToSection }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <section ref={ref} className="flex flex-col md:flex-row min-h-[60vh]">
      <div className="w-full md:w-2/3 bg-gradient-primary text-primary-foreground flex flex-col justify-end p-8 md:p-16 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url(https://placehold.co/600x800/1F0CD2/FFFFFF?text=Tło+abstrakcyjne)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent"></div>
        <div className={`relative z-10 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-10'}`}>
          <p className="text-lg text-brand-blue-light mb-2 font-medium font-inter tracking-wide">
            Umiejętności, które napędzają rozwój Twojej firmy
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 font-inter">
            Wspieramy rozwój ludzi i organizacji poprzez 
            <span className="bg-gradient-to-r from-brand-blue-light to-brand-blue bg-clip-text text-transparent"> praktyczną edukację biznesową</span>.
          </h2>
          <button
            onClick={() => scrollToSection('korzysci')}
            className="group bg-transparent border-2 border-primary-foreground text-primary-foreground px-8 py-4 rounded-full hover:bg-primary-foreground hover:text-primary transition-all duration-300 shadow-medium font-semibold font-inter tracking-wide hover:shadow-large hover:scale-105 active:scale-95"
          >
            <span className="flex items-center">
              Czytaj dalej
              <svg className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </span>
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/3 bg-gradient-accent flex items-center justify-center p-8 md:p-0 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-surface-primary/20"></div>
        <img
          src="https://halstein.qodeinteractive.com/wp-content/uploads/2021/10/h3-img-6.jpg"
          alt="Biuro"
          className={`w-full h-full object-cover rounded-lg shadow-large md:rounded-none md:shadow-none transition-all duration-1000 ${isVisible ? 'scale-100 opacity-100' : 'scale-110 opacity-80'}`}
          onError={(e) => { 
            const target = e.target as HTMLImageElement;
            target.src = 'https://placehold.co/800x600/F4EBE2/121D35?text=Obraz+niedostępny'; 
          }}
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default MissionSection;
