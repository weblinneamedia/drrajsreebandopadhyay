import Link from "next/link";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { doctor } from "@/data/doctor";
import { Logo } from "@/components/ui/Logo";

const exploreLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/expertise", label: "Expertise" },
  { href: "/treatments", label: "Treatments" },
];

const patientLinks = [
  { href: "/patient-stories", label: "Patient Stories" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

const socialIcons = {
  facebook: (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.513c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  ),
  youtube: (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  ),
} as const;

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container-custom px-6 pt-14 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-5">
            <Logo
              name={doctor.shortName}
              title={doctor.title}
              invertText
              className="mb-5"
            />
            <p className="text-slate-300 text-sm leading-relaxed max-w-md mb-6">
              Expert oral oncology and maxillofacial surgical care in {doctor.location.city},
              focused on restoring function, confidence, and quality of life.
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              <Link
                href="/contact#appointment-form"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-accent text-white text-sm font-semibold hover:bg-accent-dark transition-colors"
              >
                Book Appointment
              </Link>
              <a
                href={doctor.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#25D366] text-white text-sm font-semibold hover:bg-[#1da851] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
            <div className="flex items-center gap-3">
              {(
                Object.entries(doctor.social) as [keyof typeof socialIcons, string][]
              ).map(([platform, url]) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-accent transition-colors"
                  aria-label={platform}
                >
                  {socialIcons[platform]}
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div className="lg:col-span-2">
            <h3 className="font-heading font-semibold text-sm uppercase tracking-wider text-white mb-4">
              Explore
            </h3>
            <ul className="space-y-2.5">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-300 text-sm hover:text-accent-light transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Patient Care */}
          <div className="lg:col-span-2">
            <h3 className="font-heading font-semibold text-sm uppercase tracking-wider text-white mb-4">
              Patient Care
            </h3>
            <ul className="space-y-2.5">
              {patientLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-300 text-sm hover:text-accent-light transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="font-heading font-semibold text-sm uppercase tracking-wider text-white mb-4">
              Visit & Contact
            </h3>
            <ul className="space-y-3.5 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-accent-light shrink-0" />
                <span>{doctor.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent-light shrink-0" />
                <a href={doctor.phoneHref} className="hover:text-accent-light transition-colors">
                  {doctor.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent-light shrink-0" />
                <a
                  href={`mailto:${doctor.email}`}
                  className="hover:text-accent-light transition-colors break-all"
                >
                  {doctor.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 mt-0.5 text-accent-light shrink-0" />
                <span>{doctor.clinicTiming}</span>
              </li>
            </ul>
            <a
              href={doctor.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-5 text-accent-light text-sm font-medium hover:underline"
            >
              View on Google Maps →
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-custom px-6 py-5">
          <p className="text-xs text-slate-400 leading-relaxed mb-5 max-w-5xl">
            <strong className="text-slate-300">Medical Disclaimer:</strong> The information on
            this website is for general educational purposes only and does not constitute medical
            advice. It should not replace professional medical consultation, diagnosis, or
            treatment. Always seek the advice of a qualified healthcare provider with any
            questions regarding a medical condition. In a life-threatening emergency, contact
            local emergency services immediately.
          </p>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs text-slate-400">
            <p>
              © {new Date().getFullYear()} {doctor.name}. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              <Link href="/privacy" className="hover:text-accent-light transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-accent-light transition-colors">
                Terms & Conditions
              </Link>
              <Link href="/cookies" className="hover:text-accent-light transition-colors">
                Cookie Policy
              </Link>
            </div>
            <p>
              Website design by{" "}
              <span className="text-slate-300">Linnea Media</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
