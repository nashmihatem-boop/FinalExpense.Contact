import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Life Insurance for Children: Fast Facts",
  description:
    "Fast facts on juvenile whole life policies and riders — how they work, why families buy them, and how they differ from senior final expense coverage.",
  openGraph: { title: "Life Insurance for Children: Fast Facts", description: "Fast facts on juvenile whole life policies and riders — how they work, why families buy them, and how they differ from senior final expense coverage." },

  twitter: { title: "Life Insurance for Children: Fast Facts", description: "Fast facts on juvenile whole life policies and riders — how they work, why families buy them, and how they differ from senior final expense coverage." },
};

export default function LifeInsuranceForChildrenPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <h1 className="font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Life insurance for children: fast facts
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Real, niche product — different entirely from the senior final expense coverage this
          site mostly covers. Here's what it is and isn't.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Typical structure
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Two common setups: a small standalone whole life policy in the child's name, or a{" "}
          <Link href="/life-insurance-riders" className="font-semibold text-harbor-mid hover:underline">
            rider
          </Link>{" "}
          on a parent's policy adding a modest amount for the child. Amounts stay small by design —
          never meant to be large. Standalone version: builds a bit of cash value over time, same
          mechanism as adult whole life/final expense.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Why families buy it
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Two main reasons. One: locking in future insurability — coverage while young and healthy
          guarantees adult coverage later regardless of health developments, often convertible to
          a bigger policy without new health questions. Two: early cash value start — slow,
          steady whole life growth as a long-horizon head start. Neither is about income
          replacement (the usual adult-insurance driver) — kids have no dependents relying on
          their income, different purpose entirely.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          How it differs from final expense
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Final expense (this site's main focus): built for older adults, sized for a specific
          near-term job — funeral/burial/end-of-life costs off the family's plate. Child coverage:
          smaller, optional, long-horizon, entirely different life stage and purpose. Specifically
          want a juvenile policy or rider? Ask an agent directly — distinct product from most of
          this site.
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
