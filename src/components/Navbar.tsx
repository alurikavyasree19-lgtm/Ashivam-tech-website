"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Menu, Terminal, X } from "lucide-react";

interface NavbarProps {
  onOpenCommand: () => void;
}

export default function Navbar({ onOpenCommand }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Solutions", href: "#solutions" },
    { label: "Technology", href: "#technology" },
    { label: "Projects", href: "#projects" },
    { label: "Careers", href: "#careers" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 w-full bg-[#11131a]/80 backdrop-blur-md border-b border-[rgba(245,247,251,0.08)] shadow-2xl transition-all duration-200">
      <div className="flex justify-between items-center w-full px-6 md:px-12 max-w-7xl mx-auto h-20">
        {/* Brand Logo Anchor */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-[#101725] border border-[rgba(245,247,251,0.12)] flex items-center justify-center p-1.5 shadow-lg group-hover:border-[#46ebe3] transition-all overflow-hidden relative">
            <Image
              src="/ashivam-logo.jpg"
              alt="Ashivam Technologies official logo"
              width={36}
              height={36}
              className="object-contain rounded-lg"
              onError={(e) => {
                // fallback to letter A
                const target = e.currentTarget as HTMLElement;
                target.style.display = "none";
              }}
            />
            <span className="text-[#46ebe3] font-bold text-lg hidden">A</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-[#F5F7FB] flex items-center">
              Ashivam{" "}
              <span className="ml-1.5 text-[#46ebe3] text-xs font-mono font-semibold tracking-widest uppercase px-1.5 py-0.5 rounded bg-[#46ebe3]/10 border border-[#46ebe3]/20">
                Tech
              </span>
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center space-x-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[#94A3B8] hover:text-[#F5F7FB] transition-colors duration-200 text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Trailing Primary Action & Command Palette Trigger */}
        <div className="flex items-center space-x-3">
          {/* Cmd+K Shortcut Badge */}
          <button
            onClick={onOpenCommand}
            className="hidden xl:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0B101A] border border-[rgba(245,247,251,0.12)] text-[#94A3B8] hover:text-[#F5F7FB] hover:border-[rgba(79,140,255,0.4)] text-xs font-mono transition-all cursor-pointer"
            title="Open Command Palette (Cmd+K)"
          >
            <span className="text-xs">⌘</span>
            <span>K</span>
          </button>

          <a
            href="#contact"
            className="site-3d-button hidden sm:inline-flex items-center px-5 py-2.5 rounded-lg bg-[#528dff] text-[#00275f] text-sm font-bold shadow-lg shadow-[#528dff]/25 hover:shadow-[#46ebe3]/30 hover:scale-[1.02] active:scale-95 transition-all duration-150"
          >
            <span>Start a Project</span>
          </a>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden relative flex h-11 w-11 items-center justify-center rounded-xl border border-[rgba(79,140,255,0.4)] bg-gradient-to-br from-[#101725] via-[#13213d] to-[#0b101a] text-[#F5F7FB] shadow-[0_12px_30px_rgba(82,141,255,0.24)] transition-all duration-200 hover:scale-[1.03] hover:border-[#46ebe3]/60 hover:shadow-[0_16px_40px_rgba(70,235,227,0.25)] active:scale-95"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#101725] border-b border-[rgba(245,247,251,0.08)] px-6 py-6 space-y-4 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3 text-base">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#94A3B8] hover:text-[#46ebe3] transition-colors py-1 font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-4 border-t border-[rgba(245,247,251,0.08)] flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCommand();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#0B101A] border border-[rgba(245,247,251,0.12)] text-[#94A3B8] text-xs font-mono"
            >
              <Terminal aria-hidden="true" size={15} />
              <span>Quick Command (Search)</span>
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="site-3d-button w-full flex items-center justify-center py-3 rounded-lg bg-[#528dff] text-[#00275f] font-bold text-sm shadow-lg"
            >
              <span>Start a Project</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
