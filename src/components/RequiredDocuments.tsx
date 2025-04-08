
import React, { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const RequiredDocuments = () => {
  const [activeTab, setActiveTab] = useState("d7");

  return (
    <>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Documentação Necessária</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Prepare seus documentos com antecedência para agilizar seu processo de imigração. 
          Os requisitos variam conforme o tipo de visto solicitado.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <Tabs defaultValue="d7" onValueChange={setActiveTab}>
          <div className="overflow-x-auto pb-4">
            <TabsList className="h-auto p-1 flex flex-nowrap">
              <TabsTrigger value="d7" className="px-4 py-2 whitespace-nowrap">
                Visto D7
              </TabsTrigger>
              <TabsTrigger value="d2" className="px-4 py-2 whitespace-nowrap">
                Visto Empreendedor
              </TabsTrigger>
              <TabsTrigger value="family" className="px-4 py-2 whitespace-nowrap">
                Reunião Familiar
              </TabsTrigger>
              <TabsTrigger value="golden" className="px-4 py-2 whitespace-nowrap">
                Golden Visa
              </TabsTrigger>
              <TabsTrigger value="general" className="px-4 py-2 whitespace-nowrap">
                Requisitos Gerais
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="d7" className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-4">Visto D7 - Aposentados e Rendimentos Passivos</h3>
            <p className="mb-6 text-gray-700">
              O visto D7 é ideal para aposentados, pensionistas ou pessoas com rendimentos passivos que desejam residir em Portugal.
            </p>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Documentos Pessoais</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Passaporte válido por pelo menos 3 meses após o período de estadia pretendido</li>
                    <li>Duas fotografias recentes, tipo passe (3x4cm) em fundo branco</li>
                    <li>Certidão de antecedentes criminais emitida pelo país de origem (apostilada)</li>
                    <li>Comprovante de alojamento em Portugal (contrato de arrendamento ou escritura)</li>
                    <li>Seguro de viagem válido em Portugal (cobertura mínima de 30.000€)</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger>Comprovantes de Rendimentos</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Comprovante de aposentadoria ou pensão (apostilado)</li>
                    <li>Extratos bancários dos últimos 3 meses (apostilados)</li>
                    <li>Declaração de imposto de renda do último ano fiscal (apostilada)</li>
                    <li>Comprovante de rendimentos passivos (aluguéis, dividendos, etc.)</li>
                    <li>Termo de responsabilidade comprovando meios de subsistência</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger>Documentos Financeiros</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-2">É necessário comprovar rendimentos mensais mínimos equivalentes a:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Requerente principal: 100% do salário mínimo português (≈ 705€/mês)</li>
                    <li>Cônjuge: +50% do salário mínimo (≈ 352€/mês)</li>
                    <li>Cada filho dependente: +30% do salário mínimo (≈ 211€/mês)</li>
                  </ul>
                  <p className="mt-2 text-sm text-gray-500">
                    É recomendável demonstrar valores superiores ao mínimo exigido para aumentar as chances de aprovação.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>

          <TabsContent value="d2" className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-4">Visto D2 - Empreendedor</h3>
            <p className="mb-6 text-gray-700">
              O visto D2 é destinado a empresários que desejam abrir ou investir em negócios em Portugal.
            </p>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Documentos Pessoais</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Passaporte válido por pelo menos 3 meses após o período de estadia pretendido</li>
                    <li>Duas fotografias recentes, tipo passe (3x4cm) em fundo branco</li>
                    <li>Certidão de antecedentes criminais emitida pelo país de origem (apostilada)</li>
                    <li>Comprovante de alojamento em Portugal</li>
                    <li>Seguro de viagem válido em Portugal (cobertura mínima de 30.000€)</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger>Documentação do Negócio</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Plano de negócios detalhado</li>
                    <li>Comprovante de investimento ou disponibilidade de capital</li>
                    <li>Declaração da empresa portuguesa (se aplicável)</li>
                    <li>Contrato de constituição da empresa (se já existente)</li>
                    <li>Projeto de investimento com análise de viabilidade econômica</li>
                    <li>Comprovação de experiência no setor do negócio proposto</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger>Documentos Financeiros</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Comprovante de capacidade financeira para investimento</li>
                    <li>Extratos bancários dos últimos 6 meses (apostilados)</li>
                    <li>Declarações fiscais do último ano (apostiladas)</li>
                    <li>Projeções financeiras do negócio para os próximos 3 anos</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>
          
          <TabsContent value="family" className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-4">Reunificação Familiar</h3>
            <p className="mb-6 text-gray-700">
              O visto de reunificação familiar permite que familiares de residentes legais em Portugal se juntem a eles.
            </p>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Documentos Pessoais do Requerente</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Passaporte válido por pelo menos 3 meses após o período de estadia</li>
                    <li>Duas fotografias recentes, tipo passe (3x4cm) em fundo branco</li>
                    <li>Certidão de antecedentes criminais do país de origem (apostilada)</li>
                    <li>Seguro de viagem válido em Portugal (cobertura mínima de 30.000€)</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger>Documentos do Familiar Residente em Portugal</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Cópia do título de residência válido em Portugal</li>
                    <li>Comprovante de alojamento em Portugal</li>
                    <li>Comprovantes de rendimentos (3 últimos recibos de vencimento)</li>
                    <li>Declaração do IRS mais recente e respetiva nota de liquidação</li>
                    <li>Termo de responsabilidade assinado pelo familiar residente</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger>Documentos de Comprovação de Vínculo Familiar</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Certidão de casamento (para cônjuges) apostilada</li>
                    <li>Certidão de nascimento (para filhos) apostilada</li>
                    <li>Documentação que comprove união estável (para parceiros)</li>
                    <li>Comprovação de dependência econômica (para outros familiares)</li>
                    <li>Termo de autorização de saída do país (caso de menores)</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>
          
          <TabsContent value="golden" className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-4">Golden Visa</h3>
            <p className="mb-6 text-gray-700">
              O Golden Visa é um programa de investimento que concede residência a investidores estrangeiros que realizem investimentos qualificados em Portugal.
            </p>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Documentos Pessoais</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Passaporte válido</li>
                    <li>Duas fotografias recentes, tipo passe (3x4cm) em fundo branco</li>
                    <li>Certidão de antecedentes criminais do país de origem (apostilada)</li>
                    <li>Seguro de saúde válido em Portugal</li>
                    <li>Declaração da Autoridade Tributária de Portugal</li>
                    <li>Declaração da Segurança Social de Portugal</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger>Documentação de Investimento</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-2">Dependendo do tipo de investimento escolhido:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Comprovante de aquisição de imóvel (escritura) no valor mínimo exigido</li>
                    <li>Comprovante de transferência de capital no valor mínimo exigido</li>
                    <li>Documentação da criação de pelo menos 10 postos de trabalho</li>
                    <li>Comprovante de investimento em atividades de investigação científica</li>
                    <li>Documentação de investimento em fundos qualificados</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger>Requisitos de Permanência</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Manter o investimento por um período mínimo de 5 anos</li>
                    <li>Comprovante de estadia em Portugal por pelo menos 7 dias no primeiro ano</li>
                    <li>Comprovante de estadia em Portugal por pelo menos 14 dias nos períodos subsequentes de dois anos</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>
          
          <TabsContent value="general" className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-4">Requisitos Gerais</h3>
            <p className="mb-6 text-gray-700">
              Documentos geralmente exigidos para todos os tipos de visto e autorização de residência em Portugal.
            </p>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Documentos Pessoais Básicos</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Formulário de pedido de visto devidamente preenchido e assinado</li>
                    <li>Passaporte com validade superior a 3 meses além da estadia prevista</li>
                    <li>Duas fotografias tipo passe, coloridas e recentes (3x4cm) em fundo branco</li>
                    <li>Certidão de antecedentes criminais emitida pelo país de origem (apostilada)</li>
                    <li>Seguro de viagem/saúde válido em Portugal com cobertura mínima de 30.000€</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger>Comprovação de Meios de Subsistência</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Extratos bancários dos últimos 3-6 meses (apostilados)</li>
                    <li>Comprovante de renda regular (contracheques, rendimentos, etc.)</li>
                    <li>Declaração de imposto de renda do último ano fiscal</li>
                    <li>Termo de responsabilidade, quando aplicável</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger>Alojamento em Portugal</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Contrato de arrendamento registrado nas finanças</li>
                    <li>Escritura de compra e venda de imóvel</li>
                    <li>Termo de responsabilidade de cidadão português ou estrangeiro legal em Portugal</li>
                    <li>Reserva de hotel para os primeiros dias (se aplicável)</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger>Apostila de Haia</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-700">
                    Todos os documentos oficiais estrangeiros devem ser legalizados com a Apostila de Haia para serem válidos em Portugal. Países que não são signatários da Convenção de Haia precisam legalizar documentos no consulado português.
                  </p>
                  <p className="mt-2 text-gray-700">
                    Documentos em línguas diferentes do português devem ser traduzidos por tradutor certificado e a tradução também deve ser legalizada.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default RequiredDocuments;
