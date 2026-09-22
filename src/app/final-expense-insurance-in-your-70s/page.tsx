import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Final Expense Insurance in Your 70s: Fast Facts",
  description:
    "Fast facts on why your 70s are the peak buying age, and how to handle health questions if a condition applies to you.",
  openGraph: { title: "Final Expense Insurance in Your 70s: Fast Facts", description: "Fast facts on why your 70s are the peak buying age, and how to handle health questions if a condition applies to you." },

  twitter: { title: "Final Expense Insurance in Your 70s: Fast Facts", description: "Fast facts on why your 70s are the peak buying age, and how to handle health questions if a condition applies to you." },
};

export default function FinalExpenseInsuranceInYour70sPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/final-expense-insurance" className="hover:text-harbor">Final Expense Insurance</Link> / Your 70s
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Final expense insurance in your 70s: fast facts
        </h1>
        <div className="relative mt-8 aspect-[16/7] overflow-hidden rounded-2xl">
          <Image
            src="/photos/senior-reading-porch.jpg"
            alt="A woman in her 70s reading on a porch"
            fill
            sizes="(min-width: 640px) 768px, 100vw"
            className="object-cover"
          />
        </div>
        <p className="mt-8 text-lg leading-relaxed text-charcoal/80">
          The busiest single decade for this entire product. Nowhere else do carriers process
          more applications, which means nowhere else are their underwriting playbooks more
          fine-tuned.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Where the bulk of applications actually land
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Simplified and guaranteed issue both run at full volume in this age bracket, and the
          health questionnaires on file were mostly drafted with a 70-something applicant in mind.
          Showing up here for the first time isn't late — it's the demographic center of this
          market.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Disclosing something isn't the exception
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A cardiac event, diabetes, a cancer history, COPD, arthritis — one of these shows up on
          most applications by this decade. Standard, not a red flag. Full breakdown of how each
          one typically gets classified:{" "}
          <Link href="/pre-existing-conditions" className="text-harbor-mid underline">
            pre-existing conditions guide
          </Link>
          .
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          A condition ≠ automatic guaranteed issue
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Easy to assume something to disclose means guaranteed acceptance only — often wrong.
          Level and graded outcomes stay very reachable in your 70s, depending on stability and
          management. Check{" "}
          <Link href="/pre-existing-conditions#tiers" className="text-harbor-mid underline">
            how carriers sort level/graded/modified/guaranteed
          </Link>{" "}
          before assuming.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Shopping around pays off bigger at this age
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          No two carriers run identical underwriting — different questions, different look-back
          clocks. Since disclosures are simply more common by your 70s, the payoff from finding
          the right-fit carrier instead of the first one you call grows too.{" "}
          <Link href="/pre-existing-conditions#why-carriers-differ" className="text-harbor-mid underline">
            Read why one carrier's decline is another's approval
          </Link>{" "}
          before locking in a choice.
        </p>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            See what you qualify for
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            <Link href="/final-expense-insurance-in-your-80s" className="font-semibold text-harbor-mid hover:underline">
              What changes in your 80s →
            </Link>
          </p>
          <p className="mt-2 text-sm text-charcoal/60">
            <Link href="/final-expense-insurance-in-your-60s" className="font-semibold text-harbor-mid hover:underline">
              ← What was different in your 60s
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
