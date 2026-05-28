export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white font-sans">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-[#0a0a0f]/80 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
            Acme Corp
          </span>
          <div className="hidden md:flex gap-8 text-sm text-white/60">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
          <a
            href="#contact"
            className="text-sm px-4 py-2 rounded-lg bg-violet-600 hover:bg-violet-500 transition-colors font-medium"
          >
            Get Started
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-40 pb-32 px-6 text-center overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(124,58,237,0.25), transparent)",
          }}
        />
        <div className="relative max-w-4xl mx-auto">
          <span className="inline-block mb-4 px-3 py-1 text-xs font-semibold rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/30 uppercase tracking-widest">
            Now Accepting Clients
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 bg-gradient-to-br from-white via-white/90 to-white/50 bg-clip-text text-transparent">
            We Build Solutions<br />That Actually Work
          </h1>
          <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-10">
            Acme Corp delivers end-to-end services that help businesses scale
            faster, reduce costs, and stay ahead of the curve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 transition-all font-semibold text-white shadow-lg shadow-violet-500/25"
            >
              Start a Project
            </a>
            <a
              href="#features"
              className="px-8 py-4 rounded-xl border border-white/20 hover:border-white/40 hover:bg-white/5 transition-all font-semibold text-white/80"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-white/10 bg-white/[0.02] py-14 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "500+", label: "Clients Served" },
            { value: "98%", label: "Satisfaction Rate" },
            { value: "10yrs", label: "In Business" },
            { value: "24/7", label: "Support" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-extrabold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                {stat.value}
              </p>
              <p className="text-white/40 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
            Our Services
          </h2>
          <p className="text-center text-white/40 mb-16 max-w-xl mx-auto">
            Everything your business needs, under one roof.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "⚡",
                title: "Strategy & Consulting",
                desc: "We align your business goals with actionable roadmaps and measurable outcomes.",
              },
              {
                icon: "🛠️",
                title: "Product Development",
                desc: "From concept to launch — we design, build, and ship products people love.",
              },
              {
                icon: "📈",
                title: "Growth & Marketing",
                desc: "Data-driven campaigns that grow your audience and convert more customers.",
              },
              {
                icon: "🔒",
                title: "Security & Compliance",
                desc: "Keep your operations safe with enterprise-grade security solutions.",
              },
              {
                icon: "☁️",
                title: "Cloud Infrastructure",
                desc: "Scalable, resilient cloud architecture built for performance at any size.",
              },
              {
                icon: "🤝",
                title: "Ongoing Support",
                desc: "Dedicated support teams available around the clock, whenever you need us.",
              },
            ].map((svc) => (
              <div
                key={svc.title}
                className="p-6 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-violet-500/40 transition-all group"
              >
                <span className="text-3xl mb-4 block">{svc.icon}</span>
                <h3 className="font-semibold text-lg mb-2 group-hover:text-violet-300 transition-colors">
                  {svc.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed">{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        className="py-28 px-6 bg-white/[0.02] border-y border-white/10"
      >
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Why Teams Choose Us
            </h2>
            <p className="text-white/40 mb-10">
              We're not just a vendor — we're an extension of your team.
              Here's what sets us apart.
            </p>
            <ul className="space-y-5">
              {[
                "Dedicated account manager from day one",
                "Transparent pricing with no hidden fees",
                "Proven frameworks refined over 10+ years",
                "Flexible contracts — month-to-month or annual",
                "Fully remote-compatible workflow",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-white/70">
                  <span className="mt-1 w-5 h-5 shrink-0 rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center text-[10px] font-bold text-white">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-4">
            {["Trusted", "Proven", "Scalable", "Reliable"].map((word) => (
              <div
                key={word}
                className="aspect-square rounded-2xl border border-white/10 bg-gradient-to-br from-violet-900/20 to-cyan-900/20 flex items-center justify-center text-2xl font-extrabold text-white/20 hover:text-white/60 transition-colors"
              >
                {word}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
            Simple Pricing
          </h2>
          <p className="text-center text-white/40 mb-16">
            No surprises. Cancel anytime.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Starter",
                price: "$499",
                desc: "Perfect for small teams getting started.",
                features: [
                  "Up to 5 users",
                  "Core features",
                  "Email support",
                  "Monthly reports",
                ],
                highlight: false,
              },
              {
                name: "Growth",
                price: "$999",
                desc: "For teams ready to scale.",
                features: [
                  "Up to 25 users",
                  "All features",
                  "Priority support",
                  "Weekly reports",
                  "Custom integrations",
                ],
                highlight: true,
              },
              {
                name: "Enterprise",
                price: "Custom",
                desc: "Tailored for large organizations.",
                features: [
                  "Unlimited users",
                  "Dedicated team",
                  "24/7 support",
                  "SLA guaranteed",
                  "White-label option",
                ],
                highlight: false,
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`p-8 rounded-2xl border flex flex-col ${
                  plan.highlight
                    ? "border-violet-500 bg-gradient-to-b from-violet-900/30 to-transparent shadow-xl shadow-violet-500/20"
                    : "border-white/10 bg-white/[0.03]"
                }`}
              >
                {plan.highlight && (
                  <span className="text-xs font-bold text-violet-300 uppercase tracking-widest mb-3">
                    Most Popular
                  </span>
                )}
                <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
                <p className="text-white/40 text-sm mb-6">{plan.desc}</p>
                <p className="text-4xl font-extrabold mb-8">
                  {plan.price}
                  {plan.price !== "Custom" && (
                    <span className="text-lg font-normal text-white/40">/mo</span>
                  )}
                </p>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="text-sm text-white/60 flex gap-2 items-center"
                    >
                      <span className="text-violet-400">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`text-center py-3 rounded-xl font-semibold transition-all ${
                    plan.highlight
                      ? "bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 text-white"
                      : "border border-white/20 hover:border-white/40 hover:bg-white/5 text-white/80"
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-28 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-white/40 mb-10">
            Drop us a message and we'll get back to you within one business day.
          </p>
          <form className="flex flex-col gap-4 text-left">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your name"
                className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-violet-500 transition-colors"
              />
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-violet-500 transition-colors"
              />
            </div>
            <textarea
              rows={4}
              placeholder="Tell us about your project..."
              className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-violet-500 transition-colors resize-none"
            />
            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 transition-all font-semibold text-white shadow-lg shadow-violet-500/25 cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-6 text-center text-white/30 text-sm">
        <p>© {new Date().getFullYear()} Acme Corp. All rights reserved.</p>
      </footer>
    </main>
  );
}
