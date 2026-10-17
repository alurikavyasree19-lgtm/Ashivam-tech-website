"use client";

import React from "react";
import Image from "next/image";

export default function Careers() {
  const roles = [
    {
      title: "Android Developer",
      type: "Open Role · Full-Time",
      location: "Agra / Hybrid",
      desc: "Build high-performance mobile clients with native Kotlin, Jetpack Compose, and real-time cloud sync. Open to ambitious freshers and 1–3 years experience.",
      tags: ["Kotlin", "Android SDK", "Firebase"],
      comp: "₹8,000 – ₹15,000 / mo",
      applyLink:
        "mailto:contact@ashivam.com?subject=Application:%20Android%20Developer",
      image: "/images/careers-android-role.jpg",
      imageAlt: "Smartphone displaying mobile apps",
      color: "text-[#46ebe3]",
      badge: "bg-[#46ebe3]/10 text-[#46ebe3]",
    },
    {
      title: "Full-Stack Software Engineer",
      type: "Open Role · Full-Time",
      location: "Agra / Hybrid",
      desc: "Architect end-to-end web applications bridging modern React frontends with Spring Boot or Python backends and enterprise relational databases.",
      tags: ["React", "Spring Boot", "MySQL"],
      comp: "Competitive / Experience Based",
      applyLink:
        "mailto:contact@ashivam.com?subject=Application:%20Full-Stack%20Engineer",
      image: "/images/careers-engineer.jpg",
      imageAlt: "Software engineer working on a laptop",
      color: "text-[#afc6ff]",
      badge: "bg-[#afc6ff]/10 text-[#afc6ff]",
    },
  ];

  return (
    <section id="careers" className="py-24 max-w-7xl mx-auto px-6 md:px-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <div className="text-xs font-mono text-[#46ebe3] uppercase tracking-widest mb-2.5">
            OPPORTUNITIES
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#F5F7FB] tracking-tight">
            Do Meaningful Work. Keep Learning. Build What’s Next.
          </h2>
        </div>
        <p className="text-base text-[#94A3B8] max-w-md leading-relaxed">
          Ashivam Technologies is building a high-standard software engineering culture in Agra, India, welcoming talented developers, architects, and designers.
        </p>
      </div>

      {/* Job Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {roles.map((r) => (
          <div
            key={r.title}
            className="site-3d-surface bg-[#101725] border border-[rgba(245,247,251,0.08)] rounded-2xl p-5 md:p-6 hover:border-[rgba(79,140,255,0.4)] transition-all laser-border-t flex flex-col justify-between"
          >
            <div className="relative h-36 md:h-40 rounded-xl overflow-hidden border border-[rgba(245,247,251,0.08)] mb-6 group">
              <Image
                src={r.image}
                alt={r.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07090F]/45 to-transparent" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-mono font-semibold ${r.badge}`}
                >
                  {r.type}
                </span>
                <span className="text-xs font-mono text-[#475569]">
                  {r.location}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-[#F5F7FB] mb-3">{r.title}</h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">
                {r.desc}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {r.tags.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-lg bg-[#07090F] border border-[rgba(245,247,251,0.08)] text-xs font-mono text-[#F5F7FB]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between pt-5 border-t border-[rgba(245,247,251,0.08)]">
              <span className="text-xs font-mono text-[#94A3B8]">{r.comp}</span>
              <a
                href={r.applyLink}
                className="text-[#46ebe3] hover:text-[#F5F7FB] text-xs font-mono uppercase tracking-wider flex items-center gap-1.5 transition-colors font-semibold"
              >
                <span>Apply Now</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Internship Cohort Banner */}
      <div className="site-3d-surface rounded-3xl bg-[#172033]/70 border border-[rgba(79,140,255,0.35)] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 laser-border-t">
        <div className="space-y-2 max-w-xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#46ebe3]">
            <span className="material-symbols-outlined text-base">school</span>
            <span>STUDENTS &amp; APPRENTICES</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-extrabold text-[#F5F7FB]">
            Internship Cohort: Learn by Building Real Systems
          </h3>
          <p className="text-sm text-[#94A3B8] leading-relaxed">
            Gain hands-on engineering experience in Software Development, Android Engineering, or UI/UX Design with direct mentorship and verifiable credentials.
          </p>
        </div>
        <div className="relative block w-full max-w-sm h-40 md:w-48 md:h-32 rounded-2xl overflow-hidden border border-[rgba(245,247,251,0.08)] shadow-xl shrink-0">
          <Image
            src="/images/careers-internship.jpg"
            alt="Software team collaborating around laptops"
            fill
            sizes="(max-width: 768px) 100vw, 192px"
            className="object-cover"
          />
        </div>
        <a
          href="mailto:contact@ashivam.com?subject=Application:%20Engineering%20Internship"
          className="site-3d-button px-7 py-3.5 rounded-xl bg-[#101725] border border-[rgba(245,247,251,0.12)] text-[#F5F7FB] hover:border-[#46ebe3] hover:text-[#46ebe3] text-sm font-bold transition-all whitespace-nowrap shadow-lg"
        >
          Apply for Internship Cohort →
        </a>
      </div>
    </section>
  );
}
