import React from 'react';
import { Phone, Mail, ExternalLink, Check, Info } from 'lucide-react';
import SectionHeader from './SectionHeader';

const FundingSection: React.FC = () => {
  const programs = [
    {
      name: "Barometr Rozwoju Umiejętności (BUR)",
      subtitle: "Program dla małych i średnich przedsiębiorstw",
      percentage: "do 95%",
      description: "Dofinansowanie szkoleń pracowników w ramach programu Barometr Rozwoju Umiejętności",
      benefits: [
        "Dofinansowanie do 95% kosztów szkolenia",
        "Maksymalnie 4 320 zł na osobę",
        "Szkolenia dla maksymalnie 3 osób z firmy",
        "Brak konieczności zwrotu środków"
      ],
      contact: {
        phone: "Zadzwoń po szczegóły",
        email: "Napisz e-mail",
        external: "Zobacz program"
      }
    },
    {
      name: "Krajowy Fundusz Szkoleniowy (KFS)",
      subtitle: "Program dla wszystkich przedsiębiorców",
      percentage: "do 80%",
      description: "Krajowy Fundusz Szkoleniowy wspiera rozwój kompetencji pracowników",
      benefits: [
        "Dofinansowanie do 80% kosztów szkolenia",
        "Średnio 2 500 zł na osobę",
        "Szkolenia dla większej liczby pracowników",
        "Elastyczne warunki realizacji"
      ],
      contact: {
        phone: "Zadzwoń po szczegóły",
        email: "Napisz e-mail", 
        external: "Zobacz program"
      }
    }
  ];

  return (
    <section id="dofinansowanie" className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionHeader 
          title="Dostępne programy dofinansowania"
          description="Sprawdź, z jakich programów możesz skorzystać, aby obniżyć koszty szkoleń dla Twojego zespołu."
        />

        {/* Funding Information Banner */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6 mb-12 animate-fade-in-up">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
              <Info className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2 font-inter">
                Dofinansowanie do szkoleń
              </h3>
              <p className="text-slate-700 leading-relaxed font-inter">
                Wszystkie szkolenia oferowane przez <strong>Presto Consulting</strong> mogą być objęte <strong>DOFINANSOWANIEM</strong> w ramach dostępnych programów wsparcia dla przedsiębiorców. Sprawdź poniżej, z których programów możesz skorzystać, aby znacząco obniżyć koszty rozwoju swojego zespołu.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <div 
              key={index}
              className="group bg-white rounded-xl border border-gray-100 p-8 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Header with percentage badge */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-800 mb-2 font-inter group-hover:text-slate-900 transition-colors duration-300">
                    {program.name}
                  </h3>
                  <p className="text-sm text-slate-600 font-inter">
                    {program.subtitle}
                  </p>
                </div>
                <div className="bg-brand-navy text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {program.percentage}
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-600 leading-relaxed font-inter text-sm mb-6 group-hover:text-slate-700 transition-colors duration-300">
                {program.description}
              </p>

              {/* Benefits list */}
              <div className="space-y-3 mb-8">
                {program.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-slate-600 text-sm font-inter leading-relaxed">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>

              {/* Contact buttons */}
              <div className="space-y-3">
                <button className="w-full bg-brand-navy text-white px-6 py-3 rounded-lg hover:bg-slate-800 transition-colors duration-300 font-semibold font-inter flex items-center justify-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>{program.contact.phone}</span>
                </button>
                <div className="grid grid-cols-2 gap-3">
                  <button className="bg-slate-100 text-slate-700 px-4 py-2 rounded-lg hover:bg-slate-200 transition-colors duration-300 font-medium font-inter flex items-center justify-center space-x-2">
                    <Mail className="w-4 h-4" />
                    <span>E-mail</span>
                  </button>
                  <button className="bg-slate-100 text-slate-700 px-4 py-2 rounded-lg hover:bg-slate-200 transition-colors duration-300 font-medium font-inter flex items-center justify-center space-x-2">
                    <ExternalLink className="w-4 h-4" />
                    <span>Program</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FundingSection;
