"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, MapPin, Clock, Phone } from "lucide-react";
import { doctor } from "@/data/doctor";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/expertise", label: "Expertise" },
  { href: "/treatments", label: "Treatments" },
  { href: "/patient-stories", label: "Patient Stories" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function TopBar() {
  return (
    <div className="bg-navy text-white text-sm py-2 hidden md:block">
      <div className="container-custom flex flex-wrap items-center justify-between gap-4 px-6">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-accent-light" />
            {doctor.location.full}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-accent-light" />
            {doctor.clinicTiming}
          </span>
        </div>
        <div className="flex items-center gap-6">
          <a
            href={doctor.phoneHref}
            className="flex items-center gap-1.5 hover:text-accent-light transition-colors"
          >
            <Phone className="w-4 h-4" />
            {doctor.phone}
          </a>
        </div>
      </div>
    </div>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container-custom flex items-center justify-between px-4 md:px-6 py-4">
        <Logo name={doctor.shortName} title={doctor.title} />

        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-700 hover:text-accent transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Button href="/contact#appointment-form" className="!py-2.5 !px-5 text-sm">
            Book an Appointment
          </Button>
        </nav>

        <button
          className="lg:hidden p-2 text-navy"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-300 bg-white border-t",
          mobileOpen ? "max-h-[500px]" : "max-h-0"
        )}
      >
        <nav className="container-custom px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="py-3 px-4 text-slate-700 hover:bg-section rounded-lg font-medium"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Button
            href="/contact#appointment-form"
            className="mt-2 w-full"
          >
            Book an Appointment
          </Button>
        </nav>
      </div>
    </header>
  );
}
