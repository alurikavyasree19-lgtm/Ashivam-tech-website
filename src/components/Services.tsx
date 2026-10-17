"use client";

import React from "react";
import Image from "next/image";

export default function Services() {
  const services = [
    {
      num: "01 · WEB ARCHITECTURE",
      title: "Web Development",
      desc: "Modern, responsive and scalable web applications built with React, Next.js, and high-throughput server architecture crafted for ultra-low latency.",
      tags: ["Next.js 14", "Tailwind", "Edge SSR"],
      image: "/images/about-engineering.jpg",
      imageAlt: "Developers working together at laptops",
    },
    {
      num: "02 · MOBILE ECOSYSTEMS",
      title: "Mobile App Development",
      desc: "High-quality native Android and cross-platform mobile experiences designed for peak execution, offline data handling, clean architecture, and delightful ergonomics.",
      tags: ["Kotlin", "Compose", "Offline-First"],
      image: "/images/technology-infrastructure.jpg",
      imageAlt: "Team collaborating around laptops and mobile devices",
    },
    {
      num: "03 · BESPOKE SYSTEMS",
      title: "Custom Software Engineering",
      desc: "Bespoke software platforms engineered around your operational needs. We create clean, testable, maintainable systems designed to handle enterprise evolution seamlessly.",
      tags: ["Modular", "Microservices", "Event-Driven"],
      image: "/images/services-engineering.jpg",
      imageAlt: "Close-up of a computer circuit board",
    },
    {
      num: "04 · DESIGN SYSTEMS",
      title: "UI/UX & Product Design",
      desc: "Clean, intuitive and conversion-focused digital experiences that balance aesthetic luxury with functional ergonomics. Includes comprehensive design systems in Figma.",
      tags: ["Figma Tokens", "Atomic UI", "A11y Audit"],
      image: "/images/team-collaboration.png",
      imageAlt: "Team planning a product on a whiteboard",
    },
    {
      num: "05 · CLOUD BACKEND",
      title: "Backend & Cloud Architecture",
      desc: "Secure, scalable APIs, Spring Boot microservices, Java and Python backends built for high concurrent traffic, transactional integrity, and bulletproof security.",
      tags: ["Spring Boot", "Redis", "Docker"],
      image: "/images/solutions-network.jpg",
      imageAlt: "Earth at night representing global cloud infrastructure",
    },
    {
      num: "06 · INTELLIGENCE",
      title: "AI & Digital Solutions",
      desc: "Technology-driven transformation for organizations ready to automate workflows, integrate intelligent data models, and build automated enterprise operations.",
      tags: ["LLM Agents", "Automation", "FastAPI"],
      image: "/images/telemetry-dashboard.png",
      imageAlt: "Analytics dashboard with live data visualizations",
    },
  ];

  return (
    <section id="services" className="py-24 max-w-7xl mx-auto px-6 md:px-12">
      <div className="mb-16 text-center max-w-3xl mx-auto">
        <div className="text-xs font-mono text-[#46ebe3] uppercase tracking-widest mb-2.5">
          ENGINEERING CAPABILITIES
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-[#F5F7FB] tracking-tight">
          From Ambitious Ideas to Production-Ready Products.
        </h2>
        <p className="text-base text-[#94A3B8] mt-4 leading-relaxed">
          End-to-end software engineering, high-performance product architectures, and digital solutions crafted with craftsmanship and enterprise reliability.
        </p>
      </div>

      <div className="relative h-48 md:h-64 rounded-3xl overflow-hidden border border-[rgba(245,247,251,0.08)] shadow-2xl mb-8 group">
        <Image
          src="/images/services-engineering.jpg"
          alt="Close-up of a circuit board representing modern software engineering"
          fill
          sizes="(max-width: 768px) 100vw, 1152px"
          className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07090F]/80 via-[#07090F]/35 to-transparent" />
        <div className="absolute bottom-5 left-5 md:bottom-7 md:left-7 max-w-xl">
          <div className="text-xs font-mono text-[#46ebe3] uppercase tracking-widest">
            ENGINEERED END TO END
          </div>
          <p className="text-lg md:text-2xl font-bold text-[#F5F7FB] mt-1">
            From architecture to dependable production systems.
          </p>
        </div>
      </div>

      {/* 6 Service Cards Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <div
            key={s.num}
            className="site-3d-surface bg-[#101725] border border-[rgba(245,247,251,0.08)] rounded-2xl p-8 hover:border-[rgba(79,140,255,0.4)] transition-all duration-300 flex flex-col justify-between group laser-border-t"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded bg-[#172033] text-[11px] font-mono text-[#46ebe3] border border-[rgba(245,247,251,0.08)]">
                  {s.num}
                </span>
                <div className="relative h-12 w-12 overflow-hidden rounded-xl border border-[rgba(245,247,251,0.12)] bg-[#07090F] shadow-lg transition-transform duration-200 group-hover:scale-110">
                  <Image
                    src={s.image}
                    alt={s.imageAlt}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
              </div>

              <h3 className="text-xl font-bold text-[#F5F7FB] group-hover:text-[#46ebe3] transition-colors">
                {s.title}
              </h3>

              <p className="text-sm text-[#94A3B8] leading-relaxed">
                {s.desc}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded bg-[#07090F] text-[11px] font-mono text-[#94A3B8] border border-[rgba(245,247,251,0.08)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <a
              href="#contact"
              className="mt-8 inline-flex min-h-11 w-full items-center justify-center rounded-xl border border-[rgba(82,141,255,0.35)] bg-gradient-to-r from-[#172033] to-[#101725] px-4 text-[#46ebe3] font-mono text-xs uppercase tracking-wider shadow-[0_8px_20px_rgba(0,0,0,0.22)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#46ebe3]/60 hover:bg-[#172033] hover:text-[#F5F7FB] hover:shadow-[0_12px_28px_rgba(70,235,227,0.14)] active:translate-y-0"
            >
              <span>Start Consultation</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
