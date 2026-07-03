import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X, ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const galleryItems = [
  {
    id: 1,
    title: 'The Phantom Mask Live',
    category: 'Theatre Performances',
    image: 'https://images.unsplash.com/photo-1460881680858-30d872d5b530?auto=format&fit=crop&w=800&q=80',
    testimonial: 'An absolute treasure! The intimate atmosphere makes you feel like you are part of the story. The acting and stage presence was spellbinding.',
    reviewer: 'Sarah Jenkins',
    role: 'Arts Critic & Journalist',
    rating: 5,
  },
  {
    id: 2,
    title: 'Warm Audience Applause',
    category: 'Audience Moments',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80',
    testimonial: 'Every whisper is felt, every glance is seen. A truly magical community theatre experience. The audience connection is unlike anything else.',
    reviewer: 'Elena Rostova',
    role: 'Dedicated Theatre Patron',
    rating: 5,
  },
  {
    id: 3,
    title: 'Set Decoration & Stage Craft',
    category: 'Behind the Scenes',
    image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=800&q=80',
    testimonial: 'Stunning attention to details behind the curtain. The hand-crafted set designs and visual effects bring every scene to complete life.',
    reviewer: 'Marcus G.',
    role: 'Stage Design Consultant',
    rating: 5,
  },
  {
    id: 4,
    title: 'Musical Rehearsal Spotlight',
    category: 'Theatre Performances',
    image: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=800&q=80',
    testimonial: 'The acoustic resonance and raw vocal depth of the actors blew us away. A premium musical masterpiece matching West-End standards.',
    reviewer: 'David K.',
    role: 'Local Family Visitor',
    rating: 5,
  },
  {
    id: 5,
    title: 'Annual Gala Night 2025',
    category: 'Special Events',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
    testimonial: 'A glorious celebration of local talent and premium theatre culture. Fostering real connection and stories that linger.',
    reviewer: 'Clara S.',
    role: 'Art Collector & Guest',
    rating: 5,
  },
  {
    id: 6,
    title: 'Under the Stars Amphitheatre',
    category: 'Special Events',
    image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=800&q=80',
    testimonial: 'Watching Shakespeare outdoors under a canopy of stars was pure romance and artistic bliss. The acoustic setup was flawless.',
    reviewer: 'Liam & Sophia',
    role: 'Weekend Visitors',
    rating: 5,
  },
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const categories = ['All', 'Theatre Performances', 'Audience Moments', 'Behind the Scenes', 'Special Events'];

  const filteredItems = activeFilter === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  const handlePrev = (e) => {
    e.stopPropagation();
    setSelectedImageIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setSelectedImageIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="gallery" className="relative py-24 bg-theatre-dark overflow-hidden">
      {/* Visual background details */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-theatre-green/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-theatre-gold font-semibold tracking-widest uppercase text-xs">
            Review Gallery
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white">
            Magic Captured, <br className="hidden sm:inline" />
            <span className="text-theatre-green">Reviews Witnessed</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-theatre-gold to-theatre-green rounded-full mx-auto" />
          <p className="text-gray-400 text-base sm:text-lg font-sans font-light">
            Browse our photo collections and read the real experiences left by our critics, partners, and visitors.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 border ${
                activeFilter === cat
                  ? 'bg-theatre-green text-white border-theatre-green shadow-lg shadow-theatre-green/20 scale-105'
                  : 'bg-theatre-green/5 text-gray-300 border-white/5 hover:border-theatre-green/20 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                onClick={() => setSelectedImageIndex(index)}
                className="group relative h-80 rounded-3xl overflow-hidden cursor-pointer border border-white/5 shadow-lg shadow-theatre-green-deep/15"
              >
                {/* Photo & Zoom Overlay - Clear by default, dims and blurs only on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent z-10 transition-all duration-500 group-hover:from-theatre-dark/95 group-hover:via-theatre-dark/95 group-hover:to-theatre-dark/95 group-hover:backdrop-blur-sm" />
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Star rating - Always visible top right */}
                <div className="absolute top-4 right-4 z-20 bg-theatre-green/85 backdrop-blur-md px-2.5 py-1 rounded-xl border border-theatre-green/30 flex items-center space-x-1 shadow-md">
                  <Star className="w-3.5 h-3.5 text-theatre-gold fill-current" />
                  <span className="text-[10px] font-bold font-sans text-white">{item.rating}.0</span>
                </div>

                {/* Default Bottom Title Overlay (Fades out on hover) */}
                <div className="absolute bottom-6 left-6 right-6 z-20 group-hover:opacity-0 group-hover:-translate-y-2 transition-all duration-300">
                  <span className="text-theatre-gold text-[10px] font-semibold uppercase tracking-wider block mb-1">
                    {item.category}
                  </span>
                  <h4 className="font-serif text-lg font-bold text-white leading-tight">
                    {item.title}
                  </h4>
                </div>

                {/* Testimonial Quote Hover Overlay (Fades in on hover) */}
                <div className="absolute inset-6 z-20 flex flex-col justify-between opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-75">
                  <div className="space-y-4">
                    <Quote className="w-6 h-6 text-theatre-gold/60 fill-current" />
                    <p className="text-xs sm:text-sm italic text-gray-300 leading-relaxed font-sans font-light line-clamp-4">
                      "{item.testimonial}"
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between border-t border-white/10 pt-4">
                    <div>
                      <span className="font-serif text-xs font-bold text-theatre-gold block">
                        {item.reviewer}
                      </span>
                      <span className="text-[9px] text-gray-400 block font-sans tracking-wide uppercase">
                        {item.role}
                      </span>
                    </div>
                    <div className="p-2 bg-theatre-gold text-theatre-green-deep rounded-xl shadow-lg border border-theatre-gold/30">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal with side-by-side Layout */}
        <AnimatePresence>
          {selectedImageIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImageIndex(null)}
              className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImageIndex(null)}
                className="absolute top-6 right-6 z-50 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all duration-300 border border-white/10 hover:scale-105"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation Left */}
              <button
                onClick={handlePrev}
                className="absolute left-4 sm:left-6 z-50 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all duration-300 border border-white/10 hover:scale-105"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Main Container */}
              <motion.div
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 20 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-5xl w-full bg-theatre-dark rounded-3xl overflow-hidden border border-white/10 shadow-2xl z-40 grid grid-cols-1 md:grid-cols-12"
              >
                
                {/* Left Side: Image (Col 1-7) */}
                <div className="md:col-span-7 bg-black flex items-center justify-center h-[350px] md:h-[500px]">
                  <img
                    src={filteredItems[selectedImageIndex].image}
                    alt={filteredItems[selectedImageIndex].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Right Side: Theatrical Testimonial Card (Col 8-12) */}
                <div className="md:col-span-5 p-6 sm:p-10 flex flex-col justify-between space-y-8 bg-gradient-to-b from-theatre-green-deep/30 to-theatre-dark border-t md:border-t-0 md:border-l border-white/10">
                  <div className="space-y-6">
                    {/* Header Details */}
                    <div>
                      <span className="text-theatre-gold text-xs font-semibold uppercase tracking-wider block mb-1">
                        {filteredItems[selectedImageIndex].category}
                      </span>
                      <h4 className="font-serif text-2xl font-bold text-white leading-tight">
                        {filteredItems[selectedImageIndex].title}
                      </h4>
                    </div>

                    <div className="w-12 h-0.5 bg-gradient-to-r from-theatre-gold to-theatre-green" />

                    {/* Testimonial Core */}
                    <div className="space-y-4">
                      {/* Star Rating icons */}
                      <div className="flex items-center space-x-1">
                        {[...Array(filteredItems[selectedImageIndex].rating)].map((_, i) => (
                          <Star key={i} className="w-4.5 h-4.5 text-theatre-gold fill-current" />
                        ))}
                      </div>
                      <Quote className="w-8 h-8 text-theatre-green/45 fill-current" />
                      <blockquote className="font-serif text-lg font-medium italic text-gray-200 leading-relaxed">
                        "{filteredItems[selectedImageIndex].testimonial}"
                      </blockquote>
                    </div>
                  </div>

                  {/* Reviewer signature and controls info */}
                  <div className="flex items-center justify-between pt-6 border-t border-white/5">
                    <div>
                      <cite className="not-italic font-serif text-base font-bold text-theatre-gold block">
                        {filteredItems[selectedImageIndex].reviewer}
                      </cite>
                      <span className="text-xs text-gray-400 font-sans tracking-wide uppercase font-medium mt-1 block">
                        {filteredItems[selectedImageIndex].role}
                      </span>
                    </div>
                    <span className="text-xs text-gray-500 font-sans">
                      {selectedImageIndex + 1} / {filteredItems.length}
                    </span>
                  </div>

                </div>

              </motion.div>

              {/* Navigation Right */}
              <button
                onClick={handleNext}
                className="absolute right-4 sm:right-6 z-50 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all duration-300 border border-white/10 hover:scale-105"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
