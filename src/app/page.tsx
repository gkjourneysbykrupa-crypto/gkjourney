import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturedDestinations } from "@/components/sections/FeaturedDestinations";
import { ExperienceCategories } from "@/components/sections/ExperienceCategories";
import { EssentialServices } from "@/components/sections/EssentialServices";
import { FounderSection } from "@/components/sections/FounderSection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { TripPlanner } from "@/components/sections/TripPlanner";

export const metadata: Metadata = {
  title: "GK Journeys | Travel Agency in Mysore – Karnataka Tour Packages",
  description:
    "GK Journeys is a trusted travel agency in Mysore offering customized tour packages across Karnataka, Kerala, Goa, Tamil Nadu & North India. Plan your perfect holiday with us.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "GK Journeys – Every Journey Tells A Story",
    description: "Trusted travel agency in Mysore offering customized tour packages across India.",
    url: "/",
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
