import Link from "next/link";
import { Compass, Home, MapPin, ArrowRight, Phone, MessageCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-[#F8F6F2] py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full text-center">
        {/* Subtle Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-gray-200/80 text-xs font-bold uppercase tracking-[0.2em] text-[#0F8B73] mb-6 shadow-sm">
          <Compass className="w-3.5 h-3.5 text-[#0F8B73]" />
          Page Not Found · Error 404
        </div>

        {/* Heading */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#0F172A] tracking-tight mb-4">
          Journey Off the Beaten Path?
        </h1>

        <p className="text-gray-600 text-base sm:text-lg font-light leading-relaxed max-w-xl mx-auto mb-10">
          The page or package you are looking for may have been moved, renamed, or is currently being curated. Let us guide you back to your destination.
        </p>

        {/* Quick Navigation Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 text-left">
          <Link
            href="/"
            className="group p-5 bg-white border border-gray-200/80 rounded-2xl hover:border-[#0F8B73]/40 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-serif text-lg font-semibold text-[#0F172A] group-hover:text-[#0F8B73] transition-colors">
                Return Home
              </span>
              <Home className="w-4 h-4 text-gray-400 group-hover:text-[#0F8B73] transition-colors" />
            </div>
            <p className="text-xs text-gray-500 font-light">
              Explore our featured itineraries and travel planning overview.
            </p>
          </Link>

          <Link
            href="/destinations"
            className="group p-5 bg-white border border-gray-200/80 rounded-2xl hover:border-[#0F8B73]/40 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-serif text-lg font-semibold text-[#0F172A] group-hover:text-[#0F8B73] transition-colors">
                Tour Destinations
              </span>
              <MapPin className="w-4 h-4 text-gray-400 group-hover:text-[#0F8B73] transition-colors" />
            </div>
            <p className="text-xs text-gray-500 font-light">
              Karnataka, Kerala, Goa, Tamil Nadu, and North India packages.
            </p>
          </Link>

          <Link
            href="/services"
            className="group p-5 bg-white border border-gray-200/80 rounded-2xl hover:border-[#0F8B73]/40 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-serif text-lg font-semibold text-[#0F172A] group-hover:text-[#0F8B73] transition-colors">
                Our Services
              </span>
              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#0F8B73] transition-colors" />
            </div>
            <p className="text-xs text-gray-500 font-light">
              Domestic tours, honeymoon planning, hotel bookings, and vehicle rental.
            </p>
          </Link>

          <Link
            href="/contact"
            className="group p-5 bg-white border border-gray-200/80 rounded-2xl hover:border-[#0F8B73]/40 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-serif text-lg font-semibold text-[#0F172A] group-hover:text-[#0F8B73] transition-colors">
                Contact &amp; Inquiries
              </span>
              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#0F8B73] transition-colors" />
            </div>
            <p className="text-xs text-gray-500 font-light">
              Get in touch with Krupa P Murthy for personalized itinerary planning.
            </p>
          </Link>
        </div>

        {/* Direct Contact Bar */}
        <div className="pt-6 border-t border-gray-200/80 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:+917892050273"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-gray-200 text-xs font-semibold text-gray-800 hover:text-[#0F8B73] hover:border-[#0F8B73]/30 transition-all shadow-sm"
          >
            <Phone className="w-3.5 h-3.5 text-[#0F8B73]" />
            Call: +91 78920 50273
          </a>
          <a
            href="https://wa.me/917892050273?text=Hi%20Krupa!%20I%20was%20browsing%20your%20website%20and%20need%20help%20finding%20a%20tour%20package."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] text-white text-xs font-bold tracking-wide uppercase hover:bg-[#20bd5a] transition-all shadow-sm"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
