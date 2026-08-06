"use client";
import React from 'react';
import styles from './FeaturesGrid.module.css';
import { Layers, Activity, CalendarClock, Zap } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export default function FeaturesGrid() {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-white)' }}>
      <div className="container">
        <ScrollReveal direction="up" delay={0}>
          <div className={styles.header}>
            <span className={styles.preTitle}>Simple &amp; Hassle-Free</span>
            <h2 className={styles.title}>Going Solar Has Never Been This Easy.</h2>
            <p className={styles.subtitle}>
              Swift Solar manages everything — from engineering and site audit to system installation, cleaning, and lifetime maintenance.
            </p>
          </div>
        </ScrollReveal>

        <div className={styles.gridContainer}>
          {/* Left Column features */}
          <div className={styles.leftCol}>
            <ScrollReveal direction="right" delay={100}>
              <div className={styles.featureBlock}>
                <div className={styles.iconWrapper}>
                  <Activity size={22} />
                </div>
                <div className={styles.textWrapper}>
                  <h3 className={styles.featureTitle}>Real-Time Monitoring</h3>
                  <p className={styles.featureDesc}>
                    Track your solar generation, savings, and battery status anytime via a clean mobile app dashboard.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={200}>
              <div className={styles.featureBlock}>
                <div className={styles.iconWrapper}>
                  <Layers size={22} />
                </div>
                <div className={styles.textWrapper}>
                  <h3 className={styles.featureTitle}>Grid &amp; Hybrid Options</h3>
                  <p className={styles.featureDesc}>
                    Select On-Grid utility synchronized systems or Hybrid battery backup for uninterrupted power.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Central Image Column */}
          <div className={styles.centerCol}>
            <ScrollReveal direction="up" delay={150}>
              <div className={styles.imageFrame}>
                <img
                  src="/images/features_central.jpg"
                  alt="Swift Solar Panel Array"
                  className={styles.centerImage}
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column features */}
          <div className={styles.rightCol}>
            <ScrollReveal direction="left" delay={100}>
              <div className={styles.featureBlock}>
                <div className={styles.iconWrapper}>
                  <CalendarClock size={22} />
                </div>
                <div className={styles.textWrapper}>
                  <h3 className={styles.featureTitle}>Fast Installation</h3>
                  <p className={styles.featureDesc}>
                    Our trained crew installs your entire solar system in 1–2 days with zero disruption to your daily routine.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={200}>
              <div className={styles.featureBlock}>
                <div className={styles.iconWrapper}>
                  <Zap size={22} />
                </div>
                <div className={styles.textWrapper}>
                  <h3 className={styles.featureTitle}>25-30 Year Lifespan</h3>
                  <p className={styles.featureDesc}>
                    Every Swift Solar system utilizes Tier-1 Monocrystalline and Polycrystalline panels built for multi-decade operation.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
