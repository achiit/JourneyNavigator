import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CharacterShowcase from "@/components/CharacterShowcase";
import WorldSection from "@/components/WorldSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";
import ScanLine from "@/components/ScanLine";
import MatrixBackground from "@/components/MatrixBackground";
import { motion } from "framer-motion";

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
      <CharacterShowcase />
      <WorldSection />
      <NewsletterSection />
      <Footer />
    </motion.div>
  );
}
