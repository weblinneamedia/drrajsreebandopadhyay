import Link from "next/link";
import { blogPosts } from "@/data/blog";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BlogImage } from "@/components/blog/BlogImage";
import { formatDate } from "@/lib/utils";

export function LatestBlogs() {
  const latest = blogPosts.slice(0, 3);

  return (
    <section className="section-padding bg-white" id="blog">
      <div className="container-custom">
        <SectionHeading
          label="Health Blog"
          title="Latest Healthcare Articles"
          description="Patient education and medical awareness from our specialist team."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latest.map((post) => (
            <article key={post.slug} className="card overflow-hidden group">
              <BlogImage
                src={post.image}
                alt={post.title}
                width={400}
                height={250}
                containerClassName="aspect-[16/10]"
                className="group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="p-6">
                <span className="text-xs text-accent font-semibold uppercase">
                  {post.category}
                </span>
                <h3 className="text-lg font-bold text-navy mt-2 mb-2 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-xs text-slate-500 mb-3">
                  {formatDate(post.publishedAt)} · {post.readingTime} min read
                </p>
                <p className="text-sm text-slate-600 mb-4 line-clamp-2">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-accent font-semibold text-sm hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button href="/blog" variant="secondary">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
}
