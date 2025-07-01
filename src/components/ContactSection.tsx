
import React from 'react';
import { FileText, ExternalLink, Mail, Phone, AlertCircle } from 'lucide-react';
import SectionHeader from './SectionHeader';
import ContactForm from './ContactForm';

const ContactSection: React.FC = () => {
  return (
    <section id="kontakt" className="py-20 px-6 md:px-12 bg-white relative overflow-hidden">
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
          subtitle="Skontaktuj się z nami"
          title="Porozmawiajmy o rozwoju Twojej firmy."
          className="text-center mb-12"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form - Left Column */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          {/* Contact Information - Right Column */}
          <div className="space-y-6">
            {/* Company Information */}
            <div className="bg-gradient-to-br from-gray-50/80 to-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-soft border border-gray-100/50">
              <h3 className="text-xl font-bold text-gray-800 mb-4 font-inter flex items-center">
                <Mail className="w-5 h-5 mr-2 text-primary-600" />
                Dane Firmy
              </h3>
              <div className="space-y-3 text-gray-600 font-inter text-sm">
                <div>
                  <p className="font-semibold text-gray-800">Presto Consulting Jarosław Motyka</p>
                </div>
                <div>
                  <p className="font-medium">Adres:</p>
                  <a href="https://www.google.com/maps/place/Jasna+33C,+Wilcza+G%C3%B3ra,+Poland/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-600 transition-colors duration-300">
                    ul. Jasna 33c, 05-506 Wilcza Góra
                  </a>
                </div>
                <div>
                  <p><span className="font-medium">NIP:</span> 521-317-54-53</p>
                  <p><span className="font-medium">REGON:</span> 140580167</p>
                </div>
              </div>
            </div>

            {/* General Contact */}
            <div className="bg-gradient-to-br from-gray-50/80 to-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-soft border border-gray-100/50">
              <h3 className="text-xl font-bold text-gray-800 mb-4 font-inter flex items-center">
                <Phone className="w-5 h-5 mr-2 text-primary-600" />
                Kontakt Ogólny
              </h3>
              <div className="space-y-3 text-gray-600 font-inter">
                <div className="group">
                  <p className="transition-colors duration-300 group-hover:text-primary-600">
                    <a href="mailto:kontakt@prestoconsulting.pl" className="hover:text-primary-600 transition-colors duration-300 flex items-center">
                      <Mail className="w-4 h-4 mr-2" />
                      kontakt@prestoconsulting.pl
                    </a>
                  </p>
                </div>
                <div className="group">
                  <p className="transition-colors duration-300 group-hover:text-primary-600">
                    <a href="tel:+48515103595" className="hover:text-primary-600 transition-colors duration-300 flex items-center">
                      <Phone className="w-4 h-4 mr-2" />
                      +48 515 103 595
                    </a>
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-2">Jarosław Motyka</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>
                    <a href="mailto:jaroslaw@prestoconsulting.pl" className="hover:text-primary-600 transition-colors duration-300">
                      jaroslaw@prestoconsulting.pl
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Complaints Contact */}
            <div className="bg-gradient-to-br from-amber-50/80 to-orange-50/80 backdrop-blur-sm p-6 rounded-2xl shadow-soft border border-amber-100/50">
              <h3 className="text-xl font-bold text-gray-800 mb-4 font-inter flex items-center">
                <AlertCircle className="w-5 h-5 mr-2 text-amber-600" />
                Kontakt ws. Reklamacji
              </h3>
              <div className="space-y-3 text-gray-600 font-inter">
                <div className="group">
                  <p className="transition-colors duration-300 group-hover:text-primary-600">
                    <a href="mailto:projekty@prestoconsulting.pl" className="hover:text-primary-600 transition-colors duration-300 flex items-center">
                      <Mail className="w-4 h-4 mr-2" />
                      projekty@prestoconsulting.pl
                    </a>
                  </p>
                </div>
                <div className="text-sm bg-amber-100/50 p-3 rounded-lg">
                  <p className="font-medium text-amber-800 mb-1">Ważne terminy:</p>
                  <p className="text-amber-700">• Składanie reklamacji: <strong>15 dni roboczych</strong> od zakończenia usługi</p>
                  <p className="text-amber-700">• Czas odpowiedzi: <strong>do 7 dni</strong> od wpłynięcia reklamacji</p>
                </div>
              </div>
            </div>

            {/* Documents Section */}
            <div className="bg-gradient-to-br from-gray-50/80 to-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-soft border border-gray-100/50">
              <h3 className="text-xl font-bold text-gray-800 mb-4 font-inter flex items-center">
                <FileText className="w-5 h-5 mr-2 text-primary-600" />
                Dokumenty do pobrania
              </h3>
              <div className="space-y-3">
                <a 
                  href="https://hosting1736455092.freekru.pl/wp-content/uploads/2025/06/Polityka_Reklamacyjna_Presto.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start space-x-3 p-3 rounded-lg hover:bg-white/70 transition-all duration-300 hover:shadow-sm"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center group-hover:bg-primary-200 transition-colors duration-300">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-gray-800 font-medium font-inter group-hover:text-primary-700 transition-colors duration-300">
                      Polityka Reklamacyjna
                    </p>
                    <p className="text-sm text-gray-600 font-inter">
                      Pełny dokument PDF
                    </p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-primary-600 transition-colors duration-300 flex-shrink-0 mt-1" />
                </a>

                <a 
                  href="https://hosting1736455092.freekru.pl/wp-content/uploads/2025/06/Formularz_reklamacji_Presto.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start space-x-3 p-3 rounded-lg hover:bg-white/70 transition-all duration-300 hover:shadow-sm"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-amber-100 text-amber-600 rounded-lg flex items-center justify-center group-hover:bg-amber-200 transition-colors duration-300">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-gray-800 font-medium font-inter group-hover:text-primary-700 transition-colors duration-300">
                      Formularz reklamacji
                    </p>
                    <p className="text-sm text-gray-600 font-inter">
                      Do wypełnienia PDF
                    </p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-primary-600 transition-colors duration-300 flex-shrink-0 mt-1" />
                </a>

                <a 
                  href="https://hosting1736455092.freekru.pl/wp-content/uploads/2025/06/Ankieta_oceny_Presto.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start space-x-3 p-3 rounded-lg hover:bg-white/70 transition-all duration-300 hover:shadow-sm"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-green-100 text-green-600 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors duration-300">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-gray-800 font-medium font-inter group-hover:text-primary-700 transition-colors duration-300">
                      Ankieta oceny usługi
                    </p>
                    <p className="text-sm text-gray-600 font-inter">
                      Ocena jakości szkoleń
                    </p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-primary-600 transition-colors duration-300 flex-shrink-0 mt-1" />
                </a>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600 font-inter">
                  <strong>Formularz online:</strong> Możliwość złożenia reklamacji przez stronę internetową dostępna wkrótce.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
