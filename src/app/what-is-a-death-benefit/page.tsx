import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "What Is a Death Benefit? Fast Answer",
  description:
    "Fast answer: what a death benefit is, how it's paid, whether it's taxed, and what it can be used for.",
  openGraph: { title: "What Is a Death Benefit? Fast Answer", description: "Fast answer: what a death benefit is, how it's paid, whether it's taxed, and what it can be used for." },

  twitter: { title: "What Is a Death Benefit? Fast Answer", description: "Fast answer: what a death benefit is, how it's paid, whether it's taxed, and what it can be used for." },
};

export default function WhatIsADeathBenefitPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <h1 className="font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          What is a death benefit? Fast answer
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          The amount your insurer pays your named beneficiary after you die. It&apos;s the entire
          point of the policy — everything else just defines when, how much, and under what
          conditions.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          How it&apos;s paid
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Usually one lump sum, straight to the beneficiary once a claim is filed and approved.
          Some policies offer installment payouts instead. Lump sum stays the default — and
          it&apos;s what most final expense policies are built around.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Taxed?
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Generally no. Death benefits typically arrive income-tax-free. One of the more reliable
          features of life insurance overall. Ownership structure can complicate specific cases
          though — confirm your situation with a tax pro rather than assume.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What it can be used for
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          No restrictions. Unlike a prepaid funeral plan (locked to one provider&apos;s services),
          this pays out as cash, directly, no strings attached. Funeral costs are common, but
          medical bills, everyday expenses, and debt are all fair game too.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          How the amount gets set
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Not decided by the insurer — decided by you, at purchase, based on what you&apos;re
          covering. End-of-life-only coverage means a smaller amount. Income replacement means a
          bigger one. See{" "}
          <Link href="/final-expense-insurance" className="font-semibold text-harbor-mid hover:underline">
            how final expense insurance works
          </Link>{" "}
          for picking a coverage amount, and{" "}
          <Link href="/what-is-a-beneficiary" className="font-semibold text-harbor-mid hover:underline">
            what is a beneficiary
          </Link>{" "}
          for who can actually receive it.
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
