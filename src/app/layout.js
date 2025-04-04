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
      
      <section className="bg-[#f3f4f6] text-gray-900 p-12 text-center">
        <h2 className="text-3xl font-bold mb-6">Nossos Serviços</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg shadow">
                <i className="ph ph-buildings text-6xl text-blue-500 mb-4"></i>
                <h3 className="text-xl font-semibold mb-2">Serviços Societários</h3>
                <p>Constituição, alterações e encerramento de empresas com segurança jurídica e agilidade.</p>
            </div>
            <div className="p-6 border rounded-lg shadow">
                <i className="ph ph-trademark text-6xl text-green-500 mb-4"></i>
                <h3 className="text-xl font-semibold mb-2">Registro de Marcas</h3>
                <p>Proteja a identidade da sua empresa com o registro oficial no INPI.</p>
            </div>
            <div className="p-6 border rounded-lg shadow">
                <i className="ph ph-shield-check text-6xl text-red-500 mb-4"></i>
                <h3 className="text-xl font-semibold mb-2">Consultoria em Compliance</h3>
                <p>Orientação estratégica para manter sua empresa regular e em conformidade com a legislação.</p>
            </div>
        </div>
    </section>

      <section class="bg-gray-900 text-white p-12 text-center">
        <h2 class="text-3xl font-bold mb-6">Os números da Pioneira</h2>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6 text-lg font-semibold">
            <div>
                <p class="text-4xl">+ de 25</p>
                <p>Funcionários</p>
            </div>
            <div>
                <p class="text-4xl">+ de 900</p>
                <p>Empresas Abertas</p>
            </div>
            <div>
                <p class="text-4xl">+ de 400</p>
                <p>Migrações Realizadas</p>
            </div>
            <div>
                <p class="text-4xl">+ de 25</p>
                <p>Anos de Experiência</p>
            </div>
        </div>
    </section>

      <section className="bg-[#1E293B] text-white p-12 vertical-divider">
        <h2 className="text-5xl font-bold">Mais sobre nossa marca</h2>
        <p className="mt-9 text-gray-300 text-2xl">Na nossa agência, nos especializamos em estratégias de gestão de marcas que impulsionam o reconhecimento e a fidelidade junto ao seu público-alvo. Com uma abordagem inovadora e personalizada, asseguramos que sua marca se destaque no mercado competitivo. <a href="#" class="underline">Saiba mais</a></p>
    </section>

    <section class="bg-white text-gray-900 p-12 text-center">
        <h2 class="text-3xl font-bold mb-4">Fale Conosco</h2>
        <p class="mb-6">Entre em contato com nossos especialistas via WhatsApp para saber mais sobre como podemos ajudar sua empresa:</p>
        <a href="https://wa.me/556992154725?text=Ol%C3%A1%20vim%20do%20site%20da%20Pioneira,%20gostaria%20de%20conversar" target="_blank" class="inline-block bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600">Fale conosco no WhatsApp</a>
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