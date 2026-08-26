import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import { Sun, Video, Zap, Wrench, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { ScrollReveal } from '@/components/ScrollReveal';

export const metadata = {
  title: 'Solar Panel Installation in Pune | CCTV & Electrical Services | Aarambh Suntech Solution',
  description: 'On-grid & off-grid solar installation for homes and businesses in Pune. CCTV camera setup for home & shop. Electrical contractor services. Government subsidy assistance. Get a free quote.',
};

export default function ServicesPage() {
  const services = [
    {
      title: '☀️ Solar Panel Installation in Pune',
      icon: Sun,
      image: '/images/hero_solar.jpg',
      desc: 'On-grid and off-grid rooftop solar panel installation for homes, shops, commercial complexes, factories and housing societies across Pune & Maharashtra. We handle everything — site survey, system design, installation, MSEDCL net metering, and PM Surya Ghar government subsidy application. Solar panel installation cost in Pune starts at ₹60,000 after subsidy for a 1kW system.',
      highlights: [
        'On-Grid & Off-Grid Solar System — Homes, Shops & Factories',
        'PM Surya Ghar Yojana Subsidy Assistance (up to ₹78,000)',
        'MSEDCL Net Metering Registration & Connection Support',
        'Solar Panel Repair, Cleaning & AMC Service Available',
      ]
    },
    {
      title: '📹 CCTV Camera Installation in Pune',
      icon: Video,
      image: '/images/features_central.jpg',
      desc: 'Wired and wireless CCTV camera installation for homes, shops, offices, warehouses, and factories in Pune & Khed. We install Hikvision, CP Plus, and Dahua HD/IP camera systems with night-vision, DVR/NVR storage, and remote mobile live viewing. Same-week installation. CCTV AMC service available.',
      highlights: [
        'Home CCTV Camera & Shop Security Camera Setup',
        'Wireless & Wired HD/IP Network Camera Installation',
        'Night-Vision & Full-Color 24/7 Surveillance',
        'CCTV AMC Service & DVR/NVR Repair Pune',
      ]
    },
    {
      title: '⚡ Electrical Contractor in Pune',
      icon: Zap,
      image: '/images/solar_engineer.jpg',
      desc: 'Licensed electrical contractor for residential home wiring, commercial electrical panel installation, and industrial electrical contracting across Khed, Chakan & Pune. We handle complete wiring, DB panel setup, three-phase industrial connections, safety earthing, and electrical maintenance contracts.',
      highlights: [
        'Home Wiring & Residential Electrical Work',
        'Commercial Electrical Panel Installation',
        'Industrial Electrical Contractor — Khed, Chakan & Pune',
        'Electrical Short-Circuit Repair & Safety Inspection',
      ]
    },
    {
      title: '🛠️ Solar & CCTV AMC & Repair Services',
      icon: Wrench,
      image: '/images/solar_commercial.jpg',
      desc: 'Solar panel not generating power? CCTV camera not working? We provide solar panel repair, solar inverter repair, solar panel cleaning, CCTV DVR troubleshooting, and electrical maintenance services in Pune. Annual maintenance contracts (AMC) available for solar, CCTV, and electrical systems.',
      highlights: [
        'Solar Panel Repair & Solar Inverter Repair Pune',
        'Solar Panel Cleaning & Output Optimization',
        'CCTV Camera & DVR/NVR Fault Repair',
        'Annual Maintenance Contracts (AMC) — Solar, CCTV, Electrical',
      ]
    }
  ];

  return (
    <main style={{ overflowX: 'hidden' }}>
      <Navbar />

      {/* Page Header */}
      <section style={{
        paddingTop: '140px',
        paddingBottom: '60px',
        backgroundColor: 'var(--color-primary)',
        color: 'white',
        textAlign: 'center'
      }}>
        <div className="container">
          <ScrollReveal direction="up" delay={0}>
            <span style={{
              fontSize: '0.8rem',
              textTransform: 'uppercase',
              color: 'var(--color-accent-sky)',
              fontWeight: 700,
              letterSpacing: '2px',
              display: 'block',
              marginBottom: '10px'
            }}>
              Complete Technical Execution
            </span>
            <h1 className="page-header-title">
              Our Professional Services
            </h1>
            <p style={{ maxWidth: '650px', margin: '0 auto', fontSize: '1rem', color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.6 }}>
              From Rooftop Solar Power to HD CCTV Security and Turnkey Electrical Works — Aarambh Suntech Solution is your trusted engineering partner in Shiroli, Khed, Pune.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Alternating Services Layout */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-white)' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
            {services.map((srv, idx) => {
              const IconComp = srv.icon;
              const isEven = idx % 2 === 0;

              return (
                <ScrollReveal key={idx} direction="up" delay={100}>
                  <div className="grid-responsive-2" style={{ alignItems: 'center' }}>
                    {/* Text block */}
                    <div style={{ order: isEven ? 1 : 2 }}>
                      <div style={{
                        width: '48px',
                        height: '48px',
                        backgroundColor: 'var(--color-bg-accent)',
                        color: 'var(--color-primary)',
                        borderRadius: '14px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '16px'
                      }}>
                        <IconComp size={24} color="#D49B27" />
                      </div>
                      <h2 className="section-responsive-title" style={{ marginBottom: '14px' }}>
                        {srv.title}
                      </h2>
                      <p style={{ color: 'var(--color-text-light)', fontSize: '0.98rem', lineHeight: 1.65, marginBottom: '20px' }}>
                        {srv.desc}
                      </p>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
                        {srv.highlights.map((hl, hIdx) => (
                          <div key={hIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--color-accent-sky)', flexShrink: 0 }} />
                            <span style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--color-primary)' }}>{hl}</span>
                          </div>
                        ))}
                      </div>

                      <Link href="/contact" style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        backgroundColor: 'var(--color-primary)',
                        color: 'white',
                        padding: '12px 24px',
                        borderRadius: 'var(--border-radius-full)',
                        fontWeight: 700,
                        fontSize: '0.9rem'
                      }}>
                        Request Quotation <ArrowRight size={16} />
                      </Link>
                    </div>

                    {/* Image block */}
                    <div style={{
                      order: isEven ? 2 : 1,
                      borderRadius: 'var(--border-radius-lg)',
                      overflow: 'hidden',
                      boxShadow: 'var(--shadow-md)',
                      height: '320px'
                    }}>
                      <img
                        src={srv.image}
                        alt={srv.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                      />
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
