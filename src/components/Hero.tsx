
import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="parallax" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80')" }}>
      <div className="overlay"></div>
      <div className="container mx-auto px-4 md:px-6 h-full flex items-center">
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight animate-slide-up drop-shadow-lg" style={{ animationDelay: '0.2s' }}>
            Transformando ideias em <span className="text-casanobre-gold">realidade</span>
          </h1>
          <p className="text-xl md:text-2xl text-white mb-10 animate-slide-up opacity-0 drop-shadow-md" style={{ animationDelay: '0.4s' }}>
            Especialistas em reformas, construções e projetos completos para realizar o sonho da sua casa ou empresa.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 animate-slide-up opacity-0" style={{ animationDelay: '0.6s' }}>
            <a href="#services" className="px-8 py-4 bg-casanobre-gold text-white font-medium rounded-md hover:bg-casanobre transition-all text-center text-lg shadow-lg transform hover:scale-105">
              Nossos Serviços
            </a>
            <a href="#contact" className="px-8 py-4 bg-transparent border-2 border-white text-white font-medium rounded-md hover:bg-white hover:text-casanobre transition-all text-center text-lg shadow-lg transform hover:scale-105">
              Solicitar Orçamento
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
