"use client";

import { useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import { blogPosts, blogCategories } from "@/data/blog";
import { doctor } from "@/data/doctor";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { BlogImage } from "@/components/blog/BlogImage";
import { formatDate, cn } from "@/lib/utils";

export default function BlogPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const featured = blogPosts.find((p) => p.featured) || blogPosts[0];

  let filtered = blogPosts;
  if (category !== "All") {
    filtered = filtered.filter((p) => p.category === category);
  }
  if (search) {
    const q = search.toLowerCase();
    filtered = filtered.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q)
    );
  }

  return (
    <>
      <div className="bg-section">
        <div className="container-custom px-6 py-8">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog" }]} />
          <h1 className="text-4xl font-bold text-navy mt-4">Health Blog</h1>
          <p className="text-slate-600 mt-2">
            Patient education and medical awareness from {doctor.shortName}.
          </p>
        </div>
      </div>

      <section className="section-padding">
        <div className="container-custom">
          {/* Featured Article */}
          <Link
            href={`/blog/${featured.slug}`}
            className="card overflow-hidden grid md:grid-cols-2 mb-12 group"
          >
            <BlogImage
              src={featured.image}
              alt={featured.title}
              width={800}
              height={500}
              containerClassName="aspect-[16/10] md:aspect-auto min-h-[250px]"
              className="group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="p-8 flex flex-col justify-center">
              <span className="text-xs text-accent font-semibold uppercase">Featured</span>
              <h2 className="text-2xl font-bold text-navy mt-2 mb-3 group-hover:text-accent transition-colors">
                {featured.title}
              </h2>
              <p className="text-slate-600 mb-4">{featured.excerpt}</p>
              <p className="text-sm text-slate-500">
                {featured.author} · {formatDate(featured.publishedAt)} · {featured.readingTime} min read
              </p>
            </div>
          </Link>

          {/* Search & Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="search"
                placeholder="Search articles..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg focus:border-accent"
                aria-label="Search blog articles"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setCategory("All")}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                  category === "All" ? "bg-accent text-white" : "bg-section text-slate-600"
                )}
              >
                All
              </button>
              {blogCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                    category === cat ? "bg-accent text-white" : "bg-section text-slate-600"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Article Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post) => (
              <article key={post.slug} className="card overflow-hidden group">
                <BlogImage
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={250}
                  containerClassName="aspect-[16/10]"
                  className="group-hover:scale-105 transition-transform"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="p-6">
                  <span className="text-xs text-accent font-semibold uppercase">{post.category}</span>
                  <h2 className="text-lg font-bold text-navy mt-2 mb-2 line-clamp-2 group-hover:text-accent transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="text-xs text-slate-500 mb-3">
                    {post.author} · {formatDate(post.publishedAt)} · Updated {formatDate(post.updatedAt)} · {post.readingTime} min
                  </p>
                  <p className="text-sm text-slate-600 line-clamp-2">{post.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
