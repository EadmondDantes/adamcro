import React from 'react';
import AnimatedSection from '../common/AnimatedSection';
import { fadeInUp } from '../../utils/animation';
import { useServices } from '../../hooks/useContentful';

export default function ServicesList() {
  const { data: services = [] } = useServices();

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our CRO Services
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Comprehensive solutions to optimize your conversion funnel and maximize ROI
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {services.map((service, index) => (
            <AnimatedSection
              key={service.title}
              {...fadeInUp}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                <p className="mt-4 text-gray-600">{service.description}</p>
                <ul className="mt-6 space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-600">
                      <svg className="h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 bg-gray-50 mt-auto">
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-gray-900">
                    ${service.price.amount}
                    <span className="text-sm font-normal text-gray-500">/{service.price.billingPeriod}</span>
                  </span>
                  <button className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500">
                    Get Started
                  </button>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}