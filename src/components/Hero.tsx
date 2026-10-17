"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Cpu, Eye, Gauge, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-36 pb-20 md:pt-48 md:pb-32 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Ambient photonic backdrop lights */}
      <div className="absolute -top-32 left-1/4 w-96 h-96 bg-[#528dff]/15 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/3 -right-20 w-[500px] h-[500px] bg-[#46ebe3]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Hero Copy Column (7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Live Location Badge */}
          <div className="inline-flex flex-wrap items-center gap-x-2 gap-y-1 max-w-full px-3.5 py-1.5 rounded-full bg-[#101725] border border-[rgba(245,247,251,0.12)] text-[#46ebe3] font-mono text-[10px] sm:text-xs shadow-md">
            <span className="w-2 h-2 rounded-full bg-[#46ebe3] animate-ping" />
            <span className="text-[#F5F7FB] font-medium">Software Engineering</span>
            <span className="text-[#475569]">·</span>
            <span>Agra, India &amp; Global</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#F5F7FB] leading-[1.1]">
            Infinite Possibilities. <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F5F7FB] via-[#afc6ff] to-[#46ebe3]">
              Engineered with Precision.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-[#94A3B8] max-w-2xl leading-relaxed">
            <span className="block text-[#F5F7FB] font-semibold mb-2">
              Innovative Technology. Powerful Solutions.
            </span>
            We transform ambitious ideas into scalable digital products, intelligent software systems, and future-ready technology platforms designed for resilience and velocity.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
            <a
              href="#contact"
              className="site-3d-button inline-flex w-full sm:w-auto justify-center items-center gap-2 px-5 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-[#afc6ff] text-[#002d6c] font-bold text-sm sm:text-base hover:shadow-[0_0_24px_rgba(79,140,255,0.45)] hover:scale-[1.02] active:scale-95 transition-all duration-200"
            >
              <span>Let’s Build Together</span>
              <ArrowRight aria-hidden="true" size={17} />
            </a>
            <a
              href="#projects"
              className="site-3d-button inline-flex w-full sm:w-auto justify-center items-center gap-2 px-5 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-[#101725] border border-[rgba(245,247,251,0.12)] text-[#F5F7FB] hover:border-[rgba(79,140,255,0.4)] hover:bg-[#172033] transition-all duration-200 font-bold text-sm sm:text-base"
            >
              <span>Explore Our Work</span>
              <Eye aria-hidden="true" size={17} />
            </a>
          </div>

          {/* Capability Markers */}
          <div className="flex flex-wrap items-center gap-4 pt-6 text-xs font-mono text-[#94A3B8] border-t border-[rgba(245,247,251,0.08)]">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#afc6ff]" /> Modern Tech Stack
            </span>
            <span className="text-[#475569]">•</span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#46ebe3]" /> Clean Architecture
            </span>
            <span className="text-[#475569]">•</span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e8b83f]" /> Future-Ready Engineering
            </span>
          </div>
        </div>

        {/* Architectural Core Simulation Column (5 Cols) */}
        <div className="lg:col-span-5 relative">
          <div className="hero-3d-stage relative w-full aspect-square max-w-md mx-auto flex items-center justify-center">
            {/* Outer pulsating field */}
            <div className="absolute inset-0 rounded-full border border-[#46ebe3]/20 animate-pulse pointer-events-none" />

            {/* Orbiting Ring 1 */}
            <div className="absolute inset-2 border border-[rgba(245,247,251,0.06)] rounded-full animate-orbit">
              <div className="absolute -top-1.5 left-1/2 w-3 h-3 bg-[#46ebe3] rounded-full shadow-[0_0_14px_#46ebe3]" />
            </div>

            {/* Orbiting Ring 2 */}
            <div className="absolute inset-10 border border-dashed border-[#afc6ff]/30 rounded-full animate-orbit-reverse">
              <div className="absolute -bottom-1.5 right-1/3 w-3 h-3 bg-[#afc6ff] rounded-full shadow-[0_0_14px_#afc6ff]" />
            </div>

            {/* Central Core Box */}
            <div className="hero-core-3d site-3d-surface relative z-10 w-56 h-56 rounded-3xl bg-[#172033]/90 backdrop-blur-xl border border-[rgba(79,140,255,0.4)] shadow-2xl flex flex-col items-center justify-center p-6 text-center laser-border-t group hover:border-[#46ebe3] transition-all overflow-hidden">
              <Image
                src="/images/hero-nebula.jpg"
                alt="A colorful nebula glowing in deep space"
                fill
                priority
                sizes="224px"
                className="object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#07090F]/55 via-[#101725]/60 to-[#07090F]/80" />
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-14 h-14 rounded-2xl bg-[#07090F]/80 border border-[#46ebe3]/40 flex items-center justify-center text-[#46ebe3] mb-3 shadow-[0_0_16px_rgba(70,235,227,0.3)]">
                  <Cpu aria-hidden="true" size={28} />
                </div>
                <div className="text-xs font-mono text-[#46ebe3] uppercase tracking-widest">
                  SYSTEM CORE
                </div>
                <div className="text-2xl font-extrabold text-[#F5F7FB] tracking-tight mt-0.5">
                  ASHIVAM OS
                </div>
                <div className="inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 mt-2.5 px-2.5 py-0.5 rounded-full bg-emerald-400/10 border border-emerald-400/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span>ACTIVE · 240K REQ/S</span>
                </div>
              </div>
            </div>

            {/* Floating Telemetry 1: Latency */}
            <div className="hero-telemetry-float absolute -top-4 left-0 sm:-left-4 z-20 bg-[#101725]/90 backdrop-blur-md border border-[rgba(79,140,255,0.3)] p-3 rounded-2xl shadow-xl flex items-center gap-3 laser-border-t">
              <div className="w-8 h-8 rounded-xl bg-[#46ebe3]/15 text-[#46ebe3] flex items-center justify-center">
                <Gauge aria-hidden="true" size={18} />
              </div>
              <div>
                <div className="text-[10px] font-mono text-[#475569]">LATENCY CORE</div>
                <div className="text-sm font-bold text-[#46ebe3]">&lt; 12ms Global</div>
              </div>
            </div>

            {/* Floating Telemetry 2: Availability */}
            <div className="hero-telemetry-float hero-telemetry-delay absolute -bottom-4 right-0 sm:-right-2 z-20 bg-[#101725]/90 backdrop-blur-md border border-[rgba(79,140,255,0.3)] p-3 rounded-2xl shadow-xl flex items-center gap-3 laser-border-t">
              <div className="w-8 h-8 rounded-xl bg-[#afc6ff]/15 text-[#afc6ff] flex items-center justify-center">
                <ShieldCheck aria-hidden="true" size={18} />
              </div>
              <div>
                <div className="text-[10px] font-mono text-[#475569]">AVAILABILITY</div>
                <div className="text-sm font-bold text-[#F5F7FB]">99.99% Uptime SLA</div>
              </div>
            </div>

            {/* Floating Telemetry 3: Scaled Status */}
            <div className="absolute bottom-12 left-0 sm:-left-6 z-20 bg-[#101725]/90 backdrop-blur-md border border-[rgba(245,247,251,0.1)] p-2.5 rounded-xl shadow-xl flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono text-[#F5F7FB]">Microservices Scaled</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
