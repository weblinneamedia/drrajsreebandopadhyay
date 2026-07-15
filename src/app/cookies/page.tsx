import type { Metadata } from "next";
import { doctor } from "@/data/doctor";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CookiePreferences } from "@/components/layout/CookiePreferences";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: `Cookie policy for ${doctor.clinicName}.`,
};

export default function CookiesPage() {
  return (
    <>
      <div className="bg-section">
        <div className="container-custom px-6 py-8">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Cookie Policy" }]} />
          <h1 className="text-4xl font-bold text-navy mt-4">Cookie Policy</h1>
        </div>
      </div>
      <section className="section-padding">
        <div className="container-custom max-w-3xl space-y-6 text-slate-600">
          <p>Last updated: July 2026</p>
          <p>
            This website uses cookies to improve your browsing experience and analyse site traffic.
          </p>
          <h2 className="text-xl font-bold text-navy">What Are Cookies?</h2>
          <p>
            Cookies are small text files stored on your device when you visit a website. They help
            the site remember your preferences and understand how you use the site.
          </p>
          <h2 className="text-xl font-bold text-navy">Types of Cookies We Use</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Essential cookies:</strong> Required for basic website functionality.</li>
            <li><strong>Analytics cookies:</strong> Help us understand how visitors use our site (e.g., Google Analytics).</li>
            <li><strong>Preference cookies:</strong> Remember your cookie consent choice.</li>
          </ul>
          <h2 className="text-xl font-bold text-navy">Managing Cookies</h2>
          <p>
            You can control cookies through your browser settings. Disabling cookies may affect
            some website functionality. You can also accept or decline cookies using our cookie
            consent banner.
          </p>
          <CookiePreferences />

          <h2 className="text-xl font-bold text-navy">Contact</h2>
          <p>
            For questions about our cookie policy, contact {doctor.email}.
          </p>
        </div>
      </section>
    </>
  );
}
