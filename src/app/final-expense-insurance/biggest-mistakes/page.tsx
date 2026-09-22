import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PolicyTypesTable } from "@/components/final-expense/policy-types-table";

export const metadata: Metadata = {
  title: "4 Mistakes That Cost You Money on Final Expense Insurance",
  description:
    "4 avoidable mistakes people make shopping for final expense insurance — single-quote shopping, wrong policy type, dishonest disclosures, lapse risk.",
  openGraph: { title: "4 Mistakes That Cost You Money on Final Expense Insurance", description: "4 avoidable mistakes people make shopping for final expense insurance — single-quote shopping, wrong policy type, dishonest disclosures, lapse risk." },

  twitter: { title: "4 Mistakes That Cost You Money on Final Expense Insurance", description: "4 avoidable mistakes people make shopping for final expense insurance — single-quote shopping, wrong policy type, dishonest disclosures, lapse risk." },
};

export default function BiggestMistakesPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/final-expense-insurance" className="hover:text-harbor">Final Expense Insurance</Link> / Biggest Mistakes
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          4 mistakes that cost you money on final expense insurance
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          All four are 100% avoidable once you know to watch for them. None require expertise —
          just awareness.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Mistake 1: one quote, done
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          The single most common error. Every carrier runs its own health questions, its own
          look-back window, its own pricing — same person, meaningfully different answer at a
          second company.{" "}
          <Link href="/pre-existing-conditions#why-carriers-differ" className="text-harbor-mid underline">
            Same condition, different carriers, different outcomes
          </Link>{" "}
          — check before treating your first quote as your only option.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Mistake 2: guaranteed issue when simplified was on the table
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Guaranteed issue skips health questions — costs more for the same coverage, plus a
          waiting period. People default to it by assumption, or because it's what got pitched
          first, without ever checking if simplified issue (cheaper, day-one coverage) was
          actually available.
        </p>
        <PolicyTypesTable />

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Mistake 3: fudging health disclosures
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Downplaying a condition for a better rate feels harmless in the moment. It isn't. File a
          claim during the contestability period — when a carrier can still check your original
          answers against medical/prescription records — and a mismatch means denial or reduced
          payout, right when your family needs the money most. Honest answers upfront protect the
          coverage you're paying for.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Mistake 4: one missed payment, panic
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A missed premium doesn't automatically kill coverage. Every policy has a grace period —
          commonly ~30 days, varies by carrier and state — to catch up before an actual lapse. The
          real mistake: assuming coverage is already gone instead of calling the carrier or agent
          in time. Keep payment info current, act fast on any failure.
        </p>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            See what you qualify for
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            <Link href="/final-expense-insurance/buy-online" className="font-semibold text-harbor-mid hover:underline">
              What happens after you get a quote →
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
