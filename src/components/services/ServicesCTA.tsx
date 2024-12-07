import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../common/AnimatedSection';
import { fadeInUp } from '../../utils/animation';

export default function ServicesCTA() {
  return (
    <div className="bg-blue-600">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <AnimatedSection {...fadeInUp} className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to boost your conversions?
            <br />
            Start optimizing today.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
            Get a free conversion audit and discover opportunities to increase your website's performance.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/contact"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-blue-600 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Get Free Audit
            </Link>
            <Link to="/case-studies" className="text-sm font-semibold leading-6 text-white">
              View Case Studies <span aria-hidden="true">→</span>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}