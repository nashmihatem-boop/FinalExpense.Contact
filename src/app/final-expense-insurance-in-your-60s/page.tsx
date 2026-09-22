import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Final Expense Insurance in Your 60s: Fast Facts",
  description:
    "Fast facts on what changes at this age, including how pre-existing conditions start to factor into your rate.",
  openGraph: { title: "Final Expense Insurance in Your 60s: Fast Facts", description: "Fast facts on what changes at this age, including how pre-existing conditions start to factor into your rate." },

  twitter: { title: "Final Expense Insurance in Your 60s: Fast Facts", description: "Fast facts on what changes at this age, including how pre-existing conditions start to factor into your rate." },
};

export default function FinalExpenseInsuranceInYour60sPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/final-expense-insurance" className="hover:text-harbor">Final Expense Insurance</Link> / Your 60s
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Final expense insurance in your 60s: fast facts
        </h1>
        <div className="relative mt-8 aspect-[16/7] overflow-hidden rounded-2xl">
          <Image
            src="/photos/senior-walking-outdoors.jpg"
            alt="A couple in their 60s walking together outdoors"
            fill
            sizes="(min-width: 640px) 768px, 100vw"
            className="object-cover"
          />
        </div>
        <p className="mt-8 text-lg leading-relaxed text-charcoal/80">
          Common first-look decade — often triggered by retirement, a new grandchild, or helping
          settle a parent's final costs firsthand. Still a strong decade to apply, with a few
          differences from your 50s.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          One of the most common application ages
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Retirement is often when fixed costs and legacy planning get real attention. Your 60s sit
          squarely inside every carrier's typical age window — full coverage range, both policy
          types on the table. Carriers have deep underwriting experience at this age specifically,
          since it's one of the most common application ages.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Where pre-existing conditions start mattering more
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          More 60s applicants manage at least one ongoing condition than in their 50s — blood
          pressure, cholesterol, joint replacement, sleep apnea, early diabetes. None of this
          closes the door. Stable and well-managed, most still qualify simplified issue and often
          land level, day-one coverage. Our{" "}
          <Link href="/pre-existing-conditions" className="text-harbor-mid underline">
            pre-existing conditions guide
          </Link>{" "}
          covers how carriers treat these and where they typically land.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Waiting still costs you
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Pricing locks to your age at application, for the policy's life. A 60s rate runs higher
          than the same coverage would've in your 50s — but still beats waiting for your 70s.
          Missed the last decade? Now beats later, every time.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Prepping to apply
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Have ready: diagnoses and rough dates, current medications, general treatment history.
          Carriers cross-check prescription history against your answers — accuracy upfront avoids
          surprises. Full rundown:{" "}
          <Link href="/pre-existing-conditions#how-to-prepare" className="text-harbor-mid underline">
            how to prepare before applying
          </Link>
          .
        </p>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            See what you qualify for
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            <Link href="/final-expense-insurance-in-your-70s" className="font-semibold text-harbor-mid hover:underline">
              What changes in your 70s →
            </Link>
          </p>
          <p className="mt-2 text-sm text-charcoal/60">
            <Link href="/final-expense-insurance-in-your-50s" className="font-semibold text-harbor-mid hover:underline">
              ← What was different in your 50s
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
