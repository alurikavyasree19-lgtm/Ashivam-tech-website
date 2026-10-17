"use client";

import React from "react";
import Image from "next/image";

export default function Technology() {
  const stackGroups = [
    {
      label: "01 · FRONTEND",
      image: "/images/about-engineering.jpg",
      imageAlt: "Developer writing code on a laptop",
      color: "text-[#46ebe3]",
      items: [
        { name: "React", role: "UI Framework" },
        { name: "TypeScript", role: "Type Safety" },
        { name: "JavaScript", role: "Core Web Engine" },
      ],
    },
    {
      label: "02 · BACKEND",
      image: "/images/services-engineering.jpg",
      imageAlt: "Detailed computer hardware representing backend systems",
      color: "text-[#afc6ff]",
      items: [
        { name: "Java", role: "Enterprise Core" },
        { name: "Spring Boot", role: "Microservices & APIs" },
        { name: "Python", role: "Services & Automation" },
      ],
    },
    {
      label: "03 · MOBILE",
      image: "/images/technology-infrastructure.jpg",
      imageAlt: "Team working with laptops and mobile devices",
      color: "text-[#cdbdff]",
      items: [
        { name: "Android", role: "Native Platform" },
        { name: "Kotlin", role: "Modern Mobile Lang" },
        { name: "Jetpack Compose", role: "Declarative UI" },
      ],
    },
    {
      label: "04 · DATABASE",
      image: "/images/telemetry-dashboard.png",
      imageAlt: "Data analytics dashboard",
      color: "text-[#00cec7]",
      items: [
        { name: "MySQL", role: "Relational Storage" },
        { name: "Firebase", role: "Real-Time Cloud" },
        { name: "Redis Cache", role: "In-Memory Speeds" },
      ],
    },
    {
      label: "05 · TOOLS & DESIGN",
      image: "/images/team-collaboration.png",
      imageAlt: "Product team planning design work",
      color: "text-[#d9e2ff]",
      items: [
        { name: "Git", role: "Version Control" },
        { name: "Figma", role: "Design Systems" },
        { name: "CI/CD Pipelines", role: "Automated Delivery" },
      ],
    },
  ];

  return (
    <section id="technology" className="py-24 max-w-7xl mx-auto px-6 md:px-12">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="text-xs font-mono text-[#46ebe3] uppercase tracking-widest mb-2.5">
          ENGINEERING INFRASTRUCTURE
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-[#F5F7FB] tracking-tight">
          Every Layer Engineered to Work as One.
        </h2>
        <p className="text-base text-[#94A3B8] mt-3 leading-relaxed">
          A unified, interconnected technology network engineered for high throughput, enterprise resilience, and rapid continuous delivery.
        </p>
      </div>

      {/* Connected Architecture Pipeline Flow */}
      <div className="site-3d-surface bg-[#101725] border border-[rgba(245,247,251,0.08)] rounded-3xl p-6 md:p-8 mb-12 laser-border-t">
        <div className="text-xs font-mono text-[#475569] uppercase tracking-wider mb-6 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#46ebe3]" />
          <span>A Connected Product Architecture Pipeline</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-7 gap-3 items-center">
          {/* Step 1 */}
          <div className="site-3d-surface p-5 rounded-xl bg-[#172033] border border-[rgba(245,247,251,0.08)] flex flex-col items-center text-center hover:border-[#46ebe3] transition-all">
            <span className="material-symbols-outlined text-[#afc6ff] text-2xl mb-2">
              devices
            </span>
            <span className="text-sm font-bold text-[#F5F7FB]">Client Layer</span>
            <span className="text-[11px] font-mono text-[#94A3B8] mt-1">
              React · Android Kotlin
            </span>
            <span className="mt-3 px-2 py-0.5 rounded bg-[#07090F] text-[10px] font-mono text-[#46ebe3]">
              01 / INGEST
            </span>
          </div>

          {/* Flow 1 */}
          <div className="hidden md:flex flex-col items-center justify-center text-[#46ebe3]">
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#46ebe3] animate-ping" />
              <span className="material-symbols-outlined text-base">east</span>
            </div>
            <span className="text-[10px] font-mono text-[#475569] mt-1">gRPC / HTTPS</span>
          </div>

          {/* Step 2 */}
          <div className="site-3d-surface p-5 rounded-xl bg-[#172033] border border-[rgba(245,247,251,0.08)] flex flex-col items-center text-center hover:border-[#46ebe3] transition-all">
            <span className="material-symbols-outlined text-[#46ebe3] text-2xl mb-2">
              router
            </span>
            <span className="text-sm font-bold text-[#F5F7FB]">API Gateway</span>
            <span className="text-[11px] font-mono text-[#94A3B8] mt-1">
              REST · Auth &amp; Rate Limits
            </span>
            <span className="mt-3 px-2 py-0.5 rounded bg-[#07090F] text-[10px] font-mono text-[#46ebe3]">
              02 / ROUTE
            </span>
          </div>

          {/* Flow 2 */}
          <div className="hidden md:flex flex-col items-center justify-center text-[#46ebe3]">
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#46ebe3] animate-ping" />
              <span className="material-symbols-outlined text-base">east</span>
            </div>
            <span className="text-[10px] font-mono text-[#475569] mt-1">Async Queues</span>
          </div>

          {/* Step 3 */}
          <div className="site-3d-surface p-5 rounded-xl bg-[#172033] border border-[rgba(245,247,251,0.08)] flex flex-col items-center text-center hover:border-[#46ebe3] transition-all">
            <span className="material-symbols-outlined text-[#cdbdff] text-2xl mb-2">
              settings_suggest
            </span>
            <span className="text-sm font-bold text-[#F5F7FB]">Microservices</span>
            <span className="text-[11px] font-mono text-[#94A3B8] mt-1">
              Java Spring Boot · Python
            </span>
            <span className="mt-3 px-2 py-0.5 rounded bg-[#07090F] text-[10px] font-mono text-[#46ebe3]">
              03 / COMPUTE
            </span>
          </div>

          {/* Flow 3 */}
          <div className="hidden md:flex flex-col items-center justify-center text-[#46ebe3]">
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#46ebe3] animate-ping" />
              <span className="material-symbols-outlined text-base">east</span>
            </div>
            <span className="text-[10px] font-mono text-[#475569] mt-1">TLS Pooling</span>
          </div>

          {/* Step 4 */}
          <div className="site-3d-surface p-5 rounded-xl bg-[#172033] border border-[rgba(245,247,251,0.08)] flex flex-col items-center text-center hover:border-[#46ebe3] transition-all">
            <span className="material-symbols-outlined text-[#00cec7] text-2xl mb-2">
              database
            </span>
            <span className="text-sm font-bold text-[#F5F7FB]">Persistence</span>
            <span className="text-[11px] font-mono text-[#94A3B8] mt-1">
              MySQL · Firebase Cloud
            </span>
            <span className="mt-3 px-2 py-0.5 rounded bg-[#07090F] text-[10px] font-mono text-[#46ebe3]">
              04 / PERSIST
            </span>
          </div>
        </div>
      </div>

      {/* Tech Stacks Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stackGroups.map((group) => (
          <div
            key={group.label}
            className="site-3d-surface bg-[#101725] border border-[rgba(245,247,251,0.08)] p-6 rounded-2xl hover:border-[rgba(79,140,255,0.4)] transition-all"
          >
            <div className="flex items-center justify-between mb-4">
              <span className={`text-xs font-mono font-semibold ${group.color}`}>
                {group.label}
              </span>
              <div className="relative h-12 w-16 overflow-hidden rounded-lg border border-[rgba(245,247,251,0.12)] bg-[#07090F] shadow-md">
                <Image
                  src={group.image}
                  alt={group.imageAlt}
                  fill
                  sizes="64px"
                  className="object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
            </div>
            <div className="space-y-3">
              {group.items.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between p-3 rounded-xl bg-[#07090F] border border-[rgba(245,247,251,0.08)]"
                >
                  <span className="text-[#F5F7FB] text-sm font-bold">{item.name}</span>
                  <span className="text-xs font-mono text-[#94A3B8]">{item.role}</span>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Engineering Principles Discipline Card */}
        <div className="site-3d-surface bg-[#101725] border border-[rgba(245,247,251,0.08)] p-6 rounded-2xl flex flex-col justify-between laser-border-t">
          <div>
            <span className="text-xs font-mono text-[#46ebe3] font-semibold">
              DISCIPLINE
            </span>
            <h4 className="text-lg font-bold text-[#F5F7FB] mt-2">
              Zero Architectural Compromises
            </h4>
            <p className="text-sm text-[#94A3B8] mt-2 leading-relaxed">
              Every codebase adheres to strict linting, automated testing gates, and modular contracts so teams expand without friction.
            </p>
            <div className="relative h-36 mt-5 rounded-xl overflow-hidden border border-[rgba(245,247,251,0.08)]">
              <Image
                src="/images/technology-infrastructure.jpg"
                alt="Engineers collaborating on a connected technology platform"
                fill
                sizes="(max-width: 1024px) 100vw, 360px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07090F]/55 to-transparent" />
            </div>
          </div>
          <div className="pt-6 flex items-center gap-2 text-xs font-mono text-[#94A3B8]">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>100% Deterministic Deployments</span>
          </div>
        </div>
      </div>
    </section>
  );
}
