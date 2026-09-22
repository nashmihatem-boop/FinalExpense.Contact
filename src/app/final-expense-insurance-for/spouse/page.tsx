import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Final Expense Insurance for Your Spouse: Fast Guide",
  description:
    "Fast facts on why couples cover each other, who applies, how beneficiaries work, and how to get started.",
  openGraph: { title: "Final Expense Insurance for Your Spouse: Fast Guide", description: "Fast facts on why couples cover each other, who applies, how beneficiaries work, and how to get started." },

  twitter: { title: "Final Expense Insurance for Your Spouse: Fast Guide", description: "Fast facts on why couples cover each other, who applies, how beneficiaries work, and how to get started." },
};

export default function SpousePage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/final-expense-insurance-for" className="hover:text-harbor">Final Expense Insurance For</Link> / Spouse
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Final expense insurance for your spouse: fast guide
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Simplest relationship on this site. Shared household, shared bills, shared fallout if
          one of you dies uncovered. Here's how couples typically handle it.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Why couples cover each other
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A death in a shared life is a loss and a bill — often landing during an already hard
          stretch. Covering each other isn't about expecting tragedy; it's about making sure
          neither of you deals with money on top of grief. Practical too: couples already review
          finances together, so this fits naturally into that conversation rather than being its
          own separate task.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Who applies, who owns it
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A spouse is the clearest possible case of "insurable interest" — automatic shared stake,
          essentially no question asked. Real decision: structure. Most couples run two separate
          policies, each spouse as their own applicant/insured. Some prefer one spouse owning a
          policy on the other — useful if one person already runs the household's paperwork.
          Either way is standard, purely preference.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Setting up beneficiaries
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Most spouses simply name each other primary — simplest setup, survivor gets the benefit
          directly for the funeral or anything else. Also name a contingent beneficiary (often an
          adult child) in case the primary predeceases you or you pass together. Life changes —
          divorce, remarriage, wanting to add someone — beneficiaries update anytime, so revisit
          after any major change rather than assuming it's locked.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Applying together, underwritten apart
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Deciding together doesn't mean underwriting together — health, age, habits evaluated
          individually. Totally normal for one spouse to get a different rate or outcome. Don't
          read into a mismatch; it's just two separate health histories. Health condition
          complicating things? Our{" "}
          <Link href="/pre-existing-conditions" className="text-harbor-mid underline">
            pre-existing conditions guide
          </Link>{" "}
          covers how that's typically handled.
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
