import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

const conditions = [
  "Oral cavity cancers",
  "Benign and malignant tumours",
  "Head and neck cancers",
  "Pre-cancerous oral lesions",
];

const symptoms = [
  "Persistent mouth ulcers",
  "Unexplained lumps or swellings",
  "Difficulty swallowing",
  "White or red patches in the mouth",
];

export function FeaturedTreatment() {
  return (
    <section className="section-padding bg-section">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading
              label="Featured Treatment"
              title="Advanced Oral Oncology Care"
              align="left"
              className="!mb-6"
            />
            <p className="text-slate-600 leading-relaxed mb-6">
              Comprehensive diagnosis and treatment for oral cancer using modern surgical and
              reconstructive techniques. Dr. Bandyopadhyay provides evidence-based oncologic
              surgery combined with microvascular reconstruction to restore function and
              appearance.
            </p>

            <div className="mb-6">
              <h4 className="font-semibold text-navy mb-3">Conditions Treated</h4>
              <ul className="space-y-2">
                {conditions.map((c) => (
                  <li key={c} className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <h4 className="font-semibold text-navy mb-3">Symptoms Requiring Consultation</h4>
              <ul className="space-y-2">
                {symptoms.map((s) => (
                  <li key={s} className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            <Button href="/treatments/oral-oncology-reconstruction">
              Learn About Oral Oncology
            </Button>
          </div>

          <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=600&fit=crop"
              alt="Advanced oral oncology care and treatment"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function WhyChoose() {
  const benefits = [
    {
      title: "Specialist Expertise",
      description: "Dedicated focus on oral oncology and maxillofacial surgery with advanced training.",
    },
    {
      title: "Evidence-Based Treatment",
      description: "Treatment plans grounded in current medical evidence and best practices.",
    },
    {
      title: "Modern Surgical Techniques",
      description: "Utilising contemporary fixation, reconstruction, and microvascular methods.",
    },
    {
      title: "Clear Patient Communication",
      description: "Thorough explanation of diagnosis, options, and expected outcomes.",
    },
    {
      title: "Comprehensive Treatment Support",
      description: "Guidance from initial consultation through recovery and follow-up care.",
    },
    {
      title: "Ethical and Transparent Care",
      description: "Honest recommendations without unrealistic promises or fear-based messaging.",
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading
          label="Why Choose Us"
          title={`Why Patients Choose ${"Dr. Bandyopadhyay"}`}
          description="Committed to clinical excellence and compassionate care at every step."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b) => (
            <div key={b.title} className="card p-6">
              <h3 className="text-lg font-bold text-navy mb-2">{b.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AppointmentProcess() {
  const steps = [
    { step: 1, title: "Book an Appointment", description: "Call, WhatsApp, or submit our online enquiry form." },
    { step: 2, title: "Consultation & Evaluation", description: "Thorough clinical examination and review of your medical history." },
    { step: 3, title: "Diagnosis & Treatment Planning", description: "Clear explanation of findings and personalised treatment options." },
    { step: 4, title: "Treatment & Follow-Up Care", description: "Expert surgical care with ongoing support and monitoring." },
  ];

  return (
    <section className="section-padding bg-section">
      <div className="container-custom">
        <SectionHeading
          label="How It Works"
          title="Your Appointment Journey"
          description="A simple, supportive process from your first enquiry to complete recovery."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((s, i) => (
            <div key={s.step} className="relative text-center">
              <div className="w-14 h-14 rounded-full bg-accent text-white text-xl font-bold flex items-center justify-center mx-auto mb-4 relative z-10">
                {s.step}
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-7 left-[60%] w-[80%] h-0.5 bg-accent/20" />
              )}
              <h3 className="font-bold text-navy mb-2">{s.title}</h3>
              <p className="text-sm text-slate-600">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WarningSigns() {
  const signs = [
    "Mouth ulcer lasting more than two weeks",
    "Unexplained lump in the mouth, jaw, or neck",
    "Persistent sore throat or hoarseness",
    "Difficulty swallowing or chewing",
    "Numbness in the lip, chin, or tongue",
    "White or red patches inside the mouth",
    "Unexplained bleeding in the oral cavity",
    "Jaw swelling or tooth mobility without dental cause",
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading
          label="Patient Education"
          title="Warning Signs to Watch For"
          description="Seek specialist consultation if you experience any of the following symptoms."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {signs.map((sign) => (
            <div key={sign} className="flex items-start gap-3 p-4 bg-section rounded-lg">
              <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <span className="text-slate-700 text-sm">{sign}</span>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-slate-500 mt-8 max-w-2xl mx-auto">
          This information is for general awareness and should not replace professional medical
          consultation. If you have concerns about any symptoms, please schedule an appointment.
        </p>
      </div>
    </section>
  );
}
