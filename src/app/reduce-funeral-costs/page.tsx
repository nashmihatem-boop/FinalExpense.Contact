import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "How to Reduce Funeral Costs: Fast Checklist",
  description:
    "Fast checklist for cutting funeral costs — your FTC Funeral Rule rights, the biggest cost lever, and veteran benefits most families miss.",
  openGraph: { title: "How to Reduce Funeral Costs: Fast Checklist", description: "Fast checklist for cutting funeral costs — your FTC Funeral Rule rights, the biggest cost lever, and veteran benefits most families miss." },

  twitter: { title: "How to Reduce Funeral Costs: Fast Checklist", description: "Fast checklist for cutting funeral costs — your FTC Funeral Rule rights, the biggest cost lever, and veteran benefits most families miss." },
};

export default function ReduceFuneralCostsPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <h1 className="font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          How to reduce funeral costs: fast checklist
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          A respectful send-off doesn't require an inflated bill. A handful of decisions, made with
          the right information, cut the total significantly.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Know your legal rights first
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Federal law (the FTC Funeral Rule) covers every funeral home in the country. You get an
          itemized price list before agreeing to anything. You pick only what you want — no forced
          bundling. Bring your own casket or urn, and they can't charge a handling fee for it.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          The lever that moves cost the most
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Traditional funeral vs.{" "}
          <Link href="/traditional-funeral-vs-direct-burial" className="font-semibold text-harbor-mid hover:underline">
            direct cremation or direct burial
          </Link>{" "}
          — this single choice changes the total more than anything else. Skip embalming, skip the
          viewing, skip the elaborate service: cost drops fast, and a real memorial can still
          happen later, on your own schedule.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Other quick wins
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Third-party casket retailer instead of the funeral home markup: often the same product,
          lower price. Small private gathering now, bigger celebration of life later: separates
          urgent logistics from the gathering people actually want. Served in the military? Check{" "}
          <Link href="/coverage-by-state" className="font-semibold text-harbor-mid hover:underline">
            your state's veteran burial benefits
          </Link>{" "}
          — often covers a real chunk of the total.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Coverage still matters
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Even the leanest plan runs into{" "}
          <Link href="/hidden-costs-of-dying" className="font-semibold text-harbor-mid hover:underline">
            costs that show up later
          </Link>
          , past the funeral home's own invoice. A modest final expense policy covers what's left
          over — so nobody's scrambling to pay for it on short notice.
        </p>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            See what you qualify for
          </Button>
        </div>
      </div>
    </div>
  );
}
