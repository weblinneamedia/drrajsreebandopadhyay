import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { doctor } from "@/data/doctor";
import { treatments, getTreatmentBySlug } from "@/data/treatments";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { AppointmentForm } from "@/components/forms/AppointmentForm";
import { medicalProcedureSchema, breadcrumbSchema, JsonLd } from "@/lib/schema";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return treatments.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const treatment = getTreatmentBySlug(slug);
  if (!treatment) return {};

  return {
    title: `${treatment.name} in ${doctor.location.city}`,
    description: `${treatment.shortDescription} Consult ${doctor.name}, experienced ${doctor.primarySpecialty} specialist in ${doctor.location.city}.`,
    alternates: {
      canonical: `${doctor.website}/treatments/${slug}`,
    },
  };
}

export default async function TreatmentDetailPage({ params }: Props) {
  const { slug } = await params;
  const treatment = getTreatmentBySlug(slug);
  if (!treatment) notFound();

  const related = treatments.filter((t) => t.slug !== slug).slice(0, 3);

  return (
    <>
      <JsonLd data={medicalProcedureSchema(treatment)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: doctor.website },
          { name: "Treatments", url: `${doctor.website}/treatments` },
          { name: treatment.name, url: `${doctor.website}/treatments/${slug}` },
        ])}
      />

      <div className="bg-section">
        <div className="container-custom px-6 py-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Treatments", href: "/treatments" },
              { label: treatment.name },
            ]}
          />
          <h1 className="text-4xl font-bold text-navy mt-4">{treatment.name}</h1>
          <p className="text-slate-600 mt-2 max-w-2xl">{treatment.shortDescription}</p>
        </div>
      </div>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-2xl font-bold text-navy mb-4">Overview</h2>
                <p className="text-slate-600 leading-relaxed">{treatment.overview}</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy mb-4">Common Causes</h2>
                <p className="text-slate-600 leading-relaxed">
                  Causes vary by condition and may include trauma, developmental factors,
                  chronic inflammation, tobacco use, or unknown origins. A specialist
                  evaluation determines the underlying cause in each case.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy mb-4">Signs & Symptoms</h2>
                <ul className="space-y-2">
                  {treatment.symptoms.map((s) => (
                    <li key={s} className="text-slate-600 flex items-start gap-2">
                      <span className="text-accent">•</span> {s}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy mb-4">When to Consult a Specialist</h2>
                <ul className="space-y-2">
                  {treatment.whenToConsult.map((w) => (
                    <li key={w} className="text-slate-600 flex items-start gap-2">
                      <span className="text-accent">•</span> {w}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy mb-4">Diagnosis</h2>
                <ul className="space-y-2">
                  {treatment.diagnosis.map((d) => (
                    <li key={d} className="text-slate-600 flex items-start gap-2">
                      <span className="text-accent">•</span> {d}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy mb-4">Treatment Options</h2>
                <ul className="space-y-2">
                  {treatment.treatmentOptions.map((t) => (
                    <li key={t} className="text-slate-600 flex items-start gap-2">
                      <span className="text-accent">•</span> {t}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy mb-4">Procedure Information</h2>
                <p className="text-slate-600 leading-relaxed">{treatment.procedureInfo}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="card p-6">
                  <h3 className="font-bold text-navy mb-3">Benefits</h3>
                  <ul className="space-y-2 text-sm text-slate-600">
                    {treatment.benefits.map((b) => (
                      <li key={b}>• {b}</li>
                    ))}
                  </ul>
                </div>
                <div className="card p-6">
                  <h3 className="font-bold text-navy mb-3">Possible Risks</h3>
                  <ul className="space-y-2 text-sm text-slate-600">
                    {treatment.risks.map((r) => (
                      <li key={r}>• {r}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy mb-4">Recovery & Follow-Up</h2>
                <ul className="space-y-2">
                  {treatment.recovery.map((r) => (
                    <li key={r} className="text-slate-600 flex items-start gap-2">
                      <span className="text-accent">•</span> {r}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy mb-4">Frequently Asked Questions</h2>
                <div className="space-y-3">
                  {treatment.faqs.map((faq, i) => (
                    <div key={i} className="card p-5">
                      <h3 className="font-semibold text-navy mb-2">{faq.question}</h3>
                      <p className="text-sm text-slate-600">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-xs text-slate-500 border-t pt-6">
                <strong>Medical Disclaimer:</strong> This information is for general educational
                purposes only and should not replace professional medical consultation. Please
                schedule an appointment for personalised medical advice.
              </p>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                <AppointmentForm compact />
                <div className="card p-6">
                  <h3 className="font-bold text-navy mb-4">Related Treatments</h3>
                  <ul className="space-y-3">
                    {related.map((t) => (
                      <li key={t.slug}>
                        <Link
                          href={`/treatments/${t.slug}`}
                          className="text-sm text-accent hover:underline"
                        >
                          {t.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
