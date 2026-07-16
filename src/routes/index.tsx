import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Truck, Globe2, ShieldCheck, Clock, MapPinned, PackageCheck } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import heroImg from "@/assets/hero-truck.jpg";
import warehouseImg from "@/assets/warehouse.jpg";
import borderImg from "@/assets/border.jpg";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <img
          src={heroImg}
          alt="Freight truck on a US highway at sunset"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="relative mx-auto max-w-7xl px-6 py-32 lg:px-10 lg:py-44">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--gold)]">
            USA · Cross-Border Canada
          </p>
          <h1 className="max-w-4xl font-display text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
            Freight moved with precision, trust, and unwavering reliability.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80">
            Mudhra Brothers Inc. operates a nationwide fleet across all 50 states with dedicated cross-border service into Canada — delivering enterprise shippers the consistency their supply chains demand.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-sm bg-[var(--gold)] px-7 py-3.5 text-sm font-semibold text-[var(--navy-deep)] transition-transform hover:translate-y-[-1px]"
            >
              Request a Quote <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center rounded-sm border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Explore Services
            </Link>
          </div>

          <div className="mt-16 grid max-w-3xl grid-cols-3 gap-6 border-t border-white/20 pt-8">
            {[
              { k: "50", u: "States Served" },
              { k: "24/7", u: "Dispatch" },
              { k: "99.4%", u: "On-Time Delivery" },
            ].map((s) => (
              <div key={s.u}>
                <div className="font-display text-3xl font-bold text-white">{s.k}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-white/60">{s.u}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--navy)]">What we do</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl">
              End-to-end logistics built for enterprise supply chains
            </h2>
          </div>
          <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--navy)] hover:gap-3 transition-all">
            All services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: Truck, title: "Full Truckload (FTL)", desc: "Dedicated trailers for time-critical, high-volume shipments moving between any two points in North America." },
            { icon: PackageCheck, title: "Less-than-Truckload", desc: "Cost-efficient LTL consolidation for enterprise shippers with recurring regional freight needs." },
            { icon: Globe2, title: "Cross-Border USA · Canada", desc: "Bonded carriers, customs brokerage coordination, and PARS/PAPS filing for seamless border crossings." },
            
            { icon: ShieldCheck, title: "White-Glove & Specialized", desc: "Temperature-controlled, hazmat-certified, and high-value cargo handled by trained specialists." },
            { icon: MapPinned, title: "Managed Transportation", desc: "Dedicated account teams, freight-lane optimization, and real-time performance reporting." },
          ].map((s) => (
            <div
              key={s.title}
              className="group relative rounded-sm border border-border bg-card p-8 transition-all hover:border-[var(--navy)] hover:shadow-[var(--shadow-card)]"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-sm bg-[var(--navy)]/5 text-[var(--navy)] transition-colors group-hover:bg-[var(--navy)] group-hover:text-[var(--gold)]">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CROSS-BORDER FEATURE */}
      <section className="bg-[var(--navy)] text-white">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-2 lg:px-10">
          <div className="relative">
            <img
              src={borderImg}
              alt="Freight trucks crossing the US-Canada border"
              width={1600}
              height={1000}
              loading="lazy"
              className="rounded-sm shadow-[var(--shadow-elevated)]"
            />
            <div className="absolute -bottom-6 -right-6 hidden rounded-sm border-l-4 border-[var(--gold)] bg-white p-6 text-[var(--navy)] shadow-xl md:block">
              <div className="font-display text-3xl font-bold">18+</div>
              <div className="text-xs uppercase tracking-widest">Border Crossings Weekly</div>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--gold)]">Cross-Border Specialists</p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              North America moves. We keep it moving.
            </h2>
            <p className="mt-5 text-white/75 leading-relaxed">
              From Detroit-Windsor to Buffalo-Fort Erie and Pacific Highway, our bonded fleet and customs coordination remove friction from every cross-border lane. FAST-approved drivers, ACE/ACI e-manifests, and 24/7 border-side dispatch keep your freight compliant and on schedule.
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "C-TPAT & PIP certified operations",
                "PARS / PAPS pre-clearance",
                "Bonded warehousing",
                "Bilingual dispatch team",
              ].map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--gold)]" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--navy)]">Why Mudhra Brothers</p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              A logistics partner that behaves like part of your team.
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              We don't just haul freight. We build lasting operational relationships with shippers who need consistent capacity, transparent communication, and a single point of accountability from pickup to POD.
            </p>
            <img
              src={warehouseImg}
              alt="Modern logistics warehouse with organized pallets"
              width={1600}
              height={1000}
              loading="lazy"
              className="mt-10 rounded-sm shadow-[var(--shadow-card)]"
            />
          </div>
          <div className="grid gap-5 self-center">
            {[
              { icon: ShieldCheck, t: "Fully Insured & Compliant", d: "FMCSA, DOT, and MC-authorized. $2M cargo & liability coverage on every load." },
              { icon: Clock, t: "24/7 Live Dispatch", d: "Human dispatchers — not bots — reachable at any hour for updates or exceptions." },
              { icon: Globe2, t: "Cross-Border Expertise", d: "Decades of combined experience routing freight through every major US-Canada port." },
              { icon: PackageCheck, t: "Transparent Tracking", d: "Real-time GPS telemetry and milestone notifications delivered to your team." },
            ].map((f) => (
              <div key={f.t} className="flex gap-5 rounded-sm border border-border bg-card p-6">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-[var(--navy)] text-[var(--gold)]">
                  <f.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold">{f.t}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{f.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-6 lg:px-10">
        <div className="relative overflow-hidden rounded-sm bg-[var(--navy-deep)] px-8 py-16 text-center text-white sm:px-16">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, var(--gold) 0%, transparent 40%)" }} />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold sm:text-4xl">
              Ready to move freight with a carrier you can count on?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/70">
              Get a competitive quote from our enterprise team within one business day.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-sm bg-[var(--gold)] px-8 py-4 text-sm font-semibold text-[var(--navy-deep)] hover:translate-y-[-1px] transition-transform"
            >
              Start a Conversation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
