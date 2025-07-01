
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
    <section id="korzysci" className="py-20 px-6 md:px-12 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23e2e8f0' fill-opacity='0.4' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '20px 20px',
        }}
      ></div>
      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionHeader 
          subtitle="Dlaczego warto wybrać Presto Consulting"
          title="Cztery konkretne korzyści ze współpracy z nami"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className={`group bg-white rounded-xl border border-gray-100 p-8 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-fade-in-up text-center`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-brand-navy to-slate-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-8 h-8" />
              </div>
              
              <h3 className="text-xl font-bold text-slate-800 mb-4 font-inter group-hover:text-brand-navy transition-colors duration-300">
                {benefit.title}
              </h3>
              
              <p className="text-slate-600 leading-relaxed font-inter group-hover:text-slate-700 transition-colors duration-300">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
