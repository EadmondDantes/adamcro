import React from 'react';
import ErrorBoundary from '../components/common/ErrorBoundary';
import PageMeta from '../components/common/PageMeta';
import CaseStudyList from '../components/case-studies/CaseStudyList';
import CaseStudyMetrics from '../components/case-studies/CaseStudyMetrics';

export default function CaseStudies() {
  return (
    <ErrorBoundary>
      <PageMeta 
        title="Case Studies - Adam CRO"
        description="Real-world examples of how our CRO strategies have transformed businesses and improved conversion rates."
      />
      <CaseStudyList />
      <CaseStudyMetrics />
    </ErrorBoundary>
  );
}