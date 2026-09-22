import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Prepaid Plans vs. Final Expense Insurance: Side by Side",
  description:
    "A fast, side-by-side comparison of prepaid funeral plans and final expense insurance — how each works, and the tradeoffs that matter most.",
  openGraph: { title: "Prepaid Plans vs. Final Expense Insurance: Side by Side", description: "A fast, side-by-side comparison of prepaid funeral plans and final expense insurance — how each works, and the tradeoffs that matter most." },

  twitter: { title: "Prepaid Plans vs. Final Expense Insurance: Side by Side", description: "A fast, side-by-side comparison of prepaid funeral plans and final expense insurance — how each works, and the tradeoffs that matter most." },
};

export default function PrepaidFuneralPlansPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/funeral-cost" className="hover:text-harbor">Funeral Cost</Link> / Prepaid Plans vs. Insurance
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Prepaid plans vs. final expense insurance: side by side
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Two ways to plan ahead financially. Different mechanics, different tradeoffs. Here's the
          fast comparison.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Prepaid plan: how it works
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A contract with one specific funeral home. You pick services and merchandise, pay in
          advance — lump sum or installments. Funds typically go into a trust or fund a small
          policy/annuity earmarked for the plan; protections vary by state. Upside: decisions made,
          arrangement on file, price sometimes locked in.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Final expense insurance: how it works
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A life insurance policy. Pays a cash death benefit directly to your named beneficiary —
          not to a funeral home, not earmarked. Usable at any provider, any city, any combination of
          services. You set the amount upfront; it isn't tied to one provider's price list.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Prepaid plan: the tradeoffs
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Portability is the weak point. Tied to one funeral home — a move can make using funds
          elsewhere hard, sometimes impossible without a cooperating new provider. Funeral homes
          sell, merge, close; transfers usually happen but add delay and stress. Less flexibility:
          choices locked in at signing, sometimes decades early. Refund/cancellation terms vary a
          lot — read the contract, not just the pitch.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Insurance: the tradeoffs
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Cash payout depends on your beneficiary following through — no contract enforces the
          spending. Decisions aren't pre-made; your family still chooses services at the time,
          just without financial pressure. Ongoing premium instead of one payment, though final
          expense premiums are typically designed to stay level for life.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold text-harbor">Bottom line</p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            Neither wins outright. Some want flexibility and portability — insurance. Some want
            every decision made in advance — a prepaid plan. Some do both. Get a real itemized
            quote from a local provider first, then size whichever you pick to that number plus a
            cushion.
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
