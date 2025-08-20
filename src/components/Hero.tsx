import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, FileText, Mail, Briefcase } from 'lucide-react';
import ParticleBackground from './ParticleBackground';
import BinaryRain from './BinaryRain';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const openResume = () => {
    window.open(
      'https://drive.google.com/file/d/1ZrnlxY5zBWsLHJRCMX3MIuTHrl1Ns2BG/view?usp=sharing',
      '_blank'
    );
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 dark:from-black dark:via-gray-900 dark:to-purple-900">
      <ParticleBackground />
      <BinaryRain />

      {/* Glowing Gradient Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 shadow-lg bg-gradient-to-r from-purple-800/70 via-blue-900/70 to-purple-800/70 backdrop-blur-md border-b border-blue-500/40">
  <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
    
    {/* Name + Instagram */}
    <div className="flex items-center gap-3">
      <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-extrabold text-2xl tracking-wider">
        Bhanu
      </h2>
      <a
        href="https://www.instagram.com/bhanu1_8/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-110 transition-transform duration-300"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
          alt="Instagram"
          className="w-7 h-7 rounded-full"
        />
      </a>
    </div>

    {/* Navbar Links */}
    <ul className="flex gap-6 text-gray-200 font-medium">
      {[
        { name: 'About', action: () => scrollToSection('about') },
        { name: 'Projects', action: () => scrollToSection('projects') },
        { name: 'Resume', action: openResume },
        { name: 'Contact', action: () => scrollToSection('contact') },
      ].map((item) => (
        <li
          key={item.name}
          onClick={item.action}
          className="relative cursor-pointer px-2 py-1 group"
        >
          <span className="transition-colors duration-300 group-hover:text-cyan-400">
            {item.name}
          </span>
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
        </li>
      ))}
    </ul>
  </div>
</nav>


      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-8"
        >
          <motion.h1
            className="text-6xl md:text-8xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 drop-shadow-[0_0_5px_rgba(0,255,255,0.4)]"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, type: 'spring' }}
          >
            BHANU PRAKASH
            <div className="text-4xl md:text-6xl text-blue-300 drop-shadow-[0_0_3px_rgba(0,191,255,0.5)]">
            ACHINI
            </div>
          </motion.h1>


          <motion.p
            className="text-xl md:text-2xl text-gray-300 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Aspiring Data Scientist & Full-Stack Developer
          </motion.p>

          <motion.p
            className="text-lg md:text-xl text-blue-300 italic max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            "Transforming data into insights, and ideas into applications."
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <button
              onClick={() => scrollToSection('projects')}
              className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-white font-semibold hover:shadow-[0_0_15px_rgba(0,255,255,0.8)] transition-all duration-300 neon-glow flex items-center gap-2"
            >
              <Briefcase className="w-5 h-5" />
              View My Work
            </button>

            <button
              onClick={openResume}
              className="group px-8 py-4 glass-effect rounded-full text-white font-semibold hover:shadow-[0_0_15px_rgba(255,0,255,0.8)] transition-all duration-300 flex items-center gap-2"
            >
              <FileText className="w-5 h-5" />
              View Resume
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="group px-8 py-4 border-2 border-cyan-400 rounded-full text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Contact Me
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Down Arrow */}
      <motion.div
        onClick={() => scrollToSection('about')}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8 text-cyan-400" />
      </motion.div>
    </section>
  );
};

export default Hero;
