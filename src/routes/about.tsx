import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import warehouseImg from "@/assets/warehouse.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — MUDHRA BROTHERS INC" },
      { name: "description", content: "Family-run logistics company built on integrity and consistent execution. Serving enterprise shippers across the USA and Canada." },
      { property: "og:title", content: "About MUDHRA BROTHERS INC" },
      { property: "og:description", content: "The story, values, and people behind our North American logistics operation." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <section className="bg-[var(--navy)] text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--gold)]">Our Story</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold sm:text-5xl">
            Built by brothers. Trusted by shippers across two nations.
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <img src={warehouseImg} alt="Warehouse operations" width={1600} height={1000} loading="lazy" className="rounded-sm shadow-[var(--shadow-card)]" />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="font-display text-3xl font-bold">A family name on every load.</h2>
            <div className="mt-6 space-y-5 leading-relaxed text-muted-foreground">
              <p>
                Mudhra Brothers Inc. was founded on a simple principle: when your name is on the door, every shipment matters. What began as a small owner-operator run has grown into a full-service logistics operation serving enterprise clients in all 50 states and across the US-Canada border.
              </p>
              <p>
                We invest in the parts of logistics that customers actually feel — dispatch responsiveness, driver quality, equipment maintenance, and honest communication when things don't go to plan. It's an old-fashioned approach, and in a commoditized industry, it's exactly what enterprise shippers keep coming back for.
              </p>
              <p>
                Today, our fleet moves everything from consumer packaged goods and industrial machinery to temperature-controlled pharmaceuticals — with the same commitment to on-time performance and transparent partnership that started the company.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/60">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--navy)]">Our Values</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold sm:text-4xl">Four principles that guide every dispatch.</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { n: "01", t: "Integrity", d: "We quote what we can deliver, we honor what we quote. No surprises, no hidden accessorials." },
              { n: "02", t: "Consistency", d: "Enterprise supply chains depend on repeatable performance. That's what we optimize for." },
              { n: "03", t: "Accountability", d: "One point of contact, from booking to POD. If something goes sideways, you'll hear it from us first." },
              { n: "04", t: "Partnership", d: "We measure success by how many shippers renew — not how many loads we win." },
            ].map((v) => (
              <div key={v.n} className="border-t-2 border-[var(--gold)] pt-5">
                <div className="font-display text-3xl font-bold text-[var(--navy)]/30">{v.n}</div>
                <h3 className="mt-3 font-display text-lg font-bold">{v.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid gap-10 md:grid-cols-4">
          {[
            { k: "50", u: "US States Served" },
            { k: "10", u: "Provinces Reached" },
            { k: "99.4%", u: "On-Time Delivery" },
            { k: "24/7", u: "Live Dispatch" },
          ].map((s) => (
            <div key={s.u} className="text-center">
              <div className="font-display text-5xl font-bold text-[var(--navy)]">{s.k}</div>
              <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{s.u}</div>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
