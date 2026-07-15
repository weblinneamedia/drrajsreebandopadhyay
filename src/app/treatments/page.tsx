import type { Metadata } from "next";
import Link from "next/link";
import { doctor } from "@/data/doctor";
import { treatments } from "@/data/treatments";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Treatments",
  description: `Comprehensive oral oncology and maxillofacial treatments by ${doctor.name} in ${doctor.location.city}.`,
  alternates: { canonical: `${doctor.website}/treatments` },
};

export default function TreatmentsPage() {
  return (
    <>
      <div className="bg-section">
        <div className="container-custom px-6 py-8">
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "Treatments" }]}
          />
          <h1 className="text-4xl font-bold text-navy mt-4">Our Treatments</h1>
          <p className="text-slate-600 mt-2">
            Specialist surgical treatments for oral and maxillofacial conditions in{" "}
            {doctor.location.city}.
          </p>
        </div>
      </div>

      <section className="section-padding">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {treatments.map((t) => (
            <Link
              key={t.slug}
              href={`/treatments/${t.slug}`}
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <h2 className="text-lg font-bold text-navy mb-2 group-hover:text-accent transition-colors">
                {t.name}
              </h2>
              <p className="text-sm text-slate-600 line-clamp-3">{t.shortDescription}</p>
              <span className="inline-block mt-4 text-accent text-sm font-semibold">
                Learn More →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
