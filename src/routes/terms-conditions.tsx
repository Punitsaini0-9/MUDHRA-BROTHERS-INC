import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { FileText } from "lucide-react";

export const Route = createFileRoute("/terms-conditions")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — MUDHRA BROTHERS INC" },
      { name: "description", content: "Mudhra Brothers Inc. Terms & Conditions. Read our business and SMS program terms." },
    ],
  }),
  component: TermsConditions,
});

function TermsConditions() {
  return (
    <SiteLayout>
      <section className="bg-gradient-to-br from-[#061a34] via-[#0b2545] to-[#13315c] text-white relative overflow-hidden py-24 border-b border-white/5">
        {/* Subtle background glows */}
        <div className="absolute top-0 right-0 -mt-24 -mr-24 w-96 h-96 rounded-full bg-[var(--gold)]/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -mb-24 -ml-24 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-7xl px-6 lg:px-10 text-center">
          <div className="inline-flex items-center gap-2.5 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full backdrop-blur-sm">
            <FileText className="h-4 w-4 text-[var(--gold)]" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">Legal Agreement</p>
          </div>
          <h1 className="mt-8 font-display text-4xl font-bold sm:text-6xl tracking-tight text-white">
            Terms & Conditions
          </h1>
          <p className="mt-4 text-sm text-white/50 uppercase tracking-widest font-semibold max-w-md mx-auto">
            Mudhra Brothers Inc. • Effective July 2026
          </p>
        </div>
      </section>

      <section className="bg-[#fcfdfd] py-20 relative">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <div className="bg-white border border-slate-100 rounded-2xl p-8 md:p-10 shadow-[0_20px_50px_-20px_rgba(11,37,69,0.08)] mb-12">
            <p className="text-base md:text-lg text-slate-600 leading-relaxed font-medium">
              Welcome to Mudhra Brothers Inc. These Terms & Conditions govern your use of our logistics services, website, and communication programs. By booking services or using our site, you agree to these terms.
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                num: "01",
                title: "Agreement to Terms",
                content: (
                  <>
                    By accessing or using the website or logistics services of Mudhra Brothers Inc, you agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, please do not use our services.
                  </>
                )
              },
              {
                num: "02",
                title: "Services",
                content: (
                  <>
                    We provide freight forwarding, logistics, transport, and shipment scheduling services across the United States and cross-border into Canada. All quote requests and bookings are subject to final approval, capacity, and rate verification.
                  </>
                )
              },
              {
                num: "03",
                title: "SMS Disclosures & Opt-In Consent",
                content: (
                  <>
                    If you consent to receive SMS from Mudhra Brothers Inc, you agree to receive dispatch updates, quote confirmations, shipment notifications, and account-related SMS from us. Reply STOP to opt-out; Reply HELP for support to 260.289.3007. You may opt in to receive SMS messages from Mudhra Brothers Inc; verbally, during a conversation. Message & data rates may apply. Messaging frequency may vary. SMS consent and phone numbers are not shared with any third parties or affiliates or any marketing purposes.
                  </>
                )
              },
              {
                num: "04",
                title: "User Account & Security",
                content: (
                  <>
                    You are responsible for maintaining the confidentiality of any information provided to us for booking, quoting, or account maintenance. You agree to provide accurate, current, and complete details for freight quotes and bookings.
                  </>
                )
              },
              {
                num: "05",
                title: "Limitation of Liability",
                content: (
                  <>
                    Mudhra Brothers Inc shall not be liable for any indirect, incidental, special, or consequential damages resulting from cargo delays, transport failures, carrier availability, transmission errors, or network outages.
                  </>
                )
              },
              {
                num: "06",
                title: "Contact Us",
                content: (
                  <>
                    If you have any questions about these Terms & Conditions, please contact us by email at{" "}
                    <a href="mailto:mudhrabrothersinc@gmail.com" className="text-[var(--gold)] hover:underline hover:text-[var(--gold)]/80 font-medium transition-colors">
                      mudhrabrothersinc@gmail.com
                    </a>{" "}
                    or{" "}
                    <a href="mailto:mudhrabrothers@gmail.com" className="text-[var(--gold)] hover:underline hover:text-[var(--gold)]/80 font-medium transition-colors">
                      mudhrabrothers@gmail.com
                    </a>
                    , or phone at 260.289.3007.
                  </>
                )
              }
            ].map((section) => (
              <div
                key={section.num}
                className="group relative bg-white border border-slate-100 hover:border-[var(--gold)]/30 rounded-2xl p-8 md:p-10 shadow-[0_4px_20px_-4px_rgba(11,37,69,0.03)] hover:shadow-[0_20px_40px_-15px_rgba(11,37,69,0.06)] hover:scale-[1.005] transition-all duration-300 flex flex-col md:flex-row gap-6 items-start"
              >
                <div className="font-display text-4xl font-extrabold text-[var(--gold)]/30 group-hover:text-[var(--gold)] transition-colors duration-300 select-none">
                  {section.num}
                </div>
                <div className="flex-1">
                  <h2 className="font-display text-xl font-bold text-[var(--navy)] mb-3 group-hover:text-black transition-colors duration-300">
                    {section.title}
                  </h2>
                  <div className="text-slate-600 leading-relaxed text-sm md:text-base">
                    {section.content}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
