
import React from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  scrollToSection: (id: string) => void;
}

const Header: React.FC<HeaderProps> = ({ isMobileMenuOpen, toggleMobileMenu, scrollToSection }) => {
  return (
    <>
      <header className="fixed w-full bg-white bg-opacity-95 shadow-md z-50 py-4 px-6 md:px-12 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-900">Presto Consulting</div>
        <nav className="hidden md:flex space-x-8">
          <a href="#home" onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-700 transition duration-300">Home</a>
          <a href="#programy" onClick={() => scrollToSection('programy')} className="text-gray-700 hover:text-blue-700 transition duration-300">Programy</a>
          <a href="#korzysci" onClick={() => scrollToSection('korzysci')} className="text-gray-700 hover:text-blue-700 transition duration-300">Korzyści</a>
          <a href="#kontakt" onClick={() => scrollToSection('kontakt')} className="text-gray-700 hover:text-blue-700 transition duration-300">Kontakt</a>
        </nav>
        <button
          className="md:hidden text-gray-700 hover:text-blue-700 focus:outline-none"
          onClick={toggleMobileMenu}
        >
          <Menu className="w-6 h-6" />
        </button>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white z-40 flex flex-col items-center justify-center space-y-6 md:hidden">
          <button
            className="absolute top-6 right-6 text-gray-700 hover:text-blue-700 focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <X className="w-8 h-8" />
          </button>
          <a href="#home" onClick={() => scrollToSection('home')} className="text-2xl text-gray-700 hover:text-blue-700 transition duration-300">Home</a>
          <a href="#programy" onClick={() => scrollToSection('programy')} className="text-2xl text-gray-700 hover:text-blue-700 transition duration-300">Programy</a>
          <a href="#korzysci" onClick={() => scrollToSection('korzysci')} className="text-2xl text-gray-700 hover:text-blue-700 transition duration-300">Korzyści</a>
          <a href="#kontakt" onClick={() => scrollToSection('kontakt')} className="text-2xl text-gray-700 hover:text-blue-700 transition duration-300">Kontakt</a>
        </div>
      )}
    </>
  );
};

export default Header;
