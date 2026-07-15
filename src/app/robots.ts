import type { MetadataRoute } from "next";
import { doctor } from "@/data/doctor";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: `${doctor.website}/sitemap.xml`,
  };
}
