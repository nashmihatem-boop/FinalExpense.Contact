import { Button } from "@/components/ui/button";

const STEPS = [
  {
    n: "1",
    title: "Answer a few quick questions",
    body: "Your age, general health, and how much coverage you're looking for. Takes about two minutes, from your phone or computer.",
  },
  {
    n: "2",
    title: "See your options compared side by side",
    body: "We match your answers to carriers that fit, and a licensed agent walks you through exactly how each option compares — no pressure, no script.",
  },
  {
    n: "3",
    title: "Pick the one that fits and enroll",
    body: "If something fits, you can enroll on that same call. If nothing fits, you walk away with nothing owed — there's no cost to compare your options.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-20 bg-canvas-alt">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="max-w-2xl">
          <p className="font-sans text-sm font-semibold tracking-[0.14em] text-brass uppercase">
            How it works
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
            Three steps, one short call.
          </h2>
        </div>

        <ol className="mt-14 grid gap-8 sm:grid-cols-3">
          {STEPS.map((step) => (
            <li key={step.n} className="rounded-2xl bg-canvas-raised p-7 shadow-[0_1px_2px_rgba(18,63,42,0.08)]">
              <span className="font-display text-3xl font-extrabold text-brass">{step.n}</span>
              <h3 className="mt-4 font-display text-lg font-extrabold text-harbor">{step.title}</h3>
              <p className="mt-2.5 text-base leading-relaxed text-charcoal/80">{step.body}</p>
            </li>
          ))}
        </ol>

        <div className="mt-14 flex justify-center">
          <Button as="link" href="/get-quote" size="lg">
            Start my two-minute quote
          </Button>
        </div>
      </div>
    </section>
  );
}
