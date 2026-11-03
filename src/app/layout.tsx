import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { TopBar, Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  MobileActionBar,
  FloatingWhatsApp,
} from "@/components/layout/FloatingActions";
import { CookieConsent } from "@/components/layout/CookieConsent";
import { Analytics } from "@/components/layout/Analytics";
import { doctor, siteConfig } from "@/data/doctor";
import {
  physicianSchema,
  medicalClinicSchema,
  localBusinessSchema,
  JsonLd,
} from "@/lib/schema";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://drrajarshimaxillofacial.in"),
  title: {
    default: "Dr Rajarshi Maxillofacial",
    template: "%s | Dr Rajarshi Maxillofacial",
  },
  description: "Oral and Maxillofacial Surgeon in Kolkata",
  keywords: siteConfig.keywords,
  authors: [{ name: doctor.name }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://drrajarshimaxillofacial.in",
    siteName: "Dr Rajarshi Maxillofacial",
    title: "Dr Rajarshi Maxillofacial",
    description: "Oral and Maxillofacial Surgeon in Kolkata",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/images/logo.png", sizes: "32x32", type: "image/png" },
      { url: "/images/logo.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/images/logo.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <head>
        <meta
          name="google-adsense-account"
          content="ca-pub-8160992981781209"
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8160992981781209"
          crossOrigin="anonymous"
        />
        <link rel="icon" href="/images/logo.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/images/logo.png" type="image/png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
        <JsonLd data={physicianSchema()} />
        <JsonLd data={medicalClinicSchema()} />
        <JsonLd data={localBusinessSchema()} />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <TopBar />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileActionBar />
        <FloatingWhatsApp />
        <CookieConsent />
        {doctor.analyticsId && <Analytics analyticsId={doctor.analyticsId} />}
      </body>
    </html>
  );
}
