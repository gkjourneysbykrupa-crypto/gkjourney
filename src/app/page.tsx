import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturedDestinations } from "@/components/sections/FeaturedDestinations";
import { ExperienceCategories } from "@/components/sections/ExperienceCategories";
import { EssentialServices } from "@/components/sections/EssentialServices";
import { FounderSection } from "@/components/sections/FounderSection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { TripPlanner } from "@/components/sections/TripPlanner";

export const metadata: Metadata = {
  title: "G K JOURNEYS | Travel Agency in Mysore – Karnataka Tour Packages",
  description:
    "G K JOURNEYS is a trusted travel agency in Mysuru (Mysore) offering customized tour packages across Karnataka, Kerala, Goa, Tamil Nadu & North India. Plan your perfect holiday with us.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "G K JOURNEYS – Every Journey Tells A Story",
    description: "Trusted travel agency in Mysuru offering customized tour packages across India.",
    url: "/",
    siteName: "G K JOURNEYS",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "G K JOURNEYS | Travel Agency in Mysore",
    description: "Customized tour packages from Mysuru across Karnataka, Kerala, Goa, Tamil Nadu & North India.",
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedDestinations />
      <ExperienceCategories />
      <EssentialServices />
      <FounderSection />
      <WhyChooseUs />
      <div className="py-8 bg-[#F8F6F2]" />
      <TripPlanner />
    </>
  );
}
