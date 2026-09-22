import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { TopicCard } from "@/components/topic-card";

export const metadata: Metadata = {
  title: "Funeral Cost Guide: Compare Fast",
  description:
    "A fast guide to why funeral costs vary, what you're actually paying for, and how to get a real number quickly before you size coverage.",
  openGraph: { title: "Funeral Cost Guide: Compare Fast", description: "A fast guide to why funeral costs vary, what you're actually paying for, and how to get a real number quickly before you size coverage." },

  twitter: { title: "Funeral Cost Guide: Compare Fast", description: "A fast guide to why funeral costs vary, what you're actually paying for, and how to get a real number quickly before you size coverage." },
};

const TOPICS: { href: string; title: string; description: string; image?: string }[] = [
  {
    href: "/funeral-cost/what-to-expect",
    title: "What to expect",
    description: "Fast walkthrough of the funeral planning process and each decision point.",
    image: "/photos/reflective-garden-bench.jpg",
  },
  {
    href: "/funeral-cost/prepaid-funeral-plans",
    title: "Prepaid plans vs. final expense insurance",
    description: "How each works, compared fast, and the tradeoffs of locking in one provider.",
    image: "/photos/reflective-soft-light.jpg",
  },
  {
    href: "/funeral-cost/cemetery-plot-cost",
    title: "What affects cemetery plot cost",
    description: "Location, cemetery type, and fees like perpetual care, compared quickly.",
    image: "/photos/reflective-golden-hour-landscape.jpg",
  },
  {
    href: "/funeral-cost/headstone-cost",
    title: "What affects headstone cost",
    description: "Material, size, and engraving — the fast breakdown of what drives price.",
    image: "/photos/reflective-memorial-garden.jpg",
  },
  {
    href: "/funeral-cost/green-burial",
    title: "What is green burial?",
    description: "A growing option — and why it's often, not always, the cheaper one.",
    image: "/photos/reflective-hands-flower.jpg",
  },
  {
    href: "/funeral-cost/burial-vs-cremation",
    title: "Burial vs. cremation",
    description: "Side-by-side on cost, timeline, and what each actually involves.",
  },
  {
    href: "/funeral-cost/cremation-cost",
    title: "What affects cremation cost",
    description: "Direct cremation vs. cremation with a service — what actually moves price.",
  },
  {
    href: "/funeral-cost/direct-cremation",
    title: "What is direct cremation?",
    description: "The simplest, cheapest option — what's included, what's not.",
  },
  {
    href: "/funeral-cost/casket-cost",
    title: "What affects casket cost",
    description: "Material and craftsmanship drive most of the range — quick comparison.",
  },
  {
    href: "/funeral-cost/funeral-financial-assistance",
    title: "Financial assistance options",
    description: "Real programs to check fast if paying without coverage is the immediate issue.",
  },
];

export default function FuneralCostPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="font-sans text-sm font-semibold tracking-[0.14em] text-brass uppercase">
          Funeral Cost
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Funeral cost guide: compare fast
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Call two funeral homes in the same city for the same services, and you'll often get two
          different quotes. Normal — pricing isn't standardized or set nationally, and depends
          heavily on choices only your family makes. Fast breakdown: why costs vary, what you're
          paying for, and where to get a real number today.
        </p>

        <h2 className="mt-14 font-display text-2xl font-extrabold text-harbor">
          Why costs vary so much
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          <span className="font-semibold text-harbor">Location.</span> Cost of living, land
          values, and local competition shift pricing zip code to zip code. Towns thirty miles
          apart can differ significantly for comparable services.
        </p>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          <span className="font-semibold text-harbor">Provider.</span> Every funeral home prices
          independently, even ones under a larger corporate umbrella. No national price list, no
          requirement to match another provider's rate.
        </p>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          <span className="font-semibold text-harbor">Choices made.</span> Burial vs. cremation,
          full service vs. simple, casket or urn selected, vault required or not — these move the
          total more than anything else. Same funeral home, two very different bills, purely based
          on choices.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold text-harbor">Know this right: the itemized price list</p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            Federal rule requires funeral homes to give you an itemized general price list and let
            you pay only for what you want, not a bundled package. Ask for it in writing, early —
            fastest way to compare providers accurately.
          </p>
        </div>

        <h2 className="mt-14 font-display text-2xl font-extrabold text-harbor">
          What you're actually paying for
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Nearly every funeral breaks into the same categories, regardless of provider or region.
          What changes: the price of each, and whether you need all of them.
        </p>
        <ul className="mt-4 space-y-3 text-base leading-relaxed text-charcoal/80">
          <li>
            <span className="font-semibold text-harbor">Service fees.</span> Unavoidable —
            overhead, staff time, coordinating paperwork, regardless of what else you pick.
          </li>
          <li>
            <span className="font-semibold text-harbor">Casket or urn.</span> Biggest swing
            category — varies enormously with material and craftsmanship. Simple options exist
            everywhere, alongside premium ones.
          </li>
          <li>
            <span className="font-semibold text-harbor">The disposition itself.</span> Burial and
            cremation each carry their own cost, separate from merchandise. Cremation's generally
            faster and cheaper — fewer steps required.
          </li>
          <li>
            <span className="font-semibold text-harbor">Plot and marker, if burial.</span>{" "}
            Separate business, separate cost — plot, opening/closing fee, headstone — on top of
            the funeral home bill.
          </li>
        </ul>

        <h2 className="mt-14 font-display text-2xl font-extrabold text-harbor">
          Sizing coverage without an exact number yet
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Since nothing's standardized, the only real number comes from asking a local provider
          directly — funeral home for service costs, cemetery separately for burial. Final expense
          insurance pays a set cash benefit to your beneficiary, so the fast move is: get a current
          itemized estimate, add a cushion, size coverage to that total instead of guessing.
        </p>

        <h2 className="mt-14 font-display text-2xl font-extrabold text-harbor">
          Go deeper on each cost
        </h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {TOPICS.map((topic) => (
            <TopicCard key={topic.href} href={topic.href} title={topic.title} description={topic.description} image={topic.image} />
          ))}
        </div>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            See what you qualify for
          </Button>
        </div>
      </div>
    </div>
  );
}
