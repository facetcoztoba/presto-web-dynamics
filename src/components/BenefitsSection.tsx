
import React from 'react';
import SectionHeader from './SectionHeader';

const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: "https://halstein.qodeinteractive.com/wp-content/uploads/2021/11/icon-h6-01.png",
      title: "Podnieś kompetencje zespołu",
      description: "Rozwijaj umiejętności, które budują przewagę Twojej firmy na rynku.",
      alt: "Ikona Podnieś kompetencje zespołu"
    },
    {
      icon: "https://halstein.qodeinteractive.com/wp-content/uploads/2021/11/icon-h6-02.png",
      title: "Sprawdzone metody i doświadczenie",
      description: "Korzystasz z praktyk wypracowanych w setkach szkoleń i projektów.",
      alt: "Ikona Sprawdzone metody i doświadczenie"
    },
    {
      icon: "https://halstein.qodeinteractive.com/wp-content/uploads/2021/11/icon-h6-03.png",
      title: "Szkolenia dopasowane do branży",
      description: "Uczysz się tego, co naprawdę działa w Twoim środowisku biznesowym.",
      alt: "Ikona Szkolenia dopasowane do branży"
    },
    {
      icon: "https://halstein.qodeinteractive.com/wp-content/uploads/2021/11/icon-h6-04.png",
      title: "Efekty widoczne w działaniu",
      description: "Zdobywasz wiedzę, która przekłada się na realne zmiany w organizacji.",
      alt: "Ikona Efekty widoczne w działaniu"
    }
  ];

  return (
    <section id="korzysci" className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionHeader 
          subtitle="Dlaczego warto wybrać Presto Consulting"
          title="Cztery konkretne korzyści ze współpracy z nami"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className={`group flex flex-col items-start p-8 rounded-2xl shadow-soft bg-gradient-to-br from-gray-50/70 to-white/70 backdrop-blur-sm transition-all duration-500 hover:shadow-large hover:scale-105 hover:bg-white/80 border border-gray-100/50 animate-fade-in-up`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative mb-6">
                <img
                  src={benefit.icon}
                  alt={benefit.alt}
                  className="w-16 h-16 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
                  onError={(e) => { 
                    const target = e.target as HTMLImageElement;
                    target.src = `https://placehold.co/60x60/ADD8E6/000000?text=Icon+${index + 1}`; 
                  }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-transparent rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 font-inter group-hover:text-primary-700 transition-colors duration-300">
                {benefit.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed font-inter group-hover:text-gray-700 transition-colors duration-300">
                {benefit.description}
              </p>
              <a href="#" className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-all duration-300 font-inter group-hover:translate-x-1">
                View more
                <svg className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
