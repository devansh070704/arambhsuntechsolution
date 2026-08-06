"use client";
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Phone, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';
import styles from '@/components/Hero.module.css';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceRequested: 'installation',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', email: '', serviceRequested: 'installation', message: '' });
    }, 4000);
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
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-primary)' }}>Location</h3>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-light)' }}>
                      Swift Solar, Amravati, Maharashtra, India
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

                  <button type="submit" className={styles.submitButton}>
                    Submit Request
                    <Send size={16} style={{ marginLeft: 8 }} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
