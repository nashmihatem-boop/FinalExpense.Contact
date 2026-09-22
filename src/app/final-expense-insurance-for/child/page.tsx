import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Final Expense Insurance for a Child: The Honest Version",
  description:
    "The honest version: what people usually mean by final expense insurance for a child is a different, much smaller product entirely.",
  openGraph: { title: "Final Expense Insurance for a Child: The Honest Version", description: "The honest version: what people usually mean by final expense insurance for a child is a different, much smaller product entirely." },

  twitter: { title: "Final Expense Insurance for a Child: The Honest Version", description: "The honest version: what people usually mean by final expense insurance for a child is a different, much smaller product entirely." },
};

export default function ChildPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/final-expense-insurance-for" className="hover:text-harbor">Final Expense Insurance For</Link> / Child
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Final expense insurance for a child: the honest version
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Straight answer upfront: "final expense insurance for a child" usually means a
          different, much smaller product than the senior coverage this site is built around.
          Real option, niche use case. Here's the honest breakdown.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Different product, much smaller scale
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Elsewhere on this site, "final expense insurance" means senior-sized coverage for
          funeral and end-of-life costs. A child's policy is a separate category entirely — a
          small juvenile whole life product. Legitimate, but a niche corner of the market serving
          a different purpose. Straight talk beats stretching our usual content to fit a case it
          wasn't built for.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Why parents consider it anyway
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Not usually about expecting the worst — child mortality is thankfully rare, and parents
          know it. Real appeal: optionality. A small whole life policy locks in insurability for
          life — future health conditions don't touch existing coverage, and converting to a
          larger adult policy later often skips new health questions. Locks in a low premium
          permanently too, since cost ties to starting age. Some treat it as a slow savings
          vehicle — whole life builds cash value. Actual funeral-cost coverage: usually the least
          important reason of the three.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          How it works differently
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Minors can't contract themselves — parent or guardian is applicant/owner by default,
          child is insured. Underwriting: light, often just a short health form (kids are
          statistically the lowest-risk applicants). Coverage amounts: modest, matching the
          product's purpose. Terms, minimum ages, conversion rules vary by carrier — talk to an
          agent for specifics.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Worth weighing first
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Death-benefit usage is thankfully unlikely, so be clear on what you're really buying:
          locked-in future insurability plus a small amount of lifelong coverage — not a
          probability-based product like senior final expense. Not a reason to skip it — plenty of
          families find real value — just a different value than what the rest of this site
          covers. Pick it for the right reason, not because every family "needs" one.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Actually looking for coverage for yourself or a parent?
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Wrong page, easy fix. Our{" "}
          <Link href="/final-expense-insurance" className="text-harbor-mid underline">
            final expense insurance guide
          </Link>{" "}
          is the right start, or go straight to{" "}
          <Link href="/final-expense-insurance-for/parents" className="text-harbor-mid underline">
            coverage for a parent
          </Link>
          .
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
