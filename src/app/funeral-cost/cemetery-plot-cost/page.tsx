import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Cemetery Plot Cost: The Fast Breakdown",
  description:
    "A fast breakdown of what drives cemetery plot pricing — location, cemetery type, and fees like perpetual care — and how to get a real number quickly.",
  openGraph: { title: "Cemetery Plot Cost: The Fast Breakdown", description: "A fast breakdown of what drives cemetery plot pricing — location, cemetery type, and fees like perpetual care — and how to get a real number quickly." },

  twitter: { title: "Cemetery Plot Cost: The Fast Breakdown", description: "A fast breakdown of what drives cemetery plot pricing — location, cemetery type, and fees like perpetual care — and how to get a real number quickly." },
};

export default function CemeteryPlotCostPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/funeral-cost" className="hover:text-harbor">Funeral Cost</Link> / Cemetery Plot Cost
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Cemetery plot cost: the fast breakdown
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Priced entirely separately from the funeral home, by a different business with its own
          rules. Fast rundown of what moves plot price, so you know exactly what to ask.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Location is the #1 factor
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Follows real estate logic. Land near a metro area costs more than rural land — shows up
          directly in plot prices. Same city, different cemetery: an older one low on space can
          price very differently than a newer one with room to spare.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Public, religious, private — different pricing models
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Municipal cemeteries sometimes offer lower resident rates. Religious or fraternal
          cemeteries may reserve space at their own rate. Private cemeteries set market pricing
          and often tier by section — mature trees or a premium path location cost more, same as
          any real estate market.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What you're actually buying
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          An interment right — permission to use that space — not land ownership. Separate cost:
          nearly every cemetery charges opening-and-closing for the physical digging work. Easy to
          forget, budget for it specifically.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Perpetual care — ask directly, fast
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Many cemeteries fold in or separately bill a perpetual/endowment care fee funding
          ongoing maintenance. Some states require it. Folded in or separate? Ask — common
          confusion point when comparing quotes.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold text-harbor">Get the full number</p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            Nothing's standardized — call cemeteries directly, ask specifically whether opening,
            closing, and perpetual care are included or extra. That full total is what to size
            coverage against.
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
