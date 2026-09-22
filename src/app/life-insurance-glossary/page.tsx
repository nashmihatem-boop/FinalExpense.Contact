import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Life Insurance Terms: Fast Glossary",
  description:
    "Fast, plain-language definitions for the life insurance terms used across this site — beneficiary, death benefit, lapse, look-back period, and more.",
  openGraph: { title: "Life Insurance Terms: Fast Glossary", description: "Fast, plain-language definitions for the life insurance terms used across this site — beneficiary, death benefit, lapse, look-back period, and more." },

  twitter: { title: "Life Insurance Terms: Fast Glossary", description: "Fast, plain-language definitions for the life insurance terms used across this site — beneficiary, death benefit, lapse, look-back period, and more." },
};

const TERMS: { term: string; definition: ReactNode }[] = [
  {
    term: "Beneficiary",
    definition: (
      <>
        Recipient of the death benefit — one person, several, or an organization. Update the
        list whenever you want, as often as you want, while the policy's active.
      </>
    ),
  },
  {
    term: "Death benefit",
    definition: (
      <>
        Cash paid out after death, once the claim clears. The entire reason the product exists.
      </>
    ),
  },
  {
    term: "Premium",
    definition: (
      <>
        Recurring payment (usually monthly) that keeps coverage active. Skip too many, coverage
        ends.
      </>
    ),
  },
  {
    term: "Face amount",
    definition: (
      <>
        The coverage number printed on the policy — baseline for the death benefit before any
        graded/modified adjustment kicks in.
      </>
    ),
  },
  {
    term: "Cash value",
    definition: (
      <>
        Slow-building savings feature inside whole life/final expense policies, separate from the
        death benefit, accessible while alive.{" "}
        <Link href="/cash-value-life-insurance" className="font-semibold text-harbor-mid hover:underline">
          Full breakdown here
        </Link>
        .
      </>
    ),
  },
  {
    term: "Simplified issue",
    definition: (
      <>
        Skips the medical exam. Short yes/no health questionnaire instead, cross-checked against
        prescription history in the background. Health condition in the mix?{" "}
        <Link href="/pre-existing-conditions" className="font-semibold text-harbor-mid hover:underline">
          See how that's handled
        </Link>
        .
      </>
    ),
  },
  {
    term: "Guaranteed issue",
    definition: (
      <>
        AKA guaranteed acceptance. Zero health questions, zero exam — eligible age range gets you
        in, usually with a waiting period on natural-cause death attached.
      </>
    ),
  },
  {
    term: "Level / graded / modified",
    definition: (
      <>
        Three payout shapes for early-policy death. Level: full amount, day one. Graded: partial
        payout that climbs yearly. Modified: premiums refunded (often plus interest) instead of a
        benefit. All three flip to full payout once the early window closes.
      </>
    ),
  },
  {
    term: "Contestability period",
    definition: (
      <>
        Early window, typically two years, where a carrier can dig into and challenge a claim if
        the original application had a material lie or omission.
      </>
    ),
  },
  {
    term: "Underwriting",
    definition: (
      <>
        The behind-the-scenes evaluation — health answers, prescription check, related
        verification — that decides approval and terms.
      </>
    ),
  },
  {
    term: "Look-back period",
    definition: (
      <>
        How far back a carrier's questions dig for a past diagnosis, treatment, or
        hospitalization. Not fixed — shifts by carrier and by condition.
      </>
    ),
  },
  {
    term: "Free-look period",
    definition: (
      <>
        Short post-delivery window to cancel for zero reason and get every dollar of premium
        back.
      </>
    ),
  },
  {
    term: "Grace period",
    definition: (
      <>
        Buffer window after a missed due date — coverage keeps running while you catch up, right
        up until an actual lapse.
      </>
    ),
  },
  {
    term: "Lapse",
    definition: (
      <>
        The end result of unpaid premiums surviving even the grace period. Coverage: gone.
      </>
    ),
  },
];

export default function LifeInsuranceGlossaryPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <h1 className="font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Life insurance terms: fast glossary
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Every industry has its own shorthand. Quick, no-nonsense definitions for the terms used
          throughout this site, so nothing here leaves you guessing.
        </p>

        <dl className="mt-10 divide-y divide-mist border-t border-mist">
          {TERMS.map((item) => (
            <div key={item.term} className="py-6">
              <dt className="font-display text-xl font-extrabold text-harbor">{item.term}</dt>
              <dd className="mt-2 text-base leading-relaxed text-charcoal/80">{item.definition}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            See what you qualify for
          </Button>
        </div>
      </div>
    </div>
  );
}
