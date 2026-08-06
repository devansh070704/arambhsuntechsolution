"use client";

import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export function FloatingButtons() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 480);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* Quick Call floating button - Bottom Left */}
      <a
        href="tel:+918149217116"
        aria-label="Call Swift Solar"
        style={{
          position: 'fixed',
          bottom: isSmallScreen ? '14px' : '24px',
          left: isSmallScreen ? '14px' : '24px',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          backgroundColor: 'var(--color-primary)',
          color: 'white',
          padding: isSmallScreen ? '10px 14px' : '12px 20px',
          borderRadius: '9999px',
          boxShadow: '0 8px 32px rgba(10, 28, 62, 0.3)',
          fontWeight: '600',
          fontSize: isSmallScreen ? '0.8rem' : '0.9rem',
          textDecoration: 'none',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--color-accent-sky)';
          (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
          (e.currentTarget as HTMLElement).style.boxShadow = '0 0 20px rgba(0, 180, 216, 0.4)';
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--color-primary)';
          (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
          (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 32px rgba(10, 28, 62, 0.3)';
        }}
      >
        <Phone style={{ width: isSmallScreen ? '16px' : '18px', height: isSmallScreen ? '16px' : '18px' }} />
        <span>Call</span>
      </a>

      {/* WhatsApp Chat floating button - Bottom Right */}
      <a
        href="https://wa.me/918149217116?text=Hi%20Swift%20Solar%2C%20I%20am%20interested%20in%20a%20solar%20rooftop%20installation."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        style={{
          position: 'fixed',
          bottom: isSmallScreen ? '14px' : '24px',
          right: isSmallScreen ? '14px' : '24px',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          backgroundColor: '#25D366',
          color: 'white',
          padding: isSmallScreen ? '10px 14px' : '12px 20px',
          borderRadius: '9999px',
          boxShadow: '0 8px 32px rgba(37, 211, 102, 0.35)',
          fontWeight: '600',
          fontSize: isSmallScreen ? '0.8rem' : '0.9rem',
          textDecoration: 'none',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.backgroundColor = '#20bd5a';
          (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
          (e.currentTarget as HTMLElement).style.boxShadow = '0 0 24px rgba(37, 211, 102, 0.5)';
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.backgroundColor = '#25D366';
          (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
          (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 32px rgba(37, 211, 102, 0.35)';
        }}
      >
        <MessageCircle style={{ width: isSmallScreen ? '16px' : '18px', height: isSmallScreen ? '16px' : '18px' }} />
        <span>WhatsApp</span>
      </a>
    </>
  );
}
