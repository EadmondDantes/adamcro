import React from 'react';
import ErrorBoundary from '../components/common/ErrorBoundary';
import PageMeta from '../components/common/PageMeta';
import ServicesList from '../components/services/ServicesList';
import ServicesCTA from '../components/services/ServicesCTA';

export default function Services() {
  return (
    <ErrorBoundary>
      <PageMeta 
        title="CRO Services - Adam CRO"
        description="Comprehensive conversion rate optimization services to boost your website's performance and revenue."
      />
      <ServicesList />
      <ServicesCTA />
    </ErrorBoundary>
  );
}