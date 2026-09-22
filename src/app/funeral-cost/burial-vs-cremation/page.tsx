import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Burial vs. Cremation: Compare Cost, Fast",
  description:
    "A fast, side-by-side comparison of burial and cremation on cost, faith considerations, and environmental impact — plus why your coverage works the same either way.",
  openGraph: { title: "Burial vs. Cremation: Compare Cost, Fast", description: "A fast, side-by-side comparison of burial and cremation on cost, faith considerations, and environmental impact — plus why your coverage works the same either way." },

  twitter: { title: "Burial vs. Cremation: Compare Cost, Fast", description: "A fast, side-by-side comparison of burial and cremation on cost, faith considerations, and environmental impact — plus why your coverage works the same either way." },
};

export default function BurialVsCremationPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/funeral-cost" className="hover:text-harbor">Funeral Cost</Link> / Burial vs. Cremation
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Burial vs. cremation: compare cost, fast
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          No universal right answer — depends on cost priorities, faith, tradition, and
          preference, and reasonable people land differently. Fast comparison of how they actually
          differ, plus one thing that never changes: how coverage works.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Cost comparison
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Generally, cremation costs less — mainly by removing line items, not because any one
          piece is dramatically cheaper. Burial typically adds a plot, opening/closing, and often
          a required vault, on top of a casket. None apply to cremation. Exception worth knowing:
          a{" "}
          <Link href="/funeral-cost/cremation-cost" className="font-semibold text-harbor-mid hover:underline">
            cremation with an elaborate service
          </Link>{" "}
          plus a premium urn can cost more than a simple burial. The category matters less than
          the specific choices within it — get a real itemized quote, don't rely on general
          comparisons, including this one.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Faith and tradition
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          For many, this isn't primarily financial. Faith and culture often carry real
          expectations: some traditions require burial, some historically discouraged cremation
          while now accepting it, others have specific timing rules. Genuinely personal territory
          — if this matters to you, talk to clergy or your faith community first, alongside a
          provider experienced in that tradition.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Environmental factor
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Some weigh this alongside cost and tradition. Burial uses land and materials like metal,
          hardwood, concrete. Cremation skips land use but uses energy in the process. Neither's
          impact-free — growing interest in simpler options on both sides, including minimal
          burial where allowed, for those who want to prioritize this.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold text-harbor">What never changes</p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            Final expense insurance pays cash to your named beneficiary — not tied to a specific
            funeral package or method. Burial vs. cremation never needs a different policy type,
            and never locks your family into a decision made years earlier. Whoever handles
            arrangements decides how to use the funds.
          </p>
        </div>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Decide, then cover it either way
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Still deciding between burial and cremation? Take real time — talk it through with
          family, and clergy if relevant. What shouldn't wait: getting coverage in place. Since the
          benefit pays as cash, not a fixed package, you don't need today's final answer to make
          sure your family has what it needs later.
        </p>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            See what you qualify for
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            <Link href="/funeral-cost" className="font-semibold text-harbor-mid hover:underline">
              ← Back to the full guide
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
