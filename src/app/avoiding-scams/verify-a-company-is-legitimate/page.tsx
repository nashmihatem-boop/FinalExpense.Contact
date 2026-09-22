import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Verify a Company Is Legit in Under 5 Minutes",
  description:
    "The fast way to check a carrier's and agent's state license, confirm an NPN, and spot payment requests no legitimate insurance company would ever make.",
  openGraph: { title: "Verify a Company Is Legit in Under 5 Minutes", description: "The fast way to check a carrier's and agent's state license, confirm an NPN, and spot payment requests no legitimate insurance company would ever make." },

  twitter: { title: "Verify a Company Is Legit in Under 5 Minutes", description: "The fast way to check a carrier's and agent's state license, confirm an NPN, and spot payment requests no legitimate insurance company would ever make." },
};

export default function VerifyCompanyIsLegitimatePage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <h1 className="font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Verify a company is legit in under 5 minutes
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Before you hand over health history, personal details, or payment, run these checks.
          All three are free, all three take minutes, and all three tell you fast whether you're
          actually dealing with who you think you are.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Check 1: state license, company and agent both
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Every state has an insurance department (called a Department or Division of Insurance)
          that licenses every company and agent selling there. That license is public record, and
          every state has a free lookup tool to search by name and confirm the license is active
          and in good standing. Not sure which regulator covers you? The National Association of
          Insurance Commissioners keeps a directory at{" "}
          <a
            href="https://www.naic.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-harbor-mid underline"
          >
            naic.org
          </a>{" "}
          that points you there fast. This is the same tool state regulators expect consumers to
          use — no special access required.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Check 2: the agent's license number
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Every licensed agent has a National Producer Number (NPN), issued at licensing and tied
          to them regardless of which company they currently represent. A legitimate agent hands
          this over instantly — no hesitation — and you can verify it through the same state
          tools above. Hesitation, deflection, or an inability to produce one is your signal to
          stop and verify before going further.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Check 3: how they want you to pay
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Legitimate carriers collect premium through ordinary, traceable channels — bank draft,
          check made out to the company, or a card charged by the carrier directly. Nothing
          unusual required. Wire transfer, gift cards, cryptocurrency, or mailed cash? Stop
          immediately — real insurance companies never ask for those. They all share one property
          that has nothing to do with insurance: once sent, that money is essentially untraceable.
        </p>
        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">The fast rule</p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            If a payment method would also work for a scammer posing as a grandchild in trouble,
            it's not a method a real insurance company uses either. Full stop.
          </p>
        </div>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Run these same checks on us, right now
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          This site connects you with licensed agents, so it'd be strange to write this guide and
          not say it directly: check us too. Ask for a license number. Look up any carrier we
          mention. A legitimate agency loses nothing from a five-minute check, and you shouldn't
          have to take our word for it, or anyone else's.
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
