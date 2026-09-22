import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Employer vs. Individual Life Insurance: Fast Comparison",
  description:
    "Group life insurance through work is often free, but small and job-tied. Fast comparison against owning your own policy.",
  openGraph: { title: "Employer vs. Individual Life Insurance: Fast Comparison", description: "Group life insurance through work is often free, but small and job-tied. Fast comparison against owning your own policy." },

  twitter: { title: "Employer vs. Individual Life Insurance: Fast Comparison", description: "Group life insurance through work is often free, but small and job-tied. Fast comparison against owning your own policy." },
};

export default function EmployerVsIndividualLifeInsurancePage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <h1 className="font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Employer vs. individual life insurance: fast comparison
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          For a lot of people, work-provided coverage is their only life insurance — often without
          realizing how different it is from a policy bought independently. Both have a role.
          Here's the fast breakdown.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What employer coverage gives you
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Real benefit, usually cheap — often free, or a small payroll deduction to add. Group
          underwriting means automatic acceptance, no individual health questions — genuinely
          valuable if your health complicates an individual policy. Tradeoff: size. Flat amount or
          salary multiple, set by the employer's plan, not your actual need.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Tied to your job, not you
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Critical point: belongs to the employer's plan. Ends when employment does — quit, laid
          off, retire — regardless of health at that moment. Some plans offer portability/
          conversion to keep coverage after leaving. Where it exists: usually a higher,
          individually-rated premium, narrow window to decide.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Owning your own policy instead
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Underwritten around you, at application time. Once active: yours. Coverage and premium
          hold regardless of job changes — switch employers, retire, stop working, policy doesn't
          care. Core tradeoff: group coverage is cheap/free but conditional; individual coverage
          costs more but has zero strings to your career.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Using both, not relying on either alone
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Not competitors — plenty carry both. Group coverage: solid bonus layer while employed,
          especially free. Mistake: treating it as the whole plan. It can vanish exactly when life
          changes — layoff, career switch, retirement — so coverage that has to stay no matter
          what belongs in your own name.
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
