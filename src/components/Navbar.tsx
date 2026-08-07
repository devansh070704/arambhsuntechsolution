"use client";
import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import { Menu, X } from 'lucide-react';
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
  const logoSrc = isScrolledOrActive ? "/swift_solar_logo_scrolled.png" : "/swift_solar_logo_idle.png";

  return (
    <nav className={navbarClass}>
      <div className={styles.container}>
        {/* Logo */}
        <Link href="/" className={styles.logo} onClick={() => setIsMobileMenuOpen(false)}>
          <Image
            src={logoSrc}
            alt="Swift Solar"
            width={320}
            height={110}
            className={styles.logoImage}
            priority
          />
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
          <Link href="/contact" className={styles.ctaButton}>
            Contact Us
          </Link>
          <button
            className={styles.menuButton}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Sleek Integrated Dropdown Panel (Attaches directly underneath navbar, no gap) */}
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
          </div>
        </div>
      )}
    </nav>
  );
}
