import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react';
import { blogPosts } from '../data/blog';

interface ArticleProps {
  articleSlug: string;
  onNavigate: (page: string) => void;
}

export default function Article({ articleSlug, onNavigate }: ArticleProps) {
  const article = blogPosts.find(post => post.slug === articleSlug);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Artigo não encontrado</h1>
          <button
            onClick={() => onNavigate('blog')}
            className="text-[#001a4d] hover:underline"
          >
            Voltar para o Blog
          </button>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
  };

  const handleShare = () => {
    const url = window.location.href;
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.excerpt,
        url: url
      });
    } else {
      navigator.clipboard.writeText(url);
      alert('Link copiado para a área de transferência!');
    }
  };

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-[#001a4d] via-[#002d6d] to-[#001a4d] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => onNavigate('blog')}
            className="flex items-center text-gray-200 hover:text-white mb-8 transition"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Voltar para o Blog
          </button>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-gray-200">
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              <span>{formatDate(article.date)}</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              <span>5 min de leitura</span>
            </div>
            <button
              onClick={handleShare}
              className="flex items-center hover:text-white transition"
            >
              <Share2 className="w-5 h-5 mr-2" />
              <span>Compartilhar</span>
            </button>
          </div>
        </div>
      </section>

      <article className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 border-l-4 border-[#001a4d] p-6 mb-8 rounded">
            <p className="text-lg text-gray-700 leading-relaxed italic">
              {article.excerpt}
            </p>
          </div>

          <div
            className="prose prose-lg max-w-none
              prose-headings:text-[#001a4d] prose-headings:font-bold
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
              prose-h4:text-xl prose-h4:mt-6 prose-h4:mb-3
              prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
              prose-strong:text-[#001a4d]
              prose-ul:my-6 prose-ul:space-y-2
              prose-li:text-gray-700
              prose-a:text-[#001a4d] prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>
      </article>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#001a4d] to-[#002d6d] rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Precisa de Ajuda com Contabilidade?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Nossa equipe de especialistas está pronta para ajudar sua empresa a crescer com segurança e eficiência.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5544999264057?text=Olá!%20Li%20um%20artigo%20no%20blog%20e%20gostaria%20de%20saber%20mais."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition font-semibold text-lg"
              >
                Falar com um Contador
              </a>
              <button
                onClick={() => onNavigate('services')}
                className="bg-white text-[#001a4d] px-8 py-4 rounded-lg hover:bg-gray-100 transition font-semibold text-lg"
              >
                Ver Nossos Serviços
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#001a4d] mb-8 text-center">
            Leia Também
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts
              .filter(post => post.slug !== articleSlug)
              .slice(0, 3)
              .map((post) => (
                <div
                  key={post.id}
                  className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition cursor-pointer"
                  onClick={() => onNavigate('article', post.slug)}
                >
                  <div className="bg-gradient-to-br from-[#001a4d] to-[#002d6d] h-32 flex items-center justify-center p-4">
                    <h3 className="text-white font-bold text-center line-clamp-2">
                      {post.title}
                    </h3>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <button className="text-[#001a4d] font-semibold text-sm hover:underline">
                      Ler artigo →
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
