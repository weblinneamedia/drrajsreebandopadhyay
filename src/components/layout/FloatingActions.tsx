import { Phone, MessageCircle, Calendar } from "lucide-react";
import { doctor } from "@/data/doctor";
import Link from "next/link";

export function MobileActionBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t shadow-lg md:hidden">
      <div className="grid grid-cols-3 divide-x">
        <a
          href={doctor.phoneHref}
          className="flex flex-col items-center justify-center py-3 text-navy hover:bg-section transition-colors"
          aria-label="Call clinic"
        >
          <Phone className="w-5 h-5 text-accent mb-1" />
          <span className="text-xs font-medium">Call</span>
        </a>
        <a
          href={doctor.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-3 text-navy hover:bg-section transition-colors"
          aria-label="WhatsApp"
        >
          <MessageCircle className="w-5 h-5 text-[#25D366] mb-1" />
          <span className="text-xs font-medium">WhatsApp</span>
        </a>
        <Link
          href="/contact#appointment-form"
          className="flex flex-col items-center justify-center py-3 bg-accent text-white hover:bg-accent-dark transition-colors"
          aria-label="Book appointment"
        >
          <Calendar className="w-5 h-5 mb-1" />
          <span className="text-xs font-medium">Book</span>
        </Link>
      </div>
    </div>
  );
}

export function FloatingWhatsApp() {
  return (
    <a
      href={doctor.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 md:bottom-6 right-6 z-40 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" />
    </a>
  );
}
