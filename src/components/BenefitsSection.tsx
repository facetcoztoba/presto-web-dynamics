
import React from 'react';
import { TrendingUp, Award, Target, BarChart3 } from 'lucide-react';
import SectionHeader from './SectionHeader';

const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Podnieś kompetencje zespołu",
      description: "Rozwijaj umiejętności, które budują przewagę Twojej firmy na rynku.",
    },
    {
      icon: Award,
      title: "Sprawdzone metody i doświadczenie",
      description: "Korzystasz z praktyk wypracowanych w setkach szkoleń i projektów.",
    },
    {
      icon: Target,
      title: "Szkolenia dopasowane do branży",
      description: "Uczysz się tego, co naprawdę działa w Twoim środowisku biznesowym.",
    },
    {
      icon: BarChart3,
      title: "Efekty widoczne w działaniu",
      description: "Zdobywasz wiedzę, która przekłada się na realne zmiany w organizacji.",
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
              className={`group bg-white rounded-xl border border-gray-100 p-8 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-fade-in-up`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-14 h-14 bg-slate-100 text-slate-600 rounded-lg flex items-center justify-center group-hover:bg-slate-200 transition-colors duration-300">
                  <benefit.icon className="w-7 h-7" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="text-sm font-semibold text-slate-400 tracking-wider">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="h-px bg-slate-200 flex-1"></div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3 font-inter group-hover:text-slate-900 transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed font-inter text-sm group-hover:text-slate-700 transition-colors duration-300">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
