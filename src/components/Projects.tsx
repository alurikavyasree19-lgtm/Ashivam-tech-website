"use client";

import React, { useState } from "react";
import Image from "next/image";
import ProjectModal, { ProjectData } from "./ProjectModal";

export const projectsList: ProjectData[] = [
  {
    title: "EduConnect Platform",
    category: "web",
    status: "In Development",
    subtitle: "Web Platform",
    desc: "Comprehensive education management platform connecting students, educators and institutions with modern collaborative tools and grade dashboards.",
    detailedDesc:
      "A comprehensive digital campus portal connecting over thousands of students and faculty with courseware, real-time messaging, and grade computation algorithms.",
    tags: ["React", "Spring Boot", "MySQL", "Firebase", "REST API"],
    deployment: "Active Client Deployment",
  },
  {
    title: "SwiftAttend",
    category: "mobile",
    status: "Active",
    subtitle: "Mobile Android",
    desc: "Smart attendance tracking Android application with real-time dashboard analytics and automated compliance reporting for organizations.",
    detailedDesc:
      "Engineered to replace manual roll-calls with geo-fenced mobile check-ins, automated audit generation, and live administrative sync.",
    tags: ["Kotlin", "Android Native", "Firebase Cloud Messaging", "Jetpack Architecture"],
    deployment: "Production Release v2.4",
  },
  {
    title: "BizFlow ERP",
    category: "software",
    status: "Planning",
    subtitle: "Enterprise ERP",
    desc: "Lightweight ERP system engineered for growing enterprises to orchestrate warehouse inventory, GST invoicing, and team payroll frictionlessly.",
    detailedDesc:
      "A microservices-driven ERP targeting SMEs across North India, delivering lightning-quick inventory reconciliations and real-time ledger accounting.",
    tags: ["Spring Boot 3", "Java 21", "React 18", "Docker", "MySQL"],
    deployment: "Architecture Finalized",
  },
  {
    title: "TaskMind",
    category: "mobile",
    status: "In Development",
    subtitle: "Mobile App",
    desc: "A minimalist task and project management application built for high-output engineering pods that prize cognitive clarity over clutter.",
    detailedDesc:
      "Offline-first productivity engine featuring bidirectional synchronization, natural language task scheduling, and biometric card locks.",
    tags: ["Kotlin", "Room DB", "Coroutines", "Firebase Firestore"],
    deployment: "Beta Testing Cohort",
  },
  {
    title: "PortfolioKit",
    category: "experiment",
    status: "Experiment",
    subtitle: "Open Source Engine",
    desc: "An open-source portfolio generator enabling technical creators and architects to deploy sleek portfolios without boilerplate code.",
    detailedDesc:
      "Lightweight markdown-first portfolio compiler tailored for designers and software developers seeking terminal-themed web showcases.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    deployment: "Open Sourced on GitHub",
  },
  {
    title: "APIForge",
    category: "experiment",
    status: "Experiment",
    subtitle: "Developer Utility",
    desc: "Developer tool for rapid REST API prototyping, endpoint mock generation, payload fuzzing, and interactive OpenAPI documentation.",
    detailedDesc:
      "Instant synthetic JSON generator and contract tester enabling frontend engineers to work concurrently without waiting for backend commits.",
    tags: ["Python FastAPI", "React", "TypeScript", "Swagger Specs"],
    deployment: "Internal Research",
  },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  const filterTabs = [
    { key: "all", label: "All Projects" },
    { key: "web", label: "Web" },
    { key: "mobile", label: "Mobile" },
    { key: "software", label: "Enterprise Software" },
    { key: "experiment", label: "Experiments" },
  ];

  const filtered =
    activeCategory === "all"
      ? projectsList
      : projectsList.filter((p) => p.category === activeCategory);

  return (
    <section
      id="projects"
      className="py-24 border-t border-[rgba(245,247,251,0.08)] bg-[#101725]/20"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-mono text-[#46ebe3] uppercase tracking-widest mb-2.5">
              SELECTED WORK &amp; PRODUCT INNOVATION
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#F5F7FB] tracking-tight">
              Engineered Ideas. Meaningful Digital Experiences.
            </h2>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {filterTabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveCategory(tab.key)}
                className={`px-4 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                  activeCategory === tab.key
                    ? "bg-[#528dff] text-[#00275f] font-bold shadow-lg shadow-[#528dff]/20"
                    : "bg-[#101725] text-[#94A3B8] hover:text-[#F5F7FB] border border-[rgba(245,247,251,0.08)]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => {
            const statusBadgeColor =
              item.status === "Active"
                ? "bg-emerald-400/10 text-emerald-400"
                : item.status === "Experiment"
                ? "bg-[#FACC15]/10 text-[#FACC15]"
                : item.status === "Planning"
                ? "bg-[#cdbdff]/10 text-[#cdbdff]"
                : "bg-[#46ebe3]/10 text-[#46ebe3]";

            return (
              <div
                key={item.title}
                className="site-3d-surface bg-[#101725] border border-[rgba(245,247,251,0.08)] rounded-2xl p-7 hover:border-[rgba(79,140,255,0.4)] transition-all duration-300 flex flex-col justify-between laser-border-t group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`px-2.5 py-1 rounded text-[11px] font-mono font-semibold ${statusBadgeColor}`}
                    >
                      {item.status}
                    </span>
                    <span className="text-xs font-mono text-[#475569]">
                      {item.subtitle}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#F5F7FB] mb-2 group-hover:text-[#46ebe3] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#94A3B8] leading-relaxed mb-5">
                    {item.desc}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {item.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded bg-[#07090F] text-[10px] font-mono text-[#94A3B8] border border-[rgba(245,247,251,0.08)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setSelectedProject(item)}
                  className="w-full py-3 rounded-xl bg-[#07090F] border border-[rgba(245,247,251,0.08)] hover:border-[#46ebe3] text-[#F5F7FB] text-xs font-mono uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer group-hover:bg-[#172033]"
                >
                  <span>View Architecture</span>
                  <span className="material-symbols-outlined text-sm">visibility</span>
                </button>
              </div>
            );
          })}
        </div>

        {/* Real Analytics Observability Teaser Card */}
        <div className="site-3d-surface mt-16 rounded-3xl bg-[#101725] border border-[rgba(245,247,251,0.08)] p-8 md:p-10 flex flex-col lg:flex-row items-center gap-8 laser-border-t">
          <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden border border-[rgba(245,247,251,0.08)] relative group shadow-2xl">
            {/* Real Dashboard graphic from Stitch */}
            <Image
              src="/images/telemetry-dashboard.png"
              alt="System Analytics Dashboard"
              width={640}
              height={360}
              className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07090F] via-transparent to-transparent" />
            <div className="absolute bottom-4 left-5 text-xs font-mono text-[#46ebe3] flex items-center gap-2 bg-[#07090F]/80 backdrop-blur-md px-3 py-1 rounded-full border border-[#46ebe3]/30">
              <span className="w-2 h-2 rounded-full bg-[#46ebe3] animate-ping" />
              <span>Real-time Telemetry Engine</span>
            </div>
          </div>

          <div className="w-full lg:w-1/2 space-y-4">
            <div className="text-xs font-mono text-[#afc6ff] uppercase tracking-wider font-semibold">
              ENTERPRISE TELEMETRY
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-[#F5F7FB] tracking-tight">
              Live Observability Built Directly into Production.
            </h3>
            <p className="text-base text-[#94A3B8] leading-relaxed">
              We don&apos;t launch software and walk away. Every enterprise system ships with real-time health dashboards, database load metrics, error tracking, and automated failover monitoring.
            </p>
            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-[#46ebe3] font-bold text-sm hover:text-[#F5F7FB] transition-colors"
              >
                <span>Request Architecture Demonstration</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
