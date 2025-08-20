import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'Intrusion Detection System',
      description: 'ML-based system detecting DoS, Exploits, Fuzzers, etc., using UNSW-NB15 dataset. Random Forest achieved highest accuracy. Flask web app for real-time threat predictions.',
      github: 'https://github.com/ManivardhanDonuri/Intrusion_Detection_System',
      tags: ['Machine Learning', 'Flask', 'Cybersecurity'],
    },
    {
      title: 'Lung Cancer Detection',
      description: 'Deep learning model (VGG16 + transfer learning) classifying lung diseases. Flask/Streamlit app for real-time X-ray predictions.',
      github: 'https://github.com/Bhanuprakashachini/Lung-Disease-Classification-',
      tags: ['Deep Learning', 'VGG16', 'Medical AI'],
    },
    {
      title: 'Algo Trading System with ML Automation',
      description: 'Developed an algorithmic trading platform using machine learning for stock prediction and automated trade execution. Integrated with live market data APIs for real-time decision-making.',
      github: 'https://github.com/Bhanuprakashachini/Algo-Trading-System-with-ML-Automation',
      tags: ['Machine Learning', 'Trading', 'APIs'],
    },
    {
      title: 'Salary Prediction and Resume Rate Calculation',
      description: 'Built a predictive model for estimating salary based on job-related features and resume scoring. Implemented using regression algorithms and NLP techniques.',
      github: 'https://github.com/Bhanuprakashachini/Salary-Prediction-and-Resume-Rate-calculation',
      tags: ['NLP', 'Regression', 'Data Science'],
    },
    {
      title: 'COVID-19 Prediction Using Chest X-rays',
      description: 'CNN-based model for classifying COVID-19 and other respiratory diseases from X-ray images. Implemented data augmentation and transfer learning.',
      github: 'https://github.com/Bhanuprakashachini/Covid-19-Prediction',
      tags: ['CNN', 'Medical AI', 'Transfer Learning'],
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gray-800 dark:bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-10"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-4 neon-text">
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="glass-effect p-6 rounded-lg h-full hover:neon-glow transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => window.open(project.github, '_blank')}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300"
                >
                  <Github className="w-4 h-4" />
                  View on GitHub
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;