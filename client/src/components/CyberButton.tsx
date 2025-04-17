import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CyberButtonProps {
  children: React.ReactNode;
  className?: string;
  japaneseText: string;
  onClick?: () => void;
  primary?: boolean;
  pulseGlow?: boolean;
}

const CyberButton: React.FC<CyberButtonProps> = ({ 
  children, 
  className, 
  japaneseText, 
  onClick, 
  primary = false,
  pulseGlow = false
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const japaneseRef = useRef<HTMLSpanElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const originalText = useRef<string>(japaneseText);
  
  // Japanese character pool for cycling
  const japaneseCharPool = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン';
  
  // Function to randomly replace characters
  const cycleCharacters = () => {
    if (!japaneseRef.current) return;
    
    const chars = originalText.current.split('');
    
    // 20% chance to change a character
    if (Math.random() > 0.8) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      chars[randomIndex] = japaneseCharPool.charAt(Math.floor(Math.random() * japaneseCharPool.length));
      japaneseRef.current.textContent = chars.join('');
    } else {
      japaneseRef.current.textContent = originalText.current;
    }
  };
  
  // Start character cycling when component mounts
  useEffect(() => {
    if (isHovered) return;
    
    intervalRef.current = setInterval(cycleCharacters, 200);
    
    // Cleanup interval on unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isHovered]);
  
  // Handle hover states
  const handleMouseEnter = () => {
    setIsHovered(true);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };
  
  const handleMouseLeave = () => {
    setIsHovered(false);
    intervalRef.current = setInterval(cycleCharacters, 200);
  };
  
  return (
    <motion.button
      className={cn(
        "cyber-button relative overflow-hidden transition-all duration-300",
        primary ? "bg-cyberred" : "bg-cyberdark2 border border-cyberred",
        pulseGlow ? "animate-pulse-glow" : "",
        "text-white font-cyber uppercase px-8 py-4 rounded-sm", 
        className
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      whileHover={{ 
        boxShadow: primary 
          ? "0 0 25px 5px rgba(255, 45, 85, 0.6)" 
          : "0 0 15px 2px rgba(255, 45, 85, 0.4)"
      }}
    >
      <div className="btn-glitch absolute top-0 left-0 w-full h-full bg-cyberred/10 opacity-0 mix-blend-screen z-5 group-hover:opacity-100"></div>
      
      <motion.span 
        className="btn-text-jp absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center font-jp z-2"
        ref={japaneseRef}
        initial={{ opacity: 1 }}
        animate={{ 
          opacity: isHovered ? 0 : 1,
          scale: isHovered ? 1.05 : 1,
          x: isHovered ? "-52%" : "-50%",
          y: isHovered ? "-48%" : "-50%", 
        }}
        transition={{ 
          duration: 0.4,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {japaneseText}
      </motion.span>
      
      <motion.span 
        className="btn-text-en relative z-3 opacity-0"
        initial={{ opacity: 0, scale: 0.8, y: 5 }}
        animate={{ 
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1 : 0.8,
          y: isHovered ? 0 : 5 
        }}
        transition={{ 
          duration: 0.4,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {children}
      </motion.span>
      
      {/* Hidden span to maintain button size */}
      <span className="opacity-0">{children}</span>
    </motion.button>
  );
};

export default CyberButton;
