import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Final Expense Insurance for Your Parents: Fast Guide",
  description:
    "Fast guide to starting the conversation, what your parent needs to be involved in, and how payment and ownership typically work.",
  openGraph: { title: "Final Expense Insurance for Your Parents: Fast Guide", description: "Fast guide to starting the conversation, what your parent needs to be involved in, and how payment and ownership typically work." },

  twitter: { title: "Final Expense Insurance for Your Parents: Fast Guide", description: "Fast guide to starting the conversation, what your parent needs to be involved in, and how payment and ownership typically work." },
};

export default function ParentsPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/final-expense-insurance-for" className="hover:text-harbor">Final Expense Insurance For</Link> / Parents
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Final expense insurance for your parents: fast guide
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Most common version of this by a wide margin. Adult child notices no coverage exists (or
          an old policy lapsed), decides to fix it before it's urgent. Here's the typical path.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Why adult children take this on
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Rarely planned from day one — usually triggered: a health scare, helping settle a
          relative's funeral and seeing how fast costs stack up, or a parent casually mentioning
          they "never got around to it." Sometimes a parent genuinely can't manage the process
          solo anymore. Sometimes it's simpler: wanting certainty it's handled, not hoping it gets
          done eventually.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Starting the conversation
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Harder than the paperwork, usually. Frame around peace of mind, not mortality — you're
          taking one thing off their plate, not asking them to dwell on death. Treat your parent as
          a full partner, not someone the decision happens to. Ask what they'd actually want, any
          preferences you don't know about, whether they've looked into coverage before. Some
          parents are quietly relieved someone else brought it up; others want to feel in control
          of the decision, not just informed after. Go in ready to listen, not with a plan already
          set.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What your parent still has to do
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          You handle research, agent calls, comparisons — fine. But your parent is the insured,
          and some steps can't be skipped: they consent personally, answer health questions in
          their own words (only they know their real medical history), sign the application
          themselves. Not just formality — it's a legal requirement (insurable interest and
          consent) and a practical safeguard: answers filled in on their behalf risk mismatching
          medical or prescription records, and that mismatch is exactly what jeopardizes a claim
          later. Plan for your parent to join the actual application call, even briefly.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          How payment and ownership work
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Common setup: adult child owns the policy and pays premiums, parent stays the insured.
          Ownership means control — managing the policy, keeping it current, updating it later.
          Beneficiary is a separate call entirely: often the paying child, sometimes split among
          siblings, sometimes the parent's own choice regardless of who pays. With siblings
          involved, agree on this upfront — beneficiary and payment don't have to match, but
          unspoken assumptions here cause easy, avoidable friction later.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          If a health condition is in the picture
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Most parents in this age range have at least one diagnosed condition — normal, not
          disqualifying. Simplified issue runs on health questions, not an exam, and plenty of
          common conditions still land full, day-one coverage. Our{" "}
          <Link href="/pre-existing-conditions" className="text-harbor-mid underline">
            pre-existing conditions guide
          </Link>{" "}
          breaks down how carriers typically evaluate specific conditions.
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
