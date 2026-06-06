import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';
import { Magnetic } from './Magnetic';

// Custom lightweight SVG for TikTok that matches the Lucide design language and stroke weight
const Tiktok: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export const Contact: React.FC = () => {
  const contactPoints = [
    { icon: Mail, label: "Email us", value: "aakardesignstudio2025@gmail.com" },
    { icon: Phone, label: "Call us", value: "+977 9743436505 / +977 9848958699" },
    { icon: MapPin, label: "Main Office", value: "Tilottama-5, Manigram" }
  ];

  return (
    <section id="contact" className="py-24 sm:py-32 px-6 sm:px-12 md:px-16 bg-luxury-black overflow-hidden border-t border-white/5 relative">
      {/* Subtle blueprint accent */}
      <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full h-full border-[0.5px] border-white/5 pointer-events-none select-none z-0" />

      <div className="max-w-screen-2xl mx-auto relative z-10 font-sans">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-6 mb-8">
                <div className="w-12 h-[1px] bg-gold"></div>
                <span className="text-[10px] uppercase tracking-[0.5em] text-gold font-medium">Connect</span>
              </div>
              <h2 className="text-4xl sm:text-6xl md:text-8xl font-serif text-white mb-12 tracking-tighter italic font-light leading-[0.9]">
                Let's <br /> <span className="not-italic text-gold">Collaborate</span>
              </h2>
              
              <div className="space-y-12 mt-16 text-left">
                {contactPoints.map((point, i) => (
                  <motion.div 
                    key={point.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start space-x-6 group"
                  >
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-gold/10 group-hover:border-gold transition-all duration-500">
                      <point.icon className="w-5 h-5 text-luxury-grey/60 group-hover:text-gold" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] uppercase tracking-widest text-luxury-grey/40 block mb-1">{point.label}</span>
                      <p className="text-lg sm:text-xl break-all sm:break-normal font-serif text-white group-hover:text-gold transition-colors duration-500">{point.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex space-x-8 mt-12 lg:mt-20">
              {[
                { Icon: Facebook, url: "https://www.facebook.com/share/1BQapZPgDG/" },
                { Icon: Instagram, url: "https://www.instagram.com/aakardesignstudio2025?igsh=bjd1bDNwbmxoYjVk" },
                { Icon: Tiktok, url: "https://www.tiktok.com/@aakardesignstudio?_r=1&_t=ZS-92Ua6YF3zbJ" }
              ].map(({ Icon, url }, i) => (
                <Magnetic key={i} strength={0.4}>
                  <motion.a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2 }}
                    className="text-luxury-grey/40 transition-colors hover:text-gold p-2 cursor-pointer"
                  >
                    <Icon className="w-6 h-6" />
                  </motion.a>
                </Magnetic>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 bg-white/5 p-6 sm:p-12 lg:p-20 relative overflow-hidden border border-white/10 shadow-2xl backdrop-blur-sm">
             {/* Background Decoration */}
             <div className="absolute top-0 right-0 w-64 h-64 border border-gold/5 rounded-full translate-x-1/3 -translate-y-1/3" />
             
             <form className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-4">
                  <label className="text-[10px] uppercase tracking-widest font-medium text-luxury-grey/40">Identity</label>
                  <input 
                    type="text" 
                    placeholder="Your Full Name" 
                    className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-gold transition-colors font-serif text-lg sm:text-xl text-white placeholder:text-white/10"
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] uppercase tracking-widest font-medium text-luxury-grey/40">Response Path</label>
                  <input 
                    type="email" 
                    placeholder="your@email.com" 
                    className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-gold transition-colors font-serif text-lg sm:text-xl text-white placeholder:text-white/10"
                  />
                </div>
                <div className="md:col-span-2 space-y-4 pt-4">
                  <label className="text-[10px] uppercase tracking-widest font-medium text-luxury-grey/40">Inquiry Brief</label>
                  <textarea 
                    rows={4}
                    placeholder="Whisper your architectural dreams here..." 
                    className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-gold transition-colors font-serif text-lg sm:text-xl resize-none text-white font-light placeholder:text-white/5"
                  />
                </div>
                
                <div className="md:col-span-2 pt-8 sm:pt-12">
                   <Magnetic strength={0.15}>
                     <motion.button 
                       whileHover={{ scale: 1.02, backgroundColor: '#fff', color: '#000' }}
                       whileTap={{ scale: 0.98 }}
                       className="w-full bg-gold text-luxury-black py-6 sm:py-8 text-[11px] uppercase tracking-[0.5em] transition-all duration-700 shadow-[0_20px_50px_rgba(197,160,89,0.2)] font-bold group cursor-pointer"
                     >
                       <span className="relative z-10">Dispatch Inquiry</span>
                       <motion.div 
                         className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"
                       />
                     </motion.button>
                   </Magnetic>
                </div>
             </form>
          </div>
        </div>
      </div>
    </section>
  );
};
