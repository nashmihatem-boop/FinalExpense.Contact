import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Life Insurance vs. a Savings Account: Fast Comparison",
  description:
    "A savings account holds only what you've deposited. A life insurance policy can pay its full amount from day one. Fast comparison of both.",
  openGraph: { title: "Life Insurance vs. a Savings Account: Fast Comparison", description: "A savings account holds only what you've deposited. A life insurance policy can pay its full amount from day one. Fast comparison of both." },

  twitter: { title: "Life Insurance vs. a Savings Account: Fast Comparison", description: "A savings account holds only what you've deposited. A life insurance policy can pay its full amount from day one. Fast comparison of both." },
};

export default function LifeInsuranceVsSavingsAccountPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <h1 className="font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Life insurance vs. a savings account: fast comparison
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Both leave money behind. Different mechanics entirely. Not "better vs. worse" — what
          each is actually built for.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Savings: only what you've put in
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Balance = deposits + modest interest. No shortcut. Saved a little so far? A little is
          what's there. Grows exactly as fast as you keep adding.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Life insurance: full amount, day one
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Different math entirely. Coverage active, past any waiting period: full face amount
          payable even after one premium payment. Core trade: small regular payment stands in for
          a much larger guaranteed amount — available immediately, something savings can't match
          early on.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Different jobs entirely
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Savings: liquid, unrestricted, any purpose, no questions. Death benefit: pays on death,
          to a named beneficiary — not a casual-withdrawal fund for a vacation or repair. Whole
          life/final expense policies build their own{" "}
          <Link href="/cash-value-life-insurance" className="font-semibold text-harbor-mid hover:underline">
            cash value
          </Link>{" "}
          accessible while alive — separate feature from the death benefit. Neither wins on
          flexibility overall — just different kinds.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          The practical take
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Most people benefit from both, not picking one. Savings: everyday flexibility, emergency
          fund, short-notice needs. Life insurance: guaranteed amount reaching family the moment
          it's needed — month one or year twenty, doesn't matter.
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
