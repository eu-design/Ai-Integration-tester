import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full py-20 flex flex-col items-center justify-center text-center">
      <div className="h-px w-full max-w-xs bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-12"></div>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="group cursor-pointer"
      >
        <h2 className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600 mb-6 uppercase tracking-tighter">
          Продолжение Следует
        </h2>
        
        <div className="flex items-center justify-center gap-3 text-ai-accent">
          <span className="font-mono text-sm tracking-[0.3em] uppercase group-hover:tracking-[0.5em] transition-all duration-500">
            Ожидание сигнала
          </span>
          <ArrowRight className="w-5 h-5 animate-pulse" />
        </div>
      </motion.div>

      <div className="mt-20 text-xs text-gray-600 font-mono">
        SYSTEM_STATUS: ONLINE // MODULE_INTEGRITY: 100%
      </div>
    </footer>
  );
};