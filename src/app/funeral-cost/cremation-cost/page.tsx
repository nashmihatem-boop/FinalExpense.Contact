import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Cremation Cost: Fast Factor Breakdown",
  description:
    "A fast breakdown of what actually moves cremation pricing — service type, urn choice, and provider — so you know what to ask before you call.",
  openGraph: { title: "Cremation Cost: Fast Factor Breakdown", description: "A fast breakdown of what actually moves cremation pricing — service type, urn choice, and provider — so you know what to ask before you call." },

  twitter: { title: "Cremation Cost: Fast Factor Breakdown", description: "A fast breakdown of what actually moves cremation pricing — service type, urn choice, and provider — so you know what to ask before you call." },
};

export default function CremationCostPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/funeral-cost" className="hover:text-harbor">Funeral Cost</Link> / Cremation Cost
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Cremation cost: fast factor breakdown
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Prices swing widely by provider and region — any single published number is close to
          useless. Faster and more useful: knowing exactly what pushes cremation toward the low
          end or the high end, so you know what to ask.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Direct cremation vs. viewing first
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Biggest factor, by far. Direct — no viewing, no service — sits at the low end: skips
          embalming, viewing-ready casket, staffed service time. Add a viewing or service, those
          costs come back. Want the simplest baseline? See{" "}
          <Link href="/funeral-cost/direct-cremation" className="font-semibold text-harbor-mid hover:underline">
            direct cremation
          </Link>{" "}
          on its own.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Urn choice
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Basic container's usually included, but a separate urn has its own range — material and
          craftsmanship drive it, same logic as{" "}
          <Link href="/funeral-cost/casket-cost" className="font-semibold text-harbor-mid hover:underline">
            casket pricing
          </Link>
          . Not limited to what the provider offers on-site either — outside urns work just fine.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Funeral home vs. standalone crematory
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Some funeral homes run their own crematory; many contract out. Want disposition only, no
          full-service extras? A cremation-focused provider is usually faster and cheaper.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Small add-ons that add up
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Easy to miss: extra death certificate copies, transportation if death happened
          elsewhere, permits, optional extras like keepsake jewelry or splitting remains.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold text-harbor">Get it in writing</p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            A reputable provider gives you an itemized list on request, before you commit.
            Compare against what you actually want, not a bundled package — fastest way to see
            where money's going.
          </p>
        </div>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          The number that matters: yours
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Every factor above moves differently by location — that's why no figure appears here.
          Call a provider or two, get an itemized quote, size coverage to that real number plus a
          cushion.
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
