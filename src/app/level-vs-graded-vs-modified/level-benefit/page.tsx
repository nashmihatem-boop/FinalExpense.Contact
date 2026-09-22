import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Level Benefit Coverage: Fast Breakdown",
  description:
    "Fast facts on what a level death benefit means, why it's typically the cheapest outcome, and what health profile usually qualifies.",
  openGraph: { title: "Level Benefit Coverage: Fast Breakdown", description: "Fast facts on what a level death benefit means, why it's typically the cheapest outcome, and what health profile usually qualifies." },

  twitter: { title: "Level Benefit Coverage: Fast Breakdown", description: "Fast facts on what a level death benefit means, why it's typically the cheapest outcome, and what health profile usually qualifies." },
};

export default function LevelBenefitPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/level-vs-graded-vs-modified" className="hover:text-harbor">Level vs. Graded vs. Modified</Link> / Level Benefit
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Level benefit coverage: full payout, day one
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Level is the benchmark. No waiting window, no step-up, nothing changes after year one —
          full death benefit, active from policy start. Here's what it means, why it's usually the
          cheapest tier, and who typically qualifies.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What "level" means
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Pays 100% of the face amount for any covered cause of death, starting day one — natural
          causes included, not just accidents. No payout schedule to track, no partial-benefit
          period. This is what most people picture as "life insurance": approved, covered, done.
          Graded and modified exist to still cover histories that don't clear for level yet — level
          itself carries none of that built-in caution because underwriting found no reason to add
          it.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Why it's usually the cheapest
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Graded and modified both build a financial cushion into the contract — partial payout or
          premium return — to offset extra near-term risk on a more complicated health history.
          Level doesn't need that cushion, so you're not paying for one. Same age, face amount,
          health class: level is generally the most cost-efficient of the three. Exact premium
          still depends on the carrier's rate table — "level" describes benefit structure, not a
          fixed price — but structurally, it's the only outcome without a built-in risk offset.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Who typically qualifies
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Not about whether a diagnosis exists on paper — about whether it's stable, treated, and
          free of a recent hospitalization or medication change. Controlled type 2 diabetes (diet,
          pills, or insulin), no complications: routinely still approved at level. Same for
          managed blood pressure/cholesterol, CPAP-treated sleep apnea, and plenty of other
          everyday conditions carriers barely blink at. No clean bill of health required — just
          active management instead of new, unstable, or unresolved. Full list:{" "}
          <Link href="/pre-existing-conditions#a-z" className="text-harbor-mid underline">
            A–Z of common conditions
          </Link>
          .
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold text-harbor">Level still means honest answers</p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            Qualifying for level doesn't reduce scrutiny. Carriers still check prescription history
            and a shared database against your answers — same as any tier. Mismatch found later
            risks the claim regardless of tier.
          </p>
        </div>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Why aim for it
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Beyond cost: least complicated outcome for your family later. No step-up schedule to
          track, no reduced-payout window, no ambiguity about coverage today vs. eventually. Also
          more reachable than people assume — one manageable condition doesn't automatically drop
          you a tier. Worth applying and finding out rather than guessing in advance.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          How to find out
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Only real way to know: apply. But you can improve your odds first. Carriers set
          independent questions and look-back periods — same condition clears level at one carrier,
          lands graded at another. An independent agent checking your history against multiple
          carriers first is the fast path to finding the one most likely to say level — instead of
          applying once, landing lower, and never knowing another carrier would've said yes. Not
          landing at level isn't the end:{" "}
          <Link href="/level-vs-graded-vs-modified/graded-benefit" className="text-harbor-mid underline">
            graded
          </Link>{" "}
          and{" "}
          <Link href="/level-vs-graded-vs-modified/modified-benefit" className="text-harbor-mid underline">
            modified
          </Link>{" "}
          both still work.
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
