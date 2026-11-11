import type { Metadata } from "next";
import ServicesPageClient from "./ServicesPageClient";

export const metadata: Metadata = {
  title: "Travel Services & Tour Packages in Mysore | G K JOURNEYS",
  description:
    "Customized travel services in Mysore by G K JOURNEYS: domestic tour packages, family vacations, honeymoon trips, corporate travel, vehicle coordination and hotel arrangements.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Travel Services & Tour Packages in Mysore | G K JOURNEYS",
    description:
      "Customized travel services in Mysore by G K JOURNEYS: domestic tour packages, family vacations, honeymoon trips, corporate travel, vehicle coordination and hotel arrangements.",
    url: "/services",
    siteName: "G K JOURNEYS",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Travel Services & Tour Packages in Mysore | G K JOURNEYS",
    description:
      "Customized travel services in Mysore by G K JOURNEYS: domestic tour packages, family vacations, honeymoon trips, corporate travel, vehicle coordination and hotel arrangements.",
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

const serviceCatalogSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Travel Services & Tour Packages in Mysore",
  "serviceType": "Tour Planning & Travel Services",
  "provider": {
    "@type": "TravelAgency",
    "name": "G K JOURNEYS",
    "url": "https://www.gkjourneys.com/",
    "telephone": "+91 78920 50273",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "#544, G K JOURNEYS, Bogadi 2nd Stage North, 5th Main, 5th Cross",
      "addressLocality": "Mysuru",
      "addressRegion": "Karnataka",
      "postalCode": "570026",
      "addressCountry": "IN"
    }
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Mysore"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Karnataka"
    },
    {
      "@type": "Country",
      "name": "India"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Travel Services Offered by G K JOURNEYS",
    "itemListElement": [
      {
        "@type": "OfferCatalog",
        "name": "Domestic Tours",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Domestic Tour Packages",
              "description": "Curated journeys across India's landscapes including Kerala backwaters, Karnataka heritage, Tamil Nadu temples, Goa, and Rajasthan."
            }
          }
        ]
      },
      {
        "@type": "OfferCatalog",
        "name": "International Tours",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "International Tour Planning",
              "description": "International travel planning and custom itineraries for destinations including Southeast Asia, Europe, Middle East, Maldives, and Dubai."
            }
          }
        ]
      },
      {
        "@type": "OfferCatalog",
        "name": "Honeymoon Packages",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Honeymoon Tour Packages",
              "description": "Romantic escapes crafted for couples with private stays, scenic drives, candlelit dinners, and tailored romantic experiences."
            }
          }
        ]
      },
      {
        "@type": "OfferCatalog",
        "name": "Family Tours",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Family Tour Packages",
              "description": "Balanced, comfortable itineraries designed for children and seniors with flexible pacing, verified family stays, and safety."
            }
          }
        ]
      },
      {
        "@type": "OfferCatalog",
        "name": "Group Tours",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Group Tour Packages",
              "description": "Group travel experiences with coordinated logistics, Tempo Travellers, group stays, and shared team or family adventures."
            }
          }
        ]
      },
      {
        "@type": "OfferCatalog",
        "name": "Corporate Travel",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Corporate Travel Management",
              "description": "End-to-end corporate travel planning for team retreats, executive offsites, conferences, and business travel."
            }
          }
        ]
      },
      {
        "@type": "OfferCatalog",
        "name": "Hotel Booking",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Hotel & Accommodation Booking",
              "description": "Handpicked accommodations across every budget including verified homestays, boutique properties, and luxury resorts."
            }
          }
        ]
      },
      {
        "@type": "OfferCatalog",
        "name": "Flight Booking",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Flight Booking Assistance",
              "description": "Domestic and international flight ticketing assistance optimized for convenient schedules and connecting routes."
            }
          }
        ]
      },
      {
        "@type": "OfferCatalog",
        "name": "Vehicle Rental",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Vehicle Rental & Transport Coordination",
              "description": "Chauffeur-driven sedans, spacious SUVs, and Tempo Travellers with professional drivers for Mysore sightseeing and outstation trips."
            }
          }
        ]
      }
    ]
  }
};

export default function ServicesPage() {
  return (
    <>
      <script
        id="breadcrumb-schema-services"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        id="service-catalog-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceCatalogSchema) }}
      />
      <ServicesPageClient />
    </>
  );
}
