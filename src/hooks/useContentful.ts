import { useQuery } from '@tanstack/react-query';
import { contentfulClient } from '../lib/contentful';
import type { CaseStudy, Service, BlogPost } from '../types/content';

export const useCaseStudies = () => {
  return useQuery({
    queryKey: ['caseStudies'],
    queryFn: async () => {
      const response = await contentfulClient.getEntries({
        content_type: 'caseStudy',
      });
      return response.items.map(item => item.fields) as CaseStudy[];
    },
  });
};

export const useServices = () => {
  return useQuery({
    queryKey: ['services'],
    queryFn: async () => {
      const response = await contentfulClient.getEntries({
        content_type: 'service',
      });
      return response.items.map(item => item.fields) as Service[];
    },
  });
};

export const useBlogPosts = () => {
  return useQuery({
    queryKey: ['blogPosts'],
    queryFn: async () => {
      const response = await contentfulClient.getEntries({
        content_type: 'blogPost',
        order: '-sys.createdAt',
      });
      return response.items.map(item => item.fields) as BlogPost[];
    },
  });
};