import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CONDITIONS, TIER_INFO, type Tier } from "@/lib/condition-facts";
import { CarrierComparisonGraphic } from "@/components/pre-existing/carrier-comparison-graphic";

export const metadata: Metadata = {
  title: "Final Expense Insurance with a Health Condition: Fast Guide",
  description:
    "Fast facts on how insurers treat common health conditions, what level/graded/modified/guaranteed-acceptance mean, and how to spot your likely path before applying.",
  openGraph: { title: "Final Expense Insurance with a Health Condition: Fast Guide", description: "Fast facts on how insurers treat common health conditions, what level/graded/modified/guaranteed-acceptance mean, and how to spot your likely path before applying." },

  twitter: { title: "Final Expense Insurance with a Health Condition: Fast Guide", description: "Fast facts on how insurers treat common health conditions, what level/graded/modified/guaranteed-acceptance mean, and how to spot your likely path before applying." },
};

const TOC = [
  { id: "the-two-paths-and-how-simplified-issue-works", label: "The two paths, fast" },
  { id: "tiers", label: "How you get tiered — level, graded, modified, decline" },
  { id: "where-conditions-land", label: "Where conditions typically land" },
  { id: "a-z", label: "Condition index (A–Z)" },
  { id: "why-carriers-differ", label: "Why carriers disagree on the same case" },
  { id: "how-to-prepare", label: "Prep checklist before applying" },
  { id: "faq", label: "FAQ" },
];

const TIER_GROUPS: { tier: Tier; heading: string }[] = [
  { tier: "level", heading: "Usually still level" },
  { tier: "graded-modified", heading: "Usually graded or modified" },
  { tier: "guaranteed", heading: "Usually needs guaranteed acceptance" },
];

const FAQS = [
  {
    q: "I take several daily medications. Disqualifying?",
    a: "No. Multiple medications don't automatically disqualify you. Carriers mainly use prescription history to verify your health answers match — plenty of people on several daily meds still get full, day-one coverage.",
  },
  {
    q: "One carrier declined me. Am I done?",
    a: "No. Rules and look-back windows differ by carrier — a decline at one is often an approval elsewhere. Guaranteed acceptance is always the fallback too, since it skips health questions entirely.",
  },
  {
    q: "\"No exam\" vs. \"no health questions\" — what's the difference?",
    a: "\"No exam\" = simplified issue. No physical, no bloodwork — but health questions still apply. \"No health questions\" = guaranteed acceptance, always with a 2-year wait. Anyone selling both together is selling something that doesn't exist.",
  },
  {
    q: "Diabetes means a 2-year wait — true?",
    a: "Not necessarily. Most stable, well-managed diabetes cases still qualify simplified issue, day-one coverage. The 2-year wait is a guaranteed-acceptance feature specifically — a separate track entirely.",
  },
  {
    q: "Feeling fine now — still need to disclose a condition?",
    a: "Yes, always disclose accurately regardless of how you feel today. Carriers cross-check answers against prescription history and a shared database; a mismatch found during the contestability period risks the claim later.",
  },
];

export default function PreExistingConditionsPage() {
  const grouped = TIER_GROUPS.map((g) => ({
    ...g,
    conditions: CONDITIONS.filter((c) => c.tier === g.tier).slice(0, 7),
  }));

  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="font-sans text-sm font-semibold tracking-[0.14em] text-brass uppercase">
          Pre-Existing Conditions
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Health condition? You likely still qualify
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Most applicants with a health condition still get covered — sometimes at the best rate,
          sometimes through a plan built for a tougher history. Here's how carriers actually
          evaluate health, where common conditions land, and how to spot your path fast, before
          you apply.
        </p>

        <nav aria-label="Guide contents" className="mt-8 rounded-2xl border border-mist p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">Jump to</p>
          <ol className="mt-3 space-y-2">
            {TOC.map((item, i) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-sm text-harbor-mid hover:underline">
                  {i + 1}. {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <h2 id="the-two-paths-and-how-simplified-issue-works" className="mt-14 scroll-mt-24 font-display text-2xl font-extrabold text-harbor">
          The two paths, fast
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Nearly every health-condition application splits one of two ways: simplified issue or
          guaranteed acceptance. Simplified issue is where most people start — the focus here.
          Guaranteed acceptance runs on its own simpler rules, covered separately.
        </p>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Simplified issue: no exam, no bloodwork. Just a short list of yes/no health questions,
          typically under a dozen. Behind the scenes: a prescription-history check plus a lookup
          against the MIB, a shared industry database. Decisions often land same-day or within a
          few business days.
        </p>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          The goal outcome: clear your answers, get "level" coverage — full death benefit from day
          one — and simplified issue typically runs cheaper than guaranteed acceptance for the same
          coverage amount.
        </p>
        <div className="mt-6 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold text-harbor">One warning</p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            "No exam" ≠ "no health questions." No exam usually means simplified issue — questions
            still apply. No health questions means guaranteed acceptance, always with a 2-year
            wait. Both together, no wait? Doesn't exist. Treat that pitch as a red flag.
          </p>
        </div>

        <h2 id="tiers" className="mt-14 scroll-mt-24 font-display text-2xl font-extrabold text-harbor">
          How you get tiered — level, graded, modified, decline
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Not a simple yes/no. Carriers sort applicants into outcomes that decide exactly when
          your family gets the full payout.
        </p>
        <div className="mt-6 overflow-x-auto rounded-2xl border border-mist">
          <table className="w-full min-w-[560px] border-collapse text-left">
            <thead>
              <tr className="border-b border-mist bg-canvas-alt">
                <th className="px-5 py-3.5 text-sm font-semibold text-charcoal/60">Outcome</th>
                <th className="px-5 py-3.5 font-display text-sm font-extrabold text-harbor">Years 1–2, natural death</th>
                <th className="px-5 py-3.5 font-display text-sm font-extrabold text-charcoal/60">After the wait</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-mist">
                <td className="px-5 py-4 text-sm font-semibold text-charcoal/70">Level</td>
                <td className="px-5 py-4 text-sm text-charcoal">100%, day one</td>
                <td className="px-5 py-4 text-sm text-charcoal/70">100%</td>
              </tr>
              <tr className="border-b border-mist">
                <td className="px-5 py-4 text-sm font-semibold text-charcoal/70">Graded</td>
                <td className="px-5 py-4 text-sm text-charcoal">Partial, steps up yearly</td>
                <td className="px-5 py-4 text-sm text-charcoal/70">100%</td>
              </tr>
              <tr className="border-b border-mist">
                <td className="px-5 py-4 text-sm font-semibold text-charcoal/70">Modified</td>
                <td className="px-5 py-4 text-sm text-charcoal">Premiums back plus interest — not full amount</td>
                <td className="px-5 py-4 text-sm text-charcoal/70">100%</td>
              </tr>
              <tr>
                <td className="px-5 py-4 text-sm font-semibold text-charcoal/70">Decline</td>
                <td className="px-5 py-4 text-sm text-charcoal">No simplified policy from that carrier</td>
                <td className="px-5 py-4 text-sm text-charcoal/70">—</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-charcoal/60">
          Accidental death: paid in full immediately even under graded/modified — the wait is for
          natural-cause death only. A decline at one carrier usually just means: try guaranteed
          acceptance, or try a different carrier. Not a dead end.
        </p>

        <h2 id="where-conditions-land" className="mt-14 scroll-mt-24 font-display text-2xl font-extrabold text-harbor">
          Where conditions typically land
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          General patterns, not guarantees. Every carrier draws its own lines — that's exactly why
          the same condition gets different answers from different companies.
        </p>
        {grouped.map((g) => (
          <div key={g.tier} className="mt-8">
            <h3 className="font-display text-lg font-extrabold text-harbor">{g.heading}</h3>
            <div className="mt-4 overflow-x-auto rounded-2xl border border-mist">
              <table className="w-full min-w-[480px] border-collapse text-left">
                <tbody>
                  {g.conditions.map((c, i) => (
                    <tr key={c.slug} className={i < g.conditions.length - 1 ? "border-b border-mist" : ""}>
                      <td className="px-5 py-3.5 text-sm font-semibold text-charcoal/70 align-top">
                        <Link href={`/pre-existing-conditions/${c.slug}`} className="text-harbor-mid hover:underline">
                          {c.name}
                        </Link>
                      </td>
                      <td className="px-5 py-3.5 text-sm text-charcoal align-top">{c.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}

        <h2 id="a-z" className="mt-14 scroll-mt-24 font-display text-2xl font-extrabold text-harbor">
          Condition index (A–Z)
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Full list, fast lookup — tap any condition for details. Typical outcomes only, not
          promises.
        </p>
        <div className="mt-6 overflow-x-auto rounded-2xl border border-mist">
          <table className="w-full min-w-[560px] border-collapse text-left">
            <thead>
              <tr className="border-b border-mist bg-canvas-alt">
                <th className="px-5 py-3 text-sm font-semibold text-charcoal/60">Condition</th>
                <th className="px-5 py-3 font-display text-sm font-extrabold text-harbor">Typical tier</th>
              </tr>
            </thead>
            <tbody>
              {CONDITIONS.map((c, i) => (
                <tr key={c.slug} className={i < CONDITIONS.length - 1 ? "border-b border-mist" : ""}>
                  <td className="px-5 py-3 text-sm font-semibold text-charcoal/70">
                    <Link href={`/pre-existing-conditions/${c.slug}`} className="text-harbor-mid hover:underline">
                      {c.name}
                    </Link>
                  </td>
                  <td className="px-5 py-3 text-sm text-charcoal/80">{TIER_INFO[c.tier].label}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-charcoal/60">
          Not seeing your situation, or been declined before? Not the end — a different carrier's
          rules, or guaranteed acceptance, usually still works.
        </p>

        <h2 id="why-carriers-differ" className="mt-14 scroll-mt-24 font-display text-2xl font-extrabold text-harbor">
          Why carriers disagree on the same case
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Same applicant, two carriers, two different answers — one says level, one says graded.
          Not a glitch. That's the market structure, and it works in your favor if you use it
          right.
        </p>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          No shared rulebook. Each carrier sets its own questions, its own look-back windows (how
          far back it asks about diagnosis/treatment), its own accepted-medication list. A
          treatment from 3 years back might fall outside one carrier's 2-year window but inside
          another's 4-year window — that single gap can decide your tier.
        </p>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          So: applying to one carrier and stopping there can cost you real money or a better tier.
          An independent agency's job is exactly this — matching your history to the carrier whose
          rules fit best, before you apply anywhere.
        </p>

        <CarrierComparisonGraphic />

        <h2 id="how-to-prepare" className="mt-14 scroll-mt-24 font-display text-2xl font-extrabold text-harbor">
          Prep checklist before applying
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Have ready: each condition and diagnosis date, last treatment/hospitalization date, and
          a full current medication list. Carriers check prescriptions against your answers — an
          accurate list avoids surprises.
        </p>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Answer everything honestly. A mismatch found during the early contestability period
          risks your family's claim later. Have a knockout condition — current oxygen, dialysis,
          active cancer treatment? Guaranteed acceptance is the direct route, not a fallback to
          dread.
        </p>

        <h2 id="faq" className="mt-14 scroll-mt-24 font-display text-2xl font-extrabold text-harbor">
          FAQ
        </h2>
        <div className="mt-6 space-y-3">
          {FAQS.map((item) => (
            <details key={item.q} className="group rounded-xl border border-mist bg-canvas-raised px-6 py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-bold text-harbor marker:content-none">
                {item.q}
                <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4 shrink-0 text-harbor-mid transition-transform duration-200 group-open:-rotate-180">
                  <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </summary>
              <p className="mt-3 text-base leading-relaxed text-charcoal/80">{item.a}</p>
            </details>
          ))}
        </div>

        <div className="mt-14 rounded-2xl bg-canvas-alt p-7">
          <h2 className="font-display text-xl font-extrabold text-harbor">Related</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/pre-existing-conditions/can-you-be-denied" className="font-semibold text-harbor-mid hover:underline">
                Can you be denied? What causes a decline →
              </Link>
            </li>
            <li>
              <Link href="/pre-existing-conditions/no-waiting-period" className="font-semibold text-harbor-mid hover:underline">
                Qualifying for day-one coverage, no waiting period →
              </Link>
            </li>
            <li>
              <Link href="/pre-existing-conditions/prescriptions" className="font-semibold text-harbor-mid hover:underline">
                How prescription history affects your application →
              </Link>
            </li>
          </ul>
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
