import Link from "next/link";
import {
  Stethoscope,
  Shield,
  Activity,
  Scan,
  HeartPulse,
  Bone,
  ArrowRight,
} from "lucide-react";
import { treatments } from "@/data/treatments";
import { SectionHeading } from "@/components/ui/SectionHeading";

const iconMap: Record<string, React.ElementType> = {
  stethoscope: Stethoscope,
  shield: Shield,
  activity: Activity,
  scan: Scan,
  "heart-pulse": HeartPulse,
  bone: Bone,
};

export function ExpertiseGrid() {
  return (
    <section className="section-padding bg-section" id="expertise">
      <div className="container-custom">
        <SectionHeading
          label="Areas of Expertise"
          title="Oral Oncology & Reconstruction in Kolkata"
          description="Specialist surgical care across a comprehensive range of oral and maxillofacial conditions."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {treatments.map((treatment) => {
            const Icon = iconMap[treatment.icon] || Stethoscope;
            return (
              <div key={treatment.slug} className="card p-6 group">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-navy mb-2">{treatment.name}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-2">
                  {treatment.shortDescription}
                </p>
                <Link
                  href={`/treatments/${treatment.slug}`}
                  className="inline-flex items-center gap-1 text-accent font-semibold text-sm hover:gap-2 transition-all"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
