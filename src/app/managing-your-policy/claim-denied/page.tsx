import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Claim Denied? Your Fast Next Steps",
  description:
    "A fast breakdown of why a death benefit claim gets denied, and every option you have next — appeal, state complaint, or attorney.",
  openGraph: { title: "Claim Denied? Your Fast Next Steps", description: "A fast breakdown of why a death benefit claim gets denied, and every option you have next — appeal, state complaint, or attorney." },

  twitter: { title: "Claim Denied? Your Fast Next Steps", description: "A fast breakdown of why a death benefit claim gets denied, and every option you have next — appeal, state complaint, or attorney." },
};

export default function ClaimDeniedPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/managing-your-policy" className="hover:text-harbor">Managing Your Policy</Link> / If a Claim Is Denied
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Claim denied? Your fast next steps
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Stressful, no question — but not necessarily final. Here's why denials happen, fast, and
          exactly what to do next.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Why denials happen
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Four patterns cover most cases. Misrepresentation on the application — an inaccurate
          health disclosure — usually only comes up during the{" "}
          <Link href="/managing-your-policy/contestability-period" className="text-harbor-mid underline">
            contestability period
          </Link>
          . A lapsed policy is another — missed payments past the{" "}
          <Link href="/managing-your-policy/missed-premium-payment" className="text-harbor-mid underline">
            grace period
          </Link>{" "}
          without reinstatement means coverage may not have been active at death. A natural-cause
          death during a guaranteed-acceptance waiting period usually means a reduced payout, not
          a full denial — that's how those policies work. Rarely, it's a specifically excluded
          cause of death.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Step 1: get the reason in writing
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Carriers should give a specific written reason. Got a phone call or vague explanation
          instead? Request it in writing — the exact reason determines your fastest next move.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Step 2: appeal
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Most carriers run an internal appeals process. Have documentation addressing their
          stated reason directly — medical records clarifying a timeline, proof a payment went
          through? Submit it as a formal appeal first.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Step 3: your state insurance department
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Every state has a regulator built to handle exactly this. They can check whether the
          denial followed proper process and push toward resolution. Filing is free.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Step 4: an attorney, for bigger disputes
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Large benefit amount, or a denial that contradicts the actual policy language? An
          insurance-dispute attorney can review both and advise fast on whether to contest
          further. Many offer a free first consultation.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">Keep it organized</p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            Original application, the policy, the denial letter, every piece of correspondence —
            all strengthen an appeal. Keep dated copies of everything, phone notes included.
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
