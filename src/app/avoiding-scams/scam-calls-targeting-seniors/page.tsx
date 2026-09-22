import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Real Call vs. Scam Call: A 10-Second Test",
  description:
    "A fast comparison of what a legitimate final expense insurance call sounds like versus a scam, plus the quickest way to shut down a suspicious call.",
  openGraph: { title: "Real Call vs. Scam Call: A 10-Second Test", description: "A fast comparison of what a legitimate final expense insurance call sounds like versus a scam, plus the quickest way to shut down a suspicious call." },

  twitter: { title: "Real Call vs. Scam Call: A 10-Second Test", description: "A fast comparison of what a legitimate final expense insurance call sounds like versus a scam, plus the quickest way to shut down a suspicious call." },
};

export default function ScamCallsTargetingSeniorsPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/avoiding-scams" className="hover:text-harbor">Avoiding Scams</Link> / Scam Calls Targeting Seniors
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Real call vs. scam call: a 10-second test
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Phone is still one of the fastest ways this coverage gets sold — and one of the fastest
          ways it gets scammed. The opening seconds sound nearly identical either way, so having a
          quick mental checklist ready beats trying to figure it out live.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What a legitimate call sounds like, fast
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A licensed agent — whether you requested a quote or they're following up on an existing
          policy — leads with their name, the company they're calling from, and a license number
          on request, no hesitation. They explain the product in plain terms, don't push for a
          same-call decision, and follow up with real paperwork you can review before any payment
          is ever due.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          The fast tells that it isn't
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A few behaviors are reliable red flags, no matter how confident the caller sounds.
        </p>
        <div className="mt-6 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">Watch for</p>
          <ul className="mt-3 space-y-2 text-base leading-relaxed text-charcoal/80">
            <li>• Demanding payment on the spot — especially gift card, wire transfer, or cryptocurrency.</li>
            <li>• Rushing you with urgency lines like "this rate expires today."</li>
            <li>• Refusing anything in writing, or staying vague about the actual company.</li>
            <li>• Asking for a bank account, Social Security, or Medicare number too early.</li>
            <li>• Already knowing details about your finances or health from an unexplained source.</li>
          </ul>
        </div>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          On a suspicious call right now? Do this
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Hang up — no explanation needed, no polite exit required. A real company loses nothing
          from a callback later, on a number you look up yourself. Don't confirm or share personal
          or financial info, even just to "verify" who you are — scammers reuse small confirmed
          details to make the next call more convincing. Want to check if the company's real? Look
          it up separately through your state's insurance department, never through a link or
          number the caller gave you.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Report it right after
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Takes two minutes. The Federal Trade Commission takes reports of exactly this at{" "}
          <a
            href="https://reportfraud.ftc.gov"
            target="_blank"
            rel="noopener noreferrer"
            className="text-harbor-mid underline"
          >
            reportfraud.ftc.gov
          </a>
          , and reporting helps regulators spot patterns even if one report alone doesn't trigger
          an investigation. If money already changed hands, call your bank or card issuer
          immediately — speed matters most for actually getting it back.
        </p>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            See what you qualify for
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            <Link href="/avoiding-scams" className="font-semibold text-harbor-mid hover:underline">
              ← Back to Avoiding Scams
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
