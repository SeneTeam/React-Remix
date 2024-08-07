import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function AIGreetingWidget() {
  const [greeting, setGreeting] = useState<string>('');

  useEffect(() => {
    const fetchGreeting = async () => {
      try {
        const response = await fetch('/api/ai-greeting');
        const data = await response.json();
        setGreeting(data.greeting.toLowerCase());
      } catch (error) {
        console.error('failed to fetch ai greeting:', error);
        setGreeting('welcome back, money maestro!');
      }
    };

    fetchGreeting();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-pink-200 via-purple-200 to-indigo-200 p-6 rounded-[20px] shadow-lg mb-8"
    >
      <p className="text-lg font-inter font-semibold text-gray-800">{greeting}</p>
    </motion.div>
  );
}
