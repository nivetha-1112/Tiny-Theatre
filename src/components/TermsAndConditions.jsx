import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Check, Calendar, Users, Shield, Headphones } from 'lucide-react';

export default function TermsAndConditions() {
  const navigate = useNavigate();

  const bookingTerms = [
    'A minimum of 50% advance payment is required to reserve your private screen slot.',
    'The remaining balance must be paid at the venue before the start of the screening.',
    'Slot bookings are non-transferable to other individuals without prior approval.',
  ];

  const guestTerms = [
    'Each private screen hall has strict maximum capacity limits due to safety regulations.',
    'Crown Screen (Grand Suite): Maximum of 15 guests.',
    'Rose Screen (Deluxe Suite): Maximum of 4 guests.',
    'Screen 2 (Cosy Lounge): Maximum of 6 guests.',
  ];

  return (
    <section id="terms-and-conditions" className="relative py-24 bg-gradient-to-b from-theatre-dark to-theatre-dark/95 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-theatre-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Subtitle */}
        <div className="text-center mb-2">
          <span className="text-theatre-gold text-xs font-semibold tracking-[0.25em] uppercase">
            → HOUSE OF VENUES ←
          </span>
        </div>

        {/* Title */}
        <h2 className="text-center font-serif text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
          Terms & <span className="text-theatre-gold">Conditions</span>
        </h2>

        {/* Decorative Divider */}
        <div className="flex items-center justify-center space-x-4 mb-6">
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-theatre-gold/60" />
          <span className="text-theatre-gold text-sm font-serif">❦</span>
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-theatre-gold/60" />
        </div>

        {/* Subtext */}
        <p className="text-center text-gray-400 text-sm sm:text-base font-sans font-light leading-relaxed max-w-xl mx-auto mb-16">
          Please review our venue policies before confirming your private slot <br className="hidden sm:inline" />
          to ensure a seamless experience.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          
          {/* Card 1: Booking & Confirmation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-theatre-grey-deep/15 backdrop-blur-md rounded-[32px] p-8 sm:p-10 border border-theatre-gold/45 hover:border-theatre-gold/80 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Header */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-14 h-14 bg-theatre-dark border border-theatre-gold/60 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Calendar className="w-6 h-6 text-theatre-gold" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-white">
                    Booking & Confirmation
                  </h3>
                  <div className="w-14 h-0.5 bg-theatre-gold mt-2" />
                </div>
              </div>

              {/* Bullet points */}
              <ul className="space-y-4">
                {bookingTerms.map((term, idx) => (
                  <li key={idx} className="flex items-start space-x-3.5 text-sm text-gray-300 font-sans font-light leading-relaxed">
                    <div className="w-5 h-5 rounded-full border border-theatre-gold/60 flex items-center justify-center text-theatre-gold mt-0.5 flex-shrink-0 bg-theatre-gold/5">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>{term}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Card 2: Guest Capacity & Limits */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-theatre-grey-deep/15 backdrop-blur-md rounded-[32px] p-8 sm:p-10 border border-theatre-gold/45 hover:border-theatre-gold/80 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Header */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-14 h-14 bg-theatre-dark border border-theatre-gold/60 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Users className="w-6 h-6 text-theatre-gold" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-white">
                    Guest Capacity & Limits
                  </h3>
                  <div className="w-14 h-0.5 bg-theatre-gold mt-2" />
                </div>
              </div>

              {/* Bullet points */}
              <ul className="space-y-4">
                {guestTerms.map((term, idx) => (
                  <li key={idx} className="flex items-start space-x-3.5 text-sm text-gray-300 font-sans font-light leading-relaxed">
                    <div className="w-5 h-5 rounded-full border border-theatre-gold/60 flex items-center justify-center text-theatre-gold mt-0.5 flex-shrink-0 bg-theatre-gold/5">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>{term}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

        </div>

        {/* Important Note Callout Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-theatre-grey-deep/15 backdrop-blur-md rounded-2xl border border-theatre-gold/45 p-6 flex flex-col md:flex-row items-center md:items-center space-y-4 md:space-y-0 md:space-x-6 text-center md:text-left max-w-7xl mx-auto mb-12 shadow-md"
        >
          <div className="flex items-center space-x-4 flex-shrink-0">
            <div className="w-12 h-12 bg-theatre-dark border border-theatre-gold/60 rounded-full flex items-center justify-center flex-shrink-0">
              <Shield className="w-5 h-5 text-theatre-gold" />
            </div>
            <h4 className="font-serif text-lg font-bold text-theatre-gold tracking-wide">
              Important Note
            </h4>
          </div>

          <div className="hidden md:block w-px h-10 bg-white/10" />

          <p className="text-sm text-gray-300 leading-relaxed font-sans font-light max-w-4xl">
            By proceeding with your booking, you agree to abide by our venue policies and ensure a safe and enjoyable experience for all guests.
          </p>
        </motion.div>

        {/* Contact Support Footer Area */}
        <div className="text-center mt-16 flex flex-col items-center">
          <div className="w-12 h-12 bg-theatre-dark border border-theatre-gold/60 rounded-full flex items-center justify-center shadow-md mb-3">
            <Headphones className="w-5 h-5 text-theatre-gold" />
          </div>
          <p className="text-sm text-gray-300 font-sans font-light">
            Have questions? Our team is here to help.
          </p>
          <a
            href="/contact"
            onClick={(e) => {
              e.preventDefault();
              navigate('/contact');
            }}
            className="inline-flex items-center space-x-1 text-theatre-gold hover:text-theatre-gold-light text-sm font-semibold transition-all duration-300 mt-1 cursor-pointer hover:underline group"
          >
            <span>Contact Support</span>
            <span className="text-xs transform group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
        </div>

      </div>
    </section>
  );
}
