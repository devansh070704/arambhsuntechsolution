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
  title: "Swift Solar Amravati | High-Efficiency Solar Installations",
  description: "Swift Solar provides turnkey solar panel installations, hybrid systems, maintenance, repair, and cleaning services across Amravati & Maharashtra. Established 2023.",
  keywords: ["swift solar", "solar panels amravati", "rooftop solar maharashtra", "lokesh nistane"],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Swift Solar Amravati | High-Efficiency Solar Installations",
    description: "Swift Solar provides turnkey solar panel installations, hybrid systems, maintenance, repair, and cleaning services across Amravati & Maharashtra. Established 2023.",
    url: "https://swiftsolar.in",
    siteName: "Swift Solar",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Swift Solar Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Swift Solar Amravati | High-Efficiency Solar Installations",
    description: "Swift Solar provides turnkey solar panel installations, hybrid systems, maintenance, repair, and cleaning services across Amravati & Maharashtra. Established 2023.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geistSans.variable}>
      <body>
        {children}
        <FloatingButtons />
      </body>
    </html>
  );
}
