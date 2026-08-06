"use client";
import React, { useState } from 'react';
import styles from './Services.module.css';
import { ChevronDown, ArrowRight, Wrench, ShieldCheck, Sparkles, Sun } from 'lucide-react';
import Link from 'next/link';

const SERVICES_DATA = [
  {
    id: 1,
    title: 'Solar Panel Installation',
    icon: Sun,
    description: 'Turnkey installation of Monocrystalline, Polycrystalline, On-Grid, and Hybrid solar systems designed specifically for maximum sunlight yield.',
  },
  {
    id: 2,
    title: 'Solar Panel Maintenance',
    icon: ShieldCheck,
    description: 'Comprehensive health audits, inverter checks, wiring inspections, and preventative maintenance to ensure peak generation output.',
  },
  {
    id: 3,
    title: 'Solar Panel Repair',
    icon: Wrench,
    description: 'Fast, reliable diagnostic and corrective repairs for degraded modules, faulty inverters, tripped breakers, and wiring issues.',
  },
  {
    id: 4,
    title: 'Solar Panel Cleaning',
    icon: Sparkles,
    description: 'Specialized chemical-free cleaning services to remove dust, bird droppings, and urban debris, boosting energy production efficiency by up to 30%.',
  }
];

export default function Services() {
  const [activeId, setActiveId] = useState<number>(1);

  return (
    <section id="services" className="section-padding">
      <div className="container">
        <div className={styles.wrapper}>
          {/* Left Column: Visual assets */}
          <div className={styles.leftCol}>
            <span className={styles.preTitle}>Our Core Services</span>
            <h2 className={styles.sectionTitle}>
              Professional Solar Services &amp; Maintenance
            </h2>
            <p className={styles.textDesc}>
              Swift Solar provides complete lifecycle support for solar power systems — from precision installation of Monocrystalline and Hybrid modules to ongoing cleaning and maintenance.
            </p>
            <Link href="/contact" className={styles.btnLink}>
              Request Service <ArrowRight size={18} style={{ marginLeft: 8 }} />
            </Link>

            {/* Side-by-side thumbnails */}
            <div className={styles.thumbnailGrid}>
              <div className={styles.thumbWrapper}>
                <img
                  src="/images/hero_solar.jpg"
                  alt="Solar Installation"
                  className={styles.thumbImage}
                />
                <span className={styles.thumbLabel}>Installation</span>
              </div>
              <div className={styles.thumbWrapper}>
                <img
                  src="/images/solar_engineer.jpg"
                  alt="Solar Maintenance and Cleaning"
                  className={styles.thumbImage}
                />
                <span className={styles.thumbLabel}>Maintenance &amp; Care</span>
              </div>
            </div>
          </div>

          {/* Right Column: Accordion services list */}
          <div className={styles.rightCol}>
            <div className={styles.accordionList}>
              {SERVICES_DATA.map((service) => {
                const IconComponent = service.icon;
                const isOpen = activeId === service.id;

                return (
                  <div
                    key={service.id}
                    className={`${styles.accordionItem} ${isOpen ? styles.open : ''}`}
                    onClick={() => setActiveId(service.id)}
                  >
                    <div className={styles.accordionHeader}>
                      <div className={styles.accordionTitleCol}>
                        <div className={styles.serviceIconWrapper}>
                          <IconComponent size={20} />
                        </div>
                        <h3 className={styles.accordionTitle}>{service.title}</h3>
                      </div>
                      <button
                        className={styles.arrowButton}
                        aria-label={`Toggle ${service.title}`}
                      >
                        <ChevronDown size={20} className={styles.chevronIcon} />
                      </button>
                    </div>

                    <div className={styles.accordionContent}>
                      <p className={styles.accordionDesc}>{service.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
