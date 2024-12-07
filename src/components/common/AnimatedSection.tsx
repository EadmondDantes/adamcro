import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import type { AnimationProps } from '../../types/common';

interface Props extends AnimationProps {
  children: React.ReactNode;
  threshold?: number;
}

export default function AnimatedSection({ 
  children, 
  initial = { opacity: 0, y: 20 },
  animate = { opacity: 1, y: 0 },
  transition = { duration: 0.5 },
  threshold = 0.1,
  className = ''
}: Props) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold,
  });

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={inView ? animate : initial}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
}