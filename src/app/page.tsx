import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SmartFeatures from '@/components/SmartFeatures';
import Services from '@/components/Services';
import HighlightBanner from '@/components/HighlightBanner';
import FeaturesGrid from '@/components/FeaturesGrid';
import Workflow from '@/components/Workflow';
import Testimonials from '@/components/Testimonials';
import Faq from '@/components/Faq';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Solar Installation, CCTV & Electrical Services in Pune | Aarambh Suntech Solution',
  description: 'Solar panel installation, AMC & repair, CCTV camera setup, and electrical work across Pune & Maharashtra. PM Surya Ghar subsidy up to ₹78,000. Free site visit. Call +91 88500 50126.',
  keywords: ['solar panel installation pune', 'cctv camera installation pune', 'electrical contractor pune', 'pm surya ghar yojana pune', 'solar company pune', 'aarambh suntech solution'],
};

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SmartFeatures />
      <Services />
      <HighlightBanner />
      <FeaturesGrid />
      <Workflow />
      <Testimonials />
      <Faq />
      <CTA />
      <Footer />
    </main>
  );
}
