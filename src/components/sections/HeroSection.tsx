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
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-white/90 text-[11px] font-bold tracking-[0.2em] text-[#123A67] uppercase shadow-sm">
                Travel Agency in Mysuru · Custom Tour Planning
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
  lg:text-[4.5rem]
  font-bold
  leading-[1.05]
  tracking-tight
  text-[#123A67]
  drop-shadow-[0_2px_4px_rgba(255,255,255,0.15)]
  mb-6
  "
            >
              Every Journey <br />
              Tells A Story
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
    max-w-xl
    mx-auto
    text-center
    text-[#2F3E46]
    text-base
    md:text-xl
    font-medium
    leading-8
    tracking-normal
    mb-7
    sm:mb-8
  "
            >
              Customized tour packages from Mysuru across Karnataka, Kerala, Goa, Tamil Nadu, and North India — planned with personal care by Krupa P Murthy.
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
              className="-translate-y-8 flex flex-col sm:flex-row items-center justify-center gap-14"
            >
              {/* Primary Button */}
              <a
                href="#trip-planner"
                className="
      group
      inline-flex
      items-center
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
    "
              >
                PLAN MY JOURNEY

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

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/917892050273"
                target="_blank"
                rel="noopener noreferrer"
                className="
      group
      inline-flex
      items-center
      gap-3
      rounded-full
      bg-white
      px-8
      py-3.5
      text-sm
      font-semibold
      text-[#1F2937]
      shadow-lg
      transition-all
      duration-300
      hover:bg-gray-50
      hover:scale-105
      hover:shadow-xl
    "
              >
                <svg
                  className="w-5 h-5 text-[#25D366]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                </svg>

                CHAT ON WHATSAPP
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
