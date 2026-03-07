import React from 'react';
import { motion } from 'motion/react';
import resumeData from '../data/resume.json';

export const Summary: React.FC = () => {
  const { basics } = resumeData;
  
  return (
    <section id="summary" className="py-24 px-6 relative z-10 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="bg-slate-800/40 backdrop-blur-sm border border-white/5 p-8 md:p-12 rounded-3xl shadow-xl"
      >
        <h2 className="text-3xl font-bold text-white mb-6">Professional Summary</h2>
        <p className="text-slate-300 text-lg leading-relaxed">
          {basics.summary.replace(/^"|"$/g, '')}
        </p>
      </motion.div>
    </section>
  );
};
