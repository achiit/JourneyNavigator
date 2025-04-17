import React, { useRef } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WorldSection from "@/components/WorldSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";
import ScanLine from "@/components/ScanLine";
import MatrixBackground from "@/components/MatrixBackground";
import HorizontalCharacterScroll from "@/components/HorizontalCharacterScroll";
import { motion, useScroll, useTransform } from "framer-motion";
import { characters } from "@/data/characters";
import CyberButton from "@/components/CyberButton";

export default function Home() {
  const mainContainerRef = useRef<HTMLDivElement>(null);
  
  // Parallax effect for background elements
  const { scrollYProgress } = useScroll({
    target: mainContainerRef,
    offset: ["start", "end"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const floatingElementsY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  
  return (
    <motion.div 
      ref={mainContainerRef}
      className="bg-cyberdark text-white min-h-screen relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Global effects */}
      <ScanLine />
      <div className="noise"></div>
      
      {/* Animated background elements with parallax */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-0"
        style={{ y: backgroundY }}
      >
        <MatrixBackground />
      </motion.div>
      
      {/* Floating background elements with parallax */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-full pointer-events-none z-10"
        style={{ y: floatingElementsY }}
      >
        {/* Decorative floating elements */}
        <motion.div 
          className="absolute top-[15%] right-[10%] w-40 h-40 border border-cyberred/20 transform rotate-45"
          animate={{ rotate: 90 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute top-[60%] left-[8%] w-60 h-60 border border-cyberred/10 transform -rotate-12"
          animate={{ rotate: -372 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute top-[35%] right-[15%] w-24 h-24 border border-cyberblue/15 transform rotate-30"
          animate={{ rotate: 390 }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>
      
      {/* Main content */}
      <Header />
      <HeroSection />
      
      {/* Horizontal Character Scroll Section */}
      <div className="relative z-20">
        <HorizontalCharacterScroll characters={characters} />
      </div>
      
      {/* World Section with Parallax */}
      <div className="relative z-20">
        <WorldSection />
      </div>
      
      {/* CTA Section before Newsletter */}
      <section className="py-20 px-4 relative z-20 overflow-hidden">
        <div className="container mx-auto max-w-5xl">
          <motion.div 
            className="bg-cyberdark2/80 border-2 border-cybergray p-8 md:p-12 relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            {/* Corner designs */}
            <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-cyberred -translate-x-2 -translate-y-2"></div>
            <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-cyberred translate-x-2 -translate-y-2"></div>
            <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-cyberred -translate-x-2 translate-y-2"></div>
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-cyberred translate-x-2 translate-y-2"></div>
            
            <div className="flex flex-col md:flex-row items-center gap-8">
              <motion.div 
                className="flex-1"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-3xl md:text-4xl font-cyber font-bold mb-4">
                  <span className="text-cyberred">ENTER</span> THE DIGITAL REALM
                </h2>
                <p className="font-code text-gray-300 mb-6">
                  Experience the ultimate cyberpunk adventure with our immersive digital world. Join thousands of players in the streets of Neo-Tokyo.
                </p>
                <div className="flex flex-wrap gap-4">
                  <CyberButton japaneseText="今すぐ参加" primary>
                    JOIN NOW
                  </CyberButton>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex-1 relative h-48 md:h-64"
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {/* Animated data visualization */}
                <div className="absolute inset-0 font-code text-xs text-cyberblue overflow-hidden">
                  <motion.div
                    initial={{ y: 0 }}
                    animate={{ y: [0, -500] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    {Array.from({ length: 30 }).map((_, i) => (
                      <div key={i} className="flex gap-2 mb-2">
                        <span className="text-cyberred">[{String(i).padStart(2, '0')}]</span>
                        <span>
                          {i % 5 === 0 ? 
                            'QUANTUM DATA STREAM INITIALIZED' : 
                            i % 3 === 0 ? 
                            'NEURAL NETWORK SYNCHRONIZED' : 
                            'CONNECTION SECURE // READY FOR TRANSFER'}
                        </span>
                      </div>
                    ))}
                  </motion.div>
                </div>
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-cyberdark2/80 via-transparent to-cyberdark2/80 pointer-events-none"></div>
              </motion.div>
            </div>
            
            {/* Animated scan line */}
            <motion.div 
              className="absolute top-0 left-0 w-full h-2 bg-cyberred/20"
              animate={{ 
                y: [0, 300, 0]
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity,
                ease: "linear" 
              }}
            />
          </motion.div>
        </div>
      </section>
      
      <NewsletterSection />
      <Footer />
    </motion.div>
  );
}
