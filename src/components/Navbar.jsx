import React, { useState, useEffect } from 'react';
import { Menu, X, Ticket } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { name: 'Home', href: '#home', path: '/' },
    { name: 'About Us', href: '#about', path: '/about' },
    { name: 'Why Choose Us', href: '#why-choose-us', path: '/why-choose-us' },
    { name: 'Booking Process', href: '#booking-process', path: '/booking-process' },
     { name: 'Gallery', href: '#gallery', path: '/gallery' },
    { name: 'Terms & Conditions', href: '#terms-and-conditions', path: '/terms-and-conditions' },
    { name: 'Contact Us', href: '#book-now', path: '/contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, path) => {
    e.preventDefault();
    setIsOpen(false);
    navigate(path);
  };

  const handleBookNowClick = (e) => {
    e.preventDefault();
    setIsOpen(false);
    navigate('/contact');
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-dark py-3 shadow-lg shadow-theatre-grey-deep/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '/')}
            className="flex items-center space-x-1.5 sm:space-x-2 group cursor-pointer"
          >
            <div className="p-1.5 sm:p-2 bg-theatre-grey/20 rounded-lg group-hover:bg-theatre-grey/30 transition-all duration-300 border border-theatre-grey/30">
              <Ticket className="w-5 h-5 sm:w-6 sm:h-6 text-theatre-gold animate-pulse" />
            </div>
            <div>
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-wide text-white group-hover:text-theatre-gold transition-colors duration-300">
                The Tiny<span className="text-theatre-gold font-normal italic">Theatre</span>
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-6">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.path)}
                  className={`text-sm font-medium tracking-wide transition-all duration-300 hover:text-theatre-gold relative py-1 ${
                    isActive
                      ? 'text-theatre-gold font-semibold'
                      : 'text-gray-300'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-theatre-gold rounded-full" />
                  )}
                </a>
              );
            })}
            <a
              href="/contact"
              onClick={handleBookNowClick}
              className="bg-theatre-gold hover:bg-theatre-gold-light text-theatre-grey-deep px-5 py-2.5 rounded-full font-semibold text-sm shadow-md hover:shadow-lg shadow-theatre-gold/20 hover:shadow-theatre-gold/30 hover:scale-105 transition-all duration-300 border border-theatre-gold/10"
            >
              Book Now
            </a>
          </div>

          {/* Mobile hamburger menu */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-400 hover:text-white hover:bg-theatre-grey/20 transition-all duration-300"
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
        className={`lg:hidden absolute top-full left-0 w-full glass-dark transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.path)}
                className={`block px-3 py-2.5 rounded-lg text-base font-medium transition-all duration-300 ${
                  isActive
                    ? 'bg-theatre-grey/20 text-theatre-gold border-l-4 border-theatre-gold'
                    : 'text-gray-300 hover:bg-theatre-grey/10 hover:text-white'
                }`}
              >
                {item.name}
              </a>
            );
          })}
          <div className="pt-4 px-3">
            <a
              href="#book-now"
              onClick={handleBookNowClick}
              className="block w-full text-center bg-theatre-gold hover:bg-theatre-gold-light text-theatre-grey-deep px-5 py-3 rounded-full font-semibold shadow-md hover:shadow-lg shadow-theatre-gold/20 transition-all duration-300"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
