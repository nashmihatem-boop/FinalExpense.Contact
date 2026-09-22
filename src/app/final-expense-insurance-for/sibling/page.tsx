import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Final Expense Insurance for a Sibling: Fast Guide",
  description:
    "Fast facts on buying coverage for a brother or sister — insurable interest, and how the application works.",
  openGraph: { title: "Final Expense Insurance for a Sibling: Fast Guide", description: "Fast facts on buying coverage for a brother or sister — insurable interest, and how the application works." },

  twitter: { title: "Final Expense Insurance for a Sibling: Fast Guide", description: "Fast facts on buying coverage for a brother or sister — insurable interest, and how the application works." },
};

export default function SiblingPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/final-expense-insurance-for" className="hover:text-harbor">Final Expense Insurance For</Link> / Sibling
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Final expense insurance for a sibling: fast guide
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Less talked about than spouse or parent coverage, but common. One concept to know
          first: insurable interest.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Why siblings cover each other
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A sibling steps in when nobody else is positioned to. No spouse or kids on their end to
          handle it. You're the one who always manages family logistics. Or you're the de facto
          caregiver and already know you'd cover costs anyway. Different reasons, same root as
          every relationship here: not letting a loss become a bill.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Insurable interest for a sibling policy
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Foundational insurance-law concept, not a carrier invention — requires a genuine
          financial or emotional stake in the insured person's continued life. Keeps life
          insurance from being a bet on a stranger's death. Immediate family (spouse, parent-
          child) is the clearest case. Sibling relationships qualify too, just one step further
          out — expect a carrier to ask a few more questions confirming the relationship and
          reason for coverage.
        </p>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Not complicated — just be ready to explain simply why you're arranging this. "We're
          close, I'd handle things, don't want that to be a financial hit" is exactly the answer
          carriers want to hear.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What the application involves
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Your sibling has to be involved and consent. In practice: they answer health questions
          themselves (only they know their real history), sign the application personally. You can
          start the process, talk to the agent, handle paperwork — but the policy can't happen
          entirely behind their back. Plan a short call where your sibling is actually present,
          even if you're doing most of the work.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Owner, insured, beneficiary
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Up to three separate roles, don't have to match. Sibling: insured (policy covers their
          life). You: likely owner (pay premium, control the policy, update it later).
          Beneficiary: often you, since you'd cover costs — but can split among family, or be your
          sibling's own choice. Talk through this explicitly; it's the one piece that quietly gets
          left ambiguous by accident.
        </p>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            See what you qualify for
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            <Link href="/final-expense-insurance-for" className="font-semibold text-harbor-mid hover:underline">
              ← See all relationships
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
