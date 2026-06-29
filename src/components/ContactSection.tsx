import React, { useState, useEffect } from 'react';
import { Send, MessageCircle, Mail, MapPin, Clock } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

const ContactSection: React.FC = () => {
  const { contact } = siteContent;
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    occasion: '',
    date: '',
    message: '',
  });

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

    const section = document.getElementById('contact');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission would be handled here
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! I\'ll get back to you within 24 hours.');
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-['Cormorant_Garamond'] text-5xl md:text-6xl font-semibold text-primary mb-4">
            {contact.headline}
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            {contact.subtext}
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_400px] gap-12">
          {/* Contact Form */}
          <div
            className={`${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-8 shadow-sm border border-border"
            >
              <div className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                    Your name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={contact.form.namePlaceholder}
                    className="w-full px-4 py-3 rounded-lg border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                    Email address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={contact.form.emailPlaceholder}
                    className="w-full px-4 py-3 rounded-lg border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-primary mb-2">
                    Phone number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={contact.form.phonePlaceholder}
                    className="w-full px-4 py-3 rounded-lg border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                  />
                </div>

                {/* Occasion Type */}
                <div>
                  <label htmlFor="occasion" className="block text-sm font-medium text-primary mb-2">
                    {contact.form.occasionLabel} *
                  </label>
                  <select
                    id="occasion"
                    name="occasion"
                    required
                    value={formData.occasion}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all bg-white"
                  >
                    <option value="">Select an occasion</option>
                    {contact.form.occasionOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Event Date */}
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-primary mb-2">
                    Event date (if known)
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                    Tell me about your event *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={contact.form.messagePlaceholder}
                    className="w-full px-4 py-3 rounded-lg border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-accent text-white px-8 py-4 rounded-full font-medium hover:bg-accent-hover transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 group"
                >
                  {contact.form.submitButton}
                  <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info Sidebar */}
          <div
            className={`space-y-8 ${
              isVisible ? 'animate-fade-in-delay' : 'opacity-0'
            }`}
          >
            {/* WhatsApp CTA */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-border">
              <MessageCircle className="w-10 h-10 text-accent mb-4" />
              <h3 className="font-['Cormorant_Garamond'] text-2xl font-semibold text-primary mb-2">
                {contact.whatsapp.text}
              </h3>
              <p className="text-text-muted mb-4">
                Get a quick response via WhatsApp
              </p>
              <a
                href={`https://wa.me/${contact.whatsapp.number.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full bg-[#25D366] text-white px-6 py-3 rounded-full font-medium hover:bg-[#20BA5A] transition-all shadow-md hover:shadow-lg"
              >
                {contact.whatsapp.cta}
              </a>
            </div>

            {/* Contact Details */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-border space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-primary mb-1">Email</p>
                  <a
                    href={`mailto:${contact.info.email}`}
                    className="text-text-muted hover:text-accent transition-colors"
                  >
                    {contact.info.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-primary mb-1">Location</p>
                  <p className="text-text-muted">{contact.info.location}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-primary mb-1">Hours</p>
                  <p className="text-text-muted">{contact.info.hours}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
