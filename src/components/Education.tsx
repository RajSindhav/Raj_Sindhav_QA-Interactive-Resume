import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Calendar, Award } from 'lucide-react';
import resumeData from '../data/resume.json';

export const Education: React.FC = () => {
  const { education, certifications } = resumeData;

  return (
    <section id="education" className="py-24 px-6 relative z-10 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 flex items-center justify-center gap-3">
          <GraduationCap className="w-10 h-10 text-emerald-400" />
          Education & Certifications
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-emerald-400" />
            Education
          </h3>
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-800/40 backdrop-blur-sm border border-white/5 p-6 rounded-2xl hover:border-emerald-500/30 transition-colors"
            >
              <h4 className="text-xl font-bold text-white mb-1">{edu.degree}</h4>
              <p className="text-emerald-300 font-medium mb-3">{edu.institution}</p>
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <Calendar className="w-4 h-4" />
                <span>{edu.dates}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Award className="w-6 h-6 text-emerald-400" />
            Certifications
          </h3>
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-800/40 backdrop-blur-sm border border-white/5 p-6 rounded-2xl hover:border-emerald-500/30 transition-colors flex items-center gap-4"
            >
              <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-400">
                <Award className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">{cert}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
