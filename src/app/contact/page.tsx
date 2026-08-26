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
    serviceRequested: 'solar',
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
      setFormData({ name: '', phone: '', email: '', serviceRequested: 'solar', message: '' });
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
            Sawant Complex • Shiroli, Khed, Pune
          </span>
          <h1 className="page-header-title">
            Contact Aarambh Suntech Solution
          </h1>
          <p style={{ maxWidth: '650px', margin: '0 auto', fontSize: '1rem', color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.6 }}>
            Reach out to Anil Korede or Vaibhav Dhanwat for expert consultation on Solar Power Systems, CCTV Security Cameras, and Turnkey Electrical Works.
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
                Proprietor Contacts
              </span>
              <h2 className="section-responsive-title" style={{ marginBottom: '16px' }}>
                We Are Ready To Serve You
              </h2>
              <p style={{ color: 'var(--color-text-light)', fontSize: '0.98rem', lineHeight: 1.65, marginBottom: '28px' }}>
                Visit our office at Sawant Complex, Shiroli or call our team for on-site technical inspection, solar subsidy guidance, or CCTV quote.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {/* Proprietor 1 */}
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    backgroundColor: 'var(--color-bg-accent)',
                    color: 'var(--color-primary)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Phone size={20} color="#D49B27" />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-primary)' }}>Pro. Anil Korede</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginTop: '4px' }}>
                      <a href="tel:+918850050126" style={{ fontSize: '0.95rem', color: 'var(--color-accent-sky)', fontWeight: 700, textDecoration: 'none' }}>
                        +91 88500 50126
                      </a>
                      <a href="tel:+917666813545" style={{ fontSize: '0.95rem', color: 'var(--color-accent-sky)', fontWeight: 700, textDecoration: 'none' }}>
                        +91 76668 13545
                      </a>
                    </div>
                  </div>
                </div>

                {/* Proprietor 2 */}
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    backgroundColor: 'var(--color-bg-accent)',
                    color: 'var(--color-primary)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Phone size={20} color="#D49B27" />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-primary)' }}>Pro. Vaibhav Dhanwat</h3>
                    <a href="tel:+919921440488" style={{ fontSize: '0.95rem', color: 'var(--color-accent-sky)', fontWeight: 700, textDecoration: 'none', display: 'block', marginTop: '4px' }}>
                      +91 99214 40488
                    </a>
                  </div>
                </div>

                {/* Office Location */}
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    backgroundColor: 'var(--color-bg-accent)',
                    color: 'var(--color-primary)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <MapPin size={20} color="#D49B27" />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-primary)' }}>Office Address</h3>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-light)', marginTop: '4px', lineHeight: 1.5 }}>
                      Shop No. 1, Gut No. 592, Property No. 118, Sawant Complex, Ground Floor, Ektanagar Paight Phata, Shiroli, Taluka Khed, District Pune - 410505
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
              border: '1px solid rgba(12, 27, 38, 0.08)'
            }}>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '6px' }}>
                Send Us a Message
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--color-text-light)', marginBottom: '20px' }}>
                Fill in your details and our technical team will contact you within 24 hours.
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
                  <h4 style={{ fontSize: '1.25rem', color: 'var(--color-primary)', fontWeight: 700 }}>Request Submitted!</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-text-light)' }}>
                    Thank you for contacting Aarambh Suntech Solution. We will call you back shortly.
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
                      placeholder="Aniket Patil"
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
                    <label htmlFor="contact-email" className={styles.label}>Email Address (Optional)</label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="aniket@example.com"
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
                      <option value="solar">☀️ Solar Rooftop Solution</option>
                      <option value="cctv">📹 CCTV Security Camera Setup</option>
                      <option value="electrical">⚡ Industrial &amp; Residential Electrical Works</option>
                      <option value="maintenance">🛠️ Technical Repair &amp; Maintenance</option>
                    </select>
                  </div>

                  <div className={styles.inputGroup}>
                    <label htmlFor="contact-msg" className={styles.label}>Message / Location Details</label>
                    <textarea
                      id="contact-msg"
                      rows={3}
                      placeholder="Tell us about your requirements (e.g. 5kW solar, 4 CCTV cameras, home wiring)..."
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
              Office Map Location
            </span>
            <h2 className="section-responsive-title">Find Us On Google Maps</h2>
            <p style={{ color: 'var(--color-text-light)', fontSize: '0.95rem', marginTop: '6px' }}>
              Sawant Complex, Ektanagar Paight Phata, Shiroli, Taluka Khed, District Pune - 410505
            </p>
          </div>
          <div style={{
            width: '100%',
            height: '420px',
            borderRadius: 'var(--border-radius-lg)',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-md)',
            border: '1px solid rgba(12, 27, 38, 0.08)'
          }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15104.978292850028!2d73.872412!3d18.847124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b77c5d555555%3A0x1111111111111111!2sShiroli%2C%20Maharashtra%20410505!5e0!3m2!1sen!2sin!4v1787748000000!5m2!1sen!2sin"
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
