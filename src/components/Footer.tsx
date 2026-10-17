"use client";

import React from "react";
import Image from "next/image";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#101725] border-t border-[rgba(245,247,251,0.08)]">
      <div className="w-full px-6 md:px-12 max-w-7xl mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[rgba(245,247,251,0.08)]">
          {/* Brand Summary (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#home" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#07090F] border border-[rgba(245,247,251,0.08)] flex items-center justify-center p-1.5 overflow-hidden">
                <Image
                  src="/ashivam-logo.jpg"
                  alt="Ashivam Logo"
                  width={36}
                  height={36}
                  className="object-contain rounded-lg"
                />
              </div>
              <span className="text-xl font-bold tracking-tight text-[#F5F7FB]">
                Ashivam Technologies
              </span>
            </a>
            <p className="text-sm text-[#94A3B8] max-w-sm leading-relaxed">
              Innovative Technology. Powerful Solutions.
            </p>
            <div className="pt-2 flex items-start gap-2.5 text-xs font-mono text-[#46ebe3]">
              <span className="w-2 h-2 rounded-full bg-[#46ebe3]" />
              <span>Sanjay Palace, Sanjay Place, Civil Lines, Agra, Uttar Pradesh 282002, India</span>
            </div>
          </div>

          {/* Links Column 1: Navigation */}
          <div>
            <div className="text-xs font-mono text-[#475569] uppercase tracking-wider mb-4 font-semibold">
              NAVIGATION
            </div>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="#about"
                  className="text-sm text-[#94A3B8] hover:text-[#F5F7FB] transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-sm text-[#94A3B8] hover:text-[#F5F7FB] transition-colors"
                >
                  Core Services
                </a>
              </li>
              <li>
                <a
                  href="#solutions"
                  className="text-sm text-[#94A3B8] hover:text-[#F5F7FB] transition-colors"
                >
                  Next-Gen Solutions
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-sm text-[#94A3B8] hover:text-[#F5F7FB] transition-colors"
                >
                  Projects &amp; Architecture
                </a>
              </li>
            </ul>
          </div>

          {/* Links Column 2: Engineering */}
          <div>
            <div className="text-xs font-mono text-[#475569] uppercase tracking-wider mb-4 font-semibold">
              ENGINEERING
            </div>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="#technology"
                  className="text-sm text-[#94A3B8] hover:text-[#F5F7FB] transition-colors"
                >
                  Technology Ecosystem
                </a>
              </li>
              <li>
                <a
                  href="#careers"
                  className="text-sm text-[#94A3B8] hover:text-[#F5F7FB] transition-colors"
                >
                  Careers (Hiring)
                </a>
              </li>
              <li>
                <a
                  href="#careers"
                  className="text-sm text-[#94A3B8] hover:text-[#F5F7FB] transition-colors"
                >
                  Engineering Blog
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-sm text-[#94A3B8] hover:text-[#F5F7FB] transition-colors"
                >
                  Security Architecture
                </a>
              </li>
            </ul>
          </div>

          {/* Links Column 3: Direct Channels */}
          <div>
            <div className="text-xs font-mono text-[#475569] uppercase tracking-wider mb-4 font-semibold">
              DIRECT CHANNELS
            </div>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="mailto:contact@ashivam.com"
                  className="text-sm text-[#94A3B8] hover:text-[#F5F7FB] transition-colors truncate block"
                >
                  contact@ashivam.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+917088567790"
                  className="text-sm text-[#94A3B8] hover:text-[#F5F7FB] transition-colors"
                >
                  +91 70885 67790
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/918868856779"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-[#94A3B8] hover:text-[#F5F7FB] transition-colors"
                >
                  WhatsApp +91 88688 56779
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/ashivam-technologies"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-[#94A3B8] hover:text-[#F5F7FB] transition-colors"
                >
                  GitHub Org
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-[#94A3B8] hover:text-[#F5F7FB] transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="/admin"
                  className="text-sm text-[#46ebe3] hover:text-[#F5F7FB] transition-colors"
                >
                  Admin Console
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-[#94A3B8] hover:text-[#F5F7FB] transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Sub-footer Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#94A3B8]">
          <div>
            © 2026 Ashivam Technologies. All rights reserved. Engineering Future-Scale Systems.
          </div>
          <button
            onClick={scrollToTop}
            className="hover:text-[#46ebe3] flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <span>Back to top</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
