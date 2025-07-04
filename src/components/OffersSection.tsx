import React from 'react';
// Assuming SectionHeader is defined elsewhere and imported correctly
// import SectionHeader from './SectionHeader';

// Placeholder for SectionHeader component for self-contained code
const SectionHeader: React.FC<{ subtitle: string; title: string }> = ({ subtitle, title }) => (
  <div className="text-center mb-12">
    <h2 className="text-lg font-semibold text-primary-light mb-2">{subtitle}</h2>
    <h1 className="text-4xl md:text-5xl font-extrabold text-foreground leading-tight">{title}</h1>
  </div>
);

const OffersSection: React.FC = () => {
  const offers = [
    {
      title: "ZARZĄDZANIA ZMIANĄ",
      subtitle: "SPECJALISTA DS.",
      description: "Kompleksowe szkolenie, które wyposaży Cię w kluczowe umiejętności zarządzania procesami zmian w organizacji, od planowania po skuteczną komunikację transformacji.",
      details: "Program skupia się na roli lidera w dynamicznym środowisku zmian, prezentując zaawansowane narzędzia i strategie minimalizowania oporu oraz budowania zaangażowania.",
      outcome: "Po ukończeniu szkolenia będziesz w stanie efektywnie opracowywać i wdrażać strategie zmian, a także prowadzić skuteczną komunikację z zespołem i otoczeniem biznesowym.",
      link: "/wp-content/uploads/2025/06/Zarzadzanie_zmiana_Opis_szkolenia.pdf"
    },
    {
      title: "ZARZĄDZANIA PROJEKTAMI",
      subtitle: "SPECJALISTA DS.",
      description: "Zaawansowany program szkoleniowy oparty na uznanych metodykach i standardach branżowych, przygotowujący do efektywnego zarządzania projektami.",
      details: "Poznaj pełny cykl życia projektu – od inicjowania i planowania, przez realizację, aż po zamknięcie. Szkolenie obejmuje nowoczesne narzędzia i techniki zarządzania.",
      outcome: "Zdobędziesz praktyczne umiejętności w zarządzaniu ryzykiem, budowaniu i motywowaniu zespołów projektowych oraz optymalizacji procesów w różnorodnych środowiskach organizacyjnych.",
      link: "/wp-content/uploads/2025/06/Zarzadzanie_projektami_Opis_szkolenia.pdf"
    },
    {
      title: "SZTUCZNEJ INTELIGENCJI",
      subtitle: "SPECJALISTA DS.",
      description: "Innowacyjny program wprowadzający w świat sztucznej inteligencji, z naciskiem na jej zastosowanie w kontekście zrównoważonego rozwoju i efektywności biznesowej.",
      details: "Szkolenie obejmuje praktyczne zastosowania technologii AI w optymalizacji procesów przemysłowych, zarządzaniu energią oraz ochronie środowiska.",
      outcome: "Nauczysz się efektywnie komunikować z modelami językowymi, wykorzystywać narzędzia oparte na AI oraz zrozumiesz kluczowe aspekty etyczne i prawne nowoczesnych technologii.",
      link: "/wp-content/uploads/2025/06/Specjalista_ds_sztucznej_inteligencji_Opis_szkolenia.pdf"
    },
    {
      title: "OPTYMALIZACJI PROCESÓW Z CHATGPT",
      subtitle: "SPECJALISTA DS.",
      description: "Nowoczesne szkolenie łączące zieloną transformację biznesu z praktycznym wykorzystaniem sztucznej inteligencji, szczególnie ChatGPT, w codziennej pracy.",
      details: "Program koncentruje się na praktycznym zastosowaniu ChatGPT w różnych obszarach biznesowych, automatyzacji procesów i wspieraniu zrównoważonego rozwoju przedsiębiorstw.",
      outcome: "Zdobędziesz umiejętności wykorzystywania AI do znaczącej optymalizacji procesów, redukcji kosztów operacyjnych oraz wspierania zrównoważonego rozwoju w Twojej organizacji.",
      link: "#" // Placeholder - do uzupełnienia przez klienta
    }
  ];

  return (
    <section className="py-20 px-6 md:px-12 bg-gradient-section overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          subtitle="Nasze specjalizacje"
          title="Rozwój zawodowy dla Twojej firmy - nasze programy szkoleniowe."
        />
        {/* Responsive Grid - Modern Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          {offers.map((program, index) => (
            <div
              key={index}
              className="group relative bg-surface-primary/85 backdrop-blur-md p-6 lg:p-8 rounded-3xl shadow-soft flex flex-col justify-between transition-all duration-700 hover:shadow-large hover:-translate-y-2 hover:bg-surface-primary/95 border border-border/30 hover:border-primary-light/20 animate-fade-in-up overflow-hidden"
              style={{
                animationDelay: `${index * 150}ms`,
                minHeight: '420px' // Consistent card height
              }}
            >
              {/* Gradient overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-light/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>

              {/* Content */}
              <div className="relative z-10">
                <div className="relative overflow-hidden mb-6">
                  {/* Icon/Badge */}
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-light/10 rounded-2xl mb-4 group-hover:bg-primary-light/20 transition-all duration-500">
                    <div className="w-6 h-6 bg-primary-light/60 rounded-lg group-hover:bg-primary-light/80 transition-all duration-500"></div>
                  </div>

                  <h3 className="text-sm font-bold text-primary-light mb-3 font-inter uppercase tracking-wider transition-all duration-300 group-hover:text-primary-light-hover">
                    {program.subtitle}
                  </h3>
                  <h4 className="text-2xl lg:text-3xl font-extrabold text-primary mb-5 font-inter group-hover:text-primary-hover transition-colors duration-300 leading-tight">
                    {program.title}
                  </h4>
                </div>

                <div className="space-y-3 mb-6">
                  <p className="text-muted-foreground font-inter leading-relaxed text-sm lg:text-base">
                    <strong className="text-foreground">{program.description}</strong>
                  </p>
                  <p className="text-muted-foreground font-inter leading-relaxed text-sm opacity-90">{program.details}</p>
                  <p className="text-muted-foreground font-inter leading-relaxed text-sm opacity-85">{program.outcome}</p>
                </div>
              </div>

              {/* CTA Button */}
              <div className="relative z-10 mt-auto">
                <a
                  href={program.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full px-6 py-3 bg-primary-light/10 hover:bg-primary-light/20 rounded-2xl text-primary-light font-semibold hover:text-primary-light-hover transition-all duration-300 font-inter group-hover:translate-x-1 border border-primary-light/20 hover:border-primary-light/40"
                >
                  <span>Program szkolenia</span>
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
        {/* Additional decorative elements */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary-light/5 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl opacity-50"></div>
      </div>
    </section>
  );
};

export default OffersSection;
