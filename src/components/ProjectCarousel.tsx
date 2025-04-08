
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Casa Moderna Vila Nova',
    category: 'Residencial',
    image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80'
  },
  {
    id: 2,
    title: 'Edifício Comercial Centro',
    category: 'Comercial',
    image: 'https://images.unsplash.com/photo-1433832597046-4f10e10ac764?auto=format&fit=crop&q=80'
  },
  {
    id: 3,
    title: 'Reforma Apartamento Luxo',
    category: 'Reforma',
    image: 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&q=80'
  },
  {
    id: 4,
    title: 'Projeto Residencial Jardins',
    category: 'Projeto',
    image: 'https://images.unsplash.com/photo-1487252665478-49b61b47f302?auto=format&fit=crop&q=80'
  }
];

const ProjectCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  
  const categories = ['Todos', 'Residencial', 'Comercial', 'Reforma', 'Projeto'];
  
  useEffect(() => {
    if (activeCategory === 'Todos') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeCategory));
    }
    setCurrentIndex(0);
  }, [activeCategory]);
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === filteredProjects.length - 1 ? 0 : prevIndex + 1));
  };
  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? filteredProjects.length - 1 : prevIndex - 1));
  };
  
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-casanobre mb-4">Nossos Projetos</h2>
          <div className="w-24 h-1 bg-casanobre-gold mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Conheça alguns dos projetos que realizamos com excelência e compromisso.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded ${
                activeCategory === category
                  ? 'bg-casanobre-gold text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="relative overflow-hidden rounded-xl shadow-xl h-[500px]">
          {filteredProjects.length > 0 ? (
            <>
              <div 
                className="h-full w-full transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)`, display: 'flex' }}
              >
                {filteredProjects.map((project) => (
                  <div key={project.id} className="min-w-full h-full relative">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                      <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                      <p className="text-casanobre-gold">{project.category}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {filteredProjects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full ${
                      currentIndex === index ? 'bg-casanobre-gold' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center h-full bg-gray-100">
              <p className="text-gray-500">Nenhum projeto encontrado nesta categoria</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectCarousel;
