import React, { useState } from 'react';
import { AnimatePresence, motion, useScroll } from 'motion/react';
import { SmoothScroll } from './components/SmoothScroll';
import { CustomCursor } from './components/CustomCursor';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { Staff } from './components/Staff';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { Magnetic } from './components/Magnetic';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const { scrollYProgress } = useScroll();

  React.useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      if (latest > 0.1) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <main className="bg-luxury-black font-sans selection:bg-gold selection:text-luxury-black">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loader" onComplete={() => setIsLoading(false)} />
        ) : (
          <motion.div 
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <CustomCursor />
            <WhatsAppWidget />
            
            {/* Cinematic Scroll Progress Bar */}
            <motion.div 
              className="fixed top-0 left-0 right-0 h-1 bg-gold z-[2001] origin-left shadow-[0_0_15px_rgba(197,160,89,0.5)]"
              style={{ scaleX: scrollYProgress }}
            />

            <SmoothScroll>
              <div className="flex flex-col">
                <Navbar />
                
                <main>
                  <Hero />
                  <About />
                  <Projects />
                  <Services />
                  <Staff />
                  <Contact />
                  
                  <footer className="py-24 px-6 sm:px-10 md:px-16 bg-luxury-black border-t border-white/5 relative overflow-hidden">
                     {/* Footer Decoration */}
                     <div className="absolute bottom-0 right-10 w-[500px] h-[500px] border border-white/5 rounded-full translate-y-1/2 opacity-20 pointer-events-none" />

                    <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-10 relative z-10">
                      <div className="flex flex-col items-start text-left">
                        <motion.div 
                          whileHover={{ scale: 1.05 }}
                          className="cursor-pointer group"
                          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        >
                          <span className="font-sans font-semibold text-3xl tracking-tighter uppercase text-luxury-grey group-hover:text-white transition-colors">Aakar</span>
                          <span className="text-[10px] tracking-[0.4em] uppercase text-gold/40 -mt-1 block font-bold">Design Studio</span>
                        </motion.div>
                        <p className="mt-8 text-luxury-grey/20 text-[10px] tracking-widest uppercase max-w-xs leading-loose italic font-light">
                          Exploring the infinite dance between structural gravity and spatial freedom since 2025.
                        </p>
                        <p className="mt-12 text-luxury-grey/20 text-[10px] tracking-widest uppercase font-medium">
                          © 2026 Aakar Studio. All rights reserved. <br />
                          <span className="text-gold text-[9px] tracking-[0.3em] font-bold mt-2 block">Developed by Himal Gaire</span>
                          <a href="mailto:himalgaire999@gmail.com" className="text-luxury-grey/60 hover:text-gold text-[9px] tracking-[0.2em] transition-colors mt-1 block lowercase font-normal normal-case">himalgaire999@gmail.com</a>
                        </p>
                      </div>
                      
                      <div className="flex flex-row flex-wrap gap-x-12 gap-y-8 sm:gap-x-24">
                        <div className="flex flex-col space-y-5">
                          <span className="text-[10px] uppercase tracking-[0.5em] text-gold font-bold mb-4">Connect</span>
                          <a href="https://www.facebook.com/share/1BQapZPgDG/" target="_blank" rel="noopener noreferrer" className="text-xs text-luxury-grey/40 hover:text-gold transition-colors font-medium tracking-widest uppercase">Facebook</a>
                          <a href="https://www.instagram.com/aakardesignstudio2025?igsh=bjd1bDNwbmxoYjVk" target="_blank" rel="noopener noreferrer" className="text-xs text-luxury-grey/40 hover:text-gold transition-colors font-medium tracking-widest uppercase">Instagram</a>
                          <a href="https://www.tiktok.com/@aakardesignstudio?_r=1&_t=ZS-92Ua6YF3zbJ" target="_blank" rel="noopener noreferrer" className="text-xs text-luxury-grey/40 hover:text-gold transition-colors font-medium tracking-widest uppercase">TikTok</a>
                        </div>
                      </div>

                      <div className="flex flex-col items-start lg:items-end w-full lg:w-auto">
                        <div className="text-luxury-grey/40 text-[10px] tracking-[0.4em] uppercase mb-8 font-bold">Subscribe to the collective</div>
                        <div className="flex border-b border-white/10 pb-4 group w-full max-w-xs md:w-80">
                           <input 
                             type="email" 
                             placeholder="Enter coordinates (email)" 
                             className="bg-transparent outline-none text-sm font-serif flex-grow text-white placeholder:text-white/10"
                           />
                           <button className="text-gold text-[10px] uppercase tracking-[0.4em] font-bold ml-6 group-hover:translate-x-2 transition-transform">Inscribe</button>
                        </div>
                      </div>
                    </div>
                  </footer>
                </main>
              </div>
            </SmoothScroll>

            {/* Magnetic Back to Top */}
            <AnimatePresence>
              {showBackToTop && (
                <div className="fixed bottom-12 right-12 z-[1000] hidden md:block">
                  <Magnetic strength={0.4}>
                    <motion.button 
                      initial={{ opacity: 0, scale: 0, x: 20 }}
                      animate={{ opacity: 1, scale: 1, x: 0 }}
                      exit={{ opacity: 0, scale: 0, x: 20 }}
                      whileHover={{ scale: 1.05 }}
                      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                      className="relative w-20 h-20 bg-luxury-black border border-gold/40 text-gold shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 group flex items-center justify-center overflow-hidden"
                    >
                      {/* Architectural Detail Layer */}
                      <div className="absolute inset-0 blueprint-grid opacity-[0.03] group-hover:opacity-[0.07] transition-opacity" />
                      <div className="absolute inset-3 border border-gold/10 group-hover:border-gold/30 transition-colors pointer-events-none" />
                      
                      {/* Corner Accents */}
                      <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-gold transition-transform group-hover:-rotate-90 duration-500" />
                      <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-gold transition-transform group-hover:-rotate-90 duration-500" />
                      
                      {/* Technical Labels */}
                      <span className="absolute top-2 right-3 text-[6px] tracking-[0.3em] opacity-40 uppercase font-bold group-hover:text-white transition-colors">LVL. 00</span>
                      <span className="absolute bottom-2 left-3 text-[6px] tracking-[0.3em] opacity-40 uppercase font-bold group-hover:text-white transition-colors">TOP</span>

                      <div className="relative flex flex-col items-center">
                        <span className="text-xl font-serif italic group-hover:-translate-y-1 transition-transform duration-500 relative z-10">↑</span>
                        <motion.div 
                          initial={{ width: 0 }}
                          whileHover={{ width: 12 }}
                          className="h-[1px] bg-gold mt-1"
                        />
                      </div>
                      
                      {/* Hover Overlay */}
                      <motion.div 
                        className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </motion.button>
                  </Magnetic>
                </div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
