"use client";
import React from 'react';
import styles from './Testimonials.module.css';
import { Star } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Rajesh Kulkarni',
      role: 'Homeowner, Amravati',
      quote: 'Swift Solar installed a 5kW system on my home. My electricity bill dropped significantly! The team was professional and the installation was done in a single day.',
      rating: 5,
    },
    {
      name: 'Priya Deshmukh',
      role: 'Restaurant Owner, Amravati',
      quote: 'Excellent service from start to finish. They handled all the technical setup and cleaning. Our commercial energy bills have reduced drastically. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Suresh Khadse',
      role: 'Property Owner, Vidarbha',
      quote: 'The solar maintenance and cleaning service has kept our solar output at maximum efficiency. Swift Solar took care of everything professionally.',
      rating: 5,
    }
  ];

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-light)' }}>
      <div className="container">
        <ScrollReveal direction="up" delay={0}>
          <div className={styles.header}>
            <span className={styles.preTitle}>Customer Reviews</span>
            <h2 className={styles.title}>Real Savings. Real People. Real Results.</h2>
            <p className={styles.subtitle}>
              Hear from our customers across Amravati &amp; Vidarbha who are enjoying clean, reliable solar energy.
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
