import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AnimatedBackground } from './components/AnimatedBackground';
import { Hero } from './components/Hero';
import { Summary } from './components/Summary';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import resumeData from './data/resume.json';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export default function App() {
  const [loading, setLoading] = useState(true);
  const { basics } = resumeData;

  useEffect(() => {
    // Simulate initial loading screen
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-indigo-500/30">
      <AnimatedBackground />

      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-6xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mb-8"
            >
              RS
            </motion.div>
            <div className="w-48 h-1 bg-slate-800 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-indigo-500 to-purple-500"
              />
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <nav className="fixed top-0 left-0 right-0 z-40 bg-slate-950/50 backdrop-blur-md border-b border-white/5 py-4 px-6 md:px-12 flex justify-between items-center">
              <div className="text-2xl font-bold tracking-tighter text-white">
                {basics.name}<span className="text-indigo-500">.</span>
              </div>
              <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
                <a href="#home" className="text-indigo-400 border-b-2 border-indigo-400 pb-1">Home</a>
                <a href="#summary" className="hover:text-white transition-colors pb-1">Summary</a>
                <a href="#skills" className="hover:text-white transition-colors pb-1">Skills</a>
                <a href="#experience" className="hover:text-white transition-colors pb-1">Experience</a>
                <a href="#education" className="hover:text-white transition-colors pb-1">Education</a>
                <a href="#contact" className="hover:text-white transition-colors pb-1">Contact</a>
              </div>
            </nav>

            <main>
              <Hero />
              <Summary />
              <Skills />
              <Experience />
              <Education />
            </main>

            <footer id="contact" className="py-12 text-center border-t border-white/5 bg-slate-950/80 backdrop-blur-sm mt-24">
              <div className="flex justify-center gap-6 mb-8">
                <a href={`mailto:${basics.email}`} className="p-3 bg-slate-900 rounded-full text-slate-400 hover:text-white hover:bg-indigo-600 transition-all">
                  <Mail className="w-6 h-6" />
                </a>
                <a href={`https://${basics.links[0]}`} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-900 rounded-full text-slate-400 hover:text-white hover:bg-indigo-600 transition-all">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href={`tel:${basics.phone}`} className="p-3 bg-slate-900 rounded-full text-slate-400 hover:text-white hover:bg-indigo-600 transition-all">
                  <Phone className="w-6 h-6" />
                </a>
              </div>
              <p className="text-slate-500 text-sm">
                © {new Date().getFullYear()} {basics.name}. All rights reserved.
              </p>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
