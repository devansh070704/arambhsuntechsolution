"use client";
import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import { Menu, X, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isScrolledOrActive = isScrolled || !isHome || isMobileMenuOpen;
  const navbarClass = `${styles.navbar} ${isScrolledOrActive ? styles.scrolled : ''}`;

  return (
    <nav className={navbarClass}>
      <div className={styles.container}>
        {/* Logo Brand Group inside White Frame Container */}
        <Link href="/" className={styles.logoBadge} onClick={() => setIsMobileMenuOpen(false)}>
          <Image
            src="/aarambh_logo.png?v=3"
            alt="Aarambh Suntech Solution"
            width={52}
            height={52}
            className={styles.logoImage}
            unoptimized
            priority
          />
          <div className={styles.logoTextGroup}>
            <span className={styles.brandTitle}>AARAMBH</span>
            <span className={styles.brandSub}>SUNTECH SOLUTION</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className={styles.links}>
          <Link href="/" className={`${styles.linkItem} ${pathname === '/' ? styles.activeLink : ''}`}>Home</Link>
          <Link href="/about" className={`${styles.linkItem} ${pathname === '/about' ? styles.activeLink : ''}`}>About</Link>
          <Link href="/services" className={`${styles.linkItem} ${pathname === '/services' ? styles.activeLink : ''}`}>Services</Link>
          <Link href="/contact" className={`${styles.linkItem} ${pathname === '/contact' ? styles.activeLink : ''}`}>Contact Us</Link>
        </div>

        {/* CTA Button & Mobile Toggle */}
        <div className={styles.actions}>
          <a href="tel:+918850050126" className={styles.ctaButton} aria-label="Call Anil Korede">
            <Phone size={15} className={styles.phoneIcon} />
            <span className={styles.ctaTextFull}>+91 88500 50126</span>
            <span className={styles.ctaTextShort}>Call</span>
          </a>
          <button
            className={styles.menuButton}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Sleek Integrated Dropdown Panel */}
      {isMobileMenuOpen && (
        <div className={styles.mobileDropdown}>
          <div className={styles.mobileNavList}>
            <Link href="/" className={`${styles.mobileNavItem} ${pathname === '/' ? styles.activeMobile : ''}`} onClick={() => setIsMobileMenuOpen(false)}>
              Home
            </Link>
            <Link href="/about" className={`${styles.mobileNavItem} ${pathname === '/about' ? styles.activeMobile : ''}`} onClick={() => setIsMobileMenuOpen(false)}>
              About Us
            </Link>
            <Link href="/services" className={`${styles.mobileNavItem} ${pathname === '/services' ? styles.activeMobile : ''}`} onClick={() => setIsMobileMenuOpen(false)}>
              Services
            </Link>
            <Link href="/contact" className={`${styles.mobileNavItem} ${pathname === '/contact' ? styles.activeMobile : ''}`} onClick={() => setIsMobileMenuOpen(false)}>
              Contact Us
            </Link>

            <div className={styles.mobileContactDivider} />

            {/* Quick Contact Action Buttons */}
            <div className={styles.mobileContactRow}>
              <a href="tel:+918850050126" className={styles.mobileCallBtn}>
                <Phone size={18} />
                <span>Call +91 88500 50126</span>
              </a>
              <a
                href="https://wa.me/918850050126?text=Hi%20Aarambh%20Suntech%20Solution%2C%20I%20am%20interested%20in%20Solar%2C%20CCTV%20or%20Electrical%20Services."
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mobileWhatsappBtn}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
