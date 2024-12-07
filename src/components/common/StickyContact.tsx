import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChatBubbleLeftIcon } from '@heroicons/react/24/outline';

export default function StickyContact() {
  return (
    <motion.div
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed left-0 top-1/2 -translate-y-1/2 z-50"
    >
      <Link
        to="/contact"
        className="flex items-center bg-blue-600 text-white px-4 py-3 rounded-r-lg hover:bg-blue-700 transition-colors shadow-lg group"
      >
        <ChatBubbleLeftIcon className="h-6 w-6" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 ease-in-out">
          Get Free Audit
        </span>
      </Link>
    </motion.div>
  );
}