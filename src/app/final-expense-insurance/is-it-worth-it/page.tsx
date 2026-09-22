import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Is Final Expense Insurance Worth It? Fast Yes/No Checklist",
  description:
    "Fast, honest checklist of who should buy final expense insurance, and who probably doesn't need it.",
  openGraph: { title: "Is Final Expense Insurance Worth It? Fast Yes/No Checklist", description: "Fast, honest checklist of who should buy final expense insurance, and who probably doesn't need it." },

  twitter: { title: "Is Final Expense Insurance Worth It? Fast Yes/No Checklist", description: "Fast, honest checklist of who should buy final expense insurance, and who probably doesn't need it." },
};

export default function IsItWorthItPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/final-expense-insurance" className="hover:text-harbor">Final Expense Insurance</Link> / Is It Worth It?
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Is final expense insurance worth it? Fast yes/no checklist
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          No universal answer. Depends on what's already in place and what you're protecting
          against. Quick, honest breakdown, both sides.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Strong fit if
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Fairly clear-cut for most people. Check the boxes:
        </p>
        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">Good fit if</p>
          <ul className="mt-3 space-y-2 text-base leading-relaxed text-charcoal/80">
            <li>• No dedicated savings set aside for final costs.</li>
            <li>• Want a hard guarantee: family never pays funeral/burial/medical bills out of pocket or credit.</li>
            <li>• Prefer a short, simplified approval now over trying to qualify for a bigger traditional policy later.</li>
            <li>• Don't want retirement or investment accounts drained at a bad time — or ever — for these costs.</li>
          </ul>
        </div>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Probably skip it if
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Equally honest: not everyone needs this. Skip it if you already hold liquid, accessible
          savings earmarked specifically for final costs — not retirement funds meant for
          something else. Same if an existing life policy is already sized big enough, with a
          current beneficiary, to cover this plus whatever else it's for. Or if the cost simply
          wouldn't create hardship for your family either way. Stacking a new policy on top of
          coverage you already have is mostly redundant cost, not real protection — worth saying
          plainly instead of selling coverage nobody needs.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Quick self-check
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Money set aside for this specifically, today — not retirement funds for something else?
          If something happened this month, would family scramble for these costs? Existing
          coverage — actually checked if it's enough once you count medical bills or other debt
          beyond just the funeral?
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          No universal answer
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Personal-finance call, not a scare tactic. Either answer is fine. Want a second opinion?
          A licensed agent reviews your specific situation — what's covered, what a gap actually
          costs to fill, whether it's worth it — free, no obligation, either outcome.
        </p>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            See what you qualify for
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            <Link href="/final-expense-insurance/biggest-mistakes" className="font-semibold text-harbor-mid hover:underline">
              Decided? Avoid these mistakes →
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
