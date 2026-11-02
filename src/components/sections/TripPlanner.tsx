"use client";

import { motion, Variants, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { Heart, Users, Briefcase, Sparkles, Send, ChevronRight, ChevronLeft, Check, Calendar, User, Phone, MessageSquare } from "lucide-react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const destinations = [
  { id: "karnataka",   label: "Karnataka",   emoji: "🛕", sub: "Mysore, Coorg & Hampi" },
  { id: "kerala",      label: "Kerala",      emoji: "🌿", sub: "Wayanad, Munnar & Backwaters" },
  { id: "goa",         label: "Goa",         emoji: "🌊", sub: "Beaches, Heritage & Sunsets" },
  { id: "tamil-nadu",  label: "Tamil Nadu",  emoji: "🏛️", sub: "Ooty Hills & Historic Temples" },
  { id: "north-india", label: "North India", emoji: "❄️", sub: "Rajasthan Palaces & Himalayas" },
];

const travelTypes = [
  { id: "family",     label: "Family Tour",        icon: <Users     className="w-5 h-5" /> },
  { id: "honeymoon",  label: "Honeymoon",          icon: <Heart     className="w-5 h-5" /> },
  { id: "group",      label: "Group Tour",         icon: <Users     className="w-5 h-5" /> },
  { id: "sightseeing",label: "Mysore Sightseeing", icon: <Sparkles  className="w-5 h-5" /> },
  { id: "corporate",  label: "Corporate Tour",     icon: <Briefcase className="w-5 h-5" /> },
];

const travelerGroups = [
  { id: "couple",    label: "Couple",         sub: "2 Travelers" },
  { id: "family",    label: "Family",         sub: "3–6 Travelers" },
  { id: "friends",   label: "Friends / Group",sub: "4–8 Travelers" },
  { id: "corporate", label: "Large Group",    sub: "8+ Travelers" },
];

const steps = ["Destination", "Travel Type", "Travelers", "Your Details"];

// ─── Animation Variants ────────────────────────────────────────────────────────

const stepVariants: Variants = {
  enter:  { opacity: 0, x: 40,  filter: "blur(6px)", transition: { duration: 0.3 } },
  center: { opacity: 1, x: 0,   filter: "blur(0px)", transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
  exit:   { opacity: 0, x: -40, filter: "blur(6px)", transition: { duration: 0.3 } },
};

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const cardVariants: Variants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] } },
};

// ─── Component ────────────────────────────────────────────────────────────────

export function TripPlanner() {
  const [step, setStep] = useState(0);
  const [selections, setSelections] = useState<Record<string, string>>({
    destination: "karnataka",
    travelType: "family",
    travelers: "family",
  });

  const [contactDetails, setContactDetails] = useState({
    name: "",
    phone: "",
    travelDate: "",
    preferences: "",
  });

  const select = (key: string, value: string) => {
    setSelections((prev) => ({ ...prev, [key]: value }));
    setTimeout(() => setStep((s) => Math.min(s + 1, steps.length - 1)), 350);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactDetails((prev) => ({ ...prev, [name]: value }));
  };

  const isLastStep = step === steps.length - 1;

  const handlePlanJourney = () => {
    const dest     = destinations.find((d)   => d.id === selections.destination)?.label  ?? selections.destination  ?? "Not specified";
    const tripType = travelTypes.find((t)    => t.id === selections.travelType)?.label   ?? selections.travelType   ?? "Not specified";
    const group    = travelerGroups.find((g) => g.id === selections.travelers)?.label    ?? selections.travelers    ?? "Not specified";

    const nameLine        = contactDetails.name.trim()        ? `👤 Name: ${contactDetails.name.trim()}\n` : "";
    const phoneLine       = contactDetails.phone.trim()       ? `📞 Phone: ${contactDetails.phone.trim()}\n` : "";
    const dateLine        = contactDetails.travelDate.trim()  ? `📅 Travel Date: ${contactDetails.travelDate.trim()}\n` : "";
    const prefLine        = contactDetails.preferences.trim() ? `📝 Preferences: ${contactDetails.preferences.trim()}\n` : "";

    const message =
      `Hi Krupa! 👋 I would like to plan a trip with GK Journeys (Mysore).\n\n` +
      nameLine +
      phoneLine +
      `📍 Destination: ${dest}\n` +
      `✈️ Tour Type: ${tripType}\n` +
      `👥 Number of Travelers: ${group}\n` +
      dateLine +
      prefLine +
      `\nPlease share a customized itinerary and package details!`;

    window.open(`https://wa.me/917892050273?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section id="trip-planner" className="relative py-20 md:py-28 overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ scale: 1.05 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="absolute inset-0"
        >
          <Image 
            src="https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?auto=format&fit=crop&w=2400&q=80"
            alt="GK Journeys - Let's Plan Your Next Journey from Mysore"
            fill
            sizes="100vw"
            quality={80}
            className="object-cover object-center"
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/60" />
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8">

        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.9, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <p className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-3">Trip Planning Enquiry</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-[1.1] mb-4">
            Let&apos;s Plan <span className="italic font-light">Your Next Journey</span>
          </h2>
          <p className="text-white/80 text-base md:text-lg leading-relaxed">
            Tell us where you want to go. Krupa P Murthy will craft a customized itinerary and package directly tailored to your dates and preferences.
          </p>
        </motion.div>

        {/* Glass Planner Card */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl overflow-hidden shadow-2xl relative">
            {/* Top glow line */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />

            {/* ── Step Progress ── */}
            <div className="px-6 sm:px-8 pt-8 pb-6">
              <div className="flex items-center justify-between gap-2 sm:gap-3">
                {steps.map((label, i) => {
                  const done   = i < step || (i === 3 && (!!contactDetails.name || !!contactDetails.phone));
                  const active = i === step;
                  return (
                    <button 
                      key={label} 
                      onClick={() => setStep(i)} 
                      aria-label={`Step ${i + 1}: ${label}`} 
                      className="flex-1 text-center"
                    >
                      <div className={`h-1 rounded-full mb-2 transition-all duration-500 ${done ? "bg-primary" : active ? "bg-white/80" : "bg-white/15"}`} />
                      <span className={`text-[10px] sm:text-xs font-semibold tracking-wide uppercase transition-colors block truncate ${active ? "text-white" : done ? "text-primary" : "text-white/40"}`}>
                        {done && !active
                          ? <span className="inline-flex items-center justify-center gap-1"><Check className="w-3 h-3" />{label}</span>
                          : label
                        }
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* ── Step Content ── */}
            <div className="px-6 sm:px-8 pb-8 min-h-[260px]">
              <AnimatePresence mode="wait">

                {/* Step 0 — Destination */}
                {step === 0 && (
                  <motion.div key="step-destination" variants={stepVariants} initial="enter" animate="center" exit="exit">
                    <h3 className="text-white/90 font-medium mb-5 text-lg">1. Where would you like to travel?</h3>
                    <motion.div
                      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3"
                      variants={containerVariants} initial="hidden" animate="visible"
                    >
                      {destinations.map((d) => (
                        <motion.button
                          key={d.id}
                          variants={cardVariants}
                          onClick={() => select("destination", d.id)}
                          className={`relative flex flex-col items-center p-4 rounded-2xl border text-center transition-all duration-300 hover:-translate-y-1 ${
                            selections.destination === d.id
                              ? "bg-primary/30 border-primary text-white shadow-[0_0_16px_rgba(15,139,115,0.3)]"
                              : "bg-white/5 border-white/15 text-white/80 hover:bg-white/10 hover:border-white/30"
                          }`}
                        >
                          {selections.destination === d.id && (
                            <span className="absolute top-2 right-2 w-4 h-4 bg-primary rounded-full flex items-center justify-center">
                              <Check className="w-2.5 h-2.5 text-white" />
                            </span>
                          )}
                          <span className="text-3xl mb-2">{d.emoji}</span>
                          <span className="font-semibold text-sm">{d.label}</span>
                          <span className="text-[11px] text-white/50 mt-1">{d.sub}</span>
                        </motion.button>
                      ))}
                    </motion.div>
                  </motion.div>
                )}

                {/* Step 1 — Travel Type */}
                {step === 1 && (
                  <motion.div key="step-traveltype" variants={stepVariants} initial="enter" animate="center" exit="exit">
                    <h3 className="text-white/90 font-medium mb-5 text-lg">2. What type of tour package are you planning?</h3>
                    <motion.div
                      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3"
                      variants={containerVariants} initial="hidden" animate="visible"
                    >
                      {travelTypes.map((t) => (
                        <motion.button
                          key={t.id}
                          variants={cardVariants}
                          onClick={() => select("travelType", t.id)}
                          className={`group relative flex flex-col items-center p-4 rounded-2xl border text-center transition-all duration-300 hover:-translate-y-1 ${
                            selections.travelType === t.id
                              ? "bg-primary/30 border-primary text-white shadow-[0_0_16px_rgba(15,139,115,0.3)]"
                              : "bg-white/5 border-white/15 text-white/80 hover:bg-white/10 hover:border-white/30"
                          }`}
                        >
                          {selections.travelType === t.id && (
                            <span className="absolute top-2 right-2 w-4 h-4 bg-primary rounded-full flex items-center justify-center">
                              <Check className="w-2.5 h-2.5 text-white" />
                            </span>
                          )}
                          <div className={`mb-2 transition-colors ${selections.travelType === t.id ? "text-primary" : "text-white/60 group-hover:text-white"}`}>
                            {t.icon}
                          </div>
                          <span className="font-semibold text-sm">{t.label}</span>
                        </motion.button>
                      ))}
                    </motion.div>
                  </motion.div>
                )}

                {/* Step 2 — Travelers */}
                {step === 2 && (
                  <motion.div key="step-travelers" variants={stepVariants} initial="enter" animate="center" exit="exit">
                    <h3 className="text-white/90 font-medium mb-5 text-lg">3. Number of travelers</h3>
                    <motion.div
                      className="grid grid-cols-2 md:grid-cols-4 gap-4"
                      variants={containerVariants} initial="hidden" animate="visible"
                    >
                      {travelerGroups.map((g) => (
                        <motion.button
                          key={g.id}
                          variants={cardVariants}
                          onClick={() => select("travelers", g.id)}
                          className={`relative flex flex-col items-center justify-center p-5 rounded-2xl border text-center transition-all duration-300 hover:-translate-y-1 ${
                            selections.travelers === g.id
                              ? "bg-primary/30 border-primary text-white shadow-[0_0_16px_rgba(15,139,115,0.3)]"
                              : "bg-white/5 border-white/15 text-white/80 hover:bg-white/10 hover:border-white/30"
                          }`}
                        >
                          {selections.travelers === g.id && (
                            <span className="absolute top-2 right-2 w-4 h-4 bg-primary rounded-full flex items-center justify-center">
                              <Check className="w-2.5 h-2.5 text-white" />
                            </span>
                          )}
                          <Users className={`w-7 h-7 mb-2 ${selections.travelers === g.id ? "text-primary" : "text-white/50"}`} />
                          <span className="font-semibold text-sm">{g.label}</span>
                          <span className="text-[11px] text-white/50 mt-1">{g.sub}</span>
                        </motion.button>
                      ))}
                    </motion.div>
                  </motion.div>
                )}

                {/* Step 3 — Contact & Travel Details */}
                {step === 3 && (
                  <motion.div key="step-details" variants={stepVariants} initial="enter" animate="center" exit="exit">
                    <h3 className="text-white/90 font-medium mb-4 text-lg">4. Your Details &amp; Travel Preferences</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      {/* Name */}
                      <div>
                        <label className="block text-white/70 text-xs font-medium mb-1.5 flex items-center gap-1.5">
                          <User className="w-3.5 h-3.5 text-primary" /> Your Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={contactDetails.name}
                          onChange={handleInputChange}
                          placeholder="e.g. Ramesh Kumar"
                          className="w-full bg-black/40 border border-white/20 text-white rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-primary transition-all placeholder:text-white/30"
                        />
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="block text-white/70 text-xs font-medium mb-1.5 flex items-center gap-1.5">
                          <Phone className="w-3.5 h-3.5 text-primary" /> Phone / WhatsApp Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={contactDetails.phone}
                          onChange={handleInputChange}
                          placeholder="e.g. +91 98765 43210"
                          className="w-full bg-black/40 border border-white/20 text-white rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-primary transition-all placeholder:text-white/30"
                        />
                      </div>

                      {/* Travel Date */}
                      <div>
                        <label className="block text-white/70 text-xs font-medium mb-1.5 flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-primary" /> Planned Travel Date / Month
                        </label>
                        <input
                          type="text"
                          name="travelDate"
                          value={contactDetails.travelDate}
                          onChange={handleInputChange}
                          placeholder="e.g. Dec 2026 / 3 Days Weekend"
                          className="w-full bg-black/40 border border-white/20 text-white rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-primary transition-all placeholder:text-white/30"
                        />
                      </div>

                      {/* Preferences */}
                      <div>
                        <label className="block text-white/70 text-xs font-medium mb-1.5 flex items-center gap-1.5">
                          <MessageSquare className="w-3.5 h-3.5 text-primary" /> Specific Preferences (Optional)
                        </label>
                        <input
                          type="text"
                          name="preferences"
                          value={contactDetails.preferences}
                          onChange={handleInputChange}
                          placeholder="e.g. Need Tempo Traveller / Coffee estate stay"
                          className="w-full bg-black/40 border border-white/20 text-white rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-primary transition-all placeholder:text-white/30"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

              </AnimatePresence>
            </div>

            {/* ── Footer Navigation ── */}
            <div className="px-6 sm:px-8 pb-8 flex items-center justify-between border-t border-white/10 pt-6">
              {/* Back */}
              <button
                onClick={() => setStep((s) => Math.max(s - 1, 0))}
                disabled={step === 0}
                className="flex items-center gap-1.5 text-white/60 hover:text-white disabled:opacity-0 transition-all text-sm font-medium"
              >
                <ChevronLeft className="w-4 h-4" /> Back
              </button>

              {/* Dots */}
              <div className="flex items-center gap-2">
                {steps.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setStep(i)}
                    aria-label={`Go to step ${i + 1}`}
                    className={`rounded-full transition-all duration-300 ${i === step ? "w-6 h-2 bg-primary" : "w-2 h-2 bg-white/30 hover:bg-white/50"}`}
                  />
                ))}
              </div>

              {/* Next / Plan Journey */}
              {!isLastStep ? (
                <button
                  onClick={() => setStep((s) => s + 1)}
                  className="flex items-center gap-1.5 text-sm font-semibold text-white bg-primary hover:bg-primary/90 px-5 py-2.5 rounded-xl transition-all cursor-pointer shadow-md"
                >
                  Next <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <motion.button
                  onClick={handlePlanJourney}
                  className="flex items-center gap-2 font-semibold px-6 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-lg shadow-[#25D366]/20 transition-all duration-300 text-sm cursor-pointer hover:scale-105"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Send Enquiry via WhatsApp <Send className="w-4 h-4" />
                </motion.button>
              )}
            </div>
          </div>

          {/* Selection Summary Pills */}
          {Object.keys(selections).length > 0 && (
            <motion.div
              className="mt-5 flex flex-wrap gap-2 justify-center"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {selections.destination && (
                <span className="bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs px-3 py-1.5 rounded-full">
                  📍 {destinations.find((d) => d.id === selections.destination)?.label}
                </span>
              )}
              {selections.travelType && (
                <span className="bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs px-3 py-1.5 rounded-full">
                  ✈️ {travelTypes.find((t) => t.id === selections.travelType)?.label}
                </span>
              )}
              {selections.travelers && (
                <span className="bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs px-3 py-1.5 rounded-full">
                  👥 {travelerGroups.find((g) => g.id === selections.travelers)?.label}
                </span>
              )}
            </motion.div>
          )}

          {/* Direct call & alternative contact info */}
          <div className="text-center mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-white/70">
            <span>🔒 Direct founder consultation with Krupa P Murthy</span>
            <span className="hidden sm:inline">·</span>
            <a href="tel:+917892050273" className="hover:text-white underline transition-colors">
              Call Now: +91 78920 50273
            </a>
            <span className="hidden sm:inline">·</span>
            <a href="/contact" className="hover:text-white underline transition-colors">
              Contact Page &amp; Office Details
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
