import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { CONDITIONS, TIER_INFO, COMMON_QUESTION_CATEGORIES, findCondition } from "@/lib/condition-facts";

export function generateStaticParams() {
  return CONDITIONS.map((c) => ({ condition: c.slug }));
}

export async function generateMetadata(props: PageProps<"/pre-existing-conditions/[condition]">): Promise<Metadata> {
  const { condition: slug } = await props.params;
  const condition = findCondition(slug);
  if (!condition) return {};
  const title = `${condition.name}: Final Expense Insurance Fast Facts`;
  const description = `Fast facts on how simplified-issue final expense insurance treats ${condition.name}, the likely tier, and how to get a quote.`;
  return {
    title,
    description,
    openGraph: { title, description },
    twitter: { title, description },
  };
}

export default async function ConditionPage(props: PageProps<"/pre-existing-conditions/[condition]">) {
  const { condition: slug } = await props.params;
  const condition = findCondition(slug);
  if (!condition) notFound();

  const tierInfo = TIER_INFO[condition.tier];
  const others = CONDITIONS.filter((c) => c.slug !== condition.slug).slice(0, 6);

  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/pre-existing-conditions" className="hover:text-harbor">Pre-Existing Conditions</Link> / {condition.name}
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          {condition.name}: final expense insurance fast facts
        </h1>

        <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-canvas-alt px-4 py-2">
          <span className="h-2 w-2 rounded-full bg-brass" />
          <span className="text-sm font-bold text-harbor">{tierInfo.label}</span>
        </div>

        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">{tierInfo.blurb}</p>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">{condition.note}</p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">Fine print</p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            General pattern, not a promise. Each carrier sets its own questions and look-back
            windows — same condition, different tier, different company. A decline at one carrier
            says nothing about your odds elsewhere.
          </p>
        </div>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Where {condition.name.toLowerCase()} typically lands
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Comes down to severity and timing, not the diagnosis alone:
        </p>
        <div className="mt-5 overflow-x-auto rounded-2xl border border-mist">
          <table className="w-full min-w-[480px] border-collapse text-left">
            <thead>
              <tr className="border-b border-mist bg-canvas-alt">
                <th className="px-5 py-3 text-sm font-semibold text-charcoal/60">Situation</th>
                <th className="px-5 py-3 font-display text-sm font-extrabold text-harbor">Typical outcome</th>
              </tr>
            </thead>
            <tbody>
              {condition.scenarios.map((s, i) => (
                <tr key={s.situation} className={i < condition.scenarios.length - 1 ? "border-b border-mist" : ""}>
                  <td className="px-5 py-3.5 text-sm text-charcoal align-top">{s.situation}</td>
                  <td className="px-5 py-3.5 text-sm font-semibold text-charcoal/80 align-top">{s.outcome}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          How underwriting works, fast
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Simplified issue: no exam. A short set of health questions instead, cross-checked
          against prescription history and the MIB (a shared industry database). Four possible
          outcomes: <strong className="text-harbor">level</strong> (full coverage, day one),{" "}
          <strong className="text-harbor">graded</strong> (partial, steps up over 2 years),{" "}
          <strong className="text-harbor">modified</strong> (premiums back plus interest during
          that window), or <strong className="text-harbor">decline</strong> → guaranteed
          acceptance instead. Full breakdown:{" "}
          <Link href="/pre-existing-conditions#tiers" className="text-harbor-mid underline">
            how tiering works
          </Link>
          .
        </p>

        <h3 className="mt-8 font-display text-lg font-extrabold text-harbor">
          What carriers ask about {condition.name.toLowerCase()}
        </h3>
        <div className="mt-4 overflow-x-auto rounded-2xl border border-mist">
          <table className="w-full min-w-[480px] border-collapse text-left">
            <thead>
              <tr className="border-b border-mist bg-canvas-alt">
                <th className="px-5 py-3 text-sm font-semibold text-charcoal/60">Question</th>
                <th className="px-5 py-3 font-display text-sm font-extrabold text-harbor">Why it's asked</th>
              </tr>
            </thead>
            <tbody>
              {COMMON_QUESTION_CATEGORIES.map((q, i) => (
                <tr key={q.question} className={i < COMMON_QUESTION_CATEGORIES.length - 1 ? "border-b border-mist" : ""}>
                  <td className="px-5 py-3.5 text-sm font-semibold text-charcoal/70 align-top">{q.question}</td>
                  <td className="px-5 py-3.5 text-sm text-charcoal/80 align-top">{q.why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-charcoal/60">
          Wording and look-back windows vary by carrier — general categories, not one company's
          exact application.
        </p>

        {condition.medications && condition.medications.length > 0 && (
          <>
            <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
              Medications to flag
            </h2>
            <p className="mt-4 text-base leading-relaxed text-charcoal/80">
              Carriers check prescriptions — what you take can matter as much as the diagnosis:
            </p>
            <div className="mt-5 space-y-3">
              {condition.medications.map((m) => (
                <div key={m.name} className="rounded-xl border border-mist bg-canvas-raised p-5">
                  <p className="font-display text-base font-extrabold text-harbor">{m.name}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-charcoal/75">{m.note}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-relaxed text-charcoal/60">
              Full breakdown:{" "}
              <Link href="/pre-existing-conditions/prescriptions" className="text-harbor-mid underline">
                prescription history guide
              </Link>
              .
            </p>
          </>
        )}

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Next step
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Fastest way to know your real tier: talk to a licensed agent who matches your history to
          the carriers whose rules fit it — instead of applying blind to one company. No cost to
          ask.
        </p>

        <div className="mt-10 text-center">
          <Button as="link" href="/get-quote" size="lg">
            See what you qualify for
          </Button>
        </div>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Other conditions
        </h2>
        <ul className="mt-4 grid gap-x-6 gap-y-2 sm:grid-cols-2">
          {others.map((c) => (
            <li key={c.slug}>
              <Link href={`/pre-existing-conditions/${c.slug}`} className="text-sm text-harbor-mid hover:underline">
                {c.name}
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-charcoal/60">
          <Link href="/pre-existing-conditions" className="font-semibold text-harbor-mid hover:underline">
            ← Full A–Z index
          </Link>
        </p>
      </div>
    </div>
  );
}
