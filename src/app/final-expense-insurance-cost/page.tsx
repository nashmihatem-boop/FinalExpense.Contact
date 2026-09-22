import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CostFactorsGrid } from "@/components/final-expense/policy-types-table";

export const metadata: Metadata = {
  title: "Final Expense Insurance Cost: Every Amount, Compared",
  description:
    "Fast comparison of what drives your final expense premium and what coverage amounts from $5,000 to $40,000+ are typically used for.",
  openGraph: { title: "Final Expense Insurance Cost: Every Amount, Compared", description: "Fast comparison of what drives your final expense premium and what coverage amounts from $5,000 to $40,000+ are typically used for." },

  twitter: { title: "Final Expense Insurance Cost: Every Amount, Compared", description: "Fast comparison of what drives your final expense premium and what coverage amounts from $5,000 to $40,000+ are typically used for." },
};

const COST_TIERS = [
  {
    amount: "$5,000",
    href: "/final-expense-insurance-cost/5000",
    blurb: "Smallest tier carriers typically offer — a supplement, not a standalone funeral budget.",
  },
  {
    amount: "$10,000",
    href: "/final-expense-insurance-cost/10000",
    blurb: "Common entry point — usually covers a modest cremation or simple service, plus a little extra.",
  },
  {
    amount: "$15,000",
    href: "/final-expense-insurance-cost/15000",
    blurb: "Middle ground — a fuller service or modest burial, without full traditional-funeral pricing.",
  },
  {
    amount: "$20,000",
    href: "/final-expense-insurance-cost/20000",
    blurb: "Most frequently chosen amount — typically funds a traditional funeral and burial with cushion.",
  },
  {
    amount: "$25,000",
    href: "/final-expense-insurance-cost/25000",
    blurb: "Past the funeral itself — room for medical bills, debts, or other leftover costs.",
  },
  {
    amount: "$30,000",
    href: "/final-expense-insurance-cost/30000",
    blurb: "Comfortable buffer tier — full traditional funeral, no tight tradeoffs, meaningful leftover.",
  },
  {
    amount: "$40,000",
    href: "/final-expense-insurance-cost/40000",
    blurb: "Top of the typical final-expense range — built to leave something behind, not just cover costs.",
  },
];

export default function FinalExpenseInsuranceCostPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="font-sans text-sm font-semibold tracking-[0.14em] text-brass uppercase">
          Cost by Coverage Amount
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Final expense insurance cost: every amount, compared
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          No universal price list exists — coverage gets underwritten person by person, so the
          only truly accurate number comes from a short application with a carrier. What we can
          give you here: the real factors behind your premium, and what each coverage amount
          typically covers, so you can pick a target before making a single call.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">
            Why no price tag appears here
          </p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            A realistic sample rate needs age, gender, health history, and state all locked in —
            change one input, the number moves. A figure that doesn't match your situation isn't
            helpful, it's misleading. For real funeral and cremation cost data,{" "}
            <a href="https://nfda.org" className="text-harbor-mid underline">
              the National Funeral Directors Association
            </a>{" "}
            publishes national medians annually. For your specific cost: a free quote is the only
            number that counts.
          </p>
        </div>

        <h2 className="mt-14 font-display text-2xl font-extrabold text-harbor">
          What actually drives your premium
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Every carrier runs the same short checklist. Nothing hidden, nothing carrier-specific:
        </p>
        <CostFactorsGrid />

        <h2 className="mt-14 font-display text-2xl font-extrabold text-harbor">
          Coverage amount: the only lever you control
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Age, health, gender — fixed by the time you apply. Coverage amount isn't: it's a choice,
          and it scales your premium directly — more coverage, more cost, all else equal. So the
          real question isn't "what's cheapest," it's "what amount actually covers what I need
          covered." The breakdown below answers that per amount.
        </p>

        <h2 className="mt-14 font-display text-2xl font-extrabold text-harbor">
          Cost by coverage amount
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Each tier below is one our own quote flow asks about directly. Pick the closest match
          for a detailed breakdown.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {COST_TIERS.map((tier) => (
            <Link
              key={tier.href}
              href={tier.href}
              className="rounded-xl border border-mist bg-canvas-raised p-5 transition-colors hover:border-harbor-mid/50"
            >
              <p className="font-display text-lg font-extrabold text-harbor">{tier.amount}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-charcoal/70">{tier.blurb}</p>
            </Link>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            See what you qualify for
          </Button>
        </div>
      </div>
    </div>
  );
}
