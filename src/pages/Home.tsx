import React from 'react';
import ErrorBoundary from '../components/common/ErrorBoundary';
import PageMeta from '../components/common/PageMeta';
import Hero from '../components/home/Hero';
import Stats from '../components/home/Stats';
import Features from '../components/home/Features';
import ConversionChart from '../components/home/ConversionChart';
import ROIChart from '../components/home/ROIChart';
import SuccessMetrics from '../components/home/SuccessMetrics';

export default function Home() {
  return (
    <ErrorBoundary>
      <PageMeta 
        title="Adam CRO - Conversion Rate Optimization Services"
        description="Transform your website's conversion rates with data-driven CRO strategies. Get a free conversion audit today."
      />
      <Hero />
      <Stats />
      <Features />
      <ConversionChart />
      <ROIChart />
      <SuccessMetrics />
    </ErrorBoundary>
  );
}