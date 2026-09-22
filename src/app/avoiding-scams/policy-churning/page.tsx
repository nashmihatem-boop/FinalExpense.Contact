import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Policy Churning: What Replacing Your Policy Really Costs",
  description:
    "A fast breakdown of policy churning — getting pushed to replace a policy you already own — and the real cost of starting over versus comparing first.",
  openGraph: { title: "Policy Churning: What Replacing Your Policy Really Costs", description: "A fast breakdown of policy churning — getting pushed to replace a policy you already own — and the real cost of starting over versus comparing first." },

  twitter: { title: "Policy Churning: What Replacing Your Policy Really Costs", description: "A fast breakdown of policy churning — getting pushed to replace a policy you already own — and the real cost of starting over versus comparing first." },
};

export default function PolicyChurningPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/avoiding-scams" className="hover:text-harbor">Avoiding Scams</Link> / Policy Churning
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Policy churning: what replacing your policy really costs
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          &quot;Churning&quot; is the industry term for a specific move: an agent pushes you to
          swap a policy you already hold for a new one, not because it's genuinely better, but
          because writing new business pays a new commission. Know the term before anyone pitches
          you a replacement — it changes how fast you should say yes.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          How the pitch usually shows up
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          It rarely gets labeled as churning. It shows up framed as an upgrade — a lower premium,
          more coverage, a shinier company name. What gets left out of that pitch is the cost of
          resetting: the time already banked inside your current policy's contestability period,
          plus, if it's a permanent policy with cash value built up, that value walks away too.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          The real math on switching
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Two costs get missed fast. One: nearly every policy carries a contestability period —
          typically the first two years — where the insurer can review a claim against the
          original application. Swap policies, and that clock restarts from zero, even if your
          old policy already cleared its own window years ago. Two: if your current policy is
          whole life with built cash value, cashing out to buy new can mean losing that value
          outright, or eating a surrender charge. A new policy also means new underwriting at your
          current age and health — which can mean a higher premium than the one you're already
          locked into.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Why the pitch exists at all
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          The incentive is straightforward: new business pays a new commission; an untouched
          policy pays nothing further. Most agents never act on that gap — most replacement
          conversations happen because circumstances genuinely changed. But that same incentive is
          exactly what makes churning possible in the minority of cases where someone does lean on
          it, which is why it's worth a quick check every time, not because it's typical, but
          because catching it takes thirty seconds.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Your fast pre-switch checklist
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A legitimate reason to switch does exist sometimes — your needs changed, or something
          genuinely better showed up. Run it through these checks before signing anything.
        </p>
        <div className="mt-6 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">Before you replace a policy</p>
          <ul className="mt-3 space-y-2 text-base leading-relaxed text-charcoal/80">
            <li>• Ask exactly why it's better — not just what's different, but why the reset is worth it.</li>
            <li>• Get it in writing: new contestability clock, cash value given up, and the real premium difference, side by side.</li>
            <li>• Get a second opinion fast — a family member or another licensed agent — before you decide.</li>
          </ul>
        </div>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            See what you qualify for
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            <Link href="/avoiding-scams" className="font-semibold text-harbor-mid hover:underline">
              ← Back to Avoiding Scams
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
