import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Graded Benefit Coverage: Fast Breakdown",
  description:
    "Fast facts on how the graded step-up payout works, what health profile typically lands here, and why it's real, valid coverage.",
  openGraph: { title: "Graded Benefit Coverage: Fast Breakdown", description: "Fast facts on how the graded step-up payout works, what health profile typically lands here, and why it's real, valid coverage." },

  twitter: { title: "Graded Benefit Coverage: Fast Breakdown", description: "Fast facts on how the graded step-up payout works, what health profile typically lands here, and why it's real, valid coverage." },
};

export default function GradedBenefitPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/level-vs-graded-vs-modified" className="hover:text-harbor">Level vs. Graded vs. Modified</Link> / Graded Benefit
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Graded benefit coverage: how the step-up payout works
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Graded is real, active life insurance from day one — it pays on a schedule instead of
          all at once for the initial stretch. How the step-up works, why carriers use it, who
          lands here.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What "graded" means
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Starts day one like any policy — approved, active, premiums due immediately. Difference:
          natural-cause death during the initial waiting window (commonly first two years, set by
          contract). Beneficiary gets a partial payout instead of the full amount, growing each
          year inside the window — lower year one, higher after. Window closes: behaves exactly
          like level from there — 100%, any covered cause.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold text-harbor">Exception to remember</p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            Accidental death: paid in full immediately, even during the step-up window. The wait
            applies to natural-cause death specifically — not the policy overall.
          </p>
        </div>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Why carriers structure it this way
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Graded is the middle option. Health history with real but moderate near-term risk — not
          quite level-priced, not severe enough for guaranteed acceptance's longer no-questions
          structure. Graded lets a carrier say yes, with a real growing benefit from day one,
          instead of no. It extends coverage a level policy isn't priced to offer yet.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Who typically lands here
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          More going on than routine, well-controlled conditions that clear level — still
          manageable, though. A cardiac event (heart attack, stroke, stent) within roughly the
          last year, stable since: common example. Carriers want more time before level, but will
          offer a step-up rather than nothing. Moderate COPD without home oxygen: same pattern.
          Graded vs. modified for the same condition often comes down to which carrier reviews it,
          not the condition itself.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Real coverage, not a downgrade
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          "Partial payout" sounds lesser — it isn't. Premium fixed for life, same as any final
          expense policy. Death benefit locked at approval, only moves up on schedule toward full
          amount. Beneficiary covered from day one, not after the window — only the amount for a
          natural-cause death during that stretch changes, and even the partial early amount often
          makes a real difference. Accidental death: full benefit, immediately, no exceptions.
          Graded is frequently the difference between yes and no for someone who'd otherwise be
          turned away — a genuinely useful tool, not a lesser one.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          How to know if you'd land here
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          The line between level, graded, and modified is carrier-specific. Only way to know for
          sure: apply — ideally after checking which carriers go easier on your specific history.
          An independent agent does that matching before you formally apply. History pointing
          toward modified instead? See{" "}
          <Link href="/level-vs-graded-vs-modified/modified-benefit" className="text-harbor-mid underline">
            how that differs
          </Link>{" "}
          before assuming either way.
        </p>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            See what you qualify for
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            <Link href="/level-vs-graded-vs-modified" className="font-semibold text-harbor-mid hover:underline">
              ← Back to the comparison guide
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
