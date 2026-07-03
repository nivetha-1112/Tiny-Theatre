import React from 'react';
import { motion } from 'framer-motion';

export default function WhyChooseUs() {
  const features = [
    {
      title: '100% Complete Privacy',
      desc: 'Rent the entire luxury mini-screening room. No strangers, no interruptions—just you and your invited guests.',
      image: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=500&q=80',
    },
    {
      title: 'Custom Celebration Decor',
      desc: 'Celebrate birthdays and anniversaries with our custom balloon arches, flower setups, and romantic LED letters.',
      image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=500&q=80',
    },
    {
      title: 'Dolby Acoustics & 4K UHD',
      desc: 'Experience your favorite media on massive 150+ inch screens backed by cinematic Dolby Atmos surround sound.',
      image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=500&q=80',
    },
    {
      title: 'Gourmet Food & Cakes',
      desc: 'Pre-order custom mocktails, snacks, birthday cakes, and popcorn tubs served directly to your recliner seats.',
      image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=500&q=80',
    },
    {
      title: 'Console Gaming (PS5/Xbox)',
      desc: 'Plug in your favourite gaming consoles for an ultra-responsive, zero-lag multiplayer gaming party on the big screen.',
      image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=500&q=80',
    },
    {
      title: 'Flat-Rate Hourly Pricing',
      desc: 'We charge flat hourly rates for our private screening halls. Zero per-head ticket charges or hidden fees.',
      image: 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=500&q=80',
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section id="why-choose-us" className="relative py-24 bg-gradient-to-b from-theatre-dark/95 to-theatre-dark overflow-hidden">
      {/* Visual background details */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-theatre-green/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-theatre-gold font-semibold tracking-widest uppercase text-xs">
            Why Choose Tiny Theatre
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white">
            Unparalleled Experiences <br className="hidden sm:inline" />
            <span className="text-theatre-green">Crafted Just for You</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-theatre-gold to-theatre-green rounded-full mx-auto" />
          <p className="text-gray-400 text-base sm:text-lg font-sans font-light">
            We merge premium private theatre cinema halls with personalized customer services to bring you something truly unique.
          </p>
        </div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feat) => {
            return (
              <motion.div
                key={feat.title}
                variants={cardVariants}
                className="glass hover:glass-gold rounded-[32px] overflow-hidden border border-white/5 hover:border-theatre-gold/20 flex flex-col transition-all duration-300 group cursor-default hover:shadow-lg hover:shadow-theatre-green-deep/15"
              >
                {/* Feature Header Image */}
                <div className="h-48 w-full overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-theatre-dark via-transparent to-transparent z-10 opacity-70 group-hover:opacity-40 transition-opacity duration-300" />
                  <img
                    src={feat.image}
                    alt={feat.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Content Area */}
                <div className="p-8 space-y-3.5 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-white mb-2 group-hover:text-theatre-gold transition-colors duration-300">
                      {feat.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed font-sans font-light">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
