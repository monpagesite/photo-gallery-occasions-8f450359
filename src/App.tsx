import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import languages from './i18n/languages';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PortfolioGallery from './components/PortfolioGallery';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const lang = languages.find((l) => l.code === i18n.language);
    document.documentElement.dir = lang?.dir ?? 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <PortfolioGallery />
        <AboutSection />
        <ServicesSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
