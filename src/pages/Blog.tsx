import React from 'react';
import ErrorBoundary from '../components/common/ErrorBoundary';
import PageMeta from '../components/common/PageMeta';
import BlogList from '../components/blog/BlogList';
import BlogSidebar from '../components/blog/BlogSidebar';

export default function Blog() {
  return (
    <ErrorBoundary>
      <PageMeta 
        title="CRO Blog - Adam CRO"
        description="Latest insights, tips, and strategies for conversion rate optimization and digital growth."
      />
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <div className="lg:col-span-2">
              <BlogList />
            </div>
            <div className="lg:col-span-1">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
}