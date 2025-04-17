import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CyberButtonProps {
  children: React.ReactNode;
  className?: string;
  japaneseText: string;
  onClick?: () => void;
  primary?: boolean;
  pulseGlow?: boolean;
  type?: "button" | "submit" | "reset";
}

const CyberButton: React.FC<CyberButtonProps> = ({ 
  children, 
  className, 
  japaneseText, 
  onClick, 
  primary = false,
  pulseGlow = false,
  type = "button"
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showJapanese, setShowJapanese] = useState(true);
  const [isGlitching, setIsGlitching] = useState(false);
  const [japaneseChars, setJapaneseChars] = useState<string[]>([]);
  const originalText = useRef<string>(japaneseText);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  // Japanese character pool for cycling
  const japaneseCharPool = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン';
  
  // Initialize Japanese characters array
  useEffect(() => {
    setJapaneseChars(originalText.current.split(''));
  }, [japaneseText]);
  
  // Function to create glitch effect
  const glitchCharacters = () => {
    const newChars = [...japaneseChars];
    
    // Replace random characters with glitched ones
    for (let i = 0; i < Math.floor(japaneseChars.length / 2); i++) {
      const randomIndex = Math.floor(Math.random() * japaneseChars.length);
      newChars[randomIndex] = japaneseCharPool.charAt(Math.floor(Math.random() * japaneseCharPool.length));
    }
    
    setJapaneseChars(newChars);
  };
  
  // Handle hover transition
  useEffect(() => {
    if (isHovered) {
      // Start glitch effect
      setIsGlitching(true);
      
      // Schedule transition to English text
      timeoutRef.current = setTimeout(() => {
        setShowJapanese(false);
        setIsGlitching(false);
      }, 400);
    } else {
      // Clear any pending timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      
      // If switching back from English
      if (!showJapanese) {
        setIsGlitching(true);
        
        // Reset characters and show Japanese again after brief delay
        timeoutRef.current = setTimeout(() => {
          setJapaneseChars(originalText.current.split(''));
          setShowJapanese(true);
          setIsGlitching(false);
        }, 400);
      }
    }
    
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isHovered]);
  
  // Glitching effect
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    
    if (isGlitching) {
      interval = setInterval(glitchCharacters, 50);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isGlitching, japaneseChars]);
  
  // Handle hover states
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  
  return (
    <motion.button
      type={type}
      className={cn(
        "cyber-button relative overflow-hidden",
        primary ? "bg-cyberred" : "bg-cyberdark2 border border-cyberred",
        pulseGlow ? "animate-pulse-glow" : "",
        "text-white font-cyber uppercase px-8 py-4 rounded-sm", 
        className
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      whileHover={{ 
        scale: 1.03,
        boxShadow: primary 
          ? "0 0 25px 5px rgba(255, 45, 85, 0.6)" 
          : "0 0 15px 2px rgba(255, 45, 85, 0.4)"
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 10
      }}
    >
      {/* Glitch overlay effect */}
      <motion.div 
        className="absolute inset-0 bg-cyberred/10 mix-blend-screen z-10 pointer-events-none"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ 
          opacity: isGlitching ? [0, 0.8, 0] : 0,
          scaleX: isGlitching ? [0, 1, 0] : 0,
          x: isGlitching ? ["-100%", "100%"] : "0%"
        }}
        transition={{ 
          duration: 0.4,
          ease: "easeInOut",
          times: [0, 0.5, 1]
        }}
      />
      
      <motion.div 
        className="absolute inset-0 bg-cyberblue/10 mix-blend-screen z-10 pointer-events-none"
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ 
          opacity: isGlitching ? [0, 0.8, 0] : 0,
          scaleY: isGlitching ? [0, 1, 0] : 0,
          y: isGlitching ? ["-100%", "100%"] : "0%"
        }}
        transition={{ 
          duration: 0.3,
          ease: "easeInOut",
          times: [0, 0.5, 1]
        }}
      />
      
      {/* Text container */}
      <div className="relative">
        <AnimatePresence initial={false}>
          {showJapanese ? (
            <motion.div
              key="japanese"
              className="flex justify-center items-center space-x-1 font-jp"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {japaneseChars.map((char, index) => (
                <motion.span 
                  key={`${index}-${char}`}
                  initial={{ y: 0 }}
                  animate={{ 
                    y: isGlitching ? [0, -4, 2, 0] : 0,
                    opacity: isGlitching ? [1, 0.7, 1] : 1,
                    scale: isGlitching ? [1, 1.1, 0.9, 1] : 1,
                    color: isGlitching ? ["#ffffff", "#FF2D55", "#00F0FF", "#ffffff"] : "#ffffff"
                  }}
                  transition={{ 
                    duration: 0.3,
                    delay: index * 0.03
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="english"
              className="flex justify-center items-center font-cyber tracking-wider"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Visual scan line effect */}
      <motion.div 
        className="absolute left-0 w-full h-[2px] bg-cyberred/60 mix-blend-overlay pointer-events-none"
        style={{ top: "50%" }}
        initial={{ scaleX: 0 }}
        animate={{ 
          scaleX: isHovered ? [0, 1, 1, 0] : 0,
          x: isHovered ? ["-100%", "0%", "0%", "100%"] : "0%"
        }}
        transition={{ 
          duration: 0.4,
          times: [0, 0.3, 0.7, 1]
        }}
      />
    </motion.button>
  );
};

export default CyberButton;
