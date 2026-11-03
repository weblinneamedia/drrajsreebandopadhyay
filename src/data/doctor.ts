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
  phone: "+91 81599 28326",
  phoneHref: "tel:+918159928326",
  whatsappHref: "https://wa.me/918159928326",
  email: "drrajarshimaxillofacial@gmail.com",
  clinicName: "Dr. Rajarshi Bandyopadhyay — Oral & Maxillofacial Clinic",
  clinicTiming: "Monday – Saturday: 10:00 AM – 6:00 PM",
  address: {
    name: "Linnea Health",
    street: "43, G.T. Road (South)",
    locality: "Howrah",
    region: "West Bengal",
    postalCode: "711101",
    country: "India",
  },
  mapEmbedUrl:
    "https://maps.google.com/maps?q=Linnea+Health,+43,+G.T.+Road+(South),+Howrah,+West+Bengal+711101&z=17&output=embed",
  mapLink:
    "https://www.google.com/maps/search/?api=1&query=Linnea+Health,+43,+G.T.+Road+(South),+Howrah,+West+Bengal+711101",
  website: "https://drrajarshimaxillofacial.in",
  images: {
    hero: "/images/doctor-hero.png",
    about: "/images/doctor-about.png",
  },
  social: {
    facebook: "https://www.facebook.com/drrajarshibandopadhyay",
    instagram: "https://www.instagram.com/dr.rbandopadhyay/",
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
