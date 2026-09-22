import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CostFactorsGrid } from "@/components/final-expense/policy-types-table";

export const metadata: Metadata = {
  title: "$20,000 Final Expense Insurance Cost: Fast Facts",
  description:
    "Fast facts on why $20,000 is the most commonly chosen final expense amount, what it covers, and what sets the price.",
  openGraph: { title: "$20,000 Final Expense Insurance Cost: Fast Facts", description: "Fast facts on why $20,000 is the most commonly chosen final expense amount, what it covers, and what sets the price." },

  twitter: { title: "$20,000 Final Expense Insurance Cost: Fast Facts", description: "Fast facts on why $20,000 is the most commonly chosen final expense amount, what it covers, and what sets the price." },
};

export default function TwentyThousandCostPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/final-expense-insurance-cost" className="hover:text-harbor">Cost by Coverage Amount</Link> / $20,000
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          $20,000 final expense insurance cost: fast facts
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          The most-picked amount, hands down — the number people land on after actually pricing
          out a full funeral. Cost: individual. Coverage: predictable.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">
            Short answer
          </p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            No rate card for $20,000 — priced per applicant. What's consistent: most-chosen tier,
            and here's why.
          </p>
        </div>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What $20,000 covers
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          In most areas, handles a full traditional funeral and burial — service, casket, vault,
          plot, headstone — plus cushion for the extras that add up: obituary, flowers, a
          gathering, travel for out-of-town family. Costs vary by region and choices, so treat this
          as a general pattern.{" "}
          <a href="https://nfda.org" className="text-harbor-mid underline">
            The National Funeral Directors Association
          </a>{" "}
          publishes real annual median figures.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Why it's the top pick
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Roughly the point where a full traditional funeral is covered without trimming choices —
          while keeping the premium well below doubling up at{" "}
          <Link href="/final-expense-insurance-cost/40000" className="text-harbor-mid underline">
            $40,000
          </Link>
          . That's the actual reason it comes up so often, not because it's a universal right
          answer. Your number should still match what you actually want covered.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What sets your price at $20,000
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Popularity doesn't change the pricing math:
        </p>
        <CostFactorsGrid />
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Free quote: the only way to see your real $20,000 cost, zero obligation.
        </p>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            See what you qualify for
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            <Link href="/final-expense-insurance-cost" className="font-semibold text-harbor-mid hover:underline">
              ← Back to cost by coverage amount
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
