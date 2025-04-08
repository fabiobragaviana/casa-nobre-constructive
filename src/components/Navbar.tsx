
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-center">
            <h1 className={`text-xl md:text-2xl font-bold ${isScrolled ? 'text-casanobre' : 'text-white'}`}>
              <span className="text-casanobre-gold">Casa Nobre</span> Engenharia
            </h1>
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className={`font-medium transition-colors ${isScrolled ? 'text-gray-700 hover:text-casanobre' : 'text-white hover:text-casanobre-gold'}`}>Home</a>
            <a href="#services" className={`font-medium transition-colors ${isScrolled ? 'text-gray-700 hover:text-casanobre' : 'text-white hover:text-casanobre-gold'}`}>Serviços</a>
            <a href="#projects" className={`font-medium transition-colors ${isScrolled ? 'text-gray-700 hover:text-casanobre' : 'text-white hover:text-casanobre-gold'}`}>Projetos</a>
            <a href="#about" className={`font-medium transition-colors ${isScrolled ? 'text-gray-700 hover:text-casanobre' : 'text-white hover:text-casanobre-gold'}`}>Sobre</a>
            <a href="#contact" className="px-4 py-2 bg-casanobre-gold text-white rounded hover:bg-casanobre transition-all">Contato</a>
          </div>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? 
              <X className={`w-6 h-6 ${isScrolled ? 'text-casanobre' : 'text-white'}`} /> : 
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-casanobre' : 'text-white'}`} />
            }
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white mt-4 py-4 px-4 rounded-lg shadow-lg animate-fade-in">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="font-medium text-gray-700 hover:text-casanobre" onClick={toggleMenu}>Home</a>
              <a href="#services" className="font-medium text-gray-700 hover:text-casanobre" onClick={toggleMenu}>Serviços</a>
              <a href="#projects" className="font-medium text-gray-700 hover:text-casanobre" onClick={toggleMenu}>Projetos</a>
              <a href="#about" className="font-medium text-gray-700 hover:text-casanobre" onClick={toggleMenu}>Sobre</a>
              <a href="#contact" className="px-4 py-2 bg-casanobre-gold text-white rounded hover:bg-casanobre text-center">Contato</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
