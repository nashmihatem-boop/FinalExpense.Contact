import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Casket Cost Compared: Material and Rights",
  description:
    "A fast comparison of what drives casket prices — material and craftsmanship — plus your legal right to buy one from outside the funeral home.",
  openGraph: { title: "Casket Cost Compared: Material and Rights", description: "A fast comparison of what drives casket prices — material and craftsmanship — plus your legal right to buy one from outside the funeral home." },

  twitter: { title: "Casket Cost Compared: Material and Rights", description: "A fast comparison of what drives casket prices — material and craftsmanship — plus your legal right to buy one from outside the funeral home." },
};

export default function CasketCostPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/funeral-cost" className="hover:text-harbor">Funeral Cost</Link> / Casket Cost
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Casket cost compared: material and rights
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Caskets span a huge price range, and it comes down to a short list of factors — mainly
          material and craftsmanship. You've also got more control over this cost than most
          realize, thanks to a federal rule worth knowing before you shop.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Material drives price
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Solid hardwoods and heavier metals (bronze, copper) sit at the top. Lighter steel and
          veneered wood sit in the middle. Cloth-covered wood, fiberboard, and other minimalist
          options sit at the low end — fully appropriate choices, not a downgrade.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Craftsmanship and finish
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Priced like furniture beyond raw material — interior fabric, hardware, joinery, finish
          work all add cost as detail and labor scale up. Same base material, very different price
          points once craftsmanship is factored in.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Your legal right to buy elsewhere
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Under the FTC Funeral Rule, you can buy a casket from a third party — including
          online — instead of only through the funeral home. They have to accept it, no handling
          fee allowed. If you want to control this cost directly, that right matters.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold text-harbor">The rule, fast</p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            Funeral home must accept an outside casket, no fee added. Quoted a "casket handling
            charge" anyway? Question it — not allowed under the rule.
          </p>
        </div>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Renting for a viewing before cremation
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Want a viewing before{" "}
          <Link href="/funeral-cost/direct-cremation" className="font-semibold text-harbor-mid hover:underline">
            cremation
          </Link>{" "}
          without buying a casket outright? Rental caskets exist for exactly this, paired with a
          separate cremation container. Worth asking about.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Getting a real number, fast
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Material, craftsmanship, and regional pricing all move independently — only an accurate
          number comes from a direct quote, provider or third-party seller, for your specific
          casket. Once you have that figure, size your final expense policy around it with room to
          spare.
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
