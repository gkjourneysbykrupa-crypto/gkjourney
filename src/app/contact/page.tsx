import type { Metadata } from "next";
import { ContactPageClient } from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact G K JOURNEYS | Mysore Travel Agency – Book Your Trip",
  description:
    "Get in touch with G K JOURNEYS in Mysuru for personalized tour packages, hotel bookings, and travel inquiries. Call, WhatsApp, or email Krupa P Murthy to plan your journey.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact G K JOURNEYS | Mysore Travel Agency – Book Your Trip",
    description: "Get in touch with G K JOURNEYS in Mysuru for personalized tour packages, hotel bookings, and travel inquiries.",
    url: "/contact",
    siteName: "G K JOURNEYS",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact G K JOURNEYS | Mysore Travel Agency – Book Your Trip",
    description: "Contact G K JOURNEYS in Mysuru for customized holiday packages, sightseeing, and vehicle arrangements.",
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
      "name": "Contact",
      "item": "https://www.gkjourneys.com/contact"
    }
  ]
};

export default function ContactPage() {
  return (
    <>
      <script
        id="breadcrumb-schema-contact"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ContactPageClient />
    </>
  );
}
