import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CostFactorsGrid } from "@/components/final-expense/policy-types-table";

export const metadata: Metadata = {
  title: "$25,000 Final Expense Insurance Cost: Fast Facts",
  description:
    "Fast facts on what $25,000 covers beyond the funeral itself, and what sets the price.",
  openGraph: { title: "$25,000 Final Expense Insurance Cost: Fast Facts", description: "Fast facts on what $25,000 covers beyond the funeral itself, and what sets the price." },

  twitter: { title: "$25,000 Final Expense Insurance Cost: Fast Facts", description: "Fast facts on what $25,000 covers beyond the funeral itself, and what sets the price." },
};

export default function TwentyFiveThousandCostPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/final-expense-insurance-cost" className="hover:text-harbor">Cost by Coverage Amount</Link> / $25,000
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          $25,000 final expense insurance cost: fast facts
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Past the funeral itself — this is the tier where people start budgeting for what else
          they don't want left behind. Price: still individual, like every amount.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">
            Short answer
          </p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            No shared rate — priced per applicant. Worth knowing: people at $25,000 are usually
            planning past just the service.
          </p>
        </div>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What $25,000 covers
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Most areas: full traditional funeral and burial, comfortably, with real leftover margin.
          That's exactly why this tier trends toward covering more than the service — a lingering
          medical bill, a credit card balance, a car payment, or just a buffer so family isn't
          stuck absorbing costs after the funeral home is paid.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Funeral-focused vs. aftermath-focused
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          At{" "}
          <Link href="/final-expense-insurance-cost/10000" className="text-harbor-mid underline">
            $10,000
          </Link>{" "}
          and{" "}
          <Link href="/final-expense-insurance-cost/20000" className="text-harbor-mid underline">
            $20,000
          </Link>
          , focus is mostly the service. By $25,000, the thinking shifts to what comes next —
          ongoing bills, a mortgage or lease payment due before an estate settles. No hard rule
          here, just a common pattern in why people pick this number.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What sets your price at $25,000
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Same factors as every tier:
        </p>
        <CostFactorsGrid />
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Free quote: the only real way to see your $25,000 cost based on age, health, and state.
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
