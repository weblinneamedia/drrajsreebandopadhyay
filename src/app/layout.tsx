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
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${doctor.name} | ${doctor.title} in ${doctor.location.city}`,
    template: `%s | ${doctor.shortName}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: doctor.name }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: doctor.clinicName,
    title: `${doctor.name} | ${doctor.title}`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: siteConfig.url,
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
