"use client";

import React from "react";
import Image from "next/image";

export default function Solutions() {
  const domains = [
    {
      domain: "EDUCATION",
      title: "Education Technology",
      desc: "Learning platforms, student portals, automated grading systems, and real-time classroom telemetry.",
      color: "text-[#46ebe3]",
    },
    {
      domain: "BUSINESS",
      title: "Business Software",
      desc: "Custom operational tools, billing engines, and platforms that streamline multi-team enterprise workflows.",
      color: "text-[#afc6ff]",
    },
    {
      domain: "MANAGEMENT",
      title: "Management Systems",
      desc: "Smart ERPs, inventory management, and resource oversight solutions for institutions and growing businesses.",
      color: "text-[#cdbdff]",
    },
    {
      domain: "AUTOMATION",
      title: "Workflow Automation",
      desc: "Automated transactional workflows and intelligent data pipelines that save hundreds of human hours.",
      color: "text-[#00cec7]",
    },
    {
      domain: "PLATFORMS",
      title: "Digital Platforms",
      desc: "Multi-sided SaaS marketplaces and platforms connecting users, services, and live transaction records at scale.",
      color: "text-[#d9e2ff]",
    },
    {
      domain: "INNOVATION",
      title: "Innovative Applications",
      desc: "Creative mobile products and experimental software that challenge standard conventions and delight users.",
      color: "text-[#46ebe3]",
    },
  ];

  return (
    <section
      id="solutions"
      className="py-24 border-t border-[rgba(245,247,251,0.08)] bg-[#101725]/30"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-14 max-w-3xl">
          <div className="text-xs font-mono text-[#46ebe3] uppercase tracking-widest mb-2.5">
            INDUSTRY DOMAINS
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#F5F7FB] tracking-tight">
            Technology Built Around the Way Your World Works.
          </h2>
          <p className="text-base text-[#94A3B8] mt-3 leading-relaxed">
            We deliver tailored software solutions across diverse industry verticals, solving mission-critical operational challenges through intelligent technology.
          </p>
        </div>

        <div className="relative h-48 md:h-56 rounded-3xl overflow-hidden border border-[rgba(245,247,251,0.08)] shadow-xl mb-8">
          <Image
            src="/images/solutions-network.jpg"
            alt="A digital globe illustrating connected services and industries"
            fill
            sizes="(max-width: 768px) 100vw, 1152px"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07090F]/80 via-[#07090F]/30 to-transparent" />
          <div className="absolute bottom-5 left-5 md:bottom-7 md:left-7 text-xs font-mono text-[#46ebe3] uppercase tracking-widest">
            CONNECTED DIGITAL SOLUTIONS
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {domains.map((item) => (
            <div
              key={item.domain}
              className="site-3d-surface p-7 rounded-2xl bg-[#101725] border border-[rgba(245,247,251,0.08)] hover:border-[rgba(79,140,255,0.4)] transition-all group flex flex-col justify-between"
            >
              <div>
                <div
                  className={`text-xs font-mono mb-2 uppercase font-semibold ${item.color}`}
                >
                  {item.domain}
                </div>
                <h3 className="text-xl font-bold text-[#F5F7FB] mb-2 group-hover:text-[#46ebe3] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>
              <a
                href="#contact"
                className="mt-2 inline-flex min-h-10 w-fit items-center justify-center rounded-full border border-[#46ebe3]/50 bg-transparent px-5 text-xs font-mono uppercase tracking-wider text-[#46ebe3] transition-all duration-200 hover:border-[#46ebe3] hover:bg-[#46ebe3] hover:text-[#07090F] hover:shadow-[0_0_24px_rgba(70,235,227,0.24)] active:scale-95"
              >
                <span>Apply to this field</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
