import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import RotatingBackground from '../common/RotatingBackground';
import FloatingElements from '../common/FloatingElements';
import GradientText from '../common/GradientText';

const defaultTiltOptions = {
  reverse: false,
  max: 15,
  perspective: 1000,
  scale: 1,
  speed: 1000,
  transition: true,
  axis: null,
  reset: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
};

export default function Hero() {
  return (
    <RotatingBackground>
      <FloatingElements />
      <div className="relative isolate min-h-screen flex items-center">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl md:text-7xl">
                Transform Your
                <br />
                <GradientText>Conversion Rates</GradientText>
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 max-w-xl">
                Data-driven CRO strategies that turn visitors into customers. Boost your conversion rates with proven methodologies and continuous optimization.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Link
                  to="/contact"
                  className="group relative inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-3 text-lg font-medium text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 overflow-hidden"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500 to-blue-600 group-hover:scale-105 transition-transform duration-200" />
                  <span className="relative flex items-center">
                    Get Free Audit
                    <ArrowRightIcon className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
                <Link
                  to="/case-studies"
                  className="text-lg font-semibold leading-6 text-gray-900 hover:text-blue-600 transition-colors"
                >
                  View Case Studies <span aria-hidden="true">→</span>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative lg:ml-auto"
            >
              <Tilt options={defaultTiltOptions}>
                <div className="relative rounded-2xl bg-white/90 backdrop-blur-sm shadow-xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-400 to-blue-600 opacity-10" />
                  <div className="relative p-8">
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <div className="h-3 w-3 rounded-full bg-green-400" />
                        <div className="text-sm font-medium text-gray-900">Live Conversion Rate</div>
                      </div>
                      <div className="text-5xl font-bold text-blue-600">+156%</div>
                      <div className="h-32">
                        {/* Add a mini chart here */}
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">Last 30 days</span>
                        <span className="text-green-500">↑ 23.5%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          </div>
        </div>
      </div>
    </RotatingBackground>
  );
}