import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "What Is a Beneficiary? Fast Answer",
  description:
    "Fast rundown: who can be a life insurance beneficiary, primary vs. contingent, and why updating it matters.",
  openGraph: { title: "What Is a Beneficiary? Fast Answer", description: "Fast rundown: who can be a life insurance beneficiary, primary vs. contingent, and why updating it matters." },

  twitter: { title: "What Is a Beneficiary? Fast Answer", description: "Fast rundown: who can be a life insurance beneficiary, primary vs. contingent, and why updating it matters." },
};

export default function WhatIsABeneficiaryPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <h1 className="font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          What is a beneficiary? Fast answer
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Whoever you name to receive your policy&apos;s death benefit. Naming one is the easiest
          step in applying — and one of the most important, since it decides exactly who your
          coverage actually helps.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Who you can name
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Usually someone close: spouse, adult child, other family. Not the only option though.
          Name multiple people, set exact percentage splits — doesn&apos;t have to be even. Name a
          trust for more specific control over distribution. Name your own estate — technically
          allowed, but it routes through probate first, which usually defeats the point.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Primary vs. contingent
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Primary means first in line. Contingent means backup, only paid if every primary
          can&apos;t receive it (usually because they&apos;ve also died). Contingent isn&apos;t
          required, but skip it and you leave a gap — no valid beneficiary means the benefit
          defaults to your estate, plus probate delay and cost.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Why updating it actually matters
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Doesn&apos;t update itself. Marriage, divorce, a new kid, a beneficiary who&apos;s since
          passed — any of these can leave a policy pointed at the wrong person, or nobody. Insurers
          pay exactly what&apos;s on file, not what a will says or what family assumes. Check it
          after every major life event, not just at signup. Updating it is usually a quick request
          to your insurer or agent — no policy rewrite needed.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Final expense policies specifically
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          The beneficiary is usually whoever actually handles arrangements and pays costs after a
          death — often spouse or adult child, doesn&apos;t have to match the will&apos;s
          executor. Name that person directly instead of &quot;my estate,&quot; and the payout
          reaches them fast, no waiting on the broader estate process.
        </p>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            See what you qualify for
          </Button>
        </div>
      </div>
    </div>
  );
}
