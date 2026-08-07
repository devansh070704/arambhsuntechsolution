"use client";
import React from 'react';
import styles from './Footer.module.css';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={styles.footerSection}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Column 1: Logo & Motto */}
          <div className={styles.infoCol}>
            <Link href="/" className={styles.logo}>
              <Image
                src="/swift_solar_logo_idle.png"
                alt="Swift Solar"
                width={140}
                height={48}
                className={styles.logoImage}
              />
            </Link>
            <p className={styles.motto}>
              Established in 2023. Swift Solar provides turnkey solar panel installations, hybrid systems, maintenance, repair, and cleaning services across Amravati &amp; Maharashtra.
            </p>
            <div className={styles.socialRow}>
              <a href="https://facebook.com" className={styles.socialLink} aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://www.instagram.com/swiftsolar.co.in?utm_source=qr&igsh=Y3p6bDF6bHUyYjhk" className={styles.socialLink} aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="https://wa.me/918149217116" className={styles.socialLink} aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
              </a>
              <a href="mailto:lokesh.nistane1@gmail.com" className={styles.socialLink} aria-label="Email">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className={styles.linksCol}>
            <h3 className={styles.colTitle}>Quick Links</h3>
            <ul className={styles.linksList}>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className={styles.linksCol}>
            <h3 className={styles.colTitle}>Contact</h3>
            <ul className={styles.contactList}>
              <li>
                <span className={styles.contactLabel}>Phone / Call:</span>
                <a href="tel:+918149217116" className={styles.contactVal}>+91 81492 17116</a>
              </li>
              <li>
                <span className={styles.contactLabel}>Email:</span>
                <a href="mailto:lokesh.nistane1@gmail.com" className={styles.contactVal}>lokesh.nistane1@gmail.com</a>
              </li>
              <li>
                <span className={styles.contactLabel}>Location:</span>
                <span className={styles.contactVal}>Amravati, Maharashtra</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Request Quotation CTA */}
          <div className={styles.newsCol}>
            <h3 className={styles.colTitle}>Request a Quotation</h3>
            <p className={styles.newsDesc}>
              Ready to switch to solar? Contact our engineering team for a customized installation estimate.
            </p>
            <Link href="/contact" className={styles.quoteCtaBtn}>
              <span>Get Free Quotation</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Bottom copyright segment */}
        <div className={styles.bottomBar}>
          <p className={styles.copy}>
            &copy; {new Date().getFullYear()} Swift Solar. All rights reserved. Est. 2023.
          </p>
          <div className={styles.legalLinks}>
            <a href="#privacy">Privacy Policy</a>
            <span className={styles.legalDot}></span>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Backdrop Typography */}
      <div className={styles.backdropText}>
        SOLAR
      </div>
    </footer>
  );
}
