import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Hidden Costs of Dying: What Families Miss",
  description:
    "Fast rundown of the costs beyond the funeral — probate, medical bills, debt, utility payments, family travel, lost income.",
  openGraph: { title: "Hidden Costs of Dying: What Families Miss", description: "Fast rundown of the costs beyond the funeral — probate, medical bills, debt, utility payments, family travel, lost income." },

  twitter: { title: "Hidden Costs of Dying: What Families Miss", description: "Fast rundown of the costs beyond the funeral — probate, medical bills, debt, utility payments, family travel, lost income." },
};

export default function HiddenCostsOfDyingPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <h1 className="font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Hidden costs of dying: what families miss
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Funeral is always the first cost people think of. Rarely the last one. Here's what
          actually shows up afterward — the costs easiest to miss in advance, and therefore the
          ones that hit hardest.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Probate and estate costs
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Property solely in the deceased's name (house, car, unbeneficiaried bank account)
          generally goes through probate first — validating a will, or applying state law without
          one, then transferring ownership. Costs: filing fees, often an attorney or executor.
          Takes time, sometimes months, during which assets aren't accessible.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Medical bills still coming
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A final illness means a final round of bills — hospital, specialists, equipment, home
          health — some arriving after death. Some become estate claims rather than personal
          debt, but still must be settled before the estate closes. Rarely small.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Credit cards and personal debt
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Doesn't disappear at death — paid from the estate before heirs see anything. Families
          are often shocked how much estate value goes to debt nobody filed under "final
          expenses."
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Ongoing household bills
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Rent, mortgage, utilities, insurance — keep coming due while the family focuses on
          bigger things. Someone has to keep paying until affairs are sorted. Real short-term
          out-of-pocket cost.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Family travel for the service
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Spread-out family + short notice = flights, lodging, rental cars, missed work — usually
          booked last-minute. Rarely part of funeral planning, but a real cost individual family
          members often eat alone.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Lost household income
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Not just new bills — income that stops. Surviving spouse takes unpaid time off, and if
          the deceased contributed income, that gap doesn't close itself. Often the biggest cost
          of all, and the least visible, because it's an absence, not an invoice.
        </p>

        <p className="mt-8 text-base leading-relaxed text-charcoal/80">
          Not meant to scare you — meant to be useful. Most of this is exactly what a modest life
          insurance policy absorbs: cash to your beneficiary, usable for whatever comes up, not
          restricted to a funeral home's invoice.
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
