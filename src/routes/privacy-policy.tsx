import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { ShieldCheck, Lock, EyeOff, UserCheck, Clock, RefreshCw, Mail, Phone } from "lucide-react";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — MUDHRA BROTHERS INC" },
      { name: "description", content: "Mudhra Brothers Inc. Privacy Policy. Read how we collect, protect, and handle your SMS contact and content data." },
    ],
  }),
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  const sections = [
    {
      num: "01",
      title: "Types of Data Collected",
      icon: Lock,
      content: (
        <div className="space-y-4">
          <p className="leading-relaxed">
            When you communicate with Mudhra Brothers Inc. via SMS, we may collect information such as:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li>Your phone number</li>
            <li>The content of your messages</li>
            <li>Responding to your inquiries</li>
            <li>Providing customer support</li>
          </ul>
          <p className="leading-relaxed text-slate-700 font-medium bg-slate-50 border border-slate-200 rounded-xl p-4">
            This information is used solely for the above purposes. We will not use your SMS data for any other purpose without your written consent.
          </p>
        </div>
      )
    },
    {
      num: "02",
      title: "Protection of SMS Data",
      icon: ShieldCheck,
      content: (
        <p className="leading-relaxed">
          Mudhra Brothers Inc. employs industry-standard security measures to protect SMS data from unauthorized access, disclosure, alteration, or destruction. We are dedicated to ensuring the confidentiality and integrity of your SMS communications.
        </p>
      )
    },
    {
      num: "03",
      title: "Disclosure of SMS Data",
      icon: EyeOff,
      content: (
        <div className="space-y-3">
          <p className="leading-relaxed">
            Mudhra Brothers Inc. does not disclose SMS contact or content data to third parties unless:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li>Required by law</li>
            <li>Necessary to protect the rights, property, or safety of Mudhra Brothers Inc., its users, or others</li>
          </ul>
        </div>
      )
    },
    {
      num: "04",
      title: "Your Rights",
      icon: UserCheck,
      content: (
        <div className="space-y-3">
          <p className="leading-relaxed">
            You have the right to access, correct, or delete your SMS contact or content data, except where retention is required by law.
          </p>
          <p className="text-sm text-slate-600 bg-slate-50 border border-slate-200 rounded-xl p-4">
            For assistance or to exercise your rights, please contact us at{" "}
            <a href="tel:2602893007" className="text-[var(--gold)] hover:underline font-semibold">260.289.3007</a> or via email at{" "}
            <a href="mailto:mudhrabrothersinc@gmail.com" className="text-[var(--gold)] hover:underline font-semibold">mudhrabrothers@gmail.com</a> /{" "}
            <a href="mailto:mudhrabrothers@gmail.com" className="text-[var(--gold)] hover:underline font-semibold">mudhrabrothersinc@gmail.com</a>.
          </p>
        </div>
      )
    },
    {
      num: "05",
      title: "Retention Policy",
      icon: Clock,
      content: (
        <div className="space-y-4">
          <p className="leading-relaxed">
            We will only retain your personal data for as long as necessary to fulfill the purposes we collected it for, including the purposes of satisfying any legal, accounting, or reporting requirements. When deciding what the correct time is to keep the data we look at its amount, nature and sensitivity, potential risk of harm from unauthorized use or disclosure, the processing purposes, if these can be achieved by other means, and legal requirements.
          </p>
          <p className="leading-relaxed">
            For tax purposes, the law requires us to keep basic information about our customers (including Contact, Identity, Financial and Transaction Data) for six years after they stop being customers.
          </p>
          <p className="leading-relaxed">
            In some circumstances, we may anonymize your personal data for research or statistical purposes in which case we may use this information indefinitely without further notice to you.
          </p>
        </div>
      )
    },
    {
      num: "06",
      title: "Changes to this SMS Privacy Policy",
      icon: RefreshCw,
      content: (
        <p className="leading-relaxed">
          Mudhra Brothers Inc. reserves the right to update or modify this SMS Privacy Policy at any time. Changes will be effective immediately upon posting the revised policy on our website. We encourage you to review this policy periodically for updates.
        </p>
      )
    },
    {
      num: "07",
      title: "Contact Us",
      icon: Mail,
      content: (
        <p className="leading-relaxed">
          If you have questions or concerns regarding this SMS Privacy Policy or our privacy practices, please contact us at{" "}
          <a href="tel:2602893007" className="text-[var(--gold)] hover:underline font-semibold">260.289.3007</a> or via email at{" "}
          <a href="mailto:mudhrabrothers@gmail.com" className="text-[var(--gold)] hover:underline font-semibold">mudhrabrothers@gmail.com</a> /{" "}
          <a href="mailto:mudhrabrothersinc@gmail.com" className="text-[var(--gold)] hover:underline font-semibold">mudhrabrothersinc@gmail.com</a>.
        </p>
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
            <ShieldCheck className="h-4 w-4 text-[var(--gold)]" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">Security & Privacy</p>
          </div>
          <h1 className="mt-8 font-display text-4xl font-bold sm:text-6xl tracking-tight text-white">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-white/50 uppercase tracking-widest font-semibold max-w-md mx-auto">
            Mudhra Brothers Inc. • Effective July 2026
          </p>
        </div>
      </section>

      {/* Main Content Body */}
      <section className="bg-[#fcfdfd] py-20 relative">
        <div className="mx-auto max-w-4xl px-6 lg:px-10 space-y-10">

          {/* Privacy Statement Card */}
          <div className="bg-white border border-slate-100 rounded-2xl p-8 md:p-10 shadow-[0_20px_50px_-20px_rgba(11,37,69,0.08)] flex items-start gap-4">
            <div className="h-10 w-10 rounded-xl bg-[var(--navy)] text-[var(--gold)] flex items-center justify-center shrink-0 mt-0.5">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <h2 className="font-display text-lg font-bold text-[var(--navy)] mb-1">Privacy Guarantee</h2>
              <p className="text-base md:text-lg text-slate-600 leading-relaxed font-medium">
                Mudhra Brothers Inc. values the privacy of your communication and is committed to safeguarding your SMS contact and content data. We do not sell or share SMS contact or content data with third parties.
              </p>
            </div>
          </div>

          {/* Numbered Sections */}
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
