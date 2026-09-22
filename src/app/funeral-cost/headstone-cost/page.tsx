import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Headstone Cost: Fast Factor Breakdown",
  description:
    "A fast breakdown of how material, size, and engraving drive headstone and grave marker pricing, and how to get an accurate quote quickly.",
  openGraph: { title: "Headstone Cost: Fast Factor Breakdown", description: "A fast breakdown of how material, size, and engraving drive headstone and grave marker pricing, and how to get an accurate quote quickly." },

  twitter: { title: "Headstone Cost: Fast Factor Breakdown", description: "A fast breakdown of how material, size, and engraving drive headstone and grave marker pricing, and how to get an accurate quote quickly." },
};

export default function HeadstoneCostPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/funeral-cost" className="hover:text-harbor">Funeral Cost</Link> / Headstone Cost
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Headstone cost: fast factor breakdown
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Not standardized — set by individual monument companies based on a few factors worth
          knowing before you compare quotes.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Material drives it
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Granite's the modern standard, priced by grade and stone amount. Bronze priced by
          casting weight and detail plus base. Smaller flat markers or temporary ones cost less
          than large upright monuments. No objectively "better" choice — preference and cemetery
          rules decide.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Size and shape move price
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Flat markers cost less than upright — less material, smaller foundation. Companion
          markers (two plots) cost more than one, less than two separate purchases later. Custom
          shapes need more material and fabrication time.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Engraving scales with detail
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Name and dates cost less than a verse or detailed design. Leaving space for a second
          name (common for spouses) is cheaper now than engraving later separately. Custom
          artwork or a portrait costs significantly more in labor than a catalog emblem.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Cemetery rules can limit choices
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Many newer "memorial garden" sections allow flat markers only, no uprights. Some require
          ordering through an approved company list. Check cemetery rules before settling on a
          marker.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold text-harbor">Get a fast, real quote</p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            Ask exactly what's included — marker, engraving, and installation are sometimes
            bundled, sometimes separate. Get the real number before deciding coverage, with room
            to spare.
          </p>
        </div>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            See what you qualify for
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            <Link href="/funeral-cost" className="font-semibold text-harbor-mid hover:underline">
              ← Back to the funeral cost guide
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
