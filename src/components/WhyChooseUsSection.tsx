import React from 'react';
import Accordion from './Accordion';
import { TrendingUp, Target, Users, Lightbulb, BarChart3, Settings, Zap } from 'lucide-react';

const WhyChooseUsSection: React.FC = () => {
  return (
    <section className="flex flex-col lg:flex-row min-h-[80vh] bg-section-secondary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-primary-light/5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
      
      {/* Image Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-12 xl:p-16">
        <div className="relative group">
          <img
            src="https://halstein.qodeinteractive.com/wp-content/uploads/2021/10/h6-img-03.png"
            alt="Zespół podczas szkolenia biznesowego"
            className="w-full h-full object-cover rounded-3xl shadow-xl transition-all duration-700 group-hover:scale-105 group-hover:shadow-2xl"
            onError={(e) => { 
              const target = e.target as HTMLImageElement;
              target.src = 'https://placehold.co/800x600/F8F8F8/121D35?text=Profesjonalne+szkolenia+biznesowe'; 
            }}
            loading="lazy"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="w-full lg:w-1/2 bg-surface-secondary p-8 lg:p-16 xl:p-20 flex flex-col justify-center relative z-10">
        <div className="animate-fade-in-up">
          {/* Header */}
          <div className="mb-10">
            <div className="inline-flex items-center px-4 py-2 bg-primary-light/10 text-primary-light rounded-full text-sm font-medium mb-6">
              <Zap className="w-4 h-4 mr-2" />
              Dlaczego warto wybrać nas?
            </div>
            
            <h3 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold text-foreground mb-6 font-inter leading-tight">
              Kompetencje, które 
              <span className="text-primary bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent"> 
                {' '}napędzają sukces
              </span> 
              <br />Twojej organizacji
            </h3>
            
            <p className="text-muted-foreground mb-10 text-lg xl:text-xl leading-relaxed font-inter max-w-lg">
              Nasze szkolenia to inwestycja w przyszłość – praktyczne narzędzia i strategie, które przekładają się na mierzalne rezultaty biznesowe.
            </p>
          </div>
          
          {/* Accordion */}
          <Accordion
            items={[
              { 
                title: "Lepsze decyzje strategiczne", 
                content: "Rozwijamy umiejętności analityczne i strategiczne myślenie, które pozwalają podejmować świadome decyzje oparte na danych i prognozach rynkowych. Nasze szkolenia obejmują nowoczesne narzędzia analityczne i metodyki wspierające proces decyzyjny.",
                icon: <TrendingUp className="w-4 h-4" />
              },
              { 
                title: "Optymalizacja i automatyzacja", 
                content: "Identyfikujemy kluczowe procesy operacyjne i pokazujemy, jak je usprawnić za pomocą nowoczesnych technologii, w tym AI i automatyzacji. Koncentrujemy się na praktycznych rozwiązaniach, które przynoszą natychmiastowe korzyści.",
                icon: <Settings className="w-4 h-4" />
              },
              { 
                title: "Rozwój zespołów i liderów", 
                content: "Kompleksowe programy rozwojowe dla pracowników na wszystkich poziomach organizacji. Budujemy kulturę współpracy, innowacyjności i ciągłego doskonalenia, wspierając transformację w kierunku nowoczesnej organizacji.",
                icon: <Users className="w-4 h-4" />
              },
              { 
                title: "Innowacje i przyszłość", 
                content: "Przygotowujemy organizacje na wyzwania przyszłości poprzez wdrażanie innowacyjnych rozwiązań, planowanie strategiczne i adaptację do zmieniających się warunków rynkowych. Pokazujemy, jak wykorzystać trendy technologiczne dla przewagi konkurencyjnej.",
                icon: <Lightbulb className="w-4 h-4" />
              },
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;