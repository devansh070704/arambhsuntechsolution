"use client";
import React from 'react';
import styles from './SmartFeatures.module.css';
import { Shield, Sparkles, TrendingUp, ArrowUpRight } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import Link from 'next/link';

export default function SmartFeatures() {
  return (
    <section id="about" className="section-padding" style={{ backgroundColor: 'var(--color-bg-light)' }}>
      <div className="container">
        <ScrollReveal direction="up" delay={0}>
          <div className={styles.headerRow}>
            <div className={styles.titleColumn}>
              <span className={styles.preTitle}>Why Choose Swift Solar</span>
              <h2 className={styles.sectionTitle}>
                Premium Quality, Technology-Driven Solar Systems
              </h2>
            </div>
            <div className={styles.descColumn}>
              <p className={styles.headerDesc}>
                We deliver engineered excellence by integrating top-grade components with smart digital monitoring, giving your home or business true energy independence.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <div className={styles.cardsGrid}>
          {/* Card 1: Quality Assurance */}
          <ScrollReveal direction="up" delay={100}>
            <div className={`${styles.featureCard} hover-lift`}>
              <div className={styles.iconWrapper}>
                <Shield className={styles.cardIcon} />
              </div>
              <h3 className={styles.cardTitle}>Premium Grade A+ Panels</h3>
              <p className={styles.cardDesc}>
                We use only Tier-1 monocrystalline solar panels with advanced anti-reflective coating, rated for harsh Indian weather conditions including dust, heat &amp; monsoon.
              </p>
              <div className={styles.cardDivider}></div>
              <div className={styles.cardStat}>
                <span className={styles.statValue}>25-30</span>
                <span className={styles.statLabel}>Years Panel Performance Lifespan</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 2: Image Card */}
          <ScrollReveal direction="up" delay={200}>
            <div className={`${styles.imageCard} hover-lift`}>
              <img
                src="/images/solar_engineer.jpg"
                alt="Swift Solar Professional Installation"
                className={styles.cardBgImage}
              />
              <div className={styles.cardOverlay}></div>
              <div className={styles.imageCardContent}>
                <div className={styles.imageCardTag}>
                  <Sparkles size={14} style={{ marginRight: 6 }} />
                  Est. 2023
                </div>
                <h3 className={styles.imageCardTitle}>Expert Engineering Team</h3>
                <p className={styles.imageCardDesc}>
                  Our certified engineers ensure safe, clean installations with zero compromise on quality.
                </p>
                <Link href="/about" className={styles.readMoreLink}>
                  Learn About Us <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 3: Stats Chart */}
          <ScrollReveal direction="up" delay={300}>
            <div className={`${styles.chartCard} hover-lift`}>
              <div className={styles.chartHeader}>
                <div className={styles.chartIconWrapper}>
                  <TrendingUp className={styles.chartIcon} />
                </div>
                <div>
                  <h3 className={styles.chartCardTitle}>High Efficiency</h3>
                  <p className={styles.chartCardSubtitle}>Monthly Electricity Savings</p>
                </div>
              </div>

              {/* Custom Bar Chart */}
              <div className={styles.chartVisual}>
                <div className={styles.barWrapper}>
                  <div className={`${styles.bar} ${styles.bar1}`}>
                    <span className={styles.barValue}>60%</span>
                  </div>
                  <span className={styles.barLabel}>3kW</span>
                </div>
                <div className={styles.barWrapper}>
                  <div className={`${styles.bar} ${styles.bar2}`}>
                    <span className={styles.barValue}>75%</span>
                  </div>
                  <span className={styles.barLabel}>5kW</span>
                </div>
                <div className={styles.barWrapper}>
                  <div className={`${styles.bar} ${styles.bar3}`}>
                    <span className={styles.barValue}>85%</span>
                  </div>
                  <span className={styles.barLabel}>8kW</span>
                </div>
                <div className={styles.barWrapper}>
                  <div className={`${styles.bar} ${styles.bar4}`}>
                    <span className={styles.barValue}>90%+</span>
                  </div>
                  <span className={styles.barLabel}>10kW+</span>
                </div>
              </div>

              <p className={styles.chartFooterText}>
                Monocrystalline and Hybrid solar systems designed for maximum energy yield across Amravati &amp; Maharashtra.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
