import React from 'react';
import ErrorBoundary from '../components/common/ErrorBoundary';
import PageMeta from '../components/common/PageMeta';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';

export default function Contact() {
  return (
    <ErrorBoundary>
      <PageMeta 
        title="Contact Us - Adam CRO"
        description="Get in touch for a free conversion audit and discover how we can help optimize your website."
      />
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-24 sm:py-32 lg:py-40">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
}