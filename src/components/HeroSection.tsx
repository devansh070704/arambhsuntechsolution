"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { CheckCircle2, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

export function HeroSection() {
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
    <section className="relative bg-[#ffffff] pt-8 pb-16 border-b border-[#e2e8f0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Hero Banner Card matching design photo structure */}
        <div className="relative rounded-3xl overflow-hidden min-h-[460px] bg-[#0f2537] text-white p-8 sm:p-12 lg:p-16 mb-12">
          {/* Background image overlay */}
          <div className="absolute inset-0 z-0 opacity-40">
            <Image
              src="/hero_roof.jpg"
              alt="Solar Panels Rooftop"
              fill
              priority
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f2537] via-[#0f2537]/80 to-transparent z-10" />

          {/* Banner Content */}
          <div className="relative z-20 max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-medium text-white">
              <Zap className="w-3.5 h-3.5 text-[#fbbf24]" />
              <span>Amravati &amp; Vidarbha&apos;s Most Trusted Solar Partner</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              Innovation That Breathes Solar Energy.
            </h1>

            <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed">
              Switch your home or business in Amravati to Swift Solar. High-efficiency BIS-certified panels, seamless PM Surya Ghar subsidy processing, and guaranteed 25-year performance.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <a href="#hero-form" className="bg-[#1d4ed8] text-white hover:bg-blue-600 px-6 py-3 rounded-full text-sm font-semibold flex items-center gap-2 transition-all">
                <span>Request Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="tel:+918149217116" className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 px-6 py-3 rounded-full text-sm font-semibold transition-all">
                Call +91 81492 17116
              </a>
            </div>
          </div>
        </div>

        {/* Hero Section Grid (Left Value Prop + Right Lead Form) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column - Detailed Features & Badges */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl font-bold text-[#0f2537] tracking-tight">
              Solar Power Engineered for Peak ROI & Zero Electricity Bills.
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              We manage everything from 3D shadow analysis, structure fabrication, earthing, lightning arresters, net-metering with MSEDCL, and subsidy credit.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
                <ShieldCheck className="w-5 h-5 text-[#1d4ed8] shrink-0" />
                <span className="text-xs font-semibold text-[#0f2537]">Up to ₹78,000 Govt Subsidy</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
                <ShieldCheck className="w-5 h-5 text-[#1d4ed8] shrink-0" />
                <span className="text-xs font-semibold text-[#0f2537]">25-Year Performance Guarantee</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
                <ShieldCheck className="w-5 h-5 text-[#1d4ed8] shrink-0" />
                <span className="text-xs font-semibold text-[#0f2537]">Zero Down Payment EMI Option</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
                <ShieldCheck className="w-5 h-5 text-[#1d4ed8] shrink-0" />
                <span className="text-xs font-semibold text-[#0f2537]">3-Day Rapid Installation</span>
              </div>
            </div>
          </div>

          {/* Right Column - Hero Lead Form */}
          <div id="hero-form" className="lg:col-span-5">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="mb-5">
                <h3 className="text-xl font-bold text-[#0f2537] tracking-tight">
                  Request Instant Solar Quote
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Get custom cost & savings analysis for your roof in Amravati within 30 minutes.
                </p>
              </div>

              {formSubmitted ? (
                <div className="bg-blue-50/50 border border-blue-100 rounded-xl p-6 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-[#25D366] mx-auto" />
                  <h4 className="text-base font-bold text-[#0f2537]">Request Received!</h4>
                  <p className="text-xs text-slate-600">
                    Thank you, <span className="font-semibold text-slate-900">{formData.name}</span>. Lokesh Nistane from Swift Solar will contact you shortly at <span className="font-semibold text-slate-900">{formData.phone}</span>.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="text-xs text-[#1d4ed8] underline hover:text-[#0f2537]"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Lokesh Nistane"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#1d4ed8] focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 81492 17116"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#1d4ed8] focus:bg-white transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        City
                      </label>
                      <input
                        type="text"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#1d4ed8] focus:bg-white transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Monthly Bill
                      </label>
                      <select
                        value={formData.monthlyBill}
                        onChange={(e) => setFormData({ ...formData, monthlyBill: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#1d4ed8] focus:bg-white transition-all"
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
                    className="w-full bg-[#0f2537] hover:bg-[#1e3a5f] text-white py-3 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 transition-all shadow-sm"
                  >
                    <span>Calculate Solar Savings</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className="text-[11px] text-slate-400 text-center mt-2">
                    🔒 Direct consultation by Swift Solar, Amravati. No spam.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
