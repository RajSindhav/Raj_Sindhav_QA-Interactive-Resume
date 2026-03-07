import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import resumeData from '../data/resume.json';

export const Hero: React.FC = () => {
  const { basics } = resumeData;
  const [text, setText] = useState('');
  const fullText = "QA Engineer | ISTQB Certified | API Testing Expert";
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const handleScrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadResume = () => {
    alert("Resume download functionality would be implemented here.");
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center px-6 md:px-32 pt-20 z-10">
      <div className="max-w-4xl">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight"
        >
          Hi, I'm {basics.name}
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-3xl font-bold mb-4 h-10 text-indigo-300"
        >
          {text}<span className="text-indigo-500 animate-pulse">|</span>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl"
        >
          QA Engineer | ISTQB Certified | API & Manual Testing Specialist
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap gap-4"
        >
          <button 
            onClick={handleScrollToContact}
            className="px-8 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-xl shadow-lg hover:shadow-indigo-500/25 transition-all"
          >
            Hire Me
          </button>
          <button 
            onClick={handleDownloadResume}
            className="px-8 py-3.5 bg-slate-800/80 hover:bg-slate-700/80 text-white border border-white/10 font-medium rounded-xl shadow-lg backdrop-blur-sm transition-all"
          >
            Preview Resume
          </button>
        </motion.div>
      </div>
    </section>
  );
};
