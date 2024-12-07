import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const stats = [
  { id: 1, name: 'Average Conversion Increase', value: '147%' },
  { id: 2, name: 'Clients Served', value: '100+' },
  { id: 3, name: 'Revenue Generated', value: '$50M+' },
  { id: 4, name: 'A/B Tests Run', value: '1000+' },
];

export default function Stats() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="bg-blue-800 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.dl
          ref={ref}
          className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mx-auto flex max-w-xs flex-col gap-y-4"
            >
              <motion.dt className="text-base leading-7 text-gray-300">
                {stat.name}
              </motion.dt>
              <motion.dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                {stat.value}
              </motion.dd>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </div>
  );
}