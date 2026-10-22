import type { ServiceItem, TestimonialItem, FAQItem, BlogItem, CaseStudyItem, IndustryItem, CategoryItem } from '@/types';
import type { BonusFeature } from '@/components/ui/AnimatedBonusCard';

export const defaultReviewServices: ServiceItem[] = [
  {
    _id: 'a1',
    title: 'n8n AI Automation & Workflows',
    slug: 'n8n-automation-workflows',
    category: 'ai-automation',
    summary:
      'Build powerful, scalable automation workflows with n8n — connecting your apps, automating repetitive tasks, and integrating AI agents into your business processes.',
    heroTitle: 'n8n Automation Expert',
    heroSubtitle: '',
  },
  {
    _id: 'a2',
    title: 'GoHighLevel (GHL) Automation & AI Chatbots',
    slug: 'gohighlevel-automation-ai-chatbots',
    category: 'ai-automation',
    summary:
      'Full GHL setup including AI chatbots, CRM pipelines, contact forms, funnels, and complete marketing automation to grow your business on autopilot.',
    heroTitle: 'GoHighLevel Automation Specialist',
    heroSubtitle: '',
  },
  {
    _id: 'a3',
    title: 'Make.com Scenario Automation',
    slug: 'make-com-automation',
    category: 'ai-automation',
    summary:
      'Design complex, multi-step automation scenarios in Make.com (formerly Integromat) that connect your tools and streamline your operations seamlessly.',
    heroTitle: 'Make.com Automation Expert',
    heroSubtitle: '',
  },
  {
    _id: 'a4',
    title: 'Zapier Multi-Step Automations',
    slug: 'zapier-automation',
    category: 'ai-automation',
    summary:
      'Create robust Zapier automations that connect 5000+ apps, trigger smart actions, and eliminate manual work — letting your team focus on what matters.',
    heroTitle: 'Zapier Automation Expert',
    heroSubtitle: '',
  },
  {
    _id: 'a5',
    title: 'AI Chatbot Development',
    slug: 'ai-chatbot-development',
    category: 'ai-automation',
    summary:
      'Build intelligent AI chatbots powered by OpenAI, integrated with GHL, websites, and messaging platforms — for lead capture, support, and sales automation.',
    heroTitle: 'AI Chatbot Developer',
    heroSubtitle: '',
  },
];

export const defaultSocialServices: ServiceItem[] = [
  {
    _id: 'w1',
    title: 'React.js & Next.js Web Applications',
    slug: 'react-nextjs-web-applications',
    category: 'web-development',
    summary:
      'Build fast, modern, SEO-optimized web applications with React.js and Next.js — from landing pages to full SaaS platforms.',
    heroTitle: 'React & Next.js Developer',
    heroSubtitle: '',
  },
  {
    _id: 'w2',
    title: 'Node.js & Express REST APIs',
    slug: 'nodejs-express-rest-api',
    category: 'web-development',
    summary:
      'Develop scalable, secure REST APIs with Node.js and Express.js — powering your web apps, mobile apps, and automation integrations.',
    heroTitle: 'Node.js Backend Developer',
    heroSubtitle: '',
  },
  {
    _id: 'w3',
    title: 'MERN Stack Full-Stack Development',
    slug: 'mern-stack-development',
    category: 'web-development',
    summary:
      'End-to-end full-stack application development using MongoDB, Express.js, React.js, and Node.js — from design to deployment.',
    heroTitle: 'MERN Stack Developer',
    heroSubtitle: '',
  },
  {
    _id: 'w4',
    title: 'GHL Landing Pages & Contact Forms',
    slug: 'ghl-landing-pages-contact-forms',
    category: 'web-development',
    summary:
      'Design and build high-converting GoHighLevel landing pages, embedded contact forms, and CRM-integrated web experiences.',
    heroTitle: 'GHL Web Development Expert',
    heroSubtitle: '',
  },
];

export const defaultTestimonials: TestimonialItem[] = [
  {
    _id: '1',
    clientName: 'James Harrison',
    clientRole: 'CEO',
    clientCompany: 'GrowthLab Agency (USA)',
    rating: 5,
    quote:
      'Abubakar built our entire n8n automation system from scratch. Saved us 20+ hours per week on lead management and follow-ups. Absolutely incredible work!',
  },
  {
    _id: '2',
    clientName: 'Sarah Mitchell',
    clientRole: 'Marketing Director',
    clientCompany: 'ScaleUp Solutions (UK)',
    rating: 5,
    quote:
      'Our GHL automation and AI chatbot deployment increased lead conversion by 3x. Abubakar is a true GHL expert who delivers fast.',
  },
  {
    _id: '3',
    clientName: 'David Chen',
    clientRole: 'Founder',
    clientCompany: 'TechFlow SaaS (Canada)',
    rating: 5,
    quote:
      'The Next.js web app Abubakar built for us is lightning fast and beautifully designed. He understood our vision perfectly and delivered beyond expectations.',
  },
];

export const defaultFaqs: FAQItem[] = [
  {
    _id: '1',
    question: 'What AI automation tools do you specialize in?',
    answer:
      'I specialize in n8n, Make.com (formerly Integromat), GoHighLevel (GHL), and Zapier. I have 3+ years of hands-on experience building complex automation workflows, AI agent integrations, and chatbot systems across all these platforms.',
  },
  {
    _id: '2',
    question: 'Can you build an AI chatbot integrated with GoHighLevel?',
    answer:
      'Yes! This is one of my core specializations. I can build AI chatbots powered by OpenAI/GPT that integrate natively with GoHighLevel — handling lead capture, appointment booking, FAQ responses, and complex conversation flows inside your GHL CRM.',
  },
  {
    _id: '3',
    question: 'What web development technologies do you work with?',
    answer:
      'I work with the full MERN stack: React.js, Next.js, Node.js, Express.js, and MongoDB. I also use TypeScript, REST APIs, and various database solutions. For styling, I use Tailwind CSS and modern CSS frameworks to build beautiful, responsive UIs.',
  },
  {
    _id: '4',
    question: 'How long does it take to complete a project?',
    answer:
      'Simple automations (single platform workflows) typically take 3-7 days. Complex multi-platform automation systems take 1-3 weeks. Full-stack web applications usually range from 2-6 weeks depending on scope. I always provide a clear timeline before starting.',
  },
  {
    _id: '5',
    question: 'Do you offer ongoing support after project delivery?',
    answer:
      'Absolutely. All projects include a free support period (typically 1-2 weeks) after delivery to address any issues. I also offer retainer packages for ongoing maintenance, updates, and new feature additions.',
  },
  {
    _id: '6',
    question: 'Can you integrate AI into my existing website or CRM?',
    answer:
      'Yes! I can integrate AI capabilities into your existing systems — adding AI chatbots to your website, connecting OpenAI to your CRM, building AI-powered data pipelines, or automating complex business processes using LLMs within n8n, Make, or GHL workflows.',
  },
];

export const bonusFeatures: BonusFeature[] = [
  {
    iconUrl: 'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/673a038c80806ed8478ebd33_Frame%20(2).svg',
    title: 'Free Strategy Call',
    description: 'Book a free 30-min call to discuss your automation or web project.',
  },
  {
    iconUrl: 'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/673a038df944f8b1aefac679_Frame%20(3).svg',
    title: 'Custom Project Roadmap',
    description: 'Bespoke project plan with timelines and milestones delivered in 24hrs.',
  },
  {
    iconUrl: 'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/673a038d00a0d08adf632e55_Frame%20(4).svg',
    title: 'GHL AI Chatbot Setup',
    description: 'AI chatbot integrated with your GHL CRM — ready to capture leads 24/7.',
  },
  {
    iconUrl: 'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/673a038cd746e88bae725bd2_Frame%20(5).svg',
    title: 'Post-Delivery Support',
    description: 'Free support after project launch to ensure everything runs smoothly.',
  },
];

export const defaultCaseStudies: CaseStudyItem[] = [
  {
    _id: 'c1',
    title: 'E-commerce Store: Full n8n Automation Pipeline',
    slug: 'ecommerce-n8n-automation-pipeline',
    clientName: 'Retail Brand (USA)',
    challenge: 'Manual order processing, customer follow-ups, and inventory updates were consuming 15+ hours per week and causing errors.',
    solution: 'Built a complete n8n automation system connecting Shopify, Google Sheets, Slack, and email — automating the entire order-to-fulfillment pipeline with AI-powered customer communication.',
    results: [
      { label: 'Hours Saved Weekly', value: '18 hrs' },
      { label: 'Error Rate Reduction', value: '98%' },
      { label: 'Setup Time', value: '7 Days' },
    ],
    metaTitle: 'n8n E-commerce Automation | Abubakar Siddik',
    metaDescription: 'How I automated an entire e-commerce pipeline with n8n — saving 18 hours per week.',
  }
];

export const defaultIndustries: IndustryItem[] = [
  {
    _id: 'i1',
    name: 'SaaS & Technology',
    slug: 'saas-and-technology',
    description: 'AI automation and web apps for SaaS companies to streamline onboarding and operations.',
    keyChallenges: ['Manual user onboarding', 'Repetitive customer support tasks', 'Integration gaps between tools'],
    solutions: ['n8n automation pipelines', 'AI chatbot for support', 'Custom Next.js dashboards'],
    metaTitle: 'SaaS Automation | Abubakar Siddik',
    metaDescription: 'AI automation and web development for SaaS companies.',
  }
];

export const defaultBlogs: BlogItem[] = [
  {
    _id: 'b1',
    title: 'How to Build Your First n8n AI Automation Workflow in 2026',
    slug: 'first-n8n-ai-automation-workflow',
    author: 'Abubakar Siddik',
    excerpt: 'A step-by-step guide to building powerful AI automation workflows with n8n — from setup to deployment.',
    content: 'Full content goes here...',
    tags: ['n8n', 'AI Automation', 'Workflow'],
    metaTitle: 'n8n AI Automation Workflow Guide | Abubakar Siddik',
    metaDescription: 'Learn how to build your first AI automation workflow with n8n in 2026.',
    isPublished: true,
    publishedAt: new Date().toISOString(),
  }
];

export const defaultCategories: CategoryItem[] = [
  {
    _id: 'cat1',
    name: 'AI Automation',
    slug: 'ai-automation',
    type: 'service',
  },
  {
    _id: 'cat2',
    name: 'Web Development',
    slug: 'web-development',
    type: 'service',
  }
];
