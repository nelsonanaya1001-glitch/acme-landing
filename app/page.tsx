"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

/* ─── FAQ data ──────────────────────────────────────────── */
const faqs = [
  { q: "How do I open a wholesale account?",      a: "Submit your request through our contact form. A rep will verify your business and activate your account within 24–48 hours." },
  { q: "What are your minimum order quantities?", a: "MOQs vary by category, typically starting at 50 units. Volume pricing tiers apply automatically as your order size grows." },
  { q: "Do you offer drop shipping?",             a: "Yes — we support direct-to-consumer drop shipping for approved accounts with Shopify and WooCommerce integrations." },
  { q: "How fast is fulfillment?",                a: "Standard orders ship within 48 hours from the nearest regional warehouse. Expedited same-day processing is available." },
  { q: "Can I get samples before a bulk order?",  a: "Yes. Sample kits are available at cost for most product lines. Ask your account manager to arrange delivery." },
  { q: "Do you cover all 50 states?",             a: "Yes — our 24 regional warehouses give us 2-day ground coverage to 94% of the contiguous U.S." },
];

/* ─── Logistics steps ───────────────────────────────────── */
const steps = [
  { n: "01", icon: "📋", title: "Account Setup & Onboarding",  desc: "We verify your business and activate your wholesale account within 48 hours.", detail: "You'll receive a dedicated account manager, login credentials, and a full onboarding call." },
  { n: "02", icon: "📦", title: "Inventory Coordination",      desc: "Browse 12,000+ live SKUs, set reorder thresholds, and lock in volume pricing tiers.", detail: "Our inventory dashboard updates in real time so you always know what's in stock." },
  { n: "03", icon: "🚚", title: "Shipment Preparation",        desc: "Orders are picked, packed, and quality-checked at the regional warehouse nearest to you.", detail: "Standardized packaging minimizes damage and we support custom labeling for drop-ship." },
  { n: "04", icon: "📡", title: "Real-Time Tracking",          desc: "Every shipment includes a live tracking link and full status updates.", detail: "Get notified at every stage — picked, packed, shipped, and delivered." },
  { n: "05", icon: "↩️", title: "Returns & Replacements",      desc: "Defective or damaged goods resolved within 5 business days — no runaround.", detail: "Submit a return through your dashboard, your manager handles the rest." },
  { n: "06", icon: "📊", title: "Reporting & Analytics",       desc: "Monthly reports show sell-through rates, top movers, and inventory health.", detail: "Export CSV or connect your own tools via our API." },
  { n: "07", icon: "🤝", title: "Account Growth Support",      desc: "Your dedicated rep surfaces new products, promotions, and restocking opportunities.", detail: "Quarterly business reviews keep your purchasing aligned with market trends." },
];

/* ─── Products ──────────────────────────────────────────── */
const categories = [
  { label: "Home Appliances",  sub: "Blenders · Air Fryers · Microwaves · Toasters",      img: "/cat1.jpg" },
  { label: "Home Appliances",  sub: "Coffee Makers · Juicers · Food Processors · Mixers", img: "/appl2.jpg" },
  { label: "Electronics",      sub: "Headphones · Earbuds · Bluetooth Speakers · Cables", img: "/cat2.jpg" },
  { label: "Electronics",      sub: "Smart Watches · Phone Accessories · Chargers · Hubs",img: "/elec2.jpg" },
  { label: "Cookware",         sub: "Non-stick Pans · Cast Iron · Kitchen Tools · Sets",  img: "/cat5.jpg" },
];

/* ─── Components ────────────────────────────────────────── */

function LogisticsProcess() {
  const [active, setActive] = useState(0);
  const step = steps[active];
  return (
    <section id="logistics" className="py-24 px-6 bg-slate-50 border-t border-slate-100">
      <div className="max-w-6xl mx-auto">
        <p className="text-red-500 text-xs font-bold uppercase tracking-widest font-mono text-center mb-3">How It Works</p>
        <h2 className="text-3xl md:text-4xl font-black text-center text-slate-900 mb-3">Our Logistics Process</h2>
        <p className="text-center text-slate-500 mb-14 max-w-xl mx-auto">Click each step to learn more.</p>
        <div className="grid md:grid-cols-[280px_1fr] gap-6 items-start">
          <div className="flex flex-col gap-1">
            {steps.map((s, i) => (
              <button key={s.n} onClick={() => setActive(i)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all ${i === active ? "bg-[#0f0f0f] text-white shadow-md" : "bg-white border border-slate-200 text-slate-600 hover:border-red-300 hover:text-red-600"}`}>
                <span className={`text-xs font-black font-mono shrink-0 ${i === active ? "text-red-400" : "text-slate-400"}`}>{s.n}</span>
                <span className="text-sm font-semibold leading-tight">{s.title}</span>
              </button>
            ))}
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-10 shadow-sm min-h-[340px] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-3xl">{step.icon}</div>
                <div>
                  <p className="text-xs font-bold text-red-500 uppercase tracking-widest font-mono">Step {step.n}</p>
                  <h3 className="text-2xl font-black text-slate-900">{step.title}</h3>
                </div>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">{step.desc}</p>
              <p className="text-slate-400 text-sm leading-relaxed">{step.detail}</p>
            </div>
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-100">
              <button onClick={() => setActive(a => Math.max(0, a - 1))} disabled={active === 0}
                className="px-5 py-2.5 rounded-lg border border-slate-200 text-sm font-semibold text-slate-600 hover:border-red-300 hover:text-red-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all">← Previous</button>
              <span className="text-xs text-slate-400 font-mono">{active + 1} / {steps.length}</span>
              <button onClick={() => setActive(a => Math.min(steps.length - 1, a + 1))} disabled={active === steps.length - 1}
                className="px-5 py-2.5 rounded-lg bg-red-600 hover:bg-red-700 text-sm font-semibold text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all">Next →</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const heroSlides = ["/log1.jpg","/log2.jpg","/log3.jpg","/log4.jpg","/log5.jpg"];

function HeroSection() {
  const [slide, setSlide] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setSlide(s => (s + 1) % heroSlides.length), 5000);
    return () => clearInterval(t);
  }, []);
  return (
    <section className="relative min-h-screen flex items-end pb-16 px-8 md:px-16 overflow-hidden bg-[#0f0f0f]">
      {heroSlides.map((src, i) => (
        <div key={src} className="absolute inset-0 transition-opacity duration-1000" style={{ opacity: i === slide ? 1 : 0 }}>
          <Image src={src} alt="" fill className="object-cover opacity-50" sizes="100vw" priority={i === 0} />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
      <div className="relative max-w-3xl">
        <h1 className="text-6xl md:text-8xl font-bold text-white leading-none mb-6 uppercase" style={{ fontFamily: "var(--font-oswald)" }}>
          Premium Products.<br /><span className="text-red-500">Wholesale Prices.</span><br />Delivered Fast.
        </h1>
        <p className="text-white/50 text-lg md:text-xl max-w-xl leading-relaxed mb-10">
          Thousands of in-demand consumer products available at wholesale — backed by nationwide warehousing, real-time inventory, and fast reliable fulfillment.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="#contact" className="px-8 py-4 rounded bg-red-600 hover:bg-red-700 transition-colors font-bold text-white text-lg">Contact Us</a>
          <a href="#products" className="px-8 py-4 rounded border border-white/30 hover:border-white/60 hover:bg-white/5 transition-colors font-semibold text-white/70 text-lg">Browse Products</a>
        </div>
      </div>
      {/* Dot indicators */}
      <div className="absolute bottom-28 left-8 md:left-16 flex gap-2">
        {heroSlides.map((_, i) => (
          <button key={i} onClick={() => setSlide(i)}
            className={`h-1 rounded-full transition-all ${i === slide ? "w-8 bg-red-500" : "w-3 bg-white/30"}`} />
        ))}
      </div>
    </section>
  );
}

function ProductSlideshow() {
  const [current, setCurrent] = useState(0);
  const [auto, setAuto] = useState(true);

  useEffect(() => {
    if (!auto) return;
    const t = setInterval(() => setCurrent(c => (c + 1) % categories.length), 4000);
    return () => clearInterval(t);
  }, [auto]);

  const cat = categories[current];
  const prev = () => { setAuto(false); setCurrent(c => (c - 1 + categories.length) % categories.length); };
  const next = () => { setAuto(false); setCurrent(c => (c + 1) % categories.length); };

  return (
    <section id="products" className="py-20 px-6 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto">
        <p className="text-red-500 text-xs font-bold uppercase tracking-widest font-mono text-center mb-3">What We Distribute</p>
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 text-center mb-10">Product Categories</h2>

        {/* Slideshow card */}
        <div className="relative rounded-2xl overflow-hidden h-[420px] shadow-xl">
          {categories.map((c, i) => (
            <div key={c.label} className="absolute inset-0 transition-opacity duration-700" style={{ opacity: i === current ? 1 : 0 }}>
              <Image src={c.img} alt={c.label} fill className="object-cover" sizes="(max-width:768px) 100vw, 80vw" priority={i === 0} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
            </div>
          ))}

          {/* Text overlay */}
          <div className="absolute bottom-0 left-0 right-0 z-10 p-8">
            <p className="text-red-400 text-xs font-bold uppercase tracking-widest font-mono mb-2">
              {String(current + 1).padStart(2,"0")} / {String(categories.length).padStart(2,"0")}
            </p>
            <h3 className="text-3xl md:text-4xl font-bold text-white uppercase mb-2" style={{ fontFamily: "var(--font-oswald)" }}>{cat.label}</h3>
            <p className="text-white/60 text-sm">{cat.sub}</p>
          </div>

          {/* Arrows */}
          <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/50 border border-white/20 hover:bg-red-600 transition-all text-white flex items-center justify-center text-lg">‹</button>
          <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/50 border border-white/20 hover:bg-red-600 transition-all text-white flex items-center justify-center text-lg">›</button>

          {/* Dots */}
          <div className="absolute bottom-4 right-6 z-10 flex gap-1.5">
            {categories.map((_, i) => (
              <button key={i} onClick={() => { setAuto(false); setCurrent(i); }}
                className={`rounded-full transition-all ${i === current ? "w-6 h-1.5 bg-red-500" : "w-1.5 h-1.5 bg-white/40"}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const brands = ["Shark","Ninja","Keurig","Cuisinart","Hamilton Beach","Braun","Black+Decker","Oster","Bissell","Epson","Canon","Logitech","+ Many More"];
const BRANDS_PER_SLIDE = 4;

function BrandsSlideshow() {
  const [current, setCurrent] = useState(0);
  const slides = Array.from({ length: Math.ceil(brands.length / BRANDS_PER_SLIDE) }, (_, i) =>
    brands.slice(i * BRANDS_PER_SLIDE, i * BRANDS_PER_SLIDE + BRANDS_PER_SLIDE)
  );

  useEffect(() => {
    const t = setInterval(() => setCurrent(c => (c + 1) % slides.length), 3000);
    return () => clearInterval(t);
  }, [slides.length]);

  return (
    <section id="brands" className="py-20 bg-[#0f0f0f] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-red-400 text-xs font-bold uppercase tracking-widest font-mono text-center mb-3">Our Network</p>
        <h2 className="text-3xl md:text-4xl font-black text-white text-center mb-10">Authorized Brands</h2>

        {/* Slide area */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides.map((group, si) => (
              <div key={si} className="w-full shrink-0 grid grid-cols-2 md:grid-cols-4 gap-4">
                {group.map(b => b === "+ Many More" ? (
                  <a key={b} href="#contact" className="py-8 px-6 rounded-xl border border-red-500/40 bg-red-600/10 text-center hover:bg-red-600 hover:border-red-600 transition-all group cursor-pointer">
                    <p className="text-red-400 group-hover:text-white font-black text-lg uppercase tracking-wide">+ Many More</p>
                    <p className="text-white/30 group-hover:text-white/70 text-xs mt-1">Contact Us</p>
                  </a>
                ) : (
                  <div key={b} className="py-8 px-6 rounded-xl border border-white/10 bg-white/5 text-center hover:border-red-500/40 hover:bg-white/10 transition-all">
                    <p className="text-white font-black text-lg uppercase tracking-wide">{b}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {slides.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)}
              className={`rounded-full transition-all ${i === current ? "w-8 h-2 bg-red-500" : "w-2 h-2 bg-white/30 hover:bg-white/60"}`} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   PAGE
═══════════════════════════════════════════════════════════ */
function Tracker() {
  const path = usePathname();
  useEffect(() => {
    fetch("/api/track", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ page: path }) });
  }, [path]);
  return null;
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-800 font-sans">

      {/* ── NAV ── minimal, logo left, links right */}
      <nav className="fixed top-0 w-full z-50 bg-[#0f0f0f] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="w-24 h-24 overflow-hidden flex items-center justify-center" style={{ mixBlendMode: "screen" }}>
            <Image src="/logo.png" alt="El Barullo" width={130} height={130} className="object-contain scale-[1.22]" style={{ filter: "contrast(2) brightness(0.85) saturate(1.4)" }} />
          </div>
          <div className="hidden md:flex items-center gap-1 bg-white/10 rounded-full px-2 py-1">
            {["Products","About","Brands","Logistics","FAQ"].map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} className="px-4 py-1.5 rounded-full text-sm text-white/60 hover:text-white hover:bg-white/10 transition-all">{l}</a>
            ))}
          </div>
          <a href="#contact" className="text-sm px-5 py-2.5 rounded-full bg-red-600 hover:bg-red-700 transition-colors font-semibold text-white">Contact Us</a>
        </div>
      </nav>

      <Tracker />
      <HeroSection />

      {/* ── PRODUCTS ── full-screen slideshow */}
      <ProductSlideshow />

      {/* ── ABOUT ── dark full-width with left headline + right cards */}
      <section id="about" className="bg-[#0f0f0f] py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div>
            <p className="text-red-400 text-xs font-bold uppercase tracking-widest font-mono mb-4">Who We Are</p>
            <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6 uppercase" style={{ fontFamily: "var(--font-oswald)" }}>
              Building Reliable<br /><span className="text-red-500">Wholesale &<br />Distribution</span>
            </h2>
            <p className="text-white/50 leading-relaxed mb-4">El Barullo works with a broad network of suppliers and product categories to help businesses access trusted products while maintaining smooth inventory movement and reliable fulfillment operations.</p>
            <p className="text-white/50 leading-relaxed">We are focused on building long-term partnerships through professionalism, consistency, and outstanding customer service across the United States.</p>
          </div>
          <div className="flex flex-col gap-4">
            {[
              { title: "Nationwide Distribution", desc: "Seamless product movement to businesses across all 50 states with reliable timelines." },
              { title: "Inventory Management",    desc: "Organized warehouse operations and bulk order coordination for efficient fulfillment." },
              { title: "Trusted Partnerships",    desc: "Built on integrity, consistency, and long-term business relationships." },
            ].map((f) => (
              <div key={f.title} className="p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-red-500/30 transition-all">
                <div className="w-1 h-8 bg-red-600 rounded mb-4" />
                <h3 className="font-bold text-white mb-2">{f.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BRANDS ── slideshow */}
      <BrandsSlideshow />

      {/* ── 3PL ── bold split section */}
      <section className="py-24 px-6 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-red-500 text-xs font-bold uppercase tracking-widest font-mono mb-4">Third-Party Logistics</p>
            <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-6 uppercase" style={{ fontFamily: "var(--font-oswald)" }}>
              What Is <span className="text-red-500">3PL</span> And How Does It Work?
            </h2>
            <p className="text-slate-500 leading-relaxed mb-5">Third-Party Logistics (3PL) means outsourcing your storage, fulfillment, and shipping operations to a specialized partner — so you can focus on growing your business instead of managing warehouses.</p>
            <p className="text-slate-500 leading-relaxed">El Barullo acts as your 3PL provider: we receive your inventory, store it in our regional warehouses, pick and pack orders as they come in, and ship directly to your customers — all under your brand.</p>
          </div>
          <div className="flex flex-col gap-3">
            {[
              { n: "01", title: "You Send Us Inventory",      desc: "Ship your products to one of our 24 regional warehouses. We receive, inspect, and log every unit." },
              { n: "02", title: "Orders Come In",             desc: "When a customer places an order, it's automatically sent to our fulfillment system in real time." },
              { n: "03", title: "We Pick, Pack & Ship",       desc: "Our team picks, packs, and ships — often same or next business day." },
              { n: "04", title: "Your Customer Gets It Fast", desc: "Orders route through the nearest warehouse to minimize transit time." },
            ].map(s => (
              <div key={s.n} className="flex gap-4 p-5 rounded-xl border border-slate-200 hover:border-red-300 hover:shadow-sm transition-all">
                <span className="text-red-500 font-black font-mono text-sm shrink-0 mt-0.5">{s.n}</span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{s.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LOGISTICS PROCESS ── interactive stepper */}
      <LogisticsProcess />

      {/* ── FAQ ── two-column */}
      <section id="faq" className="py-24 px-6 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto">
          <p className="text-red-400 text-xs font-bold uppercase tracking-widest font-mono text-center mb-3">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-black text-white text-center mb-14">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-x-16">
            {faqs.map(f => (
              <div key={f.q} className="border-b border-white/10">
                <details className="group py-5">
                  <summary className="flex justify-between items-center cursor-pointer text-white/80 hover:text-white transition-colors list-none">
                    <span className="font-semibold text-sm pr-4">{f.q}</span>
                    <span className="text-red-500 text-xl shrink-0 group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="pt-3 pb-1 text-white/40 text-sm leading-relaxed">{f.a}</p>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── centered dark form */}
      <section id="contact" className="py-24 px-6 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-red-500 text-xs font-bold uppercase tracking-widest font-mono mb-3">Get In Touch</p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-5 uppercase leading-tight" style={{ fontFamily: "var(--font-oswald)" }}>Let's Work Together</h2>
            <p className="text-slate-500 leading-relaxed mb-10">Fill out the form and a member of our team will reach out within one business day.</p>
            <div className="space-y-5">
              {[["📧","Elbarullosm@gmail.com"],["📞","(801) 718-5391"],["📍","35 S Tungsten Way, Vineyard, UT 84059"]].map(([icon,text]) => (
                <div key={text} className="flex items-center gap-4">
                  <span className="w-10 h-10 rounded-lg bg-red-50 border border-red-100 flex items-center justify-center text-lg">{icon}</span>
                  <span className="text-slate-600 text-sm">{text}</span>
                </div>
              ))}
            </div>
          </div>
          <form className="flex flex-col gap-4 bg-slate-50 border border-slate-200 rounded-2xl p-8">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="First name" className="px-4 py-3 rounded-lg border border-slate-200 bg-white text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-red-400 transition-colors text-sm" />
              <input type="text" placeholder="Last name" className="px-4 py-3 rounded-lg border border-slate-200 bg-white text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-red-400 transition-colors text-sm" />
            </div>
            <input type="email" placeholder="Business email" className="px-4 py-3 rounded-lg border border-slate-200 bg-white text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-red-400 transition-colors text-sm" />
            <input type="text" placeholder="Company name" className="px-4 py-3 rounded-lg border border-slate-200 bg-white text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-red-400 transition-colors text-sm" />
            <textarea rows={4} placeholder="Tell us about your business..." className="px-4 py-3 rounded-lg border border-slate-200 bg-white text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-red-400 transition-colors resize-none text-sm" />
            <button type="submit" className="py-3.5 rounded-lg bg-red-600 hover:bg-red-700 transition-colors font-bold text-white cursor-pointer">Send Message</button>
          </form>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#0f0f0f] border-t border-white/10 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-white/30">
          <div className="w-14 h-14 overflow-hidden flex items-center justify-center" style={{ mixBlendMode: "screen" }}>
            <Image src="/logo.png" alt="El Barullo" width={80} height={80} className="object-contain scale-[1.22]" style={{ filter: "contrast(2) brightness(0.85) saturate(1.4)" }} />
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {["Products","About","Brands","Logistics","FAQ"].map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} className="hover:text-white transition-colors">{l}</a>
            ))}
          </div>
          <p>© {new Date().getFullYear()} El Barullo. All rights reserved.</p>
        </div>
      </footer>

    </main>
  );
}
