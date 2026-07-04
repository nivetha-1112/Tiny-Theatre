import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import BookingProcess from './components/BookingProcess';
import Events from './components/Events';
import Gallery from './components/Gallery';
import BookNow from './components/BookNow';
import Footer from './components/Footer';
import { Ticket } from 'lucide-react';

export default function App() {
  const [selectedEvent, setSelectedEvent] = useState('');
  const [loading, setLoading] = useState(true);

  // preloader curtain timeout
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2300);
    return () => clearTimeout(timer);
  }, []);

  const handleBookEvent = (eventName) => {
    setSelectedEvent(eventName);
  };

  const handleClearSelectedEvent = () => {
    setSelectedEvent('');
  };

  return (
    <div className="bg-theatre-dark text-white font-sans overflow-x-hidden min-h-screen relative selection:bg-theatre-gold selection:text-theatre-grey-deep">
      
      {/* Curtain Preloader */}
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1, delay: 2.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
          >
            {/* Left Curtain */}
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: '-100%' }}
              transition={{ duration: 1.0, delay: 1.2, ease: [0.77, 0, 0.175, 1] }}
              className="absolute top-0 bottom-0 left-0 w-1/2 bg-theatre-grey-deep flex justify-end items-center"
              style={{
                backgroundImage: 'radial-gradient(circle at 100% 50%, rgba(123, 132, 145, 0.15) 0%, transparent 60%)',
              }}
            />

            {/* Right Curtain */}
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: '100%' }}
              transition={{ duration: 1.0, delay: 1.2, ease: [0.77, 0, 0.175, 1] }}
              className="absolute top-0 bottom-0 right-0 w-1/2 bg-theatre-grey-deep flex justify-start items-center"
              style={{
                backgroundImage: 'radial-gradient(circle at 0% 50%, rgba(123, 132, 145, 0.15) 0%, transparent 60%)',
              }}
            />

            {/* Loading text/logo in center - Fades out completely before curtains start to split open */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: [0, 1, 1, 0], scale: [0.95, 1, 1, 0.95] }}
              transition={{ duration: 1.2, times: [0, 0.25, 0.75, 1], ease: 'easeInOut' }}
              className="relative z-50 text-center space-y-4 px-4"
            >
              <div className="inline-flex p-4 bg-theatre-grey/20 rounded-2xl border border-theatre-grey/30 shadow-lg shadow-theatre-gold/10">
                <Ticket className="w-12 h-12 text-theatre-gold animate-pulse" />
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-widest text-white uppercase">
                Tiny<span className="text-theatre-gold italic font-normal lowercase">Theatre</span>
              </h2>
              <div className="w-16 h-0.5 bg-theatre-gold/50 rounded-full mx-auto" />
              <p className="text-xs text-gray-400 font-sans tracking-widest uppercase">Opening Curtains...</p>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Website Sections (Visible after/during curtain lift) */}
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <WhyChooseUs />
        <BookingProcess />
        <Events onBookEvent={handleBookEvent} />
        <Gallery />
        <BookNow selectedEventName={selectedEvent} clearSelectedEvent={handleClearSelectedEvent} />
      </main>

      <Footer />
    </div>
  );
}
