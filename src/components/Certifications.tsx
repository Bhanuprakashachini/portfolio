import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, ExternalLink } from 'lucide-react';

const Certifications: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const certifications = [
    {
      title: 'Data Analytics',
      provider: 'Cisco',
      url: 'https://courses.cognitiveclass.ai/certificates/badf9a5c4ef64da0b1755c4338cd564e',
      icon: '📊',
    },
    {
      title: 'Python for Data Science',
      provider: 'IBM',
      url: 'https://courses.cognitiveclass.ai/certificates/badf9a5c4ef64da0b1755c4338cd564e',
      icon: '🐍',
    },
    {
      title: 'DBMS',
      provider: 'Scalar',
      url: 'https://moonshot.scaler.com/s/sl/SkpOGG8Bp2',
      icon: '🗄️',
    },
    {
      title: 'Machine Learning',
      provider: 'Scalar',
      url: 'https://moonshot.scaler.com/s/sl/xY_0-2iosF',
      icon: '🤖',
    },
  ];

  return (
    <section id="certifications" className="py-20 px-6 bg-gray-800 dark:bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-10"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-4 neon-text">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => window.open(cert.url, '_blank')}
            >
              <div className="glass-effect p-6 rounded-lg text-center hover:neon-glow transition-all duration-300 transform hover:-translate-y-2 h-full">
                <div className="text-5xl mb-4 group-hover:animate-pulse">
                  {cert.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-blue-300 mb-4">{cert.provider}</p>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-400 group-hover:text-blue-400 transition-colors">
                  <Award className="w-4 h-4" />
                  <span>View Certificate</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;