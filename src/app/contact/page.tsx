"use client";
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Phone, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';
import styles from '@/components/Hero.module.css';
import { sendLeadToAppsScript } from '@/lib/sendLead';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceRequested: 'installation',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await sendLeadToAppsScript({
      ...formData,
      formSource: 'Contact Us Page Form'
    });
    setIsSubmitting(false);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', email: '', serviceRequested: 'installation', message: '' });
    }, 5000);
  };

  return (
    <main>
      <Navbar />

      {/* Page Header */}
      <section style={{
        paddingTop: '140px',
        paddingBottom: '60px',
        backgroundColor: 'var(--color-primary)',
        color: 'white',
        textAlign: 'center'
      }}>
        <div className="container">
          <span style={{
            fontSize: '0.8rem',
            textTransform: 'uppercase',
            color: 'var(--color-accent-sky)',
            fontWeight: 700,
            letterSpacing: '2px',
            display: 'block',
            marginBottom: '10px'
          }}>
            Get In Touch
          </span>
          <h1 className="page-header-title">
            Contact Swift Solar
          </h1>
          <p style={{ maxWidth: '650px', margin: '0 auto', fontSize: '1rem', color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.6 }}>
            Have questions about solar panel installation, maintenance, repair, or cleaning? Reach out to our Amravati team today.
          </p>
        </div>
      </section>

      {/* Contact Form & Details Grid */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-white)' }}>
        <div className="container">
          <div className="grid-responsive-2" style={{ alignItems: 'start' }}>
            {/* Left Info Column */}
            <div>
              <span style={{
                fontSize: '0.8rem',
                textTransform: 'uppercase',
                color: 'var(--color-accent-sky)',
                fontWeight: 700,
                letterSpacing: '2px',
                display: 'block',
                marginBottom: '10px'
              }}>
                Contact Details
              </span>
              <h2 className="section-responsive-title" style={{ marginBottom: '16px' }}>
                We Are Here To Help You Go Solar
              </h2>
              <p style={{ color: 'var(--color-text-light)', fontSize: '0.98rem', lineHeight: 1.65, marginBottom: '28px' }}>
                Whether you need a new Monocrystalline or Hybrid system installed, or need cleaning and maintenance for an existing setup, we are at your service.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    backgroundColor: 'var(--color-bg-accent)',
                    color: 'var(--color-accent-sky)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-primary)' }}>Phone / Quick Call</h3>
                    <a href="tel:+918149217116" style={{ fontSize: '0.95rem', color: 'var(--color-accent-sky)', fontWeight: 600 }}>
                      +91 81492 17116
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    backgroundColor: 'var(--color-bg-accent)',
                    color: 'var(--color-accent-sky)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-primary)' }}>Email Address</h3>
                    <a href="mailto:lokesh.nistane1@gmail.com" style={{ fontSize: '0.95rem', color: 'var(--color-accent-sky)', fontWeight: 600, wordBreak: 'break-all' }}>
                      lokesh.nistane1@gmail.com
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    backgroundColor: 'var(--color-bg-accent)',
                    color: 'var(--color-accent-sky)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                    </svg>
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-primary)' }}>Instagram Profile</h3>
                    <a
                      href="https://www.instagram.com/swiftsolar.co.in?utm_source=qr&igsh=Y3p6bDF6bHUyYjhk"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ fontSize: '0.95rem', color: 'var(--color-accent-sky)', fontWeight: 600 }}
                    >
                      @swiftsolar.co.in
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    backgroundColor: 'var(--color-bg-accent)',
                    color: 'var(--color-accent-sky)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-primary)' }}>Location</h3>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-light)' }}>
                      SH242, Gadge Nagar, Amravati, Maharashtra, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Contact Form Column */}
            <div style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--border-radius-lg)',
              padding: '36px 30px',
              color: 'var(--color-primary)',
              boxShadow: 'var(--shadow-md)',
              border: '1px solid rgba(10, 28, 62, 0.08)'
            }}>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '6px' }}>
                Send Us a Message
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--color-text-light)', marginBottom: '20px' }}>
                Fill in your details and our team will get back to you within 24 hours.
              </p>

              {submitted ? (
                <div style={{
                  textAlign: 'center',
                  padding: '30px 10px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '14px'
                }}>
                  <CheckCircle2 size={44} color="var(--color-accent-green)" />
                  <h4 style={{ fontSize: '1.25rem', color: 'var(--color-primary)', fontWeight: 700 }}>Message Sent!</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-text-light)' }}>
                    Thank you for reaching out to Swift Solar. We will call you back shortly.
                  </p>
                </div>
              ) : (
                <form className={styles.contactForm} onSubmit={handleSubmit}>
                  <div className={styles.inputGroup}>
                    <label htmlFor="contact-name" className={styles.label}>Your Name</label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="Rahul Sharma"
                      className={styles.input}
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>

                  <div className={styles.inputGroup}>
                    <label htmlFor="contact-phone" className={styles.label}>Phone Number</label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      className={styles.input}
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>

                  <div className={styles.inputGroup}>
                    <label htmlFor="contact-email" className={styles.label}>Email Address</label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="rahul@example.com"
                      className={styles.input}
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>

                  <div className={styles.inputGroup}>
                    <label htmlFor="contact-service" className={styles.label}>Required Service</label>
                    <select
                      id="contact-service"
                      className={styles.select}
                      value={formData.serviceRequested}
                      onChange={(e) => setFormData({...formData, serviceRequested: e.target.value})}
                    >
                      <option value="installation">Solar Panel Installation</option>
                      <option value="maintenance">Solar Panel Maintenance</option>
                      <option value="repair">Solar Panel Repair</option>
                      <option value="cleaning">Solar Panel Cleaning</option>
                    </select>
                  </div>

                  <div className={styles.inputGroup}>
                    <label htmlFor="contact-msg" className={styles.label}>Message / Location Details</label>
                    <textarea
                      id="contact-msg"
                      rows={3}
                      placeholder="Tell us about your requirement..."
                      className={styles.input}
                      style={{ resize: 'none' }}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
                  </div>

                  <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
                    {isSubmitting ? 'Sending Request...' : 'Submit Request'}
                    <Send size={16} style={{ marginLeft: 8 }} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Location Embed Section */}
      <section style={{ backgroundColor: 'var(--color-bg-light)', padding: '60px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '28px' }}>
            <span style={{
              fontSize: '0.8rem',
              textTransform: 'uppercase',
              color: 'var(--color-accent-sky)',
              fontWeight: 700,
              letterSpacing: '2px',
              display: 'block',
              marginBottom: '8px'
            }}>
              Location & Map
            </span>
            <h2 className="section-responsive-title">Find Us On Google Maps</h2>
            <p style={{ color: 'var(--color-text-light)', fontSize: '0.95rem', marginTop: '6px' }}>
              Gadge Nagar, Amravati, Maharashtra
            </p>
          </div>
          <div style={{
            width: '100%',
            height: '420px',
            borderRadius: 'var(--border-radius-lg)',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-md)',
            border: '1px solid rgba(10, 28, 62, 0.08)'
          }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3726.1034410370908!2d77.7640144!3d20.948360700000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd6a33679a3396b%3A0x2ab8b0262af04e1e!2sSH242%2C%20Gadge%20Nagar%2C%20Amravati%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1786083531145!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
