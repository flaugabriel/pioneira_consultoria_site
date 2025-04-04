"use client";
import './base.css';
import './main.css'
import { useState } from "react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Gestão de Marcas</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <script src="https://unpkg.com/@phosphor-icons/web"></script>
      </head>
      <body className="bg-[#1E293B] text-white">
      <div className="bg-[#1E293B] text-white min-h-screen">
      {/* Header */}
      <header className="flex justify-between items-center p-12">
        <a id="site-title" href="/" data-animation-role="header-element">
          <img src="/images/pionera_logo_branco.png" width="50px" alt="" style={{width: 300, height: 100}}/>
        </a>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#services" className="hover:underline">Serviços</a></li>
            <li><a href="#contact" className="hover:underline">Contato</a></li>
          </ul>
        </nav>
      </header>
      
      {/* Main Section */}
      <main className="diagonal-divider flex flex-col md:flex-row items-center p-12" style={{paddingBottom: '200px'}}>
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-6xl font-bold">Consultoria em Regularização Empresarial</h2>
          <p className="text-gray-300 text-2xl ">
          A Pioneira Regularização Empresarial Ltda. é especializada em terceirização de serviços societários, registro de marcas e consultoria completa para que empresas se mantenham regulares, competitivas e protegidas.
          </p>
          <div className="flex justify-center ...">
          <button onClick={() => setIsModalOpen(true)} className="animate-bounce bg-white text-gray-900 font-semibold px-6 py-3 rounded-lg">
            SAIBA MAIS
          </button>
          </div>
        </div>
        <div className="flex flex-row-reverse md:w-1/2">
          <img src="/images/info_pioneira.png" alt="Escritório moderno" className="float-right" style={{ width: "700px", padding: '23px', borderRadius: '50px'}}/>
        </div>
      </main>
      
      <section className="bg-[#c1c4c6] text-gray-900 p-12 text-center" style={{paddingBottom: '150px'}} id='services'>
        <h2 className="text-6xl font-bold mb-12">Principais serviços</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg shadow bg-white">
                <i className="ph ph-buildings text-6xl text-blue-500 mb-4"></i>
                <h3 className="text-3xl font-semibold mb-2">Terceirização de Serviços Societários: </h3>
                <p className='text-2xl'>Acompanhamento completo de todas as formalidades societárias, garantindo que sua empresa esteja em conformidade com a legislação vigente, desde a constituição até a dissolução da sociedade.</p>
            </div>
            <div className="p-6 border rounded-lg shadow bg-white">
                <i className="ph ph-trademark text-6xl text-green-500 mb-4"></i>
                <h3 className="text-xl font-semibold mb-2">Registro de Marcas</h3>
                <p className='text-2xl'>Assessoria especializada no processo de registro de marcas e proteção intelectual, assegurando que sua identidade empresarial seja legalmente resguardada e bem posicionada no mercado.</p>
            </div>
            <div className="p-6 border rounded-lg shadow bg-white">
                <i className="ph ph-shield-check text-6xl text-red-500 mb-4"></i>
                <h3 className="text-xl font-semibold mb-2">Consultoria em Compliance</h3>
                <p className='text-2xl'>Orientação estratégica para manter sua empresa regular e em conformidade com a legislação.</p>
            </div>
        </div>
    </section>

    <section className="bg-[#272727] text-white p-12 text-center angled-top-divider" style={{paddingBottom: '150px', paddingTopj: '150px'}}>
        <h2 className="text-3xl font-bold mb-6">Os números da Pioneira</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-lg font-semibold">
            <div>
                <p className="text-4xl">+ de 25</p>
                <p>Funcionários</p>
            </div>
            <div>
                <p className="text-4xl">+ de 900</p>
                <p>Empresas Abertas</p>
            </div>
            <div>
                <p className="text-4xl">+ de 400</p>
                <p>Migrações Realizadas</p>
            </div>
            <div>
                <p className="text-4xl">+ de 10</p>
                <p>Anos de Experiência</p>
            </div>
        </div>
    </section>

      <section className="bg-[#8c6e49] text-white p-12 vertical-divider" style={{ borderColor: "black", borderBlockWidth: "8px"}}>
        <h2 className="text-5xl font-bold">Mais sobre nossa marca</h2>
        <p className="mt-9 text-gray-300 text-2xl">Nosso compromisso com a qualidade e a eficiência se reflete na construção de relações de confiança com nossos clientes, que buscam não apenas o cumprimento das obrigações legais, mas também o fortalecimento de suas marcas e a maximização de suas oportunidades de negócios. </p>
    </section>

    <section className="bg-[#1E293B] text-gray-900 p-12 text-center" id='contact'>
        <h2 className="text-3xl font-bold mb-4 text-white">Fale Conosco</h2>
        <p className="mb-6 text-white">Entre em contato com nossos especialistas via WhatsApp para saber mais sobre como podemos ajudar sua empresa:</p>
        <a href="https://wa.me/556992154725?text=Ol%C3%A1%20vim%20do%20site%20da%20Pioneira,%20gostaria%20de%20conversar" target="_blank" class="inline-block bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600">Fale conosco no WhatsApp</a>
    </section>
      
      {/* Footer */}
      <footer className="bg-white justify-between text-black p-8 text-center">
        <div className="grid grid-cols-6 gap-4">
          <div className="col-start-1 col-end-3 ...">
            <div className="flex justify-center space-x-3 mt-4">
            <a id="site-title" href="/" data-animation-role="header-element">
              <img src="/images/pionera_logo_preta.png" width="50px" alt="" style={{width: '200px', height: '100px'}}/>
            </a>
            </div>
          </div>
          <div className="col-span-2 col-end-7 ...">
            <p className="text-lg mt-2">R João Pedro da Rocha, 1051, Nova Porto Velho, Pôrto Velho 76.820-128</p>
          </div>
          <div className="col-start-1 col-end-7 ...">
            <p className="text-lg font-semibold">Pioneira Regularização Empresarial</p>
            <p>
                <a href="https://www.instagram.com/pioneiraregularizacao" className="hover:text-white" target='_Blank'><i className="ph ph-instagram-logo text-4xl text-black"></i></a>
              </p>
              <hr/>
            <p className="text-sm mt-1">&copy; 2025 Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
      
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white text-gray-900 p-6 rounded-lg w-1/2">
            <h2 className="text-2xl font-bold mb-4">Mais Informações</h2>
            <p className="mb-4">Atuamos com uma equipe altamente qualificada e com conhecimento profundo em todas as etapas relacionadas à regularização empresarial, elaboração de contratos sociais, alterações contratuais, consultoria em compliance e gestão de marcas, proporcionando a tranquilidade necessária para que nossos clientes possam se concentrar no crescimento de seus negócios.</p>
            <button onClick={() => setIsModalOpen(false)} className="mt-4 bg-gray-900 text-white px-4 py-2 rounded">
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
      </body>
    </html>
  );
}