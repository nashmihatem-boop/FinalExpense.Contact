import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Cash Value in Life Insurance: Fast Explainer",
  description:
    "Fast facts on how cash value builds in a whole life or final expense policy, who owns it, and how it's different from the death benefit.",
  openGraph: { title: "Cash Value in Life Insurance: Fast Explainer", description: "Fast facts on how cash value builds in a whole life or final expense policy, who owns it, and how it's different from the death benefit." },

  twitter: { title: "Cash Value in Life Insurance: Fast Explainer", description: "Fast facts on how cash value builds in a whole life or final expense policy, who owns it, and how it's different from the death benefit." },
};

export default function CashValueLifeInsurancePage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <h1 className="font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Cash value in life insurance: fast explainer
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Commonly confused with the death benefit — related, but not the same thing. Here's the
          fast breakdown.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Cash value ≠ death benefit
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Death benefit: the payout your beneficiary gets when you die — the core function of the
          policy. Cash value: a separate internal feature exclusive to whole life-style policies
          (final expense included), accessible to you, the policyholder, while alive. Term life:
          no cash value at all — coverage window, nothing more.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          How it grows
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Starts near zero, grows slowly year over year as a slice of each premium gets credited
          to it. Slow by design — early years add up gradually, real growth shows up over the
          longer term. Exact pace depends on your specific policy terms.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What you can do with it while alive
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          It's yours — typically accessible via borrowing against it, sometimes usable to cover a
          premium in a pinch. Details on how policy loans work, and what they do to your coverage
          afterward, matter — get specifics from an agent before relying on it.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What happens to it at death
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          The catch people miss: in most standard cash value policies, your beneficiary gets the
          stated death benefit — not the death benefit plus accumulated cash value on top. Cash
          value is a living benefit, meant for use while you're alive, not a bonus stacked onto
          the payout. Different purpose entirely, even sharing the same policy.
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
