import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { name: 'Python', icon: '🐍' },
    { name: 'Java', icon: '☕' },
    { name: 'R', icon: '📊' },
    { name: 'MySQL', icon: '🗄️' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'Tableau', icon: '📈' },
    { name: 'Hadoop', icon: '🐘' },
    { name: 'Model Development & Training', icon: '🤖' },
    { name: 'Data Structures (Python)', icon: '🏗️' },
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gray-900 dark:bg-black relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-4 neon-text">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="glass-effect p-6 rounded-lg text-center hover:neon-glow transition-all duration-300 transform hover:scale-105 cursor-pointer">
                <div className="text-4xl mb-3 group-hover:animate-bounce">
                  {skill.icon}
                </div>
                <h3 className="text-sm font-medium text-white group-hover:text-blue-400 transition-colors">
                  {skill.name}
                </h3>
              </div>
              
              {/* Tooltip */}
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black text-white px-3 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-20">
                {skill.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;