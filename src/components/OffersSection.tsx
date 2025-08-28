import React, { useState } from 'react';
import TrainingModal from './TrainingModal';

// Placeholder for SectionHeader component for self-contained code
const SectionHeader: React.FC<{ subtitle: string; title: string }> = ({ subtitle, title }) => (
  <div className="text-center mb-12">
    <h2 className="text-lg font-semibold text-primary-light mb-2">{subtitle}</h2>
    <h1 className="text-4xl md:text-5xl font-extrabold text-foreground leading-tight">{title}</h1>
  </div>
);

interface TrainingData {
  title: string;
  subtitle: string;
  description: string;
  details: string;
  outcome: string;
  fullProgram: string;
  targetGroup: string;
  participationConditions: string;
  organizationalConditions: string;
  groupSize: string;
  duration: string;
  location: string;
  price: string;
  funding: string;
}

const OffersSection: React.FC = () => {
  const [selectedTraining, setSelectedTraining] = useState<TrainingData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const offers: TrainingData[] = [
    {
      title: "ZARZĄDZANIA ZMIANĄ",
      subtitle: "SPECJALISTA DS.",
      description: "Kompleksowe szkolenie, które wyposaży Cię w kluczowe umiejętności zarządzania procesami zmian w organizacji, od planowania po skuteczną komunikację transformacji.",
      details: "Program skupia się na roli lidera w dynamicznym środowisku zmian, prezentując zaawansowane narzędzia i strategie minimalizowania oporu oraz budowania zaangażowania.",
      outcome: "Po ukończeniu szkolenia będziesz w stanie efektywnie opracowywać i wdrażać strategie zmian, a także prowadzić skuteczną komunikację z zespołem i otoczeniem biznesowym.",
      fullProgram: `Niniejsze szkolenie prowadzi do nabycia kwalifikacji zawodowych. Szkolenie obejmuje szeroki zakres zagadnień dotyczących zarządzania procesami zmian w organizacji, w tym: planowania, komunikowania i wdrażania transformacji. Przygotowuje także do stosowania narzędzi pozwalających na skuteczne komunikowanie się z otoczeniem podczas procesu zmian, minimalizowania oporu wobec zmian oraz korzystania z nowoczesnych narzędzi i technik wspierających efektywne zarządzanie zmianą.

Moduł 1 – Podstawy zarządzania zmianą
Moduł 2 – Człowiek w zmianie jak przekonać do zmian współpracowników i siebie. Rola lidera w zarządzaniu zmianą
Moduł 3 - Narzędzia zarządzania zmianą i planowanie procesu transformacji
Moduł 4 - Komunikowanie zmian
Moduł 5 - Jak zmiana wpływa na ludzi i organizacje.
Walidacja – egzamin zewnętrzny (test teoretyczny).`,
      targetGroup: "Grupa docelowa to osoby chcące wzbogacić i rozwijać swoją wiedzę i umiejętności w zakresie zarządzania zmianą, w tym m.in. znajomość procesów zarządzania zmianą w organizacjach, wiedzę z zakresu komunikacji w procesach zmian, czy umiejętność opracowywania strategii zmian.\n\nSzkolenie dedykowane jest osobom dorosłym, które planują lub wdrażają zmiany w organizacjach (przedsiębiorstwach, fundacjach, stowarzyszeniach, instytucjach, urzędach) przechodzących albo planujących zmianę.",
      participationConditions: "Nie jest wymagane od uczestników do udziału w szkoleniu posiadanie dodatkowej wiedzy, umiejętności czy doświadczenia.",
      organizationalConditions: `Organizator szkolenia zapewnia materiały szkoleniowe dla każdego uczestnika (skrypt związany z tematem szkolenia, notes, długopis) w liczbie 1szt/os.\n\nSala szkoleniowa wyposażona jest w flipchart, rzutnik, stół, ekran oraz krzesła zapewniający komfortowy udział w szkoleniu.\n\nSzkolenie organizowane jest w formie stacjonarnej i obejmuje łącznie 20 h, w tym 70% to zajęcia praktyczne oraz 30% to zajęcia teoretyczne. W trakcie każdego dnia szkolenia przewidziano jedną dłuższą przerwę 25 minutową oraz 2 przerwy kawowe 10 minutowe. Czas przerw nie wlicza się w czas szkolenia. Podczas szkolenia przewidziane są m.in. prace indywidualne, prace w grupach, warsztaty, wykłady, dyskusja, studia przypadków.\n\nWalidacja - Egzamin zewnętrzny, odbędzie się na koniec szkolenia w formie stacjonarnej i potwierdza nabycie kwalifikacji zawodowej: Specjalista ds. zarządzania zmianą.`,
      groupSize: "W celu osiągnięcia optymalnego efektu uczenia szkolenie realizowane jest w grupie składającej się z minimum 4, a maksymalnie 20 osób.",
      duration: "Szkolenie trwa 20 godzin dydaktycznych i realizowane jest w ciągu dwóch dni.",
      location: "Szkolenie realizowane jest w Bielsku-Białej przy ul. 3 Maja 13 albo w miejscu uzgodnionym wspólnie z klientem.",
      price: "4 400,00 zł brutto - cena za całość szkolenia",
      funding: "Istnieje możliwość uzyskania dofinansowania szkolenia ze środków UE. W celu uzyskania bliższych informacji prosimy o kontakt."
    },
    {
      title: "ZARZĄDZANIA PROJEKTAMI",
      subtitle: "SPECJALISTA DS.",
      description: "Zaawansowany program szkoleniowy oparty na uznanych metodykach i standardach branżowych, przygotowujący do efektywnego zarządzania projektami.",
      details: "Poznaj pełny cykl życia projektu – od inicjowania i planowania, przez realizację, aż po zamknięcie. Szkolenie obejmuje nowoczesne narzędzia i techniki zarządzania.",
      outcome: "Zdobędziesz praktyczne umiejętności w zarządzaniu ryzykiem, budowaniu i motywowaniu zespołów projektowych oraz optymalizacji procesów w różnorodnych środowiskach organizacyjnych.",
      fullProgram: `Niniejsze szkolenie prowadzi do nabycia kwalifikacji zawodowych. Szkolenie obejmuje szeroki zakres zagadnień dotyczących zarządzania projektami z zastosowaniem uznanych metodyk, takich jak PMI, PRINCE2, Agile, Scrum - dzięki kompleksowemu podejściu, uczestnicy zdobędą wiedzę teoretyczną i umiejętności praktyczne, które będą mogli wykorzystać w różnych branżach i środowiskach zawodowych.

Dzień 1: Podstawy i Planowanie Projektów
Moduł 1: Wprowadzenie do zarządzania projektami
Moduł 2: Metodologie zarządzania projektami
Moduł 3: Inicjowanie projektu
Moduł 4: Planowanie projektu

Dzień 2: Realizacja, Monitorowanie, Zamykanie Projektów, Walidacja
Moduł 5: Realizacja projektu
Moduł 6: Zarządzanie ryzykiem w praktyce
Moduł 7: Zamykanie projektu
Moduł 8: Ćwiczenia praktyczne
Moduł 9: Walidacja - Egzamin zewnętrzny w formie testu teoretycznego.`,
      targetGroup: "Szkolenie skierowane jest do osób dorosłych, które chcą zdobyć kompleksową wiedzę w zakresie skutecznego organizowania i zarządzania projektami i poznać spektrum różnych metodyk zarządzania projektami w celu wyboru optymalnej do realizacji określonych działań w danej branży. Szkolenie dedykowane jest do przyszłych i obecnych członków zespołów projektowych, którzy aspirują do pracy w obszarze zarządzania projektami w różnych rolach.",
      participationConditions: "Nie jest wymagane od uczestników do udziału w szkoleniu posiadanie dodatkowej wiedzy, umiejętności czy doświadczenia.",
      organizationalConditions: `Organizator szkolenia zapewnia materiały szkoleniowe dla każdego uczestnika (skrypt związany z tematem szkolenia, notes, długopis) w liczbie 1szt/os.\n\nSala szkoleniowa wyposażona jest w flipchart, rzutnik, stół, ekran oraz krzesła zapewniający komfortowy udział w szkoleniu.\n\nSzkolenie organizowane jest w formie stacjonarnej i obejmuje łącznie 20 h, w tym 60% to zajęcia praktyczne oraz 40% to zajęcia teoretyczne. W trakcie każdego dnia szkolenia przewidziano jedną dłuższą przerwę 25 minutową oraz 2 przerwy kawowe 10 minutowe. Podczas szkolenia przewidziane są m.in. prace indywidualne, prace w grupach, warsztaty, wykłady, dyskusja, studia przypadków.\n\nWalidacja - Egzamin zewnętrzny, odbędzie się na koniec szkolenia w formie stacjonarnej i potwierdza nabycie kwalifikacji zawodowej: Specjalista ds. zarządzania projektami.`,
      groupSize: "W celu osiągnięcia optymalnego efektu uczenia szkolenie realizowane jest w grupie składającej się z minimum 4, a maksymalnie 20 osób.",
      duration: "Szkolenie trwa 20 godzin dydaktycznych i realizowane jest w ciągu dwóch dni.",
      location: "Szkolenie realizowane jest w Bielsku-Białej przy ul. 3 Maja 13 albo w miejscu uzgodnionym wspólnie z klientem.",
      price: "4 400,00 zł brutto - cena za całość szkolenia",
      funding: "Istnieje możliwość uzyskania dofinansowania szkolenia ze środków UE. W celu uzyskania bliższych informacji prosimy o kontakt."
    },
    {
      title: "SZTUCZNEJ INTELIGENCJI",
      subtitle: "SPECJALISTA DS.",
      description: "Innowacyjny program wprowadzający w świat sztucznej inteligencji, z naciskiem na jej zastosowanie w kontekście zrównoważonego rozwoju i efektywności biznesowej.",
      details: "Szkolenie obejmuje praktyczne zastosowania technologii AI w optymalizacji procesów przemysłowych, zarządzaniu energią oraz ochronie środowiska.",
      outcome: "Nauczysz się efektywnie komunikować z modelami językowymi, wykorzystywać narzędzia oparte na AI oraz zrozumiesz kluczowe aspekty etyczne i prawne nowoczesnych technologii.",
      fullProgram: `Szkolenie wprowadza uczestników do świata AI, skupiając się na podstawowych narzędziach i technikach. Celem jest rozwijanie przekrojowych umiejętności cyfrowych, które mogą być zastosowane w różnych branżach i dziedzinach takich jak optymalizacja procesów przemysłowych, technologie informacyjne, zarządzanie energią, transport, rolnictwo oraz ochrona środowiska. Dzięki temu szkolenie przygotowuje uczestników do skutecznego wykorzystywania AI w sposób, który wspiera zrównoważony rozwój, zieloną transformację i oszczędzanie energii. Szkolenie zawiera informacje i praktyczne ćwiczenia dotyczące zastosowania AI z naciskiem na cele pro-środowiskowe.

• Wprowadzenie do AI
• Zastosowanie sztucznej inteligencji w różnych dziedzinach, przedstawienie celów strategii GreenComp Europejskie Ramy Kompetencji w zakresie zrównoważonego rozwoju.
• Typy AI.
• Problemy etyczne, prawne i środowiskowe wykorzystania AI.
• Zasady komunikacji z modelami AI w kontekście zrównoważonego rozwoju.
• Techniki promptingu.
• Praca z modelami językowymi w kontekście zrównoważonego.
• Rozwój i udoskonalanie technik pracy z różnymi modelami
• Narzędzia oparte o AI.
• Walidacja - egzamin zewnętrzny w formie testu on line.`,
      targetGroup: "Grupa docelowa to osoby dorosłe chcące podnieść kompetencje cyfrowe w zakresie wiedzy i umiejętności dotyczących narzędzi opartych na sztucznej inteligencji oraz zrównoważonego rozwoju, które planują lub realizują już pracę w organizacjach z potencjałem do tworzenia zielonych miejsc pracy. Szkolenie dedykowane jest osobom odpowiedzialnym lub planującym wzięcie odpowiedzialności za rozwój zrównoważonych rozwiązań w swoich organizacjach.",
      participationConditions: "Szkolenie skierowane jest do osób o różnym wykształceniu i doświadczeniu. Uczestnicy szkolenia powinni posiadać podstawowe umiejętności obsługi komputera/tabletu. Nie jest wymagane doświadczanie w korzystaniu z jakichkolwiek modeli AI.",
      organizationalConditions: `Realizator szkolenia zapewnia odpowiednią infrastrukturę techniczną związaną z dostarczeniem na czas usługi uczestnikom szkolenia komputerów/tabletów, na których udostępnione zostaną materiały szkoleniowe (skrypt w formie multimedialnej).\n\nOrganizator szkolenia dostarcza komputery/tablety w liczbie 1szt/os. oraz licencje niezbędne do przeprowadzenia szkolenia.\n\nSzkolenie organizowane jest w formie stacjonarnej i obejmuje łącznie 18 h, w tym 80% to zajęcia praktyczne oraz 20% to zajęcia teoretyczne. W trakcie każdego dnia szkolenia przewidziano jedną dłuższą przerwę 25 minutową oraz 2 przerwy kawowe 10 minutowe. Czas przerw nie wlicza się w czas szkolenia. Podczas szkolenia przewidziane są m.in. prace indywidualne, prace w grupach, warsztaty, wykłady, studia przypadków.\n\nWalidacja odbędzie się na koniec szkolenia i wykonywana jest za pośrednictwem testu teoretycznego dostępnego on-line na platformie Instytucji Certyfikującej. Egzamin zewnętrzny, odbędzie się w formie zdalnej (on-line) w czasie rzeczywistym i potwierdza nabycie kwalifikacji zawodowej: Specjalista ds. sztucznej inteligencji w zakresie zrównoważonego rozwoju.`,
      groupSize: "W celu osiągnięcia optymalnego efektu uczenia szkolenie realizowane jest w grupie składającej się z minimum 4, a maksymalnie 20 osób.",
      duration: "Szkolenie trwa 18 godzin dydaktycznych i realizowane jest w ciągu dwóch dni.",
      location: "Szkolenie realizowane jest w Bielsku-Białej przy ul. 3 Maja 13 albo w miejscu uzgodnionym wspólnie z klientem.",
      price: "5 220,00 zł brutto - cena za całość szkolenia",
      funding: "Istnieje możliwość uzyskania dofinansowania szkolenia ze środków UE. W celu uzyskania bliższych informacji prosimy o kontakt."
    },
    {
      title: "OPTYMALIZACJI PROCESÓW Z CHATGPT",
      subtitle: "SPECJALISTA DS.",
      description: "Nowoczesne szkolenie łączące zieloną transformację biznesu z praktycznym wykorzystaniem sztucznej inteligencji, szczególnie ChatGPT, w codziennej pracy.",
      details: "Program koncentruje się na praktycznym zastosowaniu ChatGPT w różnych obszarach biznesowych, automatyzacji procesów i wspieraniu zrównoważonego rozwoju przedsiębiorstw.",
      outcome: "Zdobędziesz umiejętności wykorzystywania AI do znaczącej optymalizacji procesów, redukcji kosztów operacyjnych oraz wspierania zrównoważonego rozwoju w Twojej organizacji.",
      fullProgram: `Program szkolenia został zaprojektowany tak, aby krok po kroku wprowadzać uczestników w działanie narzędzia, pokazując, jak efektywnie wykorzystywać ChatGPT do automatyzacji zadań, optymalizacji procesów oraz poprawy produktywności w różnych obszarach biznesowych. Szkolenie wspiera rozwój zielonych kompetencji, pokazując, jak technologie oparte na sztucznej inteligencji mogą przyczynić się do zrównoważonego rozwoju. Uczestnicy dowiedzą się, jak zastosowanie ChatGPT może minimalizować zużycie zasobów, ograniczać ślad węglowy oraz wspierać transformację ekologiczną organizacji.

• Wprowadzenie do ChatGPT i zielonych kompetencji
• Wykorzystanie ChatGPT w obsłudze klienta i komunikacji z klientem
• Zarządzanie projektami przy wykorzystaniu ChatGPT
• Organizacja spotkań i zarządzanie czasem pracy przy wykorzystaniu modeli ChatGPT
• Wykorzystanie modeli ChatGPT do prowadzenia działań marketingowych
• Sprzedaż - wykorzystanie narzędzi ChatGPT do optymalizacji procesów sprzedażowych
• Edukacja i szkolenia pracowników - przygotowywanie treści edukacyjnych przy wykorzystaniu ChatGPT
• Kreatywne myślenie i innowacyjne pomysły - wykorzystanie modeli ChatGPT
• Analiza danych i raportowanie przy wykorzystaniu ChatGPT
• Walidacja efektów uczenia się i podsumowanie szkolenia`,
      targetGroup: `Szkolenie skierowane jest do osób dorosłych, które chcą rozwijać swoje kompetencje w zakresie nowoczesnych technologii opartych na AI, takich jak ChatGPT, z naciskiem na ich zastosowanie w zrównoważonym rozwoju oraz zielonej gospodarce. Grupa docelowa obejmuje osoby pracujące lub chcące znaleźć pracę, w szczególności:

• pracowników działów sprzedaży, marketingu, obsługi klienta, HR, którzy pragną m.in. zintegrować ChatGPT z codziennymi zadaniami, poprawiając efektywność, kreatywność, co jest niezbędne w zasobooszczędnej zielonej gospodarce
• wszystkie osoby wchodzące na rynek pracy, uczące się lub poszukujące przekwalifikowania zawodowego, które chcą dostosować swoje umiejętności do wyzwań zielonej transformacji

Szkolenie ma charakter podstawowy i nie wymaga znajomości ChatGPT ani innych modeli opartych na AI.`,
      participationConditions: "Szkolenie ma charakter podstawowy i nie wymaga znajomości ChatGPT ani innych modeli opartych na AI. Jest skierowane do osób, które rozpoczynają swoją przygodę z AI i chcą poznać praktyczne możliwości jego zastosowania.",
      organizationalConditions: `Realizator szkolenia zapewnia odpowiednią infrastrukturę techniczną związaną z dostarczeniem na czas usługi uczestnikom szkolenia komputerów/tabletów, na których udostępnione zostaną materiały szkoleniowe (skrypt w formie multimedialnej).\n\nOrganizator szkolenia dostarcza komputery/tablety w liczbie 1szt/os. oraz licencje niezbędne do przeprowadzenia szkolenia.\n\nSzkolenie organizowane jest w formie stacjonarnej i obejmuje łącznie 20 h, w tym 64% to zajęcia praktyczne oraz 36% to zajęcia teoretyczne. W trakcie każdego dnia szkolenia przewidziano jedną dłuższą przerwę 20 minutową oraz 2 przerwy kawowe 10 minutowe. Czas przerw nie wlicza się w czas szkolenia. Podczas szkolenia przewidziane są m.in. prace indywidualne, prace w grupach, warsztaty, wykłady, studia przypadków.\n\nWalidacja odbędzie się na koniec szkolenia i wykonywana jest za pośrednictwem testu teoretycznego dostępnego on-line na platformie Instytucji Certyfikującej. Egzamin zewnętrzny, odbędzie się w formie zdalnej (on-line) w czasie rzeczywistym i potwierdza nabycie kwalifikacji zawodowej: Specjalista ds. optymalizacji procesów z ChatGPT – zielona transformacja biznesu.`,
      groupSize: "W celu osiągnięcia optymalnego efektu uczenia szkolenie realizowane jest w grupie składającej się z minimum 4, a maksymalnie 20 osób.",
      duration: "Szkolenie trwa 20 godzin dydaktycznych i realizowane jest w ciągu dwóch dni.",
      location: "Szkolenie realizowane jest w Bielsku-Białej przy ul. 3 Maja 13 albo w miejscu uzgodnionym wspólnie z klientem.",
      price: "4 800,00 zł brutto - cena za całość szkolenia",
      funding: "Istnieje możliwość uzyskania dofinansowania szkolenia ze środków UE. W celu uzyskania bliższych informacji prosimy o kontakt."
    }
  ];

  const openModal = (training: TrainingData) => {
    setSelectedTraining(training);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTraining(null);
  };

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
                <button
                  onClick={() => openModal(program)}
                  className="inline-flex items-center justify-between w-full px-6 py-3 bg-primary-light/10 hover:bg-primary-light/20 rounded-2xl text-primary-light font-semibold hover:text-primary-light-hover transition-all duration-300 font-inter group-hover:translate-x-1 border border-primary-light/20 hover:border-primary-light/40"
                >
                  <span>Szczegóły szkolenia</span>
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* Additional decorative elements */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary-light/5 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl opacity-50"></div>
      </div>

      <TrainingModal 
        isOpen={isModalOpen}
        onClose={closeModal}
        training={selectedTraining}
      />
    </section>
  );
};

export default OffersSection;