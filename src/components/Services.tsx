"use client";
import React, { useState } from 'react';
import styles from './Services.module.css';
import { ChevronDown, ArrowRight, Wrench, Video, Zap, Sun } from 'lucide-react';
import Link from 'next/link';

const SERVICES_DATA = [
  {
    id: 1,
    title: '☀️ Solar Panel Installation',
    icon: Sun,
    description: 'On-grid and off-grid rooftop solar installation for homes, commercial complexes, and factories across Pune & Maharashtra. PM Surya Ghar subsidy assistance up to ₹78,000.',
  },
  {
    id: 2,
    title: '📹 CCTV Camera Security Setup',
    icon: Video,
    description: 'Wired and wireless Hikvision, CP Plus, and Dahua HD/IP security camera setup for homes, shops, offices, and factories in Pune & Khed with mobile live viewing.',
  },
  {
    id: 3,
    title: '⚡ Turnkey Electrical Contracting',
    icon: Zap,
    description: 'Certified residential home wiring, commercial electrical panel installation, three-phase industrial connections, safety earthing, and electrical maintenance contracts.',
  },
  {
    id: 4,
    title: '🛠️ Maintenance, Cleaning & AMC',
    icon: Wrench,
    description: 'Solar panel cleaning, solar inverter repair, CCTV DVR/NVR fault repair, and Annual Maintenance Contracts (AMC) to keep your systems performing at peak efficiency.',
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
              Solar, CCTV &amp; Turnkey Electrical Services
            </h2>
            <p className={styles.textDesc}>
              Aarambh Suntech Solution provides complete lifecycle support — from precision installation of Solar, CCTV, and Electrical systems to ongoing maintenance and repairs across Shiroli, Khed &amp; Pune.
            </p>
            <Link href="/services" className={styles.btnLink}>
              View All Services <ArrowRight size={18} style={{ marginLeft: 8 }} />
            </Link>

            {/* Side-by-side thumbnails */}
            <div className={styles.thumbnailGrid}>
              <div className={styles.thumbWrapper}>
                <img
                  src="/images/cctv_installation.jpg"
                  alt="CCTV Camera Installation Pune"
                  className={styles.thumbImage}
                />
                <span className={styles.thumbLabel}>CCTV Security</span>
              </div>
              <div className={styles.thumbWrapper}>
                <img
                  src="/images/electrical_works.jpg"
                  alt="Turnkey Electrical Contracting Pune"
                  className={styles.thumbImage}
                />
                <span className={styles.thumbLabel}>Electrical Works</span>
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
