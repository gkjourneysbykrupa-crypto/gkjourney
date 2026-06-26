import type { Metadata } from "next";
import { ContactPageClient } from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact GK Journeys | Mysore Travel Agency – Book Your Trip",
  description:
    "Get in touch with GK Journeys, Mysore for personalized tour packages, hotel bookings, and travel inquiries. Call, WhatsApp, or email Krupa P Murthy to plan your journey.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact GK Journeys | Mysore Travel Agency – Book Your Trip",
    description: "Get in touch with GK Journeys, Mysore for personalized tour packages, hotel bookings, and travel inquiries.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
