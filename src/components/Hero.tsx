
import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="parallax" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80')" }}>
      <div className="overlay"></div>
      <div className="container mx-auto px-4 md:px-6 h-full flex items-center">
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Transformando ideias em <span className="text-casanobre-gold">realidade</span>
          </h1>
          <p className="text-lg md:text-xl text-white mb-8 animate-slide-up opacity-0" style={{ animationDelay: '0.4s' }}>
            Especialistas em reformas, construções e projetos completos para realizar o sonho da sua casa ou empresa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up opacity-0" style={{ animationDelay: '0.6s' }}>
            <a href="#services" className="px-6 py-3 bg-casanobre-gold text-white font-medium rounded hover:bg-casanobre transition-all text-center">
              Nossos Serviços
            </a>
            <a href="#contact" className="px-6 py-3 bg-transparent border-2 border-white text-white font-medium rounded hover:bg-white hover:text-casanobre transition-all text-center">
              Solicitar Orçamento
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
