"use client";
import React, { useState } from 'react';
import styles from './Pricing.module.css';
import { Check, Info } from 'lucide-react';

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      name: 'Starter Plan',
      desc: 'Ideal for small residential properties or apartments looking to offset daytime loads.',
      price: billingPeriod === 'monthly' ? 49 : 39,
      features: [
        'Up to 3.5 kWp Solar Output',
        '5 kWh Lithium Storage Backup',
        'Standard Structural Framing',
        'Dashboard Monitoring App',
        '10-Year Hardware Warranty',
      ],
      cta: 'Choose Starter',
      popular: false,
    },
    {
      name: 'Popular Plan',
      desc: 'Perfect for standard family homes requiring comprehensive off-grid independence.',
      price: billingPeriod === 'monthly' ? 89 : 69,
      features: [
        'Up to 8.0 kWp Solar Output',
        '10 kWh Smart Storage Backup',
        'Rapid Active Grid Backfeeding',
        'Full App & Inverter Sync',
        '25-Year Technical Warranty',
        'Free Staging & Site Review',
      ],
      cta: 'Choose Popular',
      popular: true,
    },
    {
      name: 'Premium Plan',
      desc: 'Designed for commercial buildings, estates, and high-load industrial structures.',
      price: billingPeriod === 'monthly' ? 179 : 139,
      features: [
        'Up to 20 kWp Solar Output',
        '30 kWh Enterprise Battery Rack',
        'Complete Three-Phase Sync',
        'Dedicated Priority Engineering',
        '25-Year Full System Warranty',
        '24/7 Smart SLA Support',
      ],
      cta: 'Choose Premium',
      popular: false,
    }
  ];

  return (
    <section id="pricing" className="section-padding" style={{ backgroundColor: 'var(--color-bg-light)' }}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.preTitle}>Transparent Flat Rates</span>
          <h2 className={styles.title}>Plans Built For Homes & Businesses</h2>
          <p className={styles.subtitle}>
            Select a custom energy subscription that matches your utility scale. Save money from day one.
          </p>

          {/* Billing Switch */}
          <div className="switch-container">
            <button 
              className={`switch-btn ${billingPeriod === 'monthly' ? 'active' : ''}`}
              onClick={() => setBillingPeriod('monthly')}
            >
              Monthly
            </button>
            <button 
              className={`switch-btn ${billingPeriod === 'yearly' ? 'active' : ''}`}
              onClick={() => setBillingPeriod('yearly')}
            >
              Annually (Save 20%)
            </button>
          </div>
        </div>

        <div className={styles.grid}>
          {plans.map((plan, idx) => (
            <div 
              key={idx} 
              className={`${styles.card} ${plan.popular ? styles.popularCard : ''} hover-lift`}
            >
              {plan.popular && (
                <div className={styles.popularTag}>Most Requested</div>
              )}
              
              <div className={styles.cardHeader}>
                <h3 className={styles.planName}>{plan.name}</h3>
                <p className={styles.planDesc}>{plan.desc}</p>
                <div className={styles.priceRow}>
                  <span className={styles.currency}>$</span>
                  <span className={styles.price}>{plan.price}</span>
                  <span className={styles.period}>/month</span>
                </div>
              </div>

              <div className={styles.divider}></div>

              <ul className={styles.featuresList}>
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className={styles.featureItem}>
                    <div className={styles.checkIconWrapper}>
                      <Check size={14} />
                    </div>
                    <span className={styles.featureText}>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`${styles.ctaButton} ${plan.popular ? styles.popularCta : ''}`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
