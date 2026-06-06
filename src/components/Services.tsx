import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Layout, Feather, Box, Compass, PenTool, Globe } from 'lucide-react';
import { Magnetic } from './Magnetic';

const services = [
  {
    icon: Layout,
    title: 'Architectural Planning',
    desc: 'Functional excellence merged with structural innovation to create living masterpieces.'
  },
  {
    icon: Feather,
    title: 'Interior Design',
    desc: 'Curated spaces that reflect personal identity through minimal luxury and bespoke furniture.'
  },
  {
    icon: Box,
    title: 'Urban Synthesis',
    desc: 'Designing the future of cities by integrating sustainable technology with human-centric geometry.'
  },
  {
    icon: Compass,
    title: 'Project Management',
    desc: 'Precision in execution, ensuring every detail of the blueprint is brought to life flawlessly.'
  },
  {
    icon: PenTool,
    title: 'Landscape Design',
    desc: 'Seamless integration of nature and structure, creating serene outdoor environments.'
  },
  {
    icon: Globe,
    title: 'Sustainable Advisory',
    desc: 'Pioneering eco-conscious architecture that respects the environment without compromising luxury.'
  }
];

export const Services: React.FC = () => {
  const containerRef = React.useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scaleY = useTransform(scrollYProgress, [0, 0.75], [0, 1]);

  return (
    <section ref={containerRef} id="services" className="py-40 px-16 bg-luxury-black overflow-hidden border-t border-white/5 relative">
      <div className="max-w-screen-2xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-32">
          <div className="lg:col-span-7">
            <div className="flex items-center space-x-6 mb-8 group cursor-default">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                viewport={{ once: false }}
                className="h-[1px] bg-gold"
              />
              <span className="text-[10px] uppercase tracking-[0.5em] text-gold font-medium">Expertise</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-serif tracking-tighter text-white italic font-light leading-[0.9]">
              Sculpting <span className="not-italic text-gold italic">The Invisible.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 flex items-end">
            <p className="text-dim-grey text-lg font-light leading-relaxed max-w-lg mb-4 opacity-80">
              We don't just build structures; we design experiences that linger in the memory. Our multidisciplinary approach ensures every pixel and stone is perfect.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              variants={{
                hidden: { 
                  opacity: 0, 
                },
                visible: { 
                  opacity: 1, 
                }
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: i * 0.08, duration: 0.8, ease: "easeOut" }}
              className="group bg-luxury-black p-12 md:p-16 hover:bg-neutral-900 transition-all duration-700 relative overflow-hidden flex flex-col justify-between min-h-[450px]"
            >
              {/* Drafting grid background */}
              <div className="absolute inset-0 blueprint-grid opacity-[0.02] group-hover:opacity-[0.05] transition-opacity" />
              
              {/* Technical index label */}
              <div className="absolute top-6 left-6 text-[8px] font-mono tracking-widest text-gold/20 flex items-center gap-4">
                <span className="w-4 h-[1px] bg-gold/20" />
                SECTION_{String(i + 1).padStart(2, '0')}
              </div>

              <div className="relative z-10 space-y-10 mt-6">
                <div className="w-16 h-16 rounded-full border border-white/10 group-hover:border-gold/50 flex items-center justify-center transition-all duration-700 group-hover:scale-110 group-hover:bg-gold/5 overflow-hidden group-hover:shadow-[0_0_30px_rgba(197,160,89,0.15)]">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    <service.icon className="w-8 h-8 text-white group-hover:text-gold transition-colors duration-700 stroke-[1px]" />
                  </motion.div>
                </div>
                
                <div className="space-y-6">
                  <h3 className="text-3xl font-serif text-white group-hover:text-gold transition-colors duration-700 italic font-light">
                    {service.title}
                  </h3>
                  <p className="text-dim-grey group-hover:text-white/60 text-base leading-relaxed transition-colors duration-700 font-light">
                    {service.desc}
                  </p>
                </div>
              </div>

              <div className="relative z-10 pt-12 self-end">
                <Magnetic strength={0.4}>
                  <motion.div 
                    onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="flex items-center space-x-6 text-gold cursor-pointer group/btn"
                  >
                    <span className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500">Service Portal</span>
                    <div className="w-12 h-12 rounded-full border border-gold/20 flex items-center justify-center group-hover/btn:bg-gold group-hover/btn:border-gold transition-all duration-500">
                      <span className="text-gold group-hover/btn:text-luxury-black transition-colors font-serif italic text-lg leading-none">+</span>
                    </div>
                  </motion.div>
                </Magnetic>
              </div>

              {/* Decorative architectural grid on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-1000 pointer-events-none">
                 <div className="w-full h-full blueprint-grid scale-150 group-hover:scale-100 transition-transform duration-[2000ms]" />
              </div>
              
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-gold/0 group-hover:border-gold/20 transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
