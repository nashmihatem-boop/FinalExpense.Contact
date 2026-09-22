import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Celebration of Life Services: Fast Facts",
  description:
    "Fast facts on how a celebration of life compares to a traditional funeral, what it includes, and how it pairs with burial or cremation.",
  openGraph: { title: "Celebration of Life Services: Fast Facts", description: "Fast facts on how a celebration of life compares to a traditional funeral, what it includes, and how it pairs with burial or cremation." },

  twitter: { title: "Celebration of Life Services: Fast Facts", description: "Fast facts on how a celebration of life compares to a traditional funeral, what it includes, and how it pairs with burial or cremation." },
};

export default function CelebrationOfLifePage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <h1 className="font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Celebration of life services: fast facts
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Not a fixed format — an approach. Most flexible option for honoring someone. Here's the
          quick breakdown.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Vs. a traditional funeral
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Traditional funeral: familiar structure, often religious, formal, close to burial timing.
          Celebration of life: no set structure — personalized, casual, built around the person's
          actual life rather than a set order of service. No template. That's the appeal for
          families wanting something that feels like the person.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Pairing with burial or cremation
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Often held separately from, and after, the actual burial/cremation — disposition happens
          soon after death, gathering scheduled later. Common with cremation specifically, since
          it removes burial's time pressure and gives families room to pick a date/place that
          works. Not cremation-exclusive though — pairs with burial too, replacing or alongside a
          traditional service.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What it can include
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          No script, so it's family's call: photos, video, music the person loved, open time for
          people to share memories — sometimes at a meaningful location (home, park, favorite
          restaurant) instead of a funeral home. Some blend in traditional elements (reading,
          eulogy); others skip that for something closer to a reception.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Why this matters for planning ahead
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Flexible format means cost swings with choices — venue rental, catering, guest travel,
          personal touches add up differently than a standard service. Funds already available
          (life insurance or final expense) let a family plan the gathering that actually fits,
          not just what's cheapest in the moment.
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
