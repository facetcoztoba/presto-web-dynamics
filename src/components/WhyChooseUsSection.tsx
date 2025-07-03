
import React, { useEffect, useRef } from 'react';
import Accordion from './Accordion';

const WhyChooseUsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current) return;
      
      const scrolled = window.pageYOffset;
      const parallax = scrolled * 0.3;
      imageRef.current.style.transform = `translateY(${parallax}px)`;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / 20;
      const y = (e.clientY - rect.top - rect.height / 2) / 20;
      
      const textContainer = sectionRef.current.querySelector('.text-container') as HTMLElement;
      if (textContainer) {
        textContainer.style.transform = `perspective(1000px) rotateX(${y}deg) rotateY(${x}deg) translateZ(20px)`;
      }
    };

    const resetTransform = () => {
      const textContainer = sectionRef.current?.querySelector('.text-container') as HTMLElement;
      if (textContainer) {
        textContainer.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
      }
    };

    window.addEventListener('scroll', handleScroll);
    sectionRef.current?.addEventListener('mousemove', handleMouseMove);
    sectionRef.current?.addEventListener('mouseleave', resetTransform);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      sectionRef.current?.removeEventListener('mousemove', handleMouseMove);
      sectionRef.current?.removeEventListener('mouseleave', resetTransform);
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="flex flex-col lg:flex-row min-h-[80vh] bg-gradient-section relative overflow-hidden"
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary-light/20 rounded-full animate-float" style={{ animationDelay: '0s' }} />
        <div className="absolute top-3/4 left-1/2 w-1 h-1 bg-accent/30 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-primary-light/10 rounded-full animate-float" style={{ animationDelay: '4s' }} />
      </div>

      {/* Image Section with Parallax */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-0 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-surface-primary/20 to-surface-primary/40 animate-gradient-shift" 
             style={{ backgroundSize: '200% 100%' }} />
        
        {/* Glass morphism overlay */}
        <div className="absolute inset-0 backdrop-blur-sm bg-surface-primary/10" />
        
        <img
          ref={imageRef}
          src="https://halstein.qodeinteractive.com/wp-content/uploads/2021/10/h6-img-03.png"
          alt="Obraz firmowy"
          className="w-full h-full object-cover rounded-2xl shadow-brand lg:rounded-none lg:shadow-none transition-all duration-700 hover:scale-105 hover:rotate-1 will-change-transform"
          onError={(e) => { 
            const target = e.target as HTMLImageElement;
            target.src = 'https://placehold.co/800x600/F8F8F8/121D35?text=Obraz+niedostępny'; 
          }}
          loading="lazy"
          style={{ willChange: 'transform' }}
        />
        
        {/* Floating elements */}
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-r from-primary-light/20 to-accent/20 rounded-full blur-3xl animate-float" />
        <div className="absolute -top-10 -left-10 w-24 h-24 bg-gradient-to-r from-accent/20 to-primary-light/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      {/* Content Section with Enhanced Animations */}
      <div className="w-full lg:w-1/2 bg-surface-secondary/90 backdrop-blur-lg p-8 lg:p-16 xl:p-20 flex flex-col justify-center relative">
        {/* Animated background grid */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.3) 1px, transparent 0)',
            backgroundSize: '20px 20px'
          }} />
        </div>

        <div className="text-container transition-all duration-500 relative z-10">
          <div className="animate-fade-in-up">
            <h3 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold text-foreground mb-6 font-inter leading-tight animate-float">
              Umiejętności, które 
              <span className="bg-gradient-to-r from-primary-light via-primary to-accent bg-clip-text text-transparent animate-gradient-shift inline-block"
                    style={{ backgroundSize: '200% auto' }}> 
                napędzają rozwój
              </span> 
              <br />Twojej firmy
            </h3>
            
            <p className="text-muted-foreground mb-10 text-lg xl:text-xl leading-relaxed font-inter max-w-lg animate-fade-in-up"
               style={{ animationDelay: '200ms' }}>
              Nasze szkolenia to nie tylko wiedza – to praktyczne narzędzia, które realnie wspierają efektywność i przewagę konkurencyjną.
            </p>

            <div className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <Accordion
                items={[
                  { title: "Lepsze decyzje biznesowe", content: "Uczymy analizy rynku, strategicznego myślenia i zarządzania, aby podejmowanie decyzji było świadome i opłacalne." },
                  { title: "Optymalizacja procesów", content: "Pomagamy identyfikować i usprawniać kluczowe procesy operacyjne, które wpływają na efektywność działania." },
                  { title: "Rozwój kompetencji zespołów", content: "Szkolimy ludzi na różnych poziomach – od specjalistów po kadrę zarządzającą – budując kulturę współpracy i zaangażowania." },
                  { title: "Innowacje i strategia", content: "Pokazujemy, jak wdrażać zmiany i planować przyszłość w oparciu o dane, trendy i innowacyjne podejście." },
                ]}
              />
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-10 right-10 w-20 h-20 border border-primary-light/20 rounded-full animate-glow-pulse" />
        <div className="absolute top-20 right-20 w-2 h-2 bg-primary-light rounded-full animate-float" style={{ animationDelay: '3s' }} />
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
