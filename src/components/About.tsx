import React from 'react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';
import { AnimatedText } from './AnimatedText';

export const About: React.FC = () => {
  const stats = [
    { label: "Completed Works", value: "20+" },
    { label: "Ongoing Projects", value: "15+" }
  ];

  return (
    <section id="about" className="py-24 sm:py-32 px-6 sm:px-12 md:px-16 bg-luxury-black relative overflow-hidden border-t border-white/5 font-sans">
      {/* Background blueprint decorative lines */}
      <div className="absolute inset-0 blueprint-grid opacity-20 pointer-events-none" />
      
      {/* Seamless high-speed looping text marquee */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full overflow-hidden pointer-events-none select-none z-0 opacity-[0.03]">
        <div className="flex whitespace-nowrap">
          <motion.div 
            animate={{ x: [0, '-50%'] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            className="text-7xl sm:text-8xl md:text-[110px] lg:text-[140px] xl:text-[180px] font-serif text-white font-bold uppercase tracking-widest flex items-center shrink-0"
          >
            <span className="mr-24">HIMAL GAIRE x AAKAR DESIGN STUDIO &nbsp;•&nbsp;</span>
            <span className="mr-24">HIMAL GAIRE x AAKAR DESIGN STUDIO &nbsp;•&nbsp;</span>
            <span className="mr-24">HIMAL GAIRE x AAKAR DESIGN STUDIO &nbsp;•&nbsp;</span>
            <span className="mr-24">HIMAL GAIRE x AAKAR DESIGN STUDIO &nbsp;•&nbsp;</span>
          </motion.div>
          <motion.div 
            animate={{ x: [0, '-50%'] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            className="text-7xl sm:text-8xl md:text-[110px] lg:text-[140px] xl:text-[180px] font-serif text-white font-bold uppercase tracking-widest flex items-center shrink-0"
          >
            <span className="mr-24">HIMAL GAIRE x AAKAR DESIGN STUDIO &nbsp;•&nbsp;</span>
            <span className="mr-24">HIMAL GAIRE x AAKAR DESIGN STUDIO &nbsp;•&nbsp;</span>
            <span className="mr-24">HIMAL GAIRE x AAKAR DESIGN STUDIO &nbsp;•&nbsp;</span>
            <span className="mr-24">HIMAL GAIRE x AAKAR DESIGN STUDIO &nbsp;•&nbsp;</span>
          </motion.div>
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="aspect-[3/4] bg-neutral-900 relative overflow-hidden group border border-white/10"
            >
              {/* CUSTOMIZATION TIP: To add your own photo here, place your image (e.g. about_studio.jpg) in the "public" folder and set src="/about_studio.jpg" */}
              <motion.img 
                 whileHover={{ scale: 1.15 }}
                 transition={{ duration: 1.2 }}
                 src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&q=80&w=2071" 
                 alt="Our Studio" 
                 referrerPolicy="no-referrer"
                 className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
              />
              
              {/* Architectural Scanning Line */}
              <motion.div 
                initial={{ top: '100%' }}
                whileInView={{ top: ['100%', '0%', '100%'] }}
                viewport={{ once: false }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                className="absolute left-0 right-0 h-[1px] bg-gold/40 z-10 shadow-[0_0_15px_rgba(197,160,89,0.5)]"
              />

              <div className="absolute -bottom-8 -right-8 w-64 h-64 border border-gold/30 rounded-full flex items-center justify-center p-12 text-center bg-luxury-black/80 backdrop-blur-md z-20 overflow-hidden">
                 {/* Decorative measurement circle */}
                 <motion.div 
                   animate={{ rotate: 360 }}
                   transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                   className="absolute inset-0 border-[0.5px] border-dashed border-gold/20 rounded-full"
                 />
                 <p className="text-[10px] leading-relaxed tracking-widest uppercase font-serif italic text-luxury-grey relative z-10">
                   "Building should speak of its time and place, but yearn for timelessness."
                 </p>
              </div>
            </motion.div>
            
            {/* Structural Dimension Markers */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              className="absolute -left-12 top-0 bottom-0 flex flex-col justify-between py-10"
            >
               <span className="text-[6px] tracking-tighter text-white/20 whitespace-nowrap rotate-90">EXTERIOR_01</span>
               <div className="w-[1px] flex-grow bg-white/5 mx-auto my-4" />
               <span className="text-[6px] tracking-tighter text-white/20 whitespace-nowrap rotate-90">GROUND_LEVEL</span>
            </motion.div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="max-w-2xl">
              <div className="flex items-center space-x-6 mb-8">
                <div className="w-12 h-[1px] bg-gold"></div>
                <span className="text-[10px] uppercase tracking-[0.5em] text-gold font-medium">Philosophy</span>
              </div>

              <h2 className="text-6xl md:text-8xl font-serif text-white mb-12 tracking-tighter leading-[0.9] italic font-light overflow-visible py-2">
                <motion.span 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
                  className="block overflow-visible"
                >
                  Sculpting <span className="not-italic text-gold italic">Tomorrow's</span> Legacy.
                </motion.span>
              </h2>
              
              <p className="text-dim-grey text-lg leading-relaxed font-light mb-16 max-w-xl">
                  Founded in Tilottama, Aakar evolved from a small collective of dreamers to a pioneering architecture powerhouse. We believe that a building should not just stand, but speak to its environment and the souls within.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.2 }}
                  className="space-y-6 group"
                >
                   <h3 className="text-xl font-serif flex items-center space-x-4 italic text-white group-hover:text-gold transition-colors">
                     <div className="w-8 h-[1px] bg-gold/30" />
                     <span>Geometric Unity</span>
                   </h3>
                  <p className="text-dim-grey text-sm leading-relaxed font-light">
                     Every project begins with a deep study of mathematical harmony. We look for the patterns hidden in the landscape to inform our structural decisions.
                  </p>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.4 }}
                  className="space-y-6 group"
                >
                   <h3 className="text-xl font-serif flex items-center space-x-4 italic text-white group-hover:text-gold transition-colors">
                     <div className="w-8 h-[1px] bg-gold/30" />
                     <span>Bespoke Detail</span>
                   </h3>
                  <p className="text-dim-grey text-sm leading-relaxed font-light">
                     From the texture of hand-poured concrete to the custom hardware, we obsess over every touchpoint to ensure a unified luxury experience.
                  </p>
                </motion.div>
              </div>

              <div className="flex flex-wrap gap-16 md:gap-24">
                {stats.map((stat, i) => (
                  <motion.div 
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.5 + (i * 0.1) }}
                    className="flex flex-col"
                  >
                     <span className="text-5xl font-serif text-white group-hover:text-gold transition-colors">{stat.value}</span>
                     <span className="text-[10px] tracking-widest uppercase text-gold/40 mt-2 font-medium">{stat.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
};
