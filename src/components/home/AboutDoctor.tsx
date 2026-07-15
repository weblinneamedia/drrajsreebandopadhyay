import Image from "next/image";
import { doctor } from "@/data/doctor";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function AboutDoctor() {
  return (
    <section className="section-padding bg-white" id="about">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative aspect-[2/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={doctor.images.about}
                alt={`${doctor.name} in clinic - ${doctor.title}`}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
                unoptimized
              />
            </div>
          </div>

          <div>
            <SectionHeading
              label="About the Doctor"
              title={`${doctor.name}`}
              align="left"
              className="!mb-6"
            />
            <p className="text-slate-600 leading-relaxed mb-6">{doctor.bio}</p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              {doctor.stats.map((stat) => (
                <div key={stat.label} className="card p-4 text-center">
                  <p className="text-2xl font-bold text-accent">{stat.value}</p>
                  <p className="text-xs text-slate-500 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="space-y-4 mb-8">
              <div>
                <h4 className="font-semibold text-navy text-sm mb-2">Qualifications</h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  {doctor.qualifications.map((q) => (
                    <li key={q}>• {q}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-navy text-sm mb-2">Areas of Special Interest</h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  {doctor.specialInterests.slice(0, 3).map((s) => (
                    <li key={s}>• {s}</li>
                  ))}
                </ul>
              </div>
            </div>

            <Button href="/about">Read Full Profile</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
