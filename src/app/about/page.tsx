import type { Metadata } from "next";
import { AboutClient } from "./AboutClient";

export const metadata: Metadata = {
  title: "About G K JOURNEYS | Travel Company & Planner in Mysore",
  description:
    "Learn about G K JOURNEYS, an MSME-registered travel company in Mysore founded by Krupa P Murthy. Discover our personalized tour planning philosophy and customer care.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About G K JOURNEYS | Travel Company & Planner in Mysore",
    description:
      "Learn about G K JOURNEYS, an MSME-registered travel company in Mysore founded by Krupa P Murthy. Discover our personalized tour planning philosophy and customer care.",
    url: "/about",
    siteName: "G K JOURNEYS",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "About G K JOURNEYS | Travel Company & Planner in Mysore",
    description:
      "Learn about G K JOURNEYS, an MSME-registered travel company in Mysore founded by Krupa P Murthy. Discover our personalized tour planning philosophy and customer care.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.gkjourneys.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "About Us",
      "item": "https://www.gkjourneys.com/about"
    }
  ]
};

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": "https://www.gkjourneys.com/about#webpage",
  "url": "https://www.gkjourneys.com/about",
  "name": "About G K JOURNEYS | Travel Company & Planner in Mysore",
  "description":
    "Learn about G K JOURNEYS, an MSME-registered travel company in Mysore founded by Krupa P Murthy. Discover our personalized tour planning philosophy and customer care.",
  "mainEntity": {
    "@type": "TravelAgency",
    "name": "G K JOURNEYS",
    "alternateName": ["GK Journeys", "GK Journeys by Krupa"],
    "url": "https://www.gkjourneys.com/",
    "telephone": "+91 78920 50273",
    "email": "Gkjourneysbykrupa@gmail.com",
    "founder": {
      "@type": "Person",
      "name": "Krupa P Murthy",
      "jobTitle": "Founder & Travel Planner"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "#544, G K JOURNEYS, Bogadi 2nd Stage North, 5th Main, 5th Cross",
      "addressLocality": "Mysuru",
      "addressRegion": "Karnataka",
      "postalCode": "570026",
      "addressCountry": "IN"
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "sameAs": [
      "https://www.instagram.com/gk_journeys",
      "https://www.facebook.com/share/1DE5H3gi9b/"
    ]
  }
};

export default function AboutPage() {
  return (
    <>
      <script
        id="breadcrumb-schema-about"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        id="about-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      <AboutClient />
    </>
  );
}
