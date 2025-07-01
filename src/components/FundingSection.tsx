
import React from 'react';
import { Phone, Mail, DollarSign, BadgePercent } from 'lucide-react';
import SectionHeader from './SectionHeader';

const FundingSection: React.FC = () => {
  return (
    <section id="dofinansowanie" className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionHeader 
          title="Dofinansowanie szkoleń" 
          description="Wszystkie szkolenia oferowane przez Presto Consulting mogą być objęte dofinansowaniem w ramach dostępnych programów wsparcia dla firm i osób indywidualnych." 
        />

        {/* Main Funding Information Card */}
        <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 border border-blue-200 rounded-2xl p-8 md:p-12 shadow-large animate-fade-in-up">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Left Column - Available Programs */}
            <div className="space-y-8">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-brand-navy text-white rounded-full flex items-center justify-center">
                    <DollarSign className="w-5 h-5" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 font-inter">
                    Dostępne programy dofinansowania
                  </h3>
                </div>
                <p className="text-slate-600 leading-relaxed font-inter mb-8">
                  Sprawdź, z których programów możesz skorzystać, aby znacząco obniżyć koszty rozwoju swoich umiejętności lub swojego zespołu.
                </p>
              </div>

              {/* BUR Program */}
              <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-soft relative overflow-hidden">
                {/* BUR Logo */}
                <div className="absolute top-4 right-4 opacity-10">
                  <img 
                    src="https://www.isepszkolenia.pl/wp-content/uploads/2021/01/Baza-Uslug-Rozwojowych-CMYK.jpg" 
                    alt="BUR Logo" 
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <div className="flex items-start justify-between mb-3 relative z-10">
                  <h4 className="text-lg font-semibold text-slate-800 font-inter">
                    Baza Usług Rozwojowych (BUR)
                  </h4>
                  <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                    do 95%
                  </div>
                </div>
                <p className="text-sm text-slate-600 font-inter mb-3 relative z-10">
                  Program dla małych i średnich przedsiębiorstw oraz osób indywidualnych
                </p>
                <div className="text-sm text-slate-700 font-inter relative z-10">
                  <span className="font-medium">Maksymalnie 5 000 zł na osobę</span> • Szkolenia dla maksymalnie 3 osób z firmy
                </div>
              </div>

              {/* KFS Program */}
              <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-soft relative overflow-hidden">
                {/* KFS Logo */}
                <div className="absolute top-4 right-4 opacity-10">
                  <img 
                    src="https://midero.pl/wp-content/uploads/2025/01/kfs-logo.png" 
                    alt="KFS Logo" 
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <div className="flex items-start justify-between mb-3 relative z-10">
                  <h4 className="text-lg font-semibold text-slate-800 font-inter">
                    Krajowy Fundusz Szkoleniowy (KFS)
                  </h4>
                  <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                    do 80%
                  </div>
                </div>
                <p className="text-sm text-slate-600 font-inter mb-3 relative z-10">
                  Program dla wszystkich przedsiębiorców
                </p>
                <div className="text-sm text-slate-700 font-inter relative z-10">
                  <span className="font-medium">Średnio 2 500 zł na osobę</span> • Szkolenia dla większej liczby pracowników
                </div>
              </div>
            </div>

            {/* Right Column - Key Benefits & CTA */}
            <div className="space-y-8">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center">
                    <BadgePercent className="w-5 h-5" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 font-inter">
                    Główne korzyści
                  </h3>
                </div>
              </div>

              {/* Benefits List */}
              <div className="space-y-4">
                {["Znaczące obniżenie kosztów szkoleń", "Brak konieczności zwrotu środków", "Wsparcie dla firm i osób indywidualnych", "Elastyczne warunki realizacji", "Profesjonalne doradztwo w procesie aplikacji", "Szybka procedura składania wniosków"].map((benefit, index) => <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center mt-0.5">
                      <BadgePercent className="w-3 h-3" />
                    </div>
                    <span className="text-slate-700 font-inter leading-relaxed">
                      {benefit}
                    </span>
                  </div>)}
              </div>

              {/* Call to Action */}
              <div className="bg-gradient-to-r from-brand-navy to-slate-700 rounded-xl p-6 text-white">
                <h4 className="text-xl font-bold mb-3 font-inter">
                  Sprawdź swoje możliwości dofinansowania
                </h4>
                <p className="text-blue-100 mb-6 font-inter leading-relaxed">
                  Skontaktuj się z nami, aby dowiedzieć się więcej o dostępnych programach i sprawdzić, które dofinansowanie będzie najlepsze dla Ciebie lub Twojej firmy.
                </p>
                
                <div className="space-y-3">
                  <button className="w-full bg-white text-brand-navy px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-300 font-semibold font-inter flex items-center justify-center space-x-2">
                    <Phone className="w-4 h-4" />
                    <span>Zadzwoń po szczegóły</span>
                  </button>
                  <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium font-inter flex items-center justify-center space-x-2">
                    <Mail className="w-4 h-4" />
                    <span>Napisz e-mail</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FundingSection;
