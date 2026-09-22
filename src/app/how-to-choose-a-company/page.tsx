import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Choosing a Final Expense Company: The Checklist",
  description:
    "A fast, carrier-neutral checklist: licensing, track record, claims handling, and reading the actual policy before buying.",
  openGraph: { title: "Choosing a Final Expense Company: The Checklist", description: "A fast, carrier-neutral checklist: licensing, track record, claims handling, and reading the actual policy before buying." },

  twitter: { title: "Choosing a Final Expense Company: The Checklist", description: "A fast, carrier-neutral checklist: licensing, track record, claims handling, and reading the actual policy before buying." },
};

export default function HowToChooseACompanyPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <h1 className="font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Choosing a final expense company: the checklist
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Providers don't all operate the same, and the gaps matter more post-claim than
          pre-purchase. Carrier-neutral checklist below — what to actually check, not which
          company to pick.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Licensed in your state?
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          State-regulated industry — any company or agent selling to you needs a license where you
          live. Basic, verifiable, non-negotiable. Legitimate providers never dodge this question.{" "}
          <Link href="/coverage-by-state" className="font-semibold text-harbor-mid hover:underline">
            State-by-state coverage guide
          </Link>{" "}
          has your state's specifics.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Real operating history?
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Not everything, but tells you something marketing can't: collected premiums, paid
          claims, survived multiple market cycles, built processes tested against real claims —
          not just designed on paper.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Independent agency or single carrier?
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Know who you're talking to. Single carrier: only their products, one option per
          conversation. Independent agency: multiple carriers compared, recommendation fits your
          health/budget instead of pushing whatever's available. Neither is dishonest by default —
          just know which one you're in.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          How are claims actually handled?
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Policy's only as good as claim day. Ask before buying: how claims file, typical payout
          time, how to reach a real human if something breaks — not just how the sales pitch goes.
          Clear answers pre-purchase predict good behavior post-purchase.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Read the policy, not the marketing
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Marketing shows the best angle; the policy is the only document that actually governs
          your coverage. Read the real language on waiting periods, exclusions, and how your tier
          (level/graded/modified) applies before signing. Verbal pitch doesn't match written
          terms? Resolve it before signing, not after.{" "}
          <Link href="/pre-existing-conditions" className="font-semibold text-harbor-mid hover:underline">
            Pre-existing conditions
          </Link>{" "}
          and{" "}
          <Link href="/guaranteed-issue-life-insurance" className="font-semibold text-harbor-mid hover:underline">
            guaranteed issue
          </Link>{" "}
          cover the terms to watch closest.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">Fast version</p>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-charcoal/75">
            <li>• Licensed in your state, real track record</li>
            <li>• Upfront: one carrier or several?</li>
            <li>• Straight answers on claims/service</li>
            <li>• Written terms match verbal pitch</li>
          </ul>
        </div>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Why an independent agency helps
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Exactly the comparison an independent agency exists for. Instead of one company's policy
          in isolation, see multiple carriers' actual pricing and structure for your situation,
          side by side. Doesn't replace your own research — means real options, not one offer.
        </p>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            See what you qualify for
          </Button>
        </div>
      </div>
    </div>
  );
}
