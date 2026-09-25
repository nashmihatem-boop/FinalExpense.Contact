import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SafeLink } from "@/components/safe-link";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contestability Period: The 2-Year Rule, Fast",
  description:
    "A fast explanation of the standard two-year contestability period, why carriers use it, and how it's different from a graded or modified waiting period.",
  openGraph: { title: "Contestability Period: The 2-Year Rule, Fast", description: "A fast explanation of the standard two-year contestability period, why carriers use it, and how it's different from a graded or modified waiting period." },

  twitter: { title: "Contestability Period: The 2-Year Rule, Fast", description: "A fast explanation of the standard two-year contestability period, why carriers use it, and how it's different from a graded or modified waiting period." },
};

export default function ContestabilityPeriodPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/managing-your-policy" className="hover:text-harbor">Managing Your Policy</Link> / The Contestability Period
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Contestability period: the 2-year rule, fast
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          "Two years" gets used for a few different things in life insurance. This is one
          specific version, standard industry-wide, nothing alarming — just worth knowing exactly
          what it covers.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          The quick definition
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A standard window — typically the policy's first two years — where the carrier can
          review a claim closely to confirm the original application was accurate before paying
          it. After that window, the policy is generally settled on those grounds, with fraud as
          the one lasting exception. Confirm exact terms with your carrier since specifics vary.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Why it exists
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          It protects the pricing structure that keeps this coverage affordable. If someone
          misstated their health to qualify, this window is the carrier's chance to catch it
          before a large payout — which keeps rates fair for everyone who answered honestly.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What triggers extra review
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A death within this window, especially tied to an undisclosed health condition, usually
          prompts a closer look. That's not a denial — just the carrier confirming the
          application matches medical and prescription records before releasing payment.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Not the same as a graded or modified wait
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          These two get confused constantly — quick side-by-side.
        </p>
        <div className="mt-6 overflow-x-auto rounded-2xl border border-mist">
          <table className="w-full min-w-[480px] border-collapse text-left">
            <thead>
              <tr className="border-b border-mist bg-canvas-alt">
                <th className="px-5 py-3.5 text-sm font-semibold text-charcoal/60">Concept</th>
                <th className="px-5 py-3.5 font-display text-sm font-extrabold text-harbor">What it governs</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-mist">
                <td className="px-5 py-4 text-sm font-semibold text-charcoal/70">Contestability period</td>
                <td className="px-5 py-4 text-sm text-charcoal">
                  The carrier&apos;s right to review a claim for misrepresentation. Applies broadly, regardless of underwriting type.
                </td>
              </tr>
              <tr>
                <td className="px-5 py-4 text-sm font-semibold text-charcoal/70">Graded, modified, or guaranteed-acceptance wait</td>
                <td className="px-5 py-4 text-sm text-charcoal">
                  How much of the death benefit is paid for a natural-cause death in the early years, set at the time you&apos;re underwritten.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Health condition part of the mix? Our{" "}
          <Link href="/pre-existing-conditions" className="text-harbor-mid underline">
            pre-existing conditions guide
          </Link>{" "}
          breaks down graded and modified schedules fast.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">Mistakes vs. misrepresentation</p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            A review here targets misrepresentation that would've actually changed the
            underwriting call — not minor paperwork slips. Past your second anniversary? This
            isn't something to worry about anymore.
          </p>
        </div>

        <div className="mt-14 text-center">
          <Button as="link" href={siteConfig.supportPhoneHref} variant="outline" size="lg">
            Call {siteConfig.supportPhoneDisplay}
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            Shopping for a new policy?{" "}
            <SafeLink href="/get-quote" className="font-semibold text-harbor-mid hover:underline">
              See what you qualify for →
            </SafeLink>
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
