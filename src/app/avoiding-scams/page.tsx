import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Avoiding Final Expense Scams: A Fast Reference Guide",
  description:
    "Compare the six specific scam patterns to watch for when shopping for final expense insurance, so you can move fast without moving carelessly.",
  openGraph: { title: "Avoiding Final Expense Scams: A Fast Reference Guide", description: "Compare the six specific scam patterns to watch for when shopping for final expense insurance, so you can move fast without moving carelessly." },

  twitter: { title: "Avoiding Final Expense Scams: A Fast Reference Guide", description: "Compare the six specific scam patterns to watch for when shopping for final expense insurance, so you can move fast without moving carelessly." },
};

const TOPICS = [
  {
    title: "Confirm a company is legit — in under 5 minutes",
    description:
      "The fast, free way to check a carrier's and agent's state license before you compare anything else.",
    href: "/avoiding-scams/verify-a-company-is-legitimate",
  },
  {
    title: "Decode the ad before you click",
    description:
      "What “as low as” and “no medical exam” actually mean, so you're comparing real numbers, not headlines.",
    href: "/avoiding-scams/truth-about-insurance-ads",
  },
  {
    title: "Real call vs. scam call, side by side",
    description:
      "The exact tells that separate a licensed agent from someone trying to rush your decision.",
    href: "/avoiding-scams/scam-calls-targeting-seniors",
  },
  {
    title: "Captive, independent, or direct — know which one you're getting",
    description:
      "A quick, no-spin comparison of the three ways to buy, so you know exactly who's on your side of the table.",
    href: "/avoiding-scams/independent-vs-captive-vs-direct",
  },
  {
    title: "Don't get talked into a swap you don't need",
    description:
      "What replacing a policy you already own can quietly cost you, and how to compare before you sign.",
    href: "/avoiding-scams/policy-churning",
  },
  {
    title: "Spot agent fraud before it costs you anything",
    description:
      "The specific red flags that mean an agent isn't working in your interest — and your next move.",
    href: "/avoiding-scams/agent-fraud",
  },
];

export default function AvoidingScamsPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/" className="hover:text-harbor">Home</Link> / Avoiding Scams
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Avoiding final expense scams: a fast reference guide
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          You're comparing options fast, which is exactly the right move — but speed and caution
          aren't actually in tension here. Final expense insurance tends to be bought later in
          life, often on a tight timeline, and that combination of urgency and unfamiliarity is
          precisely what a small number of bad actors are counting on. This page is built to be
          scanned quickly: six specific patterns, laid out clearly, so you can compare your options
          with confidence instead of slowing down out of uncertainty.
        </p>

        <h2 className="mt-14 font-display text-2xl font-extrabold text-harbor">
          Why scammers target this market specifically
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Three things line up here: buyers skew older, a lot of shopping still happens by phone
          or mail instead of face to face, and decisions sometimes get made solo, without another
          set of eyes comparing the offer. None of that means most buyers are easy targets, and it
          definitely doesn't mean most agents are anything but legitimate, licensed
          professionals — that describes the overwhelming majority of this industry. But wherever
          urgency and unfamiliarity line up, a specific kind of bad actor shows up to exploit the
          gap between them, betting that you won't stop to compare. Knowing the pattern in advance
          is the fastest way to shut that down.
        </p>

        <h2 className="mt-14 font-display text-2xl font-extrabold text-harbor">
          The upside: this market is genuinely regulated
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Insurance sits under some of the tightest consumer regulation that exists. Every company
          and every individual agent needs an active state license to legally sell you anything —
          and checking that license costs you nothing and takes only a couple of minutes. This
          isn't a workaround or a power move; it's simply how the system is built to work, for
          every buyer comparing every agency, this one included.
        </p>

        <h2 className="mt-14 font-display text-2xl font-extrabold text-harbor">
          Six quick comparisons before you buy
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Each topic below is scoped to be a fast read — no special expertise required, just a
          quick pass through what to check before you commit to anything.
        </p>
        {TOPICS.map((topic) => (
          <div key={topic.href} className="mt-8">
            <h3 className="font-display text-lg font-extrabold text-harbor">{topic.title}</h3>
            <p className="mt-2 text-base leading-relaxed text-charcoal/80">{topic.description}</p>
            <Link href={topic.href} className="mt-2 inline-block text-sm font-semibold text-harbor-mid hover:underline">
              Read the full guide →
            </Link>
          </div>
        ))}

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            See what you qualify for
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            <Link href="/" className="font-semibold text-harbor-mid hover:underline">
              ← Back to Home
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
