"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import CommandPalette from "@/components/CommandPalette";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Solutions from "@/components/Solutions";
import Technology from "@/components/Technology";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import Principles from "@/components/Principles";
import Careers from "@/components/Careers";
import Culture from "@/components/Culture";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#07090F] text-[#F5F7FB] selection:bg-[#528dff] selection:text-[#002d6c]">
      {/* Navigation */}
      <Navbar onOpenCommand={() => setCommandPaletteOpen(true)} />

      {/* Command Palette Modal (Cmd+K / Ctrl+K) */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
      />

      {/* Main Content with subtle architectural grid mesh background */}
      <main className="relative z-10 grid-mesh">
        <Hero />
        <About />
        <Services />
        <Solutions />
        <Technology />
        <Projects />
        <Process />
        <Principles />
        <Careers />
        <Culture />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
