import { Building2, Calculator, FileText, Users } from 'lucide-react';
import { services } from '../data/services';

interface ServicesProps {
  onNavigate: (page: string, serviceId?: string) => void;
}

export default function Services({ onNavigate }: ServicesProps) {
  const iconMap: Record<string, any> = {
    Building2,
    Calculator,
    FileText,
    Users
  };

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-[#001a4d] via-[#002d6d] to-[#001a4d] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nossos Serviços
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Soluções contábeis completas para empresas de todos os portes e pessoas físicas, com qualidade, agilidade e atendimento personalizado.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon];
              const isEven = index % 2 === 0;

              return (
                <div
                  key={service.id}
                  className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } flex flex-col lg:flex`}
                >
                  <div className={`lg:w-1/3 bg-gradient-to-br from-[#001a4d] to-[#002d6d] p-8 flex flex-col justify-center items-center text-white`}>
                    <div className="bg-white/10 backdrop-blur-sm rounded-full w-24 h-24 flex items-center justify-center mb-6">
                      <Icon className="w-12 h-12" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
                      {service.title}
                    </h2>
                    <button
                      onClick={() => onNavigate('service-detail', service.id)}
                      className="bg-white text-[#001a4d] px-6 py-3 rounded-lg hover:bg-gray-100 transition font-semibold mt-4"
                    >
                      Ver Detalhes
                    </button>
                  </div>

                  <div className="lg:w-2/3 p-8">
                    <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <h3 className="text-xl font-bold text-[#001a4d] mb-4">
                      O que está incluído:
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start">
                          <div className="w-2 h-2 bg-[#001a4d] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <a
                        href="https://wa.me/5544999264057?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition font-semibold"
                      >
                        Solicitar Orçamento
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#001a4d] mb-6">
            Precisa de Uma Solução Personalizada?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Entre em contato conosco para discutir suas necessidades específicas e descobrir como podemos ajudar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5544999264057?text=Olá!%20Gostaria%20de%20falar%20com%20um%20contador%20agora."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition font-semibold text-lg"
            >
              Falar com um Contador Agora
            </a>
            <button
              onClick={() => onNavigate('contact')}
              className="bg-[#001a4d] text-white px-8 py-4 rounded-lg hover:bg-[#002d6d] transition font-semibold text-lg"
            >
              Enviar Mensagem
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
