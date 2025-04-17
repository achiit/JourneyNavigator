import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';

const navItems = [
  { label: 'HOME', japaneseLabel: 'ホーム', href: '/' },
  { label: 'CHARACTERS', japaneseLabel: 'キャラクター', href: '/characters' },
  { label: 'WORLD', japaneseLabel: 'ワールド', href: '/world' },
  { label: 'COMMUNITY', japaneseLabel: 'コミュニティ', href: '/community' },
];

const NavItem: React.FC<{ label: string, japaneseLabel: string, href: string }> = ({ label, japaneseLabel, href }) => {
  return (
    <li>
      <Link href={href}>
        <a className="nav-item font-cyber text-lg uppercase tracking-wide relative overflow-hidden block">
          <span className="block transition-all duration-300">{label}</span>
          <span className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 transform -translate-y-full transition-all duration-300 text-cyberred font-jp">
            {japaneseLabel}
          </span>
        </a>
      </Link>
    </li>
  );
};

const Header: React.FC = () => {
  return (
    <motion.header 
      className="relative py-6 px-4 md:px-8 lg:px-16 border-b border-cybergray z-50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <motion.div 
            className="animate-pulse-glow"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-cyberred font-cyber tracking-wider">
              <span className="relative inline-block">
                <span className="relative z-10">CYBER<span className="text-white">NOMAD</span></span>
                <span className="absolute top-0 left-0 w-full h-full bg-cyberred opacity-20 blur-md -z-10"></span>
              </span>
            </h1>
          </motion.div>
          <span className="text-xs text-cyberblue ml-2 font-code">v0.9.2</span>
        </div>
        
        <nav className="w-full md:w-auto">
          <ul className="flex flex-wrap justify-center md:justify-end gap-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                <NavItem {...item} />
              </motion.div>
            ))}
          </ul>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
