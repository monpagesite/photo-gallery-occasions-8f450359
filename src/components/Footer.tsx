import React from 'react';
import { Instagram, Facebook } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

const Footer: React.FC = () => {
  const { footer } = siteContent;

  return (
    <footer className="bg-primary text-white py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-[1fr_auto_auto] gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="font-['Cormorant_Garamond'] text-3xl font-semibold">
              Photo Occasions
            </h3>
            <p className="text-white/70 max-w-md">{footer.tagline}</p>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wide mb-4">
              Follow Along
            </h4>
            <div className="space-y-3">
              {footer.social.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/70 hover:text-accent transition-colors"
                >
                  {social.platform === 'Instagram' && <Instagram className="w-5 h-5" />}
                  {social.platform === 'Facebook' && <Facebook className="w-5 h-5" />}
                  {social.platform === 'Pinterest' && (
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                    </svg>
                  )}
                  <span className="text-sm">{social.handle}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wide mb-4">
              Legal
            </h4>
            <div className="space-y-3">
              {footer.legal.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  className="block text-white/70 hover:text-accent transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">{footer.copyright}</p>
          <p className="text-white/60 text-sm">
            Designed with care for every occasion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
