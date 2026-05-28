"use client";
import { useState, useEffect } from "react";

const slides = [
  { label: "Home Appliances", color: "from-orange-900/60 to-orange-800/20", icon: "🏠", items: "Blenders · Air Fryers · Coffee Makers · Toasters" },
  { label: "Electronics",     color: "from-blue-900/60 to-blue-800/20",     icon: "💻", items: "Headphones · Smart Watches · Phone Accessories" },
  { label: "Beauty & Personal",color: "from-pink-900/60 to-pink-800/20",    icon: "🧴", items: "Skincare · Hair Care · Grooming · Fragrances" },
  { label: "Fitness & Sports", color: "from-green-900/60 to-green-800/20",  icon: "🏋️", items: "Equipment · Resistance Bands · Supplements" },
  { label: "Bedding & Bath",   color: "from-indigo-900/60 to-indigo-800/20",icon: "🛏️", items: "Sheets · Towels · Pillows · Mattress Toppers" },
  { label: "Cookware",         color: "from-red-900/60 to-red-800/20",      icon: "🍳", items: "Non-stick Pans · Cast Iron · Kitchen Gadgets" },
  { label: "Gaming & Tech",    color: "from-violet-900/60 to-violet-800/20",icon: "🎮", items: "Controllers · Keyboards · Headsets · Cables" },
  { label: "Toys & Kids",      color: "from-yellow-900/60 to-yellow-800/20",icon: "🧸", items: "Educational · Outdoor Toys · STEM · Creative" },
];

function ProductSlideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 3000);
    return () => clearInterval(t);
  }, []);

  const slide = slides[current];

  return (
    <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-[#0a1628] aspect-[4/3] flex flex-col justify-end">
      <div className={`absolute inset-0 bg-gradient-to-br ${slide.color} transition-all duration-700`} />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-[120px] opacity-20 select-none">{slide.icon}</span>
      </div>
      <div className="relative p-8">
        <p className="text-white/50 text-xs uppercase tracking-widest font-mono mb-2">Category</p>
        <h3 className="text-2xl font-black text-white mb-2">{slide.label}</h3>
        <p className="text-white/50 text-sm">{slide.items}</p>
      </div>
      {/* Dot indicators */}
      <div className="relative flex gap-1.5 px-8 pb-6">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all ${i === current ? "w-6 bg-orange-500" : "w-1.5 bg-white/30"}`}
          />
        ))}
      </div>
    </div>
  );
}

const faqs = [
  {
    q: "How do I open a wholesale account?",
    a: "Submit your request through our contact form. A representative will verify your business and have your account active within 24–48 hours.",
  },
  {
    q: "What are your minimum order quantities?",
    a: "MOQs vary by category, typically starting at 50 units. Volume pricing tiers are applied automatically as your order size increases.",
  },
  {
    q: "Do you offer drop shipping and fulfillment?",
    a: "Yes. We support direct-to-consumer drop shipping for approved accounts and integrate with major ecommerce platforms including Shopify and WooCommerce.",
  },
  {
    q: "What is your average fulfillment time?",
    a: "Standard orders ship within 2 business days from our nearest regional warehouse. Expedited same-day processing is available for qualifying accounts.",
  },
  {
    q: "Can I request product samples before a bulk order?",
    a: "Absolutely. Sample kits are available for most product lines. Contact your account manager and we'll arrange delivery at cost.",
  },
];

const steps = [
  { n: "01", icon: "📋", title: "Account Setup & Onboarding",  desc: "We verify your business and activate your wholesale account within 48 hours, with full access to our product portal and pricing catalog.", detail: "You'll receive a dedicated account manager, login credentials, and a full onboarding call to walk you through the platform." },
  { n: "02", icon: "📦", title: "Inventory Coordination",       desc: "Browse 12,000+ live SKUs, set reorder thresholds, and lock in volume pricing tiers based on your order commitments.", detail: "Our inventory dashboard updates in real time so you always know what's in stock, what's low, and what's on the way." },
  { n: "03", icon: "🚚", title: "Shipment Preparation",         desc: "Orders are picked, packed, and quality-checked at the regional warehouse closest to your delivery address for maximum speed.", detail: "We use standardized packaging to minimize damage in transit and support custom labeling for drop-ship orders." },
  { n: "04", icon: "📡", title: "Real-Time Tracking",           desc: "Every shipment includes a live tracking link and full status updates through your account dashboard.", detail: "Get notified at every stage — picked, packed, shipped, out for delivery, and delivered." },
  { n: "05", icon: "↩️", title: "Returns & Replacements",       desc: "Defective or damaged goods are resolved within 5 business days — no lengthy claims process, no runaround.", detail: "Submit a return request through your dashboard, and your account manager handles the rest from pickup to credit." },
  { n: "06", icon: "📊", title: "Reporting & Analytics",        desc: "Monthly performance reports show sell-through rates, top movers, and inventory health to help you plan smarter.", detail: "Export your data any time in CSV or connect to your own tools via our API integration." },
  { n: "07", icon: "🤝", title: "Account Growth Support",       desc: "Your dedicated rep proactively surfaces new products, promotions, and restocking opportunities to grow your margins.", detail: "Quarterly business reviews help align your purchasing strategy with market trends and upcoming product launches." },
];

function LogisticsProcess() {
  const [active, setActive] = useState(0);
  const step = steps[active];
  return (
    <section id="logistics" className="py-24 px-6 bg-slate-50 border-t border-slate-100">
      <div className="max-w-6xl mx-auto">
        <p className="text-orange-500 text-xs font-bold uppercase tracking-widest font-mono text-center mb-3">How It Works</p>
        <h2 className="text-3xl md:text-4xl font-black text-center text-slate-900 mb-3">Our Logistics Process</h2>
        <p className="text-center text-slate-500 mb-14 max-w-xl mx-auto">
          From first order to ongoing replenishment — click each step to learn more.
        </p>
        <div className="grid md:grid-cols-[280px_1fr] gap-6 items-start">
          {/* Step list */}
          <div className="flex flex-col gap-1">
            {steps.map((s, i) => (
              <button
                key={s.n}
                onClick={() => setActive(i)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all ${
                  i === active
                    ? "bg-[#0a1628] text-white shadow-md"
                    : "bg-white border border-slate-200 text-slate-600 hover:border-orange-300 hover:text-orange-600"
                }`}
              >
                <span className={`text-xs font-black font-mono shrink-0 ${i === active ? "text-orange-400" : "text-slate-400"}`}>
                  {s.n}
                </span>
                <span className="text-sm font-semibold leading-tight">{s.title}</span>
              </button>
            ))}
          </div>
          {/* Content panel */}
          <div className="bg-white border border-slate-200 rounded-2xl p-10 shadow-sm min-h-[340px] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-3xl">
                  {step.icon}
                </div>
                <div>
                  <p className="text-xs font-bold text-orange-500 uppercase tracking-widest font-mono">Step {step.n}</p>
                  <h3 className="text-2xl font-black text-slate-900">{step.title}</h3>
                </div>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">{step.desc}</p>
              <p className="text-slate-400 text-sm leading-relaxed">{step.detail}</p>
            </div>
            {/* Prev / Next */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-100">
              <button
                onClick={() => setActive((a) => Math.max(0, a - 1))}
                disabled={active === 0}
                className="px-5 py-2.5 rounded-lg border border-slate-200 text-sm font-semibold text-slate-600 hover:border-orange-300 hover:text-orange-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              >
                ← Previous
              </button>
              <span className="text-xs text-slate-400 font-mono">{active + 1} / {steps.length}</span>
              <button
                onClick={() => setActive((a) => Math.min(steps.length - 1, a + 1))}
                disabled={active === steps.length - 1}
                className="px-5 py-2.5 rounded-lg bg-orange-500 hover:bg-orange-600 text-sm font-semibold text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-slate-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center py-5 text-left text-slate-800 hover:text-orange-600 transition-colors"
      >
        <span className="font-semibold pr-4">{q}</span>
        <span className="text-orange-500 text-2xl shrink-0 leading-none font-light">{open ? "−" : "+"}</span>
      </button>
      {open && <p className="pb-5 text-slate-500 text-sm leading-relaxed">{a}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-800 font-sans">

      {/* ── Nav ── */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a1628] border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="text-xl font-black text-white tracking-tight">
            ACME<span className="text-orange-500">CORP</span>
          </span>
          <div className="hidden md:flex gap-8 text-sm text-white/60">
            <a href="#about"     className="hover:text-white transition-colors">About</a>
            <a href="#products"  className="hover:text-white transition-colors">Products</a>
            <a href="#brands"    className="hover:text-white transition-colors">Brands</a>
            <a href="#logistics" className="hover:text-white transition-colors">Logistics</a>
            <a href="#faq"       className="hover:text-white transition-colors">FAQ</a>
          </div>
          <a
            href="#contact"
            className="text-sm px-5 py-2.5 rounded bg-orange-500 hover:bg-orange-600 transition-colors font-semibold text-white"
          >
            Contact Us
          </a>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="relative bg-[#0a1628] min-h-screen flex items-center px-6 overflow-hidden">
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded bg-orange-500/20 border border-orange-500/30">
            <span className="w-2 h-2 rounded-full bg-orange-400" />
            <span className="text-orange-300 text-xs font-semibold uppercase tracking-widest">Now Onboarding Wholesale Partners</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-white leading-[1.0] mb-6 tracking-wide uppercase" style={{ fontFamily: "var(--font-oswald)" }}>
            Stock Smarter.<br />
            <span className="text-orange-500">Ship Faster.</span><br />
            Scale Further.
          </h1>
          <p className="text-white/50 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            Acme Corp gives retailers and resellers direct access to 12,000+ in-demand
            products — backed by 24 regional warehouses, real-time inventory, and a team
            that actually picks up the phone.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#contact" className="px-8 py-4 rounded bg-orange-500 hover:bg-orange-600 transition-colors font-bold text-white text-center text-lg">
              Open an Account
            </a>
            <a href="#products" className="px-8 py-4 rounded border border-white/20 hover:border-white/40 hover:bg-white/5 transition-colors font-semibold text-white/70 text-center text-lg">
              Browse Products
            </a>
          </div>
        </div>
      </section>

      {/* ── About — text left, cards right ── */}
      <section id="about" className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <p className="text-orange-500 text-xs font-bold uppercase tracking-widest text-center mb-3">Who We Are</p>
          <h2 className="text-3xl md:text-4xl font-black text-center text-slate-900 mb-3">
            Building Reliable Wholesale &amp; Logistics Operations
          </h2>
          <p className="text-center text-slate-500 max-w-2xl mx-auto mb-16 leading-relaxed">
            Committed to delivering dependable wholesale distribution services with a
            strong focus on product quality and efficient logistics management.
          </p>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-slate-600 leading-relaxed mb-5">
                Acme Corp works with a broad network of suppliers and product categories
                to help businesses access trusted products while maintaining smooth
                inventory movement and reliable fulfillment operations.
              </p>
              <p className="text-slate-600 leading-relaxed">
                We are focused on building long-term partnerships through
                professionalism, consistency, and outstanding customer service
                across the United States.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {[
                { title: "Nationwide Distribution", desc: "Seamless product movement to businesses across all 50 states with reliable timelines." },
                { title: "Inventory Management",    desc: "Organized warehouse operations and bulk order coordination for efficient fulfillment." },
                { title: "Trusted Partnerships",    desc: "Built on integrity, consistency, and long-term business relationships." },
              ].map((f) => (
                <div key={f.title} className="p-5 rounded-lg border border-slate-200 bg-white shadow-sm hover:shadow-md hover:border-orange-200 transition-all">
                  <h3 className="font-bold text-slate-800 mb-1">{f.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Product Categories — left text + right slideshow ── */}
      <section id="products" className="py-24 px-6 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* Left — label, heading, description, category list */}
          <div>
            <p className="text-orange-500 text-xs font-bold uppercase tracking-widest font-mono mb-3">What We Distribute</p>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
              Wholesale Products We Manage
            </h2>
            <p className="text-slate-500 mb-8 leading-relaxed">
              We distribute a wide range of consumer products and household goods
              across eight key categories — all sourced from authorized brand partners.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {[
                "Home Appliances", "Electronics",
                "Beauty & Personal", "Fitness & Sports",
                "Bedding & Bath", "Cookware",
                "Gaming & Tech", "Toys & Kids",
              ].map((label) => (
                <div
                  key={label}
                  className="px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 hover:border-orange-300 hover:bg-orange-50 transition-all cursor-pointer group"
                >
                  <span className="text-sm font-semibold text-slate-700 group-hover:text-orange-600 transition-colors">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — auto-cycling slideshow */}
          <ProductSlideshow />

        </div>
      </section>

      {/* ── Brands ── */}
      <section id="brands" className="py-24 px-6 bg-slate-50 border-t border-slate-100">
        <div className="max-w-6xl mx-auto">
          <p className="text-orange-500 text-xs font-bold uppercase tracking-widest text-center mb-3">Our Network</p>
          <h2 className="text-3xl md:text-4xl font-black text-center text-slate-900 mb-3">Authorized Brands</h2>
          <p className="text-center text-slate-500 mb-14 max-w-xl mx-auto">
            Officially authorized distribution agreements with over 200 top consumer brands.
          </p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
            {[
              "NovaBrand","Meridian","CrestLine","Orbis","Vantage","Pinnacle",
              "Stratos","Axiom","Luminary","Nexlabs","Ironclad","Stellarco",
              "GridWorks","Quantum","Pulsar","Foundry","Radiance","Forte",
            ].map((b) => (
              <div
                key={b}
                className="py-4 px-3 rounded-lg border border-slate-200 bg-white text-slate-500 hover:text-orange-600 hover:border-orange-200 hover:shadow-sm transition-all text-xs font-bold text-center uppercase tracking-wide"
              >
                {b}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Logistics — interactive stepper ── */}
      <LogisticsProcess />

      {/* ── Why Choose Us ── */}
      {/* ── Reliability ── */}
      <section className="py-24 px-6 bg-[#0a1628]">
        <div className="max-w-6xl mx-auto">
          <p className="text-orange-400 text-xs font-bold uppercase tracking-widest font-mono text-center mb-6">The Acme Advantage</p>
          {/* Big statement */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6 uppercase tracking-wide" style={{ fontFamily: "var(--font-oswald)" }}>
              Reliability Isn't a Feature.<br />
              <span className="text-orange-500">It's Our Foundation.</span>
            </h2>
            <p className="text-white/40 text-lg max-w-2xl mx-auto leading-relaxed">
              Every warehouse, every order, every shipment — our entire operation is
              engineered around one promise: your products arrive on time, every time.
            </p>
          </div>
          {/* 3 horizontal stats */}
          <div className="grid md:grid-cols-3 gap-px bg-white/10 rounded-xl overflow-hidden mb-10">
            {[
              { stat: "99.4%",  label: "On-Time Delivery Rate",   desc: "Measured across all outbound shipments over the last 12 months." },
              { stat: "48 hrs", label: "Average Order Fulfillment", desc: "From confirmed purchase order to carrier pickup at our warehouse." },
              { stat: "24 / 7", label: "Live Account Support",     desc: "A real person — not a bot — available any time you need us." },
            ].map((item) => (
              <div key={item.label} className="bg-[#0d1e35] p-8 text-center">
                <p className="text-5xl font-black text-orange-500 mb-2">{item.stat}</p>
                <p className="text-white font-bold mb-2">{item.label}</p>
                <p className="text-white/30 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          {/* Checklist row */}
          <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {[
              "200+ authorized brand agreements — no grey market products",
              "24 regional warehouses covering all 50 U.S. states",
              "Transparent pricing with no hidden fees or surprise charges",
              "Dedicated account manager assigned from day one",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 text-white/60 text-sm">
                <span className="text-orange-500 mt-0.5 shrink-0 font-black">✓</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="py-24 px-6 bg-white border-t border-slate-100">
        <div className="max-w-3xl mx-auto">
          <p className="text-orange-500 text-xs font-bold uppercase tracking-widest text-center mb-3">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 text-center mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-slate-500 mb-14">
            Common questions from new wholesale partners.
          </p>
          {faqs.map((f) => (
            <FAQ key={f.q} q={f.q} a={f.a} />
          ))}
        </div>
      </section>

      {/* ── Contact — split ── */}
      <section id="contact" className="py-24 px-6 bg-slate-50 border-t border-slate-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-orange-500 text-xs font-bold uppercase tracking-widest mb-3">Get In Touch</p>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-5">
              Start Your Wholesale Account
            </h2>
            <p className="text-slate-500 leading-relaxed mb-8">
              Fill out the form and a member of our team will reach out within one
              business day to verify your account and walk you through our full catalog.
            </p>
            <div className="space-y-4 text-sm text-slate-600">
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center text-base">📧</span>
                hello@acmecorp.com
              </div>
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center text-base">📞</span>
                +1 (800) 555-0100
              </div>
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center text-base">📍</span>
                New York, NY — 24 regional warehouses nationwide
              </div>
            </div>
          </div>
          <form className="flex flex-col gap-4 bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
            <div className="grid grid-cols-2 gap-4">
              <input type="text"  placeholder="First name"      className="px-4 py-3 rounded-lg border border-slate-200 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-orange-400 transition-colors text-sm" />
              <input type="text"  placeholder="Last name"       className="px-4 py-3 rounded-lg border border-slate-200 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-orange-400 transition-colors text-sm" />
            </div>
            <input type="email" placeholder="Business email"   className="px-4 py-3 rounded-lg border border-slate-200 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-orange-400 transition-colors text-sm" />
            <input type="text"  placeholder="Company name"     className="px-4 py-3 rounded-lg border border-slate-200 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-orange-400 transition-colors text-sm" />
            <textarea rows={3}  placeholder="Tell us about your business..." className="px-4 py-3 rounded-lg border border-slate-200 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-orange-400 transition-colors resize-none text-sm" />
            <button type="submit" className="py-3.5 rounded-lg bg-orange-500 hover:bg-orange-600 transition-colors font-bold text-white cursor-pointer">
              Request Account Access
            </button>
          </form>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-[#0a1628] border-t border-white/10 py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-white/40">
          <span className="text-lg font-black text-white tracking-tight">
            ACME<span className="text-orange-500">CORP</span>
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
