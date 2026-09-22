import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Does Life Insurance Cover Suicide? Fast Facts",
  description:
    "Fast, factual answer on how life insurance handles death by suicide, including the standard exclusion period, plus a crisis resource.",
  openGraph: { title: "Does Life Insurance Cover Suicide? Fast Facts", description: "Fast, factual answer on how life insurance handles death by suicide, including the standard exclusion period, plus a crisis resource." },

  twitter: { title: "Does Life Insurance Cover Suicide? Fast Facts", description: "Fast, factual answer on how life insurance handles death by suicide, including the standard exclusion period, plus a crisis resource." },
};

export default function DoesLifeInsuranceCoverSuicidePage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <h1 className="font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Does life insurance cover suicide? Fast facts
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Sensitive question, common one. Straight factual answer below, plus a resource if you or
          someone you know needs support now.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold text-harbor">Need to talk to someone right now?</p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            988 Suicide &amp; Crisis Lifeline: free, confidential, 24/7.{" "}
            <a href="tel:988" className="font-semibold text-harbor-mid hover:underline">
              Call or text 988
            </a>{" "}
            anytime.
          </p>
        </div>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Short answer
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Most policies, final expense included, cover suicide — not unconditionally from day
          one, though. Nearly universal: a suicide exclusion period, typically the first 2 years.
          After that window, treated like any other covered death — full benefit paid.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Why the exclusion exists
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Not a judgment on any applicant — standard industry-wide underwriting safeguard. Many
          final expense policies are simplified issue: fast approval based on a health
          questionnaire, no exam. This exclusion runs alongside the broader contestability period
          (when a carrier can review a claim closely) as protection for that honor-system model.
          Applies automatically to every applicant — a printed term, not a case-by-case call.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          If it happens during the exclusion window
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Most policies don't pay the full benefit — typically refund premiums paid, sometimes
          with interest. Same logic as other early-period policy limits. Window closes: limitation
          gone, suicide covered like any other cause of death from then on.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Standard term, not special treatment
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Worth repeating: printed standard term in nearly every life insurance contract, not
          carrier-specific, not decided case by case. Once it expires, it has zero more bearing on
          a claim than any other early-period term that's already run out.
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
