import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Claim Payout Speed: What Actually Moves the Needle",
  description:
    "A fast breakdown of exactly what speeds up or slows down a death benefit claim payout, and what you can control.",
  openGraph: { title: "Claim Payout Speed: What Actually Moves the Needle", description: "A fast breakdown of exactly what speeds up or slows down a death benefit claim payout, and what you can control." },

  twitter: { title: "Claim Payout Speed: What Actually Moves the Needle", description: "A fast breakdown of exactly what speeds up or slows down a death benefit claim payout, and what you can control." },
};

export default function HowLongAClaimTakesToPayPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/managing-your-policy" className="hover:text-harbor">Managing Your Policy</Link> / How Long a Claim Takes to Pay
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Claim payout speed: what actually moves the needle
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          No single number applies — timelines shift by carrier and by the specific claim. More
          useful: knowing exactly what speeds things up or slows them down, so you know what's
          normal versus what's worth a quick follow-up.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Why there's no fixed timeline
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Every carrier sets its own claims-processing timeline, and a clean claim moves faster
          than one with complications. Skip the industry averages — ask your specific carrier
          what their typical timeline looks like once a complete claim is received. That's the
          number that actually matters.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Complete paperwork is your biggest lever
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Incomplete paperwork — a missing signature, an uncertified death certificate, a partly
          blank form — is the single most common reason a simple claim takes longer than it
          should. Double-check everything before submitting; it's the one variable fully in your
          control.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Contestability period adds review time
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Death within a policy's first two years means carriers typically take a closer look to
          confirm the original application — standard, not a red flag. See our{" "}
          <Link href="/managing-your-policy/contestability-period" className="text-harbor-mid underline">
            contestability period guide
          </Link>{" "}
          for the fast version of how that review works.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Unclear cause of death
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          An unusual cause — pending autopsy or official investigation — extends the timeline
          while the carrier waits on records from a coroner or medical examiner. Outside your
          control, and it takes as long as it takes.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">Speed it up</p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            Order extra certified death certificate copies upfront, respond fast to any carrier
            request, keep copies of everything, and follow up periodically instead of assuming
            silence is a problem.
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
