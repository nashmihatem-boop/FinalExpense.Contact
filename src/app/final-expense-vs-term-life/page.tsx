import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Final Expense vs. Term Life Insurance: Fast Comparison",
  description:
    "Both pay a death benefit, built for different jobs. Fast breakdown of underwriting, coverage length, and what each actually pays for.",
  openGraph: { title: "Final Expense vs. Term Life Insurance: Fast Comparison", description: "Both pay a death benefit, built for different jobs. Fast breakdown of underwriting, coverage length, and what each actually pays for." },

  twitter: { title: "Final Expense vs. Term Life Insurance: Fast Comparison", description: "Both pay a death benefit, built for different jobs. Fast breakdown of underwriting, coverage length, and what each actually pays for." },
};

export default function FinalExpenseVsTermLifePage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/final-expense-insurance" className="hover:text-harbor">Final Expense Insurance</Link> / Final Expense vs. Term Life
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Final expense vs. term life insurance: fast comparison
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Both life insurance, both pay a death benefit, both get shopped at the same trigger
          moment — thinking seriously about who you leave behind. Past that: different jobs
          entirely. Here's the real split.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Core split: temporary vs. permanent
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Term life: fixed window — 10, 20, 30 years typical. Outlive it, coverage ends. Final
          expense: whole life structure — no end date, lasts your whole life as long as premiums
          are paid. That single split (temporary vs. permanent) drives almost every other
          difference below.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Underwriting: why final expense is easier to qualify for
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Term life: deeper underwriting at higher amounts — exam, bloodwork, longer health
          questionnaire, since the carrier is pricing bigger risk over a long fixed term. Final
          expense: simplified issue — short health questions, no exam. Not a loophole — tradeoff
          for smaller coverage and an older applicant pool. Health concerns?{" "}
          <Link href="/pre-existing-conditions" className="text-harbor-mid underline">
            Pre-existing conditions guide
          </Link>{" "}
          covers how final expense treats specific conditions.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What each one actually pays for
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Term life: sized around a large, specific gap — years of income replacement, mortgage
          payoff, raising kids to adulthood. Amount calculated backward from that need. Final
          expense: narrower, predictable job — funeral/burial/cremation costs plus lingering
          medical or credit bills. Smaller, steadier need means an easier number to land on.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What happens when term ends
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Catches people off guard. Level period ends: policy expires with nothing paid, or
          renews year-to-year at a much higher premium (renewal pricing uses your current age, not
          your original age). Final expense skips this cliff entirely — premium locked at approval
          stays fixed for life, policy never expires on its own while paid.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Why final expense fills the gap term leaves
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Term gets harder and pricier with age — some carriers cut off new term policies past a
          certain age entirely. That gap is exactly why final expense exists as its own category:
          built for the stage where term isn't available or doesn't pencil out anymore, and where
          the real remaining need (final costs, not decades of income) is much smaller anyway.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Picking one — or using both, at different stages
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Not always either/or. Common pattern: term during working years (mortgage, income,
          growing family = large temporary need), let it lapse once those obligations end, add
          final expense later for end-of-life costs specifically. Deciding now? Simple test:
          protecting dependents from lost income, or making sure your own final costs don't land on
          family? First → term life. Second → exactly what our{" "}
          <Link href="/final-expense-insurance" className="text-harbor-mid underline">
            final expense insurance guide
          </Link>{" "}
          covers in full.
        </p>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            See what you qualify for
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            <Link href="/final-expense-insurance" className="font-semibold text-harbor-mid hover:underline">
              ← Back to Final Expense Insurance
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
