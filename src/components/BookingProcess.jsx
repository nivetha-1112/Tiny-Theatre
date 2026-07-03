import React from 'react';
import { motion } from 'framer-motion';
import { Search, Calendar, Armchair, ShieldCheck, Ticket } from 'lucide-react';

export default function BookingProcess() {
  const steps = [
    {
      step: '01',
      title: 'Choose Event',
      desc: 'Browse our diverse lineup of plays, musicals, comedy clubs, and seasonal children shows.',
      icon: Search,
    },
    {
      step: '02',
      title: 'Select Date & Time',
      desc: 'Pick a performance slot that matches your schedule, including weekend matinees or evening slots.',
      icon: Calendar,
    },
    {
      step: '03',
      title: 'Pick Seats',
      desc: 'Examine our live seating layout preview to choose standard, VIP, or front-row seats.',
      icon: Armchair,
    },
    {
      step: '04',
      title: 'Secure Payment',
      desc: 'Complete payment seamlessly via encrypted channels (SSL) with all major credit cards.',
      icon: ShieldCheck,
    },
    {
      step: '05',
      title: 'Get Tickets',
      desc: 'Instantly download your digital ticket. Scan at the gate and enjoy the performance!',
      icon: Ticket,
    },
  ];

  return (
    <section id="booking-process" className="relative py-24 bg-theatre-dark overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-theatre-green/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-theatre-gold/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-theatre-gold font-semibold tracking-widest uppercase text-xs">
            How It Works
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white">
            Booking Made <br className="hidden sm:inline" />
            <span className="text-theatre-green">Seamless & Simple</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-theatre-gold to-theatre-green rounded-full mx-auto" />
          <p className="text-gray-400 text-base sm:text-lg font-sans font-light">
            Follow five simple steps to secure your seats for our upcoming performances.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Connecting Line - Desktop Only */}
          <div className="hidden lg:block absolute top-[68px] left-[5%] right-[5%] h-0.5 bg-gradient-to-r from-theatre-green/20 via-theatre-gold/35 to-theatre-green/20" />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Step Bubble */}
                  <div className="relative mb-6">
                    {/* Circle Background */}
                    <div className="w-24 h-24 rounded-full bg-theatre-green/10 border border-theatre-green/20 group-hover:border-theatre-gold/40 flex items-center justify-center transition-all duration-500 transform group-hover:scale-110 shadow-lg shadow-theatre-green-deep/30 relative">
                      <Icon className="w-8 h-8 text-theatre-green group-hover:text-theatre-gold transition-colors duration-500" />
                      
                      {/* Step Number Tag */}
                      <span className="absolute -top-1 -right-1 bg-theatre-gold text-theatre-green-deep font-sans text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center border-2 border-theatre-dark">
                        {step.step}
                      </span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-serif text-lg font-bold text-white mb-2 group-hover:text-theatre-gold transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-sans font-light px-2">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
