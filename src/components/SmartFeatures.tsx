"use client";
import React from 'react';
import styles from './SmartFeatures.module.css';
import { Sun, Video, Zap, ArrowUpRight, Shield, Award } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import Link from 'next/link';

export default function SmartFeatures() {
  return (
    <section id="about" className="section-padding" style={{ backgroundColor: 'var(--color-bg-light)' }}>
      <div className="container">
        <ScrollReveal direction="up" delay={0}>
          <div className={styles.headerRow}>
            <div className={styles.titleColumn}>
              <span className={styles.preTitle}>Our Core Expertise</span>
              <h2 className={styles.sectionTitle}>
                3 Verticals under One Trusted Roof
              </h2>
            </div>
            <div className={styles.descColumn}>
              <p className={styles.headerDesc}>
                Aarambh Suntech Solution provides complete technical execution for Solar Rooftop Systems, HD CCTV Security Surveillance, and Turnkey Electrical Contracting across Shiroli, Khed, Chakan &amp; Pune.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <div className={styles.cardsGrid}>
          {/* Card 1: Solar Solutions */}
          <ScrollReveal direction="up" delay={100}>
            <div className={`${styles.featureCard} hover-lift`}>
              <div className={styles.iconWrapper}>
                <Sun className={styles.cardIcon} color="#D49B27" />
              </div>
              <h3 className={styles.cardTitle}>☀️ Solar Solutions</h3>
              <p className={styles.cardDesc}>
                High-yield monocrystalline rooftop solar installations, hybrid battery systems, net metering setup, and PM Surya Ghar Govt subsidy assistance.
              </p>
              <div className={styles.cardDivider}></div>
              <div className={styles.cardStat}>
                <span className={styles.statValue}>25+ Years</span>
                <span className={styles.statLabel}>Solar Panel Performance Warranty</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 2: CCTV Solutions */}
          <ScrollReveal direction="up" delay={200}>
            <div className={`${styles.featureCard} hover-lift`}>
              <div className={styles.iconWrapper}>
                <Video className={styles.cardIcon} color="#D49B27" />
              </div>
              <h3 className={styles.cardTitle}>📹 CCTV Security Solutions</h3>
              <p className={styles.cardDesc}>
                HD analog &amp; IP network security camera systems, 24/7 DVR/NVR recording, night-vision color surveillance, and mobile live viewing setup.
              </p>
              <div className={styles.cardDivider}></div>
              <div className={styles.cardStat}>
                <span className={styles.statValue}>24 / 7</span>
                <span className={styles.statLabel}>Smart Remote Mobile Surveillance</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 3: Electrical Works */}
          <ScrollReveal direction="up" delay={300}>
            <div className={`${styles.featureCard} hover-lift`}>
              <div className={styles.iconWrapper}>
                <Zap className={styles.cardIcon} color="#D49B27" />
              </div>
              <h3 className={styles.cardTitle}>⚡ Electrical Works</h3>
              <p className={styles.cardDesc}>
                Turnkey residential &amp; industrial electrical contracting, main panel board wiring, circuit breaker installations, maintenance &amp; safety audits.
              </p>
              <div className={styles.cardDivider}></div>
              <div className={styles.cardStat}>
                <span className={styles.statValue}>100%</span>
                <span className={styles.statLabel}>Certified Electrical Contracting</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
