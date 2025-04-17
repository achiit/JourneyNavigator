import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CharacterShowcase from "@/components/CharacterShowcase";
import WorldSection from "@/components/WorldSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";
import ScanLine from "@/components/ScanLine";
import MatrixBackground from "@/components/MatrixBackground";
import CreativeCarousel from "@/components/CreativeCarousel";
import { motion } from "framer-motion";
import { characters } from "@/data/characters";
import CyberButton from "@/components/CyberButton";

// Convert character data to carousel format
const carouselCards = characters.map(char => ({
  id: char.id,
  title: char.name,
  japaneseTitle: char.japaneseTitle,
  description: char.description,
  imageUrl: char.imageUrl
}));

export default function Home() {
  return (
    <motion.div 
      className="bg-cyberdark text-white min-h-screen relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Global effects */}
      <ScanLine />
      <div className="noise"></div>
      <MatrixBackground />
      
      {/* Main content */}
      <Header />
      <HeroSection />
      
      {/* New Interactive Character Carousel Section */}
      <section className="py-20 px-4 relative z-10 overflow-hidden">
        <div className="container mx-auto">
          <motion.div 
            className="mb-12 relative"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-cyber font-bold inline-block">
              <span className="text-cyberred">ELITE</span> OPERATIVES
            </h2>
            <div className="absolute -bottom-4 left-0 w-24 h-1 bg-cyberred"></div>
            <p className="font-code text-gray-400 mt-6 max-w-3xl">
              Explore our elite squad of cyber operatives. Hover over each agent to reveal their unique abilities and background data.
            </p>
          </motion.div>
          
          <CreativeCarousel cards={carouselCards} />
          
          <motion.div 
            className="mt-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <CyberButton japaneseText="詳細プロファイル">
              VIEW DETAILED PROFILES
            </CyberButton>
          </motion.div>
        </div>
      </section>
      
      <CharacterShowcase />
      <WorldSection />
      <NewsletterSection />
      <Footer />
    </motion.div>
  );
}
