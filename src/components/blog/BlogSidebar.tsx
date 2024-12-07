import React from 'react';
import { Link } from 'react-router-dom';
import { useBlogPosts } from '../../hooks/useContentful';
import AnimatedSection from '../common/AnimatedSection';
import { fadeInUp } from '../../utils/animation';

export default function BlogSidebar() {
  const { data: posts = [] } = useBlogPosts();
  
  // Get unique tags from all posts
  const allTags = Array.from(new Set(posts.flatMap(post => post.tags)));
  
  // Get recent posts
  const recentPosts = posts.slice(0, 5);

  return (
    <div className="space-y-12">
      <AnimatedSection {...fadeInUp} className="sticky top-24">
        {/* Search */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Search</h3>
          <div className="relative">
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-500"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Recent Posts */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Posts</h3>
          <ul className="space-y-4">
            {recentPosts.map(post => (
              <li key={post.slug}>
                <Link 
                  to={`/blog/${post.slug}`}
                  className="text-sm text-gray-600 hover:text-blue-600"
                >
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Categories/Tags */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
          <div className="flex flex-wrap gap-2">
            {allTags.map(tag => (
              <Link
                key={tag}
                to={`/blog/tag/${tag}`}
                className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-600 hover:bg-blue-100"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 rounded-2xl bg-gray-50 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Subscribe to our newsletter
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Get the latest CRO tips and insights delivered to your inbox.
          </p>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="w-full rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Subscribe
            </button>
          </form>
        </div>
      </AnimatedSection>
    </div>
  );
}