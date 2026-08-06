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
  title: 'Swift Solar Amravati | Premium Rooftop Solar Installations in Maharashtra',
  description: 'Swift Solar provides clean, high-efficiency solar panel installations for homes, businesses & industries in Amravati & Maharashtra. Get up to ₹78,000 Govt subsidy under PM Surya Ghar. Call +91 81492 17116.',
  keywords: ['swift solar', 'solar panels amravati', 'rooftop solar maharashtra', 'pm surya ghar subsidy', 'solar installation amravati', 'MSEDCL net metering'],
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
