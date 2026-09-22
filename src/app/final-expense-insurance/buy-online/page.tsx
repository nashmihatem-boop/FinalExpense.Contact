import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Buying Final Expense Insurance Online: What Actually Happens",
  description:
    "Fast breakdown of what an online quote does, why a phone call with a licensed agent is still required, and what to expect after you submit.",
  openGraph: { title: "Buying Final Expense Insurance Online: What Actually Happens", description: "Fast breakdown of what an online quote does, why a phone call with a licensed agent is still required, and what to expect after you submit." },

  twitter: { title: "Buying Final Expense Insurance Online: What Actually Happens", description: "Fast breakdown of what an online quote does, why a phone call with a licensed agent is still required, and what to expect after you submit." },
};

export default function BuyOnlinePage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/final-expense-insurance" className="hover:text-harbor">Final Expense Insurance</Link> / Buying Online
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Buying final expense insurance online: what actually happens
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Start from your phone, no calls needed upfront — real convenience. But know what that
          step does, and doesn't do, before you begin.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What an online form actually does
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Collects the basics: age, general health, state, target coverage amount, contact info.
          Matched against carrier eligibility criteria — so what you see next is realistic, not a
          generic list. Faster than cold-calling carriers one by one. Start of the process, not
          the end.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Why a call still happens
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Simplified issue requires actually answering specific health questions — getting them
          right matters. A live agent catches things a static form can't: exact diagnosis dates,
          whether a med was one-time, a natural follow-up question a form never thinks to ask.
          Protects against an answer being recorded wrong and biting later. Most states also
          require a licensed agent to bind/issue the policy. No online tool replaces this step for
          this product.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What online tools are actually good for
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Fast multi-carrier comparison. Narrowing which carriers are worth a call before you make
          one. Starting on your schedule, not business hours. Prep work that shortens and improves
          the eventual call.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          After you submit
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Licensed agent follows up, reviews your answers, confirms details, walks through real
          personalized options — not a generic estimate. No cost, no obligation on that call. Hear
          the numbers, decide later or never.
        </p>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            See what you qualify for
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            <Link href="/final-expense-insurance/biggest-mistakes" className="font-semibold text-harbor-mid hover:underline">
              Before you apply: mistakes to avoid →
            </Link>
          </p>
          <p className="mt-2 text-sm text-charcoal/60">
            <Link href="/final-expense-insurance" className="font-semibold text-harbor-mid hover:underline">
              ← Back to the full guide
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
