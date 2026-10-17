"use client";

import React from "react";
import Image from "next/image";

export default function Process() {
  const stages = [
    {
      num: "01",
      tag: "STAGE ONE",
      title: "Discover & Scope",
      desc: "Deep requirements gathering, stakeholder alignment, user journeys, and technical feasibility audits.",
      deliverable: "Product Specs & UX Flow",
      color: "text-[#46ebe3]",
    },
    {
      num: "02",
      tag: "STAGE TWO",
      title: "Architect & Design",
      desc: "Database schemas, API protocols, microservice topology, and design tokens drafted in high fidelity.",
      deliverable: "System Blueprint & Figma Specs",
      color: "text-[#afc6ff]",
    },
    {
      num: "03",
      tag: "STAGE THREE",
      title: "Engineer & Test",
      desc: "Sprints of test-driven code execution, automated unit test suites, integration tests, and code reviews.",
      deliverable: "Verified Sprint Releases",
      color: "text-[#cdbdff]",
    },
    {
      num: "04",
      tag: "STAGE FOUR",
      title: "Launch & Evolve",
      desc: "Production release via CI/CD, real-time logging, security monitoring, and continuous iterations.",
      deliverable: "Live Production Platform",
      color: "text-[#00cec7]",
    },
  ];

  return (
    <section className="py-24 max-w-7xl mx-auto px-6 md:px-12">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="text-xs font-mono text-[#46ebe3] uppercase tracking-widest mb-2.5">
          HOW WE BUILD
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-[#F5F7FB] tracking-tight">
          A Disciplined Process. Better Digital Outcomes.
        </h2>
        <p className="text-base text-[#94A3B8] mt-3 leading-relaxed">
          From early architectural blueprinting to automated continuous deployment, our execution model guarantees clarity and momentum.
        </p>
      </div>

      <div className="relative h-48 md:h-56 rounded-3xl overflow-hidden border border-[rgba(245,247,251,0.08)] shadow-xl mb-8">
        <Image
          src="/images/process-planning.jpg"
          alt="Product team planning a project together"
          fill
          sizes="(max-width: 768px) 100vw, 1152px"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07090F]/80 via-[#07090F]/35 to-transparent" />
        <div className="absolute bottom-5 left-5 md:bottom-7 md:left-7">
          <div className="text-xs font-mono text-[#46ebe3] uppercase tracking-widest">
            CLARITY AT EVERY STAGE
          </div>
          <p className="text-lg md:text-2xl font-bold text-[#F5F7FB] mt-1">
            From the first conversation to continuous improvement.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
        {stages.map((st) => (
          <div
            key={st.num}
            className="site-3d-surface bg-[#101725] border border-[rgba(245,247,251,0.08)] rounded-2xl p-7 relative laser-border-t flex flex-col justify-between hover:border-[rgba(79,140,255,0.4)] transition-all"
          >
            <div>
              <div
                className={`text-4xl font-extrabold ${st.color} opacity-40 mb-4 font-mono`}
              >
                {st.num}
              </div>
              <div
                className={`text-xs font-mono uppercase tracking-wider mb-1 font-semibold ${st.color}`}
              >
                {st.tag}
              </div>
              <h3 className="text-xl font-bold text-[#F5F7FB] mb-2">{st.title}</h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">
                {st.desc}
              </p>
            </div>
            <div className="pt-4 border-t border-[rgba(245,247,251,0.08)] text-xs font-mono text-[#475569]">
              Deliverable: <span className="text-[#F5F7FB]">{st.deliverable}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
