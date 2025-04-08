
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this to your backend
    console.log('Form submitted:', formData);
    toast.success('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-casanobre mb-4">Entre em Contato</h2>
          <div className="w-24 h-1 bg-casanobre-gold mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Estamos prontos para ajudar a tornar seu projeto realidade. Entre em contato 
            para um orçamento gratuito ou para esclarecer quaisquer dúvidas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-casanobre mb-6">Envie uma mensagem</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 mb-2">Nome Completo</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-casanobre"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-casanobre"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700 mb-2">Telefone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-casanobre"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2">Mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-casanobre"
                  required
                ></textarea>
              </div>
              <button type="submit" className="w-full bg-casanobre text-white py-3 rounded-md hover:bg-casanobre-light transition-all flex items-center justify-center gap-2">
                <Send className="w-4 h-4" />
                Enviar Mensagem
              </button>
            </form>
          </div>
          
          {/* Contact info */}
          <div>
            <div className="bg-casanobre rounded-lg shadow-lg p-8 text-white mb-8">
              <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="w-6 h-6 mr-4 text-casanobre-gold" />
                  <div>
                    <h4 className="font-bold">Telefone</h4>
                    <p>(11) 99999-9999</p>
                    <p>(11) 5555-5555</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="w-6 h-6 mr-4 text-casanobre-gold" />
                  <div>
                    <h4 className="font-bold">Email</h4>
                    <p>contato@casanobreengenharia.com.br</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 mr-4 text-casanobre-gold" />
                  <div>
                    <h4 className="font-bold">Endereço</h4>
                    <p>Av. Paulista, 1000 - Bela Vista</p>
                    <p>São Paulo - SP, 01310-000</p>
                  </div>
                </div>
              </div>
            </div>
            
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-600 text-white py-4 rounded-lg hover:bg-green-700 transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M1.101 21.757L2.45 16.62C1.885 15.331 1.594 13.95 1.594 12.526C1.594 6.535 6.525 1.604 12.516 1.604C15.39 1.604 18.103 2.716 20.114 4.727C22.125 6.739 23.238 9.452 23.238 12.326C23.238 18.318 18.307 23.248 12.316 23.248C10.972 23.248 9.656 22.983 8.444 22.477L1.101 21.757ZM8.05 20.211C9.173 20.656 10.14 20.873 11.151 20.873C16.992 20.873 21.739 16.126 21.739 10.286C21.739 7.724 20.756 5.315 19.007 3.566C17.258 1.817 14.849 0.834 12.287 0.834C6.445 0.834 1.699 5.581 1.699 11.421C1.699 12.517 1.945 13.628 2.427 14.645L1.525 18.599L5.487 17.72C6.461 18.155 7.47 18.366 8.488 18.366H8.5C8.486 18.365 8.47 18.364 8.453 18.363C8.417 18.361 8.376 18.358 8.331 18.354C8.3 18.351 8.268 18.348 8.236 18.344C8.204 18.341 8.172 18.337 8.14 18.333C8.123 18.331 8.106 18.329 8.09 18.327L8.05 20.211Z" fill="currentColor"/>
                <path d="M2.45 16.62L1.101 21.757L8.444 22.477C9.656 22.983 10.972 23.248 12.316 23.248C18.307 23.248 23.238 18.318 23.238 12.326C23.238 9.452 22.125 6.739 20.114 4.727C18.103 2.716 15.39 1.604 12.516 1.604C6.525 1.604 1.594 6.535 1.594 12.526C1.594 13.95 1.885 15.331 2.45 16.62ZM8.453 18.363C8.47 18.364 8.486 18.365 8.5 18.366H8.488C7.47 18.366 6.461 18.155 5.487 17.72L1.525 18.599L2.427 14.645C1.945 13.628 1.699 12.517 1.699 11.421C1.699 5.581 6.445 0.834 12.287 0.834C14.849 0.834 17.258 1.817 19.007 3.566C20.756 5.315 21.739 7.724 21.739 10.286C21.739 16.126 16.992 20.873 11.151 20.873C10.14 20.873 9.173 20.656 8.05 20.211L8.09 18.327C8.106 18.329 8.123 18.331 8.14 18.333C8.172 18.337 8.204 18.341 8.236 18.344C8.268 18.348 8.3 18.351 8.331 18.354C8.376 18.358 8.417 18.361 8.453 18.363Z" fill="white"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M9.533 7.774C9.372 7.403 9.201 7.392 9.045 7.382C8.914 7.374 8.763 7.374 8.613 7.374C8.462 7.374 8.221 7.424 8.02 7.645C7.819 7.866 7.07 8.553 7.07 9.95C7.07 11.347 8.04 12.686 8.17 12.836C8.301 12.987 10.114 16.057 13.114 17.153C15.636 18.081 16.114 17.882 16.624 17.842C17.134 17.802 18.292 17.174 18.473 16.538C18.654 15.902 18.654 15.346 18.589 15.226C18.523 15.106 18.372 15.046 18.142 14.925C17.911 14.805 16.513 14.118 16.293 14.037C16.072 13.957 15.921 13.917 15.771 14.147C15.62 14.378 15.069 15.006 14.939 15.156C14.808 15.307 14.678 15.327 14.447 15.206C14.217 15.086 13.275 14.781 12.165 13.794C11.303 13.037 10.729 12.099 10.598 11.869C10.468 11.638 10.584 11.517 10.695 11.407C10.794 11.307 10.915 11.146 11.025 11.016C11.136 10.886 11.176 10.786 11.256 10.636C11.337 10.485 11.297 10.355 11.236 10.235C11.176 10.114 10.619 8.704 10.423 8.242C10.241 7.811 10.055 7.865 9.915 7.858C9.784 7.852 9.642 7.849 9.533 7.774Z" fill="white"/>
              </svg>
              Fale Conosco no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
