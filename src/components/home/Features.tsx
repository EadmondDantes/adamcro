import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  ChartBarIcon,
  CursorArrowRaysIcon,
  DocumentChartBarIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Data-Driven Analysis',
    description: 'Make informed decisions with comprehensive analytics and user behavior tracking.',
    icon: ChartBarIcon,
  },
  {
    name: 'A/B Testing',
    description: 'Optimize your conversion funnel with systematic split testing and validation.',
    icon: CursorArrowRaysIcon,
  },
  {
    name: 'UX Research',
    description: 'Understand your users through in-depth research and usability testing.',
    icon: MagnifyingGlassIcon,
  },
  {
    name: 'Performance Tracking',
    description: 'Monitor and measure the impact of optimization efforts in real-time.',
    icon: DocumentChartBarIcon,
  },
];

export default function Features() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Proven Methodology</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to optimize conversions
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our comprehensive approach combines data analysis, user research, and continuous testing to deliver measurable results.
          </p>
        </div>
        <motion.div
          ref={ref}
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
        >
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col"
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </motion.div>
      </div>
    </div>
  );
}