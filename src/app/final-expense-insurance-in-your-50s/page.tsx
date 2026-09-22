import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Final Expense Insurance in Your 50s: Fast Facts",
  description:
    "Fast facts on why your 50s are often the easiest decade to qualify, and why locking a rate now beats waiting.",
  openGraph: { title: "Final Expense Insurance in Your 50s: Fast Facts", description: "Fast facts on why your 50s are often the easiest decade to qualify, and why locking a rate now beats waiting." },

  twitter: { title: "Final Expense Insurance in Your 50s: Fast Facts", description: "Fast facts on why your 50s are often the easiest decade to qualify, and why locking a rate now beats waiting." },
};

export default function FinalExpenseInsuranceInYour50sPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/final-expense-insurance" className="hover:text-harbor">Final Expense Insurance</Link> / Your 50s
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Final expense insurance in your 50s: fast facts
        </h1>
        <div className="relative mt-8 aspect-[16/7] overflow-hidden rounded-2xl">
          <Image
            src="/photos/senior-gardening.jpg"
            alt="A woman in her 50s gardening outdoors"
            fill
            sizes="(min-width: 640px) 768px, 100vw"
            className="object-cover"
          />
        </div>
        <p className="mt-8 text-lg leading-relaxed text-charcoal/80">
          Younger than most people expect for this coverage — but a common first-look age, and
          usually the easiest decade to lock the best available rate. Here's what applying now
          vs. later actually changes.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          The edge of applying before health issues stack up
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Statistically lower odds of managing chronic, ongoing conditions at this age — multiple
          daily meds, a recent hospital stay, active treatment. Fewer "knockout" questions likely
          apply, better odds of level, day-one coverage at the best rate for your age. Not a
          guarantee — health varies person to person — but as a decade, your 50s trend friendliest
          for the outcome most people actually want.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          A locked-in rate doesn't move later
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Final expense policies: whole life insurance. Approved once, premium fixed for the
          policy's life — never climbs with age, never repriced. Practical result: your age at
          application sets your rate permanently. Applying at 50 locks a lower starting point than
          the same coverage later, and that gap holds for as long as you keep the policy. No fixed
          number here — depends on health, state, carrier — but direction is constant: earlier
          costs less, all else equal.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What still moves your price here
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Some in their 50s already manage blood pressure, early type 2 diabetes, or a family
          history carriers ask about — normal, not disqualifying. Applies to you? Our{" "}
          <Link href="/pre-existing-conditions" className="text-harbor-mid underline">
            pre-existing conditions guide
          </Link>{" "}
          breaks down how carriers treat common conditions and where they land. Tobacco: weighed
          at every age, moves cost more than any single well-managed condition.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Too early to bother at 50?
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Fair question — most people associate this with retirement age. Real answer: no minimum
          age where it "starts making sense." Comes down to whether savings already cover final
          costs, and whether you want that expense off your family's plate regardless of your
          current age. Weighing it?{" "}
          <Link href="/final-expense-insurance/is-it-worth-it" className="text-harbor-mid underline">
            Honest breakdown of who it's worth it for
          </Link>{" "}
          covers both sides.
        </p>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            See what you qualify for
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            <Link href="/final-expense-insurance-in-your-60s" className="font-semibold text-harbor-mid hover:underline">
              What changes in your 60s →
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
