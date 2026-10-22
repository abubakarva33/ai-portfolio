'use client';

/**
 * BlogClientFilters — Client Component
 *
 * Provides live search and category filtering for the blog index page.
 * All blog + category data is fetched on the server and passed as props.
 * No data fetching or React Query usage inside this component.
 */

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, Calendar, Clock, ArrowRight, User } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { H2, Paragraph } from '@/components/ui/Typography';
import type { BlogItem, CategoryItem } from '@/types';

interface BlogClientFiltersProps {
  blogs: BlogItem[];
  categories: CategoryItem[];
}

export function BlogClientFilters({ blogs, categories }: BlogClientFiltersProps) {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const blogCategories = categories.filter((c) => c.type === 'blog');

  const filteredBlogs = useMemo(() => {
    return blogs.filter((item) => {
      const matchesSearch =
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.excerpt.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        selectedCategory === 'all' ||
        (typeof item.category === 'object' && item.category !== null
          ? (item.category as CategoryItem).slug === selectedCategory
          : item.category === selectedCategory);

      return matchesSearch && matchesCategory;
    });
  }, [blogs, search, selectedCategory]);

  return (
    <div className="space-y-8">
      {/* Search & Category Filter Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 glass-panel p-4 rounded-2xl border border-white/10">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search articles by title or keyword..."
            className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors"
            aria-label="Search blog articles"
          />
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors ${
              selectedCategory === 'all'
                ? 'bg-indigo-600 text-white'
                : 'bg-white/5 text-gray-300 hover:bg-white/10'
            }`}
          >
            All Articles
          </button>
          {blogCategories.map((cat) => (
            <button
              key={cat._id}
              onClick={() => setSelectedCategory(cat.slug)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors ${
                selectedCategory === cat.slug
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Cards Grid */}
      {filteredBlogs.length === 0 ? (
        <p className="text-center text-sm text-gray-400 py-12">
          No articles match your search. Try a different keyword.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map((article) => (
            <Card key={article._id} variant="glass" className="flex flex-col justify-between p-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-[11px] text-gray-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                    {article.publishedAt ? new Date(article.publishedAt).toLocaleDateString() : 'Unknown date'}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-sky-400" />
                    {article.readTimeMinutes || 5} min read
                  </span>
                </div>

                <H2 className="text-xl font-bold text-white hover:text-indigo-300 transition-colors line-clamp-2">
                  <Link href={`/blog/${article.slug}`}>{article.title}</Link>
                </H2>

                <Paragraph className="text-xs line-clamp-3">{article.excerpt}</Paragraph>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-gray-400 flex items-center gap-1">
                  <User className="w-3.5 h-3.5 text-indigo-400" />
                  {article.author}
                </span>
                <Link
                  href={`/blog/${article.slug}`}
                  className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 inline-flex items-center gap-1"
                >
                  Read Article <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
