import { motion } from 'framer-motion';
import { Link } from '@remix-run/react';

export default function WelcomeWidget() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 rounded-[20px] bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 text-center"
    >
      <h2 className="text-white font-inter text-2xl mb-4">sup! welcome, lets manage ur money</h2>
      <div className="flex justify-center space-x-4">
        <Link 
          to="/signup" 
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          sign up
        </Link>
        <Link 
          to="/login" 
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          login
        </Link>
      </div>
    </motion.div>
  );
}
