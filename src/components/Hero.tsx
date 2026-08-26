"use client";
import React, { useState } from 'react';
import styles from './Hero.module.css';
import { ArrowRight, Star, ShieldCheck, Sun, Zap, Award, Sparkles, Send, Video, Wrench } from 'lucide-react';
import Link from 'next/link';
import { sendLeadToAppsScript } from '@/lib/sendLead';

export default function Hero() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    systemType: 'solar',
    message: ''
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
      setFormData({ name: '', phone: '', email: '', city: '', systemType: 'solar', message: '' });
    }, 5000);
  };

  return (
    <section id="home" className={styles.heroSection}>
      <div className={styles.backgroundOverlay}>
        <img
          src="/images/hero_solar.jpg"
          alt="Aarambh Suntech Solution Solar CCTV Electrical Setup"
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
              Solar Installation, CCTV & Electrical Services in Pune
            </div>

            <h1 className={styles.title}>
              Solar Panel, CCTV<br />
              <span className={styles.highlightText}>&amp; Electrical — One Company.</span>
            </h1>

            <p className={styles.subtitle}>
              Aarambh Suntech Solution is Pune&apos;s only company offering rooftop solar installation, CCTV camera setup, and electrical contracting together. PM Surya Ghar subsidy up to ₹78,000. Serving Khed, Shiroli, Chakan &amp; Pune.
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
                <span className={styles.badgeRatingText}>5.0 Trusted Technical Team</span>
              </div>
              <div className={styles.badgeDivider}></div>
              <div className={styles.badgeStats}>
                <span className={styles.badgeStatNum}>100%</span>
                <span className={styles.badgeStatLabel}>Quality &amp; Safety Guaranteed</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className={styles.formWrapper}>
            <div className={styles.formGlassCard}>
              <h3 className={styles.formTitle}>Get Free Site Assessment</h3>
              <p className={styles.formSubtitle}>Get expert technical advice for Solar, CCTV or Electrical Works within 24 hours.</p>

              {submitted ? (
                <div className={styles.successMessage}>
                  <div className={styles.successIcon}>✓</div>
                  <h4>Request Received!</h4>
                  <p>Anil Korede &amp; Vaibhav Dhanwat will contact you shortly to schedule your site inspection.</p>
                </div>
              ) : (
                <form className={styles.contactForm} onSubmit={handleSubmit}>
                  <div className={styles.inputGroup}>
                    <label htmlFor="hero-name" className={styles.label}>Your Name</label>
                    <input
                      id="hero-name"
                      type="text"
                      required
                      placeholder="Aniket Patil"
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
                    <label htmlFor="hero-email" className={styles.label}>Email Address (Optional)</label>
                    <input
                      id="hero-email"
                      type="email"
                      placeholder="aniket@example.com"
                      className={styles.input}
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>

                  <div className={styles.inputGroup}>
                    <label htmlFor="hero-city" className={styles.label}>Your Location / Village</label>
                    <input
                      id="hero-city"
                      type="text"
                      required
                      placeholder="Shiroli / Khed / Chakan / Pune"
                      className={styles.input}
                      value={formData.city}
                      onChange={(e) => setFormData({...formData, city: e.target.value})}
                    />
                  </div>

                  <div className={styles.inputGroup}>
                    <label htmlFor="hero-type" className={styles.label}>Required Service</label>
                    <select
                      id="hero-type"
                      className={styles.select}
                      value={formData.systemType}
                      onChange={(e) => setFormData({...formData, systemType: e.target.value})}
                    >
                      <option value="solar">☀️ Solar Rooftop Solution</option>
                      <option value="cctv">📹 CCTV Security Camera Setup</option>
                      <option value="electrical">⚡ Industrial &amp; Residential Electrical Works</option>
                      <option value="maintenance">🛠️ Maintenance &amp; Technical Repair</option>
                    </select>
                  </div>

                  <div className={styles.inputGroup}>
                    <label htmlFor="hero-msg" className={styles.label}>Message / Project Details</label>
                    <textarea
                      id="hero-msg"
                      rows={2}
                      placeholder="e.g. Need 5kW solar rooftop system or 4 CCTV cameras..."
                      className={styles.input}
                      style={{ resize: 'none' }}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
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

      {/* Trust & Services Partner Bar */}
      <div className={styles.partnersBar}>
        <div className={styles.partnersContainer}>
          <div className={styles.partnerLogo}>
            <Sun size={20} className={styles.logoSvg} />
            <span>Solar Power Systems</span>
          </div>
          <div className={styles.partnerLogo}>
            <Video size={20} className={styles.logoSvg} />
            <span>HD &amp; IP CCTV Solutions</span>
          </div>
          <div className={styles.partnerLogo}>
            <Wrench size={20} className={styles.logoSvg} />
            <span>Turnkey Electrical Works</span>
          </div>
          <div className={styles.partnerLogo}>
            <ShieldCheck size={20} className={styles.logoSvg} />
            <span>Certified Safety Components</span>
          </div>
          <div className={styles.partnerLogo}>
            <Award size={20} className={styles.logoSvg} />
            <span>Sawant Complex, Shiroli</span>
          </div>
        </div>
      </div>
    </section>
  );
}
