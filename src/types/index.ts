/**
 * Consolidated TypeScript interfaces for the Scale ORM frontend.
 *
 * Single source of truth — no `any` types anywhere.
 * Import from here instead of individual service files.
 */

// ---------------------------------------------------------------------------
// Settings & Navigation
// ---------------------------------------------------------------------------

export interface SiteSettings {
  _id: string;
  siteName: string;
  siteUrl: string;
  logoUrl?: string;
  contactEmail: string;
  contactPhone?: string;
  address?: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    facebook?: string;
    instagram?: string;
  };
  headerNav?: Array<{ label: string; url: string }>;
  footerNav?: Array<{ label: string; url: string }>;
}

// ---------------------------------------------------------------------------
// Categories
// ---------------------------------------------------------------------------

export interface CategoryItem {
  _id: string;
  name: string;
  slug: string;
  type: 'service' | 'blog';
  description?: string;
  icon?: string;
}

// ---------------------------------------------------------------------------
// Services
// ---------------------------------------------------------------------------

export interface ServiceItem {
  _id: string;
  title: string;
  slug: string;
  category: string | CategoryItem;
  summary: string;
  heroTitle: string;
  heroSubtitle: string;
  isFeatured?: boolean;
}

export interface HowItWorksStep {
  stepNumber: number;
  title: string;
  description: string;
}

export interface FullServiceDetail extends ServiceItem {
  contentIntro: string;
  whatsIncluded: string[];
  howItWorks: HowItWorksStep[];
  whyItMatters: string;
  ourApproach: string;
  targetIndustries?: IndustryItem[];
  relatedServices?: ServiceItem[];
  metaTitle: string;
  metaDescription: string;
  keywords?: string[];
  canonicalUrl?: string;
}

// ---------------------------------------------------------------------------
// Industries
// ---------------------------------------------------------------------------

export interface IndustryItem {
  _id: string;
  name: string;
  slug: string;
  icon?: string;
  description: string;
  keyChallenges: string[];
  solutions: string[];
  metaTitle: string;
  metaDescription: string;
  keywords?: string[];
}

// ---------------------------------------------------------------------------
// Blog
// ---------------------------------------------------------------------------

export interface BlogItem {
  _id: string;
  title: string;
  slug: string;
  category?: CategoryItem | string;
  author: string;
  excerpt: string;
  content: string;
  coverImage?: string;
  tags: string[];
  metaTitle: string;
  metaDescription: string;
  keywords?: string[];
  isPublished: boolean;
  publishedAt: string;
  readTimeMinutes?: number;
}

// ---------------------------------------------------------------------------
// Case Studies
// ---------------------------------------------------------------------------

export interface CaseStudyResult {
  label: string;
  value: string;
}

export interface CaseStudyItem {
  _id: string;
  title: string;
  slug: string;
  clientName: string;
  challenge: string;
  solution: string;
  results: CaseStudyResult[];
  metaTitle: string;
  metaDescription: string;
  keywords?: string[];
}

// ---------------------------------------------------------------------------
// Testimonials
// ---------------------------------------------------------------------------

export interface TestimonialItem {
  _id: string;
  clientName: string;
  clientRole?: string;
  clientCompany?: string;
  clientAvatar?: string;
  logoUrl?: string;
  videoUrl?: string;
  rating: number;
  quote: string;
  isFeatured?: boolean;
}

export interface VideoTestimonialItem {
  _id: string;
  clientName: string;
  clientRole?: string;
  clientCompany?: string;
  clientAvatar?: string;
  logoUrl?: string;
  videoUrl?: string;
  quote: string;
  order?: number;
  isActive?: boolean;
}

// ---------------------------------------------------------------------------
// FAQs
// ---------------------------------------------------------------------------

export interface FAQItem {
  _id: string;
  question: string;
  answer: string;
  category?: string;
  service?: string;
}

// ---------------------------------------------------------------------------
// Slug param helpers (for generateStaticParams)
// ---------------------------------------------------------------------------

export interface SlugParam {
  slug: string;
}

export interface CategorySlugParams {
  category: string;
}

export interface CategoryAndSlugParams {
  category: string;
  slug: string;
}
