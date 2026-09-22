import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TopicCard } from "@/components/topic-card";

export const metadata: Metadata = {
  title: "Final Expense Insurance for a Family Member: Quick Guide",
  description:
    "One family member buying for another is the norm, not the exception. Fast breakdown by relationship: spouse, sibling, parent, grandparent, child.",
  openGraph: { title: "Final Expense Insurance for a Family Member: Quick Guide", description: "One family member buying for another is the norm, not the exception. Fast breakdown by relationship: spouse, sibling, parent, grandparent, child." },

  twitter: { title: "Final Expense Insurance for a Family Member: Quick Guide", description: "One family member buying for another is the norm, not the exception. Fast breakdown by relationship: spouse, sibling, parent, grandparent, child." },
};

const RELATIONSHIPS: { href: string; title: string; description: string; image: string }[] = [
  {
    href: "/final-expense-insurance-for/spouse",
    title: "Your spouse",
    description: "Cover each other — the survivor never pays final costs solo.",
    image: "/photos/family-caregiving-hands.jpg",
  },
  {
    href: "/final-expense-insurance-for/sibling",
    title: "A sibling",
    description: "Insurable interest, explained fast, for a brother-or-sister policy.",
    image: "/photos/family-siblings-together.jpg",
  },
  {
    href: "/final-expense-insurance-for/parents",
    title: "Your parents",
    description: "The most common case — starting the talk, getting it set up.",
    image: "/photos/family-parent-adult-child-documents.jpg",
  },
  {
    href: "/final-expense-insurance-for/grandparents",
    title: "A grandparent",
    description: "How grandkids and extended family typically step in and coordinate.",
    image: "/photos/family-grandparent-grandchild.jpg",
  },
  {
    href: "/final-expense-insurance-for/child",
    title: "A child",
    description: "A different, smaller product than senior final expense — the honest version.",
    image: "/photos/family-multigenerational-group.jpg",
  },
];

export default function FinalExpenseInsuranceForPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/final-expense-insurance" className="hover:text-harbor">Final Expense Insurance</Link> / Who It&apos;s For
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Final expense insurance for a family member: quick guide
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          This site defaults to "shopping for yourself." Reality: a huge share of applications
          start differently — one relative makes the call or fills out the first form for
          someone else. Normal. Here's the fast version of how it works, and what changes by
          relationship.
        </p>

        <h2 className="mt-14 font-display text-2xl font-extrabold text-harbor">
          Why it's usually one relative handling it for another
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Final expense insurance protects survivors — so the person most motivated to act often
          isn't the one being covered. A parent means to handle it, doesn't. A spouse running
          household paperwork naturally starts it for both. An adult child who just helped plan
          someone else's funeral refuses to leave the same scramble for their siblings. A sibling
          without kids may be the only one thinking about it at all. Different relationship, same
          driver every time: nobody wants a death to double as a financial emergency.
        </p>

        <h2 className="mt-14 font-display text-2xl font-extrabold text-harbor">
          The legal basics: insurable interest and consent
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          You can't insure just anyone. Every application runs on "insurable interest" — a
          genuine financial or emotional stake in the insured person staying alive. Industry-wide
          rule, not one company's policy — it exists to keep life insurance from becoming a bet on
          someone's death. Close family (spouse, parent, child, sibling, grandparent) clears this
          bar automatically, no real question asked.
        </p>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          What insurable interest doesn't do: cut the insured person out of the loop. With rare
          exceptions, the adult being covered still consents, answers the health questions
          themselves, and signs the application personally. Exactly how — and how closely a
          carrier checks the relationship — varies by who's involved, covered relationship by
          relationship below.
        </p>

        <h2 className="mt-14 font-display text-2xl font-extrabold text-harbor">
          Find your situation
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Core process: similar across every relationship. What actually differs: the details
          below, worth knowing before you start.
        </p>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {RELATIONSHIPS.map((r) => (
            <TopicCard key={r.href} href={r.href} title={r.title} description={r.description} image={r.image} />
          ))}
        </div>

        <h2 className="mt-14 font-display text-2xl font-extrabold text-harbor">
          How to get started
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Same first step regardless of relationship: an honest conversation about wanting to do
          this, and why (skip only for insuring your own young child). Then gather basics — age,
          general health, state of residence (coverage rules are state-specific). A licensed agent
          walks you both through actual qualification: price, and whether coverage starts
          immediately or phases in.
        </p>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Want state-specific details first?{" "}
          <Link href="/coverage-by-state" className="text-harbor-mid underline">
            See coverage by state
          </Link>
          , or jump to a quote now.
        </p>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            See what you qualify for
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            <Link href="/final-expense-insurance" className="font-semibold text-harbor-mid hover:underline">
              ← Back to Final Expense Insurance
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
