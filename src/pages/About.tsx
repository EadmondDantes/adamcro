import React from 'react';
import ErrorBoundary from '../components/common/ErrorBoundary';
import PageMeta from '../components/common/PageMeta';
import Team from '../components/about/Team';
import Mission from '../components/about/Mission';
import Process from '../components/about/Process';

export default function About() {
  return (
    <ErrorBoundary>
      <PageMeta 
        title="About Us - Adam CRO"
        description="Learn about our mission, team, and approach to conversion rate optimization."
      />
      <Mission />
      <Process />
      <Team />
    </ErrorBoundary>
  );
}