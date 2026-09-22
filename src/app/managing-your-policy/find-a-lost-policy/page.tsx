import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Find a Lost Policy: Fastest Places to Check",
  description:
    "The fastest places to check for a lost life insurance policy — financial records, employer coverage, and free state and national locator tools.",
  openGraph: { title: "Find a Lost Policy: Fastest Places to Check", description: "The fastest places to check for a lost life insurance policy — financial records, employer coverage, and free state and national locator tools." },

  twitter: { title: "Find a Lost Policy: Fastest Places to Check", description: "The fastest places to check for a lost life insurance policy — financial records, employer coverage, and free state and national locator tools." },
};

export default function FindALostPolicyPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/managing-your-policy" className="hover:text-harbor">Managing Your Policy</Link> / Find a Lost Policy
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Find a lost policy: fastest places to check
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Missing your own paperwork, or think a family member had coverage but can't find proof?
          Work this list fast before assuming there's no policy at all.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Check financial records first
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Fastest lead: bank and checking statements. Look for a recurring withdrawal to an
          insurance carrier — monthly, quarterly, or yearly. Also scan canceled checks, credit
          card statements, a filing cabinet, or a safe deposit box.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Search email and mail
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Carriers send annual statements, premium notices, anniversary letters. Search email for
          a carrier name if you have any lead, or try "premium," "policy," "statement." Check
          physical mail piles and old folders too.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Contact the agent, if known
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Know who sold the policy? Reach out directly — agencies keep records well past the sale
          date and can often confirm a policy exists even without your own copy.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Check for employer coverage
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Full-time employer? Check for group or supplemental life insurance — a different
          category from an individually owned final expense policy, and one people commonly
          forget to check.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Search your state's unclaimed property database
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Every state runs one, and life insurance proceeds land there when a carrier couldn't
          find the beneficiary. Search "[your state] unclaimed property" — free, and worth
          checking every name and past address used.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Use the NAIC's free locator tool
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          The National Association of Insurance Commissioners runs a free policy locator — submit
          basic info, and it's forwarded to participating carriers to check for a match. Free,
          legitimate, built for exactly this.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">Keep going</p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            Usually takes checking a few of these together, not one lookup solving it instantly.
            Frustrating, but rarely a true dead end.
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
