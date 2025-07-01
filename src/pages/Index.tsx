
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
      <section id="programy" className="py-20 px-6 md:px-12 bg-gray-50 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url(https://placehold.co/1200x800/FFFFFF/000000?text=Tło+wzór)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        ></div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <h2 className="text-4xl font-extrabold text-center md:text-left mb-4">Programy rozwojowe dla firm</h2>
          <p className="text-xl text-center md:text-left text-gray-600 mb-12">
            Rozwijaj kompetencje, które przekładają się na realne wyniki biznesowe.
          </p>

          <div className="flex flex-col md:flex-row md:space-x-12">
            <div className="w-full md:w-1/2 mb-10 md:mb-0">
              <ul className="space-y-8">
                {[
                  { title: "Zarządzanie finansami", text: "Podejmuj trafne decyzje finansowe dzięki zrozumieniu kluczowych wskaźników i mechanizmów budżetowych. Naucz się analizować sytuację finansową firmy i planować budżet z uwzględnieniem celów strategicznych." },
                  { title: "Strategia i planowanie", text: "Naucz się projektować strategie, które wspierają wzrost i adaptację w zmiennym otoczeniu biznesowym. Poznaj metody analizy rynku, konkurencji i wewnętrznego potencjału organizacji." },
                  { title: "Rozwój sprzedaży i marketingu", text: "Pozyskaj narzędzia i umiejętności do budowania marki oraz zwiększania sprzedaży. Opanuj techniki skutecznej sprzedaży, budowania relacji z klientami i prowadzenia działań marketingowych." },
                  { title: "Skuteczna komunikacja w zespole", text: "Doskonal umiejętności, które budują zaangażowanie i usprawniają współpracę. Poznaj techniki motywowania zespołu, prowadzenia trudnych rozmów i budowania kultury organizacyjnej." },
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold mr-4 shadow-md">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="text-2xl font-semibold text-gray-800 mb-2">{item.title}</h4>
                      <p className="text-gray-600">{item.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-full md:w-1/2">
              <ul className="space-y-8">
                {[
                  { title: "Nowoczesne technologie w biznesie", text: "Zrozum wpływ innowacji i naucz się wykorzystywać technologie do optymalizacji działań. Poznaj narzędzia cyfrowe wspierające zarządzanie i automatyzację procesów." },
                  { title: "Automatyzacja i procesy", text: "Rozwijaj analityczne myślenie i ucz się podejmować decyzje w oparciu o dane. Opanuj metody analizy biznesowej, interpretacji wskaźników i planowania strategicznego." },
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold mr-4 shadow-md">
                      {index + 5}
                    </div>
                    <div>
                      <h4 className="text-2xl font-semibold text-gray-800 mb-2">{item.title}</h4>
                      <p className="text-gray-600">{item.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="flex flex-col md:flex-row min-h-[50vh]">
        <div className="w-full md:w-2/3 bg-[#121D35] text-white flex flex-col justify-end p-8 md:p-16 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url(https://placehold.co/600x800/1F0CD2/FFFFFF?text=Tło+abstrakcyjne)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
            }}
          ></div>
          <div className="relative z-10">
            <p className="text-lg text-blue-300 mb-2 font-medium">Umiejętności, które napędzają rozwój Twojej firmy</p>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              Wspieramy rozwój ludzi i organizacji poprzez praktyczną edukację biznesową.
            </h2>
            <button
              onClick={() => scrollToSection('korzysci')}
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-blue-900 transition duration-300 shadow-lg"
            >
              Czytaj dalej
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/3 bg-[#F4EBE2] flex items-center justify-center p-8 md:p-0">
          <img
            src="https://halstein.qodeinteractive.com/wp-content/uploads/2021/10/h3-img-6.jpg"
            alt="Biuro"
            className="w-full h-full object-cover rounded-lg shadow-lg md:rounded-none md:shadow-none"
            onError={(e) => { 
              const target = e.target as HTMLImageElement;
              target.src = 'https://placehold.co/800x600/F4EBE2/121D35?text=Obraz+niedostępny'; 
            }}
          />
        </div>
      </section>

      {/* New Offers Section */}
      <section className="py-20 px-6 md:px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <p className="text-lg text-blue-600 mb-2 font-medium">New offers</p>
          <h2 className="text-4xl font-extrabold mb-12">
            Rozwój zawodowy dla Twojej firmy - nasze programy szkoleniowe.
          </h2>

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
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg flex flex-col justify-between transition-transform transform hover:scale-105">
                <div>
                  <h3 className="text-xl font-bold text-blue-800 mb-2">{program.subtitle}</h3>
                  <h4 className="text-3xl font-extrabold text-gray-800 mb-4">{program.title}</h4>
                  <p className="text-gray-600 mb-4">
                    <strong>{program.description}</strong>
                  </p>
                  <p className="text-gray-600 mb-4">{program.details}</p>
                  <p className="text-gray-600 mb-6">{program.outcome}</p>
                </div>
                <a
                  href={program.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-blue-600 font-semibold hover:underline"
                >
                  Program szkolenia
                  <svg className="inline-block ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
          <p className="text-lg text-blue-600 mb-2 font-medium">Dlaczego warto wybrać Presto Consulting</p>
          <h2 className="text-4xl font-extrabold mb-12">Cztery konkretne korzyści ze współpracy z nami</h2>

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
              <div key={index} className="flex flex-col items-start p-6 rounded-lg shadow-md bg-gray-50 transition-transform transform hover:scale-105">
                <img
                  src={benefit.icon}
                  alt={benefit.alt}
                  className="w-16 h-16 mb-4"
                  onError={(e) => { 
                    const target = e.target as HTMLImageElement;
                    target.src = `https://placehold.co/60x60/ADD8E6/000000?text=Icon+${index + 1}`; 
                  }}
                />
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 mb-4">{benefit.description}</p>
                <a href="#" className="text-blue-600 font-semibold hover:underline">
                  View more
                  <svg className="inline-block ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section with Accordion */}
      <section className="flex flex-col md:flex-row min-h-[60vh] bg-gray-100">
        <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-0">
          <img
            src="https://halstein.qodeinteractive.com/wp-content/uploads/2021/10/h6-img-03.png"
            alt="Obraz firmowy"
            className="w-full h-full object-cover rounded-lg shadow-lg md:rounded-none md:shadow-none"
            onError={(e) => { 
              const target = e.target as HTMLImageElement;
              target.src = 'https://placehold.co/800x600/F8F8F8/121D35?text=Obraz+niedostępny'; 
            }}
          />
        </div>
        <div className="w-full md:w-1/2 bg-[#F8F8F8] p-8 md:p-16 flex flex-col justify-center">
          <h3 className="text-3xl font-extrabold text-gray-800 mb-6">
            Umiejętności, które napędzają rozwój Twojej firmy
          </h3>
          <p className="text-gray-600 mb-8">
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
      </section>

      {/* Call to Action Bar */}
      <section className="bg-blue-800 text-white py-12 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between rounded-lg shadow-xl m-4 md:m-8">
        <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-0 text-center md:text-left">
          Odpowiednia strategia dla Twojego biznesu jest na wyciągnięcie ręki
        </h3>
        <button
          onClick={() => scrollToSection('kontakt')}
          className="bg-white text-blue-800 px-8 py-3 rounded-full font-semibold hover:bg-blue-100 transition duration-300 shadow-lg"
        >
          Kontakt
        </button>
      </section>

      {/* Statistics Section */}
      <section className="py-20 px-6 md:px-12 bg-gray-50">
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
            <p className="text-lg text-blue-600 mb-2 font-medium">Skontaktuj się z nami</p>
            <h2 className="text-4xl font-extrabold mb-8">Porozmawiajmy o rozwoju Twojej firmy.</h2>
            <div className="bg-gray-100 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Formularz Kontaktowy</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Imię i Nazwisko</label>
                  <input type="text" id="name" name="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Twoje imię i nazwisko" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                  <input type="email" id="email" name="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Twój adres email" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Wiadomość</label>
                  <textarea id="message" name="message" rows={5} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Twoja wiadomość"></textarea>
                </div>
                <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300 shadow-lg">Wyślij wiadomość</button>
              </form>
            </div>
          </div>

          <div className="w-full md:w-1/4 bg-gray-50 p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Biuro</h3>
            <p className="text-gray-600 mb-2">
              <a href="https://www.google.com/maps/place/Jasna+33C,+Wilcza+G%C3%B3ra,+Poland/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                Jasna 33C, Wilcza Góra, Polska
              </a>
            </p>
            <p className="text-gray-600 mb-2">
              <a href="mailto:kontakt@prestoconsulting.pl" className="hover:underline">
                kontakt@prestoconsulting.pl
              </a>
            </p>
            <p className="text-gray-600 mb-6">
              <a href="tel:+48515103595" className="hover:underline">
                +48 515 103 595
              </a>
            </p>

            <h3 className="text-xl font-bold text-gray-800 mb-4">Jarosław Motyka</h3>
            <p className="text-gray-600 mb-2">
              <a href="mailto:jaroslaw@prestoconsulting.pl" className="hover:underline">
                jaroslaw@prestoconsulting.pl
              </a>
            </p>
            <p className="text-gray-600">
              <a href="tel:+48515103595" className="hover:underline">
                +48 515 103 595
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Presto Consulting. Wszelkie prawa zastrzeżone.</p>
      </footer>
    </div>
  );
};

export default Index;
