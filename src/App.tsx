import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Blog from './pages/Blog';
import Article from './pages/Article';
import Contact from './pages/Contact';

type Page = 'home' | 'about' | 'services' | 'service-detail' | 'blog' | 'article' | 'contact';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<string>('');
  const [selectedArticleSlug, setSelectedArticleSlug] = useState<string>('');

  useEffect(() => {
    document.title = getPageTitle();
  }, [currentPage]);

  const getPageTitle = () => {
    const titles: Record<Page, string> = {
      home: 'EXATA Assessoria Contábil - Contabilidade em Maringá',
      about: 'Quem Somos - EXATA Assessoria Contábil',
      services: 'Serviços - EXATA Assessoria Contábil',
      'service-detail': 'Serviços - EXATA Assessoria Contábil',
      blog: 'Blog - EXATA Assessoria Contábil',
      article: 'Blog - EXATA Assessoria Contábil',
      contact: 'Contato - EXATA Assessoria Contábil'
    };
    return titles[currentPage];
  };

  const handleNavigate = (page: string, param?: string) => {
    setCurrentPage(page as Page);

    if (page === 'service-detail' && param) {
      setSelectedServiceId(param);
    }

    if (page === 'article' && param) {
      setSelectedArticleSlug(param);
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'about':
        return <About onNavigate={handleNavigate} />;
      case 'services':
        return <Services onNavigate={handleNavigate} />;
      case 'service-detail':
        return <ServiceDetail serviceId={selectedServiceId} onNavigate={handleNavigate} />;
      case 'blog':
        return <Blog onNavigate={handleNavigate} />;
      case 'article':
        return <Article articleSlug={selectedArticleSlug} onNavigate={handleNavigate} />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer onNavigate={handleNavigate} />
      <WhatsAppButton />
    </div>
  );
}

export default App;
