import type { Metadata } from "next";
import ServicesPageClient from "./ServicesPageClient";

export const metadata: Metadata = {
  title: "Travel Services in Mysuru | G K JOURNEYS",
  description:
    "Explore our full range of travel services from Mysuru including domestic tours, honeymoon packages, family trips, corporate travel, hotel and vehicle bookings.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Travel Services in Mysuru | G K JOURNEYS",
    description:
      "Explore our full range of travel services from Mysuru including domestic tours, honeymoon packages, family trips, corporate travel, hotel and vehicle bookings.",
    url: "/services",
    siteName: "G K JOURNEYS",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Travel Services in Mysuru | G K JOURNEYS",
    description:
      "Explore customized travel services from Mysuru: tour packages, hotel and flight booking, vehicle rental.",
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
      "name": "Services",
      "item": "https://www.gkjourneys.com/services"
    }
  ]
};

export default function ServicesPage() {
  return (
    <>
      <script
        id="breadcrumb-schema-services"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ServicesPageClient />
    </>
  );
}
