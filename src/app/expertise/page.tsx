import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { doctor } from "@/data/doctor";
import { treatments } from "@/data/treatments";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FAQAccordion } from "@/components/faq/FAQAccordion";

export const metadata: Metadata = {
  title: `Expertise & Specialities`,
  description: `Explore the full range of oral oncology and maxillofacial surgical expertise offered by ${doctor.name} in ${doctor.location.city}.`,
  alternates: { canonical: `${doctor.website}/expertise` },
};

export default function ExpertisePage() {
  return (
    <>
      <div className="bg-section">
        <div className="container-custom px-6 py-8">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Expertise" }]} />
          <h1 className="text-4xl font-bold text-navy mt-4">Areas of Expertise</h1>
          <p className="text-slate-600 mt-2 max-w-2xl">
            {doctor.name} provides specialist care across oral oncology, facial trauma,
            TMJ surgery, and maxillofacial reconstruction in {doctor.location.city}.
          </p>
        </div>
      </div>

      <section className="section-padding">
        <div className="container-custom space-y-16">
          {treatments.map((treatment) => (
            <div key={treatment.slug} id={treatment.slug} className="scroll-mt-28">
              <div className="card p-8">
                <h2 className="text-2xl font-bold text-navy mb-4">{treatment.name}</h2>
                <p className="text-slate-600 leading-relaxed mb-6">{treatment.overview}</p>

                <div className="grid md:grid-cols-2 gap-8 mb-6">
                  <div>
                    <h3 className="font-semibold text-navy mb-3">Conditions Treated</h3>
                    <ul className="space-y-1 text-sm text-slate-600">
                      {treatment.conditions.map((c) => (
                        <li key={c}>• {c}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-3">Diagnostic Methods</h3>
                    <ul className="space-y-1 text-sm text-slate-600">
                      {treatment.diagnosis.map((d) => (
                        <li key={d}>• {d}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-3">Treatment Approaches</h3>
                    <ul className="space-y-1 text-sm text-slate-600">
                      {treatment.treatmentOptions.map((t) => (
                        <li key={t}>• {t}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-3">Recovery & Follow-Up</h3>
                    <ul className="space-y-1 text-sm text-slate-600">
                      {treatment.recovery.map((r) => (
                        <li key={r}>• {r}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button href={`/treatments/${treatment.slug}`}>
                    View Full Details <ArrowRight className="w-4 h-4" />
                  </Button>
                  <Button href="/contact#appointment-form" variant="secondary">
                    Book Consultation
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding bg-section">
        <div className="container-custom">
          <SectionHeading title="Related FAQs" />
          <FAQAccordion limit={5} showCategories={false} />
          <div className="text-center mt-8">
            <Link href="/faq" className="text-accent font-semibold hover:underline">
              View All FAQs →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
