import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "File a Death Benefit Claim: 5 Fast Steps",
  description:
    "The exact steps to file a death benefit claim fast — locate the policy, contact the carrier, complete the form, and submit.",
  openGraph: { title: "File a Death Benefit Claim: 5 Fast Steps", description: "The exact steps to file a death benefit claim fast — locate the policy, contact the carrier, complete the form, and submit." },

  twitter: { title: "File a Death Benefit Claim: 5 Fast Steps", description: "The exact steps to file a death benefit claim fast — locate the policy, contact the carrier, complete the form, and submit." },
};

export default function HowToFileAClaimPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/managing-your-policy" className="hover:text-harbor">Managing Your Policy</Link> / How to File a Claim
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          File a death benefit claim: 5 fast steps
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          If you're here because you've lost someone, we're sorry. This is more paperwork than
          complexity — here are the 5 steps, straight through, so nothing catches you off guard.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          1. Locate the policy
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Find the policy document, declarations page, or a recent premium statement — carrier
          name and policy number speed everything up. Nothing to find? Our{" "}
          <Link href="/managing-your-policy/find-a-lost-policy" className="text-harbor-mid underline">
            guide to finding a lost policy
          </Link>{" "}
          covers where else to look, fast.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          2. Call the carrier
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Call the claims department directly, state you need to file a death benefit claim.
          Policy number speeds it up, but most carriers can still search by name and date of
          birth if you don't have it.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          3. Complete the claim form, fully
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Carrier sends their specific form — mail or download. Covers info on the deceased,
          beneficiary contact and ID details, and payout preference. Fill every field —
          incomplete forms are the #1 reason this takes longer than it should.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          4. Get a certified death certificate
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Certified copy required — official raised seal, not a photocopy. Funeral homes usually
          help order these. Get several copies up front; banks, other policies, and the estate
          each typically want their own original.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          5. Submit and respond fast to follow-ups
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Carrier reviews before paying out. Expect possible follow-up questions, especially if
          the policy's still in its{" "}
          <Link href="/managing-your-policy/contestability-period" className="text-harbor-mid underline">
            contestability period
          </Link>{" "}
          or cause of death needs clarifying. Fast responses keep it moving.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">Can't find the policy?</p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            Doesn't mean it's not there. See our{" "}
            <Link href="/managing-your-policy/find-a-lost-policy" className="text-harbor-mid underline">
              guide to finding a lost policy
            </Link>{" "}
            for the fastest next moves.
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
