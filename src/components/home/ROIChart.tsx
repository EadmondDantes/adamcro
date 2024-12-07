import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell
} from 'recharts';
import AnimatedSection from '../common/AnimatedSection';
import { fadeInUp } from '../../utils/animation';

const data = [
  { industry: 'E-commerce', roi: 320, color: '#2563EB' },
  { industry: 'SaaS', roi: 450, color: '#3B82F6' },
  { industry: 'Finance', roi: 380, color: '#60A5FA' },
  { industry: 'Healthcare', roi: 290, color: '#93C5FD' },
  { industry: 'Education', roi: 340, color: '#BFDBFE' },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200">
        <p className="font-semibold text-gray-900">{label}</p>
        <p className="text-sm text-blue-600 mt-1">
          ROI: {payload[0].value}%
        </p>
      </div>
    );
  }
  return null;
};

export default function ROIChart() {
  return (
    <div className="relative bg-gradient-to-t from-gray-50 to-white py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/dots.svg')] opacity-5" />
      <div className="absolute inset-y-0 left-1/2 -z-10 ml-16 w-[200%] origin-left skew-x-[-30deg] bg-white shadow-xl shadow-blue-600/10 ring-1 ring-blue-50 sm:ml-28 lg:ml-0 xl:ml-16 xl:origin-center" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection {...fadeInUp} className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
            Industry-Specific ROI
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Average return on investment across different industries
          </p>
        </AnimatedSection>
        
        <AnimatedSection 
          {...fadeInUp} 
          className="mt-16 h-[500px] bg-white rounded-2xl shadow-xl p-6 border border-gray-100"
          transition={{ delay: 0.2 }}
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis 
                dataKey="industry" 
                stroke="#6B7280"
                tick={{ fill: '#6B7280' }}
              />
              <YAxis 
                unit="%" 
                stroke="#6B7280"
                tick={{ fill: '#6B7280' }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar 
                dataKey="roi" 
                radius={[8, 8, 0, 0]}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </AnimatedSection>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <AnimatedSection {...fadeInUp} className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
            <p className="text-sm text-gray-500">Average ROI</p>
            <p className="text-2xl font-bold text-blue-600">356%</p>
          </AnimatedSection>
          <AnimatedSection {...fadeInUp} className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
            <p className="text-sm text-gray-500">Highest ROI</p>
            <p className="text-2xl font-bold text-blue-600">450%</p>
          </AnimatedSection>
          <AnimatedSection {...fadeInUp} className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
            <p className="text-sm text-gray-500">Implementation Time</p>
            <p className="text-2xl font-bold text-gray-600">2-4 weeks</p>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}