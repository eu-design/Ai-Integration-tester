import React, { useEffect, useState } from 'react';
import { Background } from './components/Background';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Ticker } from './components/Ticker';
import { Footer } from './components/Footer';
import { motion, AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a high-tech loading sequence
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center overflow-hidden">
      <Background />
      
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-ai-dark"
          >
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 border-4 border-ai-secondary border-t-ai-accent rounded-full animate-spin"></div>
              <p className="font-mono text-ai-accent text-sm tracking-widest uppercase">Initializing Neural Link...</p>
            </div>
          </motion.div>
        ) : (
          <motion.main
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative z-10 w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col gap-20"
          >
            <Hero />
            <Ticker />
            <Features />
            <Footer />
          </motion.main>
        )}
      </AnimatePresence>
      
      {/* Vignette Overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,5,10,0.8)_100%)]"></div>
    </div>
  );
};

export default App;