"use client";
import React from 'react';
import styles from './Footer.module.css';
import { ArrowRight, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={styles.footerSection}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Column 1: Logo & Motto */}
          <div className={styles.infoCol}>
            <Link href="/" className={styles.logoBadge}>
              <Image
                src="/aarambh_logo.png?v=3"
                alt="Aarambh Suntech Solution"
                width={52}
                height={52}
                className={styles.logoImage}
                unoptimized
              />
              <div className={styles.logoTextGroup}>
                <span className={styles.brandTitle}>AARAMBH</span>
                <span className={styles.brandSub}>SUNTECH SOLUTION</span>
              </div>
            </Link>
            <p className={styles.motto}>
              Aarambh Suntech Solution provides turnkey Rooftop Solar Panel Systems, HD &amp; IP CCTV Security Camera Setup, and Turnkey Industrial &amp; Residential Electrical Contracting across Shiroli, Khed, Chakan &amp; Pune.
            </p>
            <div className={styles.socialRow}>
              <a href="https://wa.me/918850050126" className={styles.socialLink} aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
              </a>
              <a href="tel:+918850050126" className={styles.socialLink} aria-label="Call Anil Korede">
                <Phone size={18} />
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

          {/* Column 3: Contact Info & Proprietors */}
          <div className={styles.linksCol}>
            <h3 className={styles.colTitle}>Contact Specialists</h3>
            <ul className={styles.contactList}>
              <li>
                <span className={styles.contactLabel}>Pro. Anil Korede:</span>
                <a href="tel:+918850050126" className={styles.contactVal}>+91 88500 50126</a>
                <a href="tel:+917666813545" className={styles.contactVal}>+91 76668 13545</a>
              </li>
              <li>
                <span className={styles.contactLabel}>Pro. Vaibhav Dhanwat:</span>
                <a href="tel:+919921440488" className={styles.contactVal}>+91 99214 40488</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Address & Location */}
          <div className={styles.newsCol}>
            <h3 className={styles.colTitle}>Office Location</h3>
            <p className={styles.newsDesc}>
              Shop No. 1, Gut No. 592, Property No. 118, Sawant Complex, Ground Floor, Ektanagar Paight Phata, Shiroli, Taluka Khed, District Pune - 410505
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
            &copy; {new Date().getFullYear()} Aarambh Suntech Solution. All rights reserved. | GST: 27BXDPK0771P1Z1
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
        AARAMBH
      </div>
    </footer>
  );
}
