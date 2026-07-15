import type { Metadata } from "next";
import { doctor } from "@/data/doctor";

export const metadata: Metadata = {
  title: "Patient Stories & Testimonials",
  description: `Read patient experiences and anonymised treatment journeys from ${doctor.name}'s clinic in ${doctor.location.city}.`,
  alternates: { canonical: `${doctor.website}/patient-stories` },
};

export { default } from "./PatientStoriesContent";
