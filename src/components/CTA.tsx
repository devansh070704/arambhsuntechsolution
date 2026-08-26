import React from 'react';
import styles from './CTA.module.css';
import { ArrowRight, Phone } from 'lucide-react';
import Link from 'next/link';

export default function CTA() {
  return (
    <section id="contact" className={styles.ctaSection}>
      {/* Background Image Frame */}
      <div className={styles.background}>
        <img
          src="/images/hero_solar.jpg"
          alt="Aarambh Suntech Solution - Contact Us"
          className={styles.bgImage}
        />
        <div className={styles.overlay}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.tag}>Solar, CCTV &amp; Electrical Solutions</span>
          <h2 className={styles.title}>Ready to Power &amp; Secure Your Project?</h2>
          <p className={styles.desc}>
            Aarambh Suntech Solution provides high-efficiency Solar Rooftop Systems, HD &amp; IP CCTV Security Camera setup, and Turnkey Industrial &amp; Residential Electrical Contracting across Shiroli, Khed, Chakan &amp; Pune.
          </p>

          <div className={styles.actions}>
            <a href="tel:+918850050126" className={styles.btnPrimary}>
              <Phone size={18} />
              Call Now: +91 88500 50126
            </a>
            <Link href="/contact" className={styles.btnSecondary}>
              <ArrowRight size={18} />
              <span>Get Free Quote</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
