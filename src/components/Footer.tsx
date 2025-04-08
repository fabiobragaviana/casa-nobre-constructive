
import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-casanobre text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-casanobre-gold">Casa Nobre</span> Engenharia
            </h3>
            <p className="mb-4 text-gray-300">
              Transformando sonhos em realidade através da engenharia e arquitetura de qualidade.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-casanobre-gold transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-casanobre-gold transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-casanobre-gold transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-casanobre-gold transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-casanobre-gold transition-colors">Serviços</a></li>
              <li><a href="#projects" className="text-gray-300 hover:text-casanobre-gold transition-colors">Projetos</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-casanobre-gold transition-colors">Sobre Nós</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-casanobre-gold transition-colors">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Serviços</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-300 hover:text-casanobre-gold transition-colors">Construção Residencial</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-casanobre-gold transition-colors">Reformas</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-casanobre-gold transition-colors">Construção Comercial</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-casanobre-gold transition-colors">Projetos Completos</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="w-5 h-5 mr-3 text-casanobre-gold shrink-0" />
                <span>(11) 99999-9999</span>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 mr-3 text-casanobre-gold shrink-0" />
                <span>contato@casanobreengenharia.com.br</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; {year} Casa Nobre Engenharia. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
