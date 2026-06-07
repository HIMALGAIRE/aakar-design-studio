import React from 'react';
import { motion } from 'motion/react';
import { Linkedin, Instagram, Twitter, Mail, ArrowUpRight, Palette } from 'lucide-react';
import { Magnetic } from './Magnetic';

interface StaffMember {
  id: number;
  name: string;
  role: string;
  image: string;
  coordinates: string;
  socials: {
    linkedin?: string;
    instagram?: string;
    twitter?: string;
    email?: string;
    behance?: string;
  };
}

const staffMembers: StaffMember[] = [
  {
    id: 1,
    name: "Ar. Ishmriti Gaire",
    role: "Architect / Founder",
    image: "./image/ishmriti.jpeg",
    coordinates: "DEG.01 / ARCH_FOUND",
    socials: {
      linkedin: "https://www.linkedin.com/in/ishmriti-gaire-b69466329",
      instagram: "https://www.instagram.com/ishmriti_gaire/",
      behance: "https://www.behance.net/ishmritigaire1",
      email: "ishmritigaire6002@gmail.com"
    }
  },
  {
    id: 2,
    name: "Er. Sudan Gurung",
    role: "Civil Engineer / Founder",
    image: "public/image/sudan_gurung_1780767848260.png",
    coordinates: "DEG.02 / CIV_ENG",
    socials: {
      linkedin: "https://linkedin.com",
      instagram: "https://www.instagram.com/",
      email: "sudangurung@gmail.com"
    }
  },
  {
    id: 3,
    name: "Alisha Khanal",
    role: "Intern",
    image: "public/image/alisha.jpeg",
    coordinates: "DEG.03 / ARCH_INTERN",
    socials: {
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com"
    }
  }
];

export const Staff: React.FC = () => {
  return (
    <section id="staff" className="py-32 px-6 sm:px-12 md:px-16 bg-luxury-black text-white overflow-hidden border-t border-white/5 relative">
      {/* Background blueprint decorative lines */}
      <div className="absolute inset-0 blueprint-grid opacity-[0.04] pointer-events-none" />
      <div className="absolute top-0 left-0 w-96 h-96 border-t border-l border-gold/5 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 border-b border-r border-white/5 pointer-events-none" />

      {/* Cinematic scroll-linked background text */}
      <motion.div 
        initial={{ x: 100, opacity: 0.02 }}
        whileInView={{ x: -100 }}
        viewport={{ once: false }}
        transition={{ duration: 25, repeat: Infinity, repeatType: 'reverse', ease: 'linear' }}
        className="absolute bottom-1/4 left-0 text-7xl sm:text-8xl md:text-[125px] lg:text-[150px] xl:text-[200px] font-serif text-white font-bold whitespace-nowrap pointer-events-none select-none z-0"
      >
        ATELIER COLLECTIVE
      </motion.div>

      <div className="max-w-screen-2xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-24">
          <div className="max-w-2xl">
            <div className="flex items-center space-x-6 mb-8">
              <div className="w-12 h-[1px] bg-gold"></div>
              <span className="text-[10px] uppercase tracking-[0.5em] text-gold font-medium">The Guild</span>
            </div>

            <h2 className="text-5xl md:text-7xl font-serif text-white tracking-tighter leading-[1] italic font-light">
              Architecting <span className="not-italic text-gold italic">Spatial</span> Thinkers.
            </h2>
          </div>
          <p className="text-dim-grey text-sm md:text-base leading-relaxed font-light max-w-sm">
            Meet the visionaries, designers, and structural masters executing geometric poetry from our primary atelier in Manigram, Tilottama.
          </p>
        </div>

        {/* Staff Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {staffMembers.map((member, i) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ delay: i * 0.1, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex flex-col bg-neutral-950 border border-white/5 overflow-hidden"
            >
              <div className="aspect-[3/4] overflow-hidden relative">
                {/* Image Overlay with grid */}
                <div className="absolute inset-0 blueprint-grid opacity-10 group-hover:opacity-20 transition-opacity z-10 pointer-events-none" />
                
                {/* Scanning line indicator */}
                <motion.div
                  initial={{ top: '100%' }}
                  whileInView={{ top: ['100%', '0%', '100%'] }}
                  viewport={{ once: false }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                  className="absolute left-0 right-0 h-[1px] bg-gold/30 z-10 shadow-[0_0_10px_rgba(197,160,89,0.3)] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
                />

                <motion.img
                  src={member.image}
                  alt={member.name}
                  referrerPolicy="no-referrer"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-95 transition-all duration-1000"
                />

                {/* Left/Bottom drafting lines on image */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center z-20 pointer-events-none">
                  <span className="text-[7px] font-mono tracking-widest text-gold opacity-50 uppercase group-hover:opacity-100 transition-opacity">
                    {member.coordinates}
                  </span>
                  <div className="w-1.5 h-1.5 bg-gold/40 border border-gold/10" />
                </div>
                
                {/* Floating Architectural Corner Accents */}
                <div className="absolute top-4 left-4 w-3 h-3 border-t border-l border-gold/20 group-hover:border-gold/60 transition-colors duration-500" />
                <div className="absolute bottom-4 right-4 w-3 h-3 border-b border-r border-gold/20 group-hover:border-gold/60 transition-colors duration-500" />

                {/* Overlaid Social Media Floating Panel */}
                <div className="absolute inset-x-0 bottom-0 top-0 bg-neutral-950/70 backdrop-blur-sm z-30 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center items-center gap-6">
                  <span className="text-[8px] tracking-[0.4em] text-gold uppercase font-bold mb-2">Connect Coordinates</span>
                  
                  <div className="flex items-center gap-4">
                    {member.socials.linkedin && (
                      <Magnetic strength={0.3}>
                        <a
                          href={member.socials.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full border border-white/10 hover:border-gold/50 flex items-center justify-center bg-luxury-black text-white hover:text-gold transition-all duration-300"
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>
                      </Magnetic>
                    )}
                    {member.socials.instagram && (
                      <Magnetic strength={0.3}>
                        <a
                          href={member.socials.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full border border-white/10 hover:border-gold/50 flex items-center justify-center bg-luxury-black text-white hover:text-gold transition-all duration-300"
                        >
                          <Instagram className="w-4 h-4" />
                        </a>
                      </Magnetic>
                    )}
                    {member.socials.behance && (
                      <Magnetic strength={0.3}>
                        <a
                          href={member.socials.behance}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full border border-white/10 hover:border-gold/50 flex items-center justify-center bg-luxury-black text-white hover:text-gold transition-all duration-300"
                        >
                          <Palette className="w-4 h-4" />
                        </a>
                      </Magnetic>
                    )}
                    {member.socials.twitter && (
                      <Magnetic strength={0.3}>
                        <a
                          href={member.socials.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full border border-white/10 hover:border-gold/50 flex items-center justify-center bg-luxury-black text-white hover:text-gold transition-all duration-300"
                        >
                          <Twitter className="w-4 h-4" />
                        </a>
                      </Magnetic>
                    )}
                    {member.socials.email && (
                      <Magnetic strength={0.3}>
                        <a
                          href={`mailto:${member.socials.email}`}
                          className="w-10 h-10 rounded-full border border-white/10 hover:border-gold/50 flex items-center justify-center bg-luxury-black text-white hover:text-gold transition-all duration-300"
                        >
                          <Mail className="w-4 h-4" />
                        </a>
                      </Magnetic>
                    )}
                  </div>
                  
                  <span className="text-[9px] text-white/50 lowercase mt-2 tracking-widest">{member.socials.email || "hello@aakar.studio"}</span>
                </div>
              </div>

              {/* Text Info */}
              <div className="p-8 relative flex-grow flex flex-col justify-between border-t border-white/5">
                <div className="space-y-2">
                  <h3 className="text-xl font-serif text-white group-hover:text-gold transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-[10px] tracking-widest uppercase text-gold/60 font-semibold">
                    {member.role}
                  </p>
                </div>
                
                {/* Corner detail decoration on hover */}
                <div className="mt-8 flex justify-between items-center opacity-40 group-hover:opacity-100 transition-opacity">
                  <span className="text-[8px] font-mono tracking-widest text-[#555] group-hover:text-gold/40">
                    AAKAR.STAFF_X0{i+1}
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-white/20 group-hover:text-gold group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>


    </section>
  );
};
