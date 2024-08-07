import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const fallbackGreetings = [
  "yo, cash captain! ready to make those benjamins behave?",
  "sup, money maestro! let's make your wallet do the cha-cha!",
  "hey big spender! time to show your cash who's boss!",
  "what's poppin', finance whiz? let's get this bread!",
  "ayy, budget boss! ready to level up your savings game?"
];

export default function AIGreeting() {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const fetchGreeting = async () => {
      try {
        const response = await fetch('/api/ai-greeting');
        if (!response.ok) {
          throw new Error('Failed to fetch AI greeting');
        }
        const data = await response.json();
        setGreeting(data.greeting);
      } catch (error) {
        console.error('Error fetching AI greeting:', error);
        // Use a random fallback greeting
        const randomIndex = Math.floor(Math.random() * fallbackGreetings.length);
        setGreeting(fallbackGreetings[randomIndex]);
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
