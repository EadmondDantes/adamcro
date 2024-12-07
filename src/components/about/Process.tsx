import { FC } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  MagnifyingGlassIcon,
  ChartBarIcon,
  BeakerIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/outline';

const steps = [
  {
    name: 'Research & Analysis',
    description: 'Deep dive into your data, user behavior, and conversion funnel.',
    icon: MagnifyingGlassIcon,
  },
  {
    name: 'Strategy Development',
    description: 'Create a customized optimization plan based on research findings.',
    icon: ChartBarIcon,
  },
  {
    name: 'Testing & Optimization',
    description: 'Implement and test changes through systematic A/B testing.',
    icon: BeakerIcon,
  },
  {
    name: 'Scale & Grow',
    description: 'Scale successful optimizations and continuously improve results.',
    icon: RocketLaunchIcon,
  },
];

const Process: FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Process
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            A systematic approach to optimizing your conversion rates
          </p>
        </div>

        <motion.div
          ref={ref}
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
        >
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-6 rounded-lg bg-blue-50 p-4">
                  <step.icon className="h-6 w-6 text-blue-600" aria-hidden="true" />
                </div>
                <dt className="text-lg font-semibold leading-7 text-gray-900">
                  {step.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{step.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </motion.div>
      </div>
    </div>
  );
};

export default Process;