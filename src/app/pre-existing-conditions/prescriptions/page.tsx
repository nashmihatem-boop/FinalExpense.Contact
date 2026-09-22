import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MEDICATIONS } from "@/lib/medication-facts";

export const metadata: Metadata = {
  title: "Medications and Your Application: Fast Facts",
  description: "Fast facts on why the medications you take can matter as much as the diagnosis when applying for final expense insurance.",
  openGraph: {
    title: "Medications and Your Application: Fast Facts",
    description: "Fast facts on why the medications you take can matter as much as the diagnosis when applying for final expense insurance.",
  },
  twitter: {
    title: "Medications and Your Application: Fast Facts",
    description: "Fast facts on why the medications you take can matter as much as the diagnosis when applying for final expense insurance.",
  },
};

export default function PrescriptionsPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/pre-existing-conditions" className="hover:text-harbor">Pre-Existing Conditions</Link> / Prescription History
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Medications and your application: fast facts
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          On simplified issue, what you take can matter as much as the diagnosis. Carriers run a
          prescription check as standard practice — here's why, and what it means for the most
          common medication categories.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Why carriers check prescriptions
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Simplified issue skips the exam, but carriers still need confidence your answers are
          accurate. Prescription check confirms it — quick, behind-the-scenes lookup, not a full
          record pull. Answers and prescriptions match: faster approval. Mismatch: decline or a
          worse tier. One more reason to answer honestly instead of optimistically.
        </p>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Some medications also signal something independent of what you disclosed — a specific
          combination can flag a condition you didn't think to mention. That's why the medication
          itself, not just the diagnosis, factors into the review.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Medication categories
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {MEDICATIONS.map((m) => (
            <Link
              key={m.slug}
              href={`/pre-existing-conditions/prescriptions/${m.slug}`}
              className="rounded-2xl border border-mist bg-canvas-raised p-6 transition-colors hover:border-harbor-mid/50"
            >
              <p className="font-display text-lg font-extrabold text-harbor">{m.name}</p>
              <p className="mt-1 text-xs text-charcoal/50">{m.examples}</p>
              <p className="mt-2.5 text-sm leading-relaxed text-charcoal/75">{m.summary}</p>
            </Link>
          ))}
        </div>

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
