import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Final Expense Insurance for a Grandparent: Fast Guide",
  description:
    "Fast facts on how grandchildren and extended family arrange coverage for a grandparent, and how to coordinate.",
  openGraph: { title: "Final Expense Insurance for a Grandparent: Fast Guide", description: "Fast facts on how grandchildren and extended family arrange coverage for a grandparent, and how to coordinate." },

  twitter: { title: "Final Expense Insurance for a Grandparent: Fast Guide", description: "Fast facts on how grandchildren and extended family arrange coverage for a grandparent, and how to coordinate." },
};

export default function GrandparentsPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/final-expense-insurance-for" className="hover:text-harbor">Final Expense Insurance For</Link> / Grandparents
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Final expense insurance for a grandparent: fast guide
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          More common than you'd guess — especially when a grandparent's own kids can't step in,
          or a grandchild is simply closest to them. Here's what to know.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Why extended family steps in
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Family circumstances don't always fit the standard model. A grandparent's children might
          live far away, be managing their own health or money issues, or simply not be closest
          day-to-day. A grandchild — often financially stable, close bond with the grandparent —
          ends up the one who notices the gap and acts. Sometimes triggered by a scare: a fall, a
          diagnosis, a hospital stay that makes missing coverage feel urgent instead of
          theoretical.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Insurable interest, one generation out
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Same rule as every relationship here: insurable interest required — genuine financial or
          emotional stake — and your grandparent still consents and answers health questions
          personally. Grandchild-grandparent recognized similarly to sibling relationships: valid,
          but one step further from the obvious cases (spouse, parent-child), so a carrier may ask
          a few extra questions about the relationship and reasoning. Our{" "}
          <Link href="/final-expense-insurance-for/sibling" className="text-harbor-mid underline">
            sibling coverage guide
          </Link>{" "}
          covers insurable interest in more depth — applies here too.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Coordinating with the family
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Multiple children and grandchildren could reasonably be involved — worth a quick family
          check-in before applying, so two relatives don't accidentally duplicate coverage or
          clash later over beneficiary choice. Clarify upfront: relieving the burden from your
          grandparent's own kids specifically, expecting reimbursement from the family, or just
          wanting to own the task. No permission needed for any of those — but naming the reason
          out loud avoids confusion down the line.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What your grandparent has to do
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Same as any insured adult: consent, answer health questions honestly and personally,
          sign the application. You lead research and logistics — but plan for your grandparent to
          be present, even briefly, for the actual application.
        </p>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            See what you qualify for
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            <Link href="/final-expense-insurance-for" className="font-semibold text-harbor-mid hover:underline">
              ← See all relationships
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
