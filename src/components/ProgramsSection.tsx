
import React from 'react';
import { DollarSign, Target, TrendingUp, Users, Cpu, BarChart } from 'lucide-react';
import SectionHeader from './SectionHeader';
import ProgramCard from './ProgramCard';

const ProgramsSection: React.FC = () => {
  const programs = [
    {
      title: "Zarządzanie finansami",
      text: "Podejmuj trafne decyzje finansowe dzięki zrozumieniu kluczowych wskaźników i mechanizmów budżetowych. Naucz się analizować sytuację finansową firmy i planować budżet z uwzględnieniem celów strategicznych.",
      icon: DollarSign,
      variant: 'default' as const
    },
    {
      title: "Strategia i planowanie",
      text: "Naucz się projektować strategie, które wspierają wzrost i adaptację w zmiennym otoczeniu biznesowym. Poznaj metody analizy rynku, konkurencji i wewnętrznego potencjału organizacji.",
      icon: Target,
      variant: 'green' as const
    },
    {
      title: "Rozwój sprzedaży i marketingu",
      text: "Pozyskaj narzędzia i umiejętności do budowania marki oraz zwiększania sprzedaży. Opanuj techniki skutecznej sprzedaży, budowania relacji z klientami i prowadzenia działań marketingowych.",
      icon: TrendingUp,
      variant: 'purple' as const
    },
    {
      title: "Skuteczna komunikacja w zespole",
      text: "Doskonal umiejętności, które budują zaangażowanie i usprawniają współpracę. Poznaj techniki motywowania zespołu, prowadzenia trudnych rozmów i budowania kultury organizacyjnej.",
      icon: Users,
      variant: 'orange' as const
    },
    {
      title: "Nowoczesne technologie w biznesie",
      text: "Zrozum wpływ innowacji i naucz się wykorzystywać technologie do optymalizacji działań. Poznaj narzędzia cyfrowe wspierające zarządzanie i automatyzację procesów.",
      icon: Cpu,
      variant: 'pink' as const
    },
    {
      title: "Automatyzacja i procesy",
      text: "Rozwijaj analityczne myślenie i ucz się podejmować decyzje w oparciu o dane. Opanuj metody analizy biznesowej, interpretacji wskaźników i planowania strategicznego.",
      icon: BarChart,
      variant: 'teal' as const
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
      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionHeader 
          title="Programy rozwojowe dla firm"
          description="Rozwijaj kompetencje, które przekładają się na realne wyniki biznesowe."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <ProgramCard
              key={index}
              title={program.title}
              text={program.text}
              index={index + 1}
              icon={program.icon}
              variant={program.variant}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
