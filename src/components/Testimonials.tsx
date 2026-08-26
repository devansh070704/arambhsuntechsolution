"use client";
import React from 'react';
import styles from './Testimonials.module.css';
import { Star } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Rajesh Kulkarni',
      role: 'Homeowner, Shiroli (Khed)',
      quote: 'Aarambh Suntech Solution installed a 5kW solar rooftop system at my bungalow. My electricity bill dropped from ₹3,200 to under ₹200! Anil & Vaibhav handled the MSEDCL net metering and subsidy smoothly.',
      rating: 5,
    },
    {
      name: 'Priya Deshmukh',
      role: 'Shop Owner, Chakan',
      quote: 'Excellent CCTV camera installation! They installed 4 HD cameras with full night vision at my shop in Chakan. Mobile phone live viewing works seamlessly. Very reliable local team.',
      rating: 5,
    },
    {
      name: 'Suresh Khadse',
      role: 'Factory Manager, Khed Industrial Area',
      quote: 'Complete electrical panel wiring and maintenance done for our manufacturing unit. Prompt service, professional technical execution, and fair pricing. Highly recommended!',
      rating: 5,
    }
  ];

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-light)' }}>
      <div className="container">
        <ScrollReveal direction="up" delay={0}>
          <div className={styles.header}>
            <span className={styles.preTitle}>Customer Reviews</span>
            <h2 className={styles.title}>Real Savings. Real Security. Real Results.</h2>
            <p className={styles.subtitle}>
              Hear from our customers across Shiroli, Khed, Chakan &amp; Pune who trust Aarambh Suntech Solution.
            </p>
          </div>
        </ScrollReveal>

        <div className={styles.grid}>
          {reviews.map((rev, idx) => (
            <ScrollReveal key={idx} direction="up" delay={idx * 120}>
              <div className={`${styles.card} hover-lift`}>
                <div className={styles.ratingRow}>
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#EAB308" color="#EAB308" />
                  ))}
                </div>

                <blockquote className={styles.quoteText}>
                  &ldquo;{rev.quote}&rdquo;
                </blockquote>

                <div className={styles.cardFooter}>
                  <div className={styles.avatarWrapper}>
                    <div style={{
                      width: '100%',
                      height: '100%',
                      background: 'var(--color-accent-sky)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '1.1rem',
                      fontWeight: '800'
                    }}>
                      {rev.name.charAt(0)}
                    </div>
                  </div>
                  <div className={styles.userMeta}>
                    <cite className={styles.userName}>{rev.name}</cite>
                    <span className={styles.userRole}>{rev.role}</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
