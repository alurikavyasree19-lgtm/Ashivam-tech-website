"use client";

import React from "react";
import Image from "next/image";
import { Factory, PartyPopper, Rocket, ShieldCheck } from "lucide-react";

export default function About() {
  const principles = [
    {
      num: "01 / DISCIPLINE",
      title: "Engineering Excellence",
      desc: "Craftsmanship, clean codebases, and architectural rigor in every microservice and line deployed.",
      icon: Factory,
      color: "text-[#afc6ff]",
      border: "hover:border-[#afc6ff]/40",
    },
    {
      num: "02 / EMPATHY",
      title: "Human-Centered Design",
      desc: "Understanding people first, creating workflows that feel fluid, intuitive, and conversion-focused.",
      icon: PartyPopper,
      color: "text-[#46ebe3]",
      border: "hover:border-[#46ebe3]/40",
    },
    {
      num: "03 / STABILITY",
      title: "Reliable Architecture",
      desc: "Enterprise durability, high test coverage, deterministic deployments, and resilient cloud persistence.",
      icon: ShieldCheck,
      color: "text-[#cdbdff]",
      border: "hover:border-[#cdbdff]/40",
    },
    {
      num: "04 / MOMENTUM",
      title: "Continuous Innovation",
      desc: "Leveraging current tooling, automated workflows, and modern intelligence to stay ahead of obsolescence.",
      icon: Rocket,
      color: "text-[#00cec7]",
      border: "hover:border-[#00cec7]/40",
    },
  ];

  const telemetry = [
    {
      metric: "Growing",
      label: "Active Production Projects",
      detail: "In-flight client deliverables",
      color: "text-[#F5F7FB]",
    },
    {
      metric: "15+",
      label: "Modern Technologies",
      detail: "Full-stack & cloud mastery",
      color: "text-[#46ebe3]",
    },
    {
      metric: "Agra & Global",
      label: "Headquarters & Reach",
      detail: "Uttar Pradesh, India hub",
      color: "text-[#afc6ff]",
    },
    {
      metric: "Always",
      label: "Ideas in Development",
      detail: "Continuous research pipeline",
      color: "text-[#cdbdff]",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 border-t border-[rgba(245,247,251,0.08)] bg-[#101725]/40 relative"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="text-xs font-mono text-[#46ebe3] uppercase tracking-widest mb-2.5">
              WHO WE ARE
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#F5F7FB] tracking-tight">
              Technology with Purpose. <br />
              <span className="text-[#94A3B8]">Engineering with Intent.</span>
            </h2>
          </div>
          <p className="text-base text-[#94A3B8] max-w-md leading-relaxed">
            Ashivam Technologies is a technology-driven company headquartered in Agra, India, focused on creating useful, scalable and modern digital solutions that solve real business problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-10">
          <div className="relative h-56 md:h-[380px] md:col-span-7 rounded-3xl overflow-hidden border border-[rgba(245,247,251,0.08)] shadow-2xl group">
            <Image
              src="/images/about-team.jpg"
              alt="A collaborative team working together around a laptop"
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#07090F]/80 via-[#07090F]/30 to-transparent" />
            <div className="absolute bottom-5 left-5 md:bottom-7 md:left-7">
              <div className="text-xs font-mono text-[#46ebe3] uppercase tracking-widest">
                BUILT TOGETHER
              </div>
              <div className="text-lg md:text-xl font-bold text-[#F5F7FB] mt-1">
                Practical ideas. Thoughtful engineering.
              </div>
            </div>
          </div>
          <div className="md:col-span-5 grid grid-cols-2 md:grid-cols-1 md:grid-rows-2 gap-4">
            <div className="relative h-36 md:h-auto md:min-h-0 rounded-2xl overflow-hidden border border-[rgba(245,247,251,0.08)] shadow-xl group">
              <Image
                src="/images/about-engineering.jpg"
                alt="A laptop displaying code in a bright workspace"
                fill
                sizes="(max-width: 768px) 50vw, 40vw"
                className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
              />
            </div>
            <div className="relative h-36 md:h-auto md:min-h-0 rounded-2xl overflow-hidden border border-[rgba(245,247,251,0.08)] shadow-xl group">
              <Image
                src="/images/about-teamwork.jpg"
                alt="A bright, modern collaborative workspace"
                fill
                sizes="(max-width: 768px) 50vw, 40vw"
                className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* 4 Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((p) => (
            <div
              key={p.num}
              className={`site-3d-surface bg-[#101725] border border-[rgba(245,247,251,0.08)] rounded-2xl p-6 laser-border-t transition-all duration-300 ${p.border} group`}
            >
              <div className="flex items-center justify-between mb-5">
                <div className="text-xs font-mono text-[#475569]">{p.num}</div>
                <div className="w-10 h-10 rounded-xl bg-[#07090F] border border-[rgba(245,247,251,0.08)] flex items-center justify-center group-hover:scale-105 transition-transform">
                  <p.icon
                    aria-hidden="true"
                    className={`h-5 w-5 ${p.color}`}
                    strokeWidth={1.8}
                  />
                </div>
              </div>
              <h3 className="text-lg font-bold text-[#F5F7FB] mb-2">{p.title}</h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Growth Telemetry Strip */}
        <div className="site-3d-surface mt-14 p-8 rounded-2xl bg-[#172033]/60 border border-[rgba(245,247,251,0.08)] grid grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left">
          {telemetry.map((t) => (
            <div key={t.label} className="space-y-1">
              <div className={`text-3xl md:text-4xl font-extrabold ${t.color}`}>
                {t.metric}
              </div>
              <div className="text-sm font-semibold text-[#F5F7FB]">{t.label}</div>
              <p className="text-xs text-[#475569] font-mono">{t.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
