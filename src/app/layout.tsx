import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { FloatingButtons } from "@/components/FloatingButtons";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://swiftsolar.in"),
  title: {
    default: "Swift Solar Amravati | Best Rooftop Solar Panel Installation & Repair Services",
    template: "%s | Swift Solar Amravati",
  },
  description: "Top-rated solar panel installation company in Amravati & Maharashtra. Turnkey rooftop solar systems, monocrystalline panels, hybrid solar, maintenance, cleaning & repair services. PM Surya Ghar subsidy assistance.",
  keywords: [
    "solar panel installation amravati",
    "best solar company in amravati",
    "rooftop solar panel maharashtra",
    "swift solar amravati",
    "solar panel cleaning repair amravati",
    "hybrid solar system amravati",
    "pm surya ghar yojana amravati",
    "solar dealer amravati lokesh nistane",
    "on grid solar system amravati"
  ],
  authors: [{ name: "Swift Solar", url: "https://swiftsolar.in" }],
  creator: "Swift Solar",
  publisher: "Swift Solar",
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Swift Solar Amravati | Best Rooftop Solar Panel Installation & Repair",
    description: "Top-rated solar panel installation company in Amravati & Maharashtra. Turnkey rooftop solar systems, hybrid solar, cleaning & repair services.",
    url: "https://swiftsolar.in",
    siteName: "Swift Solar",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Swift Solar Amravati",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Swift Solar Amravati | Rooftop Solar Panel Installation",
    description: "Turnkey solar panel installations, hybrid systems, maintenance & repair in Amravati & Maharashtra. PM Surya Ghar subsidy assistance.",
    images: ["/og-image.png"],
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
  "name": "Swift Solar",
  "alternateName": "Swift Solar Amravati",
  "image": "https://swiftsolar.in/og-image.png",
  "logo": "https://swiftsolar.in/swift_solar_logo_new.png",
  "url": "https://swiftsolar.in",
  "telephone": "+918149217116",
  "email": "lokesh.nistane1@gmail.com",
  "priceRange": "₹₹₹",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "SH242, Gadge Nagar",
    "addressLocality": "Amravati",
    "addressRegion": "Maharashtra",
    "postalCode": "444605",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 20.9483607,
    "longitude": 77.7640144
  },
  "hasMap": "https://maps.google.com/?q=20.9483607,77.7640144",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "20:00"
    }
  ],
  "sameAs": [
    "https://www.instagram.com/swiftsolar.co.in",
    "https://wa.me/918149217116"
  ],
  "areaServed": [
    {
      "@type": "City",
      "name": "Amravati"
    },
    {
      "@type": "State",
      "name": "Maharashtra"
    }
  ],
  "knowsAbout": [
    "Rooftop Solar Panel Installation",
    "Monocrystalline Solar Panels",
    "Hybrid Solar Power Systems",
    "Solar Panel Repair & Maintenance",
    "Solar Panel Cleaning",
    "PM Surya Ghar Subsidy"
  ]
};

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
      </head>
      <body>
        {children}
        <FloatingButtons />
      </body>
    </html>
  );
}
