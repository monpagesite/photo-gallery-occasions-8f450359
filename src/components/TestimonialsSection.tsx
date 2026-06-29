import React, { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

const TestimonialsSection: React.FC = () => {
  const { testimonials } = siteContent;
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

    const section = document.getElementById('testimonials');
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
    <section id="testimonials" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-['Cormorant_Garamond'] text-5xl md:text-6xl font-semibold text-primary mb-4">
            {testimonials.headline}
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            {testimonials.subtext}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.quotes.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`bg-surface rounded-2xl p-8 border border-border hover:border-accent transition-all duration-300 hover:shadow-lg ${
                isVisible ? 'animate-fade-up' : 'opacity-0'
              }`}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="w-10 h-10 text-accent" strokeWidth={1.5} />
              </div>

              {/* Testimonial Text */}
              <p className="text-text-muted leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-border">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-primary">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-text-muted">
                    {testimonial.occasion}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
