import Image from "next/image";
import { Phone, MessageCircle, Award, Shield, Heart } from "lucide-react";
import { doctor } from "@/data/doctor";
import { Button } from "@/components/ui/Button";

const trustBadges = [
  { icon: Award, label: "Qualified Specialist" },
  { icon: Shield, label: "Advanced Treatment" },
  { icon: Heart, label: "Patient-Focused Care" },
];

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-section to-white overflow-hidden">
      <div className="container-custom section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              {doctor.title}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-navy leading-tight mb-6">
              Trusted {doctor.primarySpecialty} Specialist in {doctor.location.city}
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              {doctor.tagline}
            </p>
            <p className="text-slate-700 mb-8">
              <strong>{doctor.experience}+ years</strong> of experience in Oral & Maxillofacial
              Surgery, Oral Oncology, and Head-Neck Reconstructive Surgery.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <Button href="/contact#appointment-form">Book an Appointment</Button>
              <Button href={doctor.phoneHref} variant="secondary" external>
                <Phone className="w-4 h-4" />
                Call Now
              </Button>
              <Button href={doctor.whatsappHref} variant="whatsapp" external>
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </Button>
            </div>

            <div className="flex flex-wrap gap-4">
              {trustBadges.map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm text-sm font-medium text-navy"
                >
                  <badge.icon className="w-4 h-4 text-accent" />
                  {badge.label}
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-in-up animate-delay-200">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={doctor.images.hero}
                alt={`${doctor.name} - ${doctor.title} in ${doctor.location.city}`}
                fill
                className="object-cover object-top"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                unoptimized
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-accent text-white px-6 py-4 rounded-xl shadow-lg">
              <p className="text-3xl font-bold">{doctor.experience}+</p>
              <p className="text-sm">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
