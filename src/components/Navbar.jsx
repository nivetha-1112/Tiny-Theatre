import React, { useState, useEffect } from 'react';
import { Menu, X, Ticket } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Why Choose Us', href: '#why-choose-us' },
    { name: 'Booking Process', href: '#booking-process' },
    { name: 'Events', href: '#events' },
    { name: 'Gallery', href: '#gallery' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active link highlight mechanism
      const scrollPosition = window.scrollY + 100;
      for (const item of menuItems) {
        const el = document.querySelector(item.href);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.href.slice(1));
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth',
      });
      setActiveSection(href.slice(1));
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-dark py-3 shadow-lg shadow-theatre-green-deep/20 border-b border-theatre-green/10'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center space-x-2 group cursor-pointer"
          >
            <div className="p-2 bg-theatre-green/20 rounded-lg group-hover:bg-theatre-green/30 transition-all duration-300 border border-theatre-green/30">
              <Ticket className="w-6 h-6 text-theatre-gold animate-pulse" />
            </div>
            <div>
              <span className="font-serif text-2xl font-bold tracking-wide text-white group-hover:text-theatre-gold transition-colors duration-300">
                Tiny<span className="text-theatre-gold font-normal italic">Theatre</span>
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-sm font-medium tracking-wide transition-all duration-300 hover:text-theatre-gold relative py-1 ${
                  activeSection === item.href.slice(1)
                    ? 'text-theatre-gold font-semibold'
                    : 'text-gray-300'
                }`}
              >
                {item.name}
                {activeSection === item.href.slice(1) && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-theatre-gold rounded-full" />
                )}
              </a>
            ))}
            <a
              href="#book-now"
              onClick={(e) => handleNavClick(e, '#book-now')}
              className="bg-theatre-gold hover:bg-theatre-gold-light text-theatre-green-deep px-5 py-2.5 rounded-full font-semibold text-sm shadow-md hover:shadow-lg shadow-theatre-gold/20 hover:shadow-theatre-gold/30 hover:scale-105 transition-all duration-300 border border-theatre-gold/10"
            >
              Book Now
            </a>
          </div>

          {/* Mobile hamburger menu */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-400 hover:text-white hover:bg-theatre-green/20 transition-all duration-300"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden absolute top-full left-0 w-full glass-dark border-b border-theatre-green/10 transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`block px-3 py-2.5 rounded-lg text-base font-medium transition-all duration-300 ${
                activeSection === item.href.slice(1)
                  ? 'bg-theatre-green/20 text-theatre-gold border-l-4 border-theatre-gold'
                  : 'text-gray-300 hover:bg-theatre-green/10 hover:text-white'
              }`}
            >
              {item.name}
            </a>
          ))}
          <div className="pt-4 px-3">
            <a
              href="#book-now"
              onClick={(e) => handleNavClick(e, '#book-now')}
              className="block w-full text-center bg-theatre-gold hover:bg-theatre-gold-light text-theatre-green-deep px-5 py-3 rounded-full font-semibold shadow-md hover:shadow-lg shadow-theatre-gold/20 transition-all duration-300"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
