import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "What Is Whole Life Insurance? Fast Explainer",
  description:
    "Fast explainer: permanent coverage, premiums that never rise, a guaranteed death benefit, and built-in cash value.",
  openGraph: { title: "What Is Whole Life Insurance? Fast Explainer", description: "Fast explainer: permanent coverage, premiums that never rise, a guaranteed death benefit, and built-in cash value." },

  twitter: { title: "What Is Whole Life Insurance? Fast Explainer", description: "Fast explainer: permanent coverage, premiums that never rise, a guaranteed death benefit, and built-in cash value." },
};

export default function WhatIsWholeLifeInsurancePage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <h1 className="font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          What is whole life insurance? Fast explainer
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          A type of permanent life insurance — lasts your whole life, not a fixed term like term
          insurance. Level premium in exchange for a guaranteed death benefit, plus cash value
          building along the way.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Coverage that doesn&apos;t expire
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          The name says it all. As long as premiums are paid, the policy stays active — no term end
          date, no renewal, no requalifying later. It runs for your entire life, the right
          structure for coverage meant to sit ready whenever it&apos;s needed, not just protect one
          stretch of years like a mortgage.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Premium locked at issue
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          The quoted rate at issue is the rate for life. It doesn&apos;t climb with age, even though
          mortality risk does. Works because the insurer prices off your age at issue and spreads
          cost evenly over time instead of raising it yearly. Result: a payment you can actually
          budget around.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Cash value, building in the background
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Part of every premium funds a cash value piece, growing on a guaranteed schedule written
          into the policy. It's a savings-like feature, built in — some policies let you access it
          while alive, though borrowing against it can shrink the death benefit if unpaid. Real
          feature, but secondary for most smaller policies — the guaranteed death benefit is still
          the main point.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          A guaranteed payout
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          While the policy's active, the death benefit is locked — a fixed amount, set at purchase,
          that doesn't move with markets or investment returns. That guarantee is the whole reason
          people pick whole life over other permanent options: not what you might get, what you
          will get.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Where final expense insurance fits in
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Not a separate category — final expense insurance is whole life insurance, just scoped
          for one job: end-of-life costs, not decades of income replacement. Smaller face amounts,
          simpler underwriting, easier to qualify for, same core guarantees (level premium,
          guaranteed payout). See{" "}
          <Link href="/final-expense-insurance" className="font-semibold text-harbor-mid hover:underline">
            how final expense insurance works
          </Link>{" "}
          for specifics.
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
