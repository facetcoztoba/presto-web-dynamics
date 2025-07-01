
import React from 'react';
import { FileText, ExternalLink, Mail, Phone, AlertCircle } from 'lucide-react';
import SectionHeader from './SectionHeader';
import ContactForm from './ContactForm';

const ContactSection: React.FC = () => {
  return (
    <section id="kontakt" className="py-20 px-6 md:px-12 bg-surface-primary relative overflow-hidden">
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
          className="text-center mb-16"
        />
        
        {/* Main Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
          {/* Top Row */}
          {/* Contact Form - 3/5 width */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>

          {/* Company Information & General Contact - 2/5 width */}
          <div className="lg:col-span-2">
            <div className="bg-surface-secondary/80 backdrop-blur-sm p-8 rounded-2xl shadow-soft border border-border/50 h-full">
              <h3 className="text-2xl font-bold text-foreground mb-6 font-inter flex items-center">
                <Mail className="w-6 h-6 mr-3 text-primary-light" />
                Dane Firmy i Kontakt
              </h3>
              
              <div className="space-y-6">
                {/* Company Details */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3 text-lg">Presto Consulting Jarosław Motyka</h4>
                  <div className="space-y-2 text-muted-foreground font-inter">
                    <div>
                      <span className="font-medium">Adres:</span>
                      <a href="https://www.google.com/maps/place/Jasna+33C,+Wilcza+G%C3%B3ra,+Poland/" target="_blank" rel="noopener noreferrer" className="block hover:text-primary-light transition-colors duration-300 ml-2">
                        ul. Jasna 33c, 05-506 Wilcza Góra
                      </a>
                    </div>
                    <div className="flex gap-6">
                      <p><span className="font-medium">NIP:</span> 521-317-54-53</p>
                      <p><span className="font-medium">REGON:</span> 140580167</p>
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="pt-4 border-t border-border">
                  <h4 className="font-semibold text-foreground mb-4 text-lg">Informacje Kontaktowe</h4>
                  <div className="space-y-4">
                    <div className="group">
                      <p className="text-muted-foreground font-medium mb-1">Kontakt Ogólny:</p>
                      <div className="flex items-center space-x-2">
                        <Mail className="w-4 h-4 text-primary-light" />
                        <a href="mailto:kontakt@prestoconsulting.pl" className="hover:text-primary-light transition-colors duration-300">
                          kontakt@prestoconsulting.pl
                        </a>
                      </div>
                    </div>
                    
                    <div className="group">
                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4 text-primary-light" />
                        <a href="tel:+48515103595" className="hover:text-primary-light transition-colors duration-300">
                          +48 515 103 595
                        </a>
                      </div>
                    </div>

                    <div className="group">
                      <p className="text-muted-foreground font-medium mb-1">Kontakt Bezpośredni:</p>
                      <div className="flex items-center space-x-2">
                        <Mail className="w-4 h-4 text-primary-light" />
                        <a href="mailto:jaroslaw@prestoconsulting.pl" className="hover:text-primary-light transition-colors duration-300">
                          jaroslaw@prestoconsulting.pl
                        </a>
                      </div>
                      <p className="text-sm text-muted-foreground ml-6">Jarosław Motyka</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row - Equal Width Buttons */}
          {/* Complaints Contact */}
          <div className="lg:col-span-2 lg:col-start-2">
            <div className="bg-surface-tertiary/80 backdrop-blur-sm p-8 rounded-2xl shadow-soft border border-border/50 h-full">
              <h3 className="text-xl font-bold text-foreground mb-4 font-inter flex items-center">
                <AlertCircle className="w-5 h-5 mr-2 text-accent" />
                Kontakt ws. Reklamacji
              </h3>
              
              <div className="space-y-4">
                <div className="group">
                  <div className="flex items-center space-x-2 mb-3">
                    <Mail className="w-4 h-4 text-accent" />
                    <a href="mailto:projekty@prestoconsulting.pl" className="hover:text-primary-light transition-colors duration-300 font-medium">
                      projekty@prestoconsulting.pl
                    </a>
                  </div>
                </div>
                
                <div className="bg-accent/50 p-3 rounded-lg">
                  <p className="font-semibold text-accent-foreground mb-1 text-sm">Ważne terminy:</p>
                  <div className="space-y-1 text-accent-foreground text-sm">
                    <p>• Składanie: <strong>15 dni roboczych</strong></p>
                    <p>• Odpowiedź: <strong>do 7 dni</strong></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Documents Section */}
          <div className="lg:col-span-2">
            <div className="bg-surface-secondary/80 backdrop-blur-sm p-8 rounded-2xl shadow-soft border border-border/50 h-full">
              <h3 className="text-xl font-bold text-foreground mb-4 font-inter flex items-center">
                <FileText className="w-5 h-5 mr-2 text-primary-light" />
                Dokumenty do pobrania
              </h3>
              
              <div className="space-y-4">
                <a 
                  href="https://hosting1736455092.freekru.pl/wp-content/uploads/2025/06/Polityka_Reklamacyjna_Presto.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start space-x-3 p-4 rounded-lg hover:bg-surface-primary/70 transition-all duration-300 hover:shadow-sm"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-secondary text-primary-light rounded-lg flex items-center justify-center group-hover:bg-secondary-hover transition-colors duration-300">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-foreground font-semibold font-inter group-hover:text-primary transition-colors duration-300">
                      Polityka Reklamacyjna
                    </p>
                    <p className="text-muted-foreground font-inter mt-1 text-sm">
                      Pełny dokument z procedurami
                    </p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary-light transition-colors duration-300 flex-shrink-0 mt-1" />
                </a>
              </div>

              <div className="mt-4 pt-3 border-t border-border">
                <p className="text-xs text-muted-foreground font-inter">
                  <strong>Formularz online:</strong> Dostępny wkrótce.
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
