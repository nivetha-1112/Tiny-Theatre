import React from 'react';
import { motion } from 'framer-motion';

export default function WhyChooseUs() {
  const features = [
    {
      title: 'Professional Performances',
      desc: 'Our plays feature award-winning local and national talents, ensuring captivating storytelling and impeccable acting.',
      image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=500&q=80',
    },
    {
      title: 'Comfortable Seating',
      desc: 'Plush velvet, ergonomically-designed seats in our boutique hall guarantee total physical comfort during every show.',
      image: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=500&q=80',
    },
    {
      title: 'Family-Friendly Environment',
      desc: 'A welcoming, wholesome community space offering educational and emotionally constructive themes for all ages.',
      image: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&w=500&q=80',
    },
    {
      title: 'Creative Productions',
      desc: 'Bespoke hand-crafted set designs, custom musical scores, and imaginative screenplays that challenge traditional limits.',
      image: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&w=500&q=80',
    },
    {
      title: 'Easy Online Booking',
      desc: 'Secure tickets in under a minute with our responsive seat-picker, digital passes, and instant confirmations.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=500&q=80',
    },
    {
      title: 'Affordable Pricing',
      desc: 'Premium cultural entertainment shouldn’t be exclusive. We offer competitive tier pricing and family package deals.',
      image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=500&q=80',
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
            We merge standard theatre production quality with intimate convenience to bring you something truly unique.
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
