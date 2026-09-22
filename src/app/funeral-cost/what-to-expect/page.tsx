import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Funeral Planning: The 5-Step Process",
  description:
    "The funeral planning process broken into 5 fast steps — what gets decided, and what gets billed, at each one.",
  openGraph: { title: "Funeral Planning: The 5-Step Process", description: "The funeral planning process broken into 5 fast steps — what gets decided, and what gets billed, at each one." },

  twitter: { title: "Funeral Planning: The 5-Step Process", description: "The funeral planning process broken into 5 fast steps — what gets decided, and what gets billed, at each one." },
};

export default function WhatToExpectPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/funeral-cost" className="hover:text-harbor">Funeral Cost</Link> / What to Expect
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Funeral planning: the 5-step process
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          A lot of decisions land fast, often within a day or two of a loss. Here's the sequence,
          broken down so you know what's coming.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Step 1: Pick a provider
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          First move: get your loved one into a funeral home or cremation provider's care. Hospice
          staff often help with this first call if they were involved. No provider picked in
          advance? Call around — you're not obligated to use the first or nearest name. Providers
          must give pricing over the phone by law, so a few quick calls are worth it.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Step 2: The arrangement meeting
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Usually in person at the funeral home — this is where most decisions get made. Burial or
          cremation, service type (full traditional with viewing, memorial without the body,
          graveside-only, or no formal service), and a walkthrough of the itemized price list.
          Bring someone along, take the list home, ask for a day on anything non-urgent — all
          fine.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Step 3: The decisions that drive cost
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Basic services fee: unavoidable, covers overhead regardless of other choices. Then:
          embalming vs. refrigeration (rarely legally required — provider must disclose when it
          actually is), casket or urn selection, disposition method. Choosing burial? Cemetery
          bills separately — plot, opening/closing, marker usually aren't on the funeral home's
          invoice.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Step 4: Paperwork running in parallel
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Certified death certificate copies (get extra — banks, insurers, government agencies
          each want an original), obituary writing, burial/cremation permits. Many funeral homes
          bundle this coordination into the basic services fee — ask directly, it can save real
          hassle.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Step 5: Get the real number first
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Prices set locally, provider by provider — the only way to know the total is to ask, in
          writing, itemized, before signing. Time permitting, get a second quote. Planning ahead
          rather than in the moment? This is the ideal window — a current estimate, no pressure, no
          clock.
        </p>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            See what you qualify for
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            <Link href="/funeral-cost" className="font-semibold text-harbor-mid hover:underline">
              ← Back to the funeral cost guide
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
