import type { Metadata } from "next";
import ServicesPageClient from "./ServicesPageClient";

export const metadata: Metadata = {
  title: "Travel Services | GK Journeys – Domestic Tours, International Packages & More",
  description: "Explore our complete range of travel services including domestic tours, international packages, honeymoon planning, corporate travel, flight booking, hotel booking, and vehicle rental.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Travel Services | GK Journeys – Domestic Tours, International Packages & More",
    description: "Explore our complete range of travel services including domestic tours, international packages, honeymoon planning, corporate travel, and more.",
    url: "/services",
  },
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
