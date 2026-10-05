import { doctor, siteConfig } from "@/data/doctor";
import { faqs } from "@/data/faq";
import type { BlogPost } from "@/data/blog";
import type { Treatment } from "@/data/treatments";

export function physicianSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: doctor.name,
    medicalSpecialty: doctor.primarySpecialty,
    description: siteConfig.description,
    telephone: doctor.phone,
    email: doctor.email,
    url: siteConfig.url,
    address: {
      "@type": "PostalAddress",
      streetAddress: doctor.address.street,
      addressLocality: doctor.address.locality,
      addressRegion: doctor.address.region,
      postalCode: doctor.address.postalCode,
      addressCountry: doctor.address.country,
    },
    areaServed: doctor.location.city,
    knowsAbout: [
      "Oral Oncology",
      "Maxillofacial Surgery",
      "Facial Trauma",
      "TMJ Surgery",
    ],
  };
}

export function medicalClinicSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: doctor.clinicName,
    description: siteConfig.description,
    telephone: doctor.phone,
    email: doctor.email,
    url: siteConfig.url,
    openingHours: "Mo-Sa 10:00-18:00",
    address: {
      "@type": "PostalAddress",
      streetAddress: doctor.address.street,
      addressLocality: doctor.address.locality,
      addressRegion: doctor.address.region,
      postalCode: doctor.address.postalCode,
      addressCountry: doctor.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 22.5804599,
      longitude: 88.3319128,
    },
    physician: {
      "@type": "Physician",
      name: doctor.name,
    },
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
  "@id": siteConfig.url,
    name: doctor.clinicName,
    image: `${siteConfig.url}/images/logo.png`,
    telephone: doctor.phone,
    email: doctor.email,
    url: siteConfig.url,
    address: {
      "@type": "PostalAddress",
      streetAddress: doctor.address.street,
      addressLocality: doctor.address.locality,
      addressRegion: doctor.address.region,
      postalCode: doctor.address.postalCode,
      addressCountry: doctor.address.country,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "10:00",
        closes: "18:00",
      },
    ],
  };
}

export function faqPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function articleSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    author: {
      "@type": "Person",
      name: post.author,
    },
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    image: post.image.startsWith("http")
      ? post.image
      : `${siteConfig.url}${post.image}`,
    publisher: {
      "@type": "Organization",
      name: doctor.clinicName,
    },
  };
}

export function medicalProcedureSchema(treatment: Treatment) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: treatment.name,
    description: treatment.overview,
    procedureType: treatment.name,
  };
}

export function breadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
