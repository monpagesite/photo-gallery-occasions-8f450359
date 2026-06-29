import React, { useEffect, useRef } from 'react';
import { siteContent } from '../lib/siteContent';

const HeroSection: React.FC = () => {
  const { hero } = siteContent;
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const scrolled = window.pageYOffset;
        const parallaxSpeed = 0.2;
        imageRef.current.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen bg-white pt-20 overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-surface/30 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32">
        <div className="grid md:grid-cols-[55fr_45fr] gap-12 md:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Badge */}
            <div className="inline-block">
              <span className="text-sm tracking-wide uppercase text-accent font-medium">
                {hero.badge}
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-['Cormorant_Garamond'] text-6xl md:text-7xl lg:text-8xl font-semibold text-primary leading-[0.95] tracking-tight">
              {hero.headline}
            </h1>

            {/* Subtext */}
            <p className="text-lg md:text-xl text-text-muted max-w-xl leading-relaxed">
              {hero.subtext}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="#portfolio"
                onClick={(e) => scrollToSection(e, '#portfolio')}
                className="inline-flex items-center justify-center bg-accent text-white px-8 py-4 rounded-full font-medium hover:bg-accent-hover transition-all shadow-md hover:shadow-lg hover:scale-[1.02] duration-200"
              >
                {hero.ctaPrimary}
              </a>
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="inline-flex items-center justify-center border-2 border-primary text-primary px-8 py-4 rounded-full font-medium hover:bg-primary hover:text-white transition-all duration-200"
              >
                {hero.ctaSecondary}
              </a>
            </div>
          </div>

          {/* Right Column - Featured Image */}
          <div
            ref={imageRef}
            className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl transition-all duration-700 animate-fade-in-delay"
          >
            <img
              src={hero.heroImage}
              alt="Award-winning wedding and event photography"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
