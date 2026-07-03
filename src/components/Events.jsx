import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, MapPin, Tag } from 'lucide-react';

export const eventsData = [
  {
    id: 1,
    name: 'Interstellar Odyssey',
    category: 'Action & Sci-Fi',
    date: 'Tonight & Tomorrow',
    time: '8:30 PM',
    venue: 'Screen 1 (IMAX Showcase)',
    desc: 'A breathtaking space travel epic exploring human survival, time dilation, and parent-child bonds across galaxies.',
    image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80',
    price: '$15',
  },
  {
    id: 2,
    name: 'The Classic Noir',
    category: 'Classics',
    date: 'July 15, 2026',
    time: '7:00 PM',
    venue: 'Screen 2 (Vintage Hall)',
    desc: 'A remastered 4K screening of the legendary black-and-white detective mystery that defined the noir genre.',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80',
    price: '$12',
  },
  {
    id: 3,
    name: 'Chasing Horizons',
    category: 'Drama & Romance',
    date: 'July 20 - July 24, 2026',
    time: '6:00 PM',
    venue: 'Screen 1 (IMAX Showcase)',
    desc: 'A sweeping, emotional romantic journey of two aspiring musicians navigating ambition, success, and love in modern Paris.',
    image: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=800&q=80',
    price: '$14',
  },
  {
    id: 4,
    name: 'The Puppet’s Magic Forest',
    category: 'Kids Movies',
    date: 'July 28, 2026',
    time: '1:30 PM',
    venue: 'Screen 3 (Family Room)',
    desc: 'A delightful, colorful animated film following a group of friendly forest animals on an interactive musical quest.',
    image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=800&q=80',
    price: '$10',
  },
  {
    id: 5,
    name: 'A Midnight Comedy Special',
    category: 'Comedy',
    date: 'August 02, 2026',
    time: '10:00 PM',
    venue: 'Screen 2 (Vintage Hall)',
    desc: 'A laugh-out-loud indie mockumentary charting the hilarious mishaps of a local film crew trying to make a horror movie.',
    image: 'https://images.unsplash.com/photo-1585647347483-22b66260dfff?auto=format&fit=crop&w=800&q=80',
    price: '$13',
  },
  {
    id: 6,
    name: 'Cyber Horizon 2099',
    category: 'Action & Sci-Fi',
    date: 'August 10 - August 16, 2026',
    time: '9:00 PM',
    venue: 'Screen 1 (IMAX Showcase)',
    desc: 'A neon-soaked cyberpunk thriller detailing the final case of a detective hunting rogue synthetic androids in Neo-Chicago.',
    image: 'https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=800&q=80',
    price: '$16',
  },
];

export default function Events({ onBookEvent }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Action & Sci-Fi', 'Drama & Romance', 'Comedy', 'Classics', 'Kids Movies'];

  const filteredEvents = activeFilter === 'All'
    ? eventsData
    : eventsData.filter(event => event.category === activeFilter);

  const handleBookClick = (eventName) => {
    onBookEvent(eventName);
    const bookingSection = document.querySelector('#book-now');
    if (bookingSection) {
      window.scrollTo({
        top: bookingSection.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="events" className="relative py-24 bg-theatre-dark/95 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-theatre-green/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-theatre-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-theatre-gold font-semibold tracking-widest uppercase text-xs">
            Upcoming Movies
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white">
            Cinematic <br className="hidden sm:inline" />
            <span className="text-theatre-green">Experiences Await</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-theatre-gold to-theatre-green rounded-full mx-auto" />
          <p className="text-gray-400 text-base sm:text-lg font-sans font-light">
            Select your preferred genre and explore what's playing next on our premium screens.
          </p>
        </div>

        {/* Filters bar */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 border ${
                activeFilter === filter
                  ? 'bg-theatre-gold text-theatre-green-deep border-theatre-gold shadow-lg shadow-theatre-gold/15 scale-105'
                  : 'bg-theatre-green/10 text-gray-300 border-white/5 hover:border-theatre-green/30 hover:text-white'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredEvents.map((event) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={event.id}
                className="glass hover:glass-gold rounded-3xl overflow-hidden border border-white/5 hover:border-theatre-gold/20 flex flex-col h-full group transition-all duration-300 hover:shadow-xl hover:shadow-theatre-green-deep/20"
              >
                {/* Event Image & Tag */}
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-theatre-dark to-transparent z-10 opacity-70 group-hover:opacity-40 transition-opacity duration-300" />
                  <img
                    src={event.image}
                    alt={event.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Category Tag */}
                  <div className="absolute top-4 left-4 z-20 bg-theatre-green/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-theatre-green/30 text-white text-xs font-bold uppercase tracking-wider flex items-center space-x-1.5 shadow-md">
                    <Tag className="w-3.5 h-3.5 text-theatre-gold" />
                    <span>{event.category}</span>
                  </div>

                  {/* Price Tag */}
                  <div className="absolute bottom-4 right-4 z-20 bg-theatre-gold text-theatre-green-deep px-3 py-1.5 rounded-xl font-bold font-sans text-sm shadow-md">
                    {event.price}
                  </div>
                </div>

                {/* Event Details Content */}
                <div className="p-6 sm:p-8 flex flex-col flex-grow space-y-4">
                  <h3 className="font-serif text-2xl font-bold text-white group-hover:text-theatre-gold transition-colors duration-300 leading-tight">
                    {event.name}
                  </h3>
                  
                  <p className="text-sm text-gray-400 leading-relaxed font-sans font-light line-clamp-3">
                    {event.desc}
                  </p>

                  <div className="w-full h-px bg-white/5" />

                  {/* Info Strips */}
                  <div className="space-y-2.5 text-sm text-gray-300">
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-4.5 h-4.5 text-theatre-gold/80" />
                      <span className="font-sans font-light text-xs sm:text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-4.5 h-4.5 text-theatre-gold/80" />
                      <span className="font-sans font-light text-xs sm:text-sm">{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-4.5 h-4.5 text-theatre-gold/80" />
                      <span className="font-sans font-light text-xs sm:text-sm">{event.venue}</span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="pt-4 mt-auto">
                    <button
                      onClick={() => handleBookClick(event.name)}
                      className="w-full bg-theatre-green hover:bg-theatre-green-dark text-white hover:text-theatre-gold px-5 py-3 rounded-2xl font-semibold text-sm shadow-md hover:shadow-lg hover:shadow-theatre-green/20 border border-theatre-green/20 hover:border-theatre-gold/20 flex items-center justify-center space-x-2 transition-all duration-300 group-hover:scale-[1.02]"
                    >
                      <span>Book Ticket</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
