"use client";
import './base.css';
import './main.css'
import { useState } from "react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <html lang="pt-BR">
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Gestão de Marcas</title>
        <script src="https://cdn.tailwindcss.com"></script>
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
            <li><a href="#" className="hover:underline">Serviços</a></li>
            <li><a href="#" className="hover:underline">Quem somos</a></li>
            <li><a href="#" className="hover:underline">Contato</a></li>
          </ul>
        </nav>
      </header>
      
      {/* Main Section */}
      <main className="diagonal-divider flex flex-col md:flex-row items-center p-12" style={{paddingBottom: '200px'}}>
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-6xl font-bold">Especialistas em Gestão de Marcas Inovadoras</h2>
          <p className="text-gray-300 text-2xl ">
            Na gestão de marcas, é essencial estabelecer estratégias eficazes para fortalecer a identidade e promover a vantagem competitiva no mercado.
          </p>
          <div class="flex justify-center ...">
          <button onClick={() => setIsModalOpen(true)} className="animate-bounce bg-white text-gray-900 font-semibold px-6 py-3 rounded-lg">
            SAIBA MAIS
          </button>
          </div>
        </div>
        <div className="flex flex-row-reverse md:w-1/2">
          <img src="/images/info_pioneira.png" alt="Escritório moderno" className="float-right" style={{ width: "700px", padding: '23px', borderRadius: '50px'}}/>
        </div>
      </main>
      
      {/* Services Section */}
      <section className=" bg-gray-100 text-gray-900 p-12"  style={{paddingBottom: '200px'}}>
        <h2 className="text-5xl font-bold mb-12 flex justify-center ...">Nossos serviços</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((service) => (
            <div key={service} className="bg-white p-4 rounded-lg shadow-lg">
              <h3 className="font-semibold mt-4 text-2xl">Gestão Estratégica de Marcas</h3>
              <p className="text-sm text-gray-700 mb-2">Oferecemos soluções integradas para construir uma identidade de marca forte e consistente, garantindo sua relevância no mercado. Nossa abordagem estratégica une análise de dados e insights criativos para maximizar o impacto e a longevidade de sua marca.</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#1E293B] text-white p-12 vertical-divider">
        <h2 className="text-5xl font-bold">Mais sobre nossa marca</h2>
        <p className="mt-9 text-gray-300 text-2xl">Na nossa agência, nos especializamos em estratégias de gestão de marcas que impulsionam o reconhecimento e a fidelidade junto ao seu público-alvo. Com uma abordagem inovadora e personalizada, asseguramos que sua marca se destaque no mercado competitivo. <a href="#" class="underline">Saiba mais</a></p>
    </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 p-8 text-center mt-12">
        <p className="text-lg font-semibold">Pioneira Regularização Empresarial</p>
        <p className="text-sm mt-2">&copy; 2025 Todos os direitos reservados.</p>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="#" className="hover:text-white">Facebook</a>
          <a href="#" className="hover:text-white">Instagram</a>
          <a href="#" className="hover:text-white">LinkedIn</a>
        </div>
      </footer>
      
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white text-gray-900 p-6 rounded-lg w-1/2">
            <h2 className="text-2xl font-bold mb-4">Mais Informações</h2>
            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
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