import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PolicyTypesTable, CostFactorsGrid } from "@/components/final-expense/policy-types-table";

export const metadata: Metadata = {
  title: "Final Expense Insurance: The Fast Version",
  description:
    "Fast breakdown of how final expense (burial) insurance works, the two policy types, premium factors, and the application steps.",
  openGraph: { title: "Final Expense Insurance: The Fast Version", description: "Fast breakdown of how final expense (burial) insurance works, the two policy types, premium factors, and the application steps." },

  twitter: { title: "Final Expense Insurance: The Fast Version", description: "Fast breakdown of how final expense (burial) insurance works, the two policy types, premium factors, and the application steps." },
};

export default function FinalExpenseInsurancePage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="font-sans text-sm font-semibold tracking-[0.14em] text-brass uppercase">
          Final Expense Insurance
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Final expense insurance: the fast version
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          A small whole life policy, one job: keep funeral, burial, and final medical costs off
          your family's shoulders. Also called burial or funeral insurance.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">Key takeaways</p>
          <ul className="mt-3 space-y-2 text-base leading-relaxed text-charcoal/80">
            <li>• Cash goes directly to your named beneficiary — never routed through a funeral home.</li>
            <li>• Whole life structure: rate locks at approval, coverage runs as long as premiums are paid.</li>
            <li>• No exam for most applicants, and plenty of health conditions don't disqualify you.</li>
          </ul>
        </div>

        <h2 className="mt-14 font-display text-2xl font-extrabold text-harbor">
          The mechanics
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Pick a coverage amount — typically enough for funeral/burial/cremation plus leftover
          medical or credit debt. Approved: fixed monthly premium, for life. You pass: insurer pays
          the full death benefit in cash, tax-free, to your beneficiary, usually within days.
          Money's unrestricted — funeral costs, bills, anything. Unlike a funeral-home prepayment,
          it's never locked to one provider.
        </p>

        <h2 className="mt-14 font-display text-2xl font-extrabold text-harbor">
          Two policy types
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Nearly every policy is one of these two. Neither wins outright — fit depends on your
          health and how fast you need full coverage active.
        </p>

        <PolicyTypesTable />
        <p className="mt-4 text-sm leading-relaxed text-charcoal/60">
          Exact numbers: carrier, state, and personal-detail specific. A licensed agent quotes
          your real number free.
        </p>

        <h2 className="mt-14 font-display text-2xl font-extrabold text-harbor">
          Day-one coverage vs. waiting period
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          The single biggest difference between the two types. Simplified issue, once approved:
          full benefit from day one, any covered cause. Guaranteed issue, no health questions
          asked: usually a 2-year wait — natural-cause death in that window typically refunds
          premiums instead of paying the full benefit (accidental death still pays immediately
          either way). Wait period over: full coverage, permanently.
        </p>

        <h2 className="mt-14 font-display text-2xl font-extrabold text-harbor">
          What drives your premium
        </h2>
        <CostFactorsGrid />

        <h2 className="mt-14 font-display text-2xl font-extrabold text-harbor">
          How to apply
        </h2>
        <ol className="mt-6 space-y-5">
          <li className="flex gap-4">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-harbor font-display text-sm font-extrabold text-canvas">1</span>
            <p className="text-base leading-relaxed text-charcoal/80">
              <strong className="text-harbor">Quick basics.</strong> Age, general health,
              coverage amount, contact info — the quiz on this site, roughly two minutes.
            </p>
          </li>
          <li className="flex gap-4">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-harbor font-display text-sm font-extrabold text-canvas">2</span>
            <p className="text-base leading-relaxed text-charcoal/80">
              <strong className="text-harbor">Agent contacts you.</strong> Compares options
              across carrier partners, breaks down real qualification: price, amount, waiting
              period or not.
            </p>
          </li>
          <li className="flex gap-4">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-harbor font-display text-sm font-extrabold text-canvas">3</span>
            <p className="text-base leading-relaxed text-charcoal/80">
              <strong className="text-harbor">Apply if it fits.</strong> Same call, if you want —
              most simplified-issue applications just need health answers and a beneficiary. Zero
              obligation.
            </p>
          </li>
        </ol>

        <div className="mt-14 rounded-2xl bg-canvas-alt p-7">
          <h2 className="font-display text-xl font-extrabold text-harbor">
            Why we run multiple carriers, not one
          </h2>
          <p className="mt-3 text-base leading-relaxed text-charcoal/80">
            FinalExpense.contact specializes in final expense coverage for people who want funeral
            costs off their family's plate, period. Multiple carrier partnerships mean real
            side-by-side comparison — not a single company's policy pushed regardless of fit.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-charcoal/60">
            How we get paid: enroll through one of our agent partners, that carrier compensates
            the agency. Standard industry practice — never touches your premium, never costs you
            anything. Quotes and agent calls: always free.
          </p>
        </div>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            See what you qualify for
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            Questions first? See our{" "}
            <Link href="/#faq" className="font-semibold text-harbor-mid hover:underline">
              FAQ
            </Link>{" "}
            or{" "}
            <Link href="/tcpa-consent" className="font-semibold text-harbor-mid hover:underline">
              how we contact you
            </Link>
            , plain language.
          </p>
        </div>
      </div>
    </div>
  );
}
