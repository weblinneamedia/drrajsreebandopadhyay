"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { getCookieConsent } from "@/lib/cookies";

export function Analytics({ analyticsId }: { analyticsId: string }) {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const check = () => setEnabled(getCookieConsent() === "accepted");
    check();
    window.addEventListener("cookie-consent-change", check);
    return () => window.removeEventListener("cookie-consent-change", check);
  }, []);

  if (!enabled || !analyticsId) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${analyticsId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${analyticsId}');
        `}
      </Script>
    </>
  );
}
