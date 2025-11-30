import React from 'react';

const models = [
  "DeepSeek-V3", "GPT-4o", "Qwen-2.5", "Llama-3", "Claude 3.5 Sonnet", "Mistral Large", "Gemini Pro 1.5", "Gemma 2", "Phi-3", "Falcon 180B", "Yi-34B"
];

export const Ticker: React.FC = () => {
  return (
    <div className="w-full overflow-hidden py-6 border-y border-gray-800 bg-black/20 backdrop-blur-sm">
      <div className="flex w-[200%] animate-scroll">
        {[...models, ...models, ...models].map((model, index) => (
          <div key={index} className="flex-shrink-0 mx-8 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-ai-accent"></span>
            <span className="text-xl font-mono font-bold text-gray-500 uppercase tracking-widest whitespace-nowrap">
              {model}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};