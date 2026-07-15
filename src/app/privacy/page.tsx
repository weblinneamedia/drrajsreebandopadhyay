import type { Metadata } from "next";
import { doctor } from "@/data/doctor";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${doctor.clinicName}.`,
};

export default function PrivacyPage() {
  return (
    <>
      <div className="bg-section">
        <div className="container-custom px-6 py-8">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]} />
          <h1 className="text-4xl font-bold text-navy mt-4">Privacy Policy</h1>
        </div>
      </div>
      <section className="section-padding">
        <div className="container-custom max-w-3xl prose-custom space-y-6 text-slate-600">
          <p>Last updated: July 2026</p>
          <p>
            {doctor.clinicName} (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is committed to protecting
            your personal information. This Privacy Policy explains how we collect, use, and safeguard
            your data when you visit our website or submit an appointment enquiry.
          </p>
          <h2 className="text-xl font-bold text-navy">Information We Collect</h2>
          <p>
            When you submit an appointment enquiry form, we may collect your name, phone number,
            email address, preferred appointment details, treatment concerns, and any message you
            provide. We may also collect technical data such as IP address and browser type through
            cookies and analytics tools.
          </p>
          <h2 className="text-xl font-bold text-navy">How We Use Your Information</h2>
          <p>
            We use your information to respond to appointment enquiries, schedule consultations,
            improve our website, and communicate relevant healthcare information. We do not sell your
            personal data to third parties.
          </p>
          <h2 className="text-xl font-bold text-navy">Data Security</h2>
          <p>
            We implement appropriate technical and organisational measures to protect your personal
            information against unauthorised access, alteration, or disclosure.
          </p>
          <h2 className="text-xl font-bold text-navy">Your Rights</h2>
          <p>
            You may request access to, correction of, or deletion of your personal data by contacting
            us at {doctor.email}.
          </p>
          <h2 className="text-xl font-bold text-navy">Contact</h2>
          <p>
            For privacy-related enquiries, contact us at {doctor.email} or {doctor.phone}.
          </p>
        </div>
      </section>
    </>
  );
}
