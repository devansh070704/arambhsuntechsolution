import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import { CheckCircle2, Zap } from 'lucide-react';

export const metadata = {
  title: 'About Us | Trusted Solar Panel Installers in Amravati',
  description: 'Learn about Swift Solar, Amravati\'s premier solar installation contractor established in 2023. Custom Monocrystalline & Hybrid solar energy solutions with 25+ years performance lifespan across Maharashtra.',
};

export default function AboutPage() {
  return (
    <main>
      <Navbar />

      {/* Page Header */}
      <section style={{
        paddingTop: '140px',
        paddingBottom: '60px',
        backgroundColor: 'var(--color-primary)',
        color: 'white',
        textAlign: 'center',
        position: 'relative'
      }}>
        <div className="container">
          <span style={{
            fontSize: '0.8rem',
            textTransform: 'uppercase',
            color: 'var(--color-accent-sky)',
            fontWeight: 700,
            letterSpacing: '2px',
            display: 'block',
            marginBottom: '10px'
          }}>
            Est. 2023 • Amravati, Maharashtra
          </span>
          <h1 className="page-header-title">
            About Swift Solar
          </h1>
          <p style={{ maxWidth: '650px', margin: '0 auto', fontSize: '1rem', color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.6 }}>
            Empowering homeowners and business owners with clean, efficient solar energy systems engineered for longevity and performance.
          </p>
        </div>
      </section>

      {/* Main About Story */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-white)' }}>
        <div className="container">
          <div className="grid-responsive-2">
            <div>
              <span style={{
                fontSize: '0.8rem',
                textTransform: 'uppercase',
                color: 'var(--color-accent-sky)',
                fontWeight: 700,
                letterSpacing: '2px',
                display: 'block',
                marginBottom: '10px'
              }}>
                Our Mission &amp; Expertise
              </span>
              <h2 className="section-responsive-title" style={{ lineHeight: 1.25, marginBottom: '18px' }}>
                Engineering Independent Power Since 2023
              </h2>
              <p style={{ color: 'var(--color-text-light)', fontSize: '0.98rem', lineHeight: 1.65, marginBottom: '14px' }}>
                Founded in 2023 in Amravati, Maharashtra, <strong>Swift Solar</strong> was established to provide simple, reliable, and premium solar energy solutions. We specialize in designing, installing, and servicing state-of-the-art solar photovoltaic systems for residential, commercial, and industrial clients.
              </p>
              <p style={{ color: 'var(--color-text-light)', fontSize: '0.98rem', lineHeight: 1.65, marginBottom: '22px' }}>
                Our team handles everything from initial roof site surveys to installation of Monocrystalline, Polycrystalline, and Hybrid systems, plus ongoing maintenance, repair, and cleaning services.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  'Tier-1 Monocrystalline & Polycrystalline Modules',
                  'High-Efficiency Hybrid & On-Grid System Designs',
                  'Complete Post-Installation Cleaning & Maintenance',
                  'Dedicated Local Engineering Support in Amravati'
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckCircle2 size={18} color="var(--color-accent-sky)" style={{ flexShrink: 0 }} />
                    <span style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--color-primary)' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ position: 'relative', borderRadius: 'var(--border-radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
              <img
                src="/images/solar_engineer.jpg"
                alt="Swift Solar Engineer At Work"
                style={{ width: '100%', height: 'auto', maxHeight: '420px', objectFit: 'cover', display: 'block' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Types of Solar Systems Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-light)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 40px auto' }}>
            <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--color-accent-sky)', fontWeight: 700, letterSpacing: '2px' }}>
              System Technology
            </span>
            <h2 className="section-responsive-title" style={{ marginTop: '8px' }}>
              Solar Panel Types We Install
            </h2>
          </div>

          <div className="grid-responsive-4">
            {[
              { title: 'Solar (On-Grid)', desc: 'Direct grid-tied systems that synchronize with your local utility for immediate bill reduction.' },
              { title: 'Hybrid Systems', desc: 'Combines grid synchronization with battery storage for uninterrupted power during outages.' },
              { title: 'Monocrystalline', desc: 'Premium black silicon panels offering peak conversion efficiency and sleek visual aesthetics.' },
              { title: 'Polycrystalline', desc: 'Cost-effective blue silicon panels engineered for durability and reliable daily output.' }
            ].map((type, idx) => (
              <div key={idx} className="hover-lift" style={{
                backgroundColor: 'white',
                padding: '24px 20px',
                borderRadius: 'var(--border-radius-md)',
                border: '1px solid rgba(10, 28, 62, 0.06)',
                boxShadow: 'var(--shadow-sm)'
              }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  backgroundColor: 'var(--color-bg-accent)',
                  color: 'var(--color-accent-sky)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px'
                }}>
                  <Zap size={22} />
                </div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-primary)', marginBottom: '8px' }}>
                  {type.title}
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--color-text-light)', lineHeight: 1.55 }}>
                  {type.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
