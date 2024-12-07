import React from 'react';
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
  Tooltip
} from 'recharts';
import AnimatedSection from '../common/AnimatedSection';
import { fadeInUp } from '../../utils/animation';

const data = [
  { metric: 'Conversion Rate', value: 95, fullMark: 100 },
  { metric: 'User Engagement', value: 88, fullMark: 100 },
  { metric: 'Load Time', value: 92, fullMark: 100 },
  { metric: 'Bounce Rate', value: 85, fullMark: 100 },
  { metric: 'Form Completion', value: 90, fullMark: 100 },
  { metric: 'Click-through Rate', value: 87, fullMark: 100 },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200">
        <p className="font-semibold text-gray-900">{payload[0].payload.metric}</p>
        <p className="text-sm text-blue-600 mt-1">
          Score: {payload[0].value}%
        </p>
      </div>
    );
  }
  return null;
};

export default function SuccessMetrics() {
  return (
    <div className="relative bg-gradient-to-b from-white to-blue-50 py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-right skew-x-[-30deg] bg-white shadow-xl shadow-blue-600/10 ring-1 ring-blue-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection {...fadeInUp} className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
            Comprehensive Success Metrics
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Our holistic approach improves all aspects of your website's performance
          </p>
        </AnimatedSection>
        
        <AnimatedSection 
          {...fadeInUp} 
          className="mt-16 h-[600px] bg-white rounded-2xl shadow-xl p-6 border border-gray-100"
          transition={{ delay: 0.2 }}
        >
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
              <PolarGrid stroke="#E5E7EB" />
              <PolarAngleAxis 
                dataKey="metric" 
                tick={{ fill: '#6B7280', fontSize: 12 }}
              />
              <PolarRadiusAxis 
                angle={30} 
                domain={[0, 100]} 
                tick={{ fill: '#6B7280' }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Radar
                name="Performance"
                dataKey="value"
                stroke="#2563EB"
                fill="#2563EB"
                fillOpacity={0.6}
              />
            </RadarChart>
          </ResponsiveContainer>
        </AnimatedSection>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-4">
          <AnimatedSection {...fadeInUp} className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
            <p className="text-sm text-gray-500">Average Score</p>
            <p className="text-2xl font-bold text-blue-600">89.5%</p>
          </AnimatedSection>
          <AnimatedSection {...fadeInUp} className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
            <p className="text-sm text-gray-500">Top Metric</p>
            <p className="text-2xl font-bold text-blue-600">95%</p>
          </AnimatedSection>
          <AnimatedSection {...fadeInUp} className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
            <p className="text-sm text-gray-500">Improvement Rate</p>
            <p className="text-2xl font-bold text-blue-600">+45%</p>
          </AnimatedSection>
          <AnimatedSection {...fadeInUp} className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
            <p className="text-sm text-gray-500">Client Satisfaction</p>
            <p className="text-2xl font-bold text-blue-600">98%</p>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}