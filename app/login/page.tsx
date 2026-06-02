"use client";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      router.push("/dashboard");
    } else {
      setError("Incorrect password. Please try again.");
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#0f0f0f] flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="w-28 h-28 overflow-hidden flex items-center justify-center" style={{ mixBlendMode: "screen" }}>
            <Image src="/logo.png" alt="El Barullo" width={140} height={140} className="object-contain scale-[1.22]" style={{ filter: "contrast(2) brightness(0.85) saturate(1.4)" }} />
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
          <h1 className="text-2xl font-black text-white text-center mb-1">Client Portal</h1>
          <p className="text-white/40 text-sm text-center mb-8">Enter your access password to continue</p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-red-500 transition-colors"
            />
            {error && <p className="text-red-400 text-sm text-center">{error}</p>}
            <button
              type="submit"
              disabled={loading}
              className="py-3.5 rounded-lg bg-red-600 hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-bold text-white"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>
        </div>

        <p className="text-white/20 text-xs text-center mt-6">
          El Barullo Logistics Solutions · Authorized Access Only
        </p>
      </div>
    </main>
  );
}
