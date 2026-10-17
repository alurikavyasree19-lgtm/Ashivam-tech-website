"use client";

import React, { useEffect } from "react";

export interface ProjectData {
  title: string;
  category: "all" | "web" | "mobile" | "software" | "experiment";
  status: string;
  subtitle: string;
  desc: string;
  detailedDesc: string;
  tags: string[];
  deployment: string;
}

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="site-3d-surface bg-[#101725] border border-[rgba(79,140,255,0.35)] rounded-2xl max-w-2xl w-full shadow-2xl p-7 relative laser-border-t animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#94A3B8] hover:text-[#F5F7FB] p-1.5 rounded-lg bg-[#07090F] border border-[rgba(245,247,251,0.08)]"
          aria-label="Close modal"
        >
          <span className="material-symbols-outlined text-sm">close</span>
        </button>

        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-[rgba(245,247,251,0.08)] pb-3 pr-8">
            <span className="text-xs font-mono text-[#46ebe3] uppercase font-semibold">
              {project.status} · {project.subtitle}
            </span>
          </div>

          <h3 className="text-2xl md:text-3xl font-extrabold text-[#F5F7FB] tracking-tight">
            {project.title}
          </h3>

          <p className="text-base text-[#94A3B8] leading-relaxed">
            {project.detailedDesc}
          </p>

          <div className="pt-2">
            <div className="text-xs font-mono text-[#475569] uppercase tracking-wider mb-2.5">
              Technology Architecture &amp; Frameworks
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-lg bg-[#07090F] border border-[rgba(245,247,251,0.12)] text-xs font-mono text-[#F5F7FB]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-5 border-t border-[rgba(245,247,251,0.08)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="text-xs font-mono text-[#475569]">
              Deployment Status:{" "}
              <span className="text-[#46ebe3] font-semibold">
                {project.deployment}
              </span>
            </div>
            <a
              href="#contact"
              onClick={onClose}
              className="site-3d-button inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#528dff] text-[#00275f] text-xs font-bold hover:bg-[#46ebe3] hover:text-[#07090F] transition-colors"
            >
              <span>Request Architectural Deep Dive</span>
              <span className="material-symbols-outlined text-sm">east</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
