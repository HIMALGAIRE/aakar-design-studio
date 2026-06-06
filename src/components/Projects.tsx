import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { cn } from '../lib/utils';
import { ArrowDownRight, Filter } from 'lucide-react';
import { Magnetic } from './Magnetic';
import { projectsData, Project } from '../data/projects';

// Centralised projects list
const projects = projectsData;

const categories = ['All', 'Residential', 'Commercial', 'Interior'];

interface ProjectCardProps {
  project: Project;
  index: number;
  scrollYProgress: any;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, scrollYProgress }) => {
  const y = useTransform(scrollYProgress, [0, 1], [-20, 20]);
  
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-100px" }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 1, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "group relative overflow-hidden bg-neutral-950 cursor-pointer border border-white/5 w-full",
        project.size === 'large' ? "col-span-1" : "col-span-1"
      )}
    >
      <div className="aspect-[4/3] sm:aspect-[16/10] overflow-hidden relative w-full">
        <motion.div 
          initial={{ scale: 1.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full"
        >
          <motion.img
            src={project.image}
            alt={project.title}
            style={{ y }}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1200 scale-125 group-hover:scale-100 opacity-35 group-hover:opacity-100"
          />
        </motion.div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/40 to-transparent opacity-95 transition-opacity duration-700 group-hover:opacity-75" />

      <div className="absolute bottom-0 left-0 w-full p-6 sm:p-10 md:p-14 transition-all duration-700 transform group-hover:-translate-y-2">
        <div className="flex justify-between items-end gap-4">
          <div className="space-y-2 sm:space-y-4">
            <div className="flex items-center space-x-4">
               <span className="text-gold text-[9px] uppercase tracking-[0.4em] font-medium">{project.category}</span>
               <motion.div 
                 initial={{ width: 0 }}
                 whileInView={{ width: 40 }}
                 viewport={{ once: false }}
                 className="h-[1px] bg-gold/30 hidden sm:block" 
               />
            </div>
            <h3 className="text-xl sm:text-3xl md:text-5xl font-serif tracking-tight text-white group-hover:text-gold group-hover:italic transition-all duration-500">{project.title}</h3>
            <p className="text-luxury-grey/40 text-[9px] sm:text-[10px] uppercase tracking-[0.3em] font-light">{project.location}</p>
          </div>
          
          <Magnetic strength={0.3}>
            <motion.div 
              className="bg-white/5 backdrop-blur-md p-4 sm:p-6 rounded-full border border-white/10 group-hover:bg-gold group-hover:border-gold transition-all duration-700 shadow-2xl shrink-0"
            >
              <ArrowDownRight className="w-5 h-5 sm:w-6 sm:h-6 text-gold group-hover:text-luxury-black transition-transform duration-500 group-hover:-rotate-90" />
            </motion.div>
          </Magnetic>
        </div>
      </div>
      
      {/* Modern subtle frame detail */}
      <div className="absolute top-6 left-6 sm:top-8 sm:left-8 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
         <div className="w-8 h-8 sm:w-12 sm:h-12 border-t border-l border-gold/40" />
      </div>
      <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
         <div className="w-8 h-8 sm:w-12 sm:h-12 border-b border-r border-gold/40" />
      </div>
    </motion.div>
  );
};

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section ref={sectionRef} id="projects" className="py-24 sm:py-32 px-6 sm:px-12 md:px-16 bg-luxury-black text-white overflow-hidden border-t border-white/5 relative">
      <div className="absolute top-0 right-0 w-96 h-96 border-t border-r border-gold/5 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 border-b border-l border-white/5 pointer-events-none" />

      <div className="max-w-screen-2xl mx-auto relative z-10 font-sans">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-24 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center space-x-6 mb-4 sm:mb-8 group cursor-default">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                viewport={{ once: false }}
                className="h-[1px] bg-gold"
              />
              <span className="text-[10px] uppercase tracking-[0.5em] text-gold font-medium">Selected Works</span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-serif tracking-tighter italic font-light">
              Iconic <span className="not-italic text-gold italic">Blueprints</span>
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-3 mt-4 md:mt-0">
            <div className="flex items-center gap-2 text-gold/40 mr-2 shrink-0">
               <Filter className="w-4 h-4" />
               <span className="text-[9px] uppercase tracking-widest">Filter:</span>
            </div>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={cn(
                  "text-[9px] sm:text-[10px] uppercase tracking-[0.3em] font-medium transition-all duration-300 relative pb-1.5 overflow-hidden group shrink-0",
                  filter === cat ? "text-gold" : "text-white/30 hover:text-white"
                )}
              >
                <span className="relative z-10">{cat}</span>
                <motion.div 
                  className="absolute bottom-0 left-0 h-[1px] bg-gold"
                  initial={false}
                  animate={{ width: filter === cat ? '100%' : '0%' }}
                  transition={{ duration: 0.3 }}
                />
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <AnimatePresence mode="popLayout">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  index={index} 
                  scrollYProgress={scrollYProgress} 
                />
              ))
            ) : (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="col-span-1 md:col-span-2 py-24 text-center border border-dashed border-white/10 flex flex-col items-center justify-center space-y-4 rounded-lg bg-neutral-950 px-6"
              >
                <span className="text-gold text-[9px] uppercase tracking-[0.4em] font-medium">Concept Stage</span>
                <h3 className="text-2xl md:text-3xl font-serif text-white italic font-light">There are no commercial projects right now.</h3>
                <p className="text-dim-grey text-xs tracking-widest max-w-sm leading-relaxed mx-auto">
                  We combine creativity and technical expertise to deliver thoughtful designs. Stay tuned for upcoming commercial blueprints.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          className="mt-24 text-center"
        >
          <Magnetic strength={0.2}>
            <button className="text-[10px] font-bold uppercase tracking-[0.5em] text-gold hover:text-white transition-colors duration-500 pb-2 border-b border-white/10 hover:border-gold">
              View All Case Studies
            </button>
          </Magnetic>
        </motion.div>
      </div>
    </section>
  );
};
