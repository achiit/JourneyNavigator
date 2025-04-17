import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // Detect when video is loaded
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener('loadeddata', () => {
        setIsVideoLoaded(true);
      });
    }
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
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
        
        {/* Animated scan lines */}
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
        
        <motion.div 
          className="absolute top-0 left-0 w-full h-1 bg-cyberblue/30 z-20"
          animate={{ 
            y: [200, 900, 200],
          }}
          transition={{ 
            duration: 15, 
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
        
        {/* HUD Interface Elements */}
        <div className="absolute inset-0 z-30 pointer-events-none">
          {/* Top-left corner element */}
          <motion.div 
            className="absolute top-6 left-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <div className="w-20 h-20 border-t-2 border-l-2 border-cyberred"></div>
          </motion.div>
          
          {/* Top-right corner element */}
          <motion.div 
            className="absolute top-6 right-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
          >
            <div className="w-20 h-20 border-t-2 border-r-2 border-cyberred"></div>
          </motion.div>
          
          {/* Bottom-left corner element */}
          <motion.div 
            className="absolute bottom-6 left-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 1 }}
          >
            <div className="w-20 h-20 border-b-2 border-l-2 border-cyberred"></div>
          </motion.div>
          
          {/* Bottom-right corner element */}
          <motion.div 
            className="absolute bottom-6 right-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 1 }}
          >
            <div className="w-20 h-20 border-b-2 border-r-2 border-cyberred"></div>
          </motion.div>
        </div>
        
        {/* Center Logo / Text */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center z-30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <div className="text-center px-4">
            <motion.h1 
              className="text-6xl md:text-9xl font-cyber font-bold text-white leading-none mb-4 tracking-tighter"
              animate={{ 
                textShadow: ["0 0 10px rgba(255, 45, 85, 0.5)", "0 0 20px rgba(255, 45, 85, 0.8)", "0 0 10px rgba(255, 45, 85, 0.5)"]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <span className="text-cyberred">CYBER</span>PUNK
            </motion.h1>
            
            <motion.div 
              className="font-jp text-xl text-cyberred opacity-80 mb-2"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              サイバーパンク・ワールド
            </motion.div>
            
            <motion.div 
              className="w-40 h-1 bg-cyberred mx-auto mb-6"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 2 }}
            />
            
            <motion.div 
              className="text-sm md:text-base font-code text-gray-400 max-w-md mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.8, y: 0 }}
              transition={{ duration: 1, delay: 2.2 }}
            >
              LOADING SECTOR SCAN... COMPLETE
            </motion.div>
          </div>
        </motion.div>
        
        {/* Bottom data readout */}
        <motion.div 
          className="absolute bottom-8 left-8 bg-cyberdark2/80 border border-cybergray p-2 font-code text-xs z-30"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 0.9, x: 0 }}
          transition={{ duration: 0.5, delay: 2.5 }}
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
              SYSTEM_STATUS: <span className="text-cyberred">ONLINE</span>
            </div>
          </div>
        </motion.div>
        
        {/* Additional HUD elements */}
        <motion.div 
          className="absolute top-8 right-8 bg-cyberdark2/80 border border-cybergray p-2 font-code text-xs z-30"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 0.9, x: 0 }}
          transition={{ duration: 0.5, delay: 2.7 }}
        >
          <div className="flex flex-col gap-1">
            <div className="text-gray-400">NEO-TOKYO <span className="text-cyberblue">2099</span></div>
            <motion.div 
              className="text-cyberred"
              animate={{ opacity: [1, 0.6, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              CONNECTION_ACTIVE
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
