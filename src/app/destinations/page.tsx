import type { Metadata } from "next";
import { DestinationSections } from "./DestinationSections";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tour Destinations from Mysore | Coorg, Ooty, Kerala – G K JOURNEYS",
  description:
    "Discover tour destinations from Mysore with G K JOURNEYS. Explore personalized holiday planning for Coorg, Ooty, Kerala, Goa and popular destinations across India.",
  alternates: { canonical: "/destinations" },
  openGraph: {
    title: "Tour Destinations from Mysore | Coorg, Ooty, Kerala – G K JOURNEYS",
    description:
      "Discover tour destinations from Mysore with G K JOURNEYS. Explore personalized holiday planning for Coorg, Ooty, Kerala, Goa and popular destinations across India.",
    url: "/destinations",
    siteName: "G K JOURNEYS",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tour Destinations from Mysore | Coorg, Ooty, Kerala – G K JOURNEYS",
    description:
      "Discover tour destinations from Mysore with G K JOURNEYS. Explore personalized holiday planning for Coorg, Ooty, Kerala, Goa and popular destinations across India.",
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
      "name": "Destinations",
      "item": "https://www.gkjourneys.com/destinations"
    }
  ]
};

const destinationsCatalogSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Tour Destinations from Mysore – G K JOURNEYS",
  "description":
    "Curated holiday destinations and tour circuits planned from Mysore by G K JOURNEYS including Karnataka, Kerala, Tamil Nadu, Goa, and North India.",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "TouristDestination",
        "name": "Karnataka",
        "description":
          "Tour destinations from Mysore across Karnataka including Coorg coffee hills, Mysore Palace heritage, Chikmagalur, Hampi UNESCO ruins, and Bandipur National Park.",
        "url": "https://www.gkjourneys.com/destinations#karnataka",
        "touristType": ["Heritage Tourism", "Wildlife Safaris", "Weekend Getaways"],
        "includesAttraction": [
          { "@type": "TouristAttraction", "name": "Mysore Palace & Srirangapatna" },
          { "@type": "TouristAttraction", "name": "Coorg (Madikeri)" },
          { "@type": "TouristAttraction", "name": "Chikmagalur" },
          { "@type": "TouristAttraction", "name": "Hampi UNESCO Ruins" },
          { "@type": "TouristAttraction", "name": "Bandipur National Park" }
        ]
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "TouristDestination",
        "name": "Kerala",
        "description":
          "Holiday destinations in Kerala from Mysore including Wayanad hills, Munnar tea estates, Alleppey backwater houseboats, and Kochi heritage.",
        "url": "https://www.gkjourneys.com/destinations#kerala",
        "touristType": ["Hill Stations", "Backwaters", "Ayurveda Retreats"],
        "includesAttraction": [
          { "@type": "TouristAttraction", "name": "Wayanad" },
          { "@type": "TouristAttraction", "name": "Munnar" },
          { "@type": "TouristAttraction", "name": "Alleppey Backwaters" },
          { "@type": "TouristAttraction", "name": "Thekkady" }
        ]
      }
    },
    {
      "@type": "ListItem",
      "position": 3,
      "item": {
        "@type": "TouristDestination",
        "name": "Goa",
        "description":
          "Coastal and beach destinations in Goa accessible from Mysore with personalized hotel and travel coordination for couples and families.",
        "url": "https://www.gkjourneys.com/destinations#goa",
        "touristType": ["Beach Holidays", "Heritage Walks", "Honeymoon Packages"],
        "includesAttraction": [
          { "@type": "TouristAttraction", "name": "North Goa Beaches" },
          { "@type": "TouristAttraction", "name": "South Goa & Colva" },
          { "@type": "TouristAttraction", "name": "Dudhsagar Waterfalls" }
        ]
      }
    },
    {
      "@type": "ListItem",
      "position": 4,
      "item": {
        "@type": "TouristDestination",
        "name": "Tamil Nadu",
        "description":
          "Tour destinations from Mysore including Ooty and Nilgiri hill stations via Bandipur, Kodaikanal, and historic temple circuits in Madurai, Rameswaram, and Thanjavur.",
        "url": "https://www.gkjourneys.com/destinations#tamil-nadu",
        "touristType": ["Hill Stations", "Temple Circuits", "Cultural Tourism"],
        "includesAttraction": [
          { "@type": "TouristAttraction", "name": "Ooty & Coonoor (Queen of Hill Stations)" },
          { "@type": "TouristAttraction", "name": "Kodaikanal" },
          { "@type": "TouristAttraction", "name": "Madurai Meenakshi Temple" },
          { "@type": "TouristAttraction", "name": "Rameswaram" }
        ]
      }
    },
    {
      "@type": "ListItem",
      "position": 5,
      "item": {
        "@type": "TouristDestination",
        "name": "North India",
        "description":
          "Customized tour planning from Mysore to North India including Rajasthan royal heritage, the Golden Triangle (Delhi & Agra), and Himalayan retreats in Himachal and Kashmir.",
        "url": "https://www.gkjourneys.com/destinations#north-india",
        "touristType": ["Palace Heritage", "Himalayan Holidays", "Golden Triangle Tours"],
        "includesAttraction": [
          { "@type": "TouristAttraction", "name": "Rajasthan (Jaipur & Udaipur)" },
          { "@type": "TouristAttraction", "name": "Agra (Taj Mahal)" },
          { "@type": "TouristAttraction", "name": "Himachal (Shimla & Manali)" },
          { "@type": "TouristAttraction", "name": "Kashmir Valley" }
        ]
      }
    }
  ]
};

const destinations = [
  {
    id: "karnataka",
    name: "Karnataka",
    tagline: "Heritage, Hills & Coffee Estates from Mysore",
    suggestedDuration: "Suggested 2 to 5 Days (Customized Circuits)",
    description:
      "Karnataka is a rich tapestry of ancient Hoysala temples, royal palaces, pristine coastlines, and coffee-scented Western Ghats. Accessible directly from our home base in Mysore, we customize private itineraries — from short weekend getaways to Coorg to comprehensive multi-day heritage circuits across Hampi and coastal Karnataka.",
    image: "/images/mysore-palace.webp",
    imageAlt: "Karnataka tour destinations from Mysore - Mysore Palace illumination and heritage",
    places: [
      { name: "Mysore & Srirangapatna", desc: "Local heritage circuit featuring Mysore Palace, Chamundi Hills, Brindavan Gardens & historic monuments.", duration: "1–2 Days" },
      { name: "Coorg (Madikeri)", desc: "Misty coffee estates, Abbey & Iruppu Falls, Raja's Seat & Dubare Elephant Camp (~120 km from Mysore).", duration: "2–3 Days" },
      { name: "Chikmagalur", desc: "Verdant coffee plantations, Mullayanagiri peak, Baba Budangiri & scenic Western Ghat trails.", duration: "2–3 Days" },
      { name: "Hampi", desc: "UNESCO World Heritage ruins of the Vijayanagara Empire, boulder landscapes & historic temples.", duration: "2–3 Days" },
      { name: "Belur & Halebidu", desc: "Masterpieces of 12th-century Hoysala architecture and intricate stone carvings.", duration: "1 Day Excursion" },
      { name: "Bandipur & Nagarhole", desc: "Premier tiger reserves and wildlife safaris accessible directly along southern forest routes.", duration: "1–2 Days" },
      { name: "Gokarna & Murudeshwar", desc: "Pristine Arabian Sea beaches, Om Beach, and coastal temple heritage.", duration: "2–3 Days" },
      { name: "Jog Falls & Shimoga", desc: "Spectacular plunge waterfalls surrounded by lush Western Ghats forest canopy.", duration: "1–2 Days" },
    ],
    highlights: ["Heritage Tours", "Coffee Estate Getaways", "Wildlife Safaris", "Temple Circuits", "Western Ghats"],
  },
  {
    id: "kerala",
    name: "Kerala",
    tagline: "Hill Stations, Backwaters & Coastlines",
    suggestedDuration: "Suggested 3 to 6 Days (Customized Circuits)",
    description:
      "Neighboring Karnataka to the south, Kerala is one of the most sought-after holiday getaways from Mysore. Journey through scenic mountain passes to the tribal forests of Wayanad, relax amidst the rolling tea slopes of Munnar, or experience peaceful backwater houseboat cruises in Alleppey. We arrange comfortable outstation vehicles and verified family stays from Mysuru.",
    image: "/images/kerala.webp",
    imageAlt: "Kerala tour packages from Mysore - Munnar tea plantations and Alleppey backwater houseboats",
    places: [
      { name: "Wayanad", desc: "Closest Kerala hill destination from Mysore (~130 km). Edakkal Caves, waterfalls, tea estates & Chembra Peak.", duration: "2–3 Days" },
      { name: "Munnar", desc: "Expansive rolling tea gardens, mist-capped hills, Mattupetty Dam, and cool mountain climate.", duration: "3–4 Days" },
      { name: "Alleppey (Alappuzha)", desc: "Tranquil backwater canals, traditional houseboat day & night stays, and Vembanad Lake vistas.", duration: "1–2 Days" },
      { name: "Kochi (Cochin)", desc: "Historic port city, Fort Kochi colonial quarter, Chinese fishing nets & spice markets.", duration: "1–2 Days" },
      { name: "Thekkady", desc: "Periyar National Park boat safaris, spice garden walks, and elephant sanctuary visits.", duration: "1–2 Days" },
      { name: "Varkala & Kovalam", desc: "Dramatic red sea cliffs, Arabian Sea beaches, Ayurvedic rejuvenation & sunset viewpoints.", duration: "2–3 Days" },
    ],
    highlights: ["Houseboat Stays", "Tea Valley Trails", "Wildlife Safaris", "Ayurveda Retreats", "Coastal Getaways"],
  },
  {
    id: "goa",
    name: "Goa",
    tagline: "Sun, Beaches & Coastal Heritage",
    suggestedDuration: "Suggested 3 to 5 Days (Customized Circuits)",
    description:
      "Goa is a favored coastal escape from Mysore for couples, families, and friend groups. Whether embarking on a scenic road journey via coastal Karnataka or connecting by rail and air, enjoy palm-lined beaches, Portuguese colonial churches, spice plantations, and fresh coastal cuisine planned around your personal travel rhythm.",
    image: "/images/goa.webp",
    imageAlt: "Goa holiday tour packages from Mysore - golden beaches and coastal heritage getaways",
    places: [
      { name: "North Goa Beaches", desc: "Lively beaches including Calangute, Baga & Anjuna, water sports, and sunset shacks.", duration: "2–3 Days" },
      { name: "South Goa & Colva", desc: "Peaceful white-sand stretches like Palolem, Benaulim, and luxury coastal beach resorts.", duration: "2–3 Days" },
      { name: "Old Goa Heritage", desc: "UNESCO World Heritage sites including Basilica of Bom Jesus & Se Cathedral.", duration: "Half-Day Circuit" },
      { name: "Dudhsagar Waterfalls", desc: "Spectacular four-tiered waterfall nestled within Bhagwan Mahaveer Sanctuary.", duration: "1 Day Excursion" },
    ],
    highlights: ["Beach Holidays", "Water Sports", "Colonial Heritage Walks", "Honeymoon Packages", "Sunset Cruises"],
  },
  {
    id: "tamil-nadu",
    name: "Tamil Nadu",
    tagline: "Hill Stations & Historic Temple Heritage",
    suggestedDuration: "Suggested 2 to 5 Days (Customized Circuits)",
    description:
      "Connecting directly to southern Karnataka via the scenic Bandipur forest route, Tamil Nadu is the premier gateway to Ooty and the Nilgiri hills from Mysore. Beyond hill stations, explore grand Dravidian temple circuits and classical cultural heritage. We plan relaxed private journeys from Mysuru tailored to families, couples, and pilgrimage travelers.",
    image: "/images/tamilnadu.webp",
    imageAlt: "Tamil Nadu and Ooty tour packages from Mysore - Nilgiri hills and historic temple circuits",
    places: [
      { name: "Ooty & Coonoor", desc: "Queen of Hill Stations accessible from Mysore via Bandipur (~125 km). Botanical Gardens, Doddabetta & Toy Train.", duration: "2–3 Days" },
      { name: "Kodaikanal", desc: "Princess of Hill Stations featuring Kodai Lake, Coaker's Walk, pine forests & pillar rocks.", duration: "2–3 Days" },
      { name: "Madurai", desc: "Ancient cultural capital renowned for the historic Meenakshi Amman Temple and vibrant markets.", duration: "1–2 Days" },
      { name: "Rameswaram", desc: "Sacred island pilgrimage destination, Ramanathaswamy Temple corridors, and Dhanushkodi point.", duration: "1–2 Days" },
      { name: "Thanjavur & Chettinad", desc: "UNESCO Brihadeeswara Temple, heritage brass crafts, and traditional Chettinad mansions.", duration: "1–2 Days" },
      { name: "Mahabalipuram & Kanyakumari", desc: "UNESCO shore temples, coastal rock sculptures, and the southern tip where three seas meet.", duration: "2–3 Days" },
    ],
    highlights: ["Ooty Hill Escapes", "Temple Pilgrimages", "Nilgiri Toy Train", "Heritage Architecture", "Cultural Immersion"],
  },
  {
    id: "north-india",
    name: "North India",
    tagline: "Royal Heritage & Himalayan Landscapes",
    suggestedDuration: "Suggested 5 to 8 Days (Customized Circuits)",
    description:
      "For travelers departing from Mysore looking to experience India's grandest historical and mountain landscapes, G K JOURNEYS designs end-to-end itineraries. From the royal palaces of Rajasthan and the Taj Mahal to scenic Himalayan getaways in Himachal and Kashmir, we coordinate connecting flights, verified hotel stays, and private local chauffeurs.",
    image: "/images/northindia.webp",
    imageAlt: "North India holiday packages from Mysore - Rajasthan royal palaces and Himalayan destinations",
    places: [
      { name: "Rajasthan (Jaipur & Udaipur)", desc: "Royal forts, City Palace, desert camel safaris, and heritage haveli stays.", duration: "3–5 Days" },
      { name: "Golden Triangle (Delhi & Agra)", desc: "The iconic Taj Mahal, Agra Fort, Qutub Minar, and historic monuments.", duration: "2–3 Days" },
      { name: "Himachal (Shimla & Manali)", desc: "Snow-capped Himalayan views, Rohtang Pass, Solang Valley & mountain pines.", duration: "4–6 Days" },
      { name: "Uttarakhand (Rishikesh & Mussoorie)", desc: "Spiritual Ganges ghats, river rafting, yoga ashrams & Garhwal mountain vistas.", duration: "3–4 Days" },
      { name: "Kashmir Valley", desc: "Dal Lake shikara rides, houseboats, Gulmarg meadows, and Pahalgam pine valleys.", duration: "4–6 Days" },
    ],
    highlights: ["Palace Heritage", "Himalayan Treks", "Golden Triangle", "Spiritual Pilgrimages", "Desert Safaris"],
  },
];

export default function DestinationsPage() {
  return (
    <div className="pb-20">
      <script
        id="breadcrumb-schema-destinations"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        id="destinations-catalog-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(destinationsCatalogSchema) }}
      />
      {/* Page Hero */}
      <div className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=2000&auto=format&fit=crop"
            alt="GK Journeys - Tour Destinations and Holiday Packages from Mysore"
            fill
            priority
            sizes="100vw"
            quality={80}
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
        <div className="relative z-10 container pb-12">
          <span className="text-white/70 text-xs font-bold tracking-widest uppercase mb-3 block">
            GK Journeys · Tour Packages from Mysore
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 leading-tight">
            Tour Destinations &amp; Holiday Getaways from Mysore
          </h1>
          <p className="text-white/80 text-base md:text-lg max-w-xl font-light leading-relaxed">
            Curated holiday destinations and personalized itineraries departing from Mysuru. From weekend trips to Coorg and Ooty to complete South and North India tours.
          </p>
        </div>
      </div>

      {/* Destinations List */}
      <DestinationSections destinations={destinations} />

      {/* ── Contextual Travel Planning Banner ── */}
      <div className="container mx-auto px-4 lg:px-8 mt-24">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#123A67] via-[#1a4f8b] to-[#0f2d4a] text-white p-8 md:p-12 shadow-xl">
          <div className="max-w-2xl">
            <span className="text-white/70 font-bold text-[10px] tracking-[0.25em] uppercase block mb-2">
              Plan Your Trip from Mysuru
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-white mb-3 leading-tight">
              Ready to Explore These Destinations?
            </h2>
            <p className="text-white/80 text-sm md:text-base leading-relaxed mb-6 font-light">
              From weekend getaways to Coorg and Ooty to holiday packages across Kerala, Goa, and North India, Krupa personally crafts your day-wise itinerary with private transport and verified stays.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/#trip-planner"
                className="inline-flex items-center justify-center gap-2 bg-[#E86A00] hover:bg-[#CF5F00] text-white text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
              >
                Use Interactive Trip Planner →
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white text-white hover:text-gray-900 border border-white/30 text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-full backdrop-blur-sm transition-all duration-300"
              >
                Explore Travel Services
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs font-semibold uppercase tracking-wider px-6 py-3.5 rounded-full transition-all duration-300"
              >
                Contact Krupa
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
