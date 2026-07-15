export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const faqCategories = [
  "General Consultation",
  "Treatment and Procedures",
  "Surgery or Clinical Care",
  "Recovery",
  "Appointment and Fees",
  "Online Consultation",
  "Emergency Care",
] as const;

export const faqs: FAQItem[] = [
  {
    category: "General Consultation",
    question: "What should I bring to my first consultation?",
    answer:
      "Please bring any previous medical records, biopsy reports, imaging CDs or reports, a list of current medications, and your referral letter if you have one. This helps Dr. Bandyopadhyay review your history thoroughly.",
  },
  {
    category: "General Consultation",
    question: "How long does an initial consultation take?",
    answer:
      "An initial consultation typically takes 30–45 minutes. Complex cases may require additional time for examination and discussion of treatment options.",
  },
  {
    category: "General Consultation",
    question: "Do I need a referral to book an appointment?",
    answer:
      "A referral is helpful but not always mandatory. You may book directly by phone, WhatsApp, or through our online enquiry form.",
  },
  {
    category: "Treatment and Procedures",
    question: "What conditions does Dr. Bandyopadhyay treat?",
    answer:
      "Dr. Bandyopadhyay specialises in oral oncology, facial trauma, TMJ disorders, jaw tumours and cysts, head-neck reconstruction, and jaw correction surgery.",
  },
  {
    category: "Treatment and Procedures",
    question: "How is oral cancer treated?",
    answer:
      "Treatment depends on cancer type and stage. It may include surgical removal, neck dissection, and reconstructive surgery. A personalised treatment plan is created after thorough diagnosis and staging.",
  },
  {
    category: "Treatment and Procedures",
    question: "Is reconstruction always needed after oral cancer surgery?",
    answer:
      "Not always. Reconstruction is recommended when significant tissue removal affects function or appearance. Options are discussed during your consultation based on individual needs.",
  },
  {
    category: "Surgery or Clinical Care",
    question: "Where are surgeries performed?",
    answer:
      "Major surgical procedures are performed at affiliated multispecialty hospitals in Kolkata equipped with advanced operating facilities and intensive care support.",
  },
  {
    category: "Surgery or Clinical Care",
    question: "What type of anaesthesia is used?",
    answer:
      "Most major procedures are performed under general anaesthesia administered by qualified anaesthesiologists. Minor procedures may use local anaesthesia with sedation.",
  },
  {
    category: "Surgery or Clinical Care",
    question: "How should I prepare for surgery?",
    answer:
      "Pre-operative instructions include fasting guidelines, medication adjustments, and required investigations. Detailed preparation instructions are provided at your pre-surgical consultation.",
  },
  {
    category: "Recovery",
    question: "How long is the hospital stay after oral cancer surgery?",
    answer:
      "Hospital stay varies from a few days to two weeks depending on procedure complexity and reconstruction requirements. Recovery timelines are discussed before surgery.",
  },
  {
    category: "Recovery",
    question: "Will I need speech or swallowing therapy after surgery?",
    answer:
      "Some patients benefit from speech and swallowing rehabilitation after oral or jaw surgery. Referrals to qualified therapists are arranged when needed.",
  },
  {
    category: "Recovery",
    question: "How often are follow-up visits needed?",
    answer:
      "Follow-up frequency depends on the procedure and condition treated. Regular follow-up is essential for monitoring healing and long-term health.",
  },
  {
    category: "Appointment and Fees",
    question: "How can I book an appointment?",
    answer:
      "Appointments can be booked by calling the clinic, sending a WhatsApp message, or submitting the online enquiry form on our website.",
  },
  {
    category: "Appointment and Fees",
    question: "What are the consultation fees?",
    answer:
      "Consultation fees vary based on appointment type. Please contact the clinic directly for current fee information. Fees are communicated clearly before your visit.",
  },
  {
    category: "Appointment and Fees",
    question: "Can I reschedule my appointment?",
    answer:
      "Yes. Please contact the clinic at least 24 hours in advance to reschedule. This allows the appointment slot to be offered to other patients.",
  },
  {
    category: "Online Consultation",
    question: "Are online consultations available?",
    answer:
      "Yes, online consultations are available for initial assessment, report review, and follow-up discussions. Book through phone or WhatsApp to schedule a virtual appointment.",
  },
  {
    category: "Online Consultation",
    question: "What do I need for an online consultation?",
    answer:
      "A stable internet connection, a device with camera and microphone, and your medical reports readily available. A clinic team member will guide you through the process.",
  },
  {
    category: "Emergency Care",
    question: "What should I do in a dental or facial trauma emergency?",
    answer:
      "For facial trauma or acute oral emergencies, call our emergency line immediately. For life-threatening emergencies, contact local emergency services (102/108) first.",
  },
  {
    category: "Emergency Care",
    question: "Is the clinic available on weekends?",
    answer:
      "Regular clinic hours are Monday to Saturday. Emergency contact is available for urgent situations. Please call the emergency number for after-hours guidance.",
  },
];
