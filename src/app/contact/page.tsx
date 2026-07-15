import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, MessageCircle, AlertTriangle } from "lucide-react";
import { doctor } from "@/data/doctor";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { AppointmentForm } from "@/components/forms/AppointmentForm";

export const metadata: Metadata = {
  title: "Contact & Appointments",
  description: `Contact ${doctor.name} in ${doctor.location.city}. Book appointments by phone, WhatsApp, or online enquiry form.`,
  alternates: { canonical: `${doctor.website}/contact` },
};

export default function ContactPage() {
  return (
    <>
      <div className="bg-section">
        <div className="container-custom px-6 py-8">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
          <h1 className="text-4xl font-bold text-navy mt-4">Contact Us</h1>
          <p className="text-slate-600 mt-2">
            Book an appointment or reach out with any questions. We&apos;re here to help.
          </p>
        </div>
      </div>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-navy mb-6">{doctor.clinicName}</h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-navy">Address</p>
                      <p className="text-slate-600">{doctor.address}</p>
                      <p className="text-sm text-slate-500 mt-1">{doctor.parkingInfo}</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-accent shrink-0" />
                    <div>
                      <p className="font-medium text-navy">Phone / WhatsApp</p>
                      <a href={doctor.phoneHref} className="text-accent hover:underline">
                        {doctor.phone}
                      </a>
                      <p className="text-sm text-slate-500 mt-1">
                        <a
                          href={doctor.whatsappHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 hover:text-accent"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                          Chat on WhatsApp
                        </a>
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-accent shrink-0" />
                    <div>
                      <p className="font-medium text-navy">Email</p>
                      <a href={`mailto:${doctor.email}`} className="text-accent hover:underline">
                        {doctor.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-navy">Clinic Timing</p>
                      <p className="text-slate-600">{doctor.clinicTiming}</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-lg h-64">
                <iframe
                  src={doctor.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Clinic location on Google Maps"
                />
              </div>

              <div className="card p-6 bg-red-50 border border-red-100">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-red-600 shrink-0" />
                  <div>
                    <h3 className="font-bold text-navy mb-2">Emergency Information</h3>
                    <p className="text-sm text-slate-600 mb-3">
                      For urgent oral or facial trauma, call{" "}
                      <a
                        href={doctor.phoneHref}
                        className="text-red-600 font-semibold hover:underline"
                      >
                        {doctor.phone}
                      </a>
                      . For life-threatening emergencies, contact local emergency services
                      (102/108) immediately.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <AppointmentForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
