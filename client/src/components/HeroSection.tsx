import React, { useRef, useState, useEffect } from 'react';
import { motion, useAnimate, useInView } from 'framer-motion';
import CyberButton from './CyberButton';

const HeroSection: React.FC = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [videoContainer, animateVideoContainer] = useAnimate();
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });
  
  // Simulate video load
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener('loadeddata', () => {
        setIsVideoLoaded(true);
      });
    }
  }, []);
  
  // Animate video container when in view
  useEffect(() => {
    if (isInView) {
      animateVideoContainer([
        [".corner-tl", { opacity: 1, x: 0, y: 0 }, { duration: 0.5, ease: "easeOut" }],
        [".corner-tr", { opacity: 1, x: 0, y: 0 }, { duration: 0.5, ease: "easeOut", delay: 0.1 }],
        [".corner-bl", { opacity: 1, x: 0, y: 0 }, { duration: 0.5, ease: "easeOut", delay: 0.2 }],
        [".corner-br", { opacity: 1, x: 0, y: 0 }, { duration: 0.5, ease: "easeOut", delay: 0.3 }],
        [".scan-line", { opacity: 0.7 }, { duration: 0.5, delay: 0.6 }],
        [".data-overlay", { opacity: 1 }, { duration: 0.8, delay: 0.8 }],
      ]);
    }
  }, [isInView, animateVideoContainer]);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-4 md:px-8 py-16 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-8"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="space-y-4">
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
              
              <motion.p 
                className="text-lg md:text-xl font-code text-gray-300 max-w-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                Enter a world where technology and humanity collide in the neon-drenched streets of Neo-Tokyo 2099.
              </motion.p>
            </div>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <CyberButton japaneseText="探索する" pulseGlow>
                EXPLORE
              </CyberButton>
              
              <CyberButton japaneseText="参加する" primary>
                JOIN NOW
              </CyberButton>
            </motion.div>
          </motion.div>
          
          <motion.div 
            ref={videoContainer}
            className="relative"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            {/* Video container with cyberpunk styling */}
            <div className="aspect-video relative bg-cyberdark2 border-2 border-cybergray overflow-hidden">
              {/* Main video */}
              <video 
                ref={videoRef}
                className="w-full h-full object-cover object-center"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="https://cdn.coverr.co/videos/coverr-pssht-2022-4399/1080p.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Overlay gradient */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-cyberdark via-transparent to-transparent opacity-80"></div>
              
              {/* Cyberpunk overlay effects */}
              <motion.div 
                className="absolute top-0 left-0 w-full h-full pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
              >
                {/* Red scan line */}
                <motion.div 
                  className="scan-line absolute top-0 left-0 w-full h-4 bg-cyberred/30 opacity-0 z-30"
                  animate={{ 
                    y: [0, 500, 0],
                  }}
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop"
                  }}
                />
                
                {/* Data overlay - appears after video loads */}
                <motion.div 
                  className="data-overlay absolute bottom-0 left-0 w-full p-4 opacity-0"
                  initial={{ y: 20 }}
                  animate={{ y: 0 }}
                >
                  <div className="flex items-center gap-2">
                    <motion.div 
                      className="w-3 h-3 bg-cyberred rounded-full"
                      animate={{ 
                        opacity: [0.5, 1, 0.5],
                        scale: [1, 1.2, 1]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        ease: "easeInOut" 
                      }}
                    />
                    <div className="font-code text-sm text-gray-300">
                      <div className="flex items-center space-x-2">
                        <span className="text-cyberred">REC</span>
                        <span className="animate-pulse">●</span>
                        <span>LIVE_FEED//SECTOR-09</span>
                      </div>
                      <div className="mt-1 text-xs opacity-70">
                        <motion.span
                          animate={{
                            opacity: [1, 0.5, 1]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                        >
                          SIGNAL_STRENGTH: 87% | ENCRYPTION: ACTIVE
                        </motion.span>
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                {/* Frame corners with red border effects */}
                <motion.div 
                  className="corner-tl absolute top-0 left-0 w-16 h-16 opacity-0"
                  initial={{ x: -10, y: -10 }}
                >
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-cyberred"></div>
                  <div className="absolute top-0 left-0 h-full w-[3px] bg-cyberred"></div>
                </motion.div>
                
                <motion.div 
                  className="corner-tr absolute top-0 right-0 w-16 h-16 opacity-0"
                  initial={{ x: 10, y: -10 }}
                >
                  <div className="absolute top-0 right-0 w-full h-[3px] bg-cyberred"></div>
                  <div className="absolute top-0 right-0 h-full w-[3px] bg-cyberred"></div>
                </motion.div>
                
                <motion.div 
                  className="corner-bl absolute bottom-0 left-0 w-16 h-16 opacity-0"
                  initial={{ x: -10, y: 10 }}
                >
                  <div className="absolute bottom-0 left-0 w-full h-[3px] bg-cyberred"></div>
                  <div className="absolute bottom-0 left-0 h-full w-[3px] bg-cyberred"></div>
                </motion.div>
                
                <motion.div 
                  className="corner-br absolute bottom-0 right-0 w-16 h-16 opacity-0"
                  initial={{ x: 10, y: 10 }}
                >
                  <div className="absolute bottom-0 right-0 w-full h-[3px] bg-cyberred"></div>
                  <div className="absolute bottom-0 right-0 h-full w-[3px] bg-cyberred"></div>
                </motion.div>
                
                {/* Noise overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyberred/5 to-transparent mix-blend-overlay"></div>
                
                {/* Horizontal scan lines */}
                <div className="absolute inset-0" style={{ 
                  backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.04) 2px, rgba(255,255,255,0.04) 4px)',
                  pointerEvents: 'none',
                  mixBlendMode: 'overlay' 
                }}></div>
              </motion.div>
            </div>
            
            {/* Decorative outer elements */}
            <motion.div 
              className="absolute -bottom-8 -right-8 w-32 h-32"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              <div className="absolute bottom-0 right-0 w-full h-[2px] bg-cyberred"></div>
              <div className="absolute bottom-0 right-0 h-full w-[2px] bg-cyberred"></div>
            </motion.div>
            
            <motion.div 
              className="absolute -top-8 -left-8 w-32 h-32"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-cyberred"></div>
              <div className="absolute top-0 left-0 h-full w-[2px] bg-cyberred"></div>
            </motion.div>
            
            {/* Tech data display */}
            <motion.div 
              className="absolute -right-4 top-1/4 bg-cyberdark2 border border-cybergray p-2 font-code text-xs text-cyberred"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 0.8, x: 0 }}
              transition={{ delay: 1.5, duration: 0.5 }}
            >
              <div>FPS: 60</div>
              <div>RES: 1080p</div>
            </motion.div>
            
            <motion.div 
              className="absolute -left-4 bottom-1/4 bg-cyberdark2 border border-cybergray p-2 font-code text-xs text-cyberred"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 0.8, x: 0 }}
              transition={{ delay: 1.7, duration: 0.5 }}
            >
              <div className="font-jp">ビデオフィード</div>
              <div>ID: CYB-9873</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <motion.div 
        className="absolute top-20 right-[5%] w-40 h-40 border border-cyberred/20 transform rotate-45"
        animate={{ rotate: 90 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      <motion.div 
        className="absolute bottom-20 left-[10%] w-60 h-60 border border-cyberred/20 transform -rotate-12"
        animate={{ rotate: -372 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-gradient-radial from-cyberred/5 to-transparent rounded-full blur-xl"></div>
    </section>
  );
};

export default HeroSection;
