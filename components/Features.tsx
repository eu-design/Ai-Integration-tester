import React from 'react';
import { motion } from 'framer-motion';
import { Network, Server, Lock, Settings, Database, MessageSquare } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.6 }}
    className="bg-gray-900/40 border border-gray-800 p-8 rounded-2xl hover:border-ai-accent/50 transition-colors duration-300 group hover:bg-gray-900/60"
  >
    <div className="w-12 h-12 rounded-lg bg-ai-dark border border-gray-700 flex items-center justify-center mb-6 group-hover:border-ai-accent group-hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all">
      <div className="text-gray-400 group-hover:text-ai-accent transition-colors">
        {icon}
      </div>
    </div>
    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-ai-accent transition-colors">
      {title}
    </h3>
    <p className="text-gray-400 leading-relaxed">
      {description}
    </p>
  </motion.div>
);

export const Features: React.FC = () => {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <FeatureCard 
          delay={0.1}
          icon={<Server className="w-6 h-6" />}
          title="Собственный Сервер"
          description="Автоматизация, которая работает на вашей инфраструктуре. Подключайтесь к Telegram, браузеру или любому приложению без посредников."
        />
        <FeatureCard 
          delay={0.2}
          icon={<Network className="w-6 h-6" />}
          title="Гибкая Замена"
          description="Инфраструктура остаётся прежней — вы просто переключаете модель. Хотите перейти с OpenAI на DeepSeek или Гигачат? Это всего один параметр."
        />
        <FeatureCard 
          delay={0.3}
          icon={<Settings className="w-6 h-6" />}
          title="Платформа Интеграций"
          description="Показываю, как устроен бэкенд: управление ключами API, настройка URL, и запуск собственных Flask-приложений."
        />
        <FeatureCard 
          delay={0.4}
          icon={<Database className="w-6 h-6" />}
          title="База Знаний"
          description="Используйте собственные приложения как базу для тренировки ассистента. Ваши данные остаются под вашим полным контролем."
        />
        <FeatureCard 
          delay={0.5}
          icon={<Lock className="w-6 h-6" />}
          title="Без Ограничений"
          description="Простой путь в мир гибких решений. Никаких жестких контрактов, vendor lock-in или привязки к одному провайдеру."
        />
        <FeatureCard 
          delay={0.6}
          icon={<MessageSquare className="w-6 h-6" />}
          title="Умные Помощники"
          description="Создавайте агентов, которые реально помогают в работе, интегрируясь в привычные мессенджеры и рабочие процессы."
        />
      </div>
    </section>
  );
};