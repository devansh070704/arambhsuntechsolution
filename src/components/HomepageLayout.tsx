"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Sun, 
  ShieldCheck, 
  TrendingUp, 
  Check, 
  ArrowRight, 
  Wrench, 
  Zap, 
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Building2,
  Home as HomeIcon,
  HelpCircle
} from 'lucide-react';

export function HomepageLayout() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: 'Amravati',
    monthlyBill: '₹2,000 - ₹5,000'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="space-y-24 pb-20">

      {/* SECTION 1: HERO SECTION (Left Content + Right Contact Form) */}
      <section className="bg-white pt-8 pb-16 border-b border-[#e5e5ea]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Area */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f5f5f7] border border-[#e5e5ea] text-xs font-semibold text-[#002b49]">
                <Zap className="w-3.5 h-3.5 text-[#e5a900]" />
                <span>Amravati & Vidarbha&apos;s Most Trusted Solar Partner</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#002b49] leading-[1.12]">
                Innovation That Breathes Solar Power.
              </h1>

              <p className="text-base sm:text-lg text-[#86868b] max-w-2xl font-normal leading-relaxed">
                Switch your home or business in Amravati to Swift Solar. High-efficiency German & Tier-1 BIS-certified solar panels, seamless PM Surya Ghar subsidy processing, and guaranteed 25-year performance.
              </p>

              {/* Value Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#f5f5f7] border border-[#e5e5ea]">
                  <ShieldCheck className="w-5 h-5 text-[#0066cc] shrink-0" />
                  <span className="text-xs font-semibold text-[#002b49]">Up to ₹78,000 Govt Subsidy</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#f5f5f7] border border-[#e5e5ea]">
                  <ShieldCheck className="w-5 h-5 text-[#0066cc] shrink-0" />
                  <span className="text-xs font-semibold text-[#002b49]">25-Year Panel Power Guarantee</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#f5f5f7] border border-[#e5e5ea]">
                  <ShieldCheck className="w-5 h-5 text-[#0066cc] shrink-0" />
                  <span className="text-xs font-semibold text-[#002b49]">Zero Down Payment Financing</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#f5f5f7] border border-[#e5e5ea]">
                  <ShieldCheck className="w-5 h-5 text-[#0066cc] shrink-0" />
                  <span className="text-xs font-semibold text-[#002b49]">Fast 3-Day Turnkey Install</span>
                </div>
              </div>

              {/* Featured Social Proof Pill */}
              <div className="pt-2 flex items-center gap-4 text-xs text-[#86868b]">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-[#002b49] text-white flex items-center justify-center font-bold text-xs border-2 border-white">LN</div>
                  <div className="w-8 h-8 rounded-full bg-[#0066cc] text-white flex items-center justify-center font-bold text-xs border-2 border-white">SS</div>
                  <div className="w-8 h-8 rounded-full bg-[#e5a900] text-white flex items-center justify-center font-bold text-xs border-2 border-white">MH</div>
                </div>
                <span>Over 500+ Rooftops Energized in Amravati & Maharashtra</span>
              </div>
            </div>

            {/* Right Content Area - Hero Contact Form */}
            <div id="hero-form" className="lg:col-span-5">
              <div className="bg-[#f5f5f7] border border-[#e5e5ea] rounded-2xl p-6 sm:p-8 shadow-sm">
                
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-[#002b49] tracking-tight">
                    Request Instant Solar Quote
                  </h3>
                  <p className="text-xs text-[#86868b] mt-1">
                    Get a personalized cost & savings analysis for your roof within 30 minutes.
                  </p>
                </div>

                {formSubmitted ? (
                  <div className="bg-[#ffffff] border border-[#e5e5ea] rounded-xl p-6 text-center space-y-4">
                    <CheckCircle2 className="w-12 h-12 text-[#25D366] mx-auto" />
                    <h4 className="text-lg font-bold text-[#002b49]">Request Received!</h4>
                    <p className="text-sm text-[#86868b]">
                      Thank you, <span className="font-semibold text-[#1d1d1f]">{formData.name}</span>. Lokesh Nistane from Swift Solar will call you at <span className="font-semibold text-[#1d1d1f]">{formData.phone}</span> shortly.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="text-xs text-[#0066cc] underline hover:text-[#002b49]"
                    >
                      Submit another request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#1d1d1f] mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Lokesh Nistane"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#ffffff] border border-[#e5e5ea] rounded-lg px-3.5 py-2.5 text-sm text-[#1d1d1f] focus:outline-none focus:border-[#0066cc]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#1d1d1f] mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 81492 17116"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#ffffff] border border-[#e5e5ea] rounded-lg px-3.5 py-2.5 text-sm text-[#1d1d1f] focus:outline-none focus:border-[#0066cc]"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-[#1d1d1f] mb-1">
                          City / Location
                        </label>
                        <input
                          type="text"
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          className="w-full bg-[#ffffff] border border-[#e5e5ea] rounded-lg px-3.5 py-2.5 text-sm text-[#1d1d1f] focus:outline-none focus:border-[#0066cc]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[#1d1d1f] mb-1">
                          Monthly Electricity Bill
                        </label>
                        <select
                          value={formData.monthlyBill}
                          onChange={(e) => setFormData({ ...formData, monthlyBill: e.target.value })}
                          className="w-full bg-[#ffffff] border border-[#e5e5ea] rounded-lg px-3.5 py-2.5 text-sm text-[#1d1d1f] focus:outline-none focus:border-[#0066cc]"
                        >
                          <option>₹1,500 - ₹3,000</option>
                          <option>₹3,000 - ₹7,000</option>
                          <option>₹7,000 - ₹15,000</option>
                          <option>₹15,000+</option>
                        </select>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="apple-btn-primary w-full py-3 mt-2 text-sm font-semibold"
                    >
                      <span>Calculate Solar Savings</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <p className="text-[11px] text-[#86868b] text-center mt-2">
                      🔒 Direct consultation by Swift Solar, Amravati. No spam.
                    </p>
                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: Key Metrics Strip */}
      <section className="bg-[#f5f5f7] border-y border-[#e5e5ea] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center divide-x divide-[#e5e5ea]/60">
            <div className="px-2">
              <p className="text-2xl sm:text-3xl font-bold text-[#002b49]">500+</p>
              <p className="text-xs text-[#86868b] mt-1 font-medium">Solar Rooftops Built</p>
            </div>
            <div className="px-2">
              <p className="text-2xl sm:text-3xl font-bold text-[#002b49]">₹78,000</p>
              <p className="text-xs text-[#86868b] mt-1 font-medium">Max PM Surya Subsidy</p>
            </div>
            <div className="px-2">
              <p className="text-2xl sm:text-3xl font-bold text-[#002b49]">25 Years</p>
              <p className="text-xs text-[#86868b] mt-1 font-medium">Module Performance</p>
            </div>
            <div className="px-2">
              <p className="text-2xl sm:text-3xl font-bold text-[#002b49]">90%</p>
              <p className="text-xs text-[#86868b] mt-1 font-medium">Bill Reduction</p>
            </div>
            <div className="px-2 col-span-2 md:col-span-1">
              <p className="text-2xl sm:text-3xl font-bold text-[#0066cc]">100%</p>
              <p className="text-xs text-[#86868b] mt-1 font-medium">MSEDCL Net-Metering</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Smart Features & Technology Driven Systems */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#86868b] uppercase tracking-widest">Engineering Excellence</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#002b49] tracking-tight mt-2">
            Smart Features, Technology Driven Systems Designed
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="apple-card p-8 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#f5f5f7] flex items-center justify-center text-[#002b49]">
              <Sun className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#002b49]">Integrated Solar Tech</h3>
            <p className="text-sm text-[#86868b] leading-relaxed">
              Top-con N-Type &amp; Mono PERC solar modules designed for maximum solar irradiation efficiency in Vidarbha region weather.
            </p>
            <div className="pt-4 border-t border-[#e5e5ea] flex justify-between items-center text-xs font-semibold text-[#1d1d1f]">
              <span>Warranty Protection</span>
              <span className="text-[#0066cc]">25 Years</span>
            </div>
          </div>

          <div className="apple-card p-8 space-y-4 bg-[#002b49] text-white">
            <div className="w-12 h-12 rounded-xl bg-[#0b3c65] flex items-center justify-center text-white">
              <TrendingUp className="w-6 h-6 text-[#e5a900]" />
            </div>
            <h3 className="text-xl font-bold text-white">Optimized ROI &amp; Payback</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Pay off your solar plant investment within 3.5 to 4 years through direct monthly MSEDCL electricity bill savings.
            </p>
            <div className="pt-4 border-t border-[#0b3c65] flex justify-between items-center text-xs font-semibold text-slate-300">
              <span>Average Annual Yield</span>
              <span className="text-[#e5a900]">30% ROI</span>
            </div>
          </div>

          <div className="apple-card p-8 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#f5f5f7] flex items-center justify-center text-[#002b49]">
              <Zap className="w-6 h-6 text-[#0066cc]" />
            </div>
            <h3 className="text-xl font-bold text-[#002b49]">30% High Generation Output</h3>
            <p className="text-sm text-[#86868b] leading-relaxed">
              High-frequency string inverters with real-time Wi-Fi generation tracking on your smartphone.
            </p>
            <div className="pt-4 border-t border-[#e5e5ea] flex justify-between items-center text-xs font-semibold text-[#1d1d1f]">
              <span>Smart Monitoring</span>
              <span className="text-[#0066cc]">Live App Access</span>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 4: Renewable Energy Services Spectrum */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold text-[#86868b] uppercase tracking-widest">Services Spectrum</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#002b49] tracking-tight">
              Renewable Energy Services For A Greener Future
            </h2>
            <p className="text-sm text-[#86868b] leading-relaxed">
              From residential homes in Amravati to large commercial factories and agricultural solar pumps across Maharashtra, Swift Solar provides end-to-end turnkey solar engineering.
            </p>

            <div className="relative rounded-2xl overflow-hidden border border-[#e5e5ea] aspect-video shadow-sm">
              <Image
                src="/engineer.jpg"
                alt="Swift Solar Engineer in Amravati"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            {[
              {
                title: "Residential Solar Systems (On-Grid & Hybrid)",
                desc: "3kW to 10kW rooftop installations customized for bungalows, apartments, and residential societies with Govt subsidy benefits."
              },
              {
                title: "Commercial & Industrial Solar Solutions",
                desc: "High-capacity rooftop & ground-mounted solar plants for factories, hospitals, schools, and offices in Amravati & Nagpur."
              },
              {
                title: "Agricultural Solar Pump Systems",
                desc: "Reliable off-grid solar irrigation pumps empowering farmers with uninterrupted daytime power for crops."
              },
              {
                title: "MSEDCL Net-Metering & Subsidy Processing",
                desc: "Complete hassle-free documentation, MSEDCL meter approval, and PM Surya Ghar portal subsidy approval done by our team."
              }
            ].map((service, index) => (
              <div key={index} className="apple-card p-6 flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#f5f5f7] text-[#002b49] font-bold text-sm flex items-center justify-center shrink-0 mt-0.5">
                  0{index + 1}
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#002b49]">{service.title}</h4>
                  <p className="text-xs text-[#86868b] mt-1 leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 5: High-ROI Showcase Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-[#002b49] text-white p-8 sm:p-14">
          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#e5a900]">Turnkey Rooftop Solar</span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight leading-tight">
              Install A High-ROI Heavy Duty Solar System For Improved Household Savings.
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Eliminate up to 90% of your MSEDCL monthly power bill. Get guaranteed execution by Amravati&apos;s leading solar engineers.
            </p>
            <div className="pt-4">
              <a href="#hero-form" className="apple-btn-primary bg-white text-[#002b49] hover:bg-slate-100 font-semibold">
                Book Site Inspection
              </a>
            </div>
          </div>

          <div className="mt-8 lg:mt-0 lg:absolute lg:right-0 lg:top-0 lg:bottom-0 lg:w-1/2 opacity-30 pointer-events-none">
            <Image
              src="/commercial.jpg"
              alt="Commercial Solar Installation"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* SECTION 6: How Swift Solar Works (4-Step Process) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#86868b] uppercase tracking-widest">Hassle-Free Process</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#002b49] tracking-tight mt-2">
            How Swift Solar Works: Planning To Powering Your Home
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              step: "01",
              title: "Free Roof Audit",
              desc: "Engineers measure your shadow-free roof area and analyze monthly MSEDCL bills."
            },
            {
              step: "02",
              title: "Custom 3D Design",
              desc: "We design a high-yielding solar plant layout with optimal sun exposure."
            },
            {
              step: "03",
              title: "Rapid Installation",
              desc: "BIS Tier-1 panels & structures mounted securely within 3 business days."
            },
            {
              step: "04",
              title: "Net-Meter & Subsidy",
              desc: "Grid connection enabled, bidirectional meter tested, subsidy credited directly."
            }
          ].map((item, idx) => (
            <div key={idx} className="apple-card p-6 relative space-y-3">
              <span className="text-3xl font-extrabold text-[#e5e5ea]">{item.step}</span>
              <h4 className="text-lg font-bold text-[#002b49]">{item.title}</h4>
              <p className="text-xs text-[#86868b] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 7: FAQ Accordion */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-xs font-bold text-[#86868b] uppercase tracking-widest">Frequently Asked</span>
          <h2 className="text-3xl font-bold text-[#002b49] tracking-tight mt-2">
            Get Clarity Before You Go Solar
          </h2>
        </div>

        <div className="space-y-4">
          {[
            {
              q: "How much government subsidy can I get under PM Surya Ghar Yojana in Maharashtra?",
              a: "You can receive up to ₹30,000 for a 1 kW plant, ₹60,000 for a 2 kW plant, and a maximum of ₹78,000 for 3 kW and above residential solar installations. Swift Solar manages the full portal subsidy filing."
            },
            {
              q: "How does MSEDCL Net-Metering work in Amravati?",
              a: "With a bidirectional net-meter installed by MSEDCL, extra solar electricity produced during sunny daytime is sent back to the grid. At night, you draw from the grid. You only pay for the net units consumed."
            },
            {
              q: "What happens during cloudy or rainy days in Vidarbha monsoon?",
              a: "Solar panels continue to generate 25% to 45% power even under cloud cover by capturing diffused sunlight. Your net-meter seamlessly uses grid power if generation is lower."
            },
            {
              q: "What warranty does Swift Solar provide?",
              a: "We offer 25 Years Linear Performance Warranty on solar panels, 5 to 10 Years warranty on solar inverters, and 5 Years of complete maintenance service."
            }
          ].map((faq, i) => (
            <details key={i} className="apple-card p-6 cursor-pointer group">
              <summary className="font-bold text-base text-[#002b49] flex justify-between items-center gap-4 list-none">
                <span>{faq.q}</span>
                <span className="text-[#0066cc] text-xl font-light group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="text-xs text-[#86868b] mt-3 leading-relaxed border-t border-[#e5e5ea] pt-3">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* SECTION 8: Bottom Call To Action Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#f5f5f7] border border-[#e5e5ea] rounded-3xl p-10 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#002b49] tracking-tight">
            Ready To Switch To Clean Energy in Amravati?
          </h2>
          <p className="text-sm text-[#86868b] max-w-xl mx-auto">
            Contact Swift Solar today for a free site audit, zero-obligation savings report, and subsidy assistance.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a href="tel:+918149217116" className="apple-btn-primary">
              <Phone className="w-4 h-4" />
              <span>Call +91 81492 17116</span>
            </a>
            <a
              href="https://wa.me/918149217116?text=Hi%20Swift%20Solar%2C%20I%20want%20a%20solar%20quote."
              target="_blank"
              rel="noopener noreferrer"
              className="apple-btn-secondary"
            >
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
