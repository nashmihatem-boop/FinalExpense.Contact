import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "No Waiting Period: Day-One Coverage Fast Facts",
  description: "Fast facts on qualifying for day-one final expense coverage with no waiting period, even with a health condition.",
  openGraph: {
    title: "No Waiting Period: Day-One Coverage Fast Facts",
    description: "Fast facts on qualifying for day-one final expense coverage with no waiting period, even with a health condition.",
  },
  twitter: {
    title: "No Waiting Period: Day-One Coverage Fast Facts",
    description: "Fast facts on qualifying for day-one final expense coverage with no waiting period, even with a health condition.",
  },
};

export default function NoWaitingPeriodPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/pre-existing-conditions" className="hover:text-harbor">Pre-Existing Conditions</Link> / No Waiting Period Coverage
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          No waiting period: day-one coverage fast facts
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          No waiting period means the full death benefit is active from the day your first
          payment clears — any covered cause of death. It's the outcome everyone wants, and for
          plenty of applicants with a health condition, it's realistic.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Who typically gets it
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Day-one, no-wait coverage (a "level" outcome) runs through simplified-issue underwriting
          — health questions, no exam. Key factor: not whether a diagnosis exists, but whether
          it's stable, controlled, actively managed. Well-controlled blood pressure, treated
          cholesterol, stable type 2 diabetes, CPAP-managed sleep apnea — all regularly still land
          at level.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What usually rules it out
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Serious or recent events — heart attack or stroke in the last year or two, active cancer
          treatment, progressive COPD requiring oxygen — push toward graded or modified instead:
          full benefit phases in over the first couple years rather than paying immediately. Not a
          dead end, just a different real form of coverage. Full breakdown:{" "}
          <Link href="/pre-existing-conditions#tiers" className="text-harbor-mid underline">
            how carriers tier applicants
          </Link>
          .
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Key distinction
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          "No waiting period" ≠ "no health questions." Guaranteed-acceptance skips health
          questions entirely but always carries a 2-year wait for natural-cause death. Both
          together, no wait? Doesn't exist — treat that pitch as a red flag.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Finding your real outcome
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Every carrier defines "stable" or "controlled" differently. Fastest way to know your
          actual outcome: talk to a licensed agent who checks your history against multiple
          carriers at once, instead of guessing or applying to just one.
        </p>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            See what you qualify for
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            <Link href="/pre-existing-conditions" className="font-semibold text-harbor-mid hover:underline">
              ← Back to the full guide
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
