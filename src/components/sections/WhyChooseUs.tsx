"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Compass, Sparkles, ShieldCheck, HeartHandshake } from "lucide-react";

const benefits = [
  {
    icon: <Sparkles className="w-5 h-5 text-primary" />,
    title: "Customized Itineraries",
    desc: "Every tour package is tailored to your schedule, preferences, and pace instead of rigid, cookie-cutter templates.",
  },
  {
    icon: <HeartHandshake className="w-5 h-5 text-primary" />,
    title: "Personalized Travel Planning",
    desc: "Founder Krupa P Murthy directly coordinates with you, offering transparent quotes and dedicated travel support.",
  },
  {
    icon: <Compass className="w-5 h-5 text-primary" />,
    title: "Local Mysore & Regional Expertise",
    desc: "Authentic destination recommendations for Mysore sightseeing, Coorg coffee retreats, Ooty hills, and Kerala backwaters.",
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-primary" />,
    title: "Reliable Travel Coordination",
    desc: "Handpicked accommodations and verified drivers for sedans, SUVs, and Tempo Travellers ensuring safe, comfortable journeys.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="relative py-16 pb-24 overflow-hidden">
      {/* Background Image replicating EssentialServices.tsx behavior */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          initial={{ scale: 1.05 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="absolute inset-0"
        >
          <Image
            src="https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=2000&q=80"
            alt="Why Choose GK Journeys - Travel Agency in Mysore"
            fill
            sizes="100vw"
            quality={80}
            className="object-cover object-center"
          />
        </motion.div>
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#F8F6F2] to-transparent pointer-events-none" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {/* Top Label */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -30, filter: "blur(5px)" },
              visible: {
                opacity: 1,
                x: 0,
                filter: "blur(0px)",
                transition: { duration: 0.8, ease: "easeOut" },
              },
            }}
            className="text-white/80 font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-2"
          >
            The G K JOURNEYS Difference
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={{
              hidden: { opacity: 0, x: -30, filter: "blur(5px)" },
              visible: {
                opacity: 1,
                x: 0,
                filter: "blur(0px)",
                transition: { duration: 0.8, ease: "easeOut" },
              },
            }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-3"
          >
            Why Choose Us for Your <span className="italic text-primary">Travel Planning</span>
          </motion.h2>
          
          {/* Subheading */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20, filter: "blur(5px)" },
              visible: {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: { duration: 0.8, ease: "easeOut" },
              },
            }}
            className="text-base md:text-lg text-white/90 max-w-xl mx-auto leading-relaxed"
          >
            A trusted, MSME-registered travel agency in Mysuru dedicated to crafting memorable holidays across India.
          </motion.p>
        </motion.div>

        {/* Cards Grid: 2x2 layout on desktop, single column on mobile */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15, delayChildren: 0.4 } },
          }}
        >
          {benefits.map((b) => (
            <motion.div
              key={b.title}
              variants={{
                hidden: { opacity: 0, y: 25 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.7, ease: "easeOut" },
                },
              }}
              className="h-full flex flex-col items-center justify-start bg-[rgba(255,255,255,0.08)] backdrop-blur-[12px] border border-white/20 rounded-2xl p-6 text-center transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_12px_30px_rgba(0,0,0,0.3)] hover:border-white/40 hover:bg-[rgba(255,255,255,0.12)] group shadow-lg"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white border border-white/10 group-hover:scale-110 group-hover:bg-primary/20 group-hover:text-primary transition-all duration-500 shadow-sm">
                  {b.icon}
                </div>
              </div>
              <h3 className="text-white font-semibold text-lg mb-2 tracking-wide">
                {b.title}
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                {b.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
