import React from 'react';
import SectionHeader from './SectionHeader';

const OffersSection: React.FC = () => {
  const offers = [
    {
      title: "ZARZĄDZANIA ZMIANĄ",
      subtitle: "SPECJALISTA DS.",
      description: "Kompleksowe szkolenie obejmujące podstawy zarządzania procesami zmian w organizacji, planowanie i komunikowanie transformacji.",
      details: "Program koncentruje się na roli lidera w zarządzaniu zmianą, narzędziach wspierających proces transformacji oraz metodach minimalizowania oporu wobec zmian.",
      outcome: "Uczestnicy nabędą umiejętności opracowywania strategii zmian i skutecznej komunikacji z otoczeniem podczas procesów organizacyjnych.",
      link: "/wp-content/uploads/2025/06/Zarzadzanie_zmiana_Opis_szkolenia.pdf"
    },
    {
      title: "ZARZĄDZANIA PROJEKTAMI",
      subtitle: "SPECJALISTA DS.",
      description: "Zaawansowane szkolenie z zakresu metodyk zarządzania projektami obejmujące uznane standardy branżowe.",
      details: "Program wprowadza w inicjowanie, planowanie, realizację i zamykanie projektów z wykorzystaniem nowoczesnych narzędzi i technik.",
      outcome: "Szczególny nacisk położony na zarządzanie ryzykiem, zespołami projektowymi oraz optymalizację procesów w różnych środowiskach organizacyjnych i branżowych.",
      link: "/wp-content/uploads/2025/06/Zarzadzanie_projektami_Opis_szkolenia.pdf"
    },
    {
      title: "SZTUCZNEJ INTELIGENCJI",
      subtitle: "SPECJALISTA DS.",
      description: "Innowacyjny program szkoleniowy wprowadzający w świat sztucznej inteligencji z perspektywą zrównoważonego rozwoju.",
      details: "Obejmuje zastosowanie technologii w optymalizacji procesów przemysłowych, zarządzaniu energią i ochronie środowiska.",
      outcome: "Uczestnicy poznają techniki komunikacji z modelami językowymi, narzędzia oparte o sztuczną inteligencję oraz aspekty etyczne i prawne wykorzystania nowoczesnych technologii.",
      link: "/wp-content/uploads/2025/06/Specjalista_ds_sztucznej_inteligencji_Opis_szkolenia.pdf"
    },
    {
      title: "OPTYMALIZACJI PROCESÓW Z CHATGPT",
      subtitle: "SPECJALISTA DS.",
      description: "Nowoczesne szkolenie łączące zieloną transformację biznesu z praktycznym wykorzystaniem sztucznej inteligencji w codziennej pracy.",
      details: "Program koncentruje się na praktycznym wykorzystaniu ChatGPT w różnych obszarach biznesowych, automatyzacji procesów i wspieraniu zrównoważonego rozwoju przedsiębiorstw.",
      outcome: "Uczestnicy nauczą się wykorzystywać AI do optymalizacji procesów, redukcji kosztów operacyjnych i wspierania zrównoważonego rozwoju w swojej organizacji.",
      link: "#" // Placeholder - do uzupełnienia przez klienta
    }
  ];

  return (
    <section className="py-20 px-6 md:px-12 bg-gradient-section">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          subtitle="Nasze specjalizacje"
          title="Rozwój zawodowy dla Twojej firmy - nasze programy szkoleniowe."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {offers.map((program, index) => (
            <div 
              key={index} 
              className="group bg-surface-primary/80 backdrop-blur-sm p-8 rounded-2xl shadow-soft flex flex-col justify-between transition-all duration-500 hover:shadow-large hover:scale-105 hover:bg-surface-primary/90 border border-border/50 animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div>
                <div className="relative overflow-hidden mb-4">
                  <h3 className="text-xl font-bold text-primary-light mb-2 font-inter transition-all duration-300 group-hover:text-primary-light-hover">
                    {program.subtitle}
                  </h3>
                  <h4 className="text-3xl font-extrabold text-primary mb-4 font-inter group-hover:text-primary-hover transition-colors duration-300">
                    {program.title}
                  </h4>
                </div>
                <p className="text-muted-foreground mb-4 font-inter leading-relaxed">
                  <strong>{program.description}</strong>
                </p>
                <p className="text-muted-foreground mb-4 font-inter leading-relaxed">{program.details}</p>
                <p className="text-muted-foreground mb-6 font-inter leading-relaxed">{program.outcome}</p>
              </div>
              <a
                href={program.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary-light font-semibold hover:text-primary-light-hover transition-all duration-300 font-inter group-hover:translate-x-1"
              >
                Program szkolenia
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

export default OffersSection;