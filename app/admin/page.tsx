"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface VisitData {
  onlineNow: number;
  last24h: number;
  lastHour: number;
  hourly: number[];
  topPages: [string, number][];
  recent: { page: string; ts: number; ref: string; ua: string }[];
}

function timeAgo(ts: number) {
  const s = Math.floor((Date.now() - ts) / 1000);
  if (s < 60) return `${s}s ago`;
  if (s < 3600) return `${Math.floor(s / 60)}m ago`;
  return `${Math.floor(s / 3600)}h ago`;
}

function getBrowser(ua: string) {
  if (/Chrome/i.test(ua) && !/Edge|OPR/i.test(ua)) return "Chrome";
  if (/Firefox/i.test(ua)) return "Firefox";
  if (/Safari/i.test(ua) && !/Chrome/i.test(ua)) return "Safari";
  if (/Edge/i.test(ua)) return "Edge";
  return "Other";
}

export default function AdminPanel() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<VisitData | null>(null);
  const [emailSent, setEmailSent] = useState(false);

  const fetchData = useCallback(async () => {
    const res = await fetch("/api/visits");
    if (res.ok) setData(await res.json());
    else if (res.status === 401) setLoggedIn(false);
  }, []);

  useEffect(() => {
    if (!loggedIn) return;
    fetchData();
    const t = setInterval(fetchData, 10000);
    return () => clearInterval(t);
  }, [loggedIn, fetchData]);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const res = await fetch("/api/auth/admin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    if (res.ok) { setLoggedIn(true); }
    else { setError("Wrong password."); }
    setLoading(false);
  }

  async function handleLogout() {
    await fetch("/api/auth/admin", { method: "DELETE" });
    setLoggedIn(false);
    router.refresh();
  }

  // ── LOGIN SCREEN ──
  if (!loggedIn) return (
    <main className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="flex justify-center mb-8">
          <div className="w-24 h-24 overflow-hidden flex items-center justify-center" style={{ mixBlendMode: "screen" }}>
            <Image src="/logo.png" alt="El Barullo" width={130} height={130} className="object-contain scale-[1.22]" style={{ filter: "contrast(2) brightness(0.85) saturate(1.4)" }} />
          </div>
        </div>
        <div className="bg-[#141414] border border-white/10 rounded-2xl p-8">
          <h1 className="text-xl font-black text-white text-center mb-1">Admin Panel</h1>
          <p className="text-white/30 text-xs text-center mb-6 uppercase tracking-widest">Authorized Access Only</p>
          <form onSubmit={handleLogin} className="flex flex-col gap-3">
            <input type="password" placeholder="Admin password" value={password}
              onChange={e => setPassword(e.target.value)} required
              className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-red-500 transition-colors text-sm" />
            {error && <p className="text-red-400 text-xs text-center">{error}</p>}
            <button type="submit" disabled={loading}
              className="py-3 rounded-lg bg-red-600 hover:bg-red-700 disabled:opacity-50 transition-colors font-bold text-white text-sm">
              {loading ? "Signing in…" : "Sign In"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );

  const maxHourly = Math.max(...(data?.hourly ?? [1]), 1);

  // ── ADMIN PANEL ──
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white font-sans">

      {/* Top bar */}
      <header className="sticky top-0 z-50 bg-[#0f0f0f] border-b border-white/10 px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 overflow-hidden" style={{ mixBlendMode: "screen" }}>
            <Image src="/logo.png" alt="El Barullo" width={50} height={50} className="object-contain scale-[1.22]" style={{ filter: "contrast(2) brightness(0.85) saturate(1.4)" }} />
          </div>
          <div>
            <p className="text-sm font-black text-white">El Barullo</p>
            <p className="text-xs text-white/30">Admin Panel</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-xs text-green-400 font-semibold">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Live
          </span>
          <a href="/" target="_blank"
            className="px-3 py-1.5 rounded-lg text-xs text-white/50 border border-white/10 hover:text-white hover:border-white/30 transition-all">
            View Site ↗
          </a>
          <button onClick={handleLogout}
            className="px-3 py-1.5 rounded-lg text-xs bg-white/10 hover:bg-white/20 text-white transition-colors">
            Sign Out
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">

        {/* Page title */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-black">Website Overview</h1>
            <p className="text-white/40 text-sm mt-0.5">Real-time traffic and visitor analytics</p>
          </div>
          {/* Contact Website Manager button */}
          <a
            href={`mailto:nelsonanaya1001@gmail.com?subject=El Barullo Website — Admin Message&body=Hi Nelson,%0D%0A%0D%0A`}
            onClick={() => setEmailSent(true)}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 transition-colors font-semibold text-sm"
          >
            <span>✉️</span>
            {emailSent ? "Email Opened!" : "Contact Website Manager"}
          </a>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {[
            { label: "Online Now",    value: data?.onlineNow ?? "—", icon: "🟢", sub: "active visitors" },
            { label: "Last Hour",     value: data?.lastHour  ?? "—", icon: "⏱", sub: "page views" },
            { label: "Last 24 Hours", value: data?.last24h   ?? "—", icon: "📈", sub: "page views" },
            { label: "Total Tracked", value: data ? (data.recent.length >= 20 ? "20+" : data.recent.length) : "—", icon: "👁", sub: "in memory" },
          ].map(s => (
            <div key={s.label} className="bg-[#141414] border border-white/10 rounded-xl p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xl">{s.icon}</span>
                <span className="text-xs text-white/30 uppercase tracking-widest">{s.label}</span>
              </div>
              <p className="text-4xl font-black text-white">{String(s.value)}</p>
              <p className="text-white/30 text-xs mt-1">{s.sub}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-6">

          {/* 24h chart */}
          <div className="md:col-span-2 bg-[#141414] border border-white/10 rounded-xl p-6">
            <p className="text-sm font-bold mb-4 text-white/70">Page Views — Last 24 Hours</p>
            <div className="flex items-end gap-1 h-28">
              {(data?.hourly ?? Array(24).fill(0)).map((count, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1 group relative">
                  <div
                    className="w-full rounded-sm bg-red-600/70 hover:bg-red-500 transition-all"
                    style={{ height: `${Math.max(4, (count / maxHourly) * 100)}%` }}
                  />
                  <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[9px] bg-black text-white px-1 rounded opacity-0 group-hover:opacity-100 pointer-events-none">
                    {count}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex justify-between text-[10px] text-white/20 mt-2">
              <span>24h ago</span><span>Now</span>
            </div>
          </div>

          {/* Top pages */}
          <div className="bg-[#141414] border border-white/10 rounded-xl p-6">
            <p className="text-sm font-bold mb-4 text-white/70">Top Pages</p>
            {data?.topPages?.length ? (
              <div className="space-y-3">
                {data.topPages.map(([page, count]) => (
                  <div key={page} className="flex items-center justify-between">
                    <span className="text-xs text-white/60 truncate max-w-[140px] font-mono">{page || "/"}</span>
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-red-500 rounded-full" style={{ width: `${(count / (data.topPages[0]?.[1] ?? 1)) * 100}%` }} />
                      </div>
                      <span className="text-xs font-black text-white w-6 text-right">{count}</span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-white/20 text-xs text-center mt-8">No data yet — visits will appear once people browse the site.</p>
            )}
          </div>
        </div>

        {/* Recent visitors */}
        <div className="bg-[#141414] border border-white/10 rounded-xl p-6">
          <p className="text-sm font-bold mb-4 text-white/70">Recent Visitors</p>
          {data?.recent?.length ? (
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="text-white/30 uppercase tracking-widest border-b border-white/10">
                    <th className="pb-3 text-left font-medium">Page</th>
                    <th className="pb-3 text-left font-medium">Referrer</th>
                    <th className="pb-3 text-left font-medium">Browser</th>
                    <th className="pb-3 text-right font-medium">Time</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {data.recent.map((v, i) => (
                    <tr key={i} className="hover:bg-white/5 transition-colors">
                      <td className="py-3 font-mono text-white/80">{v.page || "/"}</td>
                      <td className="py-3 text-white/40 max-w-[160px] truncate">
                        {v.ref === "direct" ? <span className="text-white/20">Direct</span> : v.ref}
                      </td>
                      <td className="py-3 text-white/40">{getBrowser(v.ua)}</td>
                      <td className="py-3 text-right text-white/30">{timeAgo(v.ts)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-4xl mb-3">👁</p>
              <p className="text-white/40 text-sm">No visitor data yet.</p>
              <p className="text-white/20 text-xs mt-1">Visits are tracked as people browse the site.</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
