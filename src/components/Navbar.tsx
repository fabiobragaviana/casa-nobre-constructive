
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useMobile } from '@/hooks/use-mobile';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const isMobile = useMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-casanobre">
              Casa Nobre
            </Link>
          </div>
          
          {isMobile ? (
            <>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              
              {isMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-white shadow-md p-4">
                  <div className="flex flex-col space-y-3">
                    <a href="/#services" className="text-gray-700 hover:text-casanobre" onClick={() => setIsMenuOpen(false)}>Serviços</a>
                    <a href="/#projects" className="text-gray-700 hover:text-casanobre" onClick={() => setIsMenuOpen(false)}>Projetos</a>
                    <a href="/#about" className="text-gray-700 hover:text-casanobre" onClick={() => setIsMenuOpen(false)}>Sobre</a>
                    <a href="/#contact" className="text-gray-700 hover:text-casanobre" onClick={() => setIsMenuOpen(false)}>Contato</a>
                    <Link to="/imigracao" className="text-blue-700 hover:text-blue-800 font-medium" onClick={() => setIsMenuOpen(false)}>
                      Imigração Portugal
                    </Link>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="flex items-center space-x-8">
              <a href="/#services" className="text-gray-700 hover:text-casanobre">Serviços</a>
              <a href="/#projects" className="text-gray-700 hover:text-casanobre">Projetos</a>
              <a href="/#about" className="text-gray-700 hover:text-casanobre">Sobre</a>
              <a href="/#contact" className="text-gray-700 hover:text-casanobre">Contato</a>
              <Link 
                to="/imigracao" 
                className="px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition-colors"
              >
                Imigração Portugal
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
