"use client";
import React, { useState } from 'react';
import styles from './Faq.module.css';
import { ChevronDown } from 'lucide-react';

const FAQS_DATA = [
  {
    q: '1. What is the lifespan of solar panels?',
    a: 'Most solar panels last for 25–30 years.',
  },
  {
    q: '2. What are the benefits of installing solar panels?',
    a: 'Solar panels reduce your electricity bill and offer you rebates on your tax.',
  },
  {
    q: '3. Do solar panels work without sunlight?',
    a: 'Even though you get maximum efficiency on sunny days, electricity still gets produced on cloudy days.',
  },
  {
    q: '4. What types of solar panel systems do you offer?',
    a: 'We offer Solar, Hybrid, Monocrystalline, and Polycrystalline solar panel systems tailored for residential, commercial, and industrial installations.',
  },
  {
    q: '5. How to maintain solar panels?',
    a: 'Clean your solar panels once a month to improve their durability.',
  },
  {
    q: '6. Is getting solar panels for your home costly?',
    a: 'Solar panels are a one-time investment; once you purchase them, you don\'t have to pay for electricity.',
  }
];

export default function Faq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    if (openIdx === idx) {
      setOpenIdx(null);
    } else {
      setOpenIdx(idx);
    }
  };

  return (
    <section id="faqs" className="section-padding" style={{ backgroundColor: 'var(--color-bg-light)' }}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.preTitle}>Frequently Asked Questions</span>
          <h2 className={styles.title}>Everything You Need To Know About Solar</h2>
          <p className={styles.subtitle}>
            Clear answers regarding solar panel lifespans, benefits, maintenance, and system performance.
          </p>
        </div>

        <div className={styles.accordionContainer}>
          {FAQS_DATA.map((faq, idx) => {
            const isOpen = openIdx === idx;

            return (
              <div
                key={idx}
                className={`${styles.faqRow} ${isOpen ? styles.open : ''}`}
                onClick={() => toggleFaq(idx)}
              >
                <div className={styles.faqHeader}>
                  <h3 className={styles.question}>{faq.q}</h3>
                  <button
                    className={styles.toggleBtn}
                    aria-label="Toggle Answer"
                  >
                    <ChevronDown size={20} className={styles.chevron} />
                  </button>
                </div>
                <div className={styles.faqBody}>
                  <p className={styles.answer}>{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
