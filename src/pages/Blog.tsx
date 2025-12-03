import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/blog';

interface BlogProps {
  onNavigate: (page: string, articleSlug?: string) => void;
}

export default function Blog({ onNavigate }: BlogProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-[#001a4d] via-[#002d6d] to-[#001a4d] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Blog EXATA
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Artigos, dicas e insights sobre contabilidade, gestão financeira e tributação para ajudar seu negócio a crescer.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all cursor-pointer group"
                onClick={() => onNavigate('article', post.slug)}
              >
                <div className="bg-gradient-to-br from-[#001a4d] to-[#002d6d] h-48 flex items-center justify-center">
                  <div className="text-white text-center p-6">
                    <h2 className="text-2xl font-bold line-clamp-3">
                      {post.title}
                    </h2>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{formatDate(post.date)}</span>
                    <Clock className="w-4 h-4 ml-4 mr-2" />
                    <span>5 min</span>
                  </div>

                  <p className="text-gray-700 mb-4 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <button className="flex items-center text-[#001a4d] font-semibold hover:underline group-hover:translate-x-2 transition-transform">
                    Ler artigo completo
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#001a4d] mb-6">
            Precisa de Ajuda Especializada?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Nossa equipe está pronta para auxiliar sua empresa com soluções contábeis personalizadas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5544999264057?text=Olá!%20Gostaria%20de%20falar%20com%20um%20contador."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition font-semibold text-lg"
            >
              Falar com um Contador
            </a>
            <button
              onClick={() => onNavigate('services')}
              className="bg-[#001a4d] text-white px-8 py-4 rounded-lg hover:bg-[#002d6d] transition font-semibold text-lg"
            >
              Conheça Nossos Serviços
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
