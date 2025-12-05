import { useEffect } from 'react';
import { Building2, Calculator, FileText, Users, TrendingUp, Shield, Clock, Award } from 'lucide-react';
import { services } from '../data/services';
import L from 'leaflet';

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

  // 🔹 Inicializar o mapa corretamente no React
  useEffect(() => {
    const map = L.map('map').setView(
      [-23.408143553935233, -51.899813003429415],
      13
    );

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);

    L.marker([-23.408143553935233, -51.899813003429415])
      .addTo(map)
      .bindPopup('Localização Definida')
      .openPopup();

    // cleanup quando o componente desmontar
    return () => {
      map.remove();
    };
  }, []);

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-[#001a4d] via-[#002d6d] to-[#001a4d] text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
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
