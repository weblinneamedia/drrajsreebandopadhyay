export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  publishedAt: string;
  updatedAt: string;
  readingTime: number;
  /** Local image path under /public */
  image: string;
  featured?: boolean;
}

export const blogCategories = [
  "Patient Education",
  "Symptoms and Prevention",
  "Treatment Guidance",
  "Recovery and Aftercare",
  "Medical Awareness",
] as const;

export const blogPosts: BlogPost[] = [
  {
    slug: "oral-oncologist-kolkata-expert-care",
    title:
      "Oral Oncologist in Kolkata: Expert Care for Oral Cancer Diagnosis & Treatment",
    excerpt:
      "Understanding when to seek specialist care for oral cancer symptoms and what to expect during diagnosis and treatment in Kolkata.",
    content: `Oral cancer is a serious but treatable condition when detected early. As an oral oncologist in Kolkata, Dr. Rajarshi Bandyopadhyay emphasises the importance of early specialist evaluation for persistent mouth ulcers, unexplained lumps, and other warning signs.

## Recognising Warning Signs

Common symptoms that warrant specialist consultation include mouth ulcers lasting more than two weeks, white or red patches inside the mouth, difficulty swallowing, and unexplained numbness in the lips or tongue.

## The Diagnostic Process

Diagnosis involves a thorough clinical examination, imaging studies such as CT or MRI, and biopsy of suspicious lesions. Accurate staging guides treatment planning.

## Treatment Approaches

Treatment may include surgical removal of the tumour, neck dissection when lymph nodes are involved, and reconstructive surgery to restore function. Each treatment plan is personalised based on cancer type, stage, and overall health.

## Why Early Consultation Matters

Early detection significantly improves treatment outcomes. If you have persistent oral symptoms, schedule a consultation without delay.`,
    category: "Medical Awareness",
    author: "Dr. Rajarshi Bandyopadhyay",
    publishedAt: "2026-02-03",
    updatedAt: "2026-02-03",
    readingTime: 6,
    image: "/images/blog/oral-oncology.jpg",
    featured: true,
  },
  {
    slug: "facial-trauma-when-to-see-specialist",
    title: "Facial Trauma: When to See a Maxillofacial Surgeon",
    excerpt:
      "Learn about common facial injuries, symptoms of fractures, and why timely specialist care is essential for optimal recovery.",
    content: `Facial trauma from accidents, falls, or sports injuries can affect both appearance and function. A maxillofacial surgeon specialises in treating injuries to the facial bones and surrounding structures.

## Common Types of Facial Trauma

Mandibular fractures, cheekbone injuries, and panfacial trauma require specialist evaluation. Symptoms include facial swelling, difficulty opening the mouth, and changes in bite alignment.

## Why Timing Matters

Facial fractures are best treated within the first few days after injury. Delayed treatment can lead to malunion, bite problems, and long-term functional impairment.

## What to Expect

Your surgeon will perform clinical examination and imaging to assess fracture type and plan appropriate fixation. Modern titanium plate techniques provide stable healing.

## Seeking Help

If you have experienced significant facial injury, seek specialist evaluation promptly.`,
    category: "Symptoms and Prevention",
    author: "Dr. Rajarshi Bandyopadhyay",
    publishedAt: "2026-01-15",
    updatedAt: "2026-01-15",
    readingTime: 5,
    image: "/images/blog/facial-trauma.jpg",
  },
  {
    slug: "tmj-disorders-understanding-treatment",
    title: "Understanding TMJ Disorders and Treatment Options",
    excerpt:
      "A patient-friendly guide to temporomandibular joint disorders, symptoms, conservative treatments, and when surgery may be considered.",
    content: `Temporomandibular joint (TMJ) disorders affect the joint connecting your jaw to your skull. Symptoms can range from mild clicking to severe pain and limited mouth opening.

## Common Symptoms

Jaw pain, clicking sounds, headaches, ear pain, and jaw locking are common signs. Many patients also experience difficulty chewing.

## Conservative Treatment First

Initial management often includes jaw exercises, dietary modifications, stress management, and occlusal splints. Most patients improve with non-surgical approaches.

## When Surgery Is Considered

Surgery is recommended when conservative treatments fail and symptoms significantly affect quality of life. Options range from arthroscopy to joint replacement.

## Specialist Evaluation

A thorough TMJ evaluation helps determine the most appropriate treatment pathway for your condition.`,
    category: "Treatment Guidance",
    author: "Dr. Rajarshi Bandyopadhyay",
    publishedAt: "2025-12-20",
    updatedAt: "2025-12-20",
    readingTime: 5,
    image: "/images/blog/tmj.jpg",
  },
  {
    slug: "recovery-after-oral-surgery",
    title: "Recovery After Oral Surgery: What Patients Should Know",
    excerpt:
      "Practical guidance on post-operative care, diet, follow-up visits, and signs that require immediate medical attention.",
    content: `Recovery after oral or maxillofacial surgery requires patience and adherence to your surgeon's instructions. Understanding what to expect helps reduce anxiety and supports healing.

## Immediate Post-Operative Period

Swelling, discomfort, and dietary restrictions are normal in the first few days. Pain management and wound care instructions will be provided before discharge.

## Diet and Nutrition

A soft or liquid diet is typically recommended initially. Gradual progression to normal foods depends on the procedure performed and healing progress.

## Follow-Up Care

Regular follow-up visits allow your surgeon to monitor healing, address concerns, and adjust your recovery plan as needed.

## When to Contact Your Surgeon

Contact the clinic if you experience severe bleeding, increasing swelling, fever, or difficulty breathing.`,
    category: "Recovery and Aftercare",
    author: "Dr. Rajarshi Bandyopadhyay",
    publishedAt: "2025-11-10",
    updatedAt: "2025-11-10",
    readingTime: 4,
    image: "/images/blog/recovery.jpg",
  },
  {
    slug: "oral-cancer-prevention-awareness",
    title: "Oral Cancer Prevention: Awareness and Risk Factors",
    excerpt:
      "Educational information about oral cancer risk factors, preventive measures, and the importance of regular oral health checks.",
    content: `Oral cancer awareness saves lives. Understanding risk factors and adopting preventive habits can reduce your risk and help detect problems early.

## Known Risk Factors

Tobacco use (smoking and smokeless), excessive alcohol consumption, betel nut chewing, and HPV infection are significant risk factors for oral cancer.

## Preventive Measures

Avoiding tobacco and limiting alcohol, maintaining good oral hygiene, and attending regular dental check-ups support early detection of suspicious lesions.

## Self-Examination

Monthly self-examination of the mouth can help identify changes early. Look for persistent ulcers, white or red patches, and unexplained lumps.

## Professional Screening

If you have risk factors or concerning symptoms, schedule a specialist consultation for thorough evaluation.`,
    category: "Patient Education",
    author: "Dr. Rajarshi Bandyopadhyay",
    publishedAt: "2025-10-05",
    updatedAt: "2025-10-05",
    readingTime: 5,
    image: "/images/blog/prevention.jpg",
  },
];

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
