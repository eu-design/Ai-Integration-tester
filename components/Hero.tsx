import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Zap } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative flex flex-col items-center justify-center text-center pt-20 pb-10">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="mb-6 flex items-center gap-3 px-4 py-2 rounded-full border border-ai-secondary/30 bg-ai-secondary/10 backdrop-blur-md"
      >
        <Zap className="w-4 h-4 text-ai-accent animate-pulse" />
        <span className="text-sm font-mono text-ai-accent tracking-wider uppercase">
          AI Architecture v2.0
        </span>
      </motion.div>

      <motion.h1
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8, type: 'spring' }}
        className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8"
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-500">
          Искусственный Интеллект
        </span>
        <br />
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-ai-accent to-ai-secondary">
          Стремительно Меняется
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="max-w-2xl text-lg md:text-xl text-gray-400 leading-relaxed font-light"
      >
        Модели становятся всё мощнее — DeepSeek, Qwen, Llama, OpenAI, Microsoft и десятки других. 
        В этом видео я показываю, как использовать <span className="text-white font-semibold">любую из них</span> в своих проектах: от обычного чат-бота до полноценного AI-агента.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="mt-12 flex flex-wrap justify-center gap-4"
      >
        <button className="group relative px-8 py-4 bg-ai-secondary text-white font-bold rounded-lg overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(112,0,255,0.6)]">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
            <span className="flex items-center gap-2">
                <Cpu className="w-5 h-5" />
                Смотреть Обзор
            </span>
        </button>
      </motion.div>
    </section>
  );
};