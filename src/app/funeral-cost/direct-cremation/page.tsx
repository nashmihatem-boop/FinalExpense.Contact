import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Direct Cremation: The Fast, Affordable Option",
  description:
    "A fast breakdown of how direct cremation works, why it's the least expensive disposition option, and how to pair it with a memorial on your own schedule.",
  openGraph: { title: "Direct Cremation: The Fast, Affordable Option", description: "A fast breakdown of how direct cremation works, why it's the least expensive disposition option, and how to pair it with a memorial on your own schedule." },

  twitter: { title: "Direct Cremation: The Fast, Affordable Option", description: "A fast breakdown of how direct cremation works, why it's the least expensive disposition option, and how to pair it with a memorial on your own schedule." },
};

export default function DirectCremationPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/funeral-cost" className="hover:text-harbor">Funeral Cost</Link> / Direct Cremation
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Direct cremation: the fast, affordable option
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          A defined, well-understood choice: cremation, no viewing or service first. Generally
          the simplest and cheapest option — because of what's left out, not because anything's
          rushed. Fast version: what's included, why it costs less, how to add a memorial later.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Included vs. not included
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Provider transports, files permits, performs cremation, returns remains — usually in a
          basic container unless you choose an urn. Not included: embalming, viewing, formal
          casket. A simpler alternative container is used instead.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Why it's cheaper
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Fewer line items — no embalming, no casket purchase, no staffed viewing time. Still
          varies by provider and region though, so get an itemized quote instead of assuming a
          number.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Add a memorial on your own timeline
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Direct cremation doesn't mean skipping a gathering — it separates disposition from
          service. Hold a memorial later, wherever it means something: backyard, place of
          worship, favorite spot. More time for out-of-town family to travel in, and you shape the
          format instead of following a fixed one.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold text-harbor">Simplest option, not the only one</p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            Not right for every family — some traditions call for a viewing first. Different cost
            profile entirely; see how{" "}
            <Link href="/funeral-cost/cremation-cost" className="font-semibold text-harbor-mid hover:underline">
              pricing shifts once a service is added
            </Link>
            .
          </p>
        </div>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Is it right for you
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Depends what matters most: lower cost and simplicity, or a traditional service with the
          body present first. Neither's more correct. Just make sure your coverage reflects
          whichever path you choose, and tell whoever's handling arrangements.
        </p>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            See what you qualify for
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            <Link href="/funeral-cost" className="font-semibold text-harbor-mid hover:underline">
              ← Back to the full guide
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
