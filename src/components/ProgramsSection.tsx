
import React from 'react';
import { DollarSign, Target, TrendingUp, Users, Cpu, BarChart } from 'lucide-react';
import SectionHeader from './SectionHeader';
import ProgramCard from './ProgramCard';

const ProgramsSection: React.FC = () => {
  const programs = [
    {
      title: "Zarządzanie finansami",
      text: "Podejmuj trafne decyzje finansowe dzięki zrozumieniu kluczowych wskaźników i mechanizmów budżetowych. Naucz się analizować sytuację finansową firmy i planować budżet z uwzględnieniem celów strategicznych.",
      icon: DollarSign
    },
    {
      title: "Strategia i planowanie",
      text: "Naucz się projektować strategie, które wspierają wzrost i adaptację w zmiennym otoczeniu biznesowym. Poznaj metody analizy rynku, konkurencji i wewnętrznego potencjału organizacji.",
      icon: Target
    },
    {
      title: "Rozwój sprzedaży i marketingu",
      text: "Pozyskaj narzędzia i umiejętności do budowania marki oraz zwiększania sprzedaży. Opanuj techniki skutecznej sprzedaży, budowania relacji z klientami i prowadzenia działań marketingowych.",
      icon: TrendingUp
    },
    {
      title: "Skuteczna komunikacja w zespole",
      text: "Doskonal umiejętności, które budują zaangażowanie i usprawniają współpracę. Poznaj techniki motywowania zespołu, prowadzenia trudnych rozmów i budowania kultury organizacyjnej.",
      icon: Users
    },
    {
      title: "Nowoczesne technologie w biznesie",
      text: "Zrozum wpływ innowacji i naucz się wykorzystywać technologie do optymalizacji działań. Poznaj narzędzia cyfrowe wspierające zarządzanie i automatyzację procesów.",
      icon: Cpu
    },
    {
      title: "Automatyzacja i procesy",
      text: "Rozwijaj analityczne myślenie i ucz się podejmować decyzje w oparciu o dane. Opanuj metody analizy biznesowej, interpretacji wskaźników i planowania strategicznego.",
      icon: BarChart
    }
  ];

  return (
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
        <SectionHeader 
          title="Programy rozwojowe dla firm"
          description="Rozwijaj kompetencje, które przekładają się na realne wyniki biznesowe."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-8">
            {programs.slice(0, 4).map((program, index) => (
              <ProgramCard
                key={index}
                title={program.title}
                text={program.text}
                index={index + 1}
                icon={program.icon}
                delay={index * 100}
              />
            ))}
          </div>

          <div className="space-y-8">
            {programs.slice(4).map((program, index) => (
              <ProgramCard
                key={index + 4}
                title={program.title}
                text={program.text}
                index={index + 5}
                icon={program.icon}
                delay={(index + 4) * 100}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
