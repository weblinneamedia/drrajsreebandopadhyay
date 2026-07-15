import { Hero } from "@/components/home/Hero";
import { ExpertiseGrid } from "@/components/home/ExpertiseGrid";
import { AboutDoctor } from "@/components/home/AboutDoctor";
import {
  FeaturedTreatment,
  WhyChoose,
  AppointmentProcess,
  WarningSigns,
} from "@/components/home/Sections";
import { TestimonialSlider } from "@/components/home/Testimonials";
import { LatestBlogs } from "@/components/home/BottomSections";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ExpertiseGrid />
      <AboutDoctor />
      <FeaturedTreatment />
      <WhyChoose />
      <AppointmentProcess />
      <WarningSigns />
      <TestimonialSlider />
      <LatestBlogs />
    </>
  );
}
