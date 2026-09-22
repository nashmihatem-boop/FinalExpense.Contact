import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Is Life Insurance Taxable? Fast Answer",
  description:
    "Fast answer on the federal tax rule for life insurance death benefits, key nuances, and why you still need a tax professional.",
  openGraph: { title: "Is Life Insurance Taxable? Fast Answer", description: "Fast answer on the federal tax rule for life insurance death benefits, key nuances, and why you still need a tax professional." },

  twitter: { title: "Is Life Insurance Taxable? Fast Answer", description: "Fast answer on the federal tax rule for life insurance death benefits, key nuances, and why you still need a tax professional." },
};

export default function IsLifeInsuranceTaxablePage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <h1 className="font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Is life insurance taxable? Fast answer
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Common question, good news. Federal rule below, plus two nuances and why your own
          situation still needs a tax pro.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          General rule: death benefits are tax-free
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Federal law: death benefits reach the beneficiary free of federal income tax, generally.
          One of the most established features of life insurance in the U.S. — a big reason it's
          such a dependable planning tool. Standard case: no federal income tax reduction, before
          or after the payout.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Where interest gets taxed
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Timing nuance: delayed payout, insurer holds funds, interest accrues — that interest can
          be taxable even though the death benefit itself isn't. Death benefit: tax-free. Interest
          earned during a delay: potentially taxable. Different things.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Large estates: separate question
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Second nuance: very large estates can have policy value factor into estate tax,
          separate from income tax rules above. Only relevant for a small share of estates —
          depends on federal (sometimes state) thresholds that shift over time. No specific numbers
          here; they'd risk going stale or not applying to you.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold text-harbor">
            Talk to a tax professional about your situation
          </p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            General rule is solid as a baseline, but taxes are personal — state, estate size,
            ownership structure all matter. Before acting on tax assumptions, get a real answer
            from a qualified tax professional.
          </p>
        </div>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            See what you qualify for
          </Button>
        </div>
      </div>
    </div>
  );
}
