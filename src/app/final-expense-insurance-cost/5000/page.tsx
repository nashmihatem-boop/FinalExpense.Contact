import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CostFactorsGrid } from "@/components/final-expense/policy-types-table";

export const metadata: Metadata = {
  title: "$5,000 Final Expense Insurance Cost: Fast Facts",
  description:
    "Fast facts on what a $5,000 final expense policy covers, who picks this tier, and what actually sets the price.",
  openGraph: { title: "$5,000 Final Expense Insurance Cost: Fast Facts", description: "Fast facts on what a $5,000 final expense policy covers, who picks this tier, and what actually sets the price." },

  twitter: { title: "$5,000 Final Expense Insurance Cost: Fast Facts", description: "Fast facts on what a $5,000 final expense policy covers, who picks this tier, and what actually sets the price." },
};

export default function FiveThousandCostPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/final-expense-insurance-cost" className="hover:text-harbor">Cost by Coverage Amount</Link> / $5,000
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          $5,000 final expense insurance cost: fast facts
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Smallest face amount most carriers list. No fixed price — priced per applicant — but
          the role it plays is consistent: a gap-filler, not a full funeral budget.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">
            Short answer
          </p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            Age, health, gender, tobacco use, state — all move a $5,000 premium, so no single
            number here would be accurate. What's consistent: this tier supplements, it doesn't
            replace, a bigger plan.
          </p>
        </div>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What $5,000 typically covers
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Rarely a full traditional funeral on its own, most places. Where it works: a chunk of a
          basic cremation, or stacked on top of existing savings, a pre-need funeral home
          arrangement, or a smaller-than-needed life policy already in place. Some pick this tier
          deliberately as backup coverage, not the primary plan.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Who picks this tier
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Three common profiles: first-time buyers keeping the monthly cost minimal; people who've
          already funded most of their funeral plan elsewhere and just need to close a small gap;
          and fixed-income buyers who'd rather lock in something today than delay deciding on a
          bigger number. Starting small doesn't block adding coverage later — just know a new
          policy means fresh underwriting at your age and health then, worth factoring in if more
          coverage is likely down the road.
        </p>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Not sure $5,000 covers enough? Compare it directly against{" "}
          <Link href="/final-expense-insurance-cost/10000" className="text-harbor-mid underline">
            $10,000
          </Link>{" "}
          before deciding.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What sets your price at $5,000
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Same factors as every other amount, even at the smallest tier:
        </p>
        <CostFactorsGrid />
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Free quote, about two minutes, zero obligation — the only real way to see your actual
          $5,000 price.
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
