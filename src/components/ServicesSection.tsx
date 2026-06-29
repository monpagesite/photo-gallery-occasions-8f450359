import React, { useState, useEffect } from 'react';
import { Check } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

const ServicesSection: React.FC = () => {
  const { services } = siteContent;
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
      { threshold: 0.1 }
    );

    const section = document.getElementById('services');
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
    <section id="services" className="py-20 md:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-['Cormorant_Garamond'] text-5xl md:text-6xl font-semibold text-primary mb-4">
            {services.headline}
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            {services.subtext}
          </p>
        </div>

        {/* Package Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.packages.map((pkg, index) => (
            <div
              key={pkg.id}
              className={`relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 ${
                pkg.highlighted
                  ? 'ring-2 ring-accent border-2 border-accent'
                  : 'border border-border'
              } ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              {/* Highlighted Badge */}
              {pkg.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-accent text-white text-sm font-medium px-4 py-1 rounded-full shadow-md">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Package Header */}
              <div className="mb-6 pb-6 border-b border-border">
                <h3 className="font-['Cormorant_Garamond'] text-3xl font-semibold text-primary mb-2">
                  {pkg.name}
                </h3>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-bold text-primary">
                    {pkg.price}
                  </span>
                  <span className="text-text-muted">/ {pkg.duration}</span>
                </div>
                <p className="text-text-muted">{pkg.description}</p>
              </div>

              {/* Features List */}
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check
                      className="w-5 h-5 text-accent flex-shrink-0 mt-0.5"
                      strokeWidth={2.5}
                    />
                    <span className="text-text-muted">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className={`block text-center w-full py-3 rounded-full font-medium transition-all duration-200 ${
                  pkg.highlighted
                    ? 'bg-accent text-white hover:bg-accent-hover shadow-md hover:shadow-lg'
                    : 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
                }`}
              >
                Book this package
              </a>
            </div>
          ))}
        </div>

        {/* Custom Package CTA */}
        <div className="mt-12 text-center">
          <p className="text-text-muted mb-4">
            Need something more tailored? Let's create a custom package.
          </p>
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, '#contact')}
            className="inline-flex items-center text-accent font-medium hover:underline"
          >
            Get a custom quote →
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
