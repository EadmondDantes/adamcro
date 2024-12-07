import React from 'react';
import { motion } from 'framer-motion';

interface FloatingElement {
  id: number;
  shape: 'circle' | 'square' | 'triangle';
  size: number;
  color: string;
  initialPosition: { x: number; y: number };
}

const elements: FloatingElement[] = [
  { id: 1, shape: 'circle', size: 20, color: 'bg-blue-400/20', initialPosition: { x: -20, y: -20 } },
  { id: 2, shape: 'square', size: 30, color: 'bg-blue-500/20', initialPosition: { x: 20, y: 20 } },
  { id: 3, shape: 'triangle', size: 25, color: 'bg-blue-600/20', initialPosition: { x: -10, y: 10 } },
];

export default function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className={`absolute ${element.color}`}
          style={{
            width: element.size,
            height: element.size,
            borderRadius: element.shape === 'circle' ? '50%' : element.shape === 'square' ? '4px' : '0',
            clipPath: element.shape === 'triangle' ? 'polygon(50% 0%, 0% 100%, 100% 100%)' : 'none',
          }}
          initial={{ x: element.initialPosition.x, y: element.initialPosition.y, rotate: 0 }}
          animate={{
            x: [element.initialPosition.x, element.initialPosition.x + 20, element.initialPosition.x],
            y: [element.initialPosition.y, element.initialPosition.y + 20, element.initialPosition.y],
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
}