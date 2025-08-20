import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Linkedin, Github, Instagram, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    alert('Message sent! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9701931918',
      href: 'tel:+919701931918',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'bhanuprakashachini08@gmail.com',
      href: 'mailto:bhanuprakashachini08@gmail.com',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Hyderabad, Telangana',
      href: '#',
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/bhanu-prakash-achini-b261312ba',
      color: 'text-blue-400',
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Bhanuprakashachini',
      color: 'text-gray-400',
    },
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-gray-900 dark:bg-black relative overflow-hidden">
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
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-transparent border-2 border-blue-500/30 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors glass-effect"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-transparent border-2 border-blue-500/30 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors glass-effect"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-transparent border-2 border-blue-500/30 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors glass-effect resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300 neon-glow flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{info.label}</p>
                    {info.href === '#' ? (
                      <p className="text-white font-medium">{info.value}</p>
                    ) : (
                      <a
                        href={info.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white font-medium hover:text-blue-400 transition-colors"
                      >
                        {info.value}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8">
              <h3 className="text-xl font-semibold text-white mb-6">Follow Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 glass-effect rounded-full ${social.color} hover:neon-glow transition-all duration-300 transform hover:scale-110`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>

            {/* Animated Map Marker */}
            <motion.div
              className="flex items-center gap-2 text-blue-400"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <MapPin className="w-5 h-5" />
              <span className="text-sm">Based in Hyderabad, Telangana</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;