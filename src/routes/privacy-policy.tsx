import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — MUDHRA BROTHERS INC" },
      { name: "description", content: "Mudhra Brothers Inc. Privacy Policy. Read how we collect, use, and protect your information." },
    ],
  }),
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  return (
    <SiteLayout>
      <section className="bg-gradient-to-br from-[#061a34] via-[#0b2545] to-[#13315c] text-white relative overflow-hidden py-24 border-b border-white/5">
        {/* Subtle background glows */}
        <div className="absolute top-0 right-0 -mt-24 -mr-24 w-96 h-96 rounded-full bg-[var(--gold)]/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -mb-24 -ml-24 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />
        
        <div className="mx-auto max-w-7xl px-6 lg:px-10 text-center">
          <div className="inline-flex items-center gap-2.5 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full backdrop-blur-sm">
            <ShieldCheck className="h-4 w-4 text-[var(--gold)]" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">Security & Trust</p>
          </div>
          <h1 className="mt-8 font-display text-4xl font-bold sm:text-6xl tracking-tight text-white">
            Privacy Policy
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
              At Mudhra Brothers Inc., we respect your privacy and are committed to protecting the personal information you share with us. This policy describes how we collect, use, and disclose your data when you interact with our freight, logistics, and communication services.
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                num: "01",
                title: "Information We Collect",
                content: (
                  <>
                    We collect personal information that you provide directly to us, such as your name, company name, email address, phone number, pickup and delivery locations, shipment details, and any other information you choose to include in a quote request or inquiry.
                  </>
                )
              },
              {
                num: "02",
                title: "How We Use Your Information",
                content: (
                  <>
                    We use the personal information we collect to provide freight and logistics services, respond to inquiries and quote requests, and communicate with you about shipments and account matters.
                  </>
                )
              },
              {
                num: "03",
                title: "How We Share Your Information",
                content: (
                  <>
                    We do not sell personal information.
                  </>
                )
              },
              {
                num: "04",
                title: "SMS Disclosures",
                content: (
                  <>
                    If you consent to receive SMS from Mudhra Brothers Inc, you agree to receive dispatch updates, quote confirmations, shipment notifications, and account-related SMS from us. Reply STOP to opt-out; Reply HELP for support. Message & data rates may apply. Messaging frequency may vary. SMS consent and phone numbers are not shared with any third parties or affiliates.
                  </>
                )
              },
              {
                num: "05",
                title: "Your Choices",
                content: (
                  <>
                    You can opt out of receiving SMS messages at any time by replying STOP to any message we send. You may also contact us by email at{" "}
                    <a href="mailto:mudhrabrothersinc@gmail.com" className="text-[var(--gold)] hover:underline hover:text-[var(--gold)]/80 font-medium transition-colors">
                      mudhrabrothersinc@gmail.com
                    </a>{" "}
                    to update your preferences or request access to or deletion of your personal information.
                  </>
                )
              },
              {
                num: "06",
                title: "Contact Us",
                content: (
                  <>
                    If you have any questions about this Privacy Policy or our privacy practices, please visit our Contact Us page or email us at{" "}
                    <a href="mailto:mudhrabrothersinc@gmail.com" className="text-[var(--gold)] hover:underline hover:text-[var(--gold)]/80 font-medium transition-colors">
                      mudhrabrothersinc@gmail.com
                    </a>
                    .
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
