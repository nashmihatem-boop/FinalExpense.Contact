import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Beneficiary Died First? Here's What Happens Fast",
  description:
    "A fast rundown of what happens to a policy when a named beneficiary dies before you do, and the quick fix that prevents the whole problem.",
  openGraph: { title: "Beneficiary Died First? Here's What Happens Fast", description: "A fast rundown of what happens to a policy when a named beneficiary dies before you do, and the quick fix that prevents the whole problem." },

  twitter: { title: "Beneficiary Died First? Here's What Happens Fast", description: "A fast rundown of what happens to a policy when a named beneficiary dies before you do, and the quick fix that prevents the whole problem." },
};

export default function BeneficiaryDiesBeforeYouPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/managing-your-policy" className="hover:text-harbor">Managing Your Policy</Link> / If Your Beneficiary Dies Before You
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Beneficiary died first? Here's what happens fast
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          This happens more than you'd think, especially on older policies — a spouse or sibling
          named as beneficiary passes away, and the paperwork just never gets updated. Quick
          version of what that means, and the two-minute fix.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Nothing updates on its own
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Carriers don't remove a deceased beneficiary automatically. The policy keeps listing
          them until you actively change it — for years, if nobody catches it. Coverage itself
          isn't affected until a claim actually gets filed.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What happens if nobody updates it
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Named a contingent (backup) beneficiary when you applied? The benefit passes to them,
          no complications. Didn't name one, and your primary's already gone? The payout usually
          defaults to your estate instead — which means probate: slower, public record, and
          sometimes reachable by the estate's creditors before family sees a dime. Exact outcome
          depends on your policy and state, so confirm directly with your carrier rather than
          guess.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Why a backup beneficiary is worth the two minutes
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Free, fast, and it gives your policy a clear second choice if the first one's already
          gone. Simplest way to keep the payout headed to an actual person you picked instead of
          your estate by default.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">The fast check</p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            Call your carrier, ask who's listed as primary and contingent beneficiary right now.
            Costs nothing to check, even if you're sure it's fine. Not fine? Fixing it is a short
            form — see{" "}
            <Link href="/managing-your-policy/change-beneficiary" className="text-harbor-mid underline">
              how to change your beneficiary
            </Link>
            .
          </p>
        </div>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Other triggers worth a quick check
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A beneficiary's death isn't the only thing that goes stale. Divorce, remarriage, a new
          grandchild, or just drifting from whoever's currently listed are all common reasons to
          revisit it. Been a few years? Worth thirty seconds to confirm.
        </p>

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
