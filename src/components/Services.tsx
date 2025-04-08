
import React from 'react';
import { Home, Ruler, Hammer, PenTool } from 'lucide-react';

const servicesData = [
  {
    icon: <Home className="w-12 h-12 text-casanobre-gold" />,
    title: 'Construção Residencial',
    description: 'Construímos sua casa dos sonhos do zero, com qualidade, segurança e dentro do prazo.'
  },
  {
    icon: <Ruler className="w-12 h-12 text-casanobre-gold" />,
    title: 'Reformas',
    description: 'Transformamos e renovamos ambientes com soluções criativas e execução impecável.'
  },
  {
    icon: <Hammer className="w-12 h-12 text-casanobre-gold" />,
    title: 'Construção Comercial',
    description: 'Projetos comerciais com foco em funcionalidade, estética e otimização de espaços.'
  },
  {
    icon: <PenTool className="w-12 h-12 text-casanobre-gold" />,
    title: 'Projetos Completos',
    description: 'Do conceito à execução: projetos arquitetônicos, estruturais e de instalações.'
  }
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-casanobre mb-4">Nossos Serviços</h2>
          <div className="w-24 h-1 bg-casanobre-gold mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Oferecemos soluções completas em engenharia e construção civil, 
            com foco na qualidade e satisfação dos nossos clientes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-casanobre">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="#contact" className="px-6 py-3 bg-casanobre text-white font-medium rounded hover:bg-casanobre-light transition-all">
            Solicite um Orçamento
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
