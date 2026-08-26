"use client";
import React from 'react';
import styles from './Workflow.module.css';
import { ScrollReveal } from './ScrollReveal';

export default function Workflow() {
  const steps = [
    {
      num: '01',
      title: 'Free Site Survey',
      desc: 'Our solar expert visits your site, checks roof structure, shading, and electricity bills to design the perfect system.',
      img: '/images/workflow_step.jpg',
    },
    {
      num: '02',
      title: 'Custom System Design',
      desc: 'We prepare a detailed solar proposal specifying panel types (Monocrystalline, Polycrystalline, Hybrid) and capacity.',
      img: '/images/hero_solar.jpg',
    },
    {
      num: '03',
      title: 'Professional Installation',
      desc: 'Our certified team installs premium panels, inverter, and wiring in 1–2 days with highest safety standards.',
      img: '/images/solar_engineer.jpg',
    },
    {
      num: '04',
      title: 'Grid Connection & Maintenance',
      desc: 'We complete grid integration and provide continuous cleaning and preventative maintenance services.',
      img: '/images/solar_commercial.jpg',
    },
  ];

  return (
    <section id="process" className="section-padding" style={{ backgroundColor: 'var(--color-bg-white)' }}>
      <div className="container">
        <ScrollReveal direction="up" delay={0}>
          <div className={styles.header}>
            <span className={styles.preTitle}>Our Simple Process</span>
            <h2 className={styles.title}>How Aarambh Suntech Works: Survey To Savings</h2>
            <p className={styles.subtitle}>
              A transparent, smooth journey from your first inquiry to having a live solar system on your rooftop.
            </p>
          </div>
        </ScrollReveal>

        <div className={styles.grid}>
          {steps.map((step, idx) => (
            <ScrollReveal key={idx} direction="up" delay={idx * 100}>
              <div className={`${styles.stepCard} hover-lift`}>
                <div className={styles.imageContainer}>
                  <img
                    src={step.img}
                    alt={step.title}
                    className={styles.stepImage}
                  />
                  <div className={styles.stepBadge}>{step.num}</div>
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDesc}>{step.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
