import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import type { Transaction } from "@prisma/client";

interface AIInsightsWidgetProps {
  transactions: Omit<Transaction, 'date' | 'createdAt' | 'updatedAt'> & {
    date: string;
    createdAt: string;
    updatedAt: string;
  }[];
}


export default function AIInsightsWidget({ transactions }: AIInsightsWidgetProps) {
  const [insight, setInsight] = useState<string>('');

  useEffect(() => {
    const generateInsight = async () => {
      const response = await fetch('/api/generate-insight', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ transactions }),
      });
      const data = await response.json();
      setInsight(data.insight);
    };

    generateInsight();
  }, [transactions]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 rounded-[20px] bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400"
    >
      <p className="text-white font-inter text-lg">{insight}</p>
    </motion.div>
  );
}

