"use client";

import { useState, useEffect } from "react";
import { CheckCircle } from "lucide-react";
import {
  getCookieConsent,
  setCookieConsent,
  type CookieConsentValue,
} from "@/lib/cookies";

export function CookiePreferences() {
  const [consent, setConsent] = useState<CookieConsentValue | null>(null);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setConsent(getCookieConsent());
  }, []);

  const handleChoice = (accepted: boolean) => {
    const value: CookieConsentValue = accepted ? "accepted" : "rejected";
    setCookieConsent(value);
    setConsent(value);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="card p-6 mt-8">
      <h2 className="text-xl font-bold text-navy mb-2">Manage Your Cookie Preferences</h2>
      <p className="text-sm text-slate-600 mb-4">
        Choose whether to allow analytics and preference cookies. Essential cookies required
        for basic site functionality cannot be disabled.
      </p>

      {consent && (
        <p className="text-sm text-slate-500 mb-4">
          Current preference:{" "}
          <span className="font-semibold text-navy">
            {consent === "accepted" ? "Accepted" : "Rejected"}
          </span>
        </p>
      )}

      <div className="flex flex-wrap gap-3">
        <button
          onClick={() => handleChoice(false)}
          className="px-5 py-2.5 border-2 border-navy text-navy rounded-lg text-sm font-semibold hover:bg-navy hover:text-white transition-colors"
        >
          Reject Non-Essential Cookies
        </button>
        <button
          onClick={() => handleChoice(true)}
          className="px-5 py-2.5 bg-accent text-white rounded-lg text-sm font-semibold hover:bg-accent-dark transition-colors"
        >
          Accept All Cookies
        </button>
      </div>

      {saved && (
        <p className="flex items-center gap-2 text-sm text-accent mt-4">
          <CheckCircle className="w-4 h-4" />
          Your cookie preference has been saved.
        </p>
      )}
    </div>
  );
}
