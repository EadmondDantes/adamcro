import React from 'react';
import { useCaseStudies } from '../../hooks/useContentful';
import AnimatedSection from '../common/AnimatedSection';
import { fadeInUp } from '../../utils/animation';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from 'recharts';

export default function CaseStudyMetrics() {
  const { data: caseStudies = [] } = useCaseStudies();

  // Calculate average metrics
  const averageMetrics = caseStudies.reduce(
    (acc, study) => {
      acc.conversionIncrease += study.results.conversionIncrease;
      acc.revenueIncrease += study.results.revenueIncrease;
      return acc;
    },
    { conversionIncrease: 0, revenueIncrease: 0 }
  );

  averageMetrics.conversionIncrease /= caseStudies.length || 1;
  averageMetrics.revenueIncrease /= caseStudies.length || 1;

  // Prepare data for charts
  const conversionData = caseStudies.map((study) => ({
    name: study.client,
    increase: study.results.conversionIncrease,
  }));

  const revenueData = caseStudies.map((study) => ({
    name: study.client,
    revenue: study.results.revenueIncrease,
  }));

  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection {...fadeInUp} className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Performance Metrics
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our track record of success across different industries and businesses
          </p>
        </AnimatedSection>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <AnimatedSection {...fadeInUp} className="bg-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              Conversion Rate Improvements
            </h3>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={conversionData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis unit="%" />
                  <Tooltip
                    formatter={(value) => [`${value}%`, 'Increase']}
                    contentStyle={{
                      backgroundColor: 'white',
                      border: '1px solid #E5E7EB',
                      borderRadius: '0.375rem',
                    }}
                  />
                  <Bar dataKey="increase" fill="#2563EB" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </AnimatedSection>

          <AnimatedSection {...fadeInUp} className="bg-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              Revenue Growth
            </h3>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis unit="K" />
                  <Tooltip
                    formatter={(value) => [`$${value}K`, 'Revenue Increase']}
                    contentStyle={{
                      backgroundColor: 'white',
                      border: '1px solid #E5E7EB',
                      borderRadius: '0.375rem',
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="revenue"
                    stroke="#2563EB"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </AnimatedSection>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2">
          <AnimatedSection
            {...fadeInUp}
            className="bg-white p-8 rounded-2xl shadow-lg text-center"
          >
            <h3 className="text-4xl font-bold text-blue-600">
              +{averageMetrics.conversionIncrease.toFixed(1)}%
            </h3>
            <p className="mt-2 text-gray-600">Average Conversion Rate Increase</p>
          </AnimatedSection>

          <AnimatedSection
            {...fadeInUp}
            className="bg-white p-8 rounded-2xl shadow-lg text-center"
          >
            <h3 className="text-4xl font-bold text-blue-600">
              ${averageMetrics.revenueIncrease.toFixed(1)}K
            </h3>
            <p className="mt-2 text-gray-600">Average Revenue Growth</p>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}