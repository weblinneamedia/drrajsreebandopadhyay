import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  label,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12",
        align === "center" && "text-center",
        className
      )}
    >
      {label && (
        <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">{title}</h2>
      {description && (
        <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
