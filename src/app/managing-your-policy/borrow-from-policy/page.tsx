import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Policy Loans: The Fast Version",
  description:
    "A fast rundown of how a policy loan against cash value works, and exactly what an unpaid loan does to your death benefit.",
  openGraph: { title: "Policy Loans: The Fast Version", description: "A fast rundown of how a policy loan against cash value works, and exactly what an unpaid loan does to your death benefit." },

  twitter: { title: "Policy Loans: The Fast Version", description: "A fast rundown of how a policy loan against cash value works, and exactly what an unpaid loan does to your death benefit." },
};

export default function BorrowFromPolicyPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/managing-your-policy" className="hover:text-harbor">Managing Your Policy</Link> / Borrowing Against Your Policy
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Policy loans: the fast version
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Final expense policies are whole life, meaning they build cash value alongside the
          death benefit. Once your policy's been active a while, borrowing against that value is
          usually on the table — different rules than a bank loan, quick version below.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What cash value actually is
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A separate pool that builds slowly inside your whole life policy — not the death
          benefit, and not available day one. It grows as premiums get paid, faster the longer
          the policy's been active. You can only borrow what's actually built up, not the full
          coverage amount, so a newer policy might have little or nothing to draw on yet.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          How the loan works
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          You're borrowing against money that's already yours, so there's typically no credit
          check, no approval process. Interest accrues at your carrier's set rate, and there's
          usually no fixed repayment schedule — pay it back on your timeline, or don't. Flexible,
          but with one real tradeoff.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What an unpaid loan costs you
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Any balance plus accrued interest gets subtracted from the death benefit when a claim
          finally pays — so an unpaid loan directly shrinks what your beneficiary gets. Let it
          grow enough to catch up with total cash value, and the policy can lapse entirely,
          ending coverage. Treat it seriously, not as free money.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">Before you borrow</p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            Ask your carrier: current cash value, interest rate, how interest accrues, and exactly
            what an unpaid balance does to your death benefit long-term. Your latest in-force
            illustration or annual statement has the real numbers, fast.
          </p>
        </div>

        <div className="mt-14 text-center">
          <Button as="link" href={siteConfig.supportPhoneHref} variant="outline" size="lg">
            Call {siteConfig.supportPhoneDisplay}
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            <Link href="/managing-your-policy" className="font-semibold text-harbor-mid hover:underline">
              ← Back to Managing Your Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
