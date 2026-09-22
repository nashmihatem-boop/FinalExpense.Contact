import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Dying Without Life Insurance: What Actually Happens",
  description:
    "Fast, plain-language breakdown of who covers funeral and final costs when there's no life insurance policy in place.",
  openGraph: { title: "Dying Without Life Insurance: What Actually Happens", description: "Fast, plain-language breakdown of who covers funeral and final costs when there's no life insurance policy in place." },

  twitter: { title: "Dying Without Life Insurance: What Actually Happens", description: "Fast, plain-language breakdown of who covers funeral and final costs when there's no life insurance policy in place." },
};

export default function DyingWithoutLifeInsurancePage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <h1 className="font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Dying without life insurance: what actually happens
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Not meant to alarm — meant to inform. Here's what actually happens financially with no
          coverage in place, and why that's the clearest case for what life insurance is for.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Funeral costs don't wait
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Funeral homes expect payment at or near time of service — well before an estate settles.
          No policy or prepaid plan? The bill lands on whoever can pay it, usually immediate
          family, often via credit card or personal loan just to keep things moving on a tight
          timeline.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          The estate pays eventually, not fast
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Estate is the first source for debts and final costs, technically. In practice: probate
          takes time, and many estates lack enough accessible cash for a bill due immediately.
          Estate eventually covers it fine? Doesn't help on the day the funeral home needs
          payment.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Rarely just one bill
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Funeral/burial costs arrive alongside everything else that doesn't pause for a loss —
          final medical bills, credit card balances, rent/mortgage/utilities. Individually
          manageable. All at once, plus a new funeral bill, plus often lost household income —
          that's what actually creates real financial strain.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What coverage changes
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A policy closes this gap before it opens. Instead of family covering costs out of pocket
          and sorting reimbursement later, a named beneficiary gets the death benefit in cash,
          usually within days of filing — theirs to use immediately, no probate needed first.
          Doesn't undo the loss. Just means survivors aren't also stuck with the bill.
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
