export interface Testimonial {
  id: string;
  name: string;
  treatment: string;
  content: string;
  rating?: number;
}

export interface PatientCase {
  id: string;
  title: string;
  category: string;
  summary: string;
  journey: { step: string; description: string }[];
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "A. S.",
    treatment: "Oral Cancer Surgery & Reconstruction",
    content:
      "Dr. Bandyopadhyay explained every step of my treatment clearly. His surgical expertise and compassionate approach gave me confidence throughout a difficult journey. I am grateful for the care I received.",
    rating: 5,
  },
  {
    id: "2",
    name: "R. M.",
    treatment: "Facial Trauma Surgery",
    content:
      "After my accident, I was worried about recovery. Dr. Rajarshi managed my facial fractures with great skill. My bite and appearance improved significantly after surgery.",
    rating: 5,
  },
  {
    id: "3",
    name: "P. D.",
    treatment: "TMJ Surgery",
    content:
      "Years of jaw pain affected my daily life. Dr. Bandyopadhyay thoroughly evaluated my condition and recommended the right surgical approach. The improvement in my quality of life has been remarkable.",
    rating: 5,
  },
  {
    id: "4",
    name: "S. B.",
    treatment: "Jaw Tumour Removal",
    content:
      "From diagnosis to follow-up, the care was professional and supportive. Dr. Bandyopadhyay took time to answer all my family's questions and ensured we understood the treatment plan.",
    rating: 5,
  },
];

export const patientCases: PatientCase[] = [
  {
    id: "case-1",
    title: "Complex Oral Cancer with Jaw Reconstruction",
    category: "Oral Oncology",
    summary:
      "A patient presented with a tongue lesion confirmed as oral cancer. Surgical resection was followed by microvascular reconstruction to restore oral function.",
    journey: [
      {
        step: "Initial Consultation",
        description:
          "Clinical examination and biopsy confirmed diagnosis. Imaging studies guided surgical planning.",
      },
      {
        step: "Surgical Treatment",
        description:
          "Tumour resection with neck dissection and free flap reconstruction performed at a tertiary care centre.",
      },
      {
        step: "Recovery & Rehabilitation",
        description:
          "Speech therapy and nutritional support during recovery. Regular follow-up for oncologic monitoring.",
      },
      {
        step: "Long-Term Follow-Up",
        description:
          "Ongoing surveillance with improved oral function and quality of life.",
      },
    ],
  },
  {
    id: "case-2",
    title: "Panfacial Trauma Management",
    category: "Facial Trauma",
    summary:
      "A patient sustained multiple facial bone fractures in a road accident. Coordinated surgical fixation restored facial structure and bite alignment.",
    journey: [
      {
        step: "Emergency Evaluation",
        description:
          "Urgent assessment with CT imaging revealed mandibular and midface fractures.",
      },
      {
        step: "Surgical Fixation",
        description:
          "Open reduction and internal fixation using modern plate systems.",
      },
      {
        step: "Recovery",
        description:
          "Gradual return to normal diet and jaw function with physiotherapy support.",
      },
    ],
  },
];

export const caseCategories = [
  "All",
  "Oral Oncology",
  "Facial Trauma",
  "TMJ Surgery",
  "Tumours & Cysts",
];
