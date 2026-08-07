import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import { Sun, Wrench, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { ScrollReveal } from '@/components/ScrollReveal';

export const metadata = {
  title: 'Solar Panel Services in Amravati | Installation, Repair & Cleaning',
  description: 'Professional solar panel installation, routine cleaning, preventive maintenance & inverter repair services across Amravati & Maharashtra. Get high-yield Monocrystalline & Hybrid solar power.',
};

export default function ServicesPage() {
  const services = [
    {
      title: 'Solar Panel Installation',
      icon: Sun,
      image: '/images/hero_solar.jpg',
      desc: 'Precision design and turnkey installation of Monocrystalline, Polycrystalline, On-Grid, and Hybrid solar energy systems for residential homes, shops, and commercial facilities.',
      highlights: [
        'Custom 3D Rooftop Layout & Structural Audit',
        'Monocrystalline & Polycrystalline Options',
        'Hybrid & Battery Storage Integrations',
        'Complete Safety Wiring & Inverter Setup'
      ]
    },
    {
      title: 'Solar Panel Maintenance',
      icon: ShieldCheck,
      image: '/images/features_central.jpg',
      desc: 'Preventative system health checkups and diagnostic audits designed to keep your solar panels operating at peak conversion rates year-round.',
      highlights: [
        'Routine Voltage & Current Diagnostics',
        'Inverter & Electrical Wiring Inspections',
        'Thermal Hotspot & Degradation Checks',
        'Annual Maintenance Contracts (AMC)'
      ]
    },
    {
      title: 'Solar Panel Repair',
      icon: Wrench,
      image: '/images/solar_engineer.jpg',
      desc: 'Prompt repair services for malfunctioning inverters, damaged panels, loose wiring, tripped breakers, and degraded connection junction boxes.',
      highlights: [
        'Fast On-Site Fault Diagnostics',
        'Inverter Replacement & Calibration',
        'Junction Box & Wiring Repairs',
        'Structural Frame Realignment'
      ]
    },
    {
      title: 'Solar Panel Cleaning',
      icon: Sparkles,
      image: '/images/solar_commercial.jpg',
      desc: 'Professional cleaning services using soft demineralized water and specialized brushes to remove dust, soot, and bird droppings, restoring up to 30% lost efficiency.',
      highlights: [
        'Demineralized Water Washing',
        'Non-Abrasive Soft Surface Brushing',
        'Removal of Heavy Dust & Bird Droppings',
        'Scheduled Cleaning Plans Available'
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
              Full Lifecycle Care
            </span>
            <h1 className="page-header-title">
              Our Solar Services
            </h1>
            <p style={{ maxWidth: '650px', margin: '0 auto', fontSize: '1rem', color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.6 }}>
              From precision installation to routine cleaning, repair, and ongoing maintenance — we keep your solar investment performing at its best.
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
              const isEven = idx % 2 === 0; // Even indices: Text Left, Image Right | Odd indices: Image Left, Text Right

              return (
                <ScrollReveal key={idx} direction="up" delay={100}>
                  <div className="grid-responsive-2" style={{ alignItems: 'center' }}>
                    {/* Text block */}
                    <div style={{ order: isEven ? 1 : 2 }}>
                      <div style={{
                        width: '48px',
                        height: '48px',
                        backgroundColor: 'var(--color-bg-accent)',
                        color: 'var(--color-accent-sky)',
                        borderRadius: '14px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '16px'
                      }}>
                        <IconComp size={24} />
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
                        Book Service <ArrowRight size={16} />
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
