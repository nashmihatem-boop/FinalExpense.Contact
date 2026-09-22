import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Whole Life vs. Universal Life: Fast Comparison",
  description:
    "Fast comparison of whole life and universal life insurance — fixed guarantees vs. flexible premiums — and where final expense fits.",
  openGraph: { title: "Whole Life vs. Universal Life: Fast Comparison", description: "Fast comparison of whole life and universal life insurance — fixed guarantees vs. flexible premiums — and where final expense fits." },

  twitter: { title: "Whole Life vs. Universal Life: Fast Comparison", description: "Fast comparison of whole life and universal life insurance — fixed guarantees vs. flexible premiums — and where final expense fits." },
};

export default function WholeLifeVsUniversalLifePage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <h1 className="font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Whole life vs. universal life insurance: fast comparison
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Both permanent — coverage for your whole life, not a fixed term like term insurance. But
          premiums, cash value, and risk work very differently between them, and it matters for
          picking the right fit.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Whole life: fixed, guaranteed
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Built entirely around certainty. Premium locked at issue, same for the life of the policy.
          Death benefit guaranteed, fixed amount. Cash value grows on a set, guaranteed schedule —
          no market exposure. Nothing about it is designed to change later: the quoted rate is the
          kept rate.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Universal life: flexible, more to manage
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Trades certainty for flexibility. Adjustable premiums within limits, sometimes adjustable
          death benefit too, as needs shift. Cash value growth tied to variable interest crediting —
          guaranteed minimum, current rates, or an index, depending on the policy. Useful
          flexibility, but more responsibility: underpay too much or cash value underperforms, and
          the policy can lose value or lapse. Whole life, properly funded, doesn&apos;t carry that
          risk.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          The actual tradeoff
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Certainty vs. flexibility, that&apos;s the real choice. Whole life: fixed premium,
          guaranteed outcome, nothing to monitor. Universal life: room to adjust payments, but
          you&apos;re watching performance along the way. Neither wins outright — different
          priorities, different fit.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Where final expense insurance lands
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Built as whole life, not universal life — on purpose. End-of-life coverage needs a premium
          that won&apos;t climb with age and a guaranteed payout your family can rely on, without
          ongoing management. More on permanent coverage generally:{" "}
          <Link href="/what-is-whole-life-insurance" className="font-semibold text-harbor-mid hover:underline">
            what is whole life insurance
          </Link>
          . More on this specific policy type:{" "}
          <Link href="/final-expense-insurance" className="font-semibold text-harbor-mid hover:underline">
            how final expense insurance works
          </Link>
          .
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
