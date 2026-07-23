import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { FileText, MessageSquare, ShieldCheck, PhoneCall, HelpCircle, AlertCircle, Mail, Phone } from "lucide-react";

export const Route = createFileRoute("/terms-conditions")({
  head: () => ({
    meta: [
      { title: "SMS Terms and Conditions — MUDHRA BROTHERS INC" },
      { name: "description", content: "Mudhra Brothers Inc. SMS Terms & Conditions. Read our SMS program terms, opt-in details, and privacy disclosures." },
    ],
  }),
  component: TermsConditions,
});

function TermsConditions() {
  const sections = [
    {
      num: "01",
      title: "1. Consent for SMS Communication",
      icon: ShieldCheck,
      content: (
        <p className="leading-relaxed">
          Phone numbers obtained during the SMS consent process will not be shared with third parties for marketing purposes. This is to ensure that your information is used solely for communication purposes related to our services.
        </p>
      )
    },
    {
      num: "02",
      title: "2. Types of SMS Communications",
      icon: MessageSquare,
      content: (
        <p className="leading-relaxed">
          By opting in, you may receive SMS messages related to customer care.
        </p>
      )
    },
    {
      num: "03",
      title: "3. Message Frequency",
      icon: FileText,
      content: (
        <p className="leading-relaxed">
          Message frequency may vary depending on the type of communication.
        </p>
      )
    },
    {
      num: "04",
      title: "4. Potential Fees for SMS Messaging",
      icon: AlertCircle,
      content: (
        <p className="leading-relaxed">
          Standard message and data rates may apply, depending on your carrier’s pricing plan. These fees may differ for domestic or international messages.
        </p>
      )
    },
    {
      num: "05",
      title: "5. Opt-In Methods",
      icon: PhoneCall,
      content: (
        <p className="leading-relaxed">
          I am verbally asking the customer for their consent to receive SMS messages as a method of communication. This opt-in allows us to send important updates, such as support ticket confirmations, service notifications, or follow-ups, directly to their mobile device. By obtaining verbal consent, we ensure the customer is aware of and agrees to receive messages via SMS, in compliance with communication and privacy guidelines.
        </p>
      )
    },
    {
      num: "06",
      title: "6. Opt-Out Instructions",
      icon: AlertCircle,
      content: (
        <div className="space-y-3">
          <p className="leading-relaxed">
            You can opt out at any time by replying <strong className="text-[var(--navy)] bg-slate-100 px-2 py-0.5 rounded border border-slate-200 font-mono text-sm">“STOP”</strong> to any SMS message.
          </p>
          <p className="text-sm text-slate-500">
            Alternatively, contact us directly at{" "}
            <a href="tel:2602893007" className="text-[var(--gold)] hover:underline font-semibold">260.289.3007</a> or via email at{" "}
            <a href="mailto:mudhrabrothers@gmail.com" className="text-[var(--gold)] hover:underline font-semibold">mudhrabrothers@gmail.com</a> /{" "}
            <a href="mailto:mudhrabrothersinc@gmail.com" className="text-[var(--gold)] hover:underline font-semibold">mudhrabrothersinc@gmail.com</a>.
          </p>
        </div>
      )
    },
    {
      num: "07",
      title: "7. Help",
      icon: HelpCircle,
      content: (
        <div className="space-y-3">
          <p className="leading-relaxed">
            If you are experiencing any issues, reply with the keyword <strong className="text-[var(--navy)] bg-slate-100 px-2 py-0.5 rounded border border-slate-200 font-mono text-sm">“HELP”</strong> or contact us directly at{" "}
            <a href="tel:2602893007" className="text-[var(--gold)] hover:underline font-semibold">260.289.3007</a> or via email at{" "}
            <a href="mailto:mudhrabrothers@gmail.com" className="text-[var(--gold)] hover:underline font-semibold">mudhrabrothers@gmail.com</a> /{" "}
            <a href="mailto:mudhrabrothersinc@gmail.com" className="text-[var(--gold)] hover:underline font-semibold">mudhrabrothersinc@gmail.com</a>.
          </p>
        </div>
      )
    },
    {
      num: "08",
      title: "8. Additional Options",
      icon: ShieldCheck,
      content: (
        <p className="leading-relaxed">
          If you do not wish to receive SMS messages, you can choose not to check the SMS consent box on our forms.
        </p>
      )
    },
    {
      num: "09",
      title: "9. Standard Messaging Disclosures",
      icon: FileText,
      content: (
        <div className="space-y-3">
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-3 text-sm text-slate-700">
            <div className="flex items-start gap-2.5 font-medium">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)] mt-2 shrink-0" />
              <span>Message and data rates may apply.</span>
            </div>
            <div className="flex items-start gap-2.5 font-medium">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)] mt-2 shrink-0" />
              <span>You can opt out at any time by texting <strong className="text-[var(--navy)] font-semibold">“STOP.”</strong></span>
            </div>
            <div className="flex items-start gap-2.5 font-medium">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)] mt-2 shrink-0" />
              <div>
                <p>
                  For assistance, text <strong className="text-[var(--navy)] font-semibold">“HELP”</strong> or visit our{" "}
                  <Link to="/privacy-policy" className="text-[var(--gold)] hover:underline font-semibold">Privacy Policy</Link>{" "}
                  and{" "}
                  <Link to="/terms-conditions" className="text-[var(--gold)] hover:underline font-semibold">SMS Terms & Conditions</Link>.
                </p>
                <div className="mt-1.5">
                  <a
                    href="https://mudhra-brothers-inc.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--gold)] hover:underline font-semibold break-all inline-block"
                  >
                    https://mudhra-brothers-inc.vercel.app/
                  </a>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-2.5 font-medium">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)] mt-2 shrink-0" />
              <span>Message frequency may vary depending on service.</span>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <SiteLayout>
      {/* Hero Header */}
      <section className="bg-gradient-to-br from-[#061a34] via-[#0b2545] to-[#13315c] text-white relative overflow-hidden py-24 border-b border-white/5">
        <div className="absolute top-0 right-0 -mt-24 -mr-24 w-96 h-96 rounded-full bg-[var(--gold)]/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -mb-24 -ml-24 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-7xl px-6 lg:px-10 text-center">
          <div className="inline-flex items-center gap-2.5 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full backdrop-blur-sm">
            <MessageSquare className="h-4 w-4 text-[var(--gold)]" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">SMS Communication Policy</p>
          </div>
          <h1 className="mt-8 font-display text-4xl font-bold sm:text-6xl tracking-tight text-white">
            SMS Terms and Conditions
          </h1>
          <p className="mt-4 text-sm text-white/50 uppercase tracking-widest font-semibold max-w-md mx-auto">
            Mudhra Brothers Inc. • Effective July 2026
          </p>
        </div>
      </section>

      {/* Main Content Body */}
      <section className="bg-[#fcfdfd] py-20 relative">
        <div className="mx-auto max-w-4xl px-6 lg:px-10 space-y-10">

          {/* Opt-In Header Statement */}
          <div className="bg-white border border-slate-100 rounded-2xl p-8 md:p-10 shadow-[0_20px_50px_-20px_rgba(11,37,69,0.08)] flex items-start gap-4">
            <div className="h-10 w-10 rounded-xl bg-[var(--navy)] text-[var(--gold)] flex items-center justify-center shrink-0 mt-0.5">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <h2 className="font-display text-lg font-bold text-[var(--navy)] mb-1">Opt-In Agreement</h2>
              <p className="text-base md:text-lg text-slate-600 leading-relaxed font-medium">
                By opting in to receive SMS messages, you agree to the following:
              </p>
            </div>
          </div>

          {/* 9 Numbered Sections */}
          <div className="space-y-6">
            {sections.map((section) => {
              const IconComp = section.icon;
              return (
                <div
                  key={section.num}
                  className="group relative bg-white border border-slate-100 hover:border-[var(--gold)]/40 rounded-2xl p-8 md:p-10 shadow-[0_4px_20px_-4px_rgba(11,37,69,0.03)] hover:shadow-[0_20px_40px_-15px_rgba(11,37,69,0.06)] hover:scale-[1.005] transition-all duration-300 flex flex-col md:flex-row gap-6 items-start"
                >
                  <div className="flex items-center justify-center h-12 w-12 rounded-2xl bg-[var(--gold)]/10 text-[var(--gold)] group-hover:bg-[var(--gold)] group-hover:text-[var(--navy-deep)] transition-colors duration-300 shrink-0 font-display text-lg font-bold">
                    {section.num}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2.5 mb-3">
                      <IconComp className="h-5 w-5 text-[var(--navy)] group-hover:text-[var(--gold)] transition-colors duration-300" />
                      <h2 className="font-display text-xl font-bold text-[var(--navy)] group-hover:text-black transition-colors duration-300">
                        {section.title}
                      </h2>
                    </div>
                    <div className="text-slate-600 leading-relaxed text-sm md:text-base">
                      {section.content}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </SiteLayout>
  );
}
