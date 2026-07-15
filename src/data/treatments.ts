export interface Treatment {
  slug: string;
  name: string;
  shortDescription: string;
  icon: string;
  overview: string;
  conditions: string[];
  symptoms: string[];
  whenToConsult: string[];
  diagnosis: string[];
  treatmentOptions: string[];
  procedureInfo: string;
  benefits: string[];
  risks: string[];
  recovery: string[];
  faqs: { question: string; answer: string }[];
}

export const treatments: Treatment[] = [
  {
    slug: "oral-oncology-reconstruction",
    name: "Oral Oncology & Cancer Reconstruction",
    shortDescription:
      "Comprehensive diagnosis and surgical treatment for oral and head-neck cancers with advanced reconstructive techniques.",
    icon: "stethoscope",
    overview:
      "Oral oncology focuses on the diagnosis, surgical management, and reconstruction of cancers affecting the mouth, jaw, tongue, and surrounding structures. Dr. Bandyopadhyay provides evidence-based oncologic surgery combined with microvascular reconstruction to restore function and appearance.",
    conditions: [
      "Oral cavity cancers (tongue, floor of mouth, buccal mucosa)",
      "Benign and malignant oral tumours",
      "Head and neck cancers",
      "Recurrent oral lesions requiring surgical evaluation",
    ],
    symptoms: [
      "Persistent mouth ulcer that does not heal",
      "Unexplained lump or thickening in the cheek or tongue",
      "Difficulty swallowing or chewing",
      "Numbness in the mouth or lips",
      "White or red patches inside the mouth",
      "Persistent sore throat or hoarseness",
    ],
    whenToConsult: [
      "Any mouth ulcer lasting more than two weeks",
      "Unexplained swelling in the jaw, neck, or oral cavity",
      "Previous biopsy showing pre-cancerous or cancerous changes",
      "Family history of oral cancer with concerning symptoms",
    ],
    diagnosis: [
      "Detailed clinical examination of oral cavity and neck",
      "Biopsy and histopathological analysis",
      "CT/MRI imaging for staging and surgical planning",
      "PET-CT when indicated for advanced cases",
    ],
    treatmentOptions: [
      "Surgical resection with clear margin planning",
      "Neck dissection when lymph node involvement is suspected",
      "Microvascular free flap reconstruction",
      "Jawbone and soft tissue restoration",
      "Multidisciplinary coordination with oncology teams",
    ],
    procedureInfo:
      "Treatment is tailored to tumour type, stage, and patient health. Surgical planning prioritises complete oncologic control while preserving maximum function. Reconstructive options are discussed before surgery whenever possible.",
    benefits: [
      "Specialist oncologic surgical expertise",
      "Advanced reconstructive capabilities",
      "Comprehensive pre- and post-operative support",
      "Clear communication throughout treatment",
    ],
    risks: [
      "As with any major surgery, risks include bleeding, infection, and anaesthesia-related complications. Specific risks depend on tumour location and extent. All potential risks are discussed during consultation.",
    ],
    recovery: [
      "Hospital stay varies based on procedure complexity",
      "Speech and swallowing rehabilitation when needed",
      "Regular follow-up for wound healing and oncologic monitoring",
      "Long-term surveillance for recurrence detection",
    ],
    faqs: [
      {
        question: "How is oral cancer diagnosed?",
        answer:
          "Diagnosis typically involves clinical examination, imaging studies, and biopsy of suspicious lesions. Results guide staging and treatment planning.",
      },
      {
        question: "Will reconstruction be needed after cancer surgery?",
        answer:
          "Reconstruction depends on the extent of tissue removed. Dr. Bandyopadhyay discusses reconstructive options during your consultation based on individual needs.",
      },
    ],
  },
  {
    slug: "facial-trauma-surgery",
    name: "Facial Trauma Surgery",
    shortDescription:
      "Expert management of facial bone fractures including mandibular, Le Fort, and panfacial trauma using modern fixation techniques.",
    icon: "shield",
    overview:
      "Facial trauma surgery addresses injuries to the facial bones and soft tissues caused by accidents, falls, or assaults. Timely specialist intervention is essential to restore facial structure, bite alignment, and function.",
    conditions: [
      "Mandibular fractures",
      "Le Fort fractures",
      "Panfacial trauma",
      "Zygomatic and orbital fractures",
      "Soft tissue facial lacerations",
    ],
    symptoms: [
      "Facial swelling and bruising after injury",
      "Difficulty opening the mouth or chewing",
      "Misaligned bite or jaw deviation",
      "Numbness in the face or lips",
      "Visible deformity or asymmetry",
    ],
    whenToConsult: [
      "Immediately after significant facial injury",
      "Persistent pain or swelling following trauma",
      "Changes in bite alignment after an accident",
      "Numbness or vision changes after facial injury",
    ],
    diagnosis: [
      "Clinical assessment of facial symmetry and bite",
      "Panoramic and CT imaging of facial bones",
      "Evaluation of dental occlusion",
      "Assessment of nerve and soft tissue involvement",
    ],
    treatmentOptions: [
      "Open reduction and internal fixation (ORIF)",
      "Closed reduction for selected fractures",
      "Soft tissue repair and scar management",
      "Dental splinting and bite correction",
    ],
    procedureInfo:
      "Surgical approach depends on fracture type and location. Modern titanium plate fixation techniques are used to stabilise fractures and promote proper healing.",
    benefits: [
      "Restoration of facial structure and function",
      "Improved bite alignment",
      "Minimised long-term complications with timely care",
      "Experienced trauma surgical management",
    ],
    risks: [
      "Infection, nerve injury, and malocclusion are potential risks. These are minimised through careful surgical technique and appropriate follow-up care.",
    ],
    recovery: [
      "Soft diet during initial healing phase",
      "Gradual return to normal activities as advised",
      "Regular follow-up imaging to confirm bone healing",
      "Physiotherapy for jaw mobility when indicated",
    ],
    faqs: [
      {
        question: "How soon should facial trauma be treated?",
        answer:
          "Facial fractures should be evaluated as soon as possible, ideally within the first 24–48 hours, to achieve optimal outcomes.",
      },
    ],
  },
  {
    slug: "tmj-surgery",
    name: "TMJ Surgery",
    shortDescription:
      "Specialist care for temporomandibular joint disorders including pain management, joint reconstruction, and replacement surgery.",
    icon: "activity",
    overview:
      "Temporomandibular joint (TMJ) disorders can cause significant jaw pain, clicking, limited mouth opening, and headaches. When conservative treatment is insufficient, surgical intervention may be recommended.",
    conditions: [
      "TMJ pain and dysfunction",
      "Internal derangement of the TMJ",
      "TMJ arthritis and degenerative joint disease",
      "Recurrent jaw locking",
      "Failed conservative TMJ treatment",
    ],
    symptoms: [
      "Jaw pain or tenderness",
      "Clicking or popping sounds when opening the mouth",
      "Limited mouth opening",
      "Headaches and ear pain",
      "Jaw locking in open or closed position",
    ],
    whenToConsult: [
      "Persistent jaw pain despite conservative treatment",
      "Progressive difficulty opening the mouth",
      "Frequent jaw locking episodes",
      "TMJ symptoms affecting daily activities",
    ],
    diagnosis: [
      "Clinical TMJ examination and bite assessment",
      "MRI or CT imaging of the joint",
      "Evaluation of occlusal factors",
      "Assessment of muscle and joint function",
    ],
    treatmentOptions: [
      "Arthrocentesis and arthroscopy",
      "Open joint surgery and disc repositioning",
      "Joint reconstruction",
      "Total joint replacement for advanced cases",
    ],
    procedureInfo:
      "Surgical options range from minimally invasive procedures to total joint replacement, selected based on joint condition, symptoms, and response to prior treatments.",
    benefits: [
      "Relief from chronic jaw pain",
      "Improved mouth opening and function",
      "Specialist TMJ surgical expertise",
      "Comprehensive pre-operative assessment",
    ],
    risks: [
      "Risks vary by procedure type and may include infection, nerve sensitivity changes, and recurrence of symptoms. These are discussed in detail during consultation.",
    ],
    recovery: [
      "Gradual return to normal jaw function",
      "Physiotherapy and jaw exercises",
      "Soft diet during initial recovery",
      "Regular follow-up to monitor joint function",
    ],
    faqs: [
      {
        question: "Is TMJ surgery always necessary?",
        answer:
          "No. Many TMJ conditions respond to conservative treatments. Surgery is considered when symptoms persist despite appropriate non-surgical management.",
      },
    ],
  },
  {
    slug: "tumors-cysts",
    name: "Tumours & Cysts",
    shortDescription:
      "Diagnosis and surgical management of oral cysts, jaw tumours, and neck swellings with careful pathological evaluation.",
    icon: "scan",
    overview:
      "Oral and jaw cysts and tumours require specialist evaluation to determine whether they are benign or malignant. Early diagnosis and appropriate surgical management help prevent complications and preserve oral health.",
    conditions: [
      "Odontogenic cysts",
      "Jaw tumours (benign and malignant)",
      "Salivary gland tumours",
      "Neck swellings requiring evaluation",
      "Recurrent oral lesions",
    ],
    symptoms: [
      "Painless swelling in the jaw or neck",
      "Gradual enlargement of a mouth or jaw lump",
      "Tooth mobility without obvious dental cause",
      "Numbness of the lip or chin",
      "Persistent ulceration in the oral cavity",
    ],
    whenToConsult: [
      "Any unexplained swelling in the jaw or neck",
      "Growth that increases in size over weeks or months",
      "Tooth displacement without dental disease",
      "Biopsy-recommended lesions",
    ],
    diagnosis: [
      "Clinical and radiographic examination",
      "Fine needle aspiration or biopsy",
      "CT/MRI for extent assessment",
      "Histopathological confirmation",
    ],
    treatmentOptions: [
      "Enucleation of cysts",
      "Surgical excision of tumours",
      "Jaw resection for aggressive lesions",
      "Reconstruction when extensive tissue removal is needed",
    ],
    procedureInfo:
      "Treatment is determined by lesion type, size, and location. Pathological analysis guides the surgical approach and follow-up plan.",
    benefits: [
      "Accurate diagnosis and staging",
      "Appropriate surgical management",
      "Preservation of healthy tissue where possible",
      "Long-term monitoring and follow-up",
    ],
    risks: [
      "Risks depend on lesion type and surgical extent. Potential complications include infection, nerve injury, and recurrence, which are discussed before treatment.",
    ],
    recovery: [
      "Healing time varies by procedure extent",
      "Regular follow-up imaging and clinical checks",
      "Pathology review to confirm complete removal",
      "Long-term surveillance for selected lesions",
    ],
    faqs: [
      {
        question: "Are all jaw swellings cancerous?",
        answer:
          "No. Many jaw swellings are benign cysts or tumours. Specialist evaluation and biopsy determine the nature of the lesion and appropriate treatment.",
      },
    ],
  },
  {
    slug: "head-neck-reconstruction",
    name: "Head & Neck Reconstruction",
    shortDescription:
      "Advanced microvascular free flap reconstruction to restore form and function after oncologic or traumatic tissue loss.",
    icon: "heart-pulse",
    overview:
      "Head and neck reconstruction restores appearance and function after cancer surgery or severe trauma. Microvascular free flap techniques transfer tissue from one part of the body to reconstruct defects in the face, jaw, or neck.",
    conditions: [
      "Post-oncologic tissue defects",
      "Composite mandibular defects",
      "Soft tissue defects of face and neck",
      "Secondary reconstruction after prior surgery",
    ],
    symptoms: [
      "Functional impairment after tumour resection",
      "Facial asymmetry or deformity",
      "Difficulty with speech or swallowing",
      "Jaw instability after bone removal",
    ],
    whenToConsult: [
      "Planning for reconstruction alongside oncologic surgery",
      "Functional or aesthetic concerns after prior treatment",
      "Secondary reconstruction evaluation",
    ],
    diagnosis: [
      "Assessment of defect size and location",
      "Evaluation of donor site options",
      "Imaging for surgical planning",
      "Multidisciplinary team review",
    ],
    treatmentOptions: [
      "Free fibula flap for jaw reconstruction",
      "Soft tissue free flaps for facial defects",
      "Local and regional flap options",
      "Dental rehabilitation planning",
    ],
    procedureInfo:
      "Reconstructive surgery is planned in coordination with oncologic treatment. Microvascular techniques connect transferred tissue to blood vessels in the neck for reliable healing.",
    benefits: [
      "Restoration of jaw structure and facial contour",
      "Improved speech and swallowing function",
      "Enhanced quality of life after major surgery",
      "Specialist microvascular surgical expertise",
    ],
    risks: [
      "Flap failure, infection, and donor site complications are potential risks. Careful patient selection and surgical technique minimise these outcomes.",
    ],
    recovery: [
      "Intensive monitoring in immediate post-operative period",
      "Gradual return to oral intake",
      "Speech and swallowing therapy",
      "Long-term functional and aesthetic follow-up",
    ],
    faqs: [
      {
        question: "When is microvascular reconstruction performed?",
        answer:
          "It is typically performed immediately after tumour removal or as a planned secondary procedure, depending on the clinical situation and patient health.",
      },
    ],
  },
  {
    slug: "jaw-correction",
    name: "Jaw Correction & Orthognathic Surgery",
    shortDescription:
      "Surgical correction of jaw deformities to improve bite alignment, facial balance, and oral function.",
    icon: "bone",
    overview:
      "Jaw correction surgery addresses misalignment of the upper and lower jaws that cannot be corrected with orthodontics alone. Procedures improve bite function, facial symmetry, and overall oral health.",
    conditions: [
      "Mandibular prognathism or retrognathism",
      "Facial asymmetry",
      "Open bite and deep bite",
      "Sleep apnoea related to jaw position",
      "Post-traumatic jaw deformity",
    ],
    symptoms: [
      "Difficulty biting or chewing",
      "Prominent or receding chin",
      "Facial asymmetry",
      "Speech difficulties",
      "Jaw pain related to malocclusion",
    ],
    whenToConsult: [
      "Orthodontist referral for surgical jaw correction",
      "Persistent bite problems despite orthodontic treatment",
      "Facial asymmetry affecting confidence or function",
    ],
    diagnosis: [
      "Cephalometric analysis and dental models",
      "CT imaging for surgical planning",
      "Orthodontic assessment",
      "Functional bite evaluation",
    ],
    treatmentOptions: [
      "Le Fort I osteotomy (upper jaw)",
      "Bilateral sagittal split osteotomy (lower jaw)",
      "Genioplasty for chin correction",
      "Combined orthodontic and surgical treatment",
    ],
    procedureInfo:
      "Jaw correction is typically performed in coordination with an orthodontist. Surgery repositions the jaws into proper alignment, secured with plates and screws.",
    benefits: [
      "Improved bite and chewing function",
      "Enhanced facial balance and aesthetics",
      "Better long-term oral health",
      "Comprehensive treatment planning",
    ],
    risks: [
      "Nerve numbness, relapse, and infection are among the potential risks. These are thoroughly discussed during the treatment planning phase.",
    ],
    recovery: [
      "Initial soft diet for several weeks",
      "Gradual return to normal jaw function",
      "Orthodontic finishing after surgery",
      "Regular follow-up for bone healing confirmation",
    ],
    faqs: [
      {
        question: "How long does jaw correction treatment take?",
        answer:
          "The complete process, including pre-surgical orthodontics, surgery, and post-surgical orthodontic finishing, typically spans 12–24 months.",
      },
    ],
  },
];

export function getTreatmentBySlug(slug: string): Treatment | undefined {
  return treatments.find((t) => t.slug === slug);
}
