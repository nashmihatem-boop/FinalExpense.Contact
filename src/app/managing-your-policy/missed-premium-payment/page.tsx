import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Missed a Payment? Fast Fix Inside",
  description:
    "A fast breakdown of how grace periods work, what happens if your policy lapses, and the quickest way to fix a missed payment.",
  openGraph: { title: "Missed a Payment? Fast Fix Inside", description: "A fast breakdown of how grace periods work, what happens if your policy lapses, and the quickest way to fix a missed payment." },

  twitter: { title: "Missed a Payment? Fast Fix Inside", description: "A fast breakdown of how grace periods work, what happens if your policy lapses, and the quickest way to fix a missed payment." },
};

export default function MissedPremiumPaymentPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/managing-your-policy" className="hover:text-harbor">Managing Your Policy</Link> / Missed Premium Payment
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Missed a payment? Fast fix inside
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Common, and rarely an emergency the second it happens. Policies build in a cushion for
          exactly this. Quick version of how it works, and what to do right now.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          The grace period
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Most policies include one, starting right after a missed due date — coverage generally
          stays fully active during it, even without payment yet. Exact length depends on policy
          and state; check your documents or ask your carrier directly rather than guessing.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Death during the grace period
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Coverage's generally still active, so a claim typically still pays. Outstanding premium
          usually just gets deducted from the death benefit instead of causing a denial. Confirm
          with your carrier — it's written into your specific policy terms.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Grace period expires, still no payment
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Policy generally lapses — coverage ends, premiums stop. Worth avoiding: a lapse can mean
          starting fresh on new coverage later, usually at a higher cost purely due to age.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Already lapsed? Here's the fast path
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Many carriers offer reinstatement within a set window — may require back payments, new
          health questions, or proof of insurability. Ask your carrier exactly what's required.
          Not an option, or health's changed enough that it doesn't make sense? A new policy may
          be the faster path forward.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">Prevent it next time</p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            Set up autopay, keep your payment method current after a card expires or account
            changes, and make sure your carrier has your current address and phone number. All
            three cut the odds of a slip-through fast.
          </p>
        </div>

        <div className="mt-14 text-center">
          <Button as="link" href={siteConfig.supportPhoneHref} variant="outline" size="lg">
            Call {siteConfig.supportPhoneDisplay}
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            Lapsed and reinstatement's not right?{" "}
            <Link href="/get-quote" className="font-semibold text-harbor-mid hover:underline">
              See what you qualify for →
            </Link>
          </p>
          <p className="mt-3 text-sm text-charcoal/60">
            <Link href="/managing-your-policy" className="font-semibold text-harbor-mid hover:underline">
              ← Back to Managing Your Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
