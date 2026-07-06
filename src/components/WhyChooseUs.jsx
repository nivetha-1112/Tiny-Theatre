import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lightbulb, Utensils, Armchair, User } from 'lucide-react';

export default function WhyChooseUs({ preview, onViewMore }) {
  const features = [
    {
      title: '100% Complete Privacy',
      desc: 'Rent the entire luxury mini-screening room. No strangers, no interruptions—just you and your invited guests.',
      image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=500&q=80',
      icon: <Shield className="w-6 h-6 text-theatre-gold" />,
    },
    {
      title: 'Custom Celebration Decor',
      desc: 'Celebrate birthdays and anniversaries with our custom balloon arches, flower setups, and romantic LED letters.',
      image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=500&q=80',
      icon: <Lightbulb className="w-6 h-6 text-theatre-gold" />,
    },
    {
      title: 'Dolby Acoustics & 4K UHD',
      desc: 'Experience your favorite media on massive 150+ inch screens backed by cinematic Dolby Atmos surround sound.',
      image: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=500&q=80',
      icon: <span className="text-theatre-gold font-bold font-sans text-sm tracking-tighter">4K</span>,
    },
    {
      title: 'Gourmet Food & Beverages',
      desc: 'Indulge in a wide range of gourmet snacks, premium meals, and refreshing beverages delivered to your seat.',
      image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=500&q=80',
      icon: <Utensils className="w-6 h-6 text-theatre-gold" />,
    },
    {
      title: 'Plush Seating & Comfort',
      desc: 'Relax in ultra-comfortable recliners with ample legroom, adjustable seating, and cozy ambiance.',
      image: 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=500&q=80',
      icon: <Armchair className="w-6 h-6 text-theatre-gold" />,
    },
    {
      title: 'Dedicated Concierge',
      desc: 'Enjoy personalized service from our dedicated team to make your experience seamless and memorable.',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=500&q=80',
      icon: <User className="w-6 h-6 text-theatre-gold" />,
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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-theatre-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <span className="text-theatre-gold font-semibold tracking-widest uppercase text-xs mb-4 block">
            Why Choose The Tiny Theatre
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            Unparalleled Experiences <br className="hidden sm:inline" />
            <span className="text-theatre-grey">Crafted Just for You</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-theatre-gold to-theatre-grey rounded-full mb-8" />
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
          {(preview ? features.slice(0, 3) : features).map((feat) => {
            return (
              <motion.div
                key={feat.title}
                variants={cardVariants}
                className="bg-theatre-grey-deep/15 backdrop-blur-md rounded-[32px] border border-theatre-gold/45 hover:border-theatre-gold/85 flex flex-col transition-all duration-300 group cursor-default hover:shadow-lg hover:shadow-theatre-gold/5 relative"
              >
                {/* Feature Header Image - Overflow Hidden applied here only to clip top corners */}
                <div className="h-48 w-full overflow-hidden rounded-t-[32px] relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-theatre-dark via-transparent to-transparent z-10 opacity-70 group-hover:opacity-40 transition-opacity duration-300" />
                  <img
                    src={feat.image}
                    alt={feat.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Content Area - Relative to position icon over boundary */}
                <div className="p-8 pt-12 pb-10 space-y-3.5 flex-grow flex flex-col justify-between relative text-center">
                  
                  {/* Centered Circular Icon Badge */}
                  <div className="absolute -top-7 left-1/2 -translate-y-0.5 -translate-x-1/2 w-14 h-14 bg-theatre-dark border border-theatre-gold/60 rounded-full flex items-center justify-center shadow-lg shadow-black/45 z-20 group-hover:border-theatre-gold group-hover:scale-110 transition-all duration-300">
                    {feat.icon}
                  </div>

                  <div>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-theatre-gold transition-colors duration-300">
                      {feat.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-sans font-light max-w-xs mx-auto">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {preview && (
          <div className="text-center mt-12">
            <button
              onClick={onViewMore}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-theatre-gold to-theatre-gold-dark hover:from-theatre-gold-light hover:to-theatre-gold text-theatre-grey-deep font-bold px-8 py-4 rounded-full shadow-lg shadow-theatre-gold/15 hover:shadow-theatre-gold/25 hover:scale-105 transition-all duration-300 text-sm cursor-pointer"
            >
              <span>View All Features</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
