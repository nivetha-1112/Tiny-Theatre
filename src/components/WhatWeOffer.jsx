import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldAlert, 
  Tv, 
  Heart, 
  Sparkles, 
  Cake, 
  Film, 
  Users, 
  Briefcase, 
  Mic,
  Gift,
  Trophy,
  Award
} from 'lucide-react';

export default function WhatWeOffer() {
  const offers = [
    { title: "100% Private Screening Experience", icon: ShieldAlert },
    { title: "Giant Cinema Screen with Premium Sound", icon: Tv },
    { title: "Comfortable Luxury Seating", icon: Heart },
    { title: "Decorated for Birthdays & Occasions", icon: Sparkles },
    { title: "Cakes and Refreshments Available", icon: Cake },
    { title: "Play Your Own Movies & OTT Content", icon: Film },
    { title: "Perfect for Couples, Friends & Families", icon: Users },
    { title: "Corporate gatherings and meetings", icon: Briefcase },  ];

  const perfectFor = [
    { name: "Movie Marathons", icon: Film, image: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=400&q=80" },
    { name: "Birthday Celebrations", icon: Gift, image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=400&q=80" },
    { name: "Romantic Date Nights", icon: Heart, image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=400&q=80" },
    { name: "Proposals", icon: Sparkles, image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=400&q=80" },
    { name: "Anniversaries", icon: Award, image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=400&q=80" },
    { name: "Family Gatherings", icon: Users, image: "https://images.unsplash.com/photo-1543807535-eceef0bc6599?auto=format&fit=crop&w=400&q=80" },
    { name: "Team Celebrations", icon: Trophy, image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80" }
  ];

  const renderPill = (item, actualIdx) => {
    const Icon = item.icon;
    const formattedNumber = String(actualIdx + 1).padStart(2, '0');
    
    return (
      <motion.div
        key={actualIdx}
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: actualIdx * 0.05 }}
        className="flex items-center space-x-3.5 relative group w-full"
      >
        {/* Number Badge */}
        <div className="w-11 h-11 rounded-full bg-theatre-grey-deep/40 border border-theatre-gold/40 flex items-center justify-center text-theatre-gold font-bold text-sm flex-shrink-0 shadow-lg group-hover:bg-theatre-gold group-hover:text-theatre-grey-deep transition-all duration-300 z-10">
          {formattedNumber}
        </div>

        {/* Capsule Pill */}
        <div className="flex-grow flex items-center justify-between bg-theatre-grey-deep/15 backdrop-blur-md border border-white/5 rounded-full pl-4 pr-5 py-2.5 shadow-xl hover:border-theatre-gold/45 hover:bg-theatre-grey-deep/20 transition-all duration-300">
          {/* Title Text */}
          <span className="text-white font-sans text-xs sm:text-sm font-medium tracking-wide pr-3 text-left">
            {item.title}
          </span>

          {/* Pill End Icon */}
          <div className="w-7 h-7 rounded-full bg-white/[0.03] border border-white/5 flex items-center justify-center text-theatre-gold/75 group-hover:text-theatre-gold transition-colors duration-300 flex-shrink-0">
            <Icon className="w-3.5 h-3.5" />
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="what-we-offer" className="relative py-24 bg-theatre-dark overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-theatre-grey/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-theatre-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-theatre-gold font-semibold tracking-widest uppercase text-xs mb-4 block">
            Infographic
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white tracking-wide">
            What We <span className="text-theatre-gold">Offer</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-theatre-gold to-theatre-grey rounded-full mx-auto mt-4" />
        </div>

        {/* Infographic Desktop Layout (3 columns) */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          
          {/* Column 1: Left 4 Points (01 - 04) */}
          <div className="lg:col-span-4 space-y-6">
            {offers.slice(0, 4).map((item, idx) => renderPill(item, idx))}
          </div>

          {/* Column 2: Center Circular Graphic */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center h-full">
            {/* Circular Graphic */}
            <div className="w-[280px] h-[280px] rounded-full border-2 border-dashed border-theatre-gold/20 flex items-center justify-center relative shadow-2xl">
              {/* Outer decorative glowing ring */}
              <div className="absolute inset-2 rounded-full border border-white/5 bg-theatre-grey-deep/5 backdrop-blur-sm" />
              
              {/* Inner circle */}
              <div className="absolute w-[200px] h-[200px] rounded-full border border-theatre-gold/30 flex flex-col items-center justify-center text-center p-4 bg-theatre-dark shadow-inner">
                <span className="text-[9px] text-gray-500 uppercase tracking-widest font-bold mb-1">
                  Tiny Theatre
                </span>
                <h3 className="font-serif text-xl font-bold text-white leading-tight mb-2">
                  What We <br />
                  <span className="text-theatre-gold">Offer</span>
                </h3>
                <div className="w-8 h-0.5 bg-theatre-gold mb-2.5" />
                <p className="text-[8px] text-gray-400 font-sans tracking-wide uppercase">
                  Movies • Munchies • Memories
                </p>
              </div>

              {/* Connecting arc dashed lines extending left and right */}
              <svg className="absolute -left-6 top-1/2 -translate-y-1/2 w-6 h-[220px] overflow-visible pointer-events-none" viewBox="0 0 20 220">
                <path d="M20 110 C0 110, -5 40, -10 0 M20 110 C0 110, -5 180, -10 220" fill="none" stroke="rgba(244, 196, 48, 0.25)" strokeWidth="1.5" strokeDasharray="3 3" />
              </svg>
              <svg className="absolute -right-6 top-1/2 -translate-y-1/2 w-6 h-[220px] overflow-visible pointer-events-none" viewBox="0 0 20 220">
                <path d="M0 110 C20 110, 25 40, 30 0 M0 110 C20 110, 25 180, 30 220" fill="none" stroke="rgba(244, 196, 48, 0.25)" strokeWidth="1.5" strokeDasharray="3 3" />
              </svg>
            </div>
          </div>

          {/* Column 3: Right 4 Points (05 - 08) */}
          <div className="lg:col-span-4 space-y-6">
            {offers.slice(4, 8).map((item, idx) => renderPill(item, idx + 4))}
          </div>

        </div>

        {/* Infographic Mobile/Tablet Layout (Single Column) */}
        <div className="lg:hidden space-y-5 relative max-w-xl mx-auto">
          {/* Dashed timeline vertical line */}
          <div className="absolute left-[1.35rem] top-6 bottom-6 w-0.5 border-l border-dashed border-theatre-gold/30 pointer-events-none" />

          {offers.map((item, idx) => {
            const Icon = item.icon;
            const formattedNumber = String(idx + 1).padStart(2, '0');
            
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="flex items-center space-x-4 relative group w-full"
              >
                {/* Decorative timeline node */}
                <div className="w-3 h-3 rounded-full bg-theatre-gold border border-theatre-dark absolute left-[1.15rem] top-1/2 -translate-y-1/2 z-10 shadow" />

                {/* Number Badge */}
                <div className="w-11 h-11 rounded-full bg-theatre-grey-deep/40 border border-theatre-gold/40 flex items-center justify-center text-theatre-gold font-bold text-sm flex-shrink-0 shadow-lg group-hover:bg-theatre-gold group-hover:text-theatre-grey-deep transition-all duration-300 z-10 ml-6">
                  {formattedNumber}
                </div>

                {/* Capsule Pill */}
                <div className="flex-grow flex items-center justify-between bg-theatre-grey-deep/15 backdrop-blur-md border border-white/5 rounded-full pl-4 pr-5 py-2.5 shadow-xl hover:border-theatre-gold/45 hover:bg-theatre-grey-deep/20 transition-all duration-300">
                  <span className="text-white font-sans text-xs sm:text-sm font-medium tracking-wide pr-3 text-left">
                    {item.title}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-white/[0.03] border border-white/5 flex items-center justify-center text-theatre-gold/75 group-hover:text-theatre-gold transition-colors duration-300 flex-shrink-0">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Perfect For Sub-Section */}
        <div className="mt-28 border-t border-white/5 pt-20">
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">
              Perfect <span className="text-theatre-gold">For</span>
            </h3>
            <div className="w-14 h-0.5 bg-theatre-gold rounded-full" />
          </div>

          {/* Perfect For Image Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-6 max-w-7xl mx-auto">
            {perfectFor.map((item, idx) => {
              const PerfectIcon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="relative h-60 rounded-3xl overflow-hidden border border-theatre-gold/40 hover:border-theatre-gold transition-all duration-300 hover:scale-105 shadow-lg group cursor-pointer"
                >
                  {/* Card Background Image */}
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Gradient Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-theatre-dark via-theatre-dark/45 to-transparent z-10" />

                  {/* Content Overlay */}
                  <div className="absolute inset-0 z-20 p-4 flex flex-col justify-end items-center text-center">
                    <div className="w-10 h-10 rounded-xl bg-theatre-dark/90 border border-theatre-gold/40 flex items-center justify-center text-theatre-gold mb-3 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <PerfectIcon className="w-5 h-5" />
                    </div>
                    <h4 className="text-white font-sans font-bold text-sm sm:text-base leading-tight tracking-wide group-hover:text-theatre-gold transition-colors duration-300">
                      {item.name}
                    </h4>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
