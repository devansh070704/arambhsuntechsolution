import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import { CheckCircle2, Sun, Video, Zap } from 'lucide-react';

export const metadata = {
  title: 'About Us | Solar & CCTV Company in Pune | Aarambh Suntech Solution',
  description: 'Aarambh Suntech Solution is a GST registered solar, CCTV & electrical company in Pune. Led by Anil Korede & Vaibhav Dhanwat — specialists in rooftop solar installation, CCTV camera setup, and electrical contracting across Khed & Pune.',
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
            Sawant Complex • Shiroli, Khed, Pune
          </span>
          <h1 className="page-header-title">
            Solar, CCTV & Electrical Company in Pune
          </h1>
          <p style={{ maxWidth: '650px', margin: '0 auto', fontSize: '1rem', color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.6 }}>
            Rooftop solar panel installation, CCTV camera setup, and electrical contracting — all under one roof. Serving Khed, Chakan & Pune.
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
                Who We Are
              </span>
              <h2 className="section-responsive-title" style={{ lineHeight: 1.25, marginBottom: '18px' }}>
                Anil Korede &amp; Vaibhav Dhanwat — Solar, CCTV &amp; Electrical Specialists
              </h2>
              <p style={{ color: 'var(--color-text-light)', fontSize: '0.98rem', lineHeight: 1.65, marginBottom: '14px' }}>
                <strong>Aarambh Suntech Solution</strong> is a GST registered technical services company headquartered at Sawant Complex, Shiroli, Khed, Pune. We are one of the very few companies in Pune that offers solar panel installation, CCTV camera setup, and electrical contracting together — so you don&apos;t need three different vendors.
              </p>
              <p style={{ color: 'var(--color-text-light)', fontSize: '0.98rem', lineHeight: 1.65, marginBottom: '22px' }}>
                Led by <strong>Anil Korede</strong> and <strong>Vaibhav Dhanwat</strong>, our team brings hands-on field expertise in solar rooftop systems, HD/IP CCTV surveillance, and industrial &amp; residential electrical works. We use only proven brands — Hikvision, CP Plus, and MNRE-approved solar equipment — with full transparency in pricing and no hidden costs.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  'GST Registered Business (GSTIN: 27BXDPK0771P1Z1)',
                  'PM Surya Ghar Govt Scheme — Solar Subsidy up to ₹78,000',
                  'Hikvision & CP Plus Authorized CCTV Installation',
                  '100% Transparent Pricing — Free Site Visit & Quotation',
                  'Serving Khed, Shiroli, Chakan, Rajgurunagar & Pune'
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
                alt="Aarambh Suntech Solution Solar CCTV Electrical Specialists Pune"
                style={{ width: '100%', height: 'auto', maxHeight: '420px', objectFit: 'cover', display: 'block' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3 Pillars Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-light)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 40px auto' }}>
            <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--color-accent-sky)', fontWeight: 700, letterSpacing: '2px' }}>
              Core Technical Offerings
            </span>
            <h2 className="section-responsive-title" style={{ marginTop: '8px' }}>
              Our 3 Specialized Service Pillars
            </h2>
          </div>

          <div className="grid-responsive-3">
            {[
              { title: '☀️ Solar Solutions', icon: <Sun size={24} color="#D49B27" />, desc: 'On-grid, hybrid, and monocrystalline solar rooftop installations engineered for maximum electricity generation and bill reduction.' },
              { title: '📹 CCTV Security', icon: <Video size={24} color="#D49B27" />, desc: 'High-definition night-vision cameras, IP network surveillance, DVR/NVR setup, and remote mobile phone live viewing.' },
              { title: '⚡ Electrical Works', icon: <Zap size={24} color="#D49B27" />, desc: 'Complete electrical wiring, main distribution panel installation, commercial lighting, maintenance, and technical repairs.' }
            ].map((type, idx) => (
              <div key={idx} className="hover-lift" style={{
                backgroundColor: 'white',
                padding: '28px 24px',
                borderRadius: 'var(--border-radius-md)',
                border: '1px solid rgba(12, 27, 38, 0.08)',
                boxShadow: 'var(--shadow-sm)'
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  backgroundColor: 'var(--color-bg-accent)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px'
                }}>
                  {type.icon}
                </div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-primary)', marginBottom: '8px' }}>
                  {type.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-light)', lineHeight: 1.6 }}>
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
