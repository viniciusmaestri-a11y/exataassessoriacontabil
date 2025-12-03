import { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: 'home' },
    { name: 'Quem Somos', href: 'about' },
    { name: 'Serviços', href: 'services' },
    { name: 'Blog', href: 'blog' },
    { name: 'Contato', href: 'contact' }
  ];

  const handleNavigation = (page: string) => {
    onNavigate(page);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div className="bg-[#001a4d] text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <a href="tel:+5544999264057" className="flex items-center hover:text-gray-300 transition">
                <Phone className="w-4 h-4 mr-1" />
                (44) 99926-4057
              </a>
              <a href="mailto:exata@exatacontabilidademga.com.br" className="hidden sm:flex items-center hover:text-gray-300 transition">
                <Mail className="w-4 h-4 mr-1" />
                exata@exatacontabilidademga.com.br
              </a>
            </div>
            <div className="text-xs sm:text-sm">
              Maringá - PR
            </div>
          </div>
        </div>
      </div>

      <header className="bg-white shadow-md sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div
              className="flex items-center cursor-pointer"
              onClick={() => handleNavigation('home')}
            >
              <div className="flex items-center">
                <div className="bg-[#001a4d] text-white font-bold text-2xl px-3 py-2 rounded">
                  EX
                </div>
                <div className="ml-2">
                  <div className="text-[#001a4d] font-bold text-xl leading-tight">EXATA</div>
                  <div className="text-gray-600 text-xs uppercase tracking-wide">Assessoria Contábil</div>
                </div>
              </div>
            </div>

            <div className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.href)}
                  className={`${
                    currentPage === item.href
                      ? 'text-[#001a4d] border-b-2 border-[#001a4d]'
                      : 'text-gray-700 hover:text-[#001a4d]'
                  } px-3 py-2 text-sm font-medium transition`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            <div className="hidden md:block">
              <a
                href="https://wa.me/5544999264057?text=Olá!%20Gostaria%20de%20falar%20com%20um%20contador%20da%20EXATA."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition font-medium"
              >
                WhatsApp
              </a>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-[#001a4d] transition"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden pb-4">
              <div className="flex flex-col space-y-2">
                {navigation.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavigation(item.href)}
                    className={`${
                      currentPage === item.href
                        ? 'text-[#001a4d] bg-gray-100'
                        : 'text-gray-700 hover:bg-gray-50'
                    } px-3 py-2 rounded text-left font-medium`}
                  >
                    {item.name}
                  </button>
                ))}
                <a
                  href="https://wa.me/5544999264057?text=Olá!%20Gostaria%20de%20falar%20com%20um%20contador%20da%20EXATA."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white px-3 py-2 rounded text-center hover:bg-green-700 transition font-medium"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}
