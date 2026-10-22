import type { MetadataRoute } from 'next';
import {
  getAllServices,
  getAllBlogs,
  getAllCaseStudies,
  getAllIndustries,
  getServiceCategories,
} from '@/lib/api-functions';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://scaleorm.com';

  // Fetch all dynamic paths at build time
  const [services, blogs, caseStudies, industries, categories] = await Promise.all([
    getAllServices(),
    getAllBlogs(),
    getAllCaseStudies(),
    getAllIndustries(),
    getServiceCategories(),
  ]);

  // Static routes
  const staticRoutes = [
    '',
    '/about',
    '/contact',
    '/pricing',
    '/privacy',
    '/terms',
    '/resources',
    '/free-audit',
    '/services',
    '/industries',
    '/case-studies',
    '/blog',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Dynamic Service routes
  const serviceRoutes = services.map((srv) => {
    return {
      url: `${baseUrl}/services/${srv.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    };
  });

  // Dynamic Industry routes
  const industryRoutes = industries.map((ind) => ({
    url: `${baseUrl}/industries/${ind.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  // Dynamic Case Study routes
  const caseStudyRoutes = caseStudies.map((cs) => ({
    url: `${baseUrl}/case-studies/${cs.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // Dynamic Blog routes
  const blogRoutes = blogs.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt || new Date()),
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...industryRoutes,
    ...caseStudyRoutes,
    ...blogRoutes,
  ];
}
