"use client";

import { useState } from "react";
import { testimonials, patientCases, caseCategories } from "@/data/testimonials";
import { doctor } from "@/data/doctor";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TestimonialSlider } from "@/components/home/Testimonials";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export default function PatientStoriesContent() {
  const [filter, setFilter] = useState("All");

  const filteredCases =
    filter === "All"
      ? patientCases
      : patientCases.filter((c) => c.category === filter);

  return (
    <>
      <div className="bg-section">
        <div className="container-custom px-6 py-8">
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "Patient Stories" }]}
          />
          <h1 className="text-4xl font-bold text-navy mt-4">Patient Stories</h1>
          <p className="text-slate-600 mt-2 max-w-2xl">
            Anonymised patient experiences and treatment journeys shared with consent.
          </p>
        </div>
      </div>

      <TestimonialSlider />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Written Testimonials"
            description="Experiences shared by patients following treatment."
          />
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <div key={t.id} className="card p-6">
                <p className="text-slate-600 italic mb-4">&ldquo;{t.content}&rdquo;</p>
                <p className="font-semibold text-navy">{t.name}</p>
                <p className="text-sm text-accent">{t.treatment}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-section">
        <div className="container-custom">
          <SectionHeading title="Patient Cases" description="Anonymised treatment journeys." />

          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {caseCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                  filter === cat
                    ? "bg-accent text-white"
                    : "bg-white text-slate-600 hover:bg-slate-100"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="space-y-8">
            {filteredCases.map((c) => (
              <div key={c.id} className="card p-8">
                <span className="text-xs text-accent font-semibold uppercase">{c.category}</span>
                <h3 className="text-xl font-bold text-navy mt-2 mb-3">{c.title}</h3>
                <p className="text-slate-600 mb-6">{c.summary}</p>
                <div className="space-y-4">
                  {c.journey.map((step, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center text-sm font-bold shrink-0">
                        {i + 1}
                      </div>
                      <div>
                        <p className="font-semibold text-navy text-sm">{step.step}</p>
                        <p className="text-sm text-slate-600">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs text-slate-500 text-center mt-8">
            All patient cases are presented with informed consent. Individual results vary.
            Before-and-after images are shared only with explicit patient authorisation.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white text-center">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-navy mb-4">Start Your Treatment Journey</h2>
          <p className="text-slate-600 mb-6">
            Schedule a consultation with {doctor.shortName} in {doctor.location.city}.
          </p>
          <Button href="/contact#appointment-form">Book an Appointment</Button>
        </div>
      </section>
    </>
  );
}
