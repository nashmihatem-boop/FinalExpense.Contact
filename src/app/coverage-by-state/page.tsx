import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { US_STATES } from "@/lib/us-states";

export const metadata: Metadata = {
  title: "Final Expense Insurance by State: Fast Lookup",
  description:
    "Final expense insurance is regulated state by state. Pick your state for the fast version of how coverage works, and get a quote.",
  openGraph: { title: "Final Expense Insurance by State: Fast Lookup", description: "Final expense insurance is regulated state by state. Pick your state for the fast version of how coverage works, and get a quote." },

  twitter: { title: "Final Expense Insurance by State: Fast Lookup", description: "Final expense insurance is regulated state by state. Pick your state for the fast version of how coverage works, and get a quote." },
};

const FAQS = [
  {
    q: "Costs more in some states?",
    a: "State-regulated, so available carriers/plans shift by location. Within your state though, price comes down to age, gender, tobacco use, health, coverage amount — not ZIP code.",
  },
  {
    q: "Move states — policy still valid?",
    a: "Yes. Whole life policy, tied to you, not an address. Once active, coverage and premium stay identical regardless of where you move.",
  },
  {
    q: "Final expense vs. burial insurance — different?",
    a: "Same product, different names. \"Burial insurance,\" \"funeral insurance,\" \"final expense insurance\" — all the same small whole life policy for end-of-life costs.",
  },
  {
    q: "Agent needs my state's license specifically?",
    a: "Yes — agents must be licensed in your specific state to sell there. Request a quote, we match you with an agent and carriers actually licensed in your state.",
  },
];

export default function CoverageByStatePage() {
  return (
    <div className="bg-canvas">
      <section className="bg-gradient-to-r from-harbor-deep via-harbor to-harbor-deep">
        <div className="mx-auto max-w-3xl px-5 py-16 text-center sm:px-8 sm:py-20">
          <h1 className="font-display text-3xl font-extrabold text-canvas sm:text-4xl">
            Final expense insurance by state: fast lookup
          </h1>
          <p className="mt-4 text-lg text-canvas/75">
            Coverage, carriers, licensing — all state-specific. Pick yours below.
          </p>
          <div className="mt-8 flex justify-center">
            <Button as="link" href="/get-quote" size="lg">
              See your rate now
            </Button>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="rounded-2xl border border-mist bg-canvas-alt p-7">
          <p className="text-base leading-relaxed text-charcoal/80">
            FinalExpense.contact compares final expense and burial insurance across multiple
            licensed carriers nationwide. Pick your state below, see what to expect, get matched
            with a licensed local agent.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-charcoal/60">
            Independent agency, not one carrier — real cross-carrier options, zero pressure to
            enroll.
          </p>
        </div>

        <h2 className="mt-14 font-display text-2xl font-extrabold text-harbor">
          Pick your state
        </h2>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {US_STATES.map((s) => (
            <Link
              key={s.code}
              href={`/coverage-by-state/${s.code.toLowerCase()}`}
              className="flex items-center gap-3 rounded-xl border border-mist bg-canvas-raised px-4 py-3.5 transition-colors hover:border-harbor-mid/50"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-harbor font-display text-xs font-extrabold text-brass">
                {s.code}
              </span>
              <span className="text-sm font-semibold text-charcoal">{s.name}</span>
            </Link>
          ))}
        </div>

        <h2 className="mt-16 font-display text-2xl font-extrabold text-harbor">
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
      </div>
    </div>
  );
}
