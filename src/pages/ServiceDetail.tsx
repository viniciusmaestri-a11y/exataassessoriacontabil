import { Building2, Calculator, FileText, Users, CheckCircle, ArrowLeft } from 'lucide-react';
import { services } from '../data/services';

interface ServiceDetailProps {
  serviceId: string;
  onNavigate: (page: string) => void;
}

export default function ServiceDetail({ serviceId, onNavigate }: ServiceDetailProps) {
  const service = services.find(s => s.id === serviceId);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Serviço não encontrado</h1>
          <button
            onClick={() => onNavigate('services')}
            className="text-[#001a4d] hover:underline"
          >
            Voltar para Serviços
          </button>
        </div>
      </div>
    );
  }

  const iconMap: Record<string, any> = {
    Building2,
    Calculator,
    FileText,
    Users
  };

  const Icon = iconMap[service.icon];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-[#001a4d] via-[#002d6d] to-[#001a4d] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => onNavigate('services')}
            className="flex items-center text-gray-200 hover:text-white mb-8 transition"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Voltar para Serviços
          </button>
          <div className="flex items-center mb-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-full w-20 h-20 flex items-center justify-center mr-6">
              <Icon className="w-10 h-10" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">
              {service.title}
            </h1>
          </div>
          <p className="text-xl text-gray-200 leading-relaxed max-w-3xl">
            {service.description}
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#001a4d] mb-8">
            Serviços Incluídos
          </h2>

          <div className="space-y-4">
            {service.features.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-start p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
              >
                <CheckCircle className="w-6 h-6 text-green-600 mr-4 flex-shrink-0 mt-1" />
                <span className="text-lg text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#001a4d] to-[#002d6d] rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Interessado Neste Serviço?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Entre em contato conosco para saber mais detalhes, tirar dúvidas e solicitar um orçamento personalizado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5544999264057?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20serviço%20de%20contabilidade."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition font-semibold text-lg"
              >
                WhatsApp - Atendimento Imediato
              </a>
              <button
                onClick={() => onNavigate('contact')}
                className="bg-white text-[#001a4d] px-8 py-4 rounded-lg hover:bg-gray-100 transition font-semibold text-lg"
              >
                Enviar Mensagem
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#001a4d] mb-8 text-center">
            Outros Serviços
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services
              .filter(s => s.id !== serviceId)
              .slice(0, 3)
              .map((otherService) => {
                const OtherIcon = iconMap[otherService.icon];
                return (
                  <div
                    key={otherService.id}
                    className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition cursor-pointer"
                    onClick={() => onNavigate('service-detail', otherService.id)}
                  >
                    <div className="bg-[#001a4d] text-white w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                      <OtherIcon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-[#001a4d] mb-2">
                      {otherService.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">
                      {otherService.description}
                    </p>
                    <button className="text-[#001a4d] font-semibold text-sm hover:underline">
                      Saiba mais →
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </div>
  );
}
