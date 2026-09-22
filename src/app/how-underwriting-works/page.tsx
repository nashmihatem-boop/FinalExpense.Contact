import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "How Underwriting Works: Fast Breakdown",
  description:
    "Fast breakdown of how insurers decide what to offer and at what price, and how simplified issue differs from a fully underwritten policy.",
  openGraph: { title: "How Underwriting Works: Fast Breakdown", description: "Fast breakdown of how insurers decide what to offer and at what price, and how simplified issue differs from a fully underwritten policy." },

  twitter: { title: "How Underwriting Works: Fast Breakdown", description: "Fast breakdown of how insurers decide what to offer and at what price, and how simplified issue differs from a fully underwritten policy." },
};

export default function HowUnderwritingWorksPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <h1 className="font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          How underwriting works: fast breakdown
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Every application goes through underwriting first. Decides approval, price, and — policy
          type dependent — how fast full coverage kicks in. Here's the process, and how it changes
          for final expense specifically.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What underwriting actually is
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Risk assessment, plain and simple. Carrier's agreeing to pay a benefit that can dwarf
          collected premiums, especially early on. Before that promise: age, health, sometimes
          occupation/lifestyle get weighed to decide (a) offer coverage or not, (b) at what price.
          Higher risk = higher premium or longer wait; lower risk = better terms. True across every
          policy type. What changes: how much info gets gathered, and how.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Fully underwritten: the traditional path
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Bigger, longer policies (large term policy replacing decades of income) get full medical
          underwriting: detailed application, medical/family/lifestyle history, often a
          paramedical exam (height, weight, blood pressure) plus lab work. Bigger amounts: insurer
          may pull medical records directly (attending physician statement). Precise picture, but
          slow — weeks or more from application to approval.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Simplified issue: final expense's approach
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Final expense: almost always simplified issue — deliberately lighter, built for smaller
          policies. No exam, no lab work. Short yes/no health questionnaire instead. Carrier checks
          answers against existing sources: prescription history and the MIB (shared industry
          database). Less to gather = faster decision, often same-day or a few business days.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">At a glance</p>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-charcoal/75">
            <li>• Fully underwritten: exam, labs, sometimes physician records. Weeks.</li>
            <li>• Simplified issue: health questions, checked vs. prescription history + MIB. Days.</li>
            <li>• Guaranteed issue: no health questions, always a waiting period.</li>
          </ul>
        </div>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          The tradeoff behind speed
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Not a loophole — a different speed/information/risk balance. Less info than a full exam
          means smaller coverage amounts than fully underwritten policies. Health answers
          determine: full coverage immediately, or a graded benefit phasing in over the first
          couple years. What you get in return: far fewer outright exclusions, most applicants
          decided without an exam at all. Exact condition-by-condition treatment, and what level/
          graded/modified actually mean:{" "}
          <Link href="/pre-existing-conditions" className="font-semibold text-harbor-mid hover:underline">
            full pre-existing conditions guide
          </Link>
          .
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          One path among several
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Not the only alternative to a full exam. No simplified-issue option (serious health
          condition)? Guaranteed issue is usually still available — skips health questions, adds a
          waiting period instead. Different rulebook, covered separately:{" "}
          <Link href="/guaranteed-issue-life-insurance" className="font-semibold text-harbor-mid hover:underline">
            guaranteed issue life insurance
          </Link>
          .
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
