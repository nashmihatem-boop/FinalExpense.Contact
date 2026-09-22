import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Change Your Beneficiary in Minutes",
  description:
    "A fast, no-nonsense guide to updating your policy's beneficiary, and the common triggers that mean it's time to check yours.",
  openGraph: { title: "Change Your Beneficiary in Minutes", description: "A fast, no-nonsense guide to updating your policy's beneficiary, and the common triggers that mean it's time to check yours." },

  twitter: { title: "Change Your Beneficiary in Minutes", description: "A fast, no-nonsense guide to updating your policy's beneficiary, and the common triggers that mean it's time to check yours." },
};

export default function ChangeBeneficiaryPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/managing-your-policy" className="hover:text-harbor">Managing Your Policy</Link> / Change Your Beneficiary
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Change your beneficiary in minutes
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Faster than most people assume, and it doesn't touch your coverage, premium, or any
          other policy terms. Just tell your carrier who should actually be listed — that's it.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          One form, not a new application
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A short beneficiary-change form does it — paper or your carrier's online portal, if
          they've got one. Once processed, everything else about the policy stays put: coverage,
          premium, terms. No reapplying, no new underwriting.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Primary vs. contingent, quickly
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Primary gets the benefit first. Contingent is the backup, kicking in only if the primary
          is already gone. Updating one? Check both at once — see{" "}
          <Link href="/managing-your-policy/beneficiary-dies-before-you" className="text-harbor-mid underline">
            what happens if a beneficiary dies before you do
          </Link>{" "}
          for why the contingent slot matters.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Fast triggers to update it
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Divorce, remarriage, the death of whoever's currently listed, a new child or
          grandchild, or just changing your mind — these cover most updates. Some people also fix
          it years later after naming a now-deceased parent, shifting the benefit to a spouse or
          child instead.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">Ex-spouse note</p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            Some states auto-revoke an ex-spouse's beneficiary status after divorce — but rules
            vary, so don't rely on it alone. Want them removed, or intentionally kept? File the
            beneficiary-change form yourself to be sure.
          </p>
        </div>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          How often to check
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          No fixed schedule — tie it to major life events, or just check every few years. Takes
          minutes with your carrier either way.
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
