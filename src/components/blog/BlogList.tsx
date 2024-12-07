import React from 'react';
import AnimatedSection from '../common/AnimatedSection';
import { fadeInUp } from '../../utils/animation';

// Temporary mock data until Contentful integration is complete
const blogPosts = [
  {
    title: 'Maximizing Conversion Rates in 2024',
    slug: 'maximizing-conversion-rates-2024',
    excerpt: 'Learn the latest strategies and techniques for optimizing your conversion rates.',
    publishDate: '2024-01-15',
    author: {
      name: 'Adam Johnson',
      image: '/images/team/adam.jpg'
    },
    featuredImage: '/images/blog/conversion-rates.jpg',
    tags: ['CRO', 'Strategy', 'Analytics']
  },
  // Add more blog posts...
];

export default function BlogList() {
  return (
    <div className="space-y-16">
      {/* Component content */}
    </div>
  );
}