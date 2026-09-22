import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Modified Benefit Coverage: Fast Breakdown",
  description:
    "Fast facts on the return-of-premium-plus-interest structure, how it differs from graded, and who typically lands here.",
  openGraph: { title: "Modified Benefit Coverage: Fast Breakdown", description: "Fast facts on the return-of-premium-plus-interest structure, how it differs from graded, and who typically lands here." },

  twitter: { title: "Modified Benefit Coverage: Fast Breakdown", description: "Fast facts on the return-of-premium-plus-interest structure, how it differs from graded, and who typically lands here." },
};

export default function ModifiedBenefitPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/level-vs-graded-vs-modified" className="hover:text-harbor">Level vs. Graded vs. Modified</Link> / Modified Benefit
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Modified benefit coverage: premiums back plus interest
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Same core problem as graded — a health history with more near-term risk than level
          pricing allows — different mechanism. Instead of a step-up death benefit, modified
          refunds premiums paid, plus interest, during the initial window. How it works, how it
          differs from graded, who lands here.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What "modified" means
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Active from issue date like any policy — premiums due immediately. Difference only
          matters for natural-cause death during the initial waiting window (commonly first two
          years, contract-specific). Beneficiary gets premiums paid back, plus interest — not any
          portion of the death benefit. Window closes: converts to level behavior — 100%, any
          covered cause, for life.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold text-harbor">Accidental death: same as graded</p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            Paid in full immediately regardless of policy age. Return-of-premium applies to
            natural-cause death during the window only — never affects accident coverage.
          </p>
        </div>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Modified vs. graded
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          The split is what each pays if death happens during the window. A{" "}
          <Link href="/level-vs-graded-vs-modified/graded-benefit" className="text-harbor-mid underline">
            graded policy
          </Link>{" "}
          still pays a real, growing portion of the actual death benefit. Modified pays no death
          benefit portion during the window — you get a refund with interest instead. Both convert
          to full benefit after the window; the only difference is what happens if death occurs
          during those first couple years.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Why interest gets added
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          So you're not handed back the exact same dollars with zero time-value recognized. Rate
          and calculation method set by carrier and contract — confirm specifics in your policy
          illustration rather than assuming a number. Structurally built to beat a flat refund,
          though it's still not the full death benefit.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Who typically lands here
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          One notch past graded on the same risk spectrum — more near-term risk than typical
          graded cases, not severe enough for a decline. Chronic pancreatitis shows the pattern:
          well-managed, infrequent flare-ups → often graded. More frequent flare-ups or related
          hospitalization → same condition often shifts to modified. Less about the diagnosis,
          more about recent activity/instability.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          How to know if you'd land here
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Best way to find out: check your history against multiple carriers before applying —
          each draws the graded/modified/guaranteed-acceptance line differently. An independent
          agent handles that matching. History pointing toward even less flexibility? Guaranteed
          acceptance — full details in{" "}
          <Link href="/pre-existing-conditions" className="text-harbor-mid underline">
            the pre-existing conditions guide
          </Link>{" "}
          — is always the backstop.
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
