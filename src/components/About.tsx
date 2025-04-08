
import React from 'react';

const About = () => {
  return (
    <section id="about" className="parallax" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80')", height: '80vh' }}>
      <div className="overlay"></div>
      <div className="container mx-auto px-4 md:px-6 h-full flex items-center">
        <div className="relative z-10 bg-white/90 p-8 md:p-12 rounded-lg max-w-3xl ml-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-casanobre mb-6">Sobre a Casa Nobre Engenharia</h2>
          <div className="w-24 h-1 bg-casanobre-gold mb-6"></div>
          
          <p className="text-gray-700 mb-6">
            A Casa Nobre Engenharia é uma empresa especializada em construção civil, 
            reformas e desenvolvimento de projetos completos. Fundada pelo Engenheiro 
            Marcelo, nossa empresa nasceu da paixão pela arquitetura e compromisso 
            com a qualidade.
          </p>
          <p className="text-gray-700 mb-6">
            Com uma equipe qualificada de engenheiros, arquitetos e profissionais da construção, 
            trabalhamos para transformar ideias em realidade, entregando projetos que superam 
            as expectativas dos nossos clientes.
          </p>
          <p className="text-gray-700 mb-6">
            Nossa missão é oferecer soluções personalizadas em engenharia e construção, 
            priorizando a qualidade, o cumprimento de prazos e o atendimento às necessidades 
            específicas de cada cliente.
          </p>
          
          <div className="flex items-center">
            <div className="mr-4">
              <img 
                src="" 
                alt="Eng. Marcelo" 
                className="w-16 h-16 rounded-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-bold text-casanobre">Eng. Marcelo Laino</h3>
              <p className="text-gray-600">Fundador e Diretor</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
