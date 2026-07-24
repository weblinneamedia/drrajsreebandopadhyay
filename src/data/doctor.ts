export const doctor = {
  name: "Dr. Rajarshi Bandyopadhyay",
  shortName: "Dr. Rajarshi",
  title: "Oral Oncologist & Maxillofacial Surgeon",
  primarySpecialty: "Oral Oncology",
  location: {
    city: "Kolkata",
    state: "West Bengal",
    country: "India",
    full: "Kolkata, West Bengal",
  },
  experience: 7,
  phone: "+91 98363 34000",
  phoneHref: "tel:+919836334000",
  whatsappHref: "https://wa.me/919836334000",
  email: "Contact@drrajarshimaxillofacial.com",
  clinicName: "Dr. Rajarshi Bandyopadhyay — Oral & Maxillofacial Clinic",
  clinicTiming: "Monday – Saturday: 10:00 AM – 6:00 PM",
  address: "Kolkata, West Bengal, India",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.0!2d88.3639!3d22.5726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDM0JzIxLjQiTiA4OMKwMjEnNTAuMCJF!5e0!3m2!1sen!2sin!4v1",
  mapLink: "https://maps.google.com/?q=Kolkata,West+Bengal,India",
  parkingInfo:
    "Convenient parking available near the clinic. Landmark details will be shared upon appointment confirmation.",
  website: "https://drrajarshimaxillofacial.in",
  images: {
    hero: "/images/doctor-hero.png",
    about: "/images/doctor-about.png",
  },
  social: {
    facebook: "https://www.facebook.com/drrajarshibandopadhyay",
    instagram: "https://www.instagram.com/dr.rbandopadhyay/",
    linkedin: "https://linkedin.com/",
    youtube: "https://youtube.com/",
  },
  analyticsId: process.env.NEXT_PUBLIC_GA_ID ?? "",
  tagline:
    "Receive expert diagnosis, advanced treatment and compassionate medical care from an experienced specialist committed to improving patient health, comfort and quality of life.",
  bio: `Dr. Rajarshi Bandyopadhyay is a highly respected Oral Oncologist and Reconstructive Surgeon in Kolkata, specialising in Oral & Maxillofacial Surgery, Oral Oncology, and Head-Neck Reconstructive Surgery. With over ${7} years of dedicated clinical experience, he is widely recognised for advanced microvascular reconstruction, facial trauma management, jaw correction, and complex oral cancer surgeries.`,
  bioExtended: `Dr. Bandyopadhyay combines surgical precision with a deeply patient-centred approach. He believes in clear communication, evidence-based treatment planning, and comprehensive support throughout every stage of care — from initial consultation through recovery and long-term follow-up.`,
  qualifications: [
    "MDS — Oral & Maxillofacial Surgery",
    "Diploma in Oral Oncology (AO Foundation, Switzerland)",
    "Specialisation in Oral Oncology & Head-Neck Reconstruction",
    "Advanced training in Microvascular Free Flap Reconstruction",
  ],
  fellowships: [
    "Fellowship in Head & Neck Oncologic Surgery",
    "Advanced Microvascular Reconstructive Surgery Training",
  ],
  memberships: [
    "Association of Oral & Maxillofacial Surgeons of India",
    "Indian Association of Surgical Oncology",
    "Indian Dental Association",
  ],
  hospitalAffiliations: [
    "Leading multispecialty hospitals in Kolkata",
    "Tertiary care centres for oral oncology",
  ],
  specialInterests: [
    "Oral cancer diagnosis and surgical management",
    "Microvascular free flap reconstruction",
    "Facial trauma and mandibular fracture repair",
    "TMJ disorders and joint reconstruction",
    "Jaw correction and maxillofacial rehabilitation",
  ],
  awards: [
    "Recognised specialist in oral oncology and reconstructive surgery",
    "Contributor to advanced maxillofacial surgical techniques in Eastern India",
  ],
  publications: [
    "Research contributions in oral oncology and maxillofacial reconstruction",
    "Presentations at national surgical oncology conferences",
  ],
  philosophy:
    "Every patient deserves a clear understanding of their condition, honest guidance about treatment options, and surgical care delivered with skill, empathy, and respect for their dignity.",
  mission:
    "To provide world-class oral oncology and maxillofacial surgical care to patients in Kolkata and beyond, restoring function, confidence, and quality of life.",
  vision:
    "To be the most trusted oral oncologist and reconstructive surgeon in Eastern India, known for clinical excellence and compassionate patient care.",
  stats: [
    { value: "7+", label: "Years of Experience" },
    { value: "Specialist", label: "Oral Oncology Care" },
    { value: "Advanced", label: "Reconstructive Techniques" },
    { value: "3+", label: "Professional Associations" },
  ],
} as const;

export const siteConfig = {
  name: doctor.clinicName,
  description: `Trusted ${doctor.primarySpecialty} specialist in ${doctor.location.city}. Expert oral cancer diagnosis, advanced reconstructive surgery, and compassionate maxillofacial care by ${doctor.name}.`,
  url: doctor.website,
  keywords: [
    `oral oncologist in ${doctor.location.city}`,
    `oral cancer surgeon in ${doctor.location.city}`,
    `maxillofacial surgeon ${doctor.location.city}`,
    `oral cancer treatment ${doctor.location.city}`,
    `TMJ surgery specialist ${doctor.location.city}`,
    `facial trauma surgeon ${doctor.location.city}`,
    `doctor appointment in ${doctor.location.city}`,
  ],
};
