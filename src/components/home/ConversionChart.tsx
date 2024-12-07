import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine
} from 'recharts';
import AnimatedSection from '../common/AnimatedSection';
import { fadeInUp } from '../../utils/animation';

const data = [
  { month: 'Jan', before: 2.1, after: 3.2, industry: 2.5 },
  { month: 'Feb', before: 2.3, after: 3.8, industry: 2.6 },
  { month: 'Mar', before: 2.0, after: 4.2, industry: 2.4 },
  { month: 'Apr', before: 2.4, after: 4.8, industry: 2.7 },
  { month: 'May', before: 2.2, after: 5.1, industry: 2.5 },
  { month: 'Jun', before: 2.3, after: 5.9, industry: 2.6 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200">
        <p className="font-semibold text-gray-900">{label}</p>
        <div className="mt-2 space-y-1">
          {payload.map((entry: any) => (
            <p key={entry.name} className="text-sm" style={{ color: entry.color }}>
              {entry.name}: {entry.value}%
            </p>
          ))}
        </div>
      </div>
    );
  }
  return null;
};

export default function ConversionChart() {
  return (
    <div className="relative bg-gradient-to-b from-white to-blue-50 py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-5" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-right skew-x-[-30deg] bg-white shadow-xl shadow-blue-600/10 ring-1 ring-blue-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection {...fadeInUp} className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
            Real Results, Measurable Impact
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Average conversion rate improvements across our client portfolio
          </p>
        </AnimatedSection>
        
        <AnimatedSection 
          {...fadeInUp} 
          className="mt-16 h-[500px] bg-white rounded-2xl shadow-xl p-6 border border-gray-100"
          transition={{ delay: 0.2 }}
        >
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorBefore" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#93C5FD" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#93C5FD" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorAfter" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#2563EB" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#2563EB" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorIndustry" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6B7280" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#6B7280" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis 
                dataKey="month" 
                stroke="#6B7280"
                tick={{ fill: '#6B7280' }}
              />
              <YAxis 
                unit="%" 
                stroke="#6B7280"
                tick={{ fill: '#6B7280' }}
              />
              <Tooltip content={<CustomTooltip />} />
              <ReferenceLine 
                y={2.5} 
                label={{ value: 'Industry Average', position: 'right' }} 
                stroke="#6B7280" 
                strokeDasharray="3 3" 
              />
              <Area
                type="monotone"
                dataKey="before"
                stroke="#93C5FD"
                fillOpacity={1}
                fill="url(#colorBefore)"
                name="Before CRO"
                strokeWidth={2}
              />
              <Area
                type="monotone"
                dataKey="after"
                stroke="#2563EB"
                fillOpacity={1}
                fill="url(#colorAfter)"
                name="After CRO"
                strokeWidth={2}
              />
              <Area
                type="monotone"
                dataKey="industry"
                stroke="#6B7280"
                fillOpacity={0.1}
                fill="url(#colorIndustry)"
                name="Industry Average"
                strokeWidth={1}
                strokeDasharray="3 3"
              />
            </AreaChart>
          </ResponsiveContainer>
        </AnimatedSection>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <AnimatedSection {...fadeInUp} className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
            <p className="text-sm text-gray-500">Average Improvement</p>
            <p className="text-2xl font-bold text-blue-600">+156%</p>
          </AnimatedSection>
          <AnimatedSection {...fadeInUp} className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
            <p className="text-sm text-gray-500">Best Performance</p>
            <p className="text-2xl font-bold text-blue-600">+312%</p>
          </AnimatedSection>
          <AnimatedSection {...fadeInUp} className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
            <p className="text-sm text-gray-500">Industry Average</p>
            <p className="text-2xl font-bold text-gray-600">2.5%</p>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}