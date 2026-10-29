import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#123A67",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.gkjourneys.com"),
  title: "G K JOURNEYS | Travel Agency in Mysore – Karnataka Tour Packages",
  description:
    "G K JOURNEYS is a trusted travel agency in Mysuru (Mysore), Karnataka offering customized tour packages across India including Kerala, Goa, Tamil Nadu, and North India. Plan your holiday with us.",
  keywords: [
    "G K JOURNEYS",
    "GK Journeys",
    "Travel Agency Mysore",
    "Travel Agency in Mysuru",
    "Mysore Tour Packages",
    "Mysuru Tour Operator",
    "Karnataka Tour Packages",
    "Kerala Tour Packages",
    "Goa Tour Packages",
    "Tamil Nadu Tour Packages",
    "North India Tour Packages",
    "Customized Travel Packages",
    "Holiday Packages India",
  ],
  openGraph: {
    title: "G K JOURNEYS – Every Journey Tells A Story",
    description:
      "Personalized travel experiences across India and beyond. Curated travel packages by G K JOURNEYS, Mysuru.",
    url: "/",
    siteName: "G K JOURNEYS",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "G K JOURNEYS | Travel Agency in Mysuru",
    description:
      "Customized tour packages from Mysuru across Karnataka, Kerala, Goa, Tamil Nadu, and North India.",
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  verification: {
    google: "fUpyVzT5E5sTfcek5_38ybRLhIyOXLU1mgDnebCExBU",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": ["TravelAgency", "LocalBusiness"],
  "name": "G K JOURNEYS",
  "alternateName": ["GK Journeys", "GK Journeys by Krupa"],
  "url": "https://www.gkjourneys.com/",
  "telephone": "+91 78920 50273",
  "email": "Gkjourneysbykrupa@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "#544, G K JOURNEYS, Bogadi 2nd Stage North, 5th Main, 5th Cross",
    "addressLocality": "Mysuru",
    "addressRegion": "Karnataka",
    "postalCode": "570026",
    "addressCountry": "IN"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "10:00",
      "closes": "17:30"
    }
  ],
  "founder": {
    "@type": "Person",
    "name": "Krupa P Murthy"
  },
  "areaServed": {
    "@type": "Country",
    "name": "India"
  },
  "sameAs": [
    "https://www.instagram.com/gk_journeys",
    "https://www.facebook.com/share/1DE5H3gi9b/"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${playfairDisplay.variable} h-full antialiased`}>
      <head>
        <script
          id="schema-travel-agency"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-white text-gray-900">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
