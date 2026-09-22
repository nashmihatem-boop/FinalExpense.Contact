import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Life Insurance Riders: Fast Facts",
  description:
    "Fast facts on what a rider is, how it attaches to a base policy, and common examples like accelerated death benefit and waiver-of-premium riders.",
  openGraph: { title: "Life Insurance Riders: Fast Facts", description: "Fast facts on what a rider is, how it attaches to a base policy, and common examples like accelerated death benefit and waiver-of-premium riders." },

  twitter: { title: "Life Insurance Riders: Fast Facts", description: "Fast facts on what a rider is, how it attaches to a base policy, and common examples like accelerated death benefit and waiver-of-premium riders." },
};

export default function LifeInsuranceRidersPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <h1 className="font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Life insurance riders: fast facts
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Optional add-on to a base policy — extends or modifies standard coverage. Quick rundown
          of the common ones below.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          The basic mechanics
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Base policy: death benefit, premium, standard terms — the core contract. Rider: attaches
          on top, adding flexibility, an extra benefit, or a behavior tweak for a specific
          situation. Some cost extra, some come bundled depending on the policy. Always optional —
          pick at application, sometimes addable later.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Accelerated death benefit (living benefit) riders
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Most well-known rider. Lets you access part of your own death benefit while alive, if
          diagnosed with a qualifying terminal illness — funds for costs during that time instead
          of waiting for a beneficiary payout. Whatever's drawn typically reduces the remaining
          death benefit.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Waiver-of-premium riders
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Solves a different problem: staying covered if serious illness or disability makes
          paying hard. Qualify, and premiums pause for a stretch — policy stays fully active
          regardless.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Child riders
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Some base policies add modest child coverage without a separate policy — smaller,
          simpler version of the{" "}
          <Link href="/life-insurance-for-children" className="font-semibold text-harbor-mid hover:underline">
            standalone children's coverage
          </Link>{" "}
          covered elsewhere, bundled into a parent's existing policy instead.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Worth asking about upfront
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Riders vary widely by policy and carrier — what's bundled, what costs extra, what you
          actually qualify for. Ask an agent specifically what's available and the premium impact
          before applying, not after.
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
