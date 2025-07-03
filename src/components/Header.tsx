import React from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  scrollToSection: (id: string) => void;
}

const Header: React.FC<HeaderProps> = ({ isMobileMenuOpen, setIsMobileMenuOpen, scrollToSection }) => {
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="fixed w-full bg-surface-primary/95 backdrop-blur-md shadow-soft z-50 py-4 px-6 md:px-12 flex justify-between items-center transition-all duration-300">
        <div className="text-2xl font-bold text-primary font-inter tracking-tight">
          Presto Consulting
        </div>
        <nav className="hidden md:flex space-x-8">
          <a 
            href="#home" 
            onClick={() => scrollToSection('home')} 
            className="text-foreground hover:text-primary-light transition-all duration-300 font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary-light after:transition-all after:duration-300 hover:after:w-full"
          >
            Home
          </a>
          <a 
            href="#programy" 
            onClick={() => scrollToSection('programy')} 
            className="text-foreground hover:text-primary-light transition-all duration-300 font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary-light after:transition-all after:duration-300 hover:after:w-full"
          >
            Programy
          </a>
          <a 
            href="#korzysci" 
            onClick={() => scrollToSection('korzysci')} 
            className="text-foreground hover:text-primary-light transition-all duration-300 font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary-light after:transition-all after:duration-300 hover:after:w-full"
          >
            Korzyści
          </a>
          <a 
            href="#kontakt" 
            onClick={() => scrollToSection('kontakt')} 
            className="text-foreground hover:text-primary-light transition-all duration-300 font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary-light after:transition-all after:duration-300 hover:after:w-full"
          >
            Kontakt
          </a>
        </nav>
        <button
          className="md:hidden text-foreground hover:text-primary-light focus:outline-none transition-colors duration-300 p-2 hover:bg-secondary rounded-lg"
          onClick={toggleMobileMenu}
        >
          <Menu className="w-6 h-6" />
        </button>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-surface-primary/95 backdrop-blur-lg z-40 flex flex-col items-center justify-center space-y-8 md:hidden animate-fade-in-up">
          <button
            className="absolute top-6 right-6 text-foreground hover:text-primary-light focus:outline-none transition-colors duration-300 p-2 hover:bg-secondary rounded-lg"
            onClick={toggleMobileMenu}
          >
            <X className="w-8 h-8" />
          </button>
          <a 
            href="#home" 
            onClick={() => scrollToSection('home')} 
            className="text-3xl text-foreground hover:text-primary-light transition-all duration-300 font-semibold"
          >
            Home
          </a>
          <a 
            href="#programy" 
            onClick={() => scrollToSection('programy')} 
            className="text-3xl text-foreground hover:text-primary-light transition-all duration-300 font-semibold"
          >
            Programy
          </a>
          <a 
            href="#korzysci" 
            onClick={() => scrollToSection('korzysci')} 
            className="text-3xl text-foreground hover:text-primary-light transition-all duration-300 font-semibold"
          >
            Korzyści
          </a>
          <a 
            href="#kontakt" 
            onClick={() => scrollToSection('kontakt')} 
            className="text-3xl text-foreground hover:text-primary-light transition-all duration-300 font-semibold"
          >
            Kontakt
          </a>
        </div>
      )}
    </>
  );
};

export default Header;