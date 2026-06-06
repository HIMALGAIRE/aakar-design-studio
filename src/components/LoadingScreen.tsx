import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export const LoadingScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 800);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 bg-luxury-black z-[10000] flex flex-col items-center justify-center p-6"
      initial={{ opacity: 1 }}
      exit={{ y: '-100%', transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } }}
    >
      <div className="relative w-full max-w-2xl px-4 flex flex-col items-center">
        {/* Animated Custom Roof & Window Figure SVG */}
        <svg 
          viewBox="0 0 1000 160" 
          className="w-full h-auto drop-shadow-[0_0_20px_rgba(255,255,255,0.02)] mb-2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Main Roof Line - Animated Draw */}
          <motion.path
            d="M 30,152 L 180,152 L 271,97 L 271,45 L 255,45 L 285,15 L 315,45 L 300,45 L 300,79 L 410,12 L 610,152 L 970,152"
            stroke="#807C79"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: progress / 100 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />

          {/* 4-Pane Window - Fades and scales in */}
          <g>
            {/* Top-Left Pane */}
            <motion.rect
              x="385"
              y="70"
              width="22"
              height="22"
              rx="2"
              fill="#807C79"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ 
                opacity: progress >= 40 ? 1 : 0, 
                scale: progress >= 40 ? 1 : 0.5 
              }}
              style={{ transformOrigin: "396px 81px" }}
              transition={{ duration: 0.4 }}
            />
            {/* Top-Right Pane */}
            <motion.rect
              x="413"
              y="70"
              width="22"
              height="22"
              rx="2"
              fill="#807C79"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ 
                opacity: progress >= 45 ? 1 : 0, 
                scale: progress >= 45 ? 1 : 0.5 
              }}
              style={{ transformOrigin: "424px 81px" }}
              transition={{ duration: 0.4 }}
            />
            {/* Bottom-Left Pane */}
            <motion.rect
              x="385"
              y="98"
              width="22"
              height="22"
              rx="2"
              fill="#807C79"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ 
                opacity: progress >= 50 ? 1 : 0, 
                scale: progress >= 50 ? 1 : 0.5 
              }}
              style={{ transformOrigin: "396px 109px" }}
              transition={{ duration: 0.4 }}
            />
            {/* Bottom-Right Pane */}
            <motion.rect
              x="413"
              y="98"
              width="22"
              height="22"
              rx="2"
              fill="#807C79"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ 
                opacity: progress >= 55 ? 1 : 0, 
                scale: progress >= 55 ? 1 : 0.5 
              }}
              style={{ transformOrigin: "424px 109px" }}
              transition={{ duration: 0.4 }}
            />
          </g>
        </svg>

        {/* Brand Text Block in HTML for Pristine Scaling & Rendering */}
        <div className="w-full text-center flex flex-col items-center">
          {/* AAKAR DESIGN STUDIO */}
          <motion.h1
            className="text-[15px] min-[360px]:text-[18px] min-[390px]:text-[21px] min-[420px]:text-[24px] sm:text-4xl md:text-5xl lg:text-[54px] font-black tracking-tight text-[#3B4CB2] uppercase select-none w-full flex justify-center flex-nowrap whitespace-nowrap"
            style={{ 
              fontFamily: "'Montserrat', sans-serif"
            }}
          >
            {["AAKAR", "DESIGN", "STUDIO"].map((word, wordIndex) => (
              <span key={wordIndex} className="inline-block whitespace-nowrap mx-[0.12em] sm:mx-[0.2em] flex-shrink-0">
                {Array.from(word).map((char, charIndex) => {
                  const globalIndex = wordIndex * 10 + charIndex; // for staggered entrance delay
                  return (
                    <motion.span
                      key={charIndex}
                      initial={{ opacity: 0, y: 15, filter: "blur(6px)" }}
                      animate={
                        progress >= 50
                          ? { opacity: 1, y: 0, filter: "blur(0px)" }
                          : { opacity: 0, y: 15, filter: "blur(6px)" }
                      }
                      transition={{
                        duration: 1.0,
                        ease: [0.16, 1, 0.3, 1],
                        delay: globalIndex * 0.03, // Elegant slow stagger line
                      }}
                      className="inline-block"
                    >
                      {char}
                    </motion.span>
                  );
                })}
              </span>
            ))}
          </motion.h1>

          {/* Shaping Better Spaces line: Left bar, Text, Right bar */}
          <div className="w-full flex items-center justify-center sm:justify-between mt-4 px-1 sm:px-2">
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: progress >= 75 ? 1 : 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="h-[1.5px] bg-[#807C79]/60 flex-grow origin-right hidden sm:block"
            />
            
            <motion.span
              initial={{ opacity: 0, letterSpacing: "0.3em", filter: "blur(4px)" }}
              animate={
                progress >= 75
                  ? { opacity: 1, letterSpacing: "0.15em", filter: "blur(0px)" }
                  : { opacity: 0, letterSpacing: "0.3em", filter: "blur(4px)" }
              }
              transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-[10px] min-[380px]:text-xs sm:text-sm md:text-base lg:text-lg font-medium text-[#807C79] sm:px-4 whitespace-nowrap select-none font-sans"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Shaping Better Spaces
            </motion.span>

            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: progress >= 75 ? 1 : 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="h-[1.5px] bg-[#807C79]/60 flex-grow origin-left hidden sm:block"
            />
          </div>
        </div>

        {/* Loading Progress Indicator */}
        <div className="mt-16 flex items-center space-x-4">
          <div className="w-12 h-[1px] bg-white/10" />
          <motion.div 
            className="text-xs font-mono tracking-[0.3em] text-[#BCB8B4]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
          >
            LOADING {progress}%
          </motion.div>
          <div className="w-12 h-[1px] bg-white/10" />
        </div>
      </div>
    </motion.div>
  );
};
