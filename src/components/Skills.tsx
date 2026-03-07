import React from 'react';
import { motion } from 'motion/react';
import { Code2, Cpu, Wrench, Zap, ShieldCheck, BrainCircuit } from 'lucide-react';
import resumeData from '../data/resume.json';

export const Skills: React.FC = () => {
  const { skills, extra } = resumeData;

  const getIcon = (group: string) => {
    switch (group.toLowerCase()) {
      case 'top skills':
        return <Zap className="w-6 h-6 text-amber-400" />;
      case 'qa & testing':
        return <ShieldCheck className="w-6 h-6 text-emerald-400" />;
      case 'ai & prompt engineering':
        return <BrainCircuit className="w-6 h-6 text-indigo-400" />;
      case 'tools & domain':
        return <Wrench className="w-6 h-6 text-blue-400" />;
      default:
        return <Code2 className="w-6 h-6 text-purple-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 px-6 relative z-10 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 flex items-center justify-center gap-3">
          <Cpu className="w-10 h-10 text-purple-400" />
          Skills & Expertise
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skillGroup, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-slate-800/40 backdrop-blur-sm border border-white/5 p-8 rounded-3xl hover:border-purple-500/30 transition-all shadow-xl hover:shadow-purple-500/10 group"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-slate-900/50 rounded-xl group-hover:scale-110 transition-transform">
                {getIcon(skillGroup.group)}
              </div>
              <h3 className="text-2xl font-bold text-white">{skillGroup.group}</h3>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {skillGroup.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-slate-900/50 text-slate-300 rounded-lg text-sm font-medium border border-white/5 hover:border-purple-500/50 hover:text-white transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}

        {extra.length > 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: skills.length * 0.1 }}
            className="bg-slate-800/40 backdrop-blur-sm border border-white/5 p-8 rounded-3xl hover:border-pink-500/30 transition-all shadow-xl hover:shadow-pink-500/10 group md:col-span-2 lg:col-span-3"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-slate-900/50 rounded-xl group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6 text-pink-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Additional Expertise</h3>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {extra.map((item, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-slate-900/50 text-slate-300 rounded-lg text-sm font-medium border border-white/5 hover:border-pink-500/50 hover:text-white transition-colors cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};
