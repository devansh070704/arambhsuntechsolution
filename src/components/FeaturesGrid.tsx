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
            <h2 className={styles.title}>Power, Security &amp; Electrical Services Made Easy.</h2>
            <p className={styles.subtitle}>
              Aarambh Suntech Solution manages everything — from site audit and system design to installation, testing, and lifetime maintenance.
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
                    Track your solar generation and view CCTV mobile live feeds anytime on your smartphone.
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
                    Select On-Grid MSEDCL net-metered solar systems or Hybrid battery backup for uninterrupted power.
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
                  alt="Aarambh Suntech Solution Projects"
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
                  <h3 className={styles.featureTitle}>Fast Execution</h3>
                  <p className={styles.featureDesc}>
                    Our specialized team executes solar, CCTV, and electrical installations quickly with zero disruption.
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
                  <h3 className={styles.featureTitle}>25-Year Performance</h3>
                  <p className={styles.featureDesc}>
                    Every Aarambh Suntech solar system utilizes MNRE-approved panels built for multi-decade reliable operation.
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
