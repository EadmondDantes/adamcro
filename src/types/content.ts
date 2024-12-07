export interface CaseStudy {
  title: string;
  client: string;
  challenge: string;
  solution: string;
  results: {
    conversionIncrease: number;
    revenueIncrease: number;
    timeFrame: string;
  };
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
}

export interface Service {
  title: string;
  description: string;
  benefits: string[];
  features: string[];
  price: {
    amount: number;
    currency: string;
    billingPeriod: string;
  };
}

export interface BlogPost {
  title: string;
  slug: string;
  author: {
    name: string;
    image: string;
  };
  publishDate: string;
  content: string;
  excerpt: string;
  featuredImage: string;
  tags: string[];
}