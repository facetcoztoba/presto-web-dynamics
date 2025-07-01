
import React from 'react';
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
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row md:space-x-12">
        <div className="w-full md:w-3/4 mb-10 md:mb-0">
          <SectionHeader 
            subtitle="Skontaktuj się z nami"
            title="Porozmawiajmy o rozwoju Twojej firmy."
            className="text-left mb-8"
          />
          <ContactForm />
        </div>

        <div className="w-full md:w-1/4 bg-gradient-to-br from-gray-50/80 to-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-soft border border-gray-100/50">
          <h3 className="text-xl font-bold text-gray-800 mb-6 font-inter">Biuro</h3>
          <div className="space-y-4 text-gray-600 font-inter">
            <div className="group">
              <p className="transition-colors duration-300 group-hover:text-primary-600">
                <a href="https://www.google.com/maps/place/Jasna+33C,+Wilcza+G%C3%B3ra,+Poland/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-600 transition-colors duration-300">
                  Jasna 33C, Wilcza Góra, Polska
                </a>
              </p>
            </div>
            <div className="group">
              <p className="transition-colors duration-300 group-hover:text-primary-600">
                <a href="mailto:kontakt@prestoconsulting.pl" className="hover:text-primary-600 transition-colors duration-300">
                  kontakt@prestoconsulting.pl
                </a>
              </p>
            </div>
            <div className="group">
              <p className="transition-colors duration-300 group-hover:text-primary-600">
                <a href="tel:+48515103595" className="hover:text-primary-600 transition-colors duration-300">
                  +48 515 103 595
                </a>
              </p>
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-800 mb-4 mt-8 font-inter">Jarosław Motyka</h3>
          <div className="space-y-2 text-gray-600 font-inter">
            <div className="group">
              <p className="transition-colors duration-300 group-hover:text-primary-600">
                <a href="mailto:jaroslaw@prestoconsulting.pl" className="hover:text-primary-600 transition-colors duration-300">
                  jaroslaw@prestoconsulting.pl
                </a>
              </p>
            </div>
            <div className="group">
              <p className="transition-colors duration-300 group-hover:text-primary-600">
                <a href="tel:+48515103595" className="hover:text-primary-600 transition-colors duration-300">
                  +48 515 103 595
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
