"use client";
import React from 'react';
import styles from './HighlightBanner.module.css';
import { ScrollReveal } from './ScrollReveal';

export default function HighlightBanner() {
  return (
    <section className={styles.bannerSection}>
      {/* Background Image & Overlay */}
      <div className={styles.backgroundOverlay}>
        <img
          src="/images/solar_commercial.jpg"
          alt="Swift Solar Systems"
          className={styles.bannerBgImage}
        />
        <div className={styles.overlayGradient}></div>
      </div>

      <div className={styles.container}>
        <ScrollReveal direction="up" delay={0}>
          <div className={styles.content}>
            <span className={styles.preTitle}>Quality &amp; Performance</span>
            <h2 className={styles.title}>
              High-Performance Monocrystalline &amp; Hybrid Solar Installations
            </h2>
            <div className={styles.statsRow}>
              <div className={styles.statItem}>
                <span className={styles.statVal}>2023</span>
                <span className={styles.statLabel}>Established Year</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statVal}>25-30</span>
                <span className={styles.statLabel}>Years Solar Panel Lifespan</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statVal}>100%</span>
                <span className={styles.statLabel}>Clean Energy Yield</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
