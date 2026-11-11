"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MissionVision } from "@/components/sections/MissionVision";
import {
  UserCheck,
  CalendarCheck,
  ShieldCheck,
  HeartHandshake,
  ArrowRight,
  Compass,
  MapPin,
  Sparkles,
} from "lucide-react";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease },
  },
};

const philosophyPillars = [
  {
    icon: UserCheck,
    title: "Direct Founder Coordination",
    description:
      "From your very first enquiry to your safe return home, you speak directly with founder Krupa P Murthy. We listen to your travel goals and ensure every detail is addressed without call-center intermediaries.",
  },
  {
    icon: CalendarCheck,
    title: "Tailored Day-Wise Itineraries",
    description:
      "We do not lock travelers into standard or rigid group templates. Whether traveling with seniors requiring an unhurried pace, small children, or a group of friends, we balance sightseeing with comfortable rest.",
  },
  {
    icon: ShieldCheck,
    title: "Verified Stays & Safe Transport",
    description:
      "Comfort and safety are non-negotiable. We coordinate with trusted, verified homestays, boutique hotels, and experienced local chauffeurs who drive safely and know regional routes inside out.",
  },
  {
    icon: HeartHandshake,
    title: "Transparent & Honest Guidance",
    description:
      "Every itinerary and quote is straightforward with no hidden markups or surprise charges during the journey. We recommend destinations and timings based on authentic local travel experience.",
  },
];

export function AboutClient() {
  return (
    <div className="pb-20 bg-[#FAF9F6]">
      {/* ── Page Hero ── */}
      <div className="relative h-[48vh] min-h-[380px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=2000&auto=format&fit=crop"
            alt="G K JOURNEYS - Travel Company and Personalized Trip Planner in Mysore, Karnataka"
            fill
            priority
            sizes="100vw"
            quality={80}
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />
        <div className="relative z-10 container mx-auto px-4 lg:px-8 pb-12">
          <span className="text-white/70 text-xs font-bold tracking-widest uppercase mb-3 block">
            G K JOURNEYS · Travel Company in Mysore
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            About G K JOURNEYS — Travel Company &amp; Planner in Mysore
          </h1>
          <p className="text-white/80 text-base md:text-lg max-w-2xl font-light leading-relaxed">
            Founded by Krupa P Murthy, G K JOURNEYS is an MSME-registered travel company based in Bogadi, Mysuru. We specialize in personalized travel planning, family tour packages, and curated holidays across India.
          </p>
        </div>
      </div>

      {/* ── Trust Badges Strip ── */}
      <div className="bg-white border-b border-gray-200/80 shadow-sm py-4">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap items-center justify-center md:justify-between gap-4 text-xs text-gray-700">
            <div className="flex items-center gap-2">
              <span className="text-primary font-bold">✔</span>
              <span className="font-semibold text-gray-900">MSME Registered Business</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-primary" />
              <span>Based in Bogadi 2nd Stage North, Mysuru</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span>100% Customized Tour Itineraries</span>
            </div>
            <div className="flex items-center gap-2">
              <Compass className="w-3.5 h-3.5 text-primary" />
              <span>Karnataka, South India &amp; Domestic Circuits</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Unique Story Section ── */}
      <section className="py-20 md:py-24 container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            className="text-center mb-12"
          >
            <span className="text-primary font-bold text-xs tracking-widest uppercase mb-2 block">
              Our Identity &amp; Roots
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 font-bold leading-tight">
              Born in Mysuru: Personalized Travel with a Local Heart
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            className="space-y-6 text-gray-600 text-base md:text-lg leading-relaxed font-light"
          >
            <p>
              Every journey should tell a meaningful story. That conviction is the foundation upon which{" "}
              <strong className="font-semibold text-gray-900">G K JOURNEYS</strong> was built. As a passionate travel planner and entrepreneur from Mysuru, founder Krupa P Murthy observed a recurring challenge for travelers: standard tourism packages were often rigid, hurried, and impersonal, leaving little room for spontaneous discovery or genuine family comfort.
            </p>
            <p>
              Operating from our office in{" "}
              <strong className="font-semibold text-gray-900">Bogadi 2nd Stage North, Mysuru</strong>, our local presence provides a genuine advantage. Mysuru is not just our hometown — it is the natural gateway to South India&apos;s most celebrated destinations. From the mist-draped coffee estates of{" "}
              <Link href="/destinations#karnataka" className="text-primary font-medium hover:underline">
                Coorg
              </Link>{" "}
              and the Nilgiri hills of{" "}
              <Link href="/destinations#tamil-nadu" className="text-primary font-medium hover:underline">
                Ooty
              </Link>{" "}
              to the backwaters of{" "}
              <Link href="/destinations#kerala" className="text-primary font-medium hover:underline">
                Kerala
              </Link>{" "}
              and coastal{" "}
              <Link href="/destinations#goa" className="text-primary font-medium hover:underline">
                Goa
              </Link>
              , we understand the local routes, travel seasons, and authentic regional hospitality required for a relaxing journey.
            </p>
            <p>
              As a woman-led, MSME-registered enterprise, G K JOURNEYS takes personal pride in every journey we coordinate. We choose depth of care over volume. When you reach out to plan a trip, you collaborate directly with Krupa, ensuring your travel schedule reflects your personal preferences, dietary needs, and pace.
            </p>
          </motion.div>

          {/* Founder Quote Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            className="mt-12 bg-white rounded-3xl p-8 md:p-10 border border-gray-200/80 shadow-md relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-2 h-full bg-primary" />
            <blockquote className="text-gray-700 italic text-base md:text-lg font-light leading-relaxed mb-6">
              &ldquo;Travel planning should always be honest, attentive, and deeply personal. When someone trusts us with their family vacation, honeymoon, or weekend break from Mysore, we plan every detail as if we were coordinating for our own family. No call centers, no inflated markups — just honest advice, verified arrangements, and journeys you will truly cherish.&rdquo;
            </blockquote>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-t border-gray-100 pt-4">
              <div>
                <p className="font-serif text-xl font-bold text-gray-900">Krupa P Murthy</p>
                <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">
                  Founder &amp; Travel Planner · G K JOURNEYS, Mysuru
                </p>
              </div>
              <a
                href="https://wa.me/917892050273?text=Hi%20Krupa!%20I%20would%20like%20to%20connect%20regarding%20travel%20planning."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 px-4 py-2 rounded-full transition-colors w-fit"
              >
                Chat with Krupa on WhatsApp →
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Mission, Vision & Core Values ── */}
      <MissionVision />

      {/* ── Planning Philosophy & Customer Care ── */}
      <section className="py-20 container mx-auto px-4 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            className="text-center mb-14"
          >
            <span className="text-primary font-bold text-xs tracking-widest uppercase mb-2 block">
              How We Work
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 font-bold leading-tight mb-4">
              Our Travel Planning Philosophy &amp; Approach
            </h2>
            <p className="text-gray-600 text-base max-w-2xl mx-auto font-light leading-relaxed">
              We believe great holidays are built on attentive listening, verified logistics, and transparent communication. Here is how we ensure every trip meets your expectations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {philosophyPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  variants={fadeUp}
                  className="bg-white rounded-2xl p-7 border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Contextual Links to Services & Destinations ── */}
      <section className="py-16 bg-white border-y border-gray-200/70">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-primary font-bold text-xs tracking-widest uppercase mb-2 block">
                Explore What We Offer
              </span>
              <h2 className="text-2xl md:text-3xl font-serif text-gray-900 font-bold">
                Connect with Our Services &amp; Destinations
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1: Services */}
              <div className="bg-[#FAF9F6] rounded-2xl p-6 border border-gray-200/80 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">
                    Customized Travel Services
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed mb-4">
                    Explore family tour packages, romantic honeymoon trips, group travel coordination, and outstation cab arrangements from Mysuru.
                  </p>
                </div>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-[#123A67] transition-colors"
                >
                  Explore Travel Services <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Card 2: Destinations */}
              <div className="bg-[#FAF9F6] rounded-2xl p-6 border border-gray-200/80 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">
                    Tour Destinations from Mysore
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed mb-4">
                    Discover handpicked holiday getaways including Coorg, Ooty, Wayanad, Munnar, Alleppey, Goa, and North India circuits.
                  </p>
                </div>
                <Link
                  href="/destinations"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-[#123A67] transition-colors"
                >
                  View Tour Destinations <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Card 3: Contact */}
              <div className="bg-[#FAF9F6] rounded-2xl p-6 border border-gray-200/80 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">
                    Plan Your Journey Directly
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed mb-4">
                    Ready to discuss your trip? Contact our Mysuru office directly via phone, WhatsApp, or through our online enquiry form.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-[#123A67] transition-colors"
                >
                  Contact G K JOURNEYS <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Closing CTA Banner ── */}
      <section className="container mx-auto px-4 lg:px-8 mt-16">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#123A67] via-[#1a4f8b] to-[#0f2d4a] text-white p-8 md:p-12 shadow-xl">
          <div className="max-w-2xl">
            <span className="text-white/70 font-bold text-[10px] tracking-[0.25em] uppercase block mb-2">
              Plan Your Trip from Mysuru
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-white mb-3 leading-tight">
              Let&apos;s Plan Your Next Journey
            </h2>
            <p className="text-white/80 text-sm md:text-base leading-relaxed mb-6 font-light">
              Connect directly with Krupa P Murthy for thoughtful, personalized tour planning. We look forward to helping you create memories that last.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://wa.me/917892050273?text=Hi%20Krupa!%20I%20would%20like%20to%20plan%20a%20trip%20with%20GK%20Journeys."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
              >
                Chat on WhatsApp →
              </a>
              <Link
                href="/#trip-planner"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#123A67] hover:bg-gray-100 text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-full shadow-md transition-all duration-300"
              >
                Use Trip Planner
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/25 text-xs font-semibold uppercase tracking-wider px-6 py-3.5 rounded-full transition-all duration-300"
              >
                Contact Information
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

