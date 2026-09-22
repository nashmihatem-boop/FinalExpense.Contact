import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Decode the Ad in 60 Seconds",
  description:
    "A fast decoder for \"as low as\" pricing and \"no medical exam\" claims in final expense insurance ads, so you compare real numbers instead of headlines.",
  openGraph: { title: "Decode the Ad in 60 Seconds", description: "A fast decoder for \"as low as\" pricing and \"no medical exam\" claims in final expense insurance ads, so you compare real numbers instead of headlines." },

  twitter: { title: "Decode the Ad in 60 Seconds", description: "A fast decoder for \"as low as\" pricing and \"no medical exam\" claims in final expense insurance ads, so you compare real numbers instead of headlines." },
};

export default function TruthAboutInsuranceAdsPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <h1 className="font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Decode the ad in 60 seconds
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Insurance ads aren't lying, exactly — they're just optimized, same as any other ad. A
          handful of phrases show up constantly and mean something narrower than the headline
          suggests. Decode them once and you'll compare every future ad faster.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          &quot;As low as&quot; = someone else's rate
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          That headline number is the rate for the healthiest, youngest applicant the insurer
          covers — not a quote for you. Your real premium depends on age, gender, coverage amount,
          tobacco use, and health, so treat the ad number as a floor, not a promise. It's usually
          technically accurate, disclosed math — the mistake is assuming it's your price before
          you've actually applied. The only fast way to your real number: run it through
          underwriting with a specific carrier.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          &quot;No medical exam&quot; ≠ &quot;no health questions&quot;
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Ads use these almost interchangeably, but they're two different products. &quot;No
          medical exam&quot; means simplified issue — no bloodwork, but you still answer health
          questions that set your rate. &quot;No health questions&quot; means guaranteed
          acceptance — skips health questions entirely, but adds a waiting period (typically two
          years) before it pays the full benefit for natural-cause death. Full comparison in our{" "}
          <a href="/pre-existing-conditions#the-two-paths-and-how-simplified-issue-works" className="text-harbor-mid underline">
            pre-existing condition guide
          </a>
          . Fast rule: if an ad promises no health questions AND no waiting period at once, that
          combination doesn't exist — the ad is wrong.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          A celebrity face isn't a comparison shortcut
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A familiar spokesperson got paid to show up — that's it. It says nothing about whether
          that carrier's rates or claims record actually beat the competition. Treat it as
          attention-grabbing, not decision-making, and keep comparing.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          The 4-question fast check
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Run any ad through these before you call — a legitimate agent answers all four without
          hesitation.
        </p>
        <div className="mt-6 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">Fast check</p>
          <ul className="mt-3 space-y-2 text-base leading-relaxed text-charcoal/80">
            <li>• Is this price for my age and health, or the best case they can advertise?</li>
            <li>• Does &quot;no exam&quot; still mean I answer health questions?</li>
            <li>• If there's a waiting period, how long — and what exactly triggers it?</li>
            <li>• Am I actually comparing this to another option, or just reacting to one ad?</li>
          </ul>
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
