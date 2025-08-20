import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Users, Lightbulb } from 'lucide-react';

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="py-20 px-6 bg-gray-900 dark:bg-black relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-4 neon-text">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-effect p-8 rounded-lg hover:neon-glow transition-all duration-300"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full">
              <Code className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-white">Web Development Internship</h3>
              <p className="text-blue-400">Dec 2024 - Jan 2025</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
              <p className="text-gray-300">
                Learned and applied principles of frontend development, responsive design, and collaborative coding.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <Users className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
              <p className="text-gray-300">
                Worked on real-world projects improving user experience.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;