import type { Metadata } from "next";
import Image from "next/image";
import { doctor } from "@/data/doctor";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: `About ${doctor.name}`,
  description: `Learn about ${doctor.name}, a leading ${doctor.primarySpecialty} specialist in ${doctor.location.city} with ${doctor.experience}+ years of experience.`,
  alternates: { canonical: `${doctor.website}/about` },
};

export default function AboutPage() {
  return (
    <>
      <div className="bg-section">
        <div className="container-custom px-6 py-8">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About" }]} />
          <h1 className="text-4xl font-bold text-navy mt-4">
            About {doctor.name}
          </h1>
          <p className="text-slate-600 mt-2">{doctor.title} in {doctor.location.full}</p>
        </div>
      </div>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl sticky top-28">
                <Image
                  src={doctor.images.about}
                  alt={doctor.name}
                  fill
                  className="object-cover object-center"
                  sizes="400px"
                  unoptimized
                />
              </div>
            </div>
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-2xl font-bold text-navy mb-4">Professional Introduction</h2>
                <p className="text-slate-600 leading-relaxed mb-4">{doctor.bio}</p>
                <p className="text-slate-600 leading-relaxed">{doctor.bioExtended}</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy mb-4">Educational Qualifications</h2>
                <ul className="space-y-2">
                  {doctor.qualifications.map((q) => (
                    <li key={q} className="flex items-start gap-2 text-slate-600">
                      <span className="text-accent mt-1">✓</span> {q}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy mb-4">Fellowships & Certifications</h2>
                <ul className="space-y-2">
                  {doctor.fellowships.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-slate-600">
                      <span className="text-accent mt-1">✓</span> {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy mb-4">Clinical Experience</h2>
                <p className="text-slate-600 leading-relaxed">
                  With over {doctor.experience} years of dedicated clinical practice, Dr. Bandyopadhyay
                  has managed a wide spectrum of oral oncology cases, facial trauma injuries, TMJ
                  disorders, and complex reconstructive procedures at leading hospitals in Kolkata.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy mb-4">Hospital Affiliations</h2>
                <ul className="space-y-2">
                  {doctor.hospitalAffiliations.map((h) => (
                    <li key={h} className="text-slate-600">• {h}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy mb-4">Professional Memberships</h2>
                <ul className="space-y-2">
                  {doctor.memberships.map((m) => (
                    <li key={m} className="text-slate-600">• {m}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy mb-4">Awards & Recognition</h2>
                <ul className="space-y-2">
                  {doctor.awards.map((a) => (
                    <li key={a} className="text-slate-600">• {a}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy mb-4">Research & Publications</h2>
                <ul className="space-y-2">
                  {doctor.publications.map((p) => (
                    <li key={p} className="text-slate-600">• {p}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy mb-4">Treatment Philosophy</h2>
                <p className="text-slate-600 leading-relaxed italic border-l-4 border-accent pl-4">
                  &ldquo;{doctor.philosophy}&rdquo;
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="card p-6">
                  <h3 className="font-bold text-navy mb-2">Our Mission</h3>
                  <p className="text-sm text-slate-600">{doctor.mission}</p>
                </div>
                <div className="card p-6">
                  <h3 className="font-bold text-navy mb-2">Our Vision</h3>
                  <p className="text-sm text-slate-600">{doctor.vision}</p>
                </div>
              </div>

              <Button href="/contact#appointment-form">Book an Appointment</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
