import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Multiple Life Insurance Policies: Allowed? Fast Answer",
  description:
    "Yes, you can hold more than one policy at once. Fast breakdown of why people do it and when adding a second one actually makes sense.",
  openGraph: { title: "Multiple Life Insurance Policies: Allowed? Fast Answer", description: "Yes, you can hold more than one policy at once. Fast breakdown of why people do it and when adding a second one actually makes sense." },

  twitter: { title: "Multiple Life Insurance Policies: Allowed? Fast Answer", description: "Yes, you can hold more than one policy at once. Fast breakdown of why people do it and when adding a second one actually makes sense." },
};

export default function MultipleLifeInsurancePoliciesPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <h1 className="font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Multiple life insurance policies: allowed? Fast answer
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Short answer: yes. Plenty of people carry two or more at once. Usually not
          "over-insuring" — just two different needs, covered separately.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          The most common reason
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Big term policy from years back, bought to replace income for a young family — not
          really aimed at funeral costs. Smaller final expense policy added later, aimed directly
          at burial and end-of-life bills. Two jobs, two policies.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Insurers don't block this
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Each policy = its own contract, own insurer, own premium, own beneficiary. Holding one
          doesn't limit holding another. What insurers do watch: total coverage across everything
          you hold. Extra scrutiny only shows up at very large combined totals — far above typical
          final expense amounts.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Should you add one?
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Ask directly: does what you already have actually cover final expenses, or is it
          earmarked for something else? A term policy about to expire was probably never meant for
          burial costs — and once it lapses, that gap stays open on its own.{" "}
          <Link href="/final-expense-insurance" className="font-semibold text-harbor-mid hover:underline">
            A dedicated final expense policy
          </Link>{" "}
          closes that specific gap without touching anything else you hold.
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
