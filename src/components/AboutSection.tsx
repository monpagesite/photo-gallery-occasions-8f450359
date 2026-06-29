import React, { useState, useEffect } from 'react';
import { siteContent } from '../lib/siteContent';

const AboutSection: React.FC = () => {
  const { about } = siteContent;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('about');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
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
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-[40fr_60fr] gap-12 md:gap-16 items-start">
          {/* Left Column - Portrait Image */}
          <div
            className={`relative ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
          >
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg md:sticky md:top-24">
              <img
                src={about.portraitImage}
                alt="Professional photographer portrait"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>

          {/* Right Column - Story */}
          <div
            className={`space-y-6 ${
              isVisible ? 'animate-fade-in-delay' : 'opacity-0'
            }`}
          >
            {/* Eyebrow */}
            <span className="text-sm tracking-wide uppercase text-accent font-medium">
              {about.eyebrow}
            </span>

            {/* Headline */}
            <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-semibold text-primary leading-tight">
              {about.headline}
            </h2>

            {/* Body Paragraphs */}
            {about.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-lg text-text-muted leading-relaxed max-w-2xl"
              >
                {paragraph}
              </p>
            ))}

            {/* CTA */}
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="inline-flex items-center text-accent font-medium hover:underline pt-4 group"
            >
              {about.cta}
              <span className="ml-2 transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
