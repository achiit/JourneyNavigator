import React from 'react';
import { motion } from 'framer-motion';
import CyberButton from './CyberButton';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
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
                <span className="relative">
                  REVOLUTION
                  <span className="absolute -top-1 left-0 w-full h-[1px] bg-cyberred opacity-70"></span>
                  <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-cyberred opacity-70"></span>
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
            className="relative"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <div className="aspect-[4/5] bg-cyberdark2 border border-cybergray rounded-sm overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1541562232579-512a21360020?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y3liZXJwdW5rLGZ1dHVyaXN0aWMsc2NpZmksYW5pbWV8fHx8fHwxNzA3MjQwNTc1&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080" 
                alt="Cyberpunk character" 
                className="w-full h-full object-cover object-center transform scale-105"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-cyberdark via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full p-4">
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
                  <p className="font-code text-sm text-gray-300">AGENT PROFILE//ACTIVE_MISSION</p>
                </div>
              </div>
              
              {/* Scan effect */}
              <motion.div 
                className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-cyberred/20 to-transparent"
                animate={{ 
                  y: [0, 500, 0],
                }}
                transition={{ 
                  duration: 10, 
                  repeat: Infinity,
                  ease: "linear" 
                }}
              />
            </div>
            
            <div className="absolute -bottom-6 -right-6 w-24 h-24 border-r-2 border-b-2 border-cyberred"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 border-l-2 border-t-2 border-cyberred"></div>
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
