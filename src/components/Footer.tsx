import { Phone, Mail, MapPin, Instagram, Clock } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleNavigation = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#001a4d] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="bg-white text-[#001a4d] font-bold text-xl px-3 py-2 rounded">
                EX
              </div>
              <div className="ml-2">
                <div className="text-white font-bold text-lg">EXATA</div>
                <div className="text-gray-300 text-xs uppercase">Assessoria Contábil</div>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Excelência contábil para empresas e pessoas físicas em Maringá e região.
            </p>
            <div className="text-sm text-gray-300">
              <p className="font-semibold text-white mb-1">CNPJ</p>
              <p>58.230.738/0001-25</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Navegação</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleNavigation('home')}
                  className="text-gray-300 hover:text-white transition text-sm"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('about')}
                  className="text-gray-300 hover:text-white transition text-sm"
                >
                  Quem Somos
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('services')}
                  className="text-gray-300 hover:text-white transition text-sm"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('blog')}
                  className="text-gray-300 hover:text-white transition text-sm"
                >
                  Blog
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('contact')}
                  className="text-gray-300 hover:text-white transition text-sm"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <Phone className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                <div>
                  <a href="tel:+5544999264057" className="text-gray-300 hover:text-white transition block">
                    (44) 99926-4057
                  </a>
                  <a href="tel:+5544988157018" className="text-gray-300 hover:text-white transition block">
                    (44) 98815-7018
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                <a
                  href="mailto:exata@exatacontabilidademga.com.br"
                  className="text-gray-300 hover:text-white transition break-all"
                >
                  exata@exatacontabilidademga.com.br
                </a>
              </li>
              <li className="flex items-start">
                <Instagram className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                <a
                  href="https://www.instagram.com/exata.assessoria.contabil_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition"
                >
                  @exata.assessoria.contabil_
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Localização</h3>
            <div className="flex items-start mb-4">
              <MapPin className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
              <div className="text-sm text-gray-300">
                <p>Avenida Tuiuti, 2412</p>
                <p>Sobre Loja, Sala 17</p>
                <p>Jardim Pinheiros</p>
                <p>CEP 87043-629</p>
                <p className="font-semibold text-white mt-1">Maringá - Paraná</p>
              </div>
            </div>
            <div className="flex items-start">
              <Clock className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
              <div className="text-sm text-gray-300">
                <p>Segunda a Sexta</p>
                <p>08:00 - 18:00</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-300 text-center md:text-left mb-4 md:mb-0">
              2025 EXATA Assessoria Contábil. Todos os direitos reservados.
            </p>
            <div className="flex items-center space-x-4">
              <p className="text-sm text-gray-300">Responsáveis Técnicos:</p>
              <div className="text-sm text-white">
                <p>Alexandre Oliveira - Contador</p>
                <p>Tiago Nery - Contador</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
