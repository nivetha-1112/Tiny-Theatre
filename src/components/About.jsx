import React from 'react';
import { motion } from 'framer-motion';
import { Award, Compass, Star, Users, Target, Eye } from 'lucide-react';
import aboutImg from '../assets/about.jpg';

export default function About() {
  const stats = [
    { label: 'Performances Hosted', value: '450+', icon: Award },
    { label: 'Happy Visitors', value: '85k+', icon: Users },
    { label: 'Events Conducted', value: '120+', icon: Compass },
    { label: 'Years of Experience', value: '12+', icon: Star },
  ];

  return (
    <section id="about" className="relative py-28 bg-gradient-to-b from-theatre-dark to-theatre-dark/95 overflow-hidden">
      {/* Premium ambient glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-theatre-green/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-theatre-gold/5 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Content Column (Col 1-7) */}
          <div className="lg:col-span-7 space-y-10">
            
            {/* Header */}
            <div className="space-y-4">
              <span className="text-theatre-gold font-semibold tracking-widest uppercase text-xs sm:text-sm block">
                About Tiny Theatre
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Intimate Space, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-theatre-green-light to-theatre-green text-shadow-green">
                  Infinite Stories
                </span>
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-theatre-gold via-theatre-green to-transparent rounded-full" />
            </div>

            {/* Description Paragraphs */}
            <div className="text-gray-300 space-y-6 text-base sm:text-lg leading-relaxed font-sans font-light">
              <p>
                Founded on the belief that great art thrives in close quarters, 
                <strong className="text-white font-medium"> Tiny Theatre</strong> has been a cornerstone of theatrical innovation 
                and family-friendly entertainment for over a decade. We specialize in bringing 
                immersive, professional-grade performances to a cozy and inviting stage.
              </p>
             
            </div>

            {/* Mission & Vision cards - Redesigned with premium glassmorphism and icons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <motion.div 
                whileHover={{ y: -5 }}
                className="glass p-6 rounded-3xl border border-theatre-green/20 relative overflow-hidden group shadow-md hover:shadow-theatre-green-deep/30 transition-all duration-300"
              >
                <div className="absolute top-0 left-0 w-1.5 h-full bg-theatre-green" />
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 bg-theatre-green/10 text-theatre-green rounded-xl group-hover:bg-theatre-green/20 transition-all duration-300">
                    <Target className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-white group-hover:text-theatre-gold transition-colors duration-300">
                    Our Mission
                  </h4>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed font-sans font-light">
                  To craft professional-grade, accessible performance art that ignites curiosity, builds community, and inspires children and families.
                </p>
              </motion.div>

              <motion.div 
                whileHover={{ y: -5 }}
                className="glass p-6 rounded-3xl border border-theatre-green/20 relative overflow-hidden group shadow-md hover:shadow-theatre-gold/25 transition-all duration-300"
              >
                <div className="absolute top-0 left-0 w-1.5 h-full bg-theatre-gold" />
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 bg-theatre-gold/10 text-theatre-gold rounded-xl group-hover:bg-theatre-gold/20 transition-all duration-300">
                    <Eye className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-white group-hover:text-theatre-green transition-colors duration-300">
                    Our Vision
                  </h4>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed font-sans font-light">
                  To be the region's premiere intimate stage, fostering local creative talents while offering high-quality, unforgettable experiences.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Right Side: Visual Collage Card (Col 8-12) */}
          <div className="lg:col-span-5 relative mt-10 lg:mt-0">
            {/* The Main Image Frame with glow and hover animation */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
              className="relative z-10 rounded-[32px] overflow-hidden shadow-2xl border border-theatre-green/20 group cursor-default"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-theatre-dark/70 via-transparent to-transparent z-10 transition-opacity duration-500 group-hover:opacity-40" />
              <img
                src={aboutImg}
                alt="Tiny Theatre Hall Microphone"
                className="w-full h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Badge overlay on image */}
              <div className="absolute bottom-6 left-6 z-20 bg-theatre-dark/80 backdrop-blur-md border border-white/10 px-4 py-2.5 rounded-2xl flex items-center space-x-2">
                <Star className="w-4 h-4 text-theatre-gold fill-current" />
                <span className="text-xs font-semibold text-white tracking-wide uppercase">Est. 2014</span>
              </div>
            </motion.div>
            
            {/* Visual overlapping gold & green frames behind main image */}
            <div className="absolute -top-5 -right-5 bottom-5 left-5 border border-theatre-gold/30 rounded-[32px] -z-0 pointer-events-none transition-transform duration-500 hover:scale-105" />
            <div className="absolute top-5 -left-5 -bottom-5 right-5 bg-theatre-green/5 rounded-[32px] -z-0 pointer-events-none" />
          </div>

        </div>

        {/* Stats Strip - Grid counter section at bottom */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-24">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="glass-gold hover:glass p-6 sm:p-8 rounded-3xl border border-white/5 hover:border-theatre-gold/20 text-center flex flex-col items-center group transition-all duration-300"
              >
                <div className="p-3 bg-theatre-green/10 rounded-2xl group-hover:bg-theatre-gold/15 transition-all duration-300 text-theatre-green group-hover:text-theatre-gold mb-4 border border-theatre-green/10 group-hover:border-theatre-gold/10">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-2 group-hover:text-theatre-gold transition-colors duration-300">
                  {stat.value}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 font-sans tracking-wide uppercase font-medium">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
