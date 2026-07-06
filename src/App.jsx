import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import BookingProcess from './components/BookingProcess';
import Events from './components/Events';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import BookNow from './components/BookNow';
import TermsAndConditions from './components/TermsAndConditions';
import Footer from './components/Footer';
import { Ticket, ArrowUp } from 'lucide-react';

function AppContent() {
  const [selectedEvent, setSelectedEvent] = useState('');
  const [loading, setLoading] = useState(true);
  const [pageLoading, setPageLoading] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isInitialMount = useRef(true);

  // preloader curtain timeout - runs once per session to prevent showing on refresh
  useEffect(() => {
    const hasLoadedBefore = sessionStorage.getItem('hasLoadedBefore');
    if (hasLoadedBefore) {
      setLoading(false);
    } else {
      const timer = setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem('hasLoadedBefore', 'true');
      }, 2300);
      return () => clearTimeout(timer);
    }
  }, []);

  // scroll listener for scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Trigger page transition loader on path changes
  useEffect(() => {
    if (loading) return; // Skip showing transition loader during initial preloader
    
    // Skip transition loader on initial mount/refresh
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    
    setPageLoading(true);
    window.scrollTo(0, 0);
    const timer = setTimeout(() => {
      setPageLoading(false);
    }, 850);
    return () => clearTimeout(timer);
  }, [location.pathname, loading]);

  const handleBookEvent = (eventName) => {
    setSelectedEvent(eventName);
    navigate('/contact');
  };

  const handleClearSelectedEvent = () => {
    setSelectedEvent('');
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
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

            {/* Loading text/logo in center */}
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
                The Tiny<span className="text-theatre-gold italic font-normal lowercase">Theatre</span>
              </h2>
              <div className="w-16 h-0.5 bg-theatre-gold/50 rounded-full mx-auto" />
              <p className="text-xs text-gray-400 font-sans tracking-widest uppercase">Opening Curtains...</p>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>

      {/* Page transition loader */}
      <AnimatePresence>
        {pageLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-theatre-dark/95 backdrop-blur-md"
          >
            <div className="text-center space-y-4">
              <div className="inline-flex p-4 bg-theatre-grey/15 rounded-2xl border border-theatre-grey/25 shadow-lg shadow-theatre-gold/5">
                <Ticket className="w-10 h-10 text-theatre-gold animate-spin" />
              </div>
              <div className="w-10 h-0.5 bg-theatre-gold/40 rounded-full mx-auto" />
              <p className="text-[10px] text-gray-400 font-sans tracking-widest uppercase font-semibold">The Tiny Theatre...</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Website Sections */}
      <Navbar />
      
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About preview={true} onViewMore={() => navigate('/about')} />
              <WhyChooseUs preview={true} onViewMore={() => navigate('/why-choose-us')} />
              <BookingProcess preview={true} onViewMore={() => navigate('/booking-process')} />
              <Events preview={true} onViewMore={() => navigate('/packages')} onBookEvent={handleBookEvent} />
              <Gallery preview={true} onViewMore={() => navigate('/gallery')} />
              <Testimonials />
              <TermsAndConditions />
            </>
          } />
          
          <Route path="/about" element={
            <div className="pt-20">
              <About preview={false} />
            </div>
          } />

          <Route path="/why-choose-us" element={
            <div className="pt-20">
              <WhyChooseUs preview={false} />
            </div>
          } />

          <Route path="/booking-process" element={
            <div className="pt-20">
              <BookingProcess preview={false} />
            </div>
          } />

          <Route path="/packages" element={
            <div className="pt-20">
              <Events preview={false} onBookEvent={handleBookEvent} />
            </div>
          } />

          <Route path="/gallery" element={
            <div className="pt-20">
              <Gallery preview={false} />
            </div>
          } />

          <Route path="/terms-and-conditions" element={
            <div className="pt-20">
              <TermsAndConditions />
            </div>
          } />

          <Route path="/contact" element={
            <div className="pt-20">
              <BookNow selectedEventName={selectedEvent} clearSelectedEvent={handleClearSelectedEvent} />
            </div>
          } />
        </Routes>
      </main>

      <Footer />

      {/* Floating Arrow Go to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-40 p-4 bg-theatre-gold hover:bg-theatre-gold-light text-theatre-grey-deep rounded-full shadow-lg shadow-theatre-gold/20 hover:scale-110 transition-all duration-300 border border-theatre-gold/10 cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
