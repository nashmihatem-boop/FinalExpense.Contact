import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Can You Be Denied? Final Expense Insurance Fast Facts",
  description: "Fast facts on what actually triggers a decline on a final expense application, and the options if it happens.",
  openGraph: {
    title: "Can You Be Denied? Final Expense Insurance Fast Facts",
    description: "Fast facts on what actually triggers a decline on a final expense application, and the options if it happens.",
  },
  twitter: {
    title: "Can You Be Denied? Final Expense Insurance Fast Facts",
    description: "Fast facts on what actually triggers a decline on a final expense application, and the options if it happens.",
  },
};

export default function CanYouBeDeniedPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/pre-existing-conditions" className="hover:text-harbor">Pre-Existing Conditions</Link> / Can You Be Denied?
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Can you be denied final expense insurance?
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Simplified issue: yes, a single carrier can decline you. That doesn't mean you're out of
          options. Here's what actually triggers a decline, and what to do next.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What triggers a decline
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Most declines trace to a small set of "knockout" questions — conditions serious enough
          that a carrier won't offer simplified issue at all, regardless of everything else.
          Common triggers: current oxygen for a lung condition, active cancer treatment, terminal
          diagnosis or hospice care, dialysis, recent organ transplant, nursing-home residency. A
          mismatch between your answers and your medical or prescription records is another common
          trigger — one more reason to answer honestly rather than optimistically.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          A decline isn't final
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Both true at once: a decline can happen, and it almost never closes off coverage
          entirely. Carriers set independent rules — a knockout at one company can still qualify
          at another. Guaranteed acceptance is the built-in backstop: no health questions, takes
          any eligible age, in exchange for a 2-year wait on natural-cause death.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          If you've been declined
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Don't blind-apply to a string of carriers — declines can land in a shared industry
          database and work against you later. Better move: an independent agent who knows which
          carriers go easier on your specific situation, or jump straight to guaranteed acceptance
          if a knockout condition applies.
        </p>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            See what you qualify for
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            <Link href="/pre-existing-conditions" className="font-semibold text-harbor-mid hover:underline">
              ← Back to the full guide
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
