import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import { AnimatedText } from './AnimatedText';
import { Magnetic } from './Magnetic';

import { projectsData } from '../data/projects';

// Extract slides dynamically from the centralized projects data
const slides = projectsData
  .filter((p) => p.featured)
  .map((p, idx) => ({
    image: p.image,
    title: p.title,
    location: p.location,
    structure: p.structure,
    category: `${p.category} ${p.category === 'Interior' ? 'Design' : 'Project'}`,
    num: String(idx + 1).padStart(2, '0')
  }));

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const mouseX = useSpring(0, { damping: 20 });
  const mouseY = useSpring(0, { damping: 20 });
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set((clientX / innerWidth - 0.5) * 50);
      mouseY.set((clientY / innerHeight - 0.5) * 50);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Update slide every 6 seconds, and reset timer automatically if slide is changed manually
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [activeSlide]);

  const rawY = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const y = useSpring(rawY, { damping: 35, stiffness: 60 });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const rawScale = useTransform(scrollYProgress, [0, 1], [1, 1.02]);
  const scale = useSpring(rawScale, { damping: 35, stiffness: 60 });
  const rawBlur = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const blur = useSpring(rawBlur, { damping: 35, stiffness: 60 });
  const lineY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const iconRotate = useTransform(mouseX, [-50, 50], [-5, 5]);

  // Dual Parallax calculation for inner image motion
  const rawImgY = useTransform(scrollYProgress, [0, 1], [-40, 45]);
  const imgY = useSpring(rawImgY, { damping: 35, stiffness: 60 });

  return (
    <section ref={containerRef} className="relative min-h-screen lg:h-[110vh] overflow-hidden flex items-center px-6 sm:px-12 md:px-16 bg-luxury-black py-24 lg:py-0">
      {/* Dynamic Blueprint Grid */}
      <motion.div 
        style={{ x: mouseX, y: mouseY }}
        className="absolute inset-0 z-0 blueprint-grid opacity-20 pointer-events-none" 
      />

      <div className="max-w-screen-2xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 pt-36 lg:pt-28">
        <div className="lg:col-span-7 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center space-x-6 mb-8 group cursor-default">
              <motion.div 
                animate={{ width: [0, 48] }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-[1px] bg-gold"
              />
              <span className="text-[10px] uppercase tracking-[0.5em] text-gold font-medium">Est. 2025</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[100px] xl:text-[120px] font-serif leading-[0.9] text-white tracking-tighter mb-10 italic font-light perspective-1000 relative overflow-visible py-2">
              <div className="relative overflow-visible">
                <AnimatedText text="Shaping" className="block" />
              </div>
              <div className="not-italic flex flex-wrap items-baseline relative overflow-visible mt-2">
                <AnimatedText text="better" className="text-luxury-grey" delay={0.2} />
                <motion.span 
                  initial={{ opacity: 0, y: 100, skewY: 10 }}
                  whileInView={{ opacity: 1, y: 0, skewY: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.4, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  className="text-gold ml-4 font-serif italic whitespace-nowrap inline-block"
                >
                  Spaces
                </motion.span>
              </div>
              
              {/* Corner Drafting Accents */}
              <motion.div 
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute -top-4 -left-4 w-4 h-4 border-t border-l border-gold/30"
              />
            </h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="max-w-md text-sm text-dim-grey leading-relaxed font-light mb-12"
            >
              Architecture is more than constructing buildings-it's about creating places where people live, work, and connect. We combine creativity, technical expertise, and attention to detail to deliver thoughtful design solutions.
            </motion.p>

            <div className="flex items-center">
              <Magnetic strength={0.4}>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-10 py-5 border border-white/20 text-[10px] uppercase tracking-[0.3em] font-medium hover:bg-white hover:text-luxury-black transition-all duration-500 group flex items-center bg-luxury-black cursor-pointer"
                >
                  Explore Work
                  <span className="ml-4 group-hover:translate-x-1 transition-transform">→</span>
                </motion.button>
              </Magnetic>
            </div>
          </motion.div>
        </div>

        <div className="lg:col-span-5 relative flex flex-col justify-center">
          <motion.div 
            className="relative w-full aspect-[4/5] bg-neutral-900 border border-white/10 overflow-hidden shadow-2xl group cursor-pointer"
            style={{ y, scale, filter: `blur(${blur}px)` }}
            onClick={() => setActiveSlide((prev) => (prev + 1) % slides.length)}
          >
             {/* Architectural Wireframe Overlay shifting with mouse */}
             <motion.div 
                style={{ rotate: iconRotate }}
                className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none z-10"
              >
                 <svg width="400" height="400" viewBox="0 0 100 100" fill="none" stroke="white" strokeWidth="0.2">
                   <rect x="5" y="5" width="90" height="90" />
                   <path d="M5 5 L95 95 M95 5 L5 95" />
                   <circle cx="50" cy="50" r="40" />
                   <motion.path 
                     d="M30 30 L70 30 L70 70 L30 70 Z" 
                     animate={{ scale: [1, 1.1, 1] }} 
                     transition={{ repeat: Infinity, duration: 4 }}
                   />
                 </svg>
              </motion.div>

              <AnimatePresence>
                <motion.div
                  key={activeSlide}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 0.9, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 overflow-hidden"
                >
                  <motion.img 
                    src={slides[activeSlide].image} 
                    alt={slides[activeSlide].title} 
                    style={{ y: imgY, scale: 1.12 }}
                    className="absolute inset-0 w-full h-[120%] object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-115"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent pointer-events-none" />
                  
                  <div className="absolute bottom-8 left-8 right-8 z-20">
                     <motion.span 
                       initial={{ opacity: 0, y: 15 }}
                       animate={{ opacity: 1, y: 0 }}
                       transition={{ delay: 0.15, duration: 0.6 }}
                       className="text-[9px] uppercase tracking-[0.4em] text-gold mb-2 block font-bold"
                     >
                       {slides[activeSlide].category}
                     </motion.span>
                     <motion.h3 
                       initial={{ opacity: 0, y: 20 }}
                       animate={{ opacity: 1, y: 0 }}
                       transition={{ delay: 0.25, duration: 0.6 }}
                       className="text-2xl sm:text-3xl font-serif text-white mb-4 group-hover:text-gold transition-colors"
                     >
                       {slides[activeSlide].title}
                     </motion.h3>
                     <div className="flex justify-between items-end">
                        <motion.p 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.35, duration: 0.6 }}
                          className="text-[10px] text-white/60 leading-tight"
                        >
                          {slides[activeSlide].location}<br/>Structure: {slides[activeSlide].structure}
                        </motion.p>
                        <motion.span 
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 0.4, scale: 1 }}
                          transition={{ delay: 0.35, duration: 0.6 }}
                          className="text-2xl font-light text-white"
                        >
                          {slides[activeSlide].num}
                        </motion.span>
                     </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Decorative blueprint lines */}
              <div className="absolute top-0 right-0 w-24 h-24 border-t border-r border-[#C5A059]/40 z-20 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-24 h-24 border-b border-l border-white/20 z-20 pointer-events-none" />
          </motion.div>

          {/* Architectural Control Deck */}
          <div className="mt-6 flex flex-row items-center justify-between w-full font-sans gap-4 relative z-20">
            <div className="flex items-center space-x-4 text-[10px] tracking-widest text-[#C5A059] font-medium uppercase select-none">
              <span className="font-mono text-white/30">[{slides[activeSlide].num}</span>
              <div className="w-20 sm:w-28 h-[1px] bg-white/10 relative overflow-hidden">
                <motion.div 
                  key={activeSlide}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 6, ease: "linear" }}
                  className="absolute top-0 left-0 w-full h-full bg-gold origin-left"
                />
              </div>
              <span className="font-mono text-white/30">0{slides.length}]</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
                }}
                className="focus:outline-none group px-3.5 py-2 border border-white/5 hover:border-gold/30 hover:bg-gold/5 bg-transparent transition-all duration-300 cursor-pointer text-[9px] tracking-widest uppercase font-mono text-white/40 hover:text-white"
                aria-label="Previous Project"
              >
                <span className="group-hover:-translate-x-1 inline-block transition-transform duration-300">←</span> PREV
              </button>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  setActiveSlide((prev) => (prev + 1) % slides.length);
                }}
                className="focus:outline-none group px-3.5 py-2 border border-white/5 hover:border-gold/30 hover:bg-gold/5 bg-transparent transition-all duration-300 cursor-pointer text-[9px] tracking-widest uppercase font-mono text-white/40 hover:text-white"
                aria-label="Next Project"
              >
                NEXT <span className="group-hover:translate-x-1 inline-block transition-transform duration-300">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Rail Text */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 origin-right rotate-90 flex items-center space-x-6 opacity-20 pointer-events-none">
        <span className="text-[9px] uppercase tracking-[0.8em] whitespace-nowrap font-light text-white">Symmetry • Balance • Geometry</span>
        <div className="w-24 h-[1px] bg-white"></div>
      </div>

      <motion.div 
         className="absolute bottom-8 left-6 sm:left-12 hidden sm:flex flex-col items-center space-y-4 z-30 pointer-events-none"
         style={{ opacity }}
      >
         <div className="w-[1px] h-16 bg-white/10 overflow-hidden relative">
            <motion.div 
               className="absolute top-0 left-0 w-full h-full bg-gold"
               animate={{ y: ['-100%', '100%'] }}
               transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
            />
         </div>
         <span className="text-[9px] tracking-[0.4em] uppercase text-white/50 [writing-mode:vertical-lr] font-medium">Scroll to explore</span>
      </motion.div>
    </section>
  );
};
