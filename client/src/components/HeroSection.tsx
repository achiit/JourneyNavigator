import React, { useRef, useState, useEffect } from 'react';
import { motion, useAnimate, useInView } from 'framer-motion';
import CyberButton from './CyberButton';

const HeroSection: React.FC = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [contentContainer, animateContentContainer] = useAnimate();
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });
  
  // Simulate video load
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener('loadeddata', () => {
        setIsVideoLoaded(true);
      });
    }
  }, []);
  
  // Animate UI elements when in view
  useEffect(() => {
    if (isInView) {
      animateContentContainer([
        [".corner-tl", { opacity: 1, x: 0, y: 0 }, { duration: 0.5, ease: "easeOut" }],
        [".corner-tr", { opacity: 1, x: 0, y: 0 }, { duration: 0.5, ease: "easeOut", delay: 0.1 }],
        [".corner-bl", { opacity: 1, x: 0, y: 0 }, { duration: 0.5, ease: "easeOut", delay: 0.2 }],
        [".corner-br", { opacity: 1, x: 0, y: 0 }, { duration: 0.5, ease: "easeOut", delay: 0.3 }],
        [".scan-line", { opacity: 0.7 }, { duration: 0.5, delay: 0.6 }],
        [".data-overlay", { opacity: 1 }, { duration: 0.8, delay: 0.8 }],
      ]);
    }
  }, [isInView, animateContentContainer]);

  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden" ref={containerRef}>
      {/* Full screen video background */}
      <div className="absolute inset-0 bg-cyberdark z-0">
        <video 
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="https://cdn.coverr.co/videos/coverr-futuristic-space-city-3447/1080p.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Video overlay layers */}
        <div className="absolute inset-0 bg-gradient-to-t from-cyberdark via-cyberdark/60 to-cyberdark/10 z-10"></div>
        <div className="absolute inset-0 bg-cyberdark/40 z-10"></div>
        
        {/* Animated scan line */}
        <motion.div 
          className="absolute top-0 left-0 w-full h-4 bg-cyberred/20 z-20"
          animate={{ 
            y: [0, 1000, 0],
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop"
          }}
        />
        
        {/* Horizontal scan lines */}
        <div className="absolute inset-0 z-20" style={{ 
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)',
          pointerEvents: 'none',
          mixBlendMode: 'overlay' 
        }}></div>
        
        {/* Digital noise effect */}
        <div className="absolute inset-0 opacity-10 z-20 pointer-events-none noise-overlay"></div>
      </div>
      
      {/* Content container */}
      <div className="container mx-auto px-4 md:px-8 py-16 relative z-30">
        <motion.div 
          ref={contentContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          {/* Left content - Title and buttons */}
          <motion.div 
            className="space-y-8"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="space-y-4">
              {/* Title with animations */}
              <div className="relative">
                <motion.h2 
                  className="text-5xl md:text-7xl font-bold font-cyber text-white leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  <span className="text-cyberred">CYBER</span>PUNK<br />
                  <span className="relative inline-block">
                    REVOLUTION
                    <motion.span 
                      className="absolute -top-1 left-0 w-full h-[1px] bg-cyberred opacity-70"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 0.7, duration: 0.6 }}
                    />
                    <motion.span 
                      className="absolute -bottom-1 left-0 w-full h-[1px] bg-cyberred opacity-70"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 0.9, duration: 0.6 }}
                    />
                  </span>
                </motion.h2>
                
                {/* Cyberpunk corner decorative elements */}
                <motion.div 
                  className="corner-tl absolute -top-4 -left-4 w-16 h-16 opacity-0"
                  initial={{ x: -10, y: -10 }}
                >
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-cyberred"></div>
                  <div className="absolute top-0 left-0 h-full w-[2px] bg-cyberred"></div>
                </motion.div>
                
                <motion.div 
                  className="corner-br absolute -bottom-4 -right-4 w-16 h-16 opacity-0"
                  initial={{ x: 10, y: 10 }}
                >
                  <div className="absolute bottom-0 right-0 w-full h-[2px] bg-cyberred"></div>
                  <div className="absolute bottom-0 right-0 h-full w-[2px] bg-cyberred"></div>
                </motion.div>
              </div>
              
              {/* Description text */}
              <motion.p 
                className="text-lg md:text-xl font-code text-gray-300 max-w-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                Enter a world where technology and humanity collide in the neon-drenched streets of Neo-Tokyo 2099.
              </motion.p>
            </div>
            
            {/* Action buttons */}
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <CyberButton japaneseText="探索する" primary>
                EXPLORE
              </CyberButton>
              
              <CyberButton japaneseText="参加する">
                JOIN NOW
              </CyberButton>
            </motion.div>
          </motion.div>
          
          {/* Right content - Data terminal display */}
          <motion.div 
            className="relative"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <div className="relative bg-cyberdark2/80 border-2 border-cybergray rounded-sm overflow-hidden backdrop-blur-sm p-6">
              {/* Data display upper section */}
              <div className="border-b border-cybergray pb-4 mb-4">
                <div className="flex justify-between items-center mb-4">
                  <div className="font-cyber text-xl text-cyberred">SYSTEM STATUS</div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <div className="text-xs font-code text-green-500">ONLINE</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 font-code text-sm">
                  <div>
                    <div className="text-gray-500">LOCATION</div>
                    <div className="text-white">NEO-TOKYO SECTOR 9</div>
                  </div>
                  <div>
                    <div className="text-gray-500">TIME</div>
                    <motion.div 
                      className="text-white"
                      animate={{ opacity: [1, 0.7, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      23:59:01
                    </motion.div>
                  </div>
                </div>
              </div>
              
              {/* Data display scrolling section */}
              <div className="font-code text-xs text-gray-300 h-48 overflow-hidden relative">
                <motion.div
                  animate={{ y: [-480, 0] }}
                  transition={{ duration: 15, repeat: Infinity, repeatType: "loop" }}
                >
                  {Array.from({ length: 30 }).map((_, i) => (
                    <div key={i} className="flex mb-2">
                      <span className="text-cyberred mr-2">[{(i + 1).toString().padStart(2, '0')}]</span>
                      <span>
                        {i % 5 === 0 ? (
                          <span className="text-cyberblue">SYSTEM: Quantum encryption active. Neural interface synced.</span>
                        ) : i % 4 === 0 ? (
                          <span className="text-yellow-500">WARNING: Unauthorized access attempts detected in sector 7G.</span>
                        ) : i % 3 === 0 ? (
                          <span className="text-green-500">ANALYSIS: Biodata scanning complete. Identity confirmed.</span>
                        ) : (
                          <span>Connection established to mainframe. Data transfer at 98.7%.</span>
                        )}
                      </span>
                    </div>
                  ))}
                </motion.div>
                
                {/* Fading overlay for scrolling text */}
                <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-cyberdark2/80 to-transparent"></div>
              </div>
              
              {/* Interactive data terminal */}
              <div className="mt-4 pt-4 border-t border-cybergray">
                <div className="flex items-center space-x-2 font-code text-xs">
                  <span className="text-cyberblue">root@cybernomad:~$</span>
                  <motion.span 
                    className="text-white"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    _
                  </motion.span>
                </div>
              </div>
              
              {/* Corner elements with scan effect */}
              <motion.div 
                className="corner-tl absolute top-0 left-0 w-16 h-16 opacity-0"
                initial={{ x: -10, y: -10 }}
              >
                <div className="absolute top-0 left-0 w-full h-[2px] bg-cyberred"></div>
                <div className="absolute top-0 left-0 h-full w-[2px] bg-cyberred"></div>
              </motion.div>
              
              <motion.div 
                className="corner-tr absolute top-0 right-0 w-16 h-16 opacity-0"
                initial={{ x: 10, y: -10 }}
              >
                <div className="absolute top-0 right-0 w-full h-[2px] bg-cyberred"></div>
                <div className="absolute top-0 right-0 h-full w-[2px] bg-cyberred"></div>
              </motion.div>
              
              <motion.div 
                className="corner-bl absolute bottom-0 left-0 w-16 h-16 opacity-0"
                initial={{ x: -10, y: 10 }}
              >
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-cyberred"></div>
                <div className="absolute bottom-0 left-0 h-full w-[2px] bg-cyberred"></div>
              </motion.div>
              
              <motion.div 
                className="corner-br absolute bottom-0 right-0 w-16 h-16 opacity-0"
                initial={{ x: 10, y: 10 }}
              >
                <div className="absolute bottom-0 right-0 w-full h-[2px] bg-cyberred"></div>
                <div className="absolute bottom-0 right-0 h-full w-[2px] bg-cyberred"></div>
              </motion.div>
              
              {/* Moving scan line */}
              <motion.div 
                className="scan-line absolute top-0 left-0 w-full h-4 bg-cyberred/10 opacity-0 z-10"
                animate={{ 
                  y: [0, 350, 0],
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: "linear",
                  repeatType: "loop"
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Data readout elements */}
      <motion.div 
        className="data-overlay absolute bottom-8 left-8 bg-cyberdark2/80 border border-cybergray p-2 font-code text-xs opacity-0 z-30"
        initial={{ y: 20 }}
        animate={{ y: 0 }}
      >
        <div className="flex items-center gap-2">
          <motion.div 
            className="w-2 h-2 bg-cyberred rounded-full"
            animate={{ 
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
          />
          <div className="text-gray-300">
            NEURAL_LINK: <span className="text-cyberred">ACTIVE</span>
          </div>
        </div>
      </motion.div>
      
      {/* Background decorative elements */}
      <motion.div 
        className="absolute top-[20%] right-[5%] w-32 h-32 border border-cyberred/20 transform rotate-45 z-20"
        animate={{ rotate: 90 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      <motion.div 
        className="absolute bottom-[20%] left-[5%] w-48 h-48 border border-cyberred/20 transform -rotate-12 z-20"
        animate={{ rotate: -372 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />
    </section>
  );
};

export default HeroSection;
