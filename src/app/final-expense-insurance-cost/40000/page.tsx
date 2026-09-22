import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CostFactorsGrid } from "@/components/final-expense/policy-types-table";

export const metadata: Metadata = {
  title: "$40,000 Final Expense Insurance Cost: Fast Facts",
  description:
    "Fast facts on $40,000-plus final expense coverage, and where it starts overlapping with whole life insurance.",
  openGraph: { title: "$40,000 Final Expense Insurance Cost: Fast Facts", description: "Fast facts on $40,000-plus final expense coverage, and where it starts overlapping with whole life insurance." },

  twitter: { title: "$40,000 Final Expense Insurance Cost: Fast Facts", description: "Fast facts on $40,000-plus final expense coverage, and where it starts overlapping with whole life insurance." },
};

export default function FortyThousandCostPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/final-expense-insurance-cost" className="hover:text-harbor">Cost by Coverage Amount</Link> / $40,000
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          $40,000 final expense insurance cost: fast facts
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Top of the typical final-expense range. Past this point, it starts looking less like a
          funeral-specific policy and more like small whole life coverage that also handles one.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">
            Short answer
          </p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            Priced per applicant, same as every tier. Worth flagging: at this level, check whether
            final expense or standard whole life actually fits your goal better.
          </p>
        </div>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What $40,000 covers
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Traditional funeral and burial, fully funded with room to spare, plus something real left
          over — enough to ease a spouse's monthly budget, chip at a mortgage, or set aside for
          grandkids. Double duty at this tier: final expenses plus a legacy gift.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          $40,000+: where final expense meets whole life
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          No hard industry line, but coverage above roughly this range starts overlapping with
          standard whole life insurance — often still simplified underwriting, but sized for
          leaving money behind rather than just funeral costs. Considering $50,000+? Worth a
          straight conversation with a licensed agent on final-expense vs. whole life for your
          actual goal. Label matters less than fit — and if $40,000 feels like overkill, compare
          against{" "}
          <Link href="/final-expense-insurance-cost/30000" className="text-harbor-mid underline">
            $30,000
          </Link>
          .
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What sets your price at $40,000
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Top of the range, same pricing rules:
        </p>
        <CostFactorsGrid />
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Free quote: fastest way to see what $40,000 — or a bigger whole life policy — actually
          costs.
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
