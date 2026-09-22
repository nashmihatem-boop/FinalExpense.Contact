import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { PolicyTypesTable, CostFactorsGrid } from "@/components/final-expense/policy-types-table";
import { US_STATES } from "@/lib/us-states";
import { STATE_FACTS, formatMetros } from "@/lib/state-facts";
import { STATE_COUNTIES, countyTermFor } from "@/lib/state-counties";
import { siteConfig } from "@/lib/site-config";

function findState(slug: string) {
  return US_STATES.find((s) => s.code.toLowerCase() === slug.toLowerCase());
}

export function generateStaticParams() {
  return US_STATES.map((s) => ({ state: s.code.toLowerCase() }));
}

export async function generateMetadata(props: PageProps<"/coverage-by-state/[state]">): Promise<Metadata> {
  const { state: slug } = await props.params;
  const state = findState(slug);
  if (!state) return {};
  const title = `Final Expense Insurance in ${state.name}: Fast Facts`;
  const description = `Fast facts on final expense insurance in ${state.name}: how it works, rate factors, state regulations, veteran benefits, and how to get a quote.`;
  return {
    title,
    description,
    openGraph: { title, description },
    twitter: { title, description },
  };
}

const TOC = [
  { id: "costs", label: (s: string) => `Funeral/Cremation Costs in ${s}` },
  { id: "how-it-works", label: () => "How It Works" },
  { id: "policy-types", label: () => "Policy Types" },
  { id: "regulations", label: (s: string) => `${s} Regulations` },
  { id: "burial-laws", label: (s: string) => `${s} Burial Laws` },
  { id: "regions", label: (s: string) => `${s} Regions & Metros` },
  { id: "counties", label: (s: string) => `Counties We Cover in ${s}` },
  { id: "veterans", label: () => "Veterans' Burial Benefits" },
  { id: "faq", label: () => "FAQ" },
];

function faqsFor(stateName: string, isDC: boolean) {
  const locality = isDC ? "the District" : stateName;
  return [
    {
      q: `Is final expense insurance sold in ${stateName}?`,
      a: `Yes — multiple carriers hold licenses to sell in ${locality}. Which specific plans fit depends on age, health, and coverage amount. An agent gives you the exact answer.`,
    },
    {
      q: `Higher cost in ${stateName} vs. elsewhere?`,
      a: `Insurance is state-regulated, so availability shifts by location. Within ${locality} though, price comes down to age, gender, tobacco use, health, coverage amount — not address.`,
    },
    {
      q: `Move out of ${stateName} — still covered?`,
      a: `Yes. Policy is tied to you, not your state. Coverage and premium hold steady wherever you relocate.`,
    },
    {
      q: "Medical exam required?",
      a: "Most final expense policies skip it. Simplified issue: short health questions. Guaranteed issue: no health questions at all, waiting period instead.",
    },
    {
      q: "How much coverage is right?",
      a: "Most size it to funeral/burial costs plus any debt they don't want left behind. No universal number — an agent recommends an amount free, based on your situation.",
    },
    {
      q: "Multiple beneficiaries allowed?",
      a: "Yes. Name several, split the payout by percentage, update it anytime.",
    },
    {
      q: `Extra burial benefits for ${stateName} veterans?`,
      a: "Many veterans and spouses qualify for federal VA burial benefits — allowance, sometimes a national cemetery plot — regardless of state. Final expense insurance is separate and covers what VA benefits don't: a service, viewing, extra headstone costs.",
    },
  ];
}

export default async function StateCoveragePage(props: PageProps<"/coverage-by-state/[state]">) {
  const { state: slug } = await props.params;
  const state = findState(slug);
  if (!state) notFound();

  const isDC = state.code === "DC";
  const facts = STATE_FACTS[state.code];
  const displayName = isDC ? "D.C." : state.name;
  const possessive = isDC ? "the District of Columbia's" : `${state.name}'s`;
  const faqs = faqsFor(state.name, isDC);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="bg-canvas">
      {/* Static, locally-authored JSON-LD — no user input reaches this. */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="font-sans text-sm font-semibold tracking-[0.14em] text-brass uppercase">
          {state.name}
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Final expense insurance in {state.name}: fast facts
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          {isDC ? (
            <>
              D.C. residents have full access to final expense coverage through carriers licensed
              in the District.
            </>
          ) : (
            <>
              {state.name} residents — {facts.capital} to {formatMetros(facts.metros)} — have
              access through carriers licensed locally.
            </>
          )}{" "}
          State-regulated, like all insurance: {possessive} Department of Insurance controls which
          carriers/policies sell here. That's why fit varies by location. This page: costs,
          regulations, and how {displayName} residents get matched with a licensed local agent.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">
            {displayName} quick facts
          </p>
          <ul className="mt-3 space-y-2 text-base leading-relaxed text-charcoal/80">
            <li>• Agents licensed specifically for {isDC ? "the District" : state.name}.</li>
            <li>• Price driven by age, health, coverage amount — same as anywhere.</li>
            <li>• No medical exam for most applicants.</li>
            <li>• Coverage stays active if you move states later.</li>
          </ul>
        </div>

        <nav aria-label="Guide contents" className="mt-8 rounded-2xl border border-mist p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">Jump to</p>
          <ol className="mt-3 grid gap-2 sm:grid-cols-2">
            {TOC.map((item, i) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-sm text-harbor-mid hover:underline">
                  {i + 1}. {item.label(state.name)}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <h2 id="costs" className="mt-14 scroll-mt-24 font-display text-2xl font-extrabold text-harbor">
          Funeral and cremation costs in {state.name}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Costs swing by service choice and location — no invented region-specific numbers here,
          but generally: direct cremation costs a fraction of a full traditional funeral (viewing,
          casket, vault, burial). {" "}
          <a href="https://nfda.org" className="text-harbor-mid underline">National Funeral Directors Association</a>{" "}
          publishes annual national medians as a baseline; your local funeral home has real
          current pricing for {displayName}. Size coverage to the actual service your family
          wants — an agent helps nail down the number.
        </p>

        <h2 id="how-it-works" className="mt-14 scroll-mt-24 font-display text-2xl font-extrabold text-harbor">
          How it works
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Pick a coverage amount, answer health questions (or skip them with guaranteed issue),
          get approved, pay a fixed monthly premium for life. You pass away: beneficiary gets the
          full death benefit in cash, tax-free, usually within days. Spend it however — funeral,
          medical bills, anything. Not locked to one provider like a prepaid plan.
        </p>

        <h2 id="policy-types" className="mt-14 scroll-mt-24 font-display text-2xl font-extrabold text-harbor">
          Policy types available
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Nearly every {displayName} policy is one of these two. Neither wins outright — depends
          on health and how fast you need full coverage active.
        </p>
        <PolicyTypesTable />
        <p className="mt-4 text-sm leading-relaxed text-charcoal/60">
          Exact carriers/pricing in {displayName} vary — an agent gives you the real number, free.
        </p>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Simplified issue, health answers clear: full coverage day one. Guaranteed issue skips
          health questions, adds a 2-year wait — natural-cause death in that window typically
          refunds premiums instead of the full benefit (accidental death pays immediately either
          way). Wait ends: full lifetime coverage.
        </p>

        <h2 id="regulations" className="mt-14 scroll-mt-24 font-display text-2xl font-extrabold text-harbor">
          Final expense insurance regulations in {state.name}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          {isDC ? "D.C." : state.name}, like every state, controls which carriers/policies sell to
          residents through its own Department of Insurance. Agents need a state-specific license.
          Carriers need forms/rates approved before selling here. Policies include a free-look
          period — typically 10-30 days, state-dependent — full refund if you cancel in that
          window; check your paperwork for the exact number. Not every nationally-sold plan is
          approved for {displayName} — a licensed agent only shows what's actually cleared.
        </p>

        <h2 id="burial-laws" className="mt-14 scroll-mt-24 font-display text-2xl font-extrabold text-harbor">
          Funeral and burial laws in {state.name}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          State-regulated too. Generally: state law sets who decides funeral/burial arrangements
          (spouse or next of kin by default, unless someone else is named), requires funeral home
          licensing, sets price-disclosure rules. Specifics vary by state — talk to a local
          funeral home or elder law attorney for exact details. Final expense insurance just makes
          sure the money's there, regardless of how those decisions land.
        </p>

        <h2 className="mt-14 font-display text-2xl font-extrabold text-harbor">
          What drives your rate
        </h2>
        <CostFactorsGrid />

        <h2 id="regions" className="mt-14 scroll-mt-24 font-display text-2xl font-extrabold text-harbor">
          Regions and major metros in {state.name}
        </h2>
        {isDC ? (
          <p className="mt-4 text-base leading-relaxed text-charcoal/80">
            No counties or regions — D.C. is one jurisdiction. Coverage works identically
            everywhere in the District.
          </p>
        ) : (
          <>
            <p className="mt-4 text-base leading-relaxed text-charcoal/80">
              Agents and carriers cover all of {state.name}, capital included, plus major metros:
            </p>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-mist">
              <table className="w-full min-w-[420px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-mist bg-canvas-alt">
                    <th className="px-5 py-3.5 text-sm font-semibold text-charcoal/60">Area</th>
                    <th className="px-5 py-3.5 font-display text-sm font-extrabold text-harbor">City</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-mist">
                    <td className="px-5 py-4 text-sm font-semibold text-charcoal/70">State capital</td>
                    <td className="px-5 py-4 text-sm text-charcoal">{facts.capital}</td>
                  </tr>
                  {facts.metros.map((metro, i) => (
                    <tr key={metro} className={i < facts.metros.length - 1 ? "border-b border-mist" : ""}>
                      <td className="px-5 py-4 text-sm font-semibold text-charcoal/70">Major metro</td>
                      <td className="px-5 py-4 text-sm text-charcoal">{metro}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        <h2 id="counties" className="mt-14 scroll-mt-24 font-display text-2xl font-extrabold text-harbor">
          Counties we cover in {state.name}
        </h2>
        {isDC ? (
          <p className="mt-4 text-base leading-relaxed text-charcoal/80">
            No county subdivisions — D.C. is a single federal district, covered uniformly.
          </p>
        ) : (
          <>
            <p className="mt-4 text-base leading-relaxed text-charcoal/80">
              Not just big cities — every {countyTermFor(state.code).singular} in {state.name} is
              covered, all {STATE_COUNTIES[state.code]?.length ?? 0} of them:
            </p>
            <div className="mt-6 columns-2 gap-x-6 sm:columns-3 lg:columns-4">
              {(STATE_COUNTIES[state.code] ?? []).map((county) => (
                <p key={county} className="break-inside-avoid py-1 text-sm text-charcoal/75">
                  {county}
                </p>
              ))}
            </div>
          </>
        )}

        <h2 id="veterans" className="mt-14 scroll-mt-24 font-display text-2xl font-extrabold text-harbor">
          Veterans&apos; burial benefits
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Veterans (often spouses too) may qualify for federal VA burial benefits — allowance,
          sometimes a national-cemetery plot — regardless of state. Final expense insurance is
          separate, typically covering what VA benefits don't: a service, viewing, extra headstone
          cost. An agent can map out how the two work together.
        </p>

        <h2 id="faq" className="mt-14 scroll-mt-24 font-display text-2xl font-extrabold text-harbor">
          FAQ
        </h2>
        <div className="mt-6 space-y-3">
          {faqs.map((item) => (
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
          <h2 className="font-display text-xl font-extrabold text-harbor">
            Why we run multiple carriers in {displayName}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-charcoal/80">
            {siteConfig.name} runs multi-carrier comparisons for {displayName} residents — real
            side-by-side options, not one company's product pushed regardless of fit.
          </p>
        </div>

        <div className="mt-14 text-center">
          <Button as="link" href={`/get-quote?state=${state.code}`} size="lg">
            See what you qualify for in {state.name}
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            <Link href="/coverage-by-state" className="font-semibold text-harbor-mid hover:underline">
              ← See all states
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
