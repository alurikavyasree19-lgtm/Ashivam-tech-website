"use client";

import React from "react";

export default function Principles() {
  const cards = [
    {
      num: "01 / ENGINEER",
      title: "Modern Engineering",
      desc: "We focus on current technologies and scalable development practices that are built to grow with your product rather than anchoring you to legacy tech debt.",
      code: "const system = new ScalableArchitecture({ resilience: true, latency: 'optimal' });",
      color: "text-[#46ebe3]",
    },
    {
      num: "02 / IMAGINE",
      title: "Creative Thinking",
      desc: "We approach every challenge from both a technical and user perspective, finding solutions that truly resonate while eliminating friction at every touchpoint.",
      code: "DesignSystem.validate({ userEmpathy: 1.0, cognitiveLoad: 'minimal' });",
      color: "text-[#afc6ff]",
    },
    {
      num: "03 / REFINE",
      title: "Quality First",
      desc: "Clean architecture, thoughtful design and maintainable code are non-negotiable principles in everything we construct and ship.",
      code: "assert(codeQuality.coverage >= 95 && securityAudit.passed === true);",
      color: "text-[#cdbdff]",
    },
    {
      num: "04 / EVOLVE",
      title: "Future Ready",
      desc: "Every solution is designed with tomorrow in mind — scalable, modular, adaptable, and completely unbothered by exponential user growth.",
      code: "await CloudCluster.autoScale({ demand: 'unlimited', zeroDowntime: true });",
      color: "text-[#00cec7]",
    },
  ];

  return (
    <section className="py-24 border-t border-[rgba(245,247,251,0.08)] bg-[#101725]/25">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono text-[#46ebe3] uppercase tracking-widest mb-2.5">
            OUR PRINCIPLES
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#F5F7FB] tracking-tight">
            Built on Principles That Outlast Trends.
          </h2>
          <p className="text-base text-[#94A3B8] mt-3 leading-relaxed">
            We do not simply write code — we think deeply about software architecture, engineer for resilience, and design intuitive products built to stand the test of time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((c) => (
            <div
              key={c.num}
              className="site-3d-surface bg-[#101725] border border-[rgba(245,247,251,0.08)] rounded-2xl p-8 laser-border-t hover:border-[rgba(79,140,255,0.4)] transition-all flex flex-col justify-between"
            >
              <div>
                <div className={`text-xs font-mono uppercase mb-2 font-semibold ${c.color}`}>
                  {c.num}
                </div>
                <h3 className="text-2xl font-bold text-[#F5F7FB] mb-3">
                  {c.title}
                </h3>
                <p className="text-base text-[#94A3B8] leading-relaxed">
                  {c.desc}
                </p>
              </div>

              <div className="mt-6 bg-[#07090F] p-4 rounded-xl font-mono text-xs text-[#94A3B8] border border-[rgba(245,247,251,0.08)] overflow-x-auto">
                <code className="text-[#afc6ff]">{c.code}</code>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
