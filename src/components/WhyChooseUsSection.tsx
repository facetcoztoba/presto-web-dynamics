
import React from 'react';
import Accordion from './Accordion';

const WhyChooseUsSection: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row min-h-[60vh] bg-gradient-section">
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-0 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-surface-primary/30"></div>
        <img
          src="https://halstein.qodeinteractive.com/wp-content/uploads/2021/10/h6-img-03.png"
          alt="Obraz firmowy"
          className="w-full h-full object-cover rounded-lg shadow-large md:rounded-none md:shadow-none transition-transform duration-700 hover:scale-105"
          onError={(e) => { 
            const target = e.target as HTMLImageElement;
            target.src = 'https://placehold.co/800x600/F8F8F8/121D35?text=Obraz+niedostępny'; 
          }}
          loading="lazy"
        />
      </div>
      <div className="w-full md:w-1/2 bg-surface-secondary/80 backdrop-blur-sm p-8 md:p-16 flex flex-col justify-center">
        <div className="animate-fade-in-up">
          <h3 className="text-3xl md:text-4xl font-extrabold text-foreground mb-6 font-inter">
            Umiejętności, które 
            <span className="bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent"> napędzają rozwój</span> 
            Twojej firmy
          </h3>
          <p className="text-muted-foreground mb-8 text-lg leading-relaxed font-inter">
            Nasze szkolenia to nie tylko wiedza – to praktyczne narzędzia, które realnie wspierają efektywność i przewagę konkurencyjną.
          </p>

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
    </section>
  );
};

export default WhyChooseUsSection;
