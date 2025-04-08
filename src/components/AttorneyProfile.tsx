
import React from 'react';

const AttorneyProfile = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Nosso Especialista</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Conte com um advogado especializado em direito migratório para conduzir seu processo de imigração para Portugal com eficiência e segurança.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/3">
            <div className="h-64 md:h-full bg-gray-200 relative">
              {/* Placeholder for attorney photo - in a real site, you'd use an actual photo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="md:w-2/3 p-6 md:p-8">
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-gray-900">Dr. Eric Soares</h3>
              <p className="text-blue-700 font-medium">Especialista em Direito Migratório</p>
            </div>
            
            <div className="space-y-4 text-gray-700">
              <p>
                O Dr. Eric Soares é advogado especializado em direito migratório, com vasta experiência 
                em processos de imigração para Portugal. Com mais de 10 anos de atuação, já auxiliou 
                centenas de famílias a realizarem seu sonho de viver em Portugal.
              </p>
              <p>
                Formado em Direito pela Universidade de Coimbra e com especialização em Direito Internacional, 
                possui profundo conhecimento das leis migratórias portuguesas e europeias, acompanhando de 
                perto as constantes atualizações na legislação.
              </p>
              <p>
                Seu escritório oferece atendimento personalizado e acompanhamento em todas as etapas do 
                processo de imigração, desde a análise inicial do caso até a obtenção da residência permanente ou cidadania.
              </p>
            </div>
            
            <div className="mt-6 space-y-3">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-700 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>OAP (Ordem dos Advogados de Portugal) Nº 12345</span>
              </div>
              
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-700 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+351 912 345 678</span>
              </div>
              
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-700 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>eric.soares@escritoriojuridico.pt</span>
              </div>
              
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-700 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Avenida da Liberdade, 110, 1º andar, Lisboa, Portugal</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-700 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold mb-2">Experiência Comprovada</h3>
          <p className="text-gray-600">
            Mais de 10 anos de experiência em processos de imigração para Portugal, com alta taxa de sucesso.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-700 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <path d="M16 2v4" />
              <path d="M8 2v4" />
              <path d="M3 10h18" />
              <path d="M8 14h.01" />
              <path d="M12 14h.01" />
              <path d="M16 14h.01" />
              <path d="M8 18h.01" />
              <path d="M12 18h.01" />
              <path d="M16 18h.01" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold mb-2">Acompanhamento Completo</h3>
          <p className="text-gray-600">
            Assessoria jurídica em todas as etapas do processo, desde a preparação dos documentos até a obtenção do visto.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-700 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold mb-2">Garantia de Segurança</h3>
          <p className="text-gray-600">
            Processos conduzidos com total conformidade legal e transparência em todas as etapas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AttorneyProfile;
