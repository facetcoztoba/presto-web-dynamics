import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

// Define the HeaderProps interface
interface HeaderProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  scrollToSection: (id: string) => void;
}

// Header Component
const Header: React.FC<HeaderProps> = ({ isMobileMenuOpen, setIsMobileMenuOpen, scrollToSection }) => {
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="fixed w-full bg-surface-primary/95 backdrop-blur-md shadow-soft z-50 py-4 px-6 md:px-12 flex justify-between items-center transition-all duration-300">
        <div className="text-2xl font-bold text-primary font-inter tracking-tight hover:scale-105 transition-transform duration-300 cursor-pointer"
             onClick={() => scrollToSection('home')}>
          Presto Consulting
        </div>
        <nav className="hidden md:flex space-x-8">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
            className="text-foreground hover:text-primary-light transition-all duration-300 font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary-light after:transition-all after:duration-300 hover:after:w-full hover:scale-105 hover:-translate-y-0.5"
          >
            Home
          </a>
          <a
            href="#programy"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('programy');
            }}
            className="text-foreground hover:text-primary-light transition-all duration-300 font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary-light after:transition-all after:duration-300 hover:after:w-full hover:scale-105 hover:-translate-y-0.5"
          >
            Programy
          </a>
          <a
            href="#korzysci"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('korzysci');
            }}
            className="text-foreground hover:text-primary-light transition-all duration-300 font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary-light after:transition-all after:duration-300 hover:after:w-full hover:scale-105 hover:-translate-y-0.5"
          >
            Korzyści
          </a>
          <a
            href="#kontakt"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('kontakt');
            }}
            className="text-foreground hover:text-primary-light transition-all duration-300 font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary-light after:transition-all after:duration-300 hover:after:w-full hover:scale-105 hover:-translate-y-0.5"
          >
            Kontakt
          </a>
        </nav>
        <button
          className="md:hidden text-foreground hover:text-primary-light focus:outline-none transition-all duration-300 p-2 hover:bg-secondary rounded-lg hover:scale-110 hover:rotate-6"
          onClick={toggleMobileMenu}
        >
          <Menu className="w-6 h-6 transition-transform duration-300" />
        </button>
      </header>
      {isMobileMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-surface-primary/95 backdrop-blur-lg z-40 flex flex-col items-center justify-center space-y-8 md:hidden animate-fade-in-up">
          <button
            className="absolute top-6 right-6 text-foreground hover:text-primary-light focus:outline-none transition-all duration-300 p-2 hover:bg-secondary rounded-lg hover:scale-110 hover:rotate-90"
            onClick={toggleMobileMenu}
          >
            <X className="w-8 h-8 transition-transform duration-300" />
          </button>
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
              setIsMobileMenuOpen(false);
            }}
            className="text-3xl text-foreground hover:text-primary-light transition-all duration-300 font-semibold hover:scale-110 hover:-translate-y-2 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-primary-light after:transition-all after:duration-300 hover:after:w-full"
          >
            Home
          </a>
          <a
            href="#programy"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('programy');
              setIsMobileMenuOpen(false);
            }}
            className="text-3xl text-foreground hover:text-primary-light transition-all duration-300 font-semibold hover:scale-110 hover:-translate-y-2 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-primary-light after:transition-all after:duration-300 hover:after:w-full"
          >
            Programy
          </a>
          <a
            href="#korzysci"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('korzysci');
              setIsMobileMenuOpen(false);
            }}
            className="text-3xl text-foreground hover:text-primary-light transition-all duration-300 font-semibold hover:scale-110 hover:-translate-y-2 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-primary-light after:transition-all after:duration-300 hover:after:w-full"
          >
            Korzyści
          </a>
          <a
            href="#kontakt"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('kontakt');
              setIsMobileMenuOpen(false);
            }}
            className="text-3xl text-foreground hover:text-primary-light transition-all duration-300 font-semibold hover:scale-110 hover:-translate-y-2 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-primary-light after:transition-all after:duration-300 hover:after:w-full"
          >
            Kontakt
          </a>
        </div>
      )}
    </>
  );
};

// Main App Component
const App: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to scroll to a section
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-inter">
      {/* Pass props to Header */}
      <Header
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        scrollToSection={scrollToSection}
      />

      {/* Example sections for scrolling */}
      <section id="home" className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-white text-4xl font-bold">
        Home Section
      </section>
      <section id="programy" className="h-screen flex items-center justify-center bg-gradient-to-br from-green-500 to-teal-600 text-white text-4xl font-bold">
        Programy Section
      </section>
      <section id="korzysci" className="h-screen flex items-center justify-center bg-gradient-to-br from-red-500 to-orange-600 text-white text-4xl font-bold">
        Korzyści Section
      </section>
      <section id="kontakt" className="h-screen flex items-center justify-center bg-gradient-to-br from-yellow-500 to-pink-600 text-white text-4xl font-bold">
        Kontakt Section
      </section>
    </div>
  );
};

export default App;
