import type { Metadata } from "next";
import { doctor } from "@/data/doctor";

export const metadata: Metadata = {
  title: "Health Blog",
  description: `Patient education articles and medical awareness from ${doctor.name}, ${doctor.primarySpecialty} specialist in ${doctor.location.city}.`,
  alternates: { canonical: `${doctor.website}/blog` },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
