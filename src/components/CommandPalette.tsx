"use client";

import React, { useState, useEffect } from "react";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProject?: (projectTitle: string) => void;
}

export default function CommandPalette({
  isOpen,
  onClose,
}: CommandPaletteProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const quickItems = [
    {
      title: "Engineering Services",
      desc: "Full-stack web, native mobile, microservices & AI systems",
      href: "#services",
      hash: "#services",
      icon: "layers",
      color: "text-[#46ebe3]",
    },
    {
      title: "Technology Architecture Map",
      desc: "Spring Boot, React, Kotlin, Android, Redis & Cloud infrastructure",
      href: "#technology",
      hash: "#technology",
      icon: "hub",
      color: "text-[#afc6ff]",
    },
    {
      title: "Verified Production Projects",
      desc: "EduConnect, SwiftAttend, BizFlow ERP, TaskMind & APIForge",
      href: "#projects",
      hash: "#projects",
      icon: "inventory_2",
      color: "text-[#00cec7]",
    },
    {
      title: "Open Roles & Careers",
      desc: "Android Developer, Full-Stack Software Engineer, Internship Cohort",
      href: "#careers",
      hash: "#careers",
      icon: "school",
      color: "text-[#FACC15]",
    },
  ];

  const filteredItems = quickItems.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.desc.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 transition-all"
      onClick={onClose}
    >
      <div
        className="site-3d-surface bg-[#172033] border border-[rgba(245,247,251,0.12)] rounded-2xl max-w-xl w-full shadow-2xl p-6 relative laser-border-t animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-[rgba(245,247,251,0.08)]">
          <div className="flex items-center gap-3 text-[#46ebe3] font-mono text-xs uppercase tracking-wider">
            <span className="material-symbols-outlined text-sm">terminal</span>
            <span>Ashivam Architecture Command System</span>
          </div>
          <button
            onClick={onClose}
            className="text-[#94A3B8] hover:text-[#F5F7FB] text-xs font-mono px-2 py-1 rounded bg-[#07090F] border border-[rgba(245,247,251,0.08)]"
          >
            ESC
          </button>
        </div>

        <div className="mt-4 flex items-center gap-3 bg-[#0B101A] px-4 py-3 rounded-xl border border-[rgba(245,247,251,0.12)] focus-within:border-[#528dff]">
          <span className="material-symbols-outlined text-[#94A3B8]">search</span>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search architecture, services, projects or careers..."
            className="bg-transparent border-none text-[#F5F7FB] placeholder-[#475569] w-full focus:outline-none text-sm"
            autoFocus
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="text-[#94A3B8] hover:text-[#F5F7FB] text-xs"
            >
              Clear
            </button>
          )}
        </div>

        <div className="mt-5 space-y-2 max-h-80 overflow-y-auto pr-1">
          <div className="text-[11px] font-mono text-[#475569] uppercase tracking-wider px-2">
            Direct Access
          </div>
          {filteredItems.length === 0 ? (
            <div className="text-center py-8 text-[#94A3B8] text-sm">
              No matching commands or architecture documents found.
            </div>
          ) : (
            filteredItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                onClick={onClose}
                className="flex items-center justify-between p-3 rounded-xl hover:bg-[#101725] border border-transparent hover:border-[rgba(245,247,251,0.08)] transition-all group"
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`material-symbols-outlined text-base ${item.color}`}
                  >
                    {item.icon}
                  </span>
                  <div>
                    <div className="text-[#F5F7FB] text-sm font-semibold group-hover:text-[#46ebe3] transition-colors">
                      {item.title}
                    </div>
                    <div className="text-xs text-[#94A3B8]">{item.desc}</div>
                  </div>
                </div>
                <span className="text-[#475569] text-xs font-mono">
                  {item.hash}
                </span>
              </a>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
