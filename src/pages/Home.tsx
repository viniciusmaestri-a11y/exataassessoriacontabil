# bolt.new
import { useEffect, useRef } from 'react';
import L from 'leaflet';
import { Building2, Calculator, FileText, Users, TrendingUp, Shield, Clock, Award } from 'lucide-react';
import { services } from '../data/services';
import ExataLogo from '../components/exata-logo.png';

interface HomeProps {
  onNavigate: (page: string, serviceId?: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const benefits = [
    {
      icon: Shield,
      title: 'Segurança e Conformidade',
      description: 'Mantenha sua empresa sempre em dia com todas as obrigações fiscais e trabalhistas.'
    },
    {
      icon: TrendingUp,
      title: 'Crescimento Sustentável',
      description: 'Estratégias contábeis para impulsionar o desenvolvimento do seu negócio.'
    },
    {
      icon: Clock,
      title: 'Agilidade no Atendimento',
      description: 'Respostas rápidas e suporte sempre que você precisar.'
    },
    {
      icon: Award,
      title: 'Excelência Profissional',
      description: 'Equipe experiente e altamente qualificada ao seu dispor.'
    }
  ];

  const stats = [
    { number: '15+', label: 'Anos de Experiência' },
    { number: '500+', label: 'Clientes Atendidos' },
    { number: '100%', label: 'Conformidade Legal' },
    { number: '24h', label: 'Resposta Média' }
  ];

  const iconMap: Record<string, any> = {
    Building2,
    Calculator,
    FileText,
    Users
  };

  // === MAPA EXATA ASSESSORIA CONTÁBIL ===
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapContainerRef.current || mapInstanceRef.current) return;

    const map = L.map(mapContainerRef.current).setView(
      [-23.408291241436434, -51.899834460929846],
      16
    );

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([-23.408291241436434, -51.899834460929846])
      .addTo(map)
      .bindPopup('Exata Assessoria Contábil<br>Localização Exata no mapa.')
      .openPopup();

    mapInstanceRef.current = map;

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);
  // ================================

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-[#001a4d] via-[#002d6d] to-[#001a4d] text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            # exata-logo.png
            <img
  src={ExataLogo}
  alt="Exata Assessoria Contábil"
  className="w-[640px] h-[241px] object-contain mb-8"
/>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Excelência Contábil para Quem Busca Segurança, Crescimento e Transparência
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              Soluções contábeis completas para empresas e pessoas físicas, com atendimento humanizado e agilidade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/5544999264057?text=Olá!%20Gostaria%20de%20falar%20com%20um%20contador%20da%20EXATA."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition font-semibold text-lg text-center shadow-lg"
              >
                Fale com um Contador
              </a>
              <button
                onClick={() => onNavigate('services')}
                className="bg-white text-[#001a4d] px-8 py-4 rounded-lg hover:bg-gray-100 transition font-semibold text-lg shadow-lg"
              >
                Conheça nossos Serviços
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#001a4d] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#001a4d] mb-4">
              Nossos Serviços
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Soluções completas em contabilidade para empresas de todos os portes e pessoas físicas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => {
              const Icon = iconMap[service.icon];
              return (
                <div
                  key={service.id}
                  className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all cursor-pointer group"
                  onClick={() => onNavigate('service-detail', service.id)}
                >
                  <div className="bg-[#001a4d] text-white w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-[#001a4d] mb-3 group-hover:text-[#002d6d] transition">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <button className="text-[#001a4d] font-semibold hover:underline">
                    Saiba mais →
                  </button>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('services')}
              className="bg-[#001a4d] text-white px-8 py-3 rounded-lg hover:bg-[#002d6d] transition font-semibold"
            >
              Ver Todos os Serviços
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#001a4d] mb-4">
              Por Que Escolher a EXATA?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Benefícios de contar com uma contabilidade profissional e estratégica
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-[#001a4d] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-[#001a4d] mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#001a4d] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Atendemos Maringá e Toda Região com Excelência Contábil
              </h2>
              <p className="text-xl text-gray-200 mb-6 leading-relaxed">
                Nossa missão é ser o parceiro estratégico que impulsiona o crescimento sustentável dos nossos clientes através de soluções contábeis eficientes e transparentes.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                Com anos de experiência no mercado, oferecemos atendimento personalizado, tecnologia de ponta e uma equipe altamente qualificada para cuidar de todas as necessidades contábeis da sua empresa.
              </p>
              <button
                onClick={() => onNavigate('about')}
                className="bg-white text-[#001a4d] px-8 py-3 rounded-lg hover:bg-gray-100 transition font-semibold"
              >
                Conheça Nossa História
              </button>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <Shield className="w-12 h-12 mb-4" />
                <h3 className="text-xl font-bold mb-2">Ética</h3>
                <p className="text-gray-300">Transparência em todas as relações</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <Award className="w-12 h-12 mb-4" />
                <h3 className="text-xl font-bold mb-2">Integridade</h3>
                <p className="text-gray-300">Compromisso com a verdade</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <TrendingUp className="w-12 h-12 mb-4" />
                <h3 className="text-xl font-bold mb-2">Precisão</h3>
                <p className="text-gray-300">Detalhes que fazem diferença</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <Clock className="w-12 h-12 mb-4" />
                <h3 className="text-xl font-bold mb-2">Agilidade</h3>
                <p className="text-gray-300">Respostas quando você precisa</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO DO MAPA */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#001a4d] mb-4">
              Onde Estamos
            </h2>
            <p className="text-lg text-gray-600">
              Veja a localização da Exata Assessoria Contábil em Maringá no mapa abaixo.
            </p>
          </div>
          <div
            ref={mapContainerRef}
            className="w-full h-80 rounded-lg shadow-lg border border-gray-200"
          />
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#001a4d] mb-6">
            Pronto para Transformar a Gestão Contábil da Sua Empresa?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Entre em contato conosco e descubra como podemos ajudar seu negócio a crescer com segurança e eficiência.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5544999264057?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition font-semibold text-lg"
            >
              Solicitar Orçamento
            </a>
            <button
              onClick={() => onNavigate('contact')}
              className="bg-[#001a4d] text-white px-8 py-4 rounded-lg hover:bg-[#002d6d] transition font-semibold text-lg"
            >
              Falar com a Exata
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
