
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DocumentUpload from '../components/DocumentUpload';
import RequiredDocuments from '../components/RequiredDocuments';
import AttorneyProfile from '../components/AttorneyProfile';
import { Toaster } from 'sonner';

const ImmigrationServices = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Serviços de Imigração para Portugal
              </h1>
              <p className="text-xl opacity-90 mb-8">
                Facilitamos o seu processo de imigração para Portugal com assessoria jurídica especializada.
              </p>
              <a 
                href="#process" 
                className="inline-flex items-center justify-center bg-white text-blue-800 px-6 py-3 rounded-md font-medium hover:bg-blue-50 transition-all"
              >
                Iniciar Processo
              </a>
            </div>
          </div>
        </section>
        
        {/* Services Overview */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Nossos Serviços de Imigração</h2>
              <p className="text-gray-600">
                Oferecemos suporte completo para todos os tipos de vistos e autorizações de residência em Portugal.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 21H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v7" />
                    <path d="M12 17v-5" />
                    <path d="M9 14h6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Visto D7</h3>
                <p className="text-gray-600">
                  Para aposentados, pensionistas e pessoas com rendimentos passivos que desejam residir em Portugal.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Visto para Empreendedores</h3>
                <p className="text-gray-600">
                  Para empreendedores e investidores que desejam abrir ou investir em negócios em Portugal.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 7h-3a2 2 0 0 1-2-2V2" />
                    <path d="M9 22h6" />
                    <path d="M12 17v5" />
                    <path d="M5 8v-.5A3.5 3.5 0 0 1 8.5 4H12" />
                    <path d="M20 7H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h15a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Reunião Familiar</h3>
                <p className="text-gray-600">
                  Para familiares de cidadãos portugueses ou de estrangeiros com autorização de residência.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Attorney Profile Section */}
        <section id="attorney" className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <AttorneyProfile />
          </div>
        </section>
        
        {/* Required Documents Section */}
        <section id="documents" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <RequiredDocuments />
          </div>
        </section>
        
        {/* Document Upload Section */}
        <section id="process" className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Enviar Documentos</h2>
                <p className="text-gray-600">
                  Complete o formulário abaixo e envie os documentos necessários para iniciarmos seu processo de imigração.
                </p>
              </div>
              <DocumentUpload />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default ImmigrationServices;
