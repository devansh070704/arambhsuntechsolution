"use client";
import React, { useState } from 'react';
import styles from './Faq.module.css';
import { ChevronDown } from 'lucide-react';

const FAQS_DATA = [
  {
    q: 'How much does solar panel installation cost in Pune?',
    a: 'Solar panel installation cost in Pune starts at approximately ₹55,000–₹70,000 for a 1kW on-grid system after the PM Surya Ghar government subsidy. A 3kW system typically costs ₹1,30,000–₹1,60,000 after subsidy, and a 5kW system costs ₹2,00,000–₹2,40,000 after subsidy. Aarambh Suntech Solution provides a free site assessment and a fully transparent, no-hidden-cost quotation. Call +91 88500 50126 for a free quote.',
  },
  {
    q: 'What is PM Surya Ghar Yojana and how much subsidy can I get in Pune?',
    a: 'PM Surya Ghar Muft Bijli Yojana is a Government of India scheme that provides a direct subsidy for rooftop solar installation on residential properties. In Pune and across Maharashtra, eligible homeowners can receive up to ₹30,000 for a 1kW system, up to ₹60,000 for a 2kW system, and up to ₹78,000 for a 3kW or larger system. Aarambh Suntech Solution handles the complete subsidy application and MSEDCL net metering process on your behalf.',
  },
  {
    q: 'What is the difference between on-grid and off-grid solar systems?',
    a: 'An on-grid solar system is connected to the MSEDCL electricity grid. During the day your solar panels power your home; excess power is exported to the grid and you earn credits on your electricity bill — this is called net metering. An off-grid solar system uses battery storage and works independently of the grid, making it ideal for areas with frequent power cuts. Aarambh Suntech Solution installs both on-grid and off-grid solar systems in Pune and across Maharashtra.',
  },
  {
    q: 'How long does solar panel installation take in Pune?',
    a: 'A standard residential rooftop solar installation typically takes 2–3 days for the physical installation. MSEDCL net metering approval and connection can take an additional 2–4 weeks depending on MSEDCL processing. The PM Surya Ghar subsidy is credited to your bank account within 4–6 weeks after installation is complete.',
  },
  {
    q: 'Do solar panels work during monsoon and cloudy days in Pune?',
    a: 'Yes. Solar panels generate electricity even on cloudy and rainy days, though at reduced efficiency of 20–40% compared to clear sunny days. Pune receives sufficient sunlight year-round for solar to be a financially viable investment. The annual generation estimate provided during your free site assessment accounts for monsoon months.',
  },
  {
    q: 'What is the payback period for a solar system in Pune?',
    a: 'Most residential solar systems in Pune have a payback period of 3–5 years after factoring in the PM Surya Ghar subsidy. After payback, you enjoy virtually free electricity for the remaining 20+ years of the panel\'s life. A typical 3kW system can reduce your monthly electricity bill from ₹2,500–₹3,500 to under ₹200.',
  },
  {
    q: 'Does Aarambh Suntech Solution handle solar panel repair and maintenance in Pune?',
    a: 'Yes. Aarambh Suntech Solution provides solar panel repair, solar inverter repair, solar panel cleaning services, and Annual Maintenance Contracts (AMC) across Pune and Maharashtra. If your solar panel is not generating power or your inverter is showing an error, call +91 88500 50126 for a service visit.',
  },
  {
    q: 'How much does CCTV camera installation cost in Pune?',
    a: 'CCTV camera installation cost in Pune depends on the number of cameras and the system type. A basic 2-camera HD system for a home or small shop starts at approximately ₹6,000–₹10,000 including installation. A 4-camera system for a home or office typically costs ₹12,000–₹20,000. Aarambh Suntech Solution installs Hikvision, CP Plus, and Dahua HD and IP camera systems with DVR/NVR storage and mobile remote viewing.',
  },
  {
    q: 'Which CCTV brands does Aarambh Suntech Solution install in Pune?',
    a: 'Aarambh Suntech Solution installs Hikvision, CP Plus, and Dahua CCTV camera systems — the three most trusted brands for HD and IP surveillance in India. We install wired and wireless cameras for homes, shops, offices, warehouses, and factories. CCTV AMC and repair services are also available.',
  },
  {
    q: 'Can I view my CCTV cameras on my mobile phone?',
    a: 'Yes. All CCTV systems installed by Aarambh Suntech Solution support remote live viewing on your smartphone via apps like Hik-Connect (Hikvision), gCMOB (CP Plus), and DMSS (Dahua). You can view live footage, playback recordings, and receive motion alerts from anywhere in the world.',
  },
  {
    q: 'Does Aarambh Suntech Solution provide electrical contractor services in Pune?',
    a: 'Yes. Aarambh Suntech Solution is a licensed electrical contractor providing residential home wiring, commercial electrical panel installation, industrial three-phase electrical contracting, DB panel setup, safety earthing, and electrical maintenance services across Khed, Chakan, Rajgurunagar, and Pune. We handle both new construction wiring and repair/upgrade work.',
  },
  {
    q: 'Can one company do solar installation, CCTV setup, and electrical work together?',
    a: 'Yes — and that is exactly what makes Aarambh Suntech Solution unique in Pune. Most companies specialise in only one service. We are one of the very few companies in Pune offering solar panel installation, CCTV camera setup, and complete electrical contracting under one roof. This means you get one point of contact, coordinated site visits, and better pricing when combining services.',
  },
  {
    q: 'Does Aarambh Suntech Solution serve areas outside Pune in Maharashtra?',
    a: 'Yes. While our office is based in Shiroli, Khed (Pune), Aarambh Suntech Solution provides solar, CCTV, and electrical services across Pune district and Maharashtra — including Chakan, Rajgurunagar, Talegaon, Pimpri-Chinchwad, and other areas. Contact us at +91 88500 50126 or +91 99214 40488 to confirm service availability in your area.',
  },
];

export default function Faq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    if (openIdx === idx) {
      setOpenIdx(null);
    } else {
      setOpenIdx(idx);
    }
  };

  return (
    <section id="faqs" className="section-padding" style={{ backgroundColor: 'var(--color-bg-light)' }}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.preTitle}>Frequently Asked Questions</span>
          <h2 className={styles.title}>Solar, CCTV & Electrical — Common Questions Answered</h2>
          <p className={styles.subtitle}>
            Real answers to what people search: solar panel cost in Pune, PM Surya Ghar subsidy, CCTV camera price, electrical contractor services, and more.
          </p>
        </div>

        <div className={styles.accordionContainer}>
          {FAQS_DATA.map((faq, idx) => {
            const isOpen = openIdx === idx;

            return (
              <div
                key={idx}
                className={`${styles.faqRow} ${isOpen ? styles.open : ''}`}
                onClick={() => toggleFaq(idx)}
              >
                <div className={styles.faqHeader}>
                  <h3 className={styles.question}>{faq.q}</h3>
                  <button
                    className={styles.toggleBtn}
                    aria-label="Toggle Answer"
                  >
                    <ChevronDown size={20} className={styles.chevron} />
                  </button>
                </div>
                <div className={styles.faqBody}>
                  <p className={styles.answer}>{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
