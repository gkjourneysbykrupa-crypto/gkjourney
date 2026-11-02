"use client";

import { motion } from "framer-motion";
import Image from "next/image";


export function HeroSection() {
  return (
    <section className="relative w-full min-h-[110svh] flex flex-col justify-center bg-black overflow-hidden pt-20">
      {/* Hero Image — subtle Ken Burns */}
      <motion.div
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 3.5, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src="/images/bg.webp"
          alt="GK Journeys - Premium Travel Experiences"
          fill
          priority
          sizes="100vw"
          quality={82}
          className="object-cover object-center"
        />
        {/* Gradient stack for depth and text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/5 to-black/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent" />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 flex flex-col items-center justify-center text-center">
        <div className="max-w-4xl flex flex-col items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.25,
                  delayChildren: 0.2,
                },
              },
            }}
          >
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              className="-mt-54 mb-6"
            >
              <div className="relative">
                <Image
                  src="/images/logobg.webp"
                  alt="GK Journeys Logo"
                  width={150}
                  height={150}
                  priority
                  className="w-full h-full drop-shadow-[0_0_50px_rgba(255,255,255,0.5)]"
                />
              </div>
            </motion.div>
            {/* Eyebrow Label establishing Mysuru travel agency */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 15, filter: "blur(6px)" },
                visible: { opacity: 1, y: 0, filter: "blur(0px)" },
              }}
              transition={{ duration: 0.8 }}
              className="-translate-y-10 mb-2"
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/85 backdrop-blur-md border border-white/90 text-[11px] font-bold tracking-[0.2em] text-[#123A67] uppercase shadow-sm">
                Travel Agency in Mysuru · Personalized Trip Planning
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 30, filter: "blur(12px)" },
                visible: { opacity: 1, y: 0, filter: "blur(0px)" },
              }}
              transition={{
                duration: 1.2,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              className="
  -translate-y-8
  font-serif
  text-3xl
  sm:text-5xl
  md:text-6xl
  lg:text-[4.2rem]
  font-bold
  leading-[1.1]
  tracking-tight
  text-[#123A67]
  drop-shadow-[0_2px_4px_rgba(255,255,255,0.15)]
  mb-6
  max-w-3xl
  "
            >
              Customized Tour Packages from Mysore
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
                visible: { opacity: 1, y: 0, filter: "blur(0px)" },
              }}
              transition={{
                duration: 1,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              className="
    -translate-y-8
    max-w-2xl
    mx-auto
    text-center
    text-[#2F3E46]
    text-base
    md:text-lg
    font-medium
    leading-relaxed
    tracking-normal
    mb-7
    sm:mb-8
  "
            >
              Discover memorable journeys with G K JOURNEYS. From Mysore sightseeing to customized holidays across Karnataka, Kerala, Tamil Nadu, Goa and beyond, we help plan trips around your travel preferences.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{
                duration: 1,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              className="-translate-y-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-3"
            >
              {/* Primary Button */}
              <a
                href="#trip-planner"
                className="
      group
      inline-flex
      items-center
      justify-center
      gap-2
      rounded-full
      bg-[#E86A00]
      px-8
      py-3.5
      text-sm
      font-semibold
      text-white
      shadow-lg
      transition-all
      duration-300
      hover:bg-[#CF5F00]
      hover:scale-105
      hover:shadow-xl
      w-full
      sm:w-auto
    "
              >
                Plan Your Trip

                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14M13 5l7 7-7 7"
                  />
                </svg>
              </a>

              {/* Secondary Button */}
              <a
                href="/services"
                className="
      group
      inline-flex
      items-center
      justify-center
      gap-2
      rounded-full
      bg-white/90
      backdrop-blur-md
      border
      border-white
      px-8
      py-3.5
      text-sm
      font-semibold
      text-[#123A67]
      shadow-lg
      transition-all
      duration-300
      hover:bg-white
      hover:scale-105
      hover:shadow-xl
      w-full
      sm:w-auto
    "
              >
                Explore Our Services
              </a>
            </motion.div>

            {/* Direct WhatsApp Quick Contact Link */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8 }}
              className="-translate-y-6"
            >
              <a
                href="https://wa.me/917892050273?text=Hi%20Krupa!%20I%20would%20like%20to%20enquire%20about%20a%20tour%20package%20from%20Mysore."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 hover:bg-white text-xs font-medium text-gray-700 hover:text-gray-900 border border-white/80 shadow-sm transition-all duration-300"
              >
                <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                Prefer WhatsApp? Chat directly with Krupa: <span className="font-semibold text-[#123A67]">+91 78920 50273</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
