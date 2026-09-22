import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Life Insurance vs. Crowdfunding a Funeral: Fast Comparison",
  description:
    "Online fundraisers depend on network generosity and timing. Fast comparison against a life insurance policy's guaranteed payout.",
  openGraph: { title: "Life Insurance vs. Crowdfunding a Funeral: Fast Comparison", description: "Online fundraisers depend on network generosity and timing. Fast comparison against a life insurance policy's guaranteed payout." },

  twitter: { title: "Life Insurance vs. Crowdfunding a Funeral: Fast Comparison", description: "Online fundraisers depend on network generosity and timing. Fast comparison against a life insurance policy's guaranteed payout." },
};

export default function LifeInsuranceVsCrowdfundingPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <h1 className="font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Life insurance vs. crowdfunding a funeral: fast comparison
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Online fundraisers are now common for covering sudden funeral costs. Here's how that
          actually stacks up against a policy already in place.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Crowdfunding's real limits
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Depends entirely on your network — willingness to give, ability to give, whether they
          even see the post in time. No guaranteed amount, no guaranteed speed, despite funeral
          bills being due almost immediately. Eventual success can still arrive too late for
          upfront costs.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Puts the work on grieving family
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Setting up and promoting a fundraiser takes real effort exactly when a family has the
          least bandwidth for it. Instead of something pre-arranged, someone actively grieving has
          to write the appeal, share it, keep asking if response is slow. Real emotional cost on
          top of financial.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What a policy guarantees instead
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Contracted, known amount, paid directly to a named beneficiary. Doesn't care how many
          people see a post, how generous anyone feels that week, or how well the appeal reads.
          Already in place before it's needed — nobody asks anyone for anything.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Fair comparison
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Crowdfunding isn't useless — reasonable supplement or fallback when no policy existed.
          Honest framing: backup for missing planning, not a replacement for it. A policy set up
          in advance never depends on anyone else's generosity or timing.
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
