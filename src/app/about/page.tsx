import type { Metadata } from "next";
import Image from "next/image";
import { FounderSection } from "@/components/sections/FounderSection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { MissionVision } from "@/components/sections/MissionVision";

export const metadata: Metadata = {
  title: "About G K JOURNEYS | Krupa P Murthy – Mysore Travel Agency",
  description:
    "Learn about G K JOURNEYS, an MSME registered travel company from Mysuru, Karnataka. Founded by Krupa P Murthy with a mission to deliver personalized travel experiences across India.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About G K JOURNEYS | Krupa P Murthy – Mysore Travel Agency",
    description: "Learn about G K JOURNEYS, an MSME registered travel company from Mysuru, Karnataka. Founded by Krupa P Murthy.",
    url: "/about",
    siteName: "G K JOURNEYS",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About G K JOURNEYS | Krupa P Murthy – Mysore Travel Agency",
    description: "Learn about G K JOURNEYS, an MSME registered travel company from Mysuru, Karnataka. Founded by Krupa P Murthy.",
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

export default function AboutPage() {
  return (
    <>
      <script
        id="breadcrumb-schema-about"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Hero */}
      <div className="relative h-[45vh] min-h-[360px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=2000&auto=format&fit=crop"
            alt="GK Journeys - About Our Travel Agency in Mysore"
            fill
            priority
            sizes="100vw"
            quality={80}
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="relative z-10 container pb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">Our Story</h1>
          <p className="text-white/70 text-lg max-w-xl">
  Every journey should tell a unique story. That&apos;s the belief I built GK Journeys on. As a young entrepreneur from Mysore, I saw a gap between the generic travel packages tourists were getting and the deeply personal, memorable experiences they deserved.
</p>
        </div>
      </div>

      {/* Mission & Vision */}
      <MissionVision />

      {/* Founder Section */}
      <FounderSection />

      {/* Why Choose Us */}
      <WhyChooseUs />
    </>
  );
}
