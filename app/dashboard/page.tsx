"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Dashboard() {
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/login");
  }

  return (
    <main className="min-h-screen bg-slate-50 font-sans">

      {/* Top bar */}
      <nav className="bg-[#0f0f0f] px-6 py-4 flex items-center justify-between">
        <div className="w-20 h-20 overflow-hidden flex items-center justify-center" style={{ mixBlendMode: "screen" }}>
          <Image src="/logo.png" alt="El Barullo" width={110} height={110} className="object-contain scale-[1.22]" style={{ filter: "contrast(2) brightness(0.85) saturate(1.4)" }} />
        </div>
        <div className="flex items-center gap-4">
          <span className="text-white/40 text-sm hidden md:block">Client Portal</span>
          <button
            onClick={handleLogout}
            className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm font-semibold transition-colors"
          >
            Sign Out
          </button>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* Welcome */}
        <div className="mb-10">
          <h1 className="text-3xl font-black text-slate-900">Welcome to Your Client Portal</h1>
          <p className="text-slate-500 mt-1">Manage your wholesale account, view orders, and access billing.</p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { label: "Active Orders",    value: "—",      icon: "📦" },
            { label: "Total Spent",      value: "—",      icon: "💳" },
            { label: "Account Status",   value: "Active", icon: "✅" },
            { label: "Account Rep",      value: "El Barullo Team", icon: "🤝" },
          ].map(s => (
            <div key={s.label} className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
              <span className="text-2xl">{s.icon}</span>
              <p className="text-2xl font-black text-slate-900 mt-2">{s.value}</p>
              <p className="text-slate-500 text-sm">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">

          {/* Account Info */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-black text-slate-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-red-50 border border-red-100 flex items-center justify-center text-sm">🏢</span>
              Account Information
            </h2>
            <div className="space-y-3 text-sm">
              {[
                ["Company",  "El Barullo"],
                ["Email",    "Elbarullosm@gmail.com"],
                ["Phone",    "(801) 718-5391"],
                ["Address",  "35 S Tungsten Way, Vineyard, UT 84059"],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between items-center py-2 border-b border-slate-100 last:border-0">
                  <span className="text-slate-500 font-medium">{label}</span>
                  <span className="text-slate-800 font-semibold text-right">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Payment Methods */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-black text-slate-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-red-50 border border-red-100 flex items-center justify-center text-sm">💳</span>
              Payment Methods
            </h2>
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <div className="w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center text-2xl mb-3">💳</div>
              <p className="text-slate-600 font-semibold mb-1">No payment methods on file</p>
              <p className="text-slate-400 text-sm mb-4">Contact your account manager to set up billing.</p>
              <a
                href="/#contact"
                className="px-5 py-2.5 rounded-lg bg-red-600 hover:bg-red-700 transition-colors text-white text-sm font-semibold"
              >
                Contact Account Manager
              </a>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">

          {/* Recent Orders */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-black text-slate-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-red-50 border border-red-100 flex items-center justify-center text-sm">📦</span>
              Recent Orders
            </h2>
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <div className="w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center text-2xl mb-3">📋</div>
              <p className="text-slate-600 font-semibold mb-1">No orders yet</p>
              <p className="text-slate-400 text-sm">Your order history will appear here once you place your first order.</p>
            </div>
          </div>

          {/* Quick Contact */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-black text-slate-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-red-50 border border-red-100 flex items-center justify-center text-sm">📞</span>
              Need Help?
            </h2>
            <div className="space-y-3">
              {[
                { icon: "📧", label: "Email Us",   value: "Elbarullosm@gmail.com", href: "mailto:Elbarullosm@gmail.com" },
                { icon: "📞", label: "Call Us",    value: "(801) 718-5391",        href: "tel:8017185391" },
                { icon: "🌐", label: "Visit Site", value: "acme-landing-beige.vercel.app", href: "/" },
              ].map(c => (
                <a key={c.label} href={c.href}
                  className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 hover:border-red-300 hover:bg-red-50 transition-all group">
                  <span className="text-xl">{c.icon}</span>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">{c.label}</p>
                    <p className="text-sm text-slate-700 font-semibold group-hover:text-red-600 transition-colors">{c.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
