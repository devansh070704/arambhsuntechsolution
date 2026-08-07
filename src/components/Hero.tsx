"use client";
import React, { useState } from 'react';
import styles from './Hero.module.css';
import { ArrowRight, Star, ShieldCheck, Sun, Zap, Award, Sparkles, Send } from 'lucide-react';
import Link from 'next/link';
import { sendLeadToAppsScript } from '@/lib/sendLead';

export default function Hero() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    systemType: 'solar'
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await sendLeadToAppsScript({
      ...formData,
      formSource: 'Homepage Hero Consultation Form'
    });
    setIsSubmitting(false);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', city: '', systemType: 'solar' });
    }, 5000);
  };

  return (
    <section id="home" className={styles.heroSection}>
      <div className={styles.backgroundOverlay}>
        <img
          src="/images/hero_solar.jpg"
          alt="Swift Solar Rooftop Installation"
          className={styles.heroImage}
        />
        <div className={styles.overlayGradient}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.twoColumnGrid}>
          {/* Left Column: Typography & Badges */}
          <div className={styles.contentWrapper}>
            <div className={styles.tagline}>
              <span className={styles.tagDot}></span>
              Amravati&apos;s Trusted Solar Specialist • Est. 2023
            </div>

            <h1 className={styles.title}>
              Power Your Home<br />
              <span className={styles.highlightText}>With the Sun.</span>
            </h1>

            <p className={styles.subtitle}>
              Swift Solar engineers high-efficiency solar energy systems custom-tailored to power homes, businesses, and industrial units across Amravati &amp; Maharashtra.
            </p>

            <div className={styles.ctaGroup}>
              <Link href="/services" className={styles.primaryCta}>
                Explore Services
                <div className={styles.ctaIcon}>
                  <ArrowRight size={18} />
                </div>
              </Link>
            </div>

            {/* Floating Rating Badge */}
            <div className={styles.ratingBadge}>
              <div className={styles.badgeStars}>
                <div className={styles.starIcons}>
                  <Star size={16} fill="#EAB308" color="#EAB308" />
                  <Star size={16} fill="#EAB308" color="#EAB308" />
                  <Star size={16} fill="#EAB308" color="#EAB308" />
                  <Star size={16} fill="#EAB308" color="#EAB308" />
                  <Star size={16} fill="#EAB308" color="#EAB308" />
                </div>
                <span className={styles.badgeRatingText}>5.0 Customer Rating</span>
              </div>
              <div className={styles.badgeDivider}></div>
              <div className={styles.badgeStats}>
                <span className={styles.badgeStatNum}>500+</span>
                <span className={styles.badgeStatLabel}>Solar Installations Delivered</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className={styles.formWrapper}>
            <div className={styles.formGlassCard}>
              <h3 className={styles.formTitle}>Request Free Consultation</h3>
              <p className={styles.formSubtitle}>Get an expert solar evaluation &amp; technical assessment in 24 hours.</p>

              {submitted ? (
                <div className={styles.successMessage}>
                  <div className={styles.successIcon}>✓</div>
                  <h4>Request Received!</h4>
                  <p>Our solar engineering team will call you shortly to discuss your installation requirements.</p>
                </div>
              ) : (
                <form className={styles.contactForm} onSubmit={handleSubmit}>
                  <div className={styles.inputGroup}>
                    <label htmlFor="hero-name" className={styles.label}>Your Name</label>
                    <input
                      id="hero-name"
                      type="text"
                      required
                      placeholder="Rahul Sharma"
                      className={styles.input}
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>

                  <div className={styles.inputGroup}>
                    <label htmlFor="hero-phone" className={styles.label}>Phone Number</label>
                    <input
                      id="hero-phone"
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      className={styles.input}
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>

                  <div className={styles.inputGroup}>
                    <label htmlFor="hero-city" className={styles.label}>Your Location</label>
                    <input
                      id="hero-city"
                      type="text"
                      required
                      placeholder="Amravati, Maharashtra"
                      className={styles.input}
                      value={formData.city}
                      onChange={(e) => setFormData({...formData, city: e.target.value})}
                    />
                  </div>

                  <div className={styles.inputGroup}>
                    <label htmlFor="hero-type" className={styles.label}>System Type</label>
                    <select
                      id="hero-type"
                      className={styles.select}
                      value={formData.systemType}
                      onChange={(e) => setFormData({...formData, systemType: e.target.value})}
                    >
                      <option value="monocrystalline">Monocrystalline Panels</option>
                      <option value="polycrystalline">Polycrystalline Panels</option>
                      <option value="hybrid">Hybrid Solar System</option>
                      <option value="solar">On-Grid Solar System</option>
                    </select>
                  </div>

                  <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
                    {isSubmitting ? 'Sending Request...' : 'Get Free Consultation'}
                    <Send size={16} style={{ marginLeft: 8 }} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Generic Trust Partner Logos Bar */}
      <div className={styles.trustBar}>
        <div className={styles.trustContainer}>
          <span className={styles.trustTitle}>Engineering Excellence</span>
          <div className={styles.logosRow}>
            <div className={styles.partnerLogo}>
              <Sun size={20} className={styles.logoSvg} />
              <span>High Efficiency</span>
            </div>
            <div className={styles.partnerLogo}>
              <ShieldCheck size={20} className={styles.logoSvg} />
              <span>Certified Components</span>
            </div>
            <div className={styles.partnerLogo}>
              <Zap size={20} className={styles.logoSvg} />
              <span>25+ Year Lifespan</span>
            </div>
            <div className={styles.partnerLogo}>
              <Award size={20} className={styles.logoSvg} />
              <span>Tier-1 Modules</span>
            </div>
            <div className={styles.partnerLogo}>
              <Sparkles size={20} className={styles.logoSvg} />
              <span>Est. 2023</span>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Instagram Banner Strip */}
      <div className={styles.instagramStrip}>
        <div className={styles.instagramContainer}>
          <div className={styles.instagramLeft}>
            <div className={styles.instagramIconBadge}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </div>
            <div className={styles.instagramText}>
              <span className={styles.instagramTitle}>Follow Swift Solar on Instagram</span>
              <span className={styles.instagramHandle}>@swiftsolar.co.in • See live rooftop installations, project videos &amp; clean energy tips</span>
            </div>
          </div>
          <a
            href="https://www.instagram.com/swiftsolar.co.in?utm_source=qr&igsh=Y3p6bDF6bHUyYjhk"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.instagramBtn}
          >
            <span>Follow @swiftsolar.co.in</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
