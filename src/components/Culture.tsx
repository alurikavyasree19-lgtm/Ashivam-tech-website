"use client";

import React from "react";
import Image from "next/image";

export default function Culture() {
  const pillars = [
    {
      title: "Remote Collaboration",
      desc: "Work from wherever you thrive — our engineers collaborate seamlessly across cities.",
      icon: "wifi",
      color: "text-[#46ebe3]",
    },
    {
      title: "Learning Culture",
      desc: "We invest in individual growth — books, courses, conference passes, and lab time.",
      icon: "menu_book",
      color: "text-[#afc6ff]",
    },
    {
      title: "Open Communication",
      desc: "Ideas flow freely without artificial corporate hierarchies. Every voice carries weight.",
      icon: "chat",
      color: "text-[#cdbdff]",
    },
    {
      title: "Team Ownership",
      desc: "Own your feature from architecture to production telemetry. Take pride in what you ship.",
      icon: "shield",
      color: "text-[#00cec7]",
    },
    {
      title: "Innovation First",
      desc: "We experiment, learn from rapid iterations, and constantly deploy modern solutions.",
      icon: "lightbulb",
      color: "text-[#FACC15]",
    },
    {
      title: "Flexible Contribution",
      desc: "Contribute on your schedule. We prioritize concrete deliverables, not desk vanity.",
      icon: "schedule",
      color: "text-[#46ebe3]",
    },
  ];

  return (
    <section className="py-24 border-t border-[rgba(245,247,251,0.08)] bg-[#101725]/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column with Copy and Team Asset */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs font-mono text-[#46ebe3] uppercase tracking-widest">
              COMPANY CULTURE
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#F5F7FB] leading-tight">
              Collaborative Minds. <br />
              <span className="text-[#94A3B8]">Thoughtful Engineering.</span>
            </h2>
            <p className="text-base text-[#94A3B8] leading-relaxed">
              We build high-trust distributed workflows, communicate transparently, and foster technical excellence. We value craftsmanship, intellectual honesty, and tangible outcomes over bureaucratic hours.
            </p>

            {/* Authentic Team Collaboration Asset */}
            <div className="rounded-2xl overflow-hidden border border-[rgba(245,247,251,0.08)] relative group shadow-2xl">
              <Image
                src="/images/culture-collaboration.jpg"
                alt="Software engineers discussing a project in a modern office"
                width={640}
                height={360}
                className="w-full h-72 object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07090F] via-transparent to-transparent" />
              <div className="absolute bottom-4 left-5 text-xs font-mono text-[#46ebe3] bg-[#07090F]/80 backdrop-blur-md px-3 py-1 rounded-full border border-[#46ebe3]/30">
                Agra Engineering Pod · Peer Review Sessions
              </div>
            </div>
          </div>

          {/* Right Column with 6 Culture Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="site-3d-surface bg-[#101725] border border-[rgba(245,247,251,0.08)] p-6 rounded-2xl hover:border-[rgba(79,140,255,0.4)] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-3">
                    <span className={`material-symbols-outlined text-xl ${p.color}`}>
                      {p.icon}
                    </span>
                    <h3 className="font-bold text-base text-[#F5F7FB]">
                      {p.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[#94A3B8] leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
