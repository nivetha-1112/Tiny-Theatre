import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X, Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const galleryItems = [
  {
    id: 1,
    title: 'Romantic Proposal Setup',
    category: 'Romance',
    image: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=800&q=80',
    testimonial: 'I booked the Rose Screen for my proposal and the team did a flawless job with the balloon letters and candle pathway. She said YES! Best private theater service ever.',
    reviewer: 'Sarah Jenkins',
    role: 'Romantic Partner',
    rating: 5,
  },
  {
    id: 2,
    title: 'Custom Birthday Decor',
    category: 'Celebrations',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80',
    testimonial: 'Awesome birthday surprise! The balloon styling was gorgeous, sound system was super loud, and the private theater made us feel like movie stars. Recliners are extremely soft.',
    reviewer: 'Elena Rostova',
    role: 'Birthday Celebrant',
    rating: 5,
  },
  {
    id: 3,
    title: 'Dolby Atmos Sound Setup',
    category: 'Halls & Experience',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80',
    testimonial: 'The 4K projection quality and the room acoustics were spectacular. Renting out the whole screen was the best movie experience we have had in years. Highly recommended.',
    reviewer: 'Marcus G.',
    role: 'Film Club Host',
    rating: 5,
  },
  {
    id: 4,
    title: 'Private Get-Together',
    category: 'Get Together',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
    testimonial: 'Hosting our get-together at The Tiny Theatre was a spectacular experience! The luxury recliners, massive screen, and warm ambience made our family gathering absolutely unforgettable.',
    reviewer: 'David K.',
    role: 'Family Event Organizer',
    rating: 5,
  },
  {
    id: 5,
    title: 'Corporate Presentation Slot',
    category: 'Corporate',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
    testimonial: 'Very professional screening hall. We used it for our product launch video presentations, and the sound isolation and projection contrast were absolutely top-notch.',
    reviewer: 'Clara S.',
    role: 'Tech Startup Founder',
    rating: 5,
  },
  {
    id: 6,
    title: 'Twilight Outdoor Screen',
    category: 'Celebrations',
    image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=800&q=80',
    testimonial: 'Booked the twilight outdoor cinema deck for my daughter\'s sweet sixteen. Popcorn machine, wireless headsets... it was absolute magic under the stars!',
    reviewer: 'Liam & Sophia',
    role: 'Happy Parents',
    rating: 5,
  },
];

export default function Gallery({ preview, onViewMore }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const categories = ['All', 'Celebrations', 'Romance', 'Get Together', 'Corporate', 'Halls & Experience'];

  const filteredItems = activeFilter === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  const itemsToDisplay = preview ? galleryItems.slice(0, 3) : filteredItems;

  const handlePrev = (e) => {
    e.stopPropagation();
    setSelectedImageIndex((prev) => (prev === 0 ? itemsToDisplay.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setSelectedImageIndex((prev) => (prev === itemsToDisplay.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="gallery" className="relative py-12 bg-theatre-dark overflow-hidden">
      {/* Visual background details */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-theatre-grey/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <span className="text-theatre-gold font-semibold tracking-widest uppercase text-xs mb-4 block">
            Review Gallery
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
            Magic Captured, <br className="hidden sm:inline" />
            <span className="text-theatre-grey">Reviews Witnessed</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-theatre-gold to-theatre-grey rounded-full mb-8" />
          <p className="text-gray-400 text-sm sm:text-base font-sans font-light">
            Browse our photo collections and read the real experiences left by our guests who celebrated their special events with us.
          </p>
        </div>

        {/* Filters bar */}
        {!preview && (
          <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 border ${
                  activeFilter === cat
                    ? 'bg-theatre-grey text-white border-theatre-grey shadow-lg shadow-theatre-grey/15 scale-105'
                    : 'bg-white/5 text-gray-300 border-white/5 hover:border-theatre-grey/30 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {itemsToDisplay.map((item, index) => (
            <motion.div
              layout
              key={item.id}
              onClick={() => setSelectedImageIndex(index)}
              className="group relative rounded-3xl overflow-hidden cursor-pointer border border-theatre-gold/45 hover:border-theatre-gold/80 shadow-md hover:shadow-theatre-grey-deep/20 transition-all duration-500 h-96"
            >
              {/* Main Visual Image - Fully Vibrant */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Elegant Hover Overlay */}
              <div className="absolute inset-0 bg-theatre-dark/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center space-y-3 z-20">
                <div className="p-3 bg-theatre-gold text-theatre-grey-deep rounded-full shadow-lg shadow-theatre-gold/25 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                  <Maximize2 className="w-5 h-5" />
                </div>
                <span className="text-white text-xs font-semibold tracking-wider uppercase font-sans">
                  Zoom Image
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {preview && (
          <div className="text-center mt-16">
            <button
              onClick={onViewMore}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-theatre-gold to-theatre-gold-dark hover:from-theatre-gold-light hover:to-theatre-gold text-theatre-grey-deep font-bold px-8 py-4 rounded-full shadow-lg shadow-theatre-gold/15 hover:shadow-theatre-gold/25 hover:scale-105 transition-all duration-300 text-sm cursor-pointer"
            >
              <span>View Full Gallery</span>
            </button>
          </div>
        )}

        {createPortal(
          <AnimatePresence>
            {selectedImageIndex !== null && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
                onClick={() => setSelectedImageIndex(null)}
              >
                {/* Close button */}
                <button
                  onClick={() => setSelectedImageIndex(null)}
                  className="absolute top-6 right-6 text-white/80 hover:text-white p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors z-[210] cursor-pointer"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Centered Image Container */}
                <motion.div
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.95 }}
                  transition={{ type: 'spring', damping: 25, stiffness: 250 }}
                  className="relative max-w-4xl w-full max-h-[85vh] flex items-center justify-center"
                  onClick={(e) => e.stopPropagation()}
                >
                  <img
                    src={itemsToDisplay[selectedImageIndex].image}
                    alt={itemsToDisplay[selectedImageIndex].title}
                    className="max-w-full max-h-[80vh] object-contain rounded-2xl border border-white/10 shadow-2xl"
                  />
                  
                  {/* Left navigation arrow */}
                  <button
                    onClick={handlePrev}
                    className="absolute -left-4 sm:-left-16 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/60 hover:bg-theatre-gold border border-white/10 hover:border-theatre-gold text-white hover:text-theatre-grey-deep transition-all duration-300 shadow-lg hover:scale-110 cursor-pointer"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>

                  {/* Right navigation arrow */}
                  <button
                    onClick={handleNext}
                    className="absolute -right-4 sm:-right-16 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/60 hover:bg-theatre-gold border border-white/10 hover:border-theatre-gold text-white hover:text-theatre-grey-deep transition-all duration-300 shadow-lg hover:scale-110 cursor-pointer"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
      </div>
    </section>
  );
}
