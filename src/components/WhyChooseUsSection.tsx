
import React from 'react';
import Accordion from './Accordion';

const WhyChooseUsSection: React.FC = () => {

  return (
    <section className="flex flex-col lg:flex-row min-h-[80vh] bg-section-secondary">
      {/* Image Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-0">
        <img
          src="https://halstein.qodeinteractive.com/wp-content/uploads/2021/10/h6-img-03.png"
          alt="Obraz firmowy"
          className="w-full h-full object-cover rounded-2xl lg:rounded-none shadow-soft transition-transform duration-300 hover:scale-105"
          onError={(e) => { 
            const target = e.target as HTMLImageElement;
            target.src = 'https://placehold.co/800x600/F8F8F8/121D35?text=Obraz+niedostępny'; 
          }}
          loading="lazy"
        />
      </div>

      {/* Content Section */}
      <div className="w-full lg:w-1/2 bg-surface-secondary p-8 lg:p-16 xl:p-20 flex flex-col justify-center">
        <div className="animate-fade-in-up">
          <h3 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold text-foreground mb-6 font-inter leading-tight">
            Umiejętności, które 
            <span className="text-primary"> 
              napędzają rozwój
            </span> 
            <br />Twojej firmy
          </h3>
          
          <p className="text-muted-foreground mb-10 text-lg xl:text-xl leading-relaxed font-inter max-w-lg">
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
