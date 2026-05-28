"use client";
import { useState } from "react";

const faqs = [
  {
    q: "How do I place a wholesale order?",
    a: "Simply reach out via our contact form or email. Our team will set up your account and walk you through the ordering process within 24 hours.",
  },
  {
    q: "What are your minimum order quantities?",
    a: "MOQs vary by product category. Most categories start at 50 units. We'll work with you to find the right volume for your business.",
  },
  {
    q: "Do you offer drop shipping?",
    a: "Yes — we support direct-to-consumer drop shipping for approved wholesale accounts. Ask about our fulfillment integration options.",
  },
  {
    q: "How fast is shipping and delivery?",
    a: "Standard orders ship within 2–3 business days. Expedited options are available. We cover all 50 states with regional warehouse support.",
  },
  {
    q: "Can I get samples before committing to a bulk order?",
    a: "Absolutely. Sample kits are available for most product lines at cost. Contact us and we'll get one on its way to you.",
  },
];

function FAQ({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center py-5 text-left text-white/80 hover:text-white transition-colors"
      >
        <span className="font-medium pr-4">{q}</span>
        <span className="text-violet-400 text-2xl shrink-0 leading-none">{open ? "−" : "+"}</span>
      </button>
      {open && <p className="pb-5 text-white/40 text-sm leading-relaxed">{a}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#07070d] text-white font-sans">

      {/* ── Nav ── */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-[#07070d]/80 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
            Acme Corp
          </span>
          <div className="hidden md:flex gap-8 text-sm text-white/60">
            <a href="#about"     className="hover:text-white transition-colors">About</a>
            <a href="#products"  className="hover:text-white transition-colors">Products</a>
            <a href="#brands"    className="hover:text-white transition-colors">Brands</a>
            <a href="#logistics" className="hover:text-white transition-colors">Logistics</a>
            <a href="#faq"       className="hover:text-white transition-colors">FAQ</a>
          </div>
          <a href="#contact" className="text-sm px-4 py-2 rounded-lg bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 transition-all font-medium">
            Contact Us
          </a>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        {/* grid background */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(124,58,237,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.15) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(124,58,237,0.18), transparent 70%)",
          }}
        />
        <div className="relative max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs text-white/50 uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Now Onboarding New Wholesale Partners
          </div>
          <h1 className="text-6xl md:text-8xl font-black leading-none mb-6 tracking-tight">
            Your Trusted{" "}
            <span className="block bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              Wholesale Partner
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/40 max-w-2xl mx-auto mb-12">
            Acme Corp connects retailers and resellers with premium consumer goods —
            fast fulfillment, transparent pricing, and relationships that last.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="px-10 py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 transition-all font-bold text-lg shadow-2xl shadow-violet-500/30">
              Contact Us
            </a>
            <a href="#products" className="px-10 py-4 rounded-2xl border border-white/20 hover:bg-white/5 hover:border-white/40 transition-all font-bold text-lg text-white/70">
              Explore Products
            </a>
          </div>
        </div>
      </section>

      {/* ── Stats strip ── */}
      <div className="border-y border-white/10 bg-white/[0.03]">
        <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
          {[
            { n: "12,000+", l: "Products in Catalog" },
            { n: "200+",    l: "Brand Partners" },
            { n: "48hr",    l: "Average Fulfillment" },
            { n: "99.4%",   l: "On-Time Delivery" },
          ].map((s) => (
            <div key={s.l} className="px-6 py-2 text-center">
              <p className="text-3xl font-extrabold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">{s.n}</p>
              <p className="text-xs text-white/40 mt-1 uppercase tracking-wide">{s.l}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── About / Key Features — text left, cards right ── */}
      <section id="about" className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-3">
            Building Reliable Wholesale &amp; Distribution
          </h2>
          <p className="text-center text-white/40 max-w-2xl mx-auto mb-20">
            Committed to delivering dependable wholesale distribution services with a
            strong focus on product quality and efficient logistics management.
          </p>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left — descriptive text */}
            <div>
              <p className="text-white/60 leading-relaxed mb-6">
                Acme Corp works with a broad network of suppliers and product categories
                to help businesses access trusted products while maintaining smooth
                inventory movement and reliable fulfillment operations.
              </p>
              <p className="text-white/60 leading-relaxed">
                We are focused on building long-term partnerships through
                professionalism, consistency, and outstanding customer service
                across the United States.
              </p>
            </div>
            {/* Right — stacked feature cards */}
            <div className="flex flex-col gap-4">
              {[
                { icon: "🚚", title: "Nationwide Distribution", desc: "Seamless product movement to businesses across all 50 states with reliable timelines." },
                { icon: "📦", title: "Inventory Management",    desc: "Organized warehouse operations and bulk order coordination for efficient fulfillment." },
                { icon: "🤝", title: "Trusted Partnerships",    desc: "Built on integrity, consistency, and long-term business relationships." },
              ].map((f) => (
                <div key={f.title} className="flex items-start gap-4 p-5 rounded-2xl border border-white/10 bg-white/[0.03] hover:border-violet-500/40 hover:bg-white/[0.06] transition-all">
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-gradient-to-br from-violet-600/30 to-cyan-600/20 border border-violet-500/20 flex items-center justify-center text-2xl">
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">{f.title}</h3>
                    <p className="text-white/40 text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Product Categories — bento grid ── */}
      <section id="products" className="py-28 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">Product Categories</h2>
          <p className="text-center text-white/40 mb-16 max-w-xl mx-auto">
            Thousands of SKUs across the most in-demand consumer categories.
          </p>
          {/* bento-style mixed grid */}
          <div className="grid grid-cols-4 grid-rows-3 gap-4 h-[480px]">
            <div className="col-span-2 row-span-2 rounded-2xl bg-gradient-to-br from-violet-900/40 to-violet-800/10 border border-violet-500/20 flex flex-col justify-end p-6 hover:border-violet-500/50 transition-all group cursor-pointer">
              <span className="text-5xl mb-3">🏠</span>
              <span className="text-xl font-bold group-hover:text-violet-300 transition-colors">Home Appliances</span>
              <span className="text-white/40 text-sm mt-1">Blenders · Air Fryers · Coffee Makers</span>
            </div>
            <div className="col-span-2 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col justify-end p-5 hover:border-cyan-500/40 hover:bg-white/[0.06] transition-all group cursor-pointer">
              <span className="text-3xl mb-2">💻</span>
              <span className="font-bold group-hover:text-cyan-300 transition-colors">Electronics</span>
              <span className="text-white/40 text-xs mt-1">Audio · Wearables · Accessories</span>
            </div>
            <div className="rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col justify-end p-5 hover:border-violet-500/40 hover:bg-white/[0.06] transition-all group cursor-pointer">
              <span className="text-3xl mb-2">🧴</span>
              <span className="font-bold text-sm group-hover:text-violet-300 transition-colors">Beauty</span>
            </div>
            <div className="rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col justify-end p-5 hover:border-violet-500/40 hover:bg-white/[0.06] transition-all group cursor-pointer">
              <span className="text-3xl mb-2">🏋️</span>
              <span className="font-bold text-sm group-hover:text-violet-300 transition-colors">Fitness</span>
            </div>
            <div className="col-span-2 rounded-2xl bg-gradient-to-br from-cyan-900/30 to-cyan-800/10 border border-cyan-500/20 flex flex-col justify-end p-5 hover:border-cyan-500/50 transition-all group cursor-pointer">
              <span className="text-3xl mb-2">🛏️</span>
              <span className="font-bold group-hover:text-cyan-300 transition-colors">Bedding & Bath</span>
              <span className="text-white/40 text-xs mt-1">Sheets · Towels · Pillows</span>
            </div>
            <div className="rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col justify-end p-5 hover:border-violet-500/40 hover:bg-white/[0.06] transition-all group cursor-pointer">
              <span className="text-3xl mb-2">🍳</span>
              <span className="font-bold text-sm group-hover:text-violet-300 transition-colors">Cookware</span>
            </div>
            <div className="rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col justify-end p-5 hover:border-violet-500/40 hover:bg-white/[0.06] transition-all group cursor-pointer">
              <span className="text-3xl mb-2">🎮</span>
              <span className="font-bold text-sm group-hover:text-violet-300 transition-colors">Gaming</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Brands — two-row marquee-style ── */}
      <section id="brands" className="py-20 px-6 border-t border-white/10 overflow-hidden">
        <div className="max-w-6xl mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">Authorized Brands</h2>
          <p className="text-center text-white/40 max-w-xl mx-auto">
            We carry officially authorized products from over 200 top consumer brands.
          </p>
        </div>
        {[
          ["NovaBrand","Meridian","CrestLine","Orbis","Vantage","Pinnacle","Stratos","Axiom","Luminary","Nexlabs"],
          ["Ironclad","Stellarco","GridWorks","Quantum","Pulsar","Foundry","Radiance","Forte","Elara","Solace"],
        ].map((row, i) => (
          <div key={i} className={`flex gap-4 mb-4 ${i === 1 ? "justify-end" : ""}`}>
            {row.map((b) => (
              <span
                key={b}
                className="shrink-0 px-6 py-3 rounded-full border border-white/10 bg-white/[0.03] text-white/50 hover:text-white hover:border-violet-500/40 transition-all text-sm font-semibold cursor-default"
              >
                {b}
              </span>
            ))}
          </div>
        ))}
      </section>

      {/* ── Logistics — alternating left/right ── */}
      <section id="logistics" className="py-28 px-6 border-t border-white/10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">Our Logistics Process</h2>
          <p className="text-center text-white/40 mb-20 max-w-xl mx-auto">
            From your first order to ongoing replenishment — here's how we keep things moving.
          </p>
          <div className="flex flex-col gap-0">
            {[
              { n: "1", icon: "📋", title: "Account Setup & Onboarding", desc: "We get your wholesale account set up in under 48 hours, complete with access to our full product portal and a dedicated rep." },
              { n: "2", icon: "📦", title: "Inventory Coordination", desc: "Browse 12,000+ live SKUs, set reorder thresholds, and lock in pricing tiers based on your volume commitments." },
              { n: "3", icon: "🚚", title: "Shipment Preparation", desc: "Orders are picked, packed, and verified in our regional warehouse closest to your delivery address for maximum speed." },
              { n: "4", icon: "📡", title: "Real-Time Tracking", desc: "Every shipment gets a live tracking link. Our ops dashboard shows status, ETA, and delivery confirmation in one place." },
              { n: "5", icon: "↩️", title: "Returns & Replacements", desc: "Defective or damaged goods are handled within 5 business days — no lengthy claims processes, just fast resolution." },
              { n: "6", icon: "📊", title: "Reporting & Analytics", desc: "Monthly performance reports show sell-through rates, top movers, and inventory health so you can plan smarter." },
              { n: "7", icon: "🤝", title: "Account Growth Support", desc: "Your dedicated rep proactively surfaces new products, promotions, and restocking opportunities to grow your margins." },
            ].map((item, i) => (
              <div
                key={item.n}
                className={`flex items-start gap-8 py-10 border-b border-white/10 ${i % 2 === 1 ? "flex-row-reverse text-right" : ""}`}
              >
                <div className="shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-600/30 to-cyan-600/30 border border-violet-500/20 flex items-center justify-center text-2xl">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <span className="text-xs font-bold text-violet-400 uppercase tracking-widest">Step {item.n}</span>
                  <h3 className="text-xl font-bold mt-1 mb-2">{item.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed max-w-lg">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us — large stat highlights ── */}
      <section className="py-28 px-6 border-t border-white/10 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-20">The Acme Advantage</h2>
          <div className="grid md:grid-cols-2 gap-px bg-white/10 rounded-3xl overflow-hidden">
            {[
              { stat: "200+", label: "Authorized Brands", detail: "Every product is sourced through official distribution agreements — no grey market, no counterfeits." },
              { stat: "99.4%", label: "On-Time Delivery", detail: "Our fulfillment network is engineered for reliability. Delays are the exception, not the rule." },
              { stat: "24/7", label: "Account Support", detail: "Your team and ours are always in sync — live chat, email, and phone around the clock." },
              { stat: "0 Hidden Fees", label: "Transparent Pricing", detail: "The price you see is the price you pay. Volume discounts are applied automatically at checkout." },
            ].map((item) => (
              <div key={item.label} className="bg-[#07070d] p-10 hover:bg-white/[0.03] transition-colors">
                <p className="text-5xl md:text-6xl font-black bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent mb-3">
                  {item.stat}
                </p>
                <p className="text-xl font-bold mb-3">{item.label}</p>
                <p className="text-white/40 text-sm leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="py-28 px-6 border-t border-white/10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-white/40 mb-14">
            Common questions from new wholesale partners.
          </p>
          {faqs.map((f) => (
            <FAQ key={f.q} q={f.q} a={f.a} />
          ))}
        </div>
      </section>

      {/* ── Contact — split layout ── */}
      <section id="contact" className="py-28 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Start Your Wholesale Account</h2>
            <p className="text-white/40 mb-8 leading-relaxed">
              Fill out the form and a member of our team will reach out within
              one business day to get your account set up and walk you through
              our catalog.
            </p>
            <div className="space-y-4 text-sm text-white/50">
              <p>📧 hello@acmecorp.com</p>
              <p>📞 +1 (800) 555-0100</p>
              <p>📍 New York, NY — with 24 regional warehouses nationwide</p>
            </div>
          </div>
          <form className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <input type="text"  placeholder="First name" className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-violet-500 transition-colors" />
              <input type="text"  placeholder="Last name"  className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-violet-500 transition-colors" />
            </div>
            <input type="email" placeholder="Business email" className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-violet-500 transition-colors" />
            <input type="text"  placeholder="Company name"   className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-violet-500 transition-colors" />
            <textarea rows={3}  placeholder="Tell us about your business and what you're looking for..." className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-violet-500 transition-colors resize-none" />
            <button type="submit" className="py-4 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 transition-all font-bold shadow-lg shadow-violet-500/20 cursor-pointer">
              Request Account Access
            </button>
          </form>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-white/10 py-10 px-6 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-white/30">
          <span className="text-lg font-black bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
            Acme Corp
          </span>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#about"     className="hover:text-white transition-colors">About</a>
            <a href="#products"  className="hover:text-white transition-colors">Products</a>
            <a href="#brands"    className="hover:text-white transition-colors">Brands</a>
            <a href="#logistics" className="hover:text-white transition-colors">Logistics</a>
            <a href="#faq"       className="hover:text-white transition-colors">FAQ</a>
          </div>
          <p>© {new Date().getFullYear()} Acme Corp. All rights reserved.</p>
        </div>
      </footer>

    </main>
  );
}
