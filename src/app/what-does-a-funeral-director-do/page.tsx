import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "What a Funeral Director Does: Fast Breakdown",
  description:
    "Fast breakdown of what a funeral director actually handles — logistics, permits, preparing the deceased, and guiding family decisions.",
  openGraph: { title: "What a Funeral Director Does: Fast Breakdown", description: "Fast breakdown of what a funeral director actually handles — logistics, permits, preparing the deceased, and guiding family decisions." },

  twitter: { title: "What a Funeral Director Does: Fast Breakdown", description: "Fast breakdown of what a funeral director actually handles — logistics, permits, preparing the deceased, and guiding family decisions." },
};

export default function WhatDoesAFuneralDirectorDoPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <h1 className="font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          What a funeral director does: fast breakdown
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          First point of contact when someone dies, for a family that&apos;s exhausted and unsure
          what&apos;s next. The job goes way past &quot;runs the service&quot; — logistics,
          paperwork, technical care, and guidance, all at once.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Logistics
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Transport of the deceased, coordinating with the cemetery or crematory, scheduling the
          service and visitation, lining up clergy or officiants on request. Tight timeline,
          handled behind the scenes — the family doesn&apos;t manage the moving pieces.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Permits and paperwork
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Death means a lot of official paperwork. A funeral director typically handles: death
          certificate filing, burial or cremation permits, often guidance on notifying Social
          Security or starting a life insurance claim. Most families have zero experience with
          this — that&apos;s the point of having someone who does it daily.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Preparing the deceased
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Real technical skill, real dignity — most families never think about this until they
          need it. Embalming and viewing prep, or simpler prep for direct cremation or burial.
          Steps change based on what&apos;s chosen; the standard of care doesn&apos;t.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Guiding the family&apos;s decisions
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          The least visible part, maybe the most important. Walks a family through choices most
          have never made: service type, burial vs. cremation, what to include vs. skip — while
          staying aware they&apos;re talking to grieving people, not shoppers. A good director
          explains clearly, answers honestly, never oversells.
        </p>

        <p className="mt-8 text-base leading-relaxed text-charcoal/80">
          Every decision has a price tag. A policy already in place — beneficiary ready to pay the
          funeral home directly, on your own schedule — is one less thing to sort out in the
          moment.
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
