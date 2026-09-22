import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Guaranteed Issue Life Insurance: Fast Facts",
  description:
    "Fast facts on how guaranteed-issue (guaranteed-acceptance) life insurance works: the waiting period, the higher cost, and who it's actually for.",
  openGraph: { title: "Guaranteed Issue Life Insurance: Fast Facts", description: "Fast facts on how guaranteed-issue (guaranteed-acceptance) life insurance works: the waiting period, the higher cost, and who it's actually for." },

  twitter: { title: "Guaranteed Issue Life Insurance: Fast Facts", description: "Fast facts on how guaranteed-issue (guaranteed-acceptance) life insurance works: the waiting period, the higher cost, and who it's actually for." },
};

export default function GuaranteedIssueLifeInsurancePage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <h1 className="font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Guaranteed issue life insurance: fast facts
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Guaranteed issue (aka guaranteed acceptance): eligible age range, you're approved,
          period. No health questions, no records, no decline possible. Most accessible product
          in the market — also the most misunderstood.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          How it works
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          No real application process. No health/medication/hospital questions, nothing disclosed
          can trigger a decline — only age matters, within the carrier's window. That's the entire
          underwriting. Compare: simplified issue (short health questions) and fully underwritten
          policies (medical exam). Full spectrum:{" "}
          <Link href="/how-underwriting-works" className="font-semibold text-harbor-mid hover:underline">
            how underwriting works
          </Link>
          .
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          The waiting period — always attached
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Guaranteed approval pairs with a waiting period — typically 2 years, natural-cause death
          only. Die naturally in that window: policy typically refunds premiums, not the full
          benefit, sometimes with interest. Accidental death: covered in full from day one either
          way. Window closes: full benefit, any covered cause, for life.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Why it's the priciest tier for the same coverage
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Carrier accepts every eligible applicant regardless of health — effectively pricing for
          the whole pool at once, including people who'd be declined elsewhere. That risk gets
          priced in, making guaranteed issue generally the most expensive tier for equivalent
          coverage vs. simplified issue. The waiting period is the flip side — it's what lets the
          carrier guarantee approval without pricing everyone as maximum risk forever.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold text-harbor">Not "no strings attached"</p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            Guaranteed approval ≠ guaranteed full coverage day one. The waiting period is the
            price of skipping health questions — package deal, not two separate perks.
          </p>
        </div>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Who it's actually built for
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Not meant to be everyone's first pick — meant to be available to everyone. Built for
          people with no simplified-issue option: previously declined, or living with a serious
          knockout condition (oxygen, dialysis, active cancer treatment). For that person, it's
          not a worse product — often the only path to coverage at all. No decline, no serious
          condition? Rule out simplified issue first — usually cheaper, usually no wait. See{" "}
          <Link href="/pre-existing-conditions" className="font-semibold text-harbor-mid hover:underline">
            pre-existing conditions guide
          </Link>{" "}
          for how conditions are treated, or{" "}
          <Link href="/pre-existing-conditions/can-you-be-denied" className="font-semibold text-harbor-mid hover:underline">
            what causes a decline
          </Link>{" "}
          in the first place.
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
