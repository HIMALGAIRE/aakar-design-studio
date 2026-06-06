import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';
import { Magnetic } from './Magnetic';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Staff', href: '#staff' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 w-full z-[1000] px-4 py-4 md:px-8 md:py-6 transition-all duration-500',
          isScrolled 
            ? 'bg-luxury-black/95 backdrop-blur-md py-3 md:py-4 shadow-md border-b border-white/5' 
            : 'bg-gradient-to-b from-luxury-black/90 via-luxury-black/30 to-transparent'
        )}
      >
        <div className="max-w-screen-2xl mx-auto flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <span className="font-sans font-semibold text-2xl tracking-tighter uppercase text-luxury-grey">Aakar</span>
            <span className="text-[10px] tracking-[0.4em] uppercase text-gold/40 -mt-1 font-sans">Design Studio</span>
          </motion.div>

          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link, i) => (
              <Magnetic key={link.name} strength={0.3}>
                <motion.a
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="group relative text-[10px] uppercase tracking-[0.2em] font-medium text-luxury-grey/60 hover:text-luxury-grey transition-colors"
                >
                  <span className="relative z-10">{link.name}</span>
                  <span className="absolute left-1/2 -bottom-1 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full group-hover:left-0" />
                </motion.a>
              </Magnetic>
            ))}
            
            <Magnetic strength={0.2}>
              <motion.button 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="px-8 py-3 border border-white/20 text-[10px] uppercase tracking-[0.3em] font-medium hover:bg-white hover:text-luxury-black transition-all duration-500"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Inquiry
              </motion.button>
            </Magnetic>
          </div>

          <button 
            className="md:hidden text-white" 
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-luxury-black z-[2000] flex flex-col p-8"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 120 }}
          >
            <div className="flex justify-between items-center mb-16">
              <div className="flex flex-col text-white">
                <span className="font-serif text-2xl tracking-tighter uppercase">Aakar</span>
                <span className="text-[10px] tracking-[0.4em] uppercase text-gold">Design Studio</span>
              </div>
              <button 
                className="text-white" 
                onClick={() => setIsMenuOpen(false)}
              >
                <X className="w-8 h-8" />
              </button>
            </div>

            <div className="flex flex-col space-y-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="text-5xl font-serif text-white/40 hover:text-white transition-colors"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <div className="mt-auto py-8 border-t border-white/10 flex justify-between items-end">
               <div className="text-white/40 text-[10px] tracking-[0.2em] uppercase">
                 Tilottama-5, Manigram
               </div>
               <div className="flex space-x-6 text-white/60">
                 <span className="text-xs uppercase tracking-widest cursor-pointer hover:text-gold transition-colors">In</span>
                 <span className="text-xs uppercase tracking-widest cursor-pointer hover:text-gold transition-colors">Be</span>
                 <span className="text-xs uppercase tracking-widest cursor-pointer hover:text-gold transition-colors">Ig</span>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
