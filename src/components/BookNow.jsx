import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Ticket, Calendar, User, Mail, Phone, MessageSquare, AlertCircle, CheckCircle2, Armchair, Sparkles, Printer } from 'lucide-react';
import confetti from 'canvas-confetti';
import { eventsData } from './Events';

export default function BookNow({ selectedEventName, clearSelectedEvent }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    event: '',
    ticketsCount: 1,
    preferredDate: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [isBooked, setIsBooked] = useState(false);
  const [isSelectingSeats, setIsSelectingSeats] = useState(false);

  // Sync pre-selected event from parent
  useEffect(() => {
    if (selectedEventName) {
      setFormData((prev) => ({ ...prev, event: selectedEventName }));
      setFormData((prev) => ({ ...prev, preferredDate: '2026-07-15' })); // Dummy standard date matching
    }
  }, [selectedEventName]);

  // Seating map rows (5 rows, 6 columns = 30 seats)
  const rows = ['A', 'B', 'C', 'D', 'E'];
  const cols = [1, 2, 3, 4, 5, 6];
  
  // Simulated booked seats
  const blockedSeats = ['A3', 'A4', 'C2', 'C3', 'E5'];

  const handleSeatClick = (seatCode) => {
    if (blockedSeats.includes(seatCode)) return;

    if (selectedSeats.includes(seatCode)) {
      setSelectedSeats(prev => prev.filter(s => s !== seatCode));
    } else {
      // Limit selection to guest count
      if (selectedSeats.length < formData.ticketsCount) {
        setSelectedSeats(prev => [...prev, seatCode]);
      } else {
        // Swap last selected seat
        setSelectedSeats(prev => [...prev.slice(1), seatCode]);
      }
    }
  };

  const validateForm = () => {
    const tempErrors = {};
    if (!formData.fullName.trim()) tempErrors.fullName = 'Full Name is required.';
    
    if (!formData.email.trim()) {
      tempErrors.email = 'Email address is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please provide a valid email.';
    }

    if (!formData.phone.trim()) {
      tempErrors.phone = 'Phone number is required.';
    } else if (!/^\+?[0-9\s-]{10,15}$/.test(formData.phone)) {
      tempErrors.phone = 'Please enter a valid phone number (min 10 digits).';
    }

    if (!formData.event) tempErrors.event = 'Please select a package.';
    if (!formData.preferredDate) tempErrors.preferredDate = 'Please select a date.';
    
    if (selectedSeats.length !== Number(formData.ticketsCount)) {
      tempErrors.seats = `Please select exactly ${formData.ticketsCount} recliner(s). Current selected: ${selectedSeats.length}`;
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsBooked(true);
      
      // Trigger full confetti celebratory effect
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#0F8B6D', '#F4C430', '#FFFFFF']
      });
    } else {
      // Scroll to seat map if seats error exists
      if (!isSelectingSeats && selectedSeats.length !== Number(formData.ticketsCount)) {
        setIsSelectingSeats(true);
      }
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      event: '',
      ticketsCount: 1,
      preferredDate: '',
      message: '',
    });
    setSelectedSeats([]);
    setErrors({});
    setIsBooked(false);
    setIsSelectingSeats(false);
    clearSelectedEvent();
  };

  return (
    <section id="book-now" className="relative py-24 bg-theatre-dark/95 overflow-hidden">
      {/* Background spotlights */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-theatre-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-theatre-gold font-semibold tracking-widest uppercase text-xs">
            Private Booking
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white">
            Secure Your <br className="hidden sm:inline" />
            <span className="text-theatre-green">Private Screening Slot</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-theatre-gold to-theatre-green rounded-full mx-auto" />
        </div>

        <AnimatePresence mode="wait">
          {!isBooked ? (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch"
            >
              
              {/* Left Column: Form Details (Col 1-7) */}
              <div className="lg:col-span-7 bg-theatre-green/5 backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-theatre-green/20 shadow-xl flex flex-col justify-between">
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Row 1: Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-300 block">Full Name</label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-gray-500" />
                        <input
                          type="text"
                          value={formData.fullName}
                          onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                          placeholder="John Doe"
                          className="w-full bg-theatre-dark/60 text-white pl-11 pr-4 py-3.5 rounded-2xl border border-white/10 focus:border-theatre-green focus:ring-1 focus:ring-theatre-green transition-all duration-300 text-sm placeholder:text-gray-600 outline-none"
                        />
                      </div>
                      {errors.fullName && (
                        <p className="text-red-400 text-xs flex items-center space-x-1 mt-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-300 block">Email Address</label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-gray-500" />
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          placeholder="johndoe@example.com"
                          className="w-full bg-theatre-dark/60 text-white pl-11 pr-4 py-3.5 rounded-2xl border border-white/10 focus:border-theatre-green focus:ring-1 focus:ring-theatre-green transition-all duration-300 text-sm placeholder:text-gray-600 outline-none"
                        />
                      </div>
                      {errors.email && (
                        <p className="text-red-400 text-xs flex items-center space-x-1 mt-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Phone & Guests Count */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-300 block">Phone Number</label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-gray-500" />
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          placeholder="+1 (555) 000-0000"
                          className="w-full bg-theatre-dark/60 text-white pl-11 pr-4 py-3.5 rounded-2xl border border-white/10 focus:border-theatre-green focus:ring-1 focus:ring-theatre-green transition-all duration-300 text-sm placeholder:text-gray-600 outline-none"
                        />
                      </div>
                      {errors.phone && (
                        <p className="text-red-400 text-xs flex items-center space-x-1 mt-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-300 block">Number of Guests</label>
                      <div className="relative">
                        <Ticket className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-gray-500" />
                        <select
                          value={formData.ticketsCount}
                          onChange={(e) => {
                            setFormData({...formData, ticketsCount: Number(e.target.value)});
                            setSelectedSeats([]); // reset seat selections
                          }}
                          className="w-full bg-theatre-dark/60 text-white pl-11 pr-4 py-3.5 rounded-2xl border border-white/10 focus:border-theatre-green focus:ring-1 focus:ring-theatre-green transition-all duration-300 text-sm outline-none appearance-none"
                        >
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(n => (
                            <option key={n} value={n} className="bg-theatre-dark text-white">{n} Guest{n > 1 ? 's' : ''}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Row 3: Package Selection & Date */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-300 block">Select Booking Package</label>
                      <select
                        value={formData.event}
                        onChange={(e) => setFormData({...formData, event: e.target.value})}
                        className="w-full bg-theatre-dark/60 text-white px-4 py-3.5 rounded-2xl border border-white/10 focus:border-theatre-green focus:ring-1 focus:ring-theatre-green transition-all duration-300 text-sm outline-none"
                      >
                        <option value="">-- Choose Package --</option>
                        {eventsData.map(ev => (
                          <option key={ev.id} value={ev.name} className="bg-theatre-dark text-white">{ev.name} ({ev.category})</option>
                        ))}
                      </select>
                      {errors.event && (
                        <p className="text-red-400 text-xs flex items-center space-x-1 mt-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.event}</span>
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-300 block">Preferred Date</label>
                      <div className="relative">
                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-gray-500 pointer-events-none" />
                        <input
                          type="date"
                          value={formData.preferredDate}
                          onChange={(e) => setFormData({...formData, preferredDate: e.target.value})}
                          min="2026-07-03"
                          className="w-full bg-theatre-dark/60 text-white pl-11 pr-4 py-3.5 rounded-2xl border border-white/10 focus:border-theatre-green focus:ring-1 focus:ring-theatre-green transition-all duration-300 text-sm outline-none"
                        />
                      </div>
                      {errors.preferredDate && (
                        <p className="text-red-400 text-xs flex items-center space-x-1 mt-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.preferredDate}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 4: Message */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-300 block">Special Request / Message (Optional)</label>
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-4.5 w-4.5 h-4.5 text-gray-500" />
                      <textarea
                        rows="3"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        placeholder="E.g., Special cake flavor, custom LED sign wordings, or proposal timing..."
                        className="w-full bg-theatre-dark/60 text-white pl-11 pr-4 py-3.5 rounded-2xl border border-white/10 focus:border-theatre-green focus:ring-1 focus:ring-theatre-green transition-all duration-300 text-sm placeholder:text-gray-600 outline-none resize-none"
                      />
                    </div>
                  </div>

                  {/* Submission buttons */}
                  <div className="pt-4 flex flex-col sm:flex-row gap-4">
                    <button
                      type="submit"
                      className="flex-1 bg-gradient-to-r from-theatre-gold to-theatre-gold-dark hover:from-theatre-gold-light hover:to-theatre-gold text-theatre-green-deep font-bold py-4 rounded-2xl shadow-lg hover:shadow-theatre-gold/20 flex items-center justify-center space-x-2 text-base transition-all duration-300 hover:scale-[1.01]"
                    >
                      <Ticket className="w-5 h-5 text-theatre-green-deep" />
                      <span>Confirm Private Booking</span>
                    </button>
                    
                    <button
                      type="button"
                      onClick={() => setIsSelectingSeats(!isSelectingSeats)}
                      className="bg-theatre-green/10 hover:bg-theatre-green/20 text-theatre-gold font-semibold py-4 px-6 rounded-2xl border border-theatre-green/20 hover:border-theatre-gold/30 flex items-center justify-center space-x-2 transition-all duration-300 text-sm"
                    >
                      <Armchair className="w-5 h-5" />
                      <span>{isSelectingSeats ? 'Hide Seats Map' : 'Show Seats Map'}</span>
                    </button>
                  </div>

                </form>
              </div>

              {/* Right Column: Seating Plan Selection (Col 8-12) */}
              <div className="lg:col-span-5 bg-theatre-green/5 backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-theatre-green/20 shadow-xl flex flex-col justify-between relative overflow-hidden">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-white mb-1">Private Theatre Seating Layout</h3>
                    <p className="text-xs text-gray-400 font-sans">
                      Select exactly {formData.ticketsCount} recliners for your guests.
                    </p>
                  </div>

                  {/* Screen Representation */}
                  <div className="relative pt-6 pb-2 text-center">
                    <div className="w-full h-2 bg-gradient-to-r from-transparent via-theatre-gold/60 to-transparent rounded-full shadow-lg shadow-theatre-gold/25" />
                    <span className="text-[10px] text-theatre-gold uppercase tracking-widest font-bold mt-1.5 block">
                      SCREEN VIEW
                    </span>
                  </div>

                  {/* Seats Grid */}
                  <div className="grid gap-3.5 max-w-sm mx-auto pt-4">
                    {rows.map((row) => (
                      <div key={row} className="flex items-center justify-center space-x-3.5">
                        <span className="w-5 text-center text-xs font-bold text-gray-500 font-serif">{row}</span>
                        <div className="flex space-x-2">
                          {cols.map((col) => {
                            const seatCode = `${row}${col}`;
                            const isBlocked = blockedSeats.includes(seatCode);
                            const isSelected = selectedSeats.includes(seatCode);
                            
                            return (
                              <button
                                key={seatCode}
                                type="button"
                                disabled={isBlocked}
                                onClick={() => handleSeatClick(seatCode)}
                                className={`w-8 h-8 rounded-lg flex items-center justify-center text-[10px] font-bold font-sans transition-all duration-300 ${
                                  isBlocked
                                    ? 'bg-red-950/40 text-red-700/30 border border-red-900/20 cursor-not-allowed'
                                    : isSelected
                                      ? 'bg-theatre-gold text-theatre-green-deep border border-theatre-gold shadow-md shadow-theatre-gold/30 hover:scale-105'
                                      : 'bg-theatre-dark/80 text-gray-400 hover:text-white border border-white/10 hover:border-theatre-green hover:bg-theatre-green/20'
                                }`}
                                title={isBlocked ? `Recliner ${seatCode} (Reserved)` : `Recliner ${seatCode}`}
                              >
                                {col}
                              </button>
                            );
                          })}
                        </div>
                        <span className="w-5 text-center text-xs font-bold text-gray-500 font-serif">{row}</span>
                      </div>
                    ))}
                  </div>

                  {/* Seating Legend */}
                  <div className="flex items-center justify-center space-x-6 text-xs text-gray-400 pt-6 border-t border-white/5">
                    <div className="flex items-center space-x-2">
                      <div className="w-3.5 h-3.5 bg-theatre-dark rounded border border-white/10" />
                      <span>Available</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3.5 h-3.5 bg-theatre-gold rounded" />
                      <span>Selected</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3.5 h-3.5 bg-red-950/40 rounded border border-red-900/20" />
                      <span>Reserved</span>
                    </div>
                  </div>

                  {/* Seat Error message */}
                  {errors.seats && (
                    <p className="text-red-400 text-xs text-center flex items-center justify-center space-x-1 mt-4">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.seats}</span>
                    </p>
                  )}
                </div>

                {/* Live Seating summary summary */}
                <div className="bg-theatre-green/10 border border-theatre-green/20 rounded-2xl p-4.5 mt-8 flex justify-between items-center">
                  <div>
                    <span className="text-[10px] text-gray-400 uppercase block tracking-wider font-semibold">Selected Recliners</span>
                    <span className="text-base font-bold text-theatre-gold font-serif">
                      {selectedSeats.length > 0 ? selectedSeats.sort().join(', ') : 'None'}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-gray-400 uppercase block tracking-wider font-semibold">Total Price</span>
                    <span className="text-base font-bold text-white">
                      ${formData.ticketsCount * (eventsData.find(e => e.name === formData.event)?.price.replace('$', '') || 30)}
                    </span>
                  </div>
                </div>

              </div>

            </motion.div>
          ) : (
            /* Golden Digital Ticket Printout SUCCESS STATE */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="max-w-2xl mx-auto"
            >
              <div className="bg-theatre-green/10 rounded-3xl p-6 sm:p-10 border border-theatre-gold/30 shadow-2xl relative overflow-hidden">
                {/* Visual sparkles overlay */}
                <div className="absolute top-0 right-0 p-4">
                  <Sparkles className="w-6 h-6 text-theatre-gold animate-bounce" />
                </div>
                
                {/* Top Ticket Header */}
                <div className="text-center space-y-3 pb-8 border-b-2 border-dashed border-white/10">
                  <div className="inline-flex p-3 bg-theatre-gold/10 text-theatre-gold rounded-full border border-theatre-gold/20 mb-2">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-3xl font-bold text-white">Booking Confirmed!</h3>
                  <p className="text-sm text-gray-300 font-sans max-w-md mx-auto">
                    Your private screen slot is reserved. Please show this digital card when arriving at the venue.
                  </p>
                </div>

                {/* Digital Ticket Representation */}
                <div className="bg-theatre-dark/90 rounded-2xl p-6 border border-theatre-green/20 relative my-8 shadow-inner">
                  {/* Decorative cutouts at the left and right sides of ticket split line */}
                  <div className="absolute top-1/2 -left-3 w-6 h-6 bg-theatre-dark border-r border-theatre-green/20 rounded-full -translate-y-1/2 z-10" />
                  <div className="absolute top-1/2 -right-3 w-6 h-6 bg-theatre-dark border-l border-theatre-green/20 rounded-full -translate-y-1/2 z-10" />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-6 border-b border-white/5">
                    <div>
                      <span className="text-[10px] text-gray-500 uppercase tracking-widest block font-bold mb-1">BOOKING PACKAGE</span>
                      <span className="text-lg font-serif font-bold text-white">{formData.event}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-gray-500 uppercase tracking-widest block font-bold mb-1">GUEST NAME</span>
                      <span className="text-lg font-sans font-semibold text-theatre-gold">{formData.fullName}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6">
                    <div>
                      <span className="text-[10px] text-gray-500 uppercase tracking-widest block font-bold mb-1">DATE</span>
                      <span className="text-sm font-sans font-semibold text-white">{formData.preferredDate}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-gray-500 uppercase tracking-widest block font-bold mb-1">TIME SLOT</span>
                      <span className="text-sm font-sans font-semibold text-white">
                        {eventsData.find(e => e.name === formData.event)?.time || '3-Hour Slot'}
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] text-gray-500 uppercase tracking-widest block font-bold mb-1">RECLINERS</span>
                      <span className="text-sm font-serif font-bold text-theatre-gold">{selectedSeats.sort().join(', ')}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-gray-500 uppercase tracking-widest block font-bold mb-1">GUESTS</span>
                      <span className="text-sm font-sans font-semibold text-white">{formData.ticketsCount} Guest(s)</span>
                    </div>
                  </div>

                  {/* QR Code Placeholder Representation */}
                  <div className="mt-8 flex flex-col items-center justify-center space-y-3 pt-6 border-t border-white/5">
                    <div className="w-28 h-28 bg-white p-2 rounded-xl border border-gray-200 shadow-lg flex items-center justify-center">
                      <div className="grid grid-cols-4 gap-1 w-full h-full opacity-80">
                        {[...Array(16)].map((_, i) => (
                          <div 
                            key={i} 
                            className={`rounded-sm ${
                              (i % 3 === 0 || i === 7 || i === 11 || i === 14) ? 'bg-theatre-green-deep' : 'bg-transparent'
                            }`} 
                          />
                        ))}
                      </div>
                    </div>
                    <span className="text-[10px] text-gray-400 font-sans tracking-widest font-medium select-all uppercase">
                      ID: TT-{Math.floor(100000 + Math.random() * 900000)}
                    </span>
                  </div>
                </div>

                {/* Bottom Receipt actions */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => window.print()}
                    className="bg-theatre-green hover:bg-theatre-green-dark text-white px-6 py-3.5 rounded-2xl font-semibold text-sm shadow-md hover:shadow-lg flex items-center justify-center space-x-2 transition-all duration-300 border border-theatre-green/20 hover:scale-[1.02]"
                  >
                    <Printer className="w-4.5 h-4.5" />
                    <span>Print Booking Pass</span>
                  </button>
                  <button
                    onClick={handleReset}
                    className="bg-transparent hover:bg-white/5 text-gray-300 hover:text-white px-6 py-3.5 rounded-2xl font-semibold text-sm transition-all duration-300 border border-white/10 flex items-center justify-center"
                  >
                    <span>Book Another Slot</span>
                  </button>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
