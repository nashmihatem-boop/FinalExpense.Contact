import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Captive vs. Independent vs. Direct: Compare Your 3 Options",
  description:
    "A fast, side-by-side comparison of the three ways to buy final expense insurance — captive agent, independent agent, or direct from a carrier.",
  openGraph: { title: "Captive vs. Independent vs. Direct: Compare Your 3 Options", description: "A fast, side-by-side comparison of the three ways to buy final expense insurance — captive agent, independent agent, or direct from a carrier." },

  twitter: { title: "Captive vs. Independent vs. Direct: Compare Your 3 Options", description: "A fast, side-by-side comparison of the three ways to buy final expense insurance — captive agent, independent agent, or direct from a carrier." },
};

export default function IndependentVsCaptiveVsDirectPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/avoiding-scams" className="hover:text-harbor">Avoiding Scams</Link> / Independent vs. Captive vs. Direct
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Captive vs. independent vs. direct: compare your 3 options
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Before you compare quotes, it's worth comparing channels — because the type of seller
          you're talking to changes what you can actually shop against. There are three ways to buy
          final expense insurance, and each one puts a different amount of comparison shopping on
          the table. None is a scam. Knowing which one you're in front of takes thirty seconds and
          changes how you should read everything that follows.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          A captive agent
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A captive agent sells for one company only — every quote you get traces back to that
          single source. The advantage: deep, specific knowledge of that one company's rules and
          paperwork. The catch: zero ability to pivot if that company's terms don't fit your health
          history or budget, even when a better-fitting option is one phone call away elsewhere.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          An independent agent or agency
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          An independent agent — the model this site runs on — can pull quotes from multiple
          carriers at once, not just one. That's a real advantage for speed: instead of running
          the same conversation with five different companies yourself, one comparison covers
          several carriers who genuinely price risk differently. A condition that gets a poor
          result at one company can land a solid result at another. The tradeoff is slightly less
          depth on any single carrier compared to an agent who only works with one.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Buying direct from a carrier
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Direct means going straight to a carrier's own site or call center — no agent, no
          middle step. It's the fastest path if you already know exactly what you want. What you
          give up is a comparison layer: nobody's checking your details against other carriers if
          the first quote isn't competitive.
        </p>

        <div className="mt-6 overflow-x-auto rounded-2xl border border-mist">
          <table className="w-full min-w-[560px] border-collapse text-left">
            <thead>
              <tr className="border-b border-mist bg-canvas-alt">
                <th className="px-5 py-3.5 text-sm font-semibold text-charcoal/60">How you buy</th>
                <th className="px-5 py-3.5 font-display text-sm font-extrabold text-harbor">Who they represent</th>
                <th className="px-5 py-3.5 font-display text-sm font-extrabold text-charcoal/60">Carriers compared for you</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-mist">
                <td className="px-5 py-4 text-sm font-semibold text-charcoal/70">Captive agent</td>
                <td className="px-5 py-4 text-sm text-charcoal">One insurance company</td>
                <td className="px-5 py-4 text-sm text-charcoal/70">Just that company&apos;s own options</td>
              </tr>
              <tr className="border-b border-mist">
                <td className="px-5 py-4 text-sm font-semibold text-charcoal/70">Independent agent</td>
                <td className="px-5 py-4 text-sm text-charcoal">You — across multiple companies</td>
                <td className="px-5 py-4 text-sm text-charcoal/70">Several companies, matched to your situation</td>
              </tr>
              <tr>
                <td className="px-5 py-4 text-sm font-semibold text-charcoal/70">Direct from a carrier</td>
                <td className="px-5 py-4 text-sm text-charcoal">The carrier itself</td>
                <td className="px-5 py-4 text-sm text-charcoal/70">Just that one company, no agent involved</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Which one's actually faster depends on your situation
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A captive agent works fine if you already trust one specific brand. Direct works fine
          for a healthy applicant in a hurry. An independent agent tends to save the most time
          when your health, age, or budget make it genuinely unclear which carrier fits best —
          which covers a lot of buyers, though not everyone. The fast answer is simply to know
          which of the three you're actually comparing against before you commit to a number.
        </p>

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
