import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, Ticket } from 'lucide-react';
import bannerImg from '../assets/banner.jpg';

export default function Hero() {
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

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Theatre Image & Overlays */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 transform transition-transform duration-10000"
        style={{ 
          backgroundImage: `url(${bannerImg})`,
        }}
      />
      {/* Dark gradient mask to isolate details & volumetric lighting */}
      <div className="absolute inset-0 bg-gradient-to-t from-theatre-dark via-theatre-dark/75 to-transparent z-10" />
      <div className="absolute inset-0 bg-radial-gradient-hero z-10 opacity-60 pointer-events-none" />

      {/* Interactive stage spotlights */}
      <div className="absolute top-0 left-1/4 w-[30vw] h-[80vh] bg-gradient-to-b from-theatre-gold/15 to-transparent transform -rotate-12 blur-3xl pointer-events-none z-10" />
      <div className="absolute top-0 right-1/4 w-[30vw] h-[80vh] bg-gradient-to-b from-theatre-green/10 to-transparent transform rotate-12 blur-3xl pointer-events-none z-10" />

      {/* Main Content Area */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24">
        {/* Decorative Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="inline-flex items-center space-x-2 bg-theatre-green/20 backdrop-blur-md px-4 py-1.5 rounded-full border border-theatre-green/30 text-theatre-gold text-xs font-semibold tracking-wider uppercase mb-8"
        >
          <Sparkles className="w-4.5 h-4.5 animate-spin" style={{ animationDuration: '4s' }} />
          <span>Curtain Raiser Season 2026</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]"
        >
          Where Stories <br className="sm:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-theatre-gold via-theatre-gold-light to-theatre-gold text-shadow-gold">
            Come Alive
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed font-sans font-light"
        >
          Experience unforgettable performances, engaging events, and magical moments at Tiny Theatre.
        </motion.p>

        {/* Call to action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <a
            href="#book-now"
            onClick={(e) => scrollToSection(e, '#book-now')}
            className="group flex items-center justify-center space-x-2 w-full sm:w-auto bg-gradient-to-r from-theatre-gold to-theatre-gold-dark hover:from-theatre-gold-light hover:to-theatre-gold text-theatre-green-deep font-bold px-8 py-4 rounded-full shadow-xl shadow-theatre-gold/15 hover:shadow-theatre-gold/25 hover:scale-105 transition-all duration-300 text-base"
          >
            <Ticket className="w-5 h-5 text-theatre-green-deep group-hover:rotate-12 transition-transform duration-300" />
            <span>Book Now</span>
          </a>
          <a
            href="#events"
            onClick={(e) => scrollToSection(e, '#events')}
            className="group flex items-center justify-center space-x-2 w-full sm:w-auto bg-transparent hover:bg-theatre-green/10 text-white hover:text-theatre-gold font-semibold px-8 py-4 rounded-full border border-white/20 hover:border-theatre-gold/40 hover:scale-105 transition-all duration-300 text-base"
          >
            <Calendar className="w-5 h-5 text-gray-400 group-hover:text-theatre-gold transition-colors duration-300" />
            <span>Explore Events</span>
          </a>
        </motion.div>
      </div>

      {/* Decorative Curtain Overlay Details */}
      <div className="absolute top-0 bottom-0 left-0 w-8 md:w-16 bg-gradient-to-r from-[#030c0a] to-transparent pointer-events-none z-20" />
      <div className="absolute top-0 bottom-0 right-0 w-8 md:w-16 bg-gradient-to-l from-[#030c0a] to-transparent pointer-events-none z-20" />
      
      {/* Decorative Golden Fringe Banner line */}
      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-theatre-gold to-transparent opacity-40 z-20" />
    </section>
  );
}
