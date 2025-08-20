import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const values = ['Problem-Solving', 'Leadership', 'Communication', 'Time Management'];

  return (
    <section id="about" className="py-20 px-6 bg-gray-900 dark:bg-black relative overflow-hidden">
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
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Animated gradient background */}
              <div className="w-80 h-80 rounded-full overflow-hidden animate-gradient">
                <img
                  src="/src/assets/My pic.jpg"
                  alt="Bhanu Prakash Achini"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a Computer Science and Engineering (Data Science) undergraduate with a passion for solving problems through technology. Skilled in MERN stack development, machine learning, and data analytics, I aim to create impactful digital solutions. I thrive in environments where innovation meets precision.
            </p>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-blue-400 mb-4">Professional Values</h3>
              <div className="flex flex-wrap gap-3">
                {values.map((value, index) => (
                  <motion.span
                    key={value}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="px-4 py-2 glass-effect rounded-full text-sm font-medium text-blue-300 hover:neon-glow transition-all duration-300 cursor-default"
                  >
                    {value}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Animation styles inside the same file */}
      <style>{`
        @keyframes gradientShift {
          0% {
            background: radial-gradient(circle at center, #7e22ce, #1e1b4b);
          }
          50% {
            background: radial-gradient(circle at center, #3b82f6, #7e22ce);
          }
          100% {
            background: radial-gradient(circle at center, #7e22ce, #1e1b4b);
          }
        }
        .animate-gradient {
          animation: gradientShift 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default About;
