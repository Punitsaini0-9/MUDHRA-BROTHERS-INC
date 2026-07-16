import { createFileRoute, Link } from "@tanstack/react-router";
import { Truck, PackageCheck, Globe2, ShieldCheck, MapPinned, Snowflake, Flame, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — MUDHRA BROTHERS INC Logistics" },
      { name: "description", content: "Full truckload, LTL, cross-border USA-Canada, and specialized freight services from MUDHRA BROTHERS INC" },
      { property: "og:title", content: "Logistics Services — MUDHRA BROTHERS INC" },
      { property: "og:description", content: "Enterprise freight, cross-border, and warehousing solutions across North America." },
    ],
  }),
  component: Services,
});

const services = [
  { icon: Truck, title: "Full Truckload (FTL)", desc: "Dedicated 53-ft dry van and reefer trailers for high-volume, time-sensitive freight moving point to point across North America. No stops, no transfers — just direct delivery." },
  { icon: PackageCheck, title: "Less-than-Truckload (LTL)", desc: "Consolidated shipments for regional and interstate lanes. Ideal for pallet-count freight where full-trailer capacity isn't needed. Volume LTL and partial truckload options available." },
  { icon: Globe2, title: "Cross-Border USA · Canada", desc: "Bonded fleet with PARS / PAPS pre-clearance, ACE/ACI e-manifest filing, FAST-approved drivers, and customs brokerage coordination across all major crossings." },
  
  { icon: Snowflake, title: "Temperature-Controlled Freight", desc: "Refrigerated and frozen transport with continuous temperature monitoring and audit trails. Food-grade and pharma-compliant lanes." },
  { icon: Flame, title: "Hazmat & Specialized", desc: "Hazmat-certified drivers, high-value cargo escorts, oversized/overweight permits, and white-glove handling for sensitive freight." },
  { icon: MapPinned, title: "Managed Transportation", desc: "Dedicated account managers, freight-lane optimization, KPI dashboards, and quarterly business reviews for enterprise shippers." },
  { icon: ShieldCheck, title: "Intermodal Coordination", desc: "Rail-truck combined moves for cost efficiency on long-haul lanes. Drayage from major ports and rail ramps." },
];

function Services() {
  return (
    <SiteLayout>
      <section className="bg-[var(--navy)] text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--gold)]">Our Services</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold sm:text-5xl">
            A complete suite of freight solutions for North American shippers.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/75">
            From single-pallet LTL moves to dedicated fleet operations and cross-border programs, we operate every service line with the same standard: reliability first.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <div key={s.title} className="group rounded-sm border border-border bg-card p-8 transition-all hover:shadow-[var(--shadow-card)]">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-sm bg-[var(--navy)] text-[var(--gold)]">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-bold">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <div className="rounded-sm border-l-4 border-[var(--gold)] bg-secondary p-10 sm:p-14">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Not sure which service fits your freight?</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Our enterprise team will review your lanes, volume, and timing requirements and recommend the right mix — often blending FTL, LTL, and warehousing to reduce your total landed cost.
          </p>
          <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-sm bg-[var(--navy)] px-6 py-3 text-sm font-semibold text-white hover:bg-[var(--navy-deep)]">
            Talk to a Specialist <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
