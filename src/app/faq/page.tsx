import type { Metadata } from "next";
import { doctor } from "@/data/doctor";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FAQAccordion } from "@/components/faq/FAQAccordion";
import { faqPageSchema, JsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: `Find answers to common questions about consultations, treatments, appointments, and recovery with ${doctor.name} in ${doctor.location.city}.`,
  alternates: { canonical: `${doctor.website}/faq` },
};

export default function FAQPage() {
  return (
    <>
      <JsonLd data={faqPageSchema()} />
      <div className="bg-section">
        <div className="container-custom px-6 py-8">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "FAQ" }]} />
          <h1 className="text-4xl font-bold text-navy mt-4">Frequently Asked Questions</h1>
          <p className="text-slate-600 mt-2">
            Clear answers to help you understand our services and what to expect.
          </p>
        </div>
      </div>

      <section className="section-padding">
        <div className="container-custom max-w-3xl">
          <FAQAccordion />
        </div>
      </section>
    </>
  );
}
