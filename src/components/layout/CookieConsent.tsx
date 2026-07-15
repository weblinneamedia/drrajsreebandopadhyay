"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { getCookieConsent, setCookieConsent } from "@/lib/cookies";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!getCookieConsent()) setVisible(true);
  }, []);

  const handleChoice = (accepted: boolean) => {
    setCookieConsent(accepted ? "accepted" : "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 md:bottom-0 left-0 right-0 z-[60] bg-navy text-white p-4 md:p-6 shadow-2xl md:mb-0 mb-[4.5rem]">
      <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-200">
          We use cookies to improve your experience and analyse site traffic. You can accept
          or reject non-essential cookies. See our{" "}
          <Link href="/cookies" className="text-accent-light underline">
            Cookie Policy
          </Link>
          .
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={() => handleChoice(false)}
            className="px-5 py-2 border border-slate-400 rounded-lg text-sm font-semibold hover:bg-navy-light transition-colors"
          >
            Reject
          </button>
          <button
            onClick={() => handleChoice(true)}
            className="px-5 py-2 bg-accent rounded-lg text-sm font-semibold hover:bg-accent-dark transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
