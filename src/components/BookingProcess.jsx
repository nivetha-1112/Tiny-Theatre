import React from 'react';
import { motion } from 'framer-motion';
import { Search, Calendar, Mail, ShieldCheck, Ticket } from 'lucide-react';

export default function BookingProcess({ preview, onViewMore }) {
  const steps = [
    {
      step: '01',
      title: 'Choose Package',
      desc: 'Select a customized celebration rental package (e.g., Birthday Party, Romantic Proposal, Get Together & Corporate Gathering).',
      icon: Search,
    },
    {
      step: '02',
      title: 'Select Slot',
      desc: 'Pick your preferred date and 3-hour private screening slot that matches your schedule.',
      icon: Calendar,
    },
    {
      step: '03',
      title: 'Contact & Enquiry',
      desc: 'Submit your details and custom preferences via our Contact Us form on the right.',
      icon: Mail,
    },
    {
      step: '04',
      title: 'Quick Confirmation',
      desc: 'Our box office team will reach out to confirm your booking slot, decoration options, and pricing.',
      icon: ShieldCheck,
    },
    {
      step: '05',
      title: 'Get Entry Pass',
      desc: 'Instantly receive your digital entry ticket pass and confirmation details via email.',
      icon: Ticket,
    },
  ];

  return (
    <section id="booking-process" className="relative py-24 bg-theatre-dark overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-theatre-grey/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-theatre-gold/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 flex flex-col items-center">
          <span className="text-theatre-gold font-semibold tracking-widest uppercase text-xs mb-4 block">
            How It Works
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            Booking Made <br className="hidden sm:inline" />
            <span className="text-theatre-grey">Seamless & Simple</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-theatre-gold to-theatre-grey rounded-full mb-8" />
          <p className="text-gray-400 text-base sm:text-lg font-sans font-light">
            Follow five simple steps to secure your private screening hall rental.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative">

          {/* Steps Grid */}
          <div className={`grid grid-cols-1 md:grid-cols-2 ${preview ? 'lg:grid-cols-3' : 'lg:grid-cols-5'} gap-12 lg:gap-8 relative z-10`}>
            {(preview ? steps.slice(0, 3) : steps).map((step, index) => {
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
                    <div className="w-24 h-24 rounded-full bg-theatre-grey-deep/15 backdrop-blur-md border border-theatre-gold/30 group-hover:border-theatre-gold flex items-center justify-center transition-all duration-500 transform group-hover:scale-110 shadow-lg shadow-theatre-gold/5 relative">
                      <Icon className="w-8 h-8 text-gray-400 group-hover:text-theatre-gold transition-colors duration-500" />
                      
                      {/* Step Number Tag */}
                      <span className="absolute -top-1 -right-1 bg-theatre-gold text-theatre-grey-deep font-sans text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center border-2 border-theatre-dark">
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

          {preview && (
            <div className="text-center mt-16">
              <button
                onClick={onViewMore}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-theatre-gold to-theatre-gold-dark hover:from-theatre-gold-light hover:to-theatre-gold text-theatre-grey-deep font-bold px-8 py-4 rounded-full shadow-lg shadow-theatre-gold/15 hover:shadow-theatre-gold/25 hover:scale-105 transition-all duration-300 text-sm cursor-pointer"
              >
                <span>View Complete Process</span>
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
