import type { SiteSettings, CategoryItem, ServiceItem, FullServiceDetail, IndustryItem, BlogItem, CaseStudyItem, FAQItem, TestimonialItem } from '@/types';
import {
  defaultReviewServices,
  defaultSocialServices,
  defaultTestimonials,
  defaultFaqs,
  defaultCaseStudies,
  defaultIndustries,
  defaultBlogs,
  defaultCategories,
} from '@/data/siteData';

// Combine all services
const allServices = [...defaultReviewServices, ...defaultSocialServices];

// Mock settings
const siteSettings = {
  _id: 'settings-1',
  siteName: 'Scale ORM',
  siteUrl: 'https://scaleorm.com',
  contactEmail: 'contact@scaleorm.com',
  contactPhone: '+1 (716) 503-6335',
  socialLinks: {
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
  },
  headerNav: [
    { label: 'Services', url: '/services' },
    { label: 'Industries', url: '/industries' },
    { label: 'Case Studies', url: '/case-studies' },
    { label: 'Blog', url: '/blog' },
  ],
  footerNav: [
    { label: 'Privacy Policy', url: '/privacy' },
    { label: 'Terms of Service', url: '/terms' },
  ],
};

export async function getSiteSettings(): Promise<SiteSettings> {
  return siteSettings;
}

export async function getServiceCategories(): Promise<CategoryItem[]> {
  return defaultCategories;
}

export async function getAllCategories(): Promise<CategoryItem[]> {
  return defaultCategories;
}

export async function getAllCategorySlugs() {
  return defaultCategories.map(c => ({ category: c.slug }));
}

export async function getCategoryBySlug(slug: string): Promise<CategoryItem | undefined> {
  return defaultCategories.find(c => c.slug === slug);
}

export async function getAllServices(): Promise<ServiceItem[]> {
  return allServices;
}

export async function getServicesByCategory(categorySlug: string): Promise<ServiceItem[]> {
  return allServices.filter(s => {
    if (typeof s.category === 'string') return s.category === categorySlug;
    return s.category?.slug === categorySlug;
  });
}

export async function getAllServiceStaticParams() {
  return allServices.map(s => {
    return { slug: s.slug };
  });
}

import { generateDynamicServiceContent } from '@/data/serviceDetails';

export async function getServiceBySlug(slug: string): Promise<FullServiceDetail | null> {
  const service = allServices.find(s => s.slug === slug);
  if (!service) return null;
  
  const richContent = generateDynamicServiceContent(slug, service.title, service.summary);
  
  // Hydrate with full details needed by Service page
  return {
    ...service,
    heroTitle: richContent.heroTitle || service.heroTitle || service.title,
    heroSubtitle: richContent.heroSubtitle || service.heroSubtitle || service.summary,
    contentIntro: richContent.contentIntro || service.summary,
    whatsIncluded: richContent.whatsIncluded || [],
    howItWorks: richContent.howItWorks || [],
    whyItMatters: richContent.whyItMatters || '',
    ourApproach: richContent.ourApproach || '',
    targetIndustries: defaultIndustries,
    relatedServices: allServices.filter(s => s.slug !== slug).slice(0, 3),
    metaTitle: `${service.title} | Scale ORM`,
    metaDescription: service.summary,
  };
}

export async function getFAQsByService(serviceId: string): Promise<FAQItem[]> {
  return defaultFaqs;
}

export async function getAllIndustries(): Promise<IndustryItem[]> {
  return defaultIndustries;
}

export async function getAllIndustrySlugs() {
  return defaultIndustries.map(i => ({ slug: i.slug }));
}

export async function getIndustryBySlug(slug: string): Promise<IndustryItem | undefined> {
  return defaultIndustries.find(i => i.slug === slug);
}

export async function getAllBlogs(): Promise<BlogItem[]> {
  return defaultBlogs;
}

export async function getAllBlogSlugs() {
  return defaultBlogs.map(b => ({ slug: b.slug }));
}

export async function getBlogBySlug(slug: string): Promise<BlogItem | undefined> {
  return defaultBlogs.find(b => b.slug === slug);
}

export async function getFAQs(): Promise<FAQItem[]> {
  return defaultFaqs;
}

export async function getTestimonials(): Promise<TestimonialItem[]> {
  return defaultTestimonials;
}

export async function getVideoTestimonials(): Promise<TestimonialItem[]> {
  return defaultTestimonials;
}

export async function getAllCaseStudies(): Promise<CaseStudyItem[]> {
  return defaultCaseStudies;
}

export async function getCaseStudyBySlug(slug: string): Promise<CaseStudyItem | undefined> {
  return defaultCaseStudies.find(c => c.slug === slug);
}
