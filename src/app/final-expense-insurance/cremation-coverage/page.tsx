import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Cremation Coverage Under Final Expense Insurance: Fast Facts",
  description:
    "Fast facts on how the cash benefit applies to cremation, and how it differs from a prepaid cremation plan.",
  openGraph: { title: "Cremation Coverage Under Final Expense Insurance: Fast Facts", description: "Fast facts on how the cash benefit applies to cremation, and how it differs from a prepaid cremation plan." },

  twitter: { title: "Cremation Coverage Under Final Expense Insurance: Fast Facts", description: "Fast facts on how the cash benefit applies to cremation, and how it differs from a prepaid cremation plan." },
};

export default function CremationCoveragePage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/final-expense-insurance" className="hover:text-harbor">Final Expense Insurance</Link> / Cremation Coverage
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Cremation coverage under final expense insurance: fast facts
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Yes — the cash payout applies to cremation. Not a cremation-only product though, and it
          works differently from a prepaid cremation plan. Here's the breakdown.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          How the payout actually works
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Cash death benefit goes to your named beneficiary directly — never to a funeral home or
          cremation provider. Beneficiary decides use: cremation, a memorial gathering, medical
          bills, whatever comes up. No cremation-specific restriction — pure flexible cash.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Vs. a prepaid cremation plan
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Prepaid plan: locks in one provider, one service, arranged in advance. Works fine if you
          already know exactly what you want. Harder to transfer if you move, change your mind, or
          circumstances shift by the time it's needed. Final expense cash isn't tied to any
          business — stays flexible no matter what.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Sizing coverage for a cremation plan
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Cremation generally costs less than traditional burial — but real costs swing by region,
          provider, and add-ons (service, urn, gathering). Don't guess a number: decide what you
          actually want first (direct cremation, or cremation plus service), then work with a
          licensed agent to size coverage to match.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Combining both is common
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Plenty of people already have a prepaid cremation plan and still add final expense
          insurance — specifically for what the prepaid plan doesn't touch: medical bills, other
          debts, extra family support. Not competing products. One locks a service; one gives
          flexible cash for whatever actually comes up.
        </p>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            See what you qualify for
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            <Link href="/final-expense-insurance/is-it-worth-it" className="font-semibold text-harbor-mid hover:underline">
              Still deciding? Honest breakdown of whether it's worth it →
            </Link>
          </p>
          <p className="mt-2 text-sm text-charcoal/60">
            <Link href="/final-expense-insurance" className="font-semibold text-harbor-mid hover:underline">
              ← Back to the full guide
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
