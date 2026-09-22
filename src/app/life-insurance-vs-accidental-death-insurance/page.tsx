import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Life Insurance vs. Accidental Death Insurance: Fast Comparison",
  description:
    "Accidental death insurance only pays for accidents — not illness or natural causes. Fast comparison and why that gap matters most later in life.",
  openGraph: { title: "Life Insurance vs. Accidental Death Insurance: Fast Comparison", description: "Accidental death insurance only pays for accidents — not illness or natural causes. Fast comparison and why that gap matters most later in life." },

  twitter: { title: "Life Insurance vs. Accidental Death Insurance: Fast Comparison", description: "Accidental death insurance only pays for accidents — not illness or natural causes. Fast comparison and why that gap matters most later in life." },
};

export default function LifeInsuranceVsAccidentalDeathInsurancePage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <h1 className="font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Life insurance vs. accidental death insurance: fast comparison
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Commonly confused, big difference. One pays for a narrow category of death. The other
          pays regardless of cause.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold text-harbor">Key fact</p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            Accidental death insurance: qualifying accidents only. Zero payout for illness or
            natural causes — how most people actually die.
          </p>
        </div>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What it actually covers
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          One scenario only: death by qualifying accident. Full stop — no illness, no natural
          causes, regardless of marketing or price. Real limitation, not fine print.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Why this matters more with age
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Illness/natural causes (heart disease, cancer, stroke, age-related conditions) drive
          most deaths among older adults — exactly final expense insurance's target demographic.
          Accident-only coverage misses the likely scenario entirely. Feels like protection until
          it's needed for something it never covered.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          How final expense differs
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Pays regardless of cause — illness, natural, accident, all identical treatment.
          Exceptions: standard early waiting period on some guaranteed-acceptance policies, and
          the standard early suicide exclusion. Outside those specific windows, cause of death is
          irrelevant to payout.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Where accidental death coverage still fits
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Not worthless — usually cheap, sometimes added as a{" "}
          <Link href="/life-insurance-riders" className="font-semibold text-harbor-mid hover:underline">
            rider
          </Link>{" "}
          on a base policy for the narrow case it covers. Just know what it is: a narrow
          supplement, never a substitute for cause-agnostic coverage.
        </p>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            See what you qualify for
          </Button>
        </div>
      </div>
    </div>
  );
}
