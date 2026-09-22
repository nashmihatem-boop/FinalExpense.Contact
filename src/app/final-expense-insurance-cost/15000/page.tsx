import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CostFactorsGrid } from "@/components/final-expense/policy-types-table";

export const metadata: Metadata = {
  title: "$15,000 Final Expense Insurance Cost: Fast Facts",
  description:
    "Fast facts on the $15,000 middle tier — what it covers, who picks it, and what sets the price.",
  openGraph: { title: "$15,000 Final Expense Insurance Cost: Fast Facts", description: "Fast facts on the $15,000 middle tier — what it covers, who picks it, and what sets the price." },

  twitter: { title: "$15,000 Final Expense Insurance Cost: Fast Facts", description: "Fast facts on the $15,000 middle tier — what it covers, who picks it, and what sets the price." },
};

export default function FifteenThousandCostPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/final-expense-insurance-cost" className="hover:text-harbor">Cost by Coverage Amount</Link> / $15,000
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          $15,000 final expense insurance cost: fast facts
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Splits the difference between the two most-searched amounts — $10,000 and $20,000.
          Common pick for people who compared both and wanted the middle. Price: still individual,
          not fixed.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">
            Short answer
          </p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            No fixed rate — underwritten per applicant. Typical use: more than bare minimum, less
            than a full traditional-funeral budget.
          </p>
        </div>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What $15,000 covers
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          More room than a bare cremation plan — typically enough for a fuller service with
          viewing, or a modest burial in a lower-cost area, plus some left for smaller bills.
          Common choice for wanting more than minimum without paying for a full-traditional-funeral
          sized policy you may not need.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Why the middle tier exists
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Not everyone fits "cremation only" or "full traditional funeral" cleanly. Some want a
          hybrid — service or viewing, then cremation. Some just want more cushion than the
          smallest tiers without paying for unused services. $15,000 is frequently the landing
          spot after comparing{" "}
          <Link href="/final-expense-insurance-cost/10000" className="text-harbor-mid underline">
            $10,000
          </Link>{" "}
          and{" "}
          <Link href="/final-expense-insurance-cost/20000" className="text-harbor-mid underline">
            $20,000
          </Link>{" "}
          side by side.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What sets your price at $15,000
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Middle of the range doesn't mean different rules — same factors apply:
        </p>
        <CostFactorsGrid />
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Fastest way to see the real difference: compare actual quotes at $10,000, $15,000, and
          $20,000 side by side.
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
