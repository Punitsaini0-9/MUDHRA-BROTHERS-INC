import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, Clock, CheckCircle2 } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — MUDHRA BROTHERS INC" },
      { name: "description", content: "Request a freight quote or talk to our dispatch team. 24/7 operations across the USA and Canada." },
      { property: "og:title", content: "Contact MUDHRA BROTHERS INC" },
      { property: "og:description", content: "Get in touch with our enterprise logistics team." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <SiteLayout>
      <section className="bg-[var(--navy)] text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--gold)]">Get In Touch</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold sm:text-5xl">Let's move your freight.</h1>
          <p className="mt-5 max-w-2xl text-lg text-white/75">
            Share your lane details and we'll respond with a competitive quote within one business day.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-3">
          <div className="lg:col-span-1 space-y-8">
            {[
              { icon: Phone, t: "24/7 Dispatch", d: "260.289.3007" },
              { icon: Mail, t: "Primary Email", d: "mudhrabrothersinc@gmail.com" },
              { icon: Mail, t: "General Inquiries", d: "mudhrabrothers@gmail.com" },
              { icon: MapPin, t: "Headquarters", d: "Fort Wayne, IN 46835, USA" },
              { icon: Clock, t: "Operations", d: "24 hours · 7 days a week" },
            ].map((c) => (
              <div key={c.t} className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-[var(--navy)] text-[var(--gold)]">
                  <c.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{c.t}</div>
                  <div className="mt-1 font-display text-lg font-bold text-foreground">{c.d}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-2">
            {submitted ? (
              <div className="flex flex-col items-center rounded-sm border-l-4 border-[var(--gold)] bg-secondary p-12 text-center">
                <CheckCircle2 className="h-12 w-12 text-[var(--navy)]" />
                <h3 className="mt-4 font-display text-2xl font-bold">Thank you.</h3>
                <p className="mt-2 max-w-md text-muted-foreground">
                  Your request has been received. A member of our enterprise team will reach out within one business day.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                className="rounded-sm border border-border bg-card p-8 sm:p-10 shadow-[var(--shadow-card)]"
              >
                <h2 className="font-display text-2xl font-bold">Request a Quote</h2>
                <p className="mt-2 text-sm text-muted-foreground">Tell us about your freight. Required fields marked *</p>

                <div className="mt-8 grid gap-5 sm:grid-cols-2">
                  <Field label="Full Name *" name="name" required />
                  <Field label="Company *" name="company" required />
                  
                  <Field label="Email *" name="email" type="email" required />
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">Service Type</label>
                    <select name="service" className="w-full rounded-sm border border-input bg-background px-4 py-3 text-sm focus:border-[var(--navy)] focus:outline-none">
                      <option>Full Truckload (FTL)</option>
                      <option>Less-than-Truckload (LTL)</option>
                      <option>Cross-Border USA/Canada</option>
                      <option>Temperature Controlled</option>
                      <option>Other / Not sure</option>
                    </select>
                  </div>

                  <Field label="Origin (City, State/Prov) *" name="origin" required />
                  <Field label="Destination (City, State/Prov) *" name="destination" required />

                  <Field label="Approx. Weight or Pallets" name="weight" className="sm:col-span-2" />

                  <div className="sm:col-span-2">
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">Additional Details</label>
                    <textarea name="details" rows={4} className="w-full rounded-sm border border-input bg-background px-4 py-3 text-sm focus:border-[var(--navy)] focus:outline-none" placeholder="Commodity, timing, special handling, recurring lane, etc." />
                  </div>
                </div>

                <button type="submit" className="mt-8 inline-flex w-full items-center justify-center rounded-sm bg-[var(--navy)] px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-[var(--navy-deep)] sm:w-auto">
                  Submit Quote Request
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({ label, name, type = "text", required = false, className = "" }: { label: string; name: string; type?: string; required?: boolean; className?: string }) {
  return (
    <div className={className}>
      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-sm border border-input bg-background px-4 py-3 text-sm focus:border-[var(--navy)] focus:outline-none"
      />
    </div>
  );
}
