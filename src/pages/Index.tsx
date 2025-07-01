import React, { useState } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Counter from '../components/Counter';
import Accordion from '../components/Accordion';

const Index = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className="font-inter antialiased text-gray-900">
      <Header 
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
        scrollToSection={scrollToSection}
      />

      <HeroSection scrollToSection={scrollToSection} />

      {/* Development Programs Section */}
      <section id="programy" className="py-20 px-6 md:px-12 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url(https://placehold.co/1200x800/FFFFFF/000000?text=Tło+wzór)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        ></div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 font-inter bg-gradient-to-r from-brand-navy to-gray-700 bg-clip-text text-transparent">
              Programy rozwojowe dla firm
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-inter">
              Rozwijaj kompetencje, które przekładają się na realne wyniki biznesowe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              {[
                { title: "Zarządzanie finansami", text: "Podejmuj trafne decyzje finansowe dzięki zrozumieniu kluczowych wskaźników i mechanizmów budżetowych. Naucz się analizować sytuację finansową firmy i planować budżet z uwzględnieniem celów strategicznych." },
                { title: "Strategia i planowanie", text: "Naucz się projektować strategie, które wspierają wzrost i adaptację w zmiennym otoczeniu biznesowym. Poznaj metody analizy rynku, konkurencji i wewnętrznego potencjału organizacji." },
                { title: "Rozwój sprzedaży i marketingu", text: "Pozyskaj narzędzia i umiejętności do budowania marki oraz zwiększania sprzedaży. Opanuj techniki skutecznej sprzedaży, budowania relacji z klientami i prowadzenia działań marketingowych." },
                { title: "Skuteczna komunikacja w zespole", text: "Doskonal umiejętności, które budują zaangażowanie i usprawniają współpracę. Poznaj techniki motywowania zespołu, prowadzenia trudnych rozmów i budowania kultury organizacyjnej." },
              ].map((item, index) => (
                <div key={index} className="group flex items-start p-6 rounded-2xl bg-white/70 backdrop-blur-sm shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-700 text-white rounded-xl flex items-center justify-center text-lg font-bold mr-6 shadow-medium group-hover:shadow-large transition-all duration-300">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="text-2xl font-semibold text-gray-800 mb-3 font-inter group-hover:text-primary-700 transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed font-inter group-hover:text-gray-700 transition-colors duration-300">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-8">
              {[
                { title: "Nowoczesne technologie w biznesie", text: "Zrozum wpływ innowacji i naucz się wykorzystywać technologie do optymalizacji działań. Poznaj narzędzia cyfrowe wspierające zarządzanie i automatyzację procesów." },
                { title: "Automatyzacja i procesy", text: "Rozwijaj analityczne myślenie i ucz się podejmować decyzje w oparciu o dane. Opanuj metody analizy biznesowej, interpretacji wskaźników i planowania strategicznego." },
              ].map((item, index) => (
                <div key={index} className="group flex items-start p-6 rounded-2xl bg-white/70 backdrop-blur-sm shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-700 text-white rounded-xl flex items-center justify-center text-lg font-bold mr-6 shadow-medium group-hover:shadow-large transition-all duration-300">
                    {index + 5}
                  </div>
                  <div>
                    <h4 className="text-2xl font-semibold text-gray-800 mb-3 font-inter group-hover:text-primary-700 transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed font-inter group-hover:text-gray-700 transition-colors duration-300">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="flex flex-col md:flex-row min-h-[60vh]">
        <div className="w-full md:w-2/3 bg-gradient-to-br from-brand-navy to-gray-900 text-white flex flex-col justify-end p-8 md:p-16 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `url(https://placehold.co/600x800/1F0CD2/FFFFFF?text=Tło+abstrakcyjne)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 to-transparent"></div>
          <div className="relative z-10 animate-fade-in-up">
            <p className="text-lg text-brand-blue-300 mb-2 font-medium font-inter tracking-wide">
              Umiejętności, które napędzają rozwój Twojej firmy
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 font-inter">
              Wspieramy rozwój ludzi i organizacji poprzez 
              <span className="bg-gradient-to-r from-brand-blue-300 to-blue-400 bg-clip-text text-transparent"> praktyczną edukację biznesową</span>.
            </h2>
            <button
              onClick={() => scrollToSection('korzysci')}
              className="group bg-transparent border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-brand-navy transition-all duration-300 shadow-medium font-semibold font-inter tracking-wide hover:shadow-large hover:scale-105 active:scale-95"
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
        <div className="w-full md:w-1/3 bg-gradient-to-br from-brand-cream to-amber-50 flex items-center justify-center p-8 md:p-0 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white/20"></div>
          <img
            src="https://halstein.qodeinteractive.com/wp-content/uploads/2021/10/h3-img-6.jpg"
            alt="Biuro"
            className="w-full h-full object-cover rounded-lg shadow-large md:rounded-none md:shadow-none transition-transform duration-700 hover:scale-105"
            onError={(e) => { 
              const target = e.target as HTMLImageElement;
              target.src = 'https://placehold.co/800x600/F4EBE2/121D35?text=Obraz+niedostępny'; 
            }}
          />
        </div>
      </section>

      {/* New Offers Section */}
      <section className="py-20 px-6 md:px-12 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <p className="text-lg text-primary-600 mb-2 font-medium font-inter tracking-wide">New offers</p>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 font-inter bg-gradient-to-r from-brand-navy to-gray-700 bg-clip-text text-transparent">
              Rozwój zawodowy dla Twojej firmy - nasze programy szkoleniowe.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
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
              }
            ].map((program, index) => (
              <div key={index} className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-soft flex flex-col justify-between transition-all duration-500 hover:shadow-large hover:scale-105 hover:bg-white/90 border border-gray-100/50">
                <div>
                  <h3 className="text-xl font-bold text-primary-800 mb-2 font-inter">{program.subtitle}</h3>
                  <h4 className="text-3xl font-extrabold text-brand-navy mb-4 font-inter group-hover:text-primary-700 transition-colors duration-300">{program.title}</h4>
                  <p className="text-gray-600 mb-4 font-inter leading-relaxed">
                    <strong>{program.description}</strong>
                  </p>
                  <p className="text-gray-600 mb-4 font-inter leading-relaxed">{program.details}</p>
                  <p className="text-gray-600 mb-6 font-inter leading-relaxed">{program.outcome}</p>
                </div>
                <a
                  href={program.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors duration-300 font-inter group-hover:translate-x-1"
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

      {/* Benefits Section */}
      <section id="korzysci" className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <p className="text-lg text-primary-600 mb-2 font-medium font-inter tracking-wide">Dlaczego warto wybrać Presto Consulting</p>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 font-inter bg-gradient-to-r from-brand-navy to-gray-700 bg-clip-text text-transparent">
              Cztery konkretne korzyści ze współpracy z nami
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
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
            ].map((benefit, index) => (
              <div key={index} className="group flex flex-col items-start p-8 rounded-2xl shadow-soft bg-gradient-to-br from-gray-50/70 to-white/70 backdrop-blur-sm transition-all duration-500 hover:shadow-large hover:scale-105 hover:bg-white/80 border border-gray-100/50">
                <img
                  src={benefit.icon}
                  alt={benefit.alt}
                  className="w-16 h-16 mb-6 transition-transform duration-300 group-hover:scale-110"
                  onError={(e) => { 
                    const target = e.target as HTMLImageElement;
                    target.src = `https://placehold.co/60x60/ADD8E6/000000?text=Icon+${index + 1}`; 
                  }}
                />
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

      {/* Why Choose Us Section with Accordion */}
      <section className="flex flex-col md:flex-row min-h-[60vh] bg-gradient-to-br from-gray-100 to-gray-50">
        <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-0 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/30"></div>
          <img
            src="https://halstein.qodeinteractive.com/wp-content/uploads/2021/10/h6-img-03.png"
            alt="Obraz firmowy"
            className="w-full h-full object-cover rounded-lg shadow-large md:rounded-none md:shadow-none transition-transform duration-700 hover:scale-105"
            onError={(e) => { 
              const target = e.target as HTMLImageElement;
              target.src = 'https://placehold.co/800x600/F8F8F8/121D35?text=Obraz+niedostępny'; 
            }}
          />
        </div>
        <div className="w-full md:w-1/2 bg-gradient-to-br from-gray-50/80 to-white/80 backdrop-blur-sm p-8 md:p-16 flex flex-col justify-center">
          <div className="animate-fade-in-up">
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6 font-inter">
              Umiejętności, które 
              <span className="bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent"> napędzają rozwój</span> 
              Twojej firmy
            </h3>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed font-inter">
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

      {/* Call to Action Bar */}
      <section className="bg-gradient-to-r from-primary-800 to-primary-900 text-white py-16 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between rounded-2xl shadow-large m-4 md:m-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-transparent"></div>
        <h3 className="relative text-2xl md:text-3xl font-bold mb-6 md:mb-0 text-center md:text-left font-inter max-w-2xl">
          Odpowiednia strategia dla Twojego biznesu jest na wyciągnięcie ręki
        </h3>
        <button
          onClick={() => scrollToSection('kontakt')}
          className="relative group bg-white text-primary-800 px-10 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-medium font-inter tracking-wide hover:shadow-large hover:scale-105 active:scale-95"
        >
          <span className="flex items-center">
            Kontakt
            <svg className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </span>
        </button>
      </section>

      {/* Statistics Section */}
      <section className="py-20 px-6 md:px-12 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Counter endDigit={120} title="Przeprowadzonych szkoleń" text="Zrealizowane programy edukacyjne dla firm w różnych branżach." />
          <Counter endDigit={860} title="Uczestników szkoleń" text="Specjaliści, liderzy i zespoły, które zdobyły nowe kompetencje." />
          <Counter endDigit={310} title="Godzin szkoleniowych" text="Wysokiej jakości sesje prowadzone przez doświadczonych trenerów." />
          <Counter endDigit={85} title="Firm, które nam zaufały" text="Organizacje z sektora prywatnego i publicznego w całej Polsce." />
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-20 px-6 md:px-12 bg-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url(https://placehold.co/1200x800/FFFFFF/000000?text=Tło+wzór)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        ></div>
        <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row md:space-x-12">
          <div className="w-full md:w-3/4 mb-10 md:mb-0">
            <div className="animate-fade-in-up">
              <p className="text-lg text-primary-600 mb-2 font-medium font-inter tracking-wide">Skontaktuj się z nami</p>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-8 font-inter bg-gradient-to-r from-brand-navy to-gray-700 bg-clip-text text-transparent">
                Porozmawiajmy o rozwoju Twojej firmy.
              </h2>
            </div>
            <div className="bg-gradient-to-br from-gray-50/80 to-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-soft border border-gray-100/50">
              <h3 className="text-2xl font-semibold mb-6 font-inter text-gray-800">Formularz Kontaktowy</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2 font-inter">Imię i Nazwisko</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    className="w-full py-3 px-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-white/70 backdrop-blur-sm font-inter" 
                    placeholder="Twoje imię i nazwisko" 
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2 font-inter">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    className="w-full py-3 px-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-white/70 backdrop-blur-sm font-inter" 
                    placeholder="Twój adres email" 
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2 font-inter">Wiadomość</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={5} 
                    className="w-full py-3 px-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-white/70 backdrop-blur-sm font-inter" 
                    placeholder="Twoja wiadomość"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="group bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 py-4 rounded-full hover:from-primary-700 hover:to-primary-800 transition-all duration-300 shadow-medium font-semibold font-inter tracking-wide hover:shadow-large hover:scale-105 active:scale-95"
                >
                  <span className="flex items-center">
                    Wyślij wiadomość
                    <svg className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                    </svg>
                  </span>
                </button>
              </form>
            </div>
          </div>

          <div className="w-full md:w-1/4 bg-gradient-to-br from-gray-50/80 to-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-soft border border-gray-100/50">
            <h3 className="text-xl font-bold text-gray-800 mb-6 font-inter">Biuro</h3>
            <div className="space-y-4 text-gray-600 font-inter">
              <p>
                <a href="https://www.google.com/maps/place/Jasna+33C,+Wilcza+G%C3%B3ra,+Poland/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-600 transition-colors duration-300">
                  Jasna 33C, Wilcza Góra, Polska
                </a>
              </p>
              <p>
                <a href="mailto:kontakt@prestoconsulting.pl" className="hover:text-primary-600 transition-colors duration-300">
                  kontakt@prestoconsulting.pl
                </a>
              </p>
              <p>
                <a href="tel:+48515103595" className="hover:text-primary-600 transition-colors duration-300">
                  +48 515 103 595
                </a>
              </p>
            </div>

            <h3 className="text-xl font-bold text-gray-800 mb-4 mt-8 font-inter">Jarosław Motyka</h3>
            <div className="space-y-2 text-gray-600 font-inter">
              <p>
                <a href="mailto:jaroslaw@prestoconsulting.pl" className="hover:text-primary-600 transition-colors duration-300">
                  jaroslaw@prestoconsulting.pl
                </a>
              </p>
              <p>
                <a href="tel:+48515103595" className="hover:text-primary-600 transition-colors duration-300">
                  +48 515 103 595
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12 text-center">
        <p className="font-inter text-gray-300">
          &copy; {new Date().getFullYear()} Presto Consulting. Wszelkie prawa zastrzeżone.
        </p>
      </footer>
    </div>
  );
};

export default Index;
