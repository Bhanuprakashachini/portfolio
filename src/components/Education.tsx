import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Award } from 'lucide-react';

const Education: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education = [
    {
      degree: 'B.Tech – CSE (Data Science)',
      institution: 'Sreyas Institute of Engineering and Technology',
      period: '2022–2026',
      grade: 'CGPA: 7.18',
      icon: GraduationCap,
    },
    {
      degree: 'Diploma – Electronics & Communication Engineering',
      institution: 'TKR College of Engineering and Technology',
      period: '2020–2022',
      grade: '61%',
      icon: Award,
    },
  ];

  return (
    <section id="education" className="py-20 px-6 bg-gray-800 dark:bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-10"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-4 neon-text">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>

          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                <div className="glass-effect p-6 rounded-lg hover:neon-glow transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <edu.icon className="w-6 h-6 text-blue-400" />
                    <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                  </div>
                  <p className="text-blue-300 font-medium mb-2">{edu.institution}</p>
                  <p className="text-gray-400 mb-2">{edu.period}</p>
                  <p className="text-green-400 font-semibold">{edu.grade}</p>
                </div>
              </div>

              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-gray-900 animate-pulse-glow"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;