import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CostFactorsGrid } from "@/components/final-expense/policy-types-table";

export const metadata: Metadata = {
  title: "$30,000 Final Expense Insurance Cost: Fast Facts",
  description:
    "Fast facts on the $30,000 buffer tier — what it covers, who picks it, what sets the price.",
  openGraph: { title: "$30,000 Final Expense Insurance Cost: Fast Facts", description: "Fast facts on the $30,000 buffer tier — what it covers, who picks it, what sets the price." },

  twitter: { title: "$30,000 Final Expense Insurance Cost: Fast Facts", description: "Fast facts on the $30,000 buffer tier — what it covers, who picks it, what sets the price." },
};

export default function ThirtyThousandCostPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/final-expense-insurance-cost" className="hover:text-harbor">Cost by Coverage Amount</Link> / $30,000
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          $30,000 final expense insurance cost: fast facts
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          The buffer tier — full traditional funeral funded, no tight tradeoffs, real amount left
          over. Price: still individual, same as every tier.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">
            Short answer
          </p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            No standard rate for $30,000 — priced individually. Consistent role: full funeral,
            comfortably, plus real leftover.
          </p>
        </div>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What $30,000 covers
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Full traditional funeral and burial without economizing on service, casket, or plot —
          plus real cushion for outstanding debt: medical bills, credit cards, a car loan. Goes
          well past just the small costs around the service.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Who picks this tier
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          People carrying real debt they don't want passed to a spouse or adult child. People who
          compared{" "}
          <Link href="/final-expense-insurance-cost/20000" className="text-harbor-mid underline">
            $20,000
          </Link>{" "}
          and wanted less pressure on casket/service/plot choices. People who'd otherwise juggle
          two smaller policies and want one instead.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What sets your price at $30,000
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Bigger number, same pricing rules:
        </p>
        <CostFactorsGrid />
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Free quote: the only way to see your real $30,000 cost, no obligation.
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
