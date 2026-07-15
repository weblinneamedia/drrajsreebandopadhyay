import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol className="flex flex-wrap items-center gap-1 text-sm text-slate-500">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-1">
            {index > 0 && <ChevronRight className="w-4 h-4 text-slate-400" />}
            {item.href ? (
              <Link
                href={item.href}
                className="hover:text-accent transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-navy font-medium">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
