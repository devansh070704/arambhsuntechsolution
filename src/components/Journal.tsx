import React from 'react';
import styles from './Journal.module.css';
import { ArrowRight, Calendar } from 'lucide-react';

export default function Journal() {
  const articles = [
    {
      title: 'The Future of Solar Microgrids in Residential Communities',
      desc: 'Discover how neighborhood-shared photovoltaic grids are lowering utility overheads by up to 50% through decentralized battery pools.',
      date: 'May 28, 2026',
      tag: 'Microgrids',
      img: '/images/journal1.png',
    },
    {
      title: 'Top 5 Maintenance Tips to Optimize Solar Panel Lifespans',
      desc: 'A simple bi-annual maintenance routine of clearing organic shading, testing inverters, and clean washes ensures maximum technical yield.',
      date: 'May 14, 2026',
      tag: 'Guides',
      img: '/images/journal2.png',
    },
    {
      title: 'Why Hybrid Storage Systems are Dominating Clean Energy in 2026',
      desc: 'Analyzing the high performance metrics of next-generation solid-state and LFP lithium storage modules in grid backup systems.',
      date: 'April 30, 2026',
      tag: 'Battery Tech',
      img: '/images/journal3.png',
    }
  ];

  return (
    <section id="journal" className="section-padding" style={{ backgroundColor: 'var(--color-bg-white)' }}>
      <div className="container">
        <div className={styles.headerRow}>
          <div>
            <span className={styles.preTitle}>Our Research & Insight</span>
            <h2 className={styles.title}>Latest Journal</h2>
          </div>
          <a href="#journal" className={styles.headerBtn}>
            View All Articles <ArrowRight size={18} style={{ marginLeft: 8 }} />
          </a>
        </div>

        <div className={styles.grid}>
          {articles.map((art, idx) => (
            <article key={idx} className={`${styles.card} hover-lift`}>
              <div className={styles.imageContainer}>
                <img 
                  src={art.img} 
                  alt={art.title} 
                  className={styles.image}
                />
                <span className={styles.tag}>{art.tag}</span>
              </div>
              <div className={styles.content}>
                <div className={styles.metaRow}>
                  <Calendar size={14} className={styles.metaIcon} />
                  <span>{art.date}</span>
                </div>
                <h3 className={styles.cardTitle}>{art.title}</h3>
                <p className={styles.cardDesc}>{art.desc}</p>
                <a href="#journal" className={styles.readMore}>
                  Read Full Article <ArrowRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
