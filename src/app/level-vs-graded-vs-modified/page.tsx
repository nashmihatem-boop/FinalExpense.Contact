import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Level vs. Graded vs. Modified: Fast Comparison",
  description:
    "Fast, side-by-side comparison of the three ways a final expense death benefit gets structured, plus the fourth path when none of them fit.",
  openGraph: { title: "Level vs. Graded vs. Modified: Fast Comparison", description: "Fast, side-by-side comparison of the three ways a final expense death benefit gets structured, plus the fourth path when none of them fit." },

  twitter: { title: "Level vs. Graded vs. Modified: Fast Comparison", description: "Fast, side-by-side comparison of the three ways a final expense death benefit gets structured, plus the fourth path when none of them fit." },
};

const OUTCOMES = [
  {
    slug: "level-benefit",
    name: "Level",
    duringWindow: "No wait — 100% from day one",
    after: "No change, already full",
    summary: "Full death benefit, immediate, cheapest of the three.",
  },
  {
    slug: "graded-benefit",
    name: "Graded",
    duringWindow: "Partial benefit, increases yearly",
    after: "100% of the benefit",
    summary: "Real, growing payout from day one, hits full value on schedule.",
  },
  {
    slug: "modified-benefit",
    name: "Modified",
    duringWindow: "Premiums back plus interest — not a death benefit",
    after: "100% of the benefit",
    summary: "Premiums refunded with interest during the window, full coverage after.",
  },
];

export default function LevelVsGradedVsModifiedPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="font-sans text-sm font-semibold tracking-[0.14em] text-brass uppercase">
          Level vs. Graded vs. Modified
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Level vs. graded vs. modified: 3 ways your payout gets structured
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Health questions on your application sort you into one of a few outcomes — and that
          outcome decides exactly when the full death benefit kicks in. Fast side-by-side of the 3
          main outcomes, plus the 4th path for histories none of them fit.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          The three outcomes, side by side
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Every simplified-issue policy (no exam, just health questions) is structured one of
          these three ways. Difference only matters for natural-cause death during a carrier-set
          window — commonly the first two years. After that: all three pay identically.
        </p>
        <div className="mt-6 overflow-x-auto rounded-2xl border border-mist">
          <table className="w-full min-w-[560px] border-collapse text-left">
            <thead>
              <tr className="border-b border-mist bg-canvas-alt">
                <th className="px-5 py-3.5 text-sm font-semibold text-charcoal/60">Outcome</th>
                <th className="px-5 py-3.5 font-display text-sm font-extrabold text-harbor">During window, natural death</th>
                <th className="px-5 py-3.5 font-display text-sm font-extrabold text-charcoal/60">After window</th>
              </tr>
            </thead>
            <tbody>
              {OUTCOMES.map((o, i) => (
                <tr key={o.slug} className={i < OUTCOMES.length - 1 ? "border-b border-mist" : ""}>
                  <td className="px-5 py-4 text-sm font-semibold text-charcoal/70 align-top">
                    <Link href={`/level-vs-graded-vs-modified/${o.slug}`} className="text-harbor-mid hover:underline">
                      {o.name}
                    </Link>
                  </td>
                  <td className="px-5 py-4 text-sm text-charcoal align-top">{o.duringWindow}</td>
                  <td className="px-5 py-4 text-sm text-charcoal/70 align-top">{o.after}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold text-harbor">Shared across all three</p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            Accidental death: paid in full, immediately, regardless of policy age, under any of
            the three. The waiting window applies only to natural-cause death — never the whole
            policy.
          </p>
        </div>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What decides your outcome
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Two factors: how stable/managed your health is now, and how recent/severe anything more
          complex in your history is. Controlled, treated, no recent hospitalization → level.
          Recent or still stabilizing → graded or modified. Add to that: every carrier sets its own
          questions and look-back window — same person, different carrier, different tier.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          The 4th outcome: when none fit
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Some histories fall outside what a given carrier offers via simplified issue at all —
          that's a decline, specific to that one carrier, not a universal verdict. Guaranteed
          acceptance is the backstop: skips health questions, takes any eligible age, 2-year wait
          on natural-cause death. Separate track — full details in{" "}
          <Link href="/pre-existing-conditions" className="text-harbor-mid underline">
            the pre-existing conditions guide
          </Link>
          .
        </p>

        <div className="mt-14 rounded-2xl bg-canvas-alt p-7">
          <h2 className="font-display text-xl font-extrabold text-harbor">Detail on each outcome</h2>
          <ul className="mt-4 space-y-4">
            <li>
              <Link href="/level-vs-graded-vs-modified/level-benefit" className="font-semibold text-harbor-mid hover:underline">
                Level benefit, explained →
              </Link>
              <p className="mt-1 text-sm text-charcoal/70">
                Why it's cheapest, and what health profile typically qualifies.
              </p>
            </li>
            <li>
              <Link href="/level-vs-graded-vs-modified/graded-benefit" className="font-semibold text-harbor-mid hover:underline">
                Graded benefit, explained →
              </Link>
              <p className="mt-1 text-sm text-charcoal/70">
                How the step-up payout works, and why it's real coverage.
              </p>
            </li>
            <li>
              <Link href="/level-vs-graded-vs-modified/modified-benefit" className="font-semibold text-harbor-mid hover:underline">
                Modified benefit, explained →
              </Link>
              <p className="mt-1 text-sm text-charcoal/70">
                Return-of-premium-plus-interest, and how it differs from graded.
              </p>
            </li>
          </ul>
        </div>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            See what you qualify for
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            <Link href="/pre-existing-conditions" className="font-semibold text-harbor-mid hover:underline">
              ← Back to the pre-existing conditions guide
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
