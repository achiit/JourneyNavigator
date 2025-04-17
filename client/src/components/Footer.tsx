import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'wouter';

// Footer navigation categories
interface FooterLink {
  label: string;
  japaneseLabel: string;
  href: string;
}

const navLinks: FooterLink[] = [
  { label: 'HOME', japaneseLabel: 'ホーム', href: '/' },
  { label: 'CHARACTERS', japaneseLabel: 'キャラクター', href: '/characters' },
  { label: 'WORLD', japaneseLabel: 'ワールド', href: '/world' },
  { label: 'FACTIONS', japaneseLabel: 'ファクション', href: '/factions' },
  { label: 'TIMELINE', japaneseLabel: 'タイムライン', href: '/timeline' },
];

const resourceLinks: FooterLink[] = [
  { label: 'DEVELOPER BLOG', japaneseLabel: '開発ブログ', href: '/blog' },
  { label: 'PATCH NOTES', japaneseLabel: 'パッチノート', href: '/updates' },
  { label: 'COMMUNITY', japaneseLabel: 'コミュニティ', href: '/forum' },
  { label: 'SUPPORT', japaneseLabel: 'サポート', href: '/support' },
  { label: 'MEDIA', japaneseLabel: 'メディア', href: '/media' },
];

const legalLinks: FooterLink[] = [
  { label: 'TERMS', japaneseLabel: '利用規約', href: '/terms' },
  { label: 'PRIVACY', japaneseLabel: 'プライバシー', href: '/privacy' },
  { label: 'COOKIES', japaneseLabel: 'クッキー', href: '/cookies' },
  { label: 'GDPR', japaneseLabel: 'GDPR', href: '/gdpr' },
];

// Social icons with cyber animations
const CyberSocialIcon: React.FC<{ icon: string; href: string }> = ({ icon, href }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.2 }}
      transition={{ type: "spring", stiffness: 500, damping: 10 }}
    >
      <div className="w-10 h-10 flex items-center justify-center bg-cyberdark rounded-sm border border-cybergray overflow-hidden">
        <i className={`text-lg ${icon} ${isHovered ? 'text-cyberred' : 'text-gray-400'}`}></i>
        
        {/* Scan effect on hover */}
        {isHovered && (
          <motion.div 
            className="absolute top-0 left-0 w-full h-1 bg-cyberred/30"
            initial={{ y: -10 }}
            animate={{ y: 15 }}
            transition={{ duration: 0.8, repeat: Infinity, repeatType: "mirror" }}
          />
        )}
        
        {/* Corner accents that appear on hover */}
        <AnimatePresence>
          {isHovered && (
            <>
              <motion.div 
                className="absolute top-0 left-0 w-3 h-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <div className="absolute top-0 left-0 w-full h-[1px] bg-cyberred"></div>
                <div className="absolute top-0 left-0 h-full w-[1px] bg-cyberred"></div>
              </motion.div>
              
              <motion.div 
                className="absolute top-0 right-0 w-3 h-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, delay: 0.05 }}
              >
                <div className="absolute top-0 right-0 w-full h-[1px] bg-cyberred"></div>
                <div className="absolute top-0 right-0 h-full w-[1px] bg-cyberred"></div>
              </motion.div>
              
              <motion.div 
                className="absolute bottom-0 left-0 w-3 h-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, delay: 0.1 }}
              >
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-cyberred"></div>
                <div className="absolute bottom-0 left-0 h-full w-[1px] bg-cyberred"></div>
              </motion.div>
              
              <motion.div 
                className="absolute bottom-0 right-0 w-3 h-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, delay: 0.15 }}
              >
                <div className="absolute bottom-0 right-0 w-full h-[1px] bg-cyberred"></div>
                <div className="absolute bottom-0 right-0 h-full w-[1px] bg-cyberred"></div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.a>
  );
};

const socialIcons = [
  { icon: "fab fa-twitter", href: "https://twitter.com" },
  { icon: "fab fa-discord", href: "https://discord.com" },
  { icon: "fab fa-youtube", href: "https://youtube.com" },
  { icon: "fab fa-instagram", href: "https://instagram.com" },
  { icon: "fab fa-twitch", href: "https://twitch.tv" }
];

// Individual menu link with Japanese hover effect
const CyberFooterLink: React.FC<{ link: FooterLink }> = ({ link }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.li className="relative">
      <Link href={link.href}>
        <a 
          className="font-code text-sm text-gray-400 hover:text-cyberred block py-1"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence mode="wait">
            {isHovered ? (
              <motion.div
                key="japanese"
                className="font-jp text-cyberred"
                initial={{ y: 5, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -5, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {link.japaneseLabel}
              </motion.div>
            ) : (
              <motion.div
                key="english"
                initial={{ y: -5, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 5, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {link.label}
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Animated underline */}
          <motion.div 
            className="absolute bottom-0 left-0 h-[1px] bg-cyberred"
            initial={{ width: 0 }}
            animate={{ width: isHovered ? '100%' : 0 }}
            transition={{ duration: 0.3 }}
          />
        </a>
      </Link>
    </motion.li>
  );
};

// Terminal section component
const TerminalSection: React.FC = () => {
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [currentText, setCurrentText] = useState("");
  const fullText = "Accessing CYBERNOMAD mainframe...\nConnection established.\nUser authenticated.\nSystem status: ONLINE\nCyberNeon protocol activated.\nNeo-Tokyo server cluster responding.\nSecurity level: ALPHA\nEnjoy your stay in 2099.";
  
  useEffect(() => {
    if (terminalOpen) {
      let index = 0;
      const intervalId = setInterval(() => {
        if (index < fullText.length) {
          setCurrentText(fullText.substring(0, index + 1));
          index++;
        } else {
          clearInterval(intervalId);
        }
      }, 30);
      
      return () => clearInterval(intervalId);
    } else {
      setCurrentText("");
    }
  }, [terminalOpen]);
  
  return (
    <motion.div 
      className="bg-cyberdark border border-cybergray overflow-hidden"
      animate={{ height: terminalOpen ? 200 : 48 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div 
        className="bg-cyberdark2 px-4 py-3 font-code text-xs text-gray-300 flex justify-between items-center cursor-pointer border-b border-cybergray"
        onClick={() => setTerminalOpen(!terminalOpen)}
      >
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-cyberred"></div>
            <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
          </div>
          <span className="text-cyberred font-bold">SYSTEM_TERMINAL</span>
        </div>
        <div className="text-xs">
          {terminalOpen ? "[ - MINIMIZE - ]" : "[ + EXPAND + ]"}
        </div>
      </div>
      
      <div className="p-3 font-code text-xs text-green-500 overflow-auto h-full">
        <div className="whitespace-pre-line">{currentText}</div>
        {currentText === fullText && (
          <div className="mt-2 flex items-center">
            <span className="mr-1 text-cyberblue">root@cybernomad:~$</span>
            <span className="inline-block w-2 h-4 bg-cyberblue animate-pulse"></span>
          </div>
        )}
      </div>
    </motion.div>
  );
};

// Main footer
const Footer: React.FC = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  
  return (
    <footer className="relative bg-cyberdark2 pt-16 pb-8 px-4 md:px-8 lg:px-16 overflow-hidden" ref={footerRef}>
      {/* Top cyber-grid design */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-cybergray"></div>
      <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-b from-cyberred/20 to-transparent"></div>
      
      {/* Animated circuit pattern in the background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="circuit" width="120" height="120" patternUnits="userSpaceOnUse">
            <path d="M30 10 L60 10 L60 30 L90 30 L90 60 L110 60" stroke="#FF2D55" strokeWidth="1" fill="none" />
            <path d="M10 30 L30 30 L30 60 L60 60 L60 90 L30 90 L30 110" stroke="#FF2D55" strokeWidth="1" fill="none" />
            <path d="M110 10 L90 10 L90 40 L40 40 L40 70 L10 70" stroke="#FF2D55" strokeWidth="1" fill="none" />
            <path d="M110 50 L80 50 L80 80 L50 80 L50 110" stroke="#FF2D55" strokeWidth="1" fill="none" />
            <circle cx="30" cy="10" r="3" fill="#FF2D55" />
            <circle cx="90" cy="30" r="3" fill="#FF2D55" />
            <circle cx="110" cy="60" r="3" fill="#FF2D55" />
            <circle cx="30" cy="110" r="3" fill="#FF2D55" />
            <circle cx="10" cy="70" r="3" fill="#FF2D55" />
            <circle cx="50" cy="110" r="3" fill="#FF2D55" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>
      
      <div className="container mx-auto">
        {/* Main grid content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 relative">
          {/* Logo and social icons */}
          <motion.div
            className="md:col-span-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Terminal effect logo */}
            <motion.div
              className="bg-cyberdark border-2 border-cybergray p-4 mb-6 max-w-xs relative overflow-hidden"
              initial={{ x: -100 }}
              whileInView={{ x: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
            >
              <div className="relative z-10">
                <h3 className="text-2xl font-cyber font-bold flex flex-col">
                  <motion.span 
                    className="text-white"
                    animate={{ color: ["#ffffff", "#FF2D55", "#ffffff"] }}
                    transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                  >
                    CYBER<span className="text-cyberred">NOMAD</span>
                  </motion.span>
                  <span className="text-sm font-code text-cyberblue mt-1">// ネオ東京 2099</span>
                </h3>
                
                <p className="text-gray-400 text-sm font-code mt-4 mb-1">
                  The definitive cyberpunk anime experience. Dive into a world of high tech and low life.
                </p>
                
                <div className="font-jp text-xs text-cyberred opacity-70 mb-2">
                  テクノロジーと人間性が交差する世界
                </div>
              </div>
              
              {/* Background scan effect */}
              <motion.div 
                className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-cyberred/10 to-transparent"
                animate={{ 
                  y: [0, 150, 0],
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity,
                  ease: "linear" 
                }}
              />
              
              {/* Border corners */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyberred"></div>
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyberred"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyberred"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyberred"></div>
            </motion.div>
            
            {/* Social Icons - Grid layout */}
            <div className="grid grid-cols-5 gap-2">
              {socialIcons.map((social, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <CyberSocialIcon icon={social.icon} href={social.href} />
                </motion.div>
              ))}
            </div>
            
            {/* Terminal section for immersive effect */}
            <div className="mt-6">
              <TerminalSection />
            </div>
          </motion.div>
          
          {/* Navigation links - Three columns */}
          <motion.div 
            className="md:col-span-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Navigation Links */}
              <div className="space-y-4">
                <div className="relative">
                  <h4 className="text-cyberred font-cyber text-lg mb-4 inline-block">
                    NAV_LINKS
                  </h4>
                  <motion.div 
                    className="absolute -bottom-1 left-0 h-[1px] bg-cyberred" 
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  />
                </div>
                <ul className="space-y-2">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.label}
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                    >
                      <CyberFooterLink link={link} />
                    </motion.div>
                  ))}
                </ul>
              </div>
              
              {/* Resources */}
              <div className="space-y-4">
                <div className="relative">
                  <h4 className="text-cyberred font-cyber text-lg mb-4 inline-block">
                    RESOURCES
                  </h4>
                  <motion.div 
                    className="absolute -bottom-1 left-0 h-[1px] bg-cyberred" 
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  />
                </div>
                <ul className="space-y-2">
                  {resourceLinks.map((link, index) => (
                    <motion.div
                      key={link.label}
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                    >
                      <CyberFooterLink link={link} />
                    </motion.div>
                  ))}
                </ul>
              </div>
              
              {/* Legal + Version info with data animation */}
              <div className="space-y-4">
                <div className="relative">
                  <h4 className="text-cyberred font-cyber text-lg mb-4 inline-block">
                    LEGAL
                  </h4>
                  <motion.div 
                    className="absolute -bottom-1 left-0 h-[1px] bg-cyberred" 
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                  />
                </div>
                <ul className="space-y-2">
                  {legalLinks.map((link, index) => (
                    <motion.div
                      key={link.label}
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 1 + index * 0.1 }}
                    >
                      <CyberFooterLink link={link} />
                    </motion.div>
                  ))}
                </ul>
                
                {/* System status section */}
                <motion.div 
                  className="mt-6 border border-cybergray p-3 bg-cyberdark"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                >
                  <div className="text-xs font-code text-cyberblue">
                    <div className="flex justify-between">
                      <span>VERSION</span>
                      <span>v0.9.2</span>
                    </div>
                    <div className="flex justify-between mt-1">
                      <span>SYSTEM</span>
                      <span className="text-green-500">ONLINE</span>
                    </div>
                    <div className="flex justify-between mt-1">
                      <span>PING</span>
                      <motion.span 
                        animate={{ opacity: [1, 0.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        23ms
                      </motion.span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Bottom bar with copyright and final animation */}
        <motion.div 
          className="mt-12 pt-6 border-t border-cybergray relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs font-code">
            <div className="mb-4 md:mb-0 text-center md:text-left">
              <div>© 2099 CYBERNOMAD CORPORATION. ALL RIGHTS RESERVED.</div>
              <div className="text-gray-600 mt-1">THIS IS A FICTIONAL WEBSITE.</div>
            </div>
            
            <div className="flex space-x-2">
              <motion.div 
                className="px-2 py-1 border border-cybergray bg-cyberdark"
                whileHover={{ borderColor: "#FF2D55" }}
              >
                <span className="text-cyberred font-jp">日本語</span>
              </motion.div>
              <motion.div 
                className="px-2 py-1 border border-cybergray bg-cyberdark"
                whileHover={{ borderColor: "#FF2D55" }}
              >
                <span className="text-cyberred">ENGLISH</span>
              </motion.div>
            </div>
          </div>
          
          {/* Scanline effect at the bottom */}
          <motion.div 
            className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyberred/30 to-transparent"
            animate={{ 
              x: ["-100%", "100%"],
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
