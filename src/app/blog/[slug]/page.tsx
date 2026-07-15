import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { doctor } from "@/data/doctor";
import { blogPosts, getBlogBySlug } from "@/data/blog";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { BlogImage } from "@/components/blog/BlogImage";
import { formatDate } from "@/lib/utils";
import { articleSchema, breadcrumbSchema, JsonLd } from "@/lib/schema";
import { Button } from "@/components/ui/Button";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      images: [{ url: post.image }],
    },
    alternates: { canonical: `${doctor.website}/blog/${slug}` },
  };
}

function renderMarkdown(content: string) {
  return content.split("\n\n").map((block, i) => {
    if (block.startsWith("## ")) {
      return (
        <h2 key={i} className="text-2xl font-bold text-navy mt-8 mb-4">
          {block.replace("## ", "")}
        </h2>
      );
    }
    return (
      <p key={i} className="text-slate-600 leading-relaxed mb-4">
        {block}
      </p>
    );
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <JsonLd data={articleSchema(post)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: doctor.website },
          { name: "Blog", url: `${doctor.website}/blog` },
          { name: post.title, url: `${doctor.website}/blog/${slug}` },
        ])}
      />

      <div className="bg-section">
        <div className="container-custom px-6 py-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: post.title },
            ]}
          />
        </div>
      </div>

      <article className="section-padding">
        <div className="container-custom max-w-3xl">
          <span className="text-xs text-accent font-semibold uppercase">{post.category}</span>
          <h1 className="text-4xl font-bold text-navy mt-2 mb-4">{post.title}</h1>
          <p className="text-sm text-slate-500 mb-8">
            By {post.author} · Published {formatDate(post.publishedAt)} · Updated{" "}
            {formatDate(post.updatedAt)} · {post.readingTime} min read
          </p>

          <BlogImage
            src={post.image}
            alt={post.title}
            width={900}
            height={506}
            containerClassName="aspect-[16/9] rounded-2xl mb-10"
            priority
            sizes="800px"
          />

          <div className="prose-custom">{renderMarkdown(post.content)}</div>

          <div className="flex gap-4 mt-10 pt-8 border-t">
            <span className="text-sm text-slate-500">Share:</span>
            {["Facebook", "Twitter", "LinkedIn", "WhatsApp"].map((platform) => (
              <button
                key={platform}
                className="text-sm text-accent hover:underline"
                aria-label={`Share on ${platform}`}
              >
                {platform}
              </button>
            ))}
          </div>

          <p className="text-xs text-slate-500 mt-8 border-t pt-6">
            <strong>Medical Disclaimer:</strong> This article is for general educational purposes
            only and should not replace professional medical consultation.
          </p>
        </div>
      </article>

      <section className="section-padding bg-section">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-navy mb-6">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="card p-6 hover:shadow-lg transition-shadow">
                <span className="text-xs text-accent font-semibold">{p.category}</span>
                <h3 className="font-bold text-navy mt-2 line-clamp-2">{p.title}</h3>
                <p className="text-sm text-slate-500 mt-2">{formatDate(p.publishedAt)}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding text-center">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-navy mb-4">Have Questions About This Topic?</h2>
          <Button href="/contact#appointment-form">Book a Consultation</Button>
        </div>
      </section>
    </>
  );
}
