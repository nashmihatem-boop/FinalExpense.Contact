import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Green Burial: The Fast Facts",
  description:
    "The fast facts on what eco-friendly green burial actually involves, and why it's often, though not always, the cheaper option.",
  openGraph: { title: "Green Burial: The Fast Facts", description: "The fast facts on what eco-friendly green burial actually involves, and why it's often, though not always, the cheaper option." },

  twitter: { title: "Green Burial: The Fast Facts", description: "The fast facts on what eco-friendly green burial actually involves, and why it's often, though not always, the cheaper option." },
};

export default function GreenBurialPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <h1 className="font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Green burial: the fast facts
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          An eco-focused approach growing fast alongside conventional burial and cremation. Quick
          version: what it means, what it costs.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What makes it "green"
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          No chemical embalming. Biodegradable container — shroud, untreated wood, wicker,
          bamboo. No concrete vault. Burial happens in a natural or conservation ground set aside
          for this purpose.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Why it's usually cheaper
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Eliminates costs rather than discounting them — no embalming chemicals, cheaper simple
          container, no vault fee. Not always cheaper though: natural grounds set their own plot
          prices, and premium natural-material caskets aren't cheap either.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Availability varies
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Not every cemetery offers it, and "green" isn't defined uniformly. Some grounds carry
          independent certification, others use the term loosely. Ask exactly what's included
          before assuming.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Cremation vs. green burial
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Separate paths — cremation uses its own energy, isn't automatically "greener." Some
          combine both: cremation, then a biodegradable urn for natural burial of remains. No
          single right answer.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold text-harbor">Confirm fast, then size coverage</p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            Newer, less standardized market — confirm with the provider directly, including
            whether a vault's required even in "green" sections. Get the real number, size
            coverage to it.
          </p>
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
