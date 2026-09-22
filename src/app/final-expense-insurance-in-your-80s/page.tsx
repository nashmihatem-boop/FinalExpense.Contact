import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PolicyTypesTable } from "@/components/final-expense/policy-types-table";

export const metadata: Metadata = {
  title: "Final Expense Insurance in Your 80s: Fast Facts",
  description:
    "You probably haven't aged out. Fast facts on applying in your 80s, including when guaranteed issue makes sense.",
  openGraph: { title: "Final Expense Insurance in Your 80s: Fast Facts", description: "You probably haven't aged out. Fast facts on applying in your 80s, including when guaranteed issue makes sense." },

  twitter: { title: "Final Expense Insurance in Your 80s: Fast Facts", description: "You probably haven't aged out. Fast facts on applying in your 80s, including when guaranteed issue makes sense." },
};

export default function FinalExpenseInsuranceInYour80sPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/final-expense-insurance" className="hover:text-harbor">Final Expense Insurance</Link> / Your 80s
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Final expense insurance in your 80s: fast facts
        </h1>
        <div className="relative mt-8 aspect-[16/7] overflow-hidden rounded-2xl">
          <Image
            src="/photos/senior-candid-smile-outdoors.jpg"
            alt="A woman in her 80s smiling outdoors"
            fill
            sizes="(min-width: 640px) 768px, 100vw"
            className="object-cover"
          />
        </div>
        <p className="mt-8 text-lg leading-relaxed text-charcoal/80">
          Most people in their 80s assume they've missed the window. Usually false — coverage
          remains genuinely available, with a couple of things to know upfront.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          You probably haven't aged out
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Most carriers still offer coverage well into the 80s. Max issue age is carrier-specific
          and varies — check actual limits instead of assuming you're past them. "Too old" is a
          myth more often than fact at this stage.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Guaranteed issue gets more common
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Longer health histories push more 80s applicants toward guaranteed acceptance — no
          health questions, any eligible age accepted, 2-year wait on natural-cause death in
          return. Not the only path here, just more common than a decade or two back.
        </p>
        <PolicyTypesTable />

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Check simplified issue first
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Age alone doesn't mean guaranteed issue is your default. Plenty of 80s applicants qualify
          simplified issue — cheaper for the same coverage, no waiting period. Get your health
          answers actually reviewed before assuming guaranteed issue is your only path. Related:{" "}
          <Link href="/final-expense-insurance/biggest-mistakes" className="text-harbor-mid underline">
            common shopping mistakes
          </Link>{" "}
          covers this exact trap.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Coverage amount at this stage
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Priorities usually narrow: funeral/burial/cremation costs, keeping adult kids from
          covering the gap. Cremation planned?{" "}
          <Link href="/final-expense-insurance/cremation-coverage" className="text-harbor-mid underline">
            How final expense works with cremation
          </Link>{" "}
          covers what's included.
        </p>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            See what you qualify for
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            <Link href="/final-expense-insurance/is-it-worth-it" className="font-semibold text-harbor-mid hover:underline">
              Still deciding? Honest breakdown of whether it's worth it →
            </Link>
          </p>
          <p className="mt-2 text-sm text-charcoal/60">
            <Link href="/final-expense-insurance-in-your-70s" className="font-semibold text-harbor-mid hover:underline">
              ← What was different in your 70s
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
