import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturedDestinations } from "@/components/sections/FeaturedDestinations";
import { ExperienceCategories } from "@/components/sections/ExperienceCategories";
import { EssentialServices } from "@/components/sections/EssentialServices";
import { FounderSection } from "@/components/sections/FounderSection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { TripPlanner } from "@/components/sections/TripPlanner";
import { FAQSection } from "@/components/sections/FAQSection";
import { faqData } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Travel Agency in Mysore | Customized Tour Packages – G K JOURNEYS",
  description:
    "Plan memorable trips with G K JOURNEYS, a travel agency in Mysore. Explore customized tour packages, family holidays and trips to Coorg, Ooty, Kerala and more.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Travel Agency in Mysore | Customized Tour Packages – G K JOURNEYS",
    description:
      "Plan memorable trips with G K JOURNEYS, a travel agency in Mysore. Explore customized tour packages, family holidays and trips to Coorg, Ooty, Kerala and more.",
    url: "/",
    siteName: "G K JOURNEYS",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Travel Agency in Mysore | Customized Tour Packages – G K JOURNEYS",
    description:
      "Plan memorable trips with G K JOURNEYS, a travel agency in Mysore. Explore customized tour packages, family holidays and trips to Coorg, Ooty, Kerala and more.",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqData.map((faq) => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer,
    },
  })),
};

export default function Home() {
  return (
    <>
      <script
        id="faq-schema-home"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HeroSection />
      <FeaturedDestinations />
      <ExperienceCategories />
      <EssentialServices />
      <FounderSection />
      <WhyChooseUs />
      <TripPlanner />
      <FAQSection />
    </>
  );
}
