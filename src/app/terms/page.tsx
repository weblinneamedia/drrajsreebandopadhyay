import type { Metadata } from "next";
import { doctor } from "@/data/doctor";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `Terms and conditions for using the ${doctor.clinicName} website.`,
};

export default function TermsPage() {
  return (
    <>
      <div className="bg-section">
        <div className="container-custom px-6 py-8">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Terms & Conditions" }]} />
          <h1 className="text-4xl font-bold text-navy mt-4">Terms & Conditions</h1>
        </div>
      </div>
      <section className="section-padding">
        <div className="container-custom max-w-3xl space-y-6 text-slate-600">
          <p>Last updated: July 2026</p>
          <p>
            By accessing and using this website, you agree to the following terms and conditions.
            If you do not agree, please do not use this website.
          </p>
          <h2 className="text-xl font-bold text-navy">Medical Disclaimer</h2>
          <p>
            The content on this website is for general informational purposes only and does not
            constitute medical advice, diagnosis, or treatment. Always seek the advice of a qualified
            healthcare provider for any medical condition.
          </p>
          <h2 className="text-xl font-bold text-navy">Appointment Enquiries</h2>
          <p>
            Submitting an appointment enquiry does not guarantee a confirmed appointment. Our team
            will contact you to confirm availability and schedule your visit.
          </p>
          <h2 className="text-xl font-bold text-navy">Intellectual Property</h2>
          <p>
            All content on this website, including text, images, and design, is the property of
            {doctor.clinicName} and may not be reproduced without written permission.
          </p>
          <h2 className="text-xl font-bold text-navy">Limitation of Liability</h2>
          <p>
            We make reasonable efforts to ensure the accuracy of website content but do not warrant
            that all information is complete or current. We are not liable for any damages arising
            from use of this website.
          </p>
          <h2 className="text-xl font-bold text-navy">Contact</h2>
          <p>
            For questions about these terms, contact {doctor.email}.
          </p>
        </div>
      </section>
    </>
  );
}
