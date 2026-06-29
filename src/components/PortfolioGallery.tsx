import React, { useState, useEffect } from 'react';
import { siteContent } from '../lib/siteContent';

const PortfolioGallery: React.FC = () => {
  const { portfolio } = siteContent;
  const [activeCategory, setActiveCategory] = useState('all');
  const [isVisible, setIsVisible] = useState(false);

  const filteredGalleries =
    activeCategory === 'all'
      ? portfolio.galleries
      : portfolio.galleries.filter((item) => item.category === activeCategory);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('portfolio');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-['Cormorant_Garamond'] text-5xl md:text-6xl font-semibold text-primary mb-4">
            {portfolio.headline}
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            {portfolio.subtext}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          {portfolio.categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                activeCategory === category.id
                  ? 'bg-accent text-white shadow-md'
                  : 'bg-white text-primary border border-border hover:border-accent'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid - Masonry Layout */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
          {filteredGalleries.map((item, index) => (
            <div
              key={item.id}
              className={`break-inside-avoid mb-6 group cursor-pointer ${
                isVisible ? 'animate-fade-up' : 'opacity-0'
              }`}
              style={{
                animationDelay: `${index * 80}ms`,
              }}
            >
              <div className="relative overflow-hidden rounded-xl shadow-sm hover:shadow-xl transition-all duration-500">
                <div
                  className="relative overflow-hidden"
                  style={{ aspectRatio: item.aspectRatio }}
                >
                  <img
                    src={item.image}
                    alt={`${item.title} - ${item.date}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-white/80">{item.date}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioGallery;
