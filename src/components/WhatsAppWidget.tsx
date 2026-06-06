import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, MessageSquare, ArrowUpRight, X } from 'lucide-react';
import { Magnetic } from './Magnetic';

// Custom SVG WhatsApp icon
const WhatsAppIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={props.className}
    {...props}
  >
    <path d="M12.012 2c-5.506 0-9.988 4.482-9.988 9.988 0 1.761.459 3.473 1.332 4.981L2 22l5.161-1.353a9.92 9.92 0 0 0 4.848 1.259c5.506 0 10.003-4.497 10.003-10.003h-.001C22.012 6.483 17.518 2 12.012 2zm6.059 14.19c-.273.766-1.571 1.393-2.151 1.458-.517.058-1.193.095-3.327-.791-2.73-1.135-4.482-3.921-4.618-4.103-.136-.182-1.109-1.478-1.109-2.82 0-1.341.701-1.997.949-2.26.248-.263.541-.329.721-.329h.517c.165 0 .389-.015.563.405.18.434.615 1.498.667 1.605.053.107.086.23.015.372-.07.143-.105.23-.21.353-.105.123-.223.275-.319.37-.11.107-.225.224-.096.446.129.222.569.939 1.222 1.52.842.75 1.551.981 1.77.1.22-.119.479-.313.72-.619.24-.306.405-.251.68-.154.276.098 1.748.824 2.051.977.302.152.502.228.577.359.075.131.075.76-.198 1.526z"/>
  </svg>
);

export const WhatsAppWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const contacts = [
    {
      name: "Structural / Office Direct",
      phone: "9779743436505",
      formatted: "+977 9743436505",
      role: "Administration"
    }
  ];

  const handlePrimaryClick = () => {
    // Single click goes directly to primary WhatsApp inbox
    window.open(`https://wa.me/9779743436505`, '_blank', 'noreferrer');
  };

  return (
    <div className="fixed bottom-8 left-8 md:bottom-12 md:left-12 z-[1100] flex flex-col items-start">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.9 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mb-4 w-72 bg-neutral-950 border border-white/10 p-6 shadow-2xl relative overflow-hidden"
          >
            {/* Blueprint Grid decorative layer */}
            <div className="absolute inset-0 blueprint-grid opacity-[0.04] pointer-events-none" />
            <div className="absolute inset-2 border border-gold/10 pointer-events-none" />

            <div className="flex justify-between items-start mb-4 relative z-10">
              <div>
                <span className="text-[7px] font-mono uppercase tracking-[0.4em] text-gold block">Coordinate Gateway</span>
                <h4 className="text-sm font-serif text-white italic font-normal">Connect directly with our atelier</h4>
              </div>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setIsOpen(false);
                }}
                className="text-white/40 hover:text-gold transition-colors p-1"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3 relative z-10">
              {contacts.map((contact, i) => (
                <a
                  key={i}
                  href={`https://wa.me/${contact.phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col p-3 border border-white/5 bg-luxury-black/40 hover:bg-neutral-900 hover:border-gold/30 transition-all duration-300"
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[10px] font-semibold text-white group-hover:text-gold transition-colors uppercase tracking-wider">{contact.role}</span>
                    <ArrowUpRight className="w-3 h-3 text-white/20 group-hover:text-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                  </div>
                  <span className="text-[9px] text-white/40 group-hover:text-white/70 transition-colors tracking-widest font-mono">{contact.formatted}</span>
                  <span className="text-[7px] text-gold/60 uppercase tracking-widest mt-1 font-mono">{contact.name}</span>
                </a>
              ))}
            </div>

            <div className="mt-4 pt-3 border-t border-white/5 flex justify-between items-center text-[7px] tracking-widest uppercase text-white/30 font-mono">
              <span>AAKAR.ATELIER</span>
              <span>27.6833° N</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex items-center space-x-3">
        <Magnetic strength={0.4}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handlePrimaryClick}
            className="w-14 h-14 rounded-full bg-luxury-black border border-gold/40 text-gold shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex items-center justify-center relative overflow-hidden group focus:outline-none"
            aria-label="Direct WhatsApp chat"
          >
            {/* Pulsing ring indicator */}
            <span className="absolute inset-0 rounded-full border border-gold/30 opacity-70 group-hover:scale-150 group-hover:opacity-0 transition-all duration-1000" />
            <span className="absolute inset-0 rounded-full bg-gold/5 scale-110 animate-ping opacity-30 pointer-events-none" />

            {/* Micro blueprint lines */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-gold/30 group-hover:border-gold duration-300" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-gold/30 group-hover:border-gold duration-300" />

            <WhatsAppIcon className="w-5 h-5 relative z-10 transition-transform group-hover:scale-110" />
          </motion.button>
        </Magnetic>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-neutral-900 border border-white/10 hover:border-gold/35 px-4 py-2 hover:bg-neutral-800 transition-all text-[8px] tracking-[0.25em] font-mono text-white/80 hover:text-white uppercase relative overflow-hidden group"
        >
          {/* Subtle corner ticks */}
          <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-gold/40" />
          <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-gold/40" />
          
          <span className="flex items-center space-x-2">
            <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
            <span>Chat Channels</span>
          </span>
        </button>
      </div>
    </div>
  );
};
