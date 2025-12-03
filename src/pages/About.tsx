import { Target, Heart, Shield, TrendingUp, Users, Award } from 'lucide-react';

interface AboutProps {
  onNavigate: (page: string) => void;
}

export default function About({ onNavigate }: AboutProps) {
  const values = [
    {
      icon: Shield,
      title: 'Ética',
      description: 'Agimos com transparência e honestidade em todas as nossas relações profissionais.'
    },
    {
      icon: Award,
      title: 'Integridade',
      description: 'Mantemos o compromisso inabalável com a verdade e a precisão em cada serviço.'
    },
    {
      icon: Heart,
      title: 'Responsabilidade',
      description: 'Assumimos total comprometimento com os resultados e prazos acordados.'
    },
    {
      icon: Target,
      title: 'Precisão',
      description: 'Cuidado meticuloso com cada detalhe para garantir resultados impecáveis.'
    },
    {
      icon: TrendingUp,
      title: 'Agilidade',
      description: 'Respostas rápidas e eficientes para atender suas necessidades com urgência.'
    },
    {
      icon: Users,
      title: 'Atendimento Humanizado',
      description: 'Tratamos cada cliente com respeito, atenção e dedicação personalizada.'
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-[#001a4d] via-[#002d6d] to-[#001a4d] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Quem Somos
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Uma trajetória marcada por compromisso, transparência e dedicação ao crescimento dos nossos clientes.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#001a4d] mb-6">
                Nossa História
              </h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  A <strong className="text-[#001a4d]">EXATA Assessoria Contábil LTDA</strong> é um escritório contábil que oferece soluções tributárias e financeiras completas para empresas e pessoas físicas em Maringá e região.
                </p>
                <p>
                  Nossa trajetória é marcada pelo <strong className="text-[#001a4d]">compromisso, transparência e dedicação</strong>, refletidos no crescente número de clientes satisfeitos que confiam em nosso trabalho.
                </p>
                <p>
                  Atendemos com <strong className="text-[#001a4d]">clareza, objetividade e responsabilidade</strong>, ajudando nossos clientes a tomarem decisões seguras e estruturarem um crescimento sustentável.
                </p>
                <p>
                  Trabalhamos lado a lado com cada cliente para garantir <strong className="text-[#001a4d]">controle financeiro, cumprimento de obrigações e apoio estratégico</strong> em todas as etapas do desenvolvimento empresarial.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#001a4d] to-[#002d6d] rounded-lg p-8 text-white">
              <div className="flex items-center mb-6">
                <Target className="w-12 h-12 mr-4" />
                <h3 className="text-2xl font-bold">Nossa Missão</h3>
              </div>
              <p className="text-xl leading-relaxed">
                Ser o <strong>parceiro estratégico</strong> que impulsiona o crescimento sustentável dos nossos clientes através de <strong>soluções contábeis eficientes e transparentes</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#001a4d] mb-4">
              Nossos Valores
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Princípios que guiam cada decisão e orientam nosso relacionamento com clientes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-all"
                >
                  <div className="bg-[#001a4d] text-white w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-[#001a4d] mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#001a4d] to-[#002d6d] rounded-2xl p-8 md:p-12 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Responsáveis Técnicos
                </h2>
                <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                  Nossa equipe é formada por contadores experientes e altamente qualificados, prontos para oferecer o melhor atendimento e as soluções mais adequadas para seu negócio.
                </p>
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                    <h3 className="text-2xl font-bold mb-2">Alexandre Oliveira</h3>
                    <p className="text-gray-200 text-lg">Contador</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                    <h3 className="text-2xl font-bold mb-2">Tiago Nery</h3>
                    <p className="text-gray-200 text-lg">Contador</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2">15+</div>
                  <div className="text-gray-200">Anos de Experiência</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2">500+</div>
                  <div className="text-gray-200">Clientes Atendidos</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2">100%</div>
                  <div className="text-gray-200">Conformidade Legal</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2">24h</div>
                  <div className="text-gray-200">Resposta Média</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#001a4d] mb-6">
            Quer Conhecer Melhor Nossos Serviços?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Descubra como podemos ajudar sua empresa a crescer com segurança, eficiência e total conformidade legal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('services')}
              className="bg-[#001a4d] text-white px-8 py-4 rounded-lg hover:bg-[#002d6d] transition font-semibold text-lg"
            >
              Ver Nossos Serviços
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="bg-white text-[#001a4d] border-2 border-[#001a4d] px-8 py-4 rounded-lg hover:bg-gray-50 transition font-semibold text-lg"
            >
              Entrar em Contato
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
