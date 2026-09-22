import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CostFactorsGrid } from "@/components/final-expense/policy-types-table";

export const metadata: Metadata = {
  title: "$10,000 Final Expense Insurance Cost: Fast Facts",
  description:
    "Fast facts on what a $10,000 final expense policy covers, cremation vs. burial math, and what sets the price.",
  openGraph: { title: "$10,000 Final Expense Insurance Cost: Fast Facts", description: "Fast facts on what a $10,000 final expense policy covers, cremation vs. burial math, and what sets the price." },

  twitter: { title: "$10,000 Final Expense Insurance Cost: Fast Facts", description: "Fast facts on what a $10,000 final expense policy covers, cremation vs. burial math, and what sets the price." },
};

export default function TenThousandCostPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/final-expense-insurance-cost" className="hover:text-harbor">Cost by Coverage Amount</Link> / $10,000
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          $10,000 final expense insurance cost: fast facts
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          The number most people picture by default when they think "final expense." No fixed
          price to quote — priced per applicant — but what it typically covers is consistent.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">
            Short answer
          </p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            No shared rate table — priced individually. Consistent part: modest cremation or
            simple service, small buffer included.
          </p>
        </div>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What $10,000 covers
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Usually enough for a basic cremation or direct service, sometimes with leftover room for
          small trailing debts — a final card balance, a last medical bill, a utility closeout.
          Runs tight for a full traditional burial (casket, vault, plot) — those costs stack
          faster than cremation. Planning a full service with viewing and burial? Compare against{" "}
          <Link href="/final-expense-insurance-cost/20000" className="text-harbor-mid underline">
            $20,000
          </Link>{" "}
          first.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Cremation vs. burial: why it matters at this number
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Cremation costs less, generally, which is exactly why $10,000 fits it more comfortably
          than a burial plan. Real costs swing by funeral home, region, and add-ons — a viewing,
          an urn, a memorial gathering. Skip the guesswork:{" "}
          <a href="https://nfda.org" className="text-harbor-mid underline">
            the National Funeral Directors Association
          </a>{" "}
          publishes real national median data yearly for research before locking in a coverage
          amount.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What sets your price at $10,000
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Same factors, every amount including this one:
        </p>
        <CostFactorsGrid />
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Free quote: the only way to see your actual $10,000 price based on age, health, and
          state — zero obligation.
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
