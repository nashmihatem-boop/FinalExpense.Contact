import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Canceling a Policy: Check These 3 Things First",
  description:
    "A fast checklist for canceling a life insurance policy — what happens to cash value, what fees might apply, and the one question to ask before you switch.",
  openGraph: { title: "Canceling a Policy: Check These 3 Things First", description: "A fast checklist for canceling a life insurance policy — what happens to cash value, what fees might apply, and the one question to ask before you switch." },

  twitter: { title: "Canceling a Policy: Check These 3 Things First", description: "A fast checklist for canceling a life insurance policy — what happens to cash value, what fees might apply, and the one question to ask before you switch." },
};

export default function CancelPolicyPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/managing-your-policy" className="hover:text-harbor">Managing Your Policy</Link> / Cancel a Policy
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Canceling a policy: check these 3 things first
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Canceling can absolutely be the right move. But since life insurance pricing tracks age
          closely, run through these fast before you pull the trigger — otherwise canceling can
          quietly cost more than it saves.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          How it actually works
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Contact your carrier and request it — in writing or by phone. If your policy has cash
          value, this step is usually called "surrendering" instead. Either way, coverage stops
          on a set date, and you owe nothing after.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Check 1: what happens to cash value
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A whole life policy with built cash value typically pays that out when you surrender —
          minus anything owed, including an outstanding{" "}
          <Link href="/managing-your-policy/borrow-from-policy" className="text-harbor-mid underline">
            policy loan
          </Link>
          . Term policies usually have none to receive. Surrendered cash value can carry tax
          implications, so confirm specifics with your carrier or a tax pro before finalizing.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Check 2: fees and confirmation
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Ask if any balance or fee applies to canceling, and get the cancellation confirmed in
          writing or email — no ambiguity later about the effective date. If someone else — a
          spouse or family member — is counting on this policy in their own planning, loop them
          in before you cancel.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">Check 3: the big one</p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            Pricing is usually set by your age (and sometimes health) at application time, so a
            new policy taken out later almost always costs more than this one, even with
            unchanged health. Replacing this policy? Line up and confirm the new one first — never
            cancel before the replacement is locked in.
          </p>
        </div>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            See what you qualify for
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            Questions first?{" "}
            <a href={siteConfig.supportPhoneHref} className="font-semibold text-harbor-mid hover:underline">
              Call {siteConfig.supportPhoneDisplay}
            </a>
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
