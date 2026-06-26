import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

export const viewport: Viewport = {
  themeColor: "#123A67",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.gkjourneys.com"),
  title: "GK Journeys | Travel Agency in Mysore – Karnataka Tour Packages",
  description:
    "GK Journeys is a trusted travel agency in Mysore, Karnataka offering customized tour packages across India including Kerala, Goa, Tamil Nadu, and North India. Plan your holiday with us.",
  keywords: [
    "GK Journeys",
    "Travel Agency Mysore",
    "Mysore Tour Packages",
    "Karnataka Tour Packages",
    "Kerala Tour Packages",
    "Goa Tour Packages",
    "Tamil Nadu Tour Packages",
    "North India Tour Packages",
    "Customized Travel Packages",
    "Holiday Packages India",
  ],
  openGraph: {
    title: "GK Journeys – Every Journey Tells A Story",
    description:
      "Personalized travel experiences across India and beyond. Curated travel packages by GK Journeys, Mysore.",
    url: "/",
    siteName: "GK Journeys",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "GK Journeys | Travel Agency Mysore",
    description:
      "Customized tour packages from Mysore across Karnataka, Kerala, Goa, Tamil Nadu, and North India.",
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "TravelAgency"],
  "name": "GK Journeys",
  "url": "https://www.gkjourneys.com",
  "telephone": "+917892050273",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "#544, 5th Cross, Bogadi 2nd Stage North",
    "addressLocality": "Mysore",
    "addressRegion": "Karnataka",
    "postalCode": "570026",
    "addressCountry": "IN"
  },
  "founder": {
    "@type": "Person",
    "name": "Krupa P Murthy"
  },
  "areaServed": "IN",
  "sameAs": []
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-white text-gray-900">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
