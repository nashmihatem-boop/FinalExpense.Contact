import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Funeral Financial Assistance: Fast Options Compared",
  description:
    "A fast comparison of every real option when a family can't cover a funeral — crime victim funds, crowdfunding, payment plans, Social Security — and why coverage beats all of them.",
  openGraph: { title: "Funeral Financial Assistance: Fast Options Compared", description: "A fast comparison of every real option when a family can't cover a funeral — crime victim funds, crowdfunding, payment plans, Social Security — and why coverage beats all of them." },

  twitter: { title: "Funeral Financial Assistance: Fast Options Compared", description: "A fast comparison of every real option when a family can't cover a funeral — crime victim funds, crowdfunding, payment plans, Social Security — and why coverage beats all of them." },
};

export default function FuneralFinancialAssistancePage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/funeral-cost" className="hover:text-harbor">Funeral Cost</Link> / Financial Assistance
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Funeral financial assistance: fast options compared
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Death without coverage in place means scrambling for a bill that can't wait. Real
          options exist, but they're slower and narrower than most expect. Fast comparison below —
          and why arranging coverage ahead beats every option here.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Crime victim / accidental death funds
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Every state runs a crime victim compensation program, usually covering funeral costs up
          to a limit for violent-crime deaths. Some extend to accidental deaths. Real, but
          limited: police report required, application window, claims process taking weeks to
          months. Built for specific cases, not general use.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Crowdfunding
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Fast to set up, unpredictable results. Platforms take a fee, amounts raised vary
          wildly, campaigns take days to gain traction — time you may not have with an immediate
          bill. Also means asking your network for money during an already hard week.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Funeral home payment plans
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Spreads cost over time, direct or third-party financed. Doesn't reduce the total, often
          adds interest. Fixes a timing problem, not a cost problem — full amount still owed, now
          with monthly payments during a hard stretch.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold text-harbor">Social Security lump sum</p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            One-time payment to certain eligible survivors, typically a living-with spouse. Real,
            federal, but intentionally small — never meant to cover a full funeral. Confirm current
            amount and eligibility with the Social Security Administration.
          </p>
        </div>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          The fast takeaway
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Pattern across all four: specific circumstances required, an application and a wait, or
          just delaying the bill rather than covering it. None reliable before you need it — all
          fallback options for no plan in place. Final expense insurance works differently:
          arranged ahead, pays directly to your named beneficiary, usually within days of an
          approved claim, no dependency on circumstances. That's the real advantage — the one
          option your family can count on regardless.
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
