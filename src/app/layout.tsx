import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { FloatingButtons } from "@/components/FloatingButtons";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://arambhsuntech.in"),
  title: {
    default: "Solar Installation, CCTV & Electrical Services in Pune | Aarambh Suntech Solution",
    template: "%s | Aarambh Suntech Solution",
  },
  description: "Solar panel installation, AMC & repair, CCTV camera setup, and electrical work across Pune & Maharashtra. Free site visit. Call Aarambh Suntech Solution today.",
  keywords: [
    "solar panel installation pune",
    "solar company in pune",
    "solar panel installation cost in pune",
    "rooftop solar system pune",
    "solar panel price in pune",
    "on grid solar system pune",
    "off grid solar system pune",
    "solar subsidy pune",
    "pm surya ghar yojana pune",
    "solar epc company pune",
    "solar panel installation for home pune",
    "solar panel for factory pune",
    "best solar installer near me",
    "solar installer near me",
    "solar panel repair pune",
    "solar panel cleaning service pune",
    "solar amc service pune",
    "solar inverter repair pune",
    "solar panel maintenance company near me",
    "cctv camera installation pune",
    "cctv installation near me",
    "home cctv camera pune",
    "cctv camera price in pune",
    "wireless cctv installation pune",
    "cctv for shop pune",
    "cctv amc service pune",
    "best cctv dealer in pune",
    "hikvision cctv dealer pune",
    "cp plus cctv installation pune",
    "electrician in pune",
    "electrical contractor pune",
    "electrical work near me",
    "home wiring services pune",
    "industrial electrical contractor pune",
    "commercial electrical panel installation pune",
    "solar and cctv installation company pune",
    "solar electrician pune",
    "solar panel installation khed shiroli",
    "cctv camera khed chakan rajgurunagar",
    "electrical contractor khed pune",
    "aarambh suntech solution",
    "arambh suntech solution",
    "pm surya ghar subsidy maharashtra",
  ],
  authors: [{ name: "Aarambh Suntech Solution", url: "https://arambhsuntech.in" }],
  creator: "Aarambh Suntech Solution",
  publisher: "Aarambh Suntech Solution",
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  icons: {
    icon: "/aarambh_logo.png",
    shortcut: "/aarambh_logo.png",
    apple: "/aarambh_logo.png",
  },
  openGraph: {
    title: "Solar Installation, CCTV & Electrical Services in Pune | Aarambh Suntech Solution",
    description: "Solar panel installation, AMC & repair, CCTV camera setup, and electrical work across Pune & Maharashtra. Free site visit. Call Aarambh Suntech Solution today.",
    url: "https://arambhsuntech.in",
    siteName: "Aarambh Suntech Solution",
    images: [
      {
        url: "/aarambh_logo.png",
        width: 800,
        height: 800,
        alt: "Aarambh Suntech Solution Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solar Installation, CCTV & Electrical Services in Pune | Aarambh Suntech Solution",
    description: "Solar panel installation, AMC & repair, CCTV camera setup, and electrical work across Pune & Maharashtra. Free site visit.",
    images: ["/aarambh_logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Aarambh Suntech Solution",
  "alternateName": "Aarambh Suntech Solution Shiroli",
  "image": "https://arambhsuntech.in/aarambh_logo.png",
  "logo": "https://arambhsuntech.in/aarambh_logo.png",
  "url": "https://arambhsuntech.in",
  "telephone": "+918850050126",
  "email": "contact@arambhsuntech.in",
  "vatID": "27BXDPK0771P1Z1",
  "taxID": "27BXDPK0771P1Z1",
  "priceRange": "₹₹",
  "paymentAccepted": "Cash, UPI, Bank Transfer, Cheque",
  "currenciesAccepted": "INR",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Shop No. 1, Gut No. 592, Property No. 118, Sawant Complex, Ground Floor, Ektanagar Paight Phata, Shiroli",
    "addressLocality": "Khed",
    "addressRegion": "Maharashtra",
    "postalCode": "410505",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 18.8471,
    "longitude": 73.8824
  },
  "hasMap": "https://maps.google.com/?q=Shiroli+Khed+Pune+410505",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
      "opens": "09:00",
      "closes": "20:00"
    }
  ],
  "sameAs": ["https://wa.me/918850050126"],
  "areaServed": [
    { "@type": "City", "name": "Khed" },
    { "@type": "City", "name": "Shiroli" },
    { "@type": "City", "name": "Pune" },
    { "@type": "City", "name": "Chakan" },
    { "@type": "City", "name": "Rajgurunagar" },
    { "@type": "City", "name": "Talegaon Dabhade" },
    { "@type": "City", "name": "Pimpri-Chinchwad" },
    { "@type": "State", "name": "Maharashtra" }
  ],
  "knowsAbout": [
    "Solar Panel Installation Pune",
    "Rooftop Solar System Pune",
    "On-Grid Solar System Pune",
    "Off-Grid Solar System Pune",
    "Solar Panel Price Pune",
    "Solar Panel Installation Cost Pune",
    "PM Surya Ghar Yojana Pune",
    "Solar Subsidy Maharashtra",
    "Solar EPC Company Pune",
    "Solar Panel Repair Pune",
    "Solar AMC Service Pune",
    "Solar Inverter Repair Pune",
    "Solar Panel Cleaning Service Pune",
    "CCTV Camera Installation Pune",
    "Home CCTV Camera Pune",
    "Wireless CCTV Installation Pune",
    "CCTV for Shop Office Pune",
    "CCTV AMC Service Pune",
    "Hikvision CCTV Dealer Pune",
    "CP Plus CCTV Installation Pune",
    "Electrical Contractor Pune",
    "Home Wiring Services Pune",
    "Industrial Electrical Contractor Pune",
    "Solar and CCTV Installation Company Pune",
    "Solar Electrician Pune"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Aarambh Suntech Solution Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Solar Panel Installation Pune", "description": "On-grid and off-grid rooftop solar installation for homes, shops, and factories across Pune & Maharashtra. PM Surya Ghar subsidy assistance." } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "CCTV Camera Installation Pune", "description": "Wired and wireless HD/IP CCTV camera setup for homes, offices, and shops in Pune. Hikvision and CP Plus authorized." } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Electrical Contractor Pune", "description": "Residential and industrial electrical contracting, wiring, panel installation, and maintenance across Khed, Chakan & Pune." } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Solar AMC & Repair Pune", "description": "Solar panel cleaning, inverter repair, CCTV AMC, and electrical maintenance services." } }
    ]
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does solar panel installation cost in Pune?",
      "acceptedAnswer": { "@type": "Answer", "text": "Solar panel installation cost in Pune starts at approximately ₹55,000–₹70,000 for a 1kW on-grid system after the PM Surya Ghar government subsidy. A 3kW system typically costs ₹1,30,000–₹1,60,000 after subsidy, and a 5kW system costs ₹2,00,000–₹2,40,000 after subsidy. Aarambh Suntech Solution provides a free site assessment and transparent, no-hidden-cost quotation." }
    },
    {
      "@type": "Question",
      "name": "What is PM Surya Ghar Yojana and how much subsidy can I get in Pune?",
      "acceptedAnswer": { "@type": "Answer", "text": "PM Surya Ghar Muft Bijli Yojana is a Government of India scheme for rooftop solar subsidies. In Pune and Maharashtra, eligible homeowners receive up to ₹30,000 for 1kW, ₹60,000 for 2kW, and ₹78,000 for 3kW or larger systems. Aarambh Suntech Solution handles the complete subsidy application and MSEDCL net metering process." }
    },
    {
      "@type": "Question",
      "name": "What is the difference between on-grid and off-grid solar systems?",
      "acceptedAnswer": { "@type": "Answer", "text": "An on-grid solar system connects to the MSEDCL electricity grid — excess power is exported and you earn net metering credits. An off-grid system uses battery storage and works without grid connection, ideal for areas with frequent power cuts. Aarambh Suntech Solution installs both on-grid and off-grid solar systems across Pune and Maharashtra." }
    },
    {
      "@type": "Question",
      "name": "How long does solar panel installation take in Pune?",
      "acceptedAnswer": { "@type": "Answer", "text": "Physical installation takes 2–3 days. MSEDCL net metering approval takes 2–4 additional weeks. The PM Surya Ghar subsidy is credited to your bank account within 4–6 weeks after installation." }
    },
    {
      "@type": "Question",
      "name": "Do solar panels work during monsoon and cloudy days in Pune?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Solar panels generate electricity on cloudy and rainy days at 20–40% reduced efficiency. Pune receives sufficient year-round sunlight for solar to remain financially viable. Generation estimates account for monsoon months." }
    },
    {
      "@type": "Question",
      "name": "What is the payback period for a solar system in Pune?",
      "acceptedAnswer": { "@type": "Answer", "text": "Most residential solar systems in Pune have a payback period of 3–5 years after the PM Surya Ghar subsidy. A typical 3kW system reduces the monthly electricity bill from ₹2,500–₹3,500 to under ₹200, after which electricity is virtually free for 20+ years." }
    },
    {
      "@type": "Question",
      "name": "Does Aarambh Suntech Solution handle solar panel repair and maintenance in Pune?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Aarambh Suntech Solution provides solar panel repair, solar inverter repair, solar panel cleaning, and Annual Maintenance Contracts (AMC) across Pune and Maharashtra. Call +91 88500 50126 for a service visit." }
    },
    {
      "@type": "Question",
      "name": "How much does CCTV camera installation cost in Pune?",
      "acceptedAnswer": { "@type": "Answer", "text": "A basic 2-camera HD CCTV system for a home or small shop starts at ₹6,000–₹10,000 including installation. A 4-camera system typically costs ₹12,000–₹20,000. Aarambh Suntech Solution installs Hikvision, CP Plus, and Dahua systems with DVR/NVR and mobile remote viewing." }
    },
    {
      "@type": "Question",
      "name": "Which CCTV brands does Aarambh Suntech Solution install in Pune?",
      "acceptedAnswer": { "@type": "Answer", "text": "Aarambh Suntech Solution installs Hikvision, CP Plus, and Dahua CCTV camera systems — wired and wireless HD/IP cameras for homes, shops, offices, warehouses, and factories. CCTV AMC and repair services are also available." }
    },
    {
      "@type": "Question",
      "name": "Can I view my CCTV cameras on my mobile phone?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. All CCTV systems installed by Aarambh Suntech Solution support remote live viewing via Hik-Connect (Hikvision), gCMOB (CP Plus), and DMSS (Dahua) apps. View live footage, playback recordings, and receive motion alerts from anywhere." }
    },
    {
      "@type": "Question",
      "name": "Does Aarambh Suntech Solution provide electrical contractor services in Pune?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Aarambh Suntech Solution is a licensed electrical contractor offering home wiring, commercial electrical panel installation, industrial three-phase contracting, DB panel setup, safety earthing, and electrical maintenance across Khed, Chakan, Rajgurunagar, and Pune." }
    },
    {
      "@type": "Question",
      "name": "Can one company do solar installation, CCTV setup, and electrical work together?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes — Aarambh Suntech Solution is one of the very few companies in Pune offering solar panel installation, CCTV camera setup, and complete electrical contracting under one roof. One contact, coordinated site visits, better pricing when combining services." }
    },
    {
      "@type": "Question",
      "name": "Does Aarambh Suntech Solution serve areas outside Pune in Maharashtra?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Based in Shiroli, Khed (Pune), Aarambh Suntech Solution serves Pune district and Maharashtra including Chakan, Rajgurunagar, Talegaon, Pimpri-Chinchwad. Call +91 88500 50126 or +91 99214 40488 to confirm availability in your area." }
    }
  ]
};

const personSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Anil Korede",
    "jobTitle": "Proprietor",
    "worksFor": { "@type": "Organization", "name": "Aarambh Suntech Solution" },
    "telephone": "+918850050126",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Shiroli, Khed",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Vaibhav Dhanwat",
    "jobTitle": "Proprietor",
    "worksFor": { "@type": "Organization", "name": "Aarambh Suntech Solution" },
    "telephone": "+919921440488",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Shiroli, Khed",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    }
  }
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geistSans.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        {personSchema.map((p, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(p) }}
          />
        ))}
      </head>
      <body>
        {children}
        <FloatingButtons />
      </body>
    </html>
  );
}
