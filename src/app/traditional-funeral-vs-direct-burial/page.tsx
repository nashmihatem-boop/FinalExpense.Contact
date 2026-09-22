import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Traditional Funeral vs. Direct Burial: Fast Comparison",
  description:
    "Fast breakdown of what a traditional funeral includes vs. direct burial — the cost difference, what each skips, and how families choose.",
  openGraph: { title: "Traditional Funeral vs. Direct Burial: Fast Comparison", description: "Fast breakdown of what a traditional funeral includes vs. direct burial — the cost difference, what each skips, and how families choose." },

  twitter: { title: "Traditional Funeral vs. Direct Burial: Fast Comparison", description: "Fast breakdown of what a traditional funeral includes vs. direct burial — the cost difference, what each skips, and how families choose." },
};

export default function TraditionalFuneralVsDirectBurialPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <h1 className="font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Traditional funeral vs. direct burial: fast comparison
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Big decision, made early, that shapes almost everything after — viewing or not, what
          kind of service, when it happens.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What&apos;s included in a traditional service
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          The default most people picture: embalming, a viewing where people gather with the body
          present, a formal service (funeral home or place of worship), procession to the cemetery
          after. Stuck around as the cultural norm because it gives people a structured way to show
          up together.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What direct burial cuts — and why it&apos;s cheaper
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          No embalming, no public viewing, no formal service first. Simple container, buried fairly
          soon after death. Skip the prep, staffing, and facility time a viewing or service needs,
          and the price drops — same final resting place either way.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          A separate gathering, on your terms
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Direct burial doesn&apos;t mean no gathering — just a different one, later. Plenty of
          families pick this route specifically to hold a celebration of life afterward: their own
          timeline, their own location, their own format. Burial handled practically; remembering
          handled separately, without the two competing for the same day.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Which one fits your family
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          No single right answer. Depends on religion or culture, what the person wanted, what
          actually helps you grieve. Traditional funeral: more structure, more immediacy. Simple
          burial plus a later celebration: more room, less time pressure. Both are legitimate ways
          to say goodbye.
        </p>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            See what you qualify for
          </Button>
        </div>
      </div>
    </div>
  );
}
