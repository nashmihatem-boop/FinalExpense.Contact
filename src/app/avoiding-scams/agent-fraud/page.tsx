import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "3 Fast Red Flags for Agent Fraud",
  description:
    "Three specific, easy-to-spot signs an insurance agent isn't acting in your interest — payment requests, blank forms, withheld paperwork — and the fast fix for each.",
  openGraph: { title: "3 Fast Red Flags for Agent Fraud", description: "Three specific, easy-to-spot signs an insurance agent isn't acting in your interest — payment requests, blank forms, withheld paperwork — and the fast fix for each." },

  twitter: { title: "3 Fast Red Flags for Agent Fraud", description: "Three specific, easy-to-spot signs an insurance agent isn't acting in your interest — payment requests, blank forms, withheld paperwork — and the fast fix for each." },
};

export default function AgentFraudPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/avoiding-scams" className="hover:text-harbor">Avoiding Scams</Link> / Agent Fraud
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Three fast red flags for agent fraud
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          The large majority of agents do exactly what they should: match you to coverage fast,
          file your application correctly, and get your documents into your hands without delay.
          A small minority don&apos;t, and the tells are specific enough to check for in seconds —
          worth scanning before you're mid-application, not after.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Red flag #1: they want the check made out to them
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Your payment goes to the insurance company — full stop, never to an individual agent,
          never in cash. Any pitch to pay the agent directly &quot;to save a step&quot; or
          &quot;to move things faster&quot; has zero legitimate justification behind it. It's also
          the fastest route for someone to collect your money while no actual policy ever gets
          written.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Red flag #2: they want you to sign something incomplete
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Never sign a form with blank fields on the promise it'll get &quot;filled in later.&quot;
          A signature on an incomplete application hands someone else the ability to write in
          whatever they choose afterward — including health answers that can determine whether a
          future claim actually pays out. Confirm every applicable field is complete before you
          sign, not after.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Red flag #3: they stall on giving you your own copies
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          You're entitled to the actual signed document, immediately — not a summary, not a verbal
          rundown. An agent who drags their feet, gets vague about it, or implies you don't really
          need your own copy is showing you a real problem. Keep every signed document on file for
          as long as the policy is active; it costs you nothing and protects you completely.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Spotted one of these? Here's your fastest move
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Contact the carrier directly — using contact info you look up yourself, not a number
          the agent handed you — and ask them to confirm a policy exists in your name with your
          payment correctly applied. Our guide to{" "}
          <Link href="/avoiding-scams/verify-a-company-is-legitimate" className="text-harbor-mid underline">
            verifying a company is legitimate
          </Link>{" "}
          shows you exactly how to pull that information up on your own. If anything's off, or
          you can't get a straight answer, file a complaint with your state's department of
          insurance — the same regulator who issued the agent's license. That's precisely what
          the office exists to investigate, and you don't need proof lined up before filing, just
          a clear, specific account of what happened.
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
