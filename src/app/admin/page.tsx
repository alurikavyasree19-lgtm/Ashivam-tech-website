"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Inquiry } from "@/lib/db";

interface HealthData {
  status: string;
  version: string;
  database: {
    type: string;
    inquiriesCount: number;
    auditLogsCount: number;
    lastSaved: string;
    connected: boolean;
  };
  server: {
    uptimeSeconds: number;
    memoryUsageMB: number;
    nodeVersion: string;
    environment: string;
  };
  timestamp: string;
}

export default function AdminPage() {
  const [token, setToken] = useState<string | null>(null);
  const [usernameInput, setUsernameInput] = useState("admin");
  const [passwordInput, setPasswordInput] = useState("");
  const [loginError, setLoginError] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);

  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [health, setHealth] = useState<HealthData | null>(null);
  const [loadingData, setLoadingData] = useState(false);
  const [activeTab, setActiveTab] = useState<"all" | "pending" | "reviewed" | "contacted">("all");
  const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null);

  const fetchDashboardData = useCallback(async (authToken: string) => {
    setLoadingData(true);
    try {
      const inqRes = await fetch("/api/inquiries", {
        headers: { Authorization: `Bearer ${authToken}` },
      });
      if (inqRes.ok) {
        const data = await inqRes.json();
        setInquiries(data.inquiries || []);
      } else if (inqRes.status === 401) {
        setToken(null);
        localStorage.removeItem("ashivam_admin_token");
      }

      const healthRes = await fetch("/api/health");
      if (healthRes.ok) {
        const hData = await healthRes.json();
        setHealth(hData);
      }
    } catch (e) {
      console.error("Dashboard fetch error:", e);
    } finally {
      setLoadingData(false);
    }
  }, []);

  useEffect(() => {
    let ignore = false;
    async function loadInitialSession() {
      const saved = localStorage.getItem("ashivam_admin_token");
      if (saved && !ignore) {
        setToken(saved);
        try {
          const inqRes = await fetch("/api/inquiries", {
            headers: { Authorization: `Bearer ${saved}` },
          });
          if (inqRes.ok) {
            const data = await inqRes.json();
            if (!ignore) setInquiries(data.inquiries || []);
          } else if (inqRes.status === 401 && !ignore) {
            setToken(null);
            localStorage.removeItem("ashivam_admin_token");
          }

          const healthRes = await fetch("/api/health");
          if (healthRes.ok && !ignore) {
            const hData = await healthRes.json();
            setHealth(hData);
          }
        } catch (e) {
          console.error("Session restoration error:", e);
        }
      }
    }
    loadInitialSession();
    return () => {
      ignore = true;
    };
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginLoading(true);
    setLoginError("");

    try {
      const res = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: usernameInput, password: passwordInput }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Authentication failed.");
      }

      setToken(data.token);
      localStorage.setItem("ashivam_admin_token", data.token);
      await fetchDashboardData(data.token);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Authentication error.";
      setLoginError(msg);
    } finally {
      setLoginLoading(false);
    }
  };

  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem("ashivam_admin_token");
  };

  const handleStatusUpdate = async (id: string, newStatus: "pending" | "reviewed" | "contacted") => {
    if (!token) return;
    try {
      const res = await fetch("/api/inquiries", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ id, status: newStatus }),
      });
      if (res.ok) {
        setInquiries((prev) =>
          prev.map((item) => (item.id === id ? { ...item, status: newStatus } : item))
        );
        if (selectedInquiry && selectedInquiry.id === id) {
          setSelectedInquiry({ ...selectedInquiry, status: newStatus });
        }
      }
    } catch (e) {
      console.error("Failed to update status:", e);
    }
  };

  if (!token) {
    return (
      <div className="min-h-screen bg-[#07090F] flex items-center justify-center p-6 text-[#F5F7FB]">
        <div className="bg-[#101725] border border-[rgba(79,140,255,0.35)] rounded-3xl max-w-md w-full p-8 shadow-2xl laser-border-t">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-[#07090F] border border-[#46ebe3]/40 flex items-center justify-center text-[#46ebe3]">
              <span className="material-symbols-outlined text-xl">admin_panel_settings</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-[#F5F7FB]">Ashivam Command Console</h1>
              <div className="text-xs font-mono text-[#46ebe3]">Enterprise Backend Access</div>
            </div>
          </div>

          <p className="text-xs text-[#94A3B8] mb-6 leading-relaxed">
            Administrative terminal for managing production client inquiries, audit logs, and system health telemetry.
          </p>

          {loginError && (
            <div className="mb-4 p-3 rounded-xl bg-red-950/40 border border-red-500/30 text-red-200 text-xs">
              {loginError}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-mono text-[#475569] uppercase mb-1.5">
                Username
              </label>
              <input
                type="text"
                required
                value={usernameInput}
                onChange={(e) => setUsernameInput(e.target.value)}
                className="w-full bg-[#0B101A] border border-[rgba(245,247,251,0.12)] rounded-xl px-4 py-2.5 text-sm text-[#F5F7FB] focus:outline-none focus:border-[#528dff]"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-[#475569] uppercase mb-1.5">
                Password
              </label>
              <input
                type="password"
                required
                placeholder="••••••••••••"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                className="w-full bg-[#0B101A] border border-[rgba(245,247,251,0.12)] rounded-xl px-4 py-2.5 text-sm text-[#F5F7FB] focus:outline-none focus:border-[#528dff]"
              />
              <div className="mt-1 text-[11px] font-mono text-[#475569]">
                Default credential: <code className="text-[#46ebe3]">ashivam2026!</code>
              </div>
            </div>

            <button
              type="submit"
              disabled={loginLoading}
              className="w-full py-3 rounded-xl bg-[#528dff] text-[#00275f] font-bold text-sm hover:bg-[#46ebe3] transition-colors flex items-center justify-center gap-2 cursor-pointer mt-2"
            >
              {loginLoading ? "Authenticating..." : "Authenticate Session"}
            </button>
          </form>

          <div className="mt-6 pt-4 border-t border-[rgba(245,247,251,0.08)] text-center">
            <Link href="/" className="text-xs text-[#94A3B8] hover:text-[#46ebe3] transition-colors">
              ← Return to Public Website
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const filteredInquiries =
    activeTab === "all" ? inquiries : inquiries.filter((i) => i.status === activeTab);

  const pendingCount = inquiries.filter((i) => i.status === "pending").length;
  const reviewedCount = inquiries.filter((i) => i.status === "reviewed").length;
  const contactedCount = inquiries.filter((i) => i.status === "contacted").length;

  return (
    <div className="min-h-screen bg-[#07090F] text-[#F5F7FB] p-6 md:p-10 font-sans">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Top Navbar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[rgba(245,247,251,0.08)]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#101725] border border-[#46ebe3]/40 flex items-center justify-center text-[#46ebe3]">
              <span className="material-symbols-outlined text-2xl">shield</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-bold text-[#F5F7FB]">Ashivam Telemetry Dashboard</h1>
                <span className="px-2 py-0.5 rounded-full bg-emerald-400/10 text-emerald-400 text-[10px] font-mono border border-emerald-400/30">
                  BACKEND ONLINE
                </span>
              </div>
              <p className="text-xs font-mono text-[#94A3B8]">
                Session Active · Superadmin Privileges
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => fetchDashboardData(token)}
              disabled={loadingData}
              className="px-4 py-2 rounded-xl bg-[#101725] border border-[rgba(245,247,251,0.12)] text-xs font-mono text-[#94A3B8] hover:text-[#F5F7FB] transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <span className="material-symbols-outlined text-sm">refresh</span>
              <span>Sync</span>
            </button>
            <Link
              href="/"
              className="px-4 py-2 rounded-xl bg-[#101725] border border-[rgba(245,247,251,0.12)] text-xs font-mono text-[#46ebe3] hover:text-[#F5F7FB] transition-colors"
            >
              View Site
            </Link>
            <button
              onClick={handleLogout}
              className="px-4 py-2 rounded-xl bg-red-950/30 border border-red-500/30 text-xs font-mono text-red-300 hover:bg-red-900/40 transition-colors cursor-pointer"
            >
              Sign Out
            </button>
          </div>
        </div>

        {/* Telemetry Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-[#101725] border border-[rgba(245,247,251,0.08)] laser-border-t">
            <div className="text-xs font-mono text-[#475569] uppercase mb-1">Total Inquiries</div>
            <div className="text-3xl font-extrabold text-[#F5F7FB]">{inquiries.length}</div>
            <div className="text-xs font-mono text-[#46ebe3] mt-2">Active Database Records</div>
          </div>

          <div className="p-6 rounded-2xl bg-[#101725] border border-[rgba(245,247,251,0.08)] laser-border-t">
            <div className="text-xs font-mono text-[#475569] uppercase mb-1">Pending Review</div>
            <div className="text-3xl font-extrabold text-[#FACC15]">{pendingCount}</div>
            <div className="text-xs font-mono text-[#475569] mt-2">Awaiting Lead Architect</div>
          </div>

          <div className="p-6 rounded-2xl bg-[#101725] border border-[rgba(245,247,251,0.08)] laser-border-t">
            <div className="text-xs font-mono text-[#475569] uppercase mb-1">Processed</div>
            <div className="text-3xl font-extrabold text-emerald-400">
              {reviewedCount + contactedCount}
            </div>
            <div className="text-xs font-mono text-emerald-400/80 mt-2">Reviewed or Contacted</div>
          </div>

          <div className="p-6 rounded-2xl bg-[#101725] border border-[rgba(245,247,251,0.08)] laser-border-t">
            <div className="text-xs font-mono text-[#475569] uppercase mb-1">Memory / Uptime</div>
            <div className="text-2xl font-extrabold text-[#afc6ff]">
              {health?.server.memoryUsageMB || 42} MB
            </div>
            <div className="text-xs font-mono text-[#94A3B8] mt-2">
              Uptime: {health?.server.uptimeSeconds || 120}s · Node {health?.server.nodeVersion || "v24"}
            </div>
          </div>
        </div>

        {/* Inquiries Table Section */}
        <div className="bg-[#101725] border border-[rgba(245,247,251,0.08)] rounded-3xl p-6 md:p-8 laser-border-t space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold text-[#F5F7FB]">Client Project Inquiries</h2>
              <p className="text-xs text-[#94A3B8] font-mono mt-0.5">
                Stored in persistent JSON database (`data/database.json`)
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-2">
              {(["all", "pending", "reviewed", "contacted"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer ${
                    activeTab === tab
                      ? "bg-[#528dff] text-[#00275f] font-bold"
                      : "bg-[#07090F] text-[#94A3B8] hover:text-[#F5F7FB] border border-[rgba(245,247,251,0.08)]"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[rgba(245,247,251,0.08)] text-[11px] font-mono text-[#475569] uppercase">
                  <th className="py-3 px-4">Tracking ID</th>
                  <th className="py-3 px-4">Client &amp; Company</th>
                  <th className="py-3 px-4">Classification</th>
                  <th className="py-3 px-4">Budget Range</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[rgba(245,247,251,0.06)] text-sm">
                {filteredInquiries.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="py-12 text-center text-[#94A3B8] text-xs font-mono">
                      No inquiries found under &apos;{activeTab}&apos;.
                    </td>
                  </tr>
                ) : (
                  filteredInquiries.map((inq) => {
                    const badgeClass =
                      inq.status === "contacted"
                        ? "bg-emerald-400/10 text-emerald-400 border-emerald-400/30"
                        : inq.status === "reviewed"
                        ? "bg-[#46ebe3]/10 text-[#46ebe3] border-[#46ebe3]/30"
                        : "bg-[#FACC15]/10 text-[#FACC15] border-[#FACC15]/30";

                    return (
                      <tr key={inq.id} className="hover:bg-[#172033]/50 transition-colors">
                        <td className="py-4 px-4 font-mono text-xs text-[#46ebe3] font-semibold">
                          {inq.id}
                        </td>
                        <td className="py-4 px-4">
                          <div className="font-bold text-[#F5F7FB]">{inq.name}</div>
                          <div className="text-xs text-[#94A3B8]">
                            {inq.company ? `${inq.company} · ` : ""}
                            {inq.email}
                          </div>
                        </td>
                        <td className="py-4 px-4 text-xs font-mono text-[#F5F7FB]">
                          {inq.classification}
                        </td>
                        <td className="py-4 px-4 text-xs font-mono text-[#94A3B8]">
                          {inq.investment}
                        </td>
                        <td className="py-4 px-4">
                          <span
                            className={`px-2.5 py-1 rounded-full text-[11px] font-mono uppercase border ${badgeClass}`}
                          >
                            {inq.status}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-right">
                          <button
                            onClick={() => setSelectedInquiry(inq)}
                            className="px-3 py-1.5 rounded-lg bg-[#07090F] border border-[rgba(245,247,251,0.12)] text-xs font-mono text-[#F5F7FB] hover:border-[#46ebe3] transition-colors cursor-pointer"
                          >
                            Inspect
                          </button>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Inquiry Detail Modal */}
      {selectedInquiry && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedInquiry(null)}
        >
          <div
            className="bg-[#101725] border border-[rgba(79,140,255,0.4)] rounded-2xl max-w-xl w-full p-6 shadow-2xl relative laser-border-t space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[rgba(245,247,251,0.08)] pb-3">
              <span className="text-xs font-mono text-[#46ebe3] font-bold">
                {selectedInquiry.id}
              </span>
              <button
                onClick={() => setSelectedInquiry(null)}
                className="text-[#94A3B8] hover:text-[#F5F7FB] text-sm"
              >
                ✕
              </button>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#F5F7FB]">{selectedInquiry.name}</h3>
              <div className="text-sm text-[#46ebe3]">{selectedInquiry.email}</div>
              {selectedInquiry.company && (
                <div className="text-xs text-[#94A3B8] mt-0.5">
                  Company: {selectedInquiry.company}
                </div>
              )}
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs font-mono bg-[#07090F] p-4 rounded-xl border border-[rgba(245,247,251,0.08)]">
              <div>
                <span className="text-[#475569]">Classification:</span>
                <div className="text-[#F5F7FB] font-semibold">
                  {selectedInquiry.classification}
                </div>
              </div>
              <div>
                <span className="text-[#475569]">Domain:</span>
                <div className="text-[#F5F7FB] font-semibold">{selectedInquiry.domain}</div>
              </div>
              <div>
                <span className="text-[#475569]">Budget Range:</span>
                <div className="text-[#F5F7FB] font-semibold">
                  {selectedInquiry.investment}
                </div>
              </div>
              <div>
                <span className="text-[#475569]">Received At:</span>
                <div className="text-[#F5F7FB] font-semibold">
                  {new Date(selectedInquiry.createdAt).toLocaleString()}
                </div>
              </div>
            </div>

            <div>
              <div className="text-xs font-mono text-[#475569] uppercase mb-1">
                Project Overview &amp; Specifications:
              </div>
              <p className="text-sm text-[#94A3B8] leading-relaxed bg-[#07090F] p-4 rounded-xl border border-[rgba(245,247,251,0.08)]">
                {selectedInquiry.overview}
              </p>
            </div>

            <div className="pt-4 border-t border-[rgba(245,247,251,0.08)] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-[#475569]">Set Status:</span>
                <button
                  onClick={() => handleStatusUpdate(selectedInquiry.id, "reviewed")}
                  className="px-2.5 py-1 rounded bg-[#46ebe3]/10 text-[#46ebe3] text-xs font-mono hover:bg-[#46ebe3]/20"
                >
                  Reviewed
                </button>
                <button
                  onClick={() => handleStatusUpdate(selectedInquiry.id, "contacted")}
                  className="px-2.5 py-1 rounded bg-emerald-400/10 text-emerald-400 text-xs font-mono hover:bg-emerald-400/20"
                >
                  Contacted
                </button>
              </div>
              <button
                onClick={() => setSelectedInquiry(null)}
                className="px-4 py-1.5 rounded-lg bg-[#528dff] text-[#00275f] text-xs font-bold"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
