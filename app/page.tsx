"use client";
import { useState } from "react";

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
      <section className="relative bg-[#0a1628] pt-32 pb-24 px-6 overflow-hidden">
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />
        <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded bg-orange-500/20 border border-orange-500/30">
              <span className="w-2 h-2 rounded-full bg-orange-400" />
              <span className="text-orange-300 text-xs font-semibold uppercase tracking-widest">Now Onboarding Partners</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-white leading-tight mb-6">
              Your Trusted<br />
              <span className="text-orange-500">Wholesale</span><br />
              Distribution Partner
            </h1>
            <p className="text-white/50 text-lg leading-relaxed mb-8 max-w-lg">
              Acme Corp connects retailers and resellers with premium consumer
              goods — fast fulfillment, transparent pricing, and relationships
              built to last.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="px-7 py-3.5 rounded bg-orange-500 hover:bg-orange-600 transition-colors font-bold text-white text-center">
                Get Started
              </a>
              <a href="#products" className="px-7 py-3.5 rounded border border-white/20 hover:border-white/40 hover:bg-white/5 transition-colors font-semibold text-white/70 text-center">
                Explore Products
              </a>
            </div>
          </div>
          {/* Right side — key metrics panel */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { n: "12,000+", l: "Products in Catalog", icon: "📦" },
              { n: "200+",    l: "Authorized Brands",   icon: "✅" },
              { n: "48 hrs",  l: "Avg. Fulfillment",    icon: "🚚" },
              { n: "99.4%",   l: "On-Time Delivery",    icon: "📈" },
            ].map((s) => (
              <div key={s.l} className="bg-white/5 border border-white/10 rounded-lg p-5">
                <span className="text-2xl mb-3 block">{s.icon}</span>
                <p className="text-3xl font-black text-white">{s.n}</p>
                <p className="text-white/40 text-xs mt-1 uppercase tracking-wide">{s.l}</p>
              </div>
            ))}
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
                { icon: "🚚", title: "Nationwide Distribution", desc: "Seamless product movement to businesses across all 50 states with reliable timelines." },
                { icon: "📦", title: "Inventory Management",    desc: "Organized warehouse operations and bulk order coordination for efficient fulfillment." },
                { icon: "🤝", title: "Trusted Partnerships",    desc: "Built on integrity, consistency, and long-term business relationships." },
              ].map((f) => (
                <div key={f.title} className="flex items-start gap-4 p-5 rounded-lg border border-slate-200 bg-white shadow-sm hover:shadow-md hover:border-orange-200 transition-all">
                  <div className="w-11 h-11 shrink-0 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center text-xl">
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 mb-1">{f.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Product Categories ── */}
      <section id="products" className="py-24 px-6 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto">
          <p className="text-orange-500 text-xs font-bold uppercase tracking-widest text-center mb-3">What We Distribute</p>
          <h2 className="text-3xl md:text-4xl font-black text-center text-slate-900 mb-3">
            Wholesale Products We Manage
          </h2>
          <p className="text-center text-slate-500 mb-14 max-w-xl mx-auto">
            We distribute a wide range of consumer products and household goods across eight key categories.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: "🏠", label: "Home Appliances",  sub: "Blenders · Air Fryers · Coffee Makers" },
              { icon: "💻", label: "Electronics",       sub: "Audio · Wearables · Accessories" },
              { icon: "🧴", label: "Beauty & Personal", sub: "Skincare · Hair Care · Grooming" },
              { icon: "🏋️", label: "Fitness & Sports",  sub: "Equipment · Apparel · Nutrition" },
              { icon: "🛏️", label: "Bedding & Bath",    sub: "Sheets · Towels · Pillows" },
              { icon: "🍳", label: "Cookware",          sub: "Pots · Pans · Kitchen Tools" },
              { icon: "🎮", label: "Gaming & Tech",     sub: "Peripherals · Accessories" },
              { icon: "🧸", label: "Toys & Kids",       sub: "Educational · Outdoor · Creative" },
            ].map((cat) => (
              <div
                key={cat.label}
                className="p-5 rounded-lg border border-slate-200 bg-slate-50 hover:bg-white hover:border-orange-300 hover:shadow-md transition-all cursor-pointer group"
              >
                <span className="text-3xl mb-3 block">{cat.icon}</span>
                <p className="font-bold text-slate-800 text-sm mb-1 group-hover:text-orange-600 transition-colors">{cat.label}</p>
                <p className="text-slate-400 text-xs leading-relaxed">{cat.sub}</p>
              </div>
            ))}
          </div>
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

      {/* ── Logistics — alternating steps ── */}
      <section id="logistics" className="py-24 px-6 bg-white border-t border-slate-100">
        <div className="max-w-5xl mx-auto">
          <p className="text-orange-500 text-xs font-bold uppercase tracking-widest text-center mb-3">How It Works</p>
          <h2 className="text-3xl md:text-4xl font-black text-center text-slate-900 mb-3">Our Logistics Process</h2>
          <p className="text-center text-slate-500 mb-20 max-w-xl mx-auto">
            From first order to ongoing replenishment — a streamlined process built for reliability.
          </p>
          <div className="flex flex-col gap-0">
            {[
              { n: "01", icon: "📋", title: "Account Setup & Onboarding",  desc: "We verify your business and activate your wholesale account within 48 hours, with full access to our product portal." },
              { n: "02", icon: "📦", title: "Inventory Coordination",       desc: "Browse 12,000+ live SKUs, set reorder thresholds, and lock in volume pricing tiers for your account." },
              { n: "03", icon: "🚚", title: "Shipment Preparation",         desc: "Orders are picked, packed, and quality-checked at the regional warehouse closest to your delivery address." },
              { n: "04", icon: "📡", title: "Real-Time Tracking",           desc: "Every shipment includes a live tracking link and status updates through your account dashboard." },
              { n: "05", icon: "↩️", title: "Returns & Replacements",       desc: "Defective or damaged goods are resolved within 5 business days — no lengthy claims process." },
              { n: "06", icon: "📊", title: "Reporting & Analytics",        desc: "Monthly reports show sell-through rates, top movers, and inventory health to help you plan smarter." },
              { n: "07", icon: "🤝", title: "Account Growth Support",       desc: "Your dedicated rep proactively surfaces new products, promotions, and restocking opportunities." },
            ].map((item, i) => (
              <div
                key={item.n}
                className={`flex items-start gap-8 py-8 border-b border-slate-100 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              >
                <div className="shrink-0 w-14 h-14 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center text-2xl">
                  {item.icon}
                </div>
                <div className={`flex-1 ${i % 2 === 1 ? "md:text-right" : ""}`}>
                  <span className="text-xs font-bold text-orange-500 uppercase tracking-widest">Step {item.n}</span>
                  <h3 className="text-lg font-bold text-slate-800 mt-1 mb-2">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed max-w-lg">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-24 px-6 bg-[#0a1628]">
        <div className="max-w-6xl mx-auto">
          <p className="text-orange-400 text-xs font-bold uppercase tracking-widest text-center mb-3">The Acme Advantage</p>
          <h2 className="text-3xl md:text-4xl font-black text-white text-center mb-16">
            Why Businesses Choose Acme Corp
          </h2>
          <div className="grid md:grid-cols-2 gap-px bg-white/10 rounded-xl overflow-hidden">
            {[
              { stat: "200+",       label: "Authorized Brands",   detail: "Every product sourced through official distribution agreements — authentic and warranty-backed." },
              { stat: "99.4%",      label: "On-Time Delivery",    detail: "Our fulfillment network is engineered for reliability. Delays are the exception, not the rule." },
              { stat: "24 / 7",     label: "Account Support",     detail: "Your team and ours always in sync — live chat, email, and phone support around the clock." },
              { stat: "No Hidden",  label: "Fees. Ever.",         detail: "The price you see is the price you pay. Volume discounts apply automatically at checkout." },
            ].map((item) => (
              <div key={item.label} className="bg-[#0a1628] p-10 hover:bg-white/5 transition-colors">
                <p className="text-4xl md:text-5xl font-black text-orange-500 mb-2">{item.stat}</p>
                <p className="text-xl font-bold text-white mb-3">{item.label}</p>
                <p className="text-white/40 text-sm leading-relaxed">{item.detail}</p>
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
