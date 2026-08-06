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
          alt="Swift Solar - Contact Us"
          className={styles.bgImage}
        />
        <div className={styles.overlay}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.tag}>Switch To Clean Energy</span>
          <h2 className={styles.title}>Ready To Install Solar Panels?</h2>
          <p className={styles.desc}>
            Established in 2023, Swift Solar provides high-grade Monocrystalline, Polycrystalline, and Hybrid solar solutions alongside full installation, cleaning, and maintenance services.
          </p>

          <div className={styles.actions}>
            <a href="tel:+918149217116" className={styles.btnPrimary}>
              <Phone size={18} />
              Call Now: +91 81492 17116
            </a>
            <Link href="/contact" className={styles.btnSecondary}>
              <ArrowRight size={18} />
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
