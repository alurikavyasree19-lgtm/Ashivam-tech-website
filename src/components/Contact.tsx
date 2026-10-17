"use client";

import React, { useState } from "react";
import Image from "next/image";
import { GitBranch, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

interface InquiryResponse {
  id?: string;
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [inquiryResult, setInquiryResult] = useState<{
    inquiry: InquiryResponse;
  } | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    classification: "Enterprise Web Application",
    domain: "Education Technology",
    investment: "Not Sure Yet / Early Phase",
    overview: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL?.replace(/\/+$/, "");
      const message = [
        `Project type: ${formData.classification}`,
        `Industry: ${formData.domain}`,
        `Investment range: ${formData.investment}`,
        formData.company.trim() ? `Company: ${formData.company.trim()}` : null,
        "",
        formData.overview.trim(),
      ]
        .filter((line): line is string => line !== null)
        .join("\n");

      const res = await fetch(
        apiBaseUrl ? `${apiBaseUrl}/inquiries` : "/api/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(
            apiBaseUrl
              ? {
                  name: formData.name.trim(),
                  email: formData.email.trim(),
                  message,
                }
              : formData
          ),
        }
      );

      const data = await res.json();

      if (!res.ok || data.success === false) {
        const validationErrors =
          data.errors && typeof data.errors === "object"
            ? Object.values(data.errors).filter(
                (value): value is string => typeof value === "string"
              )
            : [];
        const error =
          typeof data.error === "string"
            ? data.error
            : typeof data.message === "string"
              ? data.message
              : validationErrors.join(" ");
        throw new Error(error || "Failed to transmit inquiry to server.");
      }

      setInquiryResult({
        inquiry: {
          id:
            data.inquiry?.id ??
            data.inquiryId ??
            data.id,
        },
      });
      setSubmitted(true);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Network error occurred.";
      setErrorMessage(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 max-w-7xl mx-auto px-6 md:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Credentials Column (5 cols) */}
        <div className="lg:col-span-5 space-y-8">
          <div className="min-w-0">
            <div className="text-xs font-mono text-[#46ebe3] uppercase tracking-widest mb-2.5">
              INITIATE ENGAGEMENT
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#F5F7FB] leading-tight">
              Have an Ambitious Idea? <br />
              <span className="text-[#94A3B8]">Let’s Engineer It.</span>
            </h2>
            <p className="text-base text-[#94A3B8] mt-4 leading-relaxed">
              Discuss your enterprise technology requirements, platform roadmap, or product engineering needs with our core architectural team.
            </p>
          </div>

          <div className="relative h-44 rounded-2xl overflow-hidden border border-[rgba(245,247,251,0.08)] shadow-xl">
            <Image
              src="/images/contact-collaboration.jpg"
              alt="Colleagues discussing a project together"
              fill
              sizes="(max-width: 1024px) 100vw, 480px"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07090F]/65 to-transparent" />
          </div>

          <div className="space-y-4">
            {/* Headquarters */}
            <div className="site-3d-surface flex items-start gap-4 p-5 rounded-2xl bg-[#101725] border border-[rgba(245,247,251,0.08)]">
              <div className="w-12 h-12 rounded-xl bg-[#07090F] flex items-center justify-center text-[#46ebe3] shrink-0 border border-[rgba(245,247,251,0.08)]">
                <MapPin aria-hidden="true" size={22} strokeWidth={1.8} />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-mono text-[#475569] uppercase font-semibold">
                  HEADQUARTERS
                </div>
                <a
                  href="https://maps.google.com/?q=Sanjay+Palace,+Sanjay+Place,+Civil+Lines,+Agra,+Uttar+Pradesh+282002,+India"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-bold text-[#F5F7FB] mt-1 hover:text-[#46ebe3] transition-colors block"
                >
                  Sanjay Palace, Sanjay Place, Civil Lines, Agra, Uttar Pradesh 282002, India
                </a>
                <div className="text-xs text-[#94A3B8] mt-0.5">
                  Serving clients worldwide
                </div>
              </div>
            </div>

            {/* Email Inquiries */}
            <div className="site-3d-surface flex items-start gap-4 p-5 rounded-2xl bg-[#101725] border border-[rgba(245,247,251,0.08)]">
              <div className="w-12 h-12 rounded-xl bg-[#07090F] flex items-center justify-center text-[#afc6ff] shrink-0 border border-[rgba(245,247,251,0.08)]">
                <Mail aria-hidden="true" size={22} strokeWidth={1.8} />
              </div>
              <div>
                <div className="text-xs font-mono text-[#475569] uppercase font-semibold">
                  EMAIL INQUIRIES
                </div>
                <a
                  href="mailto:contact@ashivam.com"
                  className="text-base font-bold text-[#F5F7FB] hover:text-[#46ebe3] transition-colors mt-0.5 block break-all"
                >
                  contact@ashivam.com
                </a>
                <div className="text-xs text-[#94A3B8] mt-0.5">
                  Direct architectural review
                </div>
              </div>
            </div>

            <div className="site-3d-surface flex items-start gap-4 p-5 rounded-2xl bg-[#101725] border border-[rgba(245,247,251,0.08)]">
              <div className="w-12 h-12 rounded-xl bg-[#07090F] flex items-center justify-center text-[#afc6ff] shrink-0 border border-[rgba(245,247,251,0.08)]">
                <Phone aria-hidden="true" size={22} strokeWidth={1.8} />
              </div>
              <div>
                <div className="text-xs font-mono text-[#475569] uppercase font-semibold">
                  CALL US
                </div>
                <a
                  href="tel:+917088567790"
                  className="text-base font-bold text-[#F5F7FB] hover:text-[#46ebe3] transition-colors mt-0.5 block"
                >
                  +91 70885 67790
                </a>
              </div>
            </div>

            <div className="site-3d-surface flex items-start gap-4 p-5 rounded-2xl bg-[#101725] border border-[rgba(245,247,251,0.08)]">
              <div className="w-12 h-12 rounded-xl bg-[#07090F] flex items-center justify-center text-[#46ebe3] shrink-0 border border-[rgba(245,247,251,0.08)]">
                <MessageCircle aria-hidden="true" size={22} strokeWidth={1.8} />
              </div>
              <div>
                <div className="text-xs font-mono text-[#475569] uppercase font-semibold">
                  WHATSAPP
                </div>
                <a
                  href="https://wa.me/918868856779"
                  target="_blank"
                  rel="noreferrer"
                  className="text-base font-bold text-[#F5F7FB] hover:text-[#46ebe3] transition-colors mt-0.5 block"
                >
                  +91 88688 56779
                </a>
              </div>
            </div>

            {/* Developer Ecosystem */}
            <div className="site-3d-surface flex items-start gap-4 p-5 rounded-2xl bg-[#101725] border border-[rgba(245,247,251,0.08)]">
              <div className="w-12 h-12 rounded-xl bg-[#07090F] flex items-center justify-center text-[#cdbdff] shrink-0 border border-[rgba(245,247,251,0.08)]">
                <GitBranch aria-hidden="true" size={22} strokeWidth={1.8} />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-mono text-[#475569] uppercase font-semibold">
                  DEVELOPER ECOSYSTEM
                </div>
                <div className="text-base font-bold text-[#F5F7FB] mt-0.5">
                  GitHub: ashivam-technologies
                </div>
                <div className="text-xs text-[#94A3B8] mt-0.5">
                  Open source components &amp; libraries
                </div>
              </div>
            </div>
          </div>

          <div className="site-3d-surface p-6 rounded-2xl bg-[#101725] border border-[rgba(245,247,251,0.08)] laser-border-t">
            <div className="text-xs font-mono text-[#46ebe3] uppercase mb-2 font-semibold">
              ENTERPRISE SLA GUARANTEE
            </div>
            <p className="text-sm text-[#94A3B8] leading-relaxed">
              All project inquiries are reviewed by our senior engineering leads within 24 business hours. Confidential non-disclosure agreements available upon request.
            </p>
          </div>
        </div>

        {/* Right Project Inquiry Form (7 cols) */}
        <div className="lg:col-span-7">
          <div className="site-3d-surface bg-[#101725] border border-[rgba(245,247,251,0.08)] rounded-3xl p-8 md:p-10 shadow-2xl relative laser-border-t">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-[rgba(245,247,251,0.08)]">
              <div className="flex items-center gap-2 text-xs font-mono text-[#46ebe3]">
                <span className="w-2 h-2 rounded-full bg-[#46ebe3] animate-ping" />
                <span>SECURE ENCRYPTED CHANNEL · PORT 443</span>
              </div>
              <div className="text-[11px] font-mono text-[#475569]">
                ASHIVAM SECURE PROTOCOL
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-extrabold text-[#F5F7FB] mb-2">
              Tell Us What You’re Building
            </h3>
            <p className="text-sm text-[#94A3B8] mb-8">
              Share your project overview and parameters with our technical team.
            </p>

            {errorMessage && (
              <div className="mb-6 p-4 rounded-xl bg-red-950/40 border border-red-500/30 text-red-200 text-sm flex items-center gap-3">
                <span className="material-symbols-outlined text-red-400">error</span>
                <span>{errorMessage}</span>
              </div>
            )}

            {submitted && inquiryResult ? (
              <div className="p-8 rounded-2xl bg-[#172033] border border-emerald-400/30 text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-14 h-14 rounded-full bg-emerald-400/10 text-emerald-400 border border-emerald-400/30 flex items-center justify-center mx-auto">
                  <span className="material-symbols-outlined text-3xl">check_circle</span>
                </div>
                <h4 className="text-2xl font-bold text-[#F5F7FB]">
                  Telemetry &amp; Inquiry Received
                </h4>
                {inquiryResult.inquiry.id && (
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#07090F] border border-[rgba(245,247,251,0.12)] text-xs font-mono text-[#46ebe3]">
                    <span>TRACKING ID: {inquiryResult.inquiry.id}</span>
                  </div>
                )}
                <p className="text-sm text-[#94A3B8] max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="text-[#F5F7FB] font-semibold">{formData.name}</span>. Your inquiry has been received by our team. We&apos;ll follow up using the email address you provided.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setInquiryResult(null);
                      setFormData({
                        name: "",
                        email: "",
                        company: "",
                        classification: "Enterprise Web Application",
                        domain: "Education Technology",
                        investment: "Not Sure Yet / Early Phase",
                        overview: "",
                      });
                    }}
                    className="px-6 py-2.5 rounded-xl bg-[#07090F] border border-[rgba(245,247,251,0.12)] text-[#F5F7FB] text-xs font-mono hover:border-[#46ebe3] transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-[#F5F7FB] uppercase mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Alex Mercer"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full bg-[#0B101A] border border-[rgba(245,247,251,0.12)] rounded-xl px-4 py-3 text-[#F5F7FB] placeholder-[#475569] focus:outline-none focus:border-[#528dff] text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-[#F5F7FB] uppercase mb-2">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full bg-[#0B101A] border border-[rgba(245,247,251,0.12)] rounded-xl px-4 py-3 text-[#F5F7FB] placeholder-[#475569] focus:outline-none focus:border-[#528dff] text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-[#F5F7FB] uppercase mb-2">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      placeholder="Acme Labs Inc."
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      className="w-full bg-[#0B101A] border border-[rgba(245,247,251,0.12)] rounded-xl px-4 py-3 text-[#F5F7FB] placeholder-[#475569] focus:outline-none focus:border-[#528dff] text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-[#F5F7FB] uppercase mb-2">
                      Project Classification
                    </label>
                    <select
                      value={formData.classification}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          classification: e.target.value,
                        })
                      }
                      className="w-full bg-[#0B101A] border border-[rgba(245,247,251,0.12)] rounded-xl px-4 py-3 text-[#F5F7FB] focus:outline-none focus:border-[#528dff] text-sm"
                    >
                      <option>Enterprise Web Application</option>
                      <option>Mobile Application (Android)</option>
                      <option>Custom Software Architecture</option>
                      <option>UI/UX Design System</option>
                      <option>Cloud Backend / API Services</option>
                      <option>AI &amp; Intelligent Solutions</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-[#F5F7FB] uppercase mb-2">
                      Industry Domain
                    </label>
                    <select
                      value={formData.domain}
                      onChange={(e) =>
                        setFormData({ ...formData, domain: e.target.value })
                      }
                      className="w-full bg-[#0B101A] border border-[rgba(245,247,251,0.12)] rounded-xl px-4 py-3 text-[#F5F7FB] focus:outline-none focus:border-[#528dff] text-sm"
                    >
                      <option>Education Technology</option>
                      <option>Business Software</option>
                      <option>Enterprise Management</option>
                      <option>Workflow Automation</option>
                      <option>Digital Platforms</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-[#F5F7FB] uppercase mb-2">
                      Investment Range
                    </label>
                    <select
                      value={formData.investment}
                      onChange={(e) =>
                        setFormData({ ...formData, investment: e.target.value })
                      }
                      className="w-full bg-[#0B101A] border border-[rgba(245,247,251,0.12)] rounded-xl px-4 py-3 text-[#F5F7FB] focus:outline-none focus:border-[#528dff] text-sm"
                    >
                      <option>Not Sure Yet / Early Phase</option>
                      <option>Under ₹50K (MVP / Prototype)</option>
                      <option>₹50K – ₹2L (Production Module)</option>
                      <option>₹2L – ₹10L (Enterprise Scale)</option>
                      <option>₹10L+ (Full Infrastructure)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#F5F7FB] uppercase mb-2">
                    Project Overview &amp; Requirements *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your technical vision, intended scale, timelines, and primary goals..."
                    value={formData.overview}
                    onChange={(e) =>
                      setFormData({ ...formData, overview: e.target.value })
                    }
                    className="w-full bg-[#0B101A] border border-[rgba(245,247,251,0.12)] rounded-xl px-4 py-3 text-[#F5F7FB] placeholder-[#475569] focus:outline-none focus:border-[#528dff] text-sm resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-xl bg-[#528dff] text-[#00275f] font-bold text-base hover:shadow-[0_0_24px_rgba(79,140,255,0.45)] hover:scale-[1.01] active:scale-95 transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {loading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-[#00275f] border-t-transparent rounded-full animate-spin" />
                        <span>Transmitting to Cloud Gateway...</span>
                      </>
                    ) : (
                      <>
                        <span>Transmit Inquiry</span>
                        <span className="material-symbols-outlined text-base">send</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
