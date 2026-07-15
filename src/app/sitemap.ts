import type { MetadataRoute } from "next";
import { doctor } from "@/data/doctor";
import { treatments } from "@/data/treatments";
import { blogPosts } from "@/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = doctor.website;

  const staticPages = [
    "",
    "/about",
    "/expertise",
    "/treatments",
    "/patient-stories",
    "/blog",
    "/faq",
    "/contact",
    "/privacy",
    "/terms",
    "/cookies",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const treatmentPages = treatments.map((t) => ({
    url: `${baseUrl}/treatments/${t.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogPages = blogPosts.map((p) => ({
    url: `${baseUrl}/blog/${p.slug}`,
    lastModified: new Date(p.updatedAt),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...treatmentPages, ...blogPages];
}
