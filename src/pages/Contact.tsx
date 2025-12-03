import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Instagram, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const whatsappMessage = `*Nova mensagem do site EXATA*%0A%0A*Nome:* ${formData.name}%0A*Email:* ${formData.email}%0A*Telefone:* ${formData.phone}%0A*Assunto:* ${formData.subject}%0A*Mensagem:* ${formData.message}`;

    window.open(
      `https://wa.me/5544999264057?text=${whatsappMessage}`,
      '_blank'
    );

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-[#001a4d] via-[#002d6d] to-[#001a4d] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Entre em Contato
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Estamos prontos para atender você. Entre em contato conosco e descubra como podemos ajudar sua empresa.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[#001a4d] mb-8">
                Envie sua Mensagem
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#001a4d] focus:border-transparent outline-none transition"
                    placeholder="Seu nome"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#001a4d] focus:border-transparent outline-none transition"
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#001a4d] focus:border-transparent outline-none transition"
                      placeholder="(44) 99999-9999"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Assunto *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#001a4d] focus:border-transparent outline-none transition"
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="Abertura de Empresa">Abertura de Empresa</option>
                    <option value="Planejamento Tributário">Planejamento Tributário</option>
                    <option value="Contabilidade Geral">Contabilidade Geral</option>
                    <option value="Departamento Pessoal">Departamento Pessoal</option>
                    <option value="Orçamento">Solicitar Orçamento</option>
                    <option value="Outros">Outros</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#001a4d] focus:border-transparent outline-none transition resize-none"
                    placeholder="Descreva suas necessidades..."
                  />
                </div>

                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                    Abrindo WhatsApp para enviar sua mensagem...
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition font-semibold text-lg flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-5 h-5 mr-2" />
                  {isSubmitting ? 'Enviando...' : 'Enviar via WhatsApp'}
                </button>
              </form>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#001a4d] mb-8">
                Informações de Contato
              </h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-[#001a4d] text-white w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#001a4d] mb-2">Telefones</h3>
                    <a href="tel:+5544999264057" className="text-gray-700 hover:text-[#001a4d] block transition">
                      (44) 99926-4057
                    </a>
                    <a href="tel:+5544988157018" className="text-gray-700 hover:text-[#001a4d] block transition">
                      (44) 98815-7018
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#001a4d] text-white w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#001a4d] mb-2">E-mail</h3>
                    <a
                      href="mailto:exata@exatacontabilidademga.com.br"
                      className="text-gray-700 hover:text-[#001a4d] transition break-all"
                    >
                      exata@exatacontabilidademga.com.br
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#001a4d] text-white w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#001a4d] mb-2">Endereço</h3>
                    <p className="text-gray-700">
                      Avenida Tuiuti, 2412<br />
                      Sobre Loja, Sala 17<br />
                      Jardim Pinheiros<br />
                      CEP 87043-629<br />
                      Maringá - Paraná
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#001a4d] text-white w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#001a4d] mb-2">Horário de Atendimento</h3>
                    <p className="text-gray-700">
                      Segunda a Sexta<br />
                      08:00 - 18:00
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#001a4d] text-white w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Instagram className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#001a4d] mb-2">Instagram</h3>
                    <a
                      href="https://www.instagram.com/exata.assessoria.contabil_/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-[#001a4d] transition"
                    >
                      @exata.assessoria.contabil_
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#001a4d] to-[#002d6d] rounded-lg p-6 text-white">
                <h3 className="text-xl font-bold mb-4">Atendimento Imediato</h3>
                <p className="mb-4">
                  Precisa de atendimento urgente? Entre em contato pelo WhatsApp e receba resposta em minutos.
                </p>
                <a
                  href="https://wa.me/5544999264057?text=Olá!%20Gostaria%20de%20falar%20com%20um%20contador%20da%20EXATA."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition font-semibold inline-block"
                >
                  Chamar no WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-0 bg-gray-50">
        <div className="w-full h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3660.0245988394847!2d-51.95159!3d-23.430542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ecd0e7d0e0d0e7%3A0x0!2sAv.%20Tuiuti%2C%202412%20-%20Jardim%20Pinheiros%2C%20Maring%C3%A1%20-%20PR%2C%2087043-629!5e0!3m2!1spt-BR!2sbr!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização EXATA Assessoria Contábil"
          />
        </div>
      </section>
    </div>
  );
}
