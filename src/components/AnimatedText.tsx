import React from 'react';
import { motion } from 'motion/react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  once?: boolean;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className, delay = 0, once = false }) => {
  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i + delay },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 40,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      style={{ display: 'flex', flexWrap: 'wrap', position: 'relative' }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
      className={className}
    >
      {words.map((word, index) => (
        <div key={index} className="relative flex items-center">
          <motion.span
            variants={child}
            style={{ marginRight: '0.25em', display: 'inline-block' }}
          >
            {word}
          </motion.span>
          {/* Architectural drafting line reveal */}
          <motion.div
            variants={{
              hidden: { scaleX: 0, originX: 0 },
              visible: { 
                scaleX: [0, 1, 0], 
                originX: [0, 0, 1],
                transition: { duration: 0.8, delay: delay + (index * 0.1) }
              }
            }}
            className="absolute bottom-1 left-0 right-0 h-[1px] bg-gold opacity-50 pointer-events-none"
          />
        </div>
      ))}
    </motion.div>
  );
};
