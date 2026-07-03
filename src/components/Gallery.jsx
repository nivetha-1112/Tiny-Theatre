import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X, Star, Quote } from 'lucide-react';

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
    title: 'Console Gaming Party',
    category: 'Gaming & Fun',
    image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=800&q=80',
    testimonial: 'Playing multiplayer matches on a 150-inch 4K screen with Dolby Atmos surround sound was insane. Zero input lag. Best gaming meetup ever with friends!',
    reviewer: 'David K.',
    role: 'Gamers Crew Captain',
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

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const categories = ['All', 'Celebrations', 'Romance', 'Gaming & Fun', 'Corporate', 'Halls & Experience'];

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
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-theatre-green/5 rounded-full blur-[120px] pointer-events-none" />

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
            Browse our photo collections and read the real experiences left by our guests who celebrated their special events with us.
          </p>
        </div>

        {/* Filters bar */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 border ${
                activeFilter === cat
                  ? 'bg-theatre-green text-white border-theatre-green shadow-lg shadow-theatre-green/15 scale-105'
                  : 'bg-white/5 text-gray-300 border-white/5 hover:border-theatre-green/30 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              layout
              key={item.id}
              onClick={() => setSelectedImageIndex(index)}
              className="group relative rounded-3xl overflow-hidden cursor-pointer border border-white/5 hover:border-theatre-gold/20 shadow-md hover:shadow-theatre-green-deep/20 transition-all duration-500 h-96"
            >
              {/* Main Visual Image - Fully Vibrant */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Gradient Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-theatre-dark/95 via-theatre-dark/60 to-transparent z-10 opacity-90 transition-opacity duration-300" />

              {/* Top rating badge */}
              <div className="absolute top-4 right-4 z-20 bg-theatre-green/90 backdrop-blur-md border border-theatre-green/20 px-3 py-1 rounded-full flex items-center space-x-1 shadow-md">
                <Star className="w-3.5 h-3.5 text-theatre-gold fill-current" />
                <span className="text-white text-xs font-bold font-sans">5.0</span>
              </div>

              {/* Bottom reviews content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 z-20 flex flex-col justify-end text-left space-y-3.5">
                <span className="text-theatre-gold text-xs font-semibold uppercase tracking-wider">
                  {item.category}
                </span>
                <h3 className="font-serif text-xl font-bold text-white group-hover:text-theatre-gold transition-colors duration-300 leading-tight">
                  {item.title}
                </h3>
                
                {/* Embedded Review quote on Hover */}
                <div className="relative text-gray-300 font-sans font-light text-xs sm:text-sm italic leading-relaxed pt-3 border-t border-white/10 group-hover:text-white transition-colors duration-300">
                  <Quote className="absolute -top-1 -left-1 w-4 h-4 text-theatre-gold/20 transform rotate-180" />
                  <p className="pl-4.5 line-clamp-3">"{item.testimonial}"</p>
                </div>

                <div className="flex items-center justify-between text-xs pt-1">
                  <span className="text-white font-medium">{item.reviewer}</span>
                  <span className="text-gray-400">{item.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Lightbox Modal */}
        <AnimatePresence>
          {selectedImageIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[120] bg-theatre-dark/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
              onClick={() => setSelectedImageIndex(null)}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedImageIndex(null)}
                className="absolute top-6 right-6 text-gray-400 hover:text-white p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors z-[130]"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Lightbox Card */}
              <motion.div
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="bg-theatre-green-deep/40 border border-white/10 rounded-[32px] overflow-hidden max-w-5xl w-full grid grid-cols-1 md:grid-cols-12 shadow-2xl relative"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Left image column */}
                <div className="md:col-span-7 h-[300px] md:h-[500px] relative">
                  <img
                    src={filteredItems[selectedImageIndex].image}
                    alt={filteredItems[selectedImageIndex].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-theatre-dark/80 to-transparent md:hidden" />
                </div>

                {/* Right detailed column - Reviews sheets layout */}
                <div className="md:col-span-5 p-8 flex flex-col justify-center text-left space-y-6">
                  <div>
                    <span className="text-theatre-gold text-xs font-semibold tracking-widest uppercase block mb-2">
                      {filteredItems[selectedImageIndex].category}
                    </span>
                    <h2 className="font-serif text-3xl font-bold text-white leading-tight">
                      {filteredItems[selectedImageIndex].title}
                    </h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-theatre-gold to-theatre-green rounded-full mt-3" />
                  </div>

                  {/* Testimonial sheet */}
                  <div className="bg-theatre-dark/50 border border-white/5 p-6 rounded-2xl relative shadow-inner">
                    <Quote className="absolute -top-3 -left-3 w-8 h-8 text-theatre-gold/10 transform rotate-180" />
                    <p className="text-gray-300 font-sans font-light italic leading-relaxed text-sm sm:text-base pl-2">
                      "{filteredItems[selectedImageIndex].testimonial}"
                    </p>
                  </div>

                  {/* Reviewer details & score */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div>
                      <h4 className="text-white font-serif text-lg font-bold">
                        {filteredItems[selectedImageIndex].reviewer}
                      </h4>
                      <p className="text-xs text-gray-400 font-sans tracking-wide">
                        {filteredItems[selectedImageIndex].role}
                      </p>
                    </div>

                    <div className="flex items-center space-x-1.5 bg-theatre-gold/10 border border-theatre-gold/30 px-3.5 py-2 rounded-xl">
                      <Star className="w-4 h-4 text-theatre-gold fill-current" />
                      <span className="text-theatre-gold font-bold font-sans text-sm">5.0 / 5.0</span>
                    </div>
                  </div>
                </div>

                {/* Navigation arrows (desktop overlay) */}
                <div className="absolute bottom-6 right-8 hidden md:flex items-center space-x-3 z-30">
                  <button
                    onClick={handlePrev}
                    className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-theatre-gold/30 text-white transition-all cursor-pointer"
                  >
                    Prev
                  </button>
                  <button
                    onClick={handleNext}
                    className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-theatre-gold/30 text-white transition-all cursor-pointer"
                  >
                    Next
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
