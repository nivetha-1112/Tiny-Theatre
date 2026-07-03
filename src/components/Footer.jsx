import React from 'react';
import { Ticket, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const target = document.querySelector(id);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  const socials = [
    {
      name: 'Facebook',
      href: '#',
      svg: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      )
    },
    {
      name: 'Instagram',
      href: '#',
      svg: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      )
    },
    {
      name: 'Twitter',
      href: '#',
      svg: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
      )
    },
    {
      name: 'Youtube',
      href: '#',
      svg: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
          <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
        </svg>
      )
    }
  ];

  return (
    <footer className="bg-theatre-green-deep border-t border-theatre-green/10 pt-20 pb-8 text-gray-400 font-sans relative overflow-hidden">
      {/* Decorative spotlights or flares */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-theatre-green/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/5">
          
          {/* Col 1: Brand Info (Col 1-3) */}
          <div className="lg:col-span-3 space-y-6">
            <a href="#home" onClick={(e) => scrollToSection(e, '#home')} className="flex items-center space-x-2 group">
              <div className="p-2 bg-theatre-green/20 rounded-lg group-hover:bg-theatre-green/30 transition-all duration-300 border border-theatre-green/30">
                <Ticket className="w-5 h-5 text-theatre-gold" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-wide text-white">
                Tiny<span className="text-theatre-gold font-normal italic">Theatre</span>
              </span>
            </a>
            <p className="text-sm text-gray-400 leading-relaxed font-light">
              Providing premium, luxurious private movie theatre screening halls and bespoke milestone celebration services.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-3">
              {socials.map((social, i) => {
                return (
                  <a
                    key={i}
                    href={social.href}
                    title={social.name}
                    className="p-2.5 bg-white/5 hover:bg-theatre-gold text-gray-400 hover:text-theatre-green-deep rounded-xl border border-white/5 hover:scale-110 transition-all duration-300 flex items-center justify-center"
                  >
                    {social.svg}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Col 2: Quick Links (Col 5-7) */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-white font-serif text-base font-bold tracking-wide">Quick Links</h4>
            <ul className="space-y-3.5 text-sm font-light">
              {[
                { name: 'Home', href: '#home' },
                { name: 'About Us', href: '#about' },
                { name: 'Why Choose Us', href: '#why-choose-us' },
                { name: 'Booking Process', href: '#booking-process' },
                { name: 'Booking Packages', href: '#events' },
                { name: 'Photo Gallery', href: '#gallery' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="hover:text-theatre-gold transition-colors duration-300 flex items-center space-x-1"
                  >
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact Info (Col 8-10) */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-white font-serif text-base font-bold tracking-wide">Box Office Info</h4>
            <ul className="space-y-4 text-sm font-light">
              <li className="flex items-start space-x-3">
                <MapPin className="w-4.5 h-4.5 text-theatre-gold mt-0.5 flex-shrink-0" />
                <span>124 Curtain Street, Theatre District, NY 10001</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4.5 h-4.5 text-theatre-gold flex-shrink-0" />
                <span>+1 (212) 555-0199</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4.5 h-4.5 text-theatre-gold flex-shrink-0" />
                <a href="mailto:bookings@tinytheatre.com" className="hover:text-theatre-gold transition-colors duration-300">
                  bookings@tinytheatre.com
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter signup (Col 10-12) */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-white font-serif text-base font-bold tracking-wide">Newsletter</h4>
            <p className="text-xs text-gray-400 leading-relaxed font-light">
              Subscribe to receive exclusive booking specials and member discount codes.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="relative">
              <input
                type="email"
                placeholder="Your email"
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-5 pr-14 text-sm text-white placeholder:text-gray-600 focus:border-theatre-gold outline-none"
              />
              <button
                type="submit"
                className="absolute right-1 top-1 bottom-1 px-4 bg-theatre-gold hover:bg-theatre-gold-light text-theatre-green-deep rounded-lg flex items-center justify-center transition-all duration-300"
              >
                <ArrowRight className="w-4.5 h-4.5" />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom copyright bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 text-xs font-light text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} Tiny Theatre Inc. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-theatre-gold transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-theatre-gold transition-colors duration-300">Terms of Service</a>
            <a href="#" className="hover:text-theatre-gold transition-colors duration-300">Sitemap</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
