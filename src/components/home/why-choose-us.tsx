import type { SVGProps } from "react";
import Image from "next/image";

function IconPhoneOff(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2C9.5 21 3 14.5 3 6a2 2 0 012-2z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
      <path d="M3 3l18 18" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

function IconZap(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
    </svg>
  );
}

function IconWallet(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="3" y="6" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.75" />
      <path d="M3 10h18M15 14h2.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

function IconGlobe(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.75" />
      <path d="M3 12h18M12 3c2.5 2.5 3.5 6 3.5 9s-1 6.5-3.5 9c-2.5-2.5-3.5-6-3.5-9s1-6.5 3.5-9z" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  );
}

function IconLayers(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M12 3l9 5-9 5-9-5 9-5z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
      <path d="M3 13l9 5 9-5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const POINTS = [
  {
    Icon: IconPhoneOff,
    title: "No robocalls, no high-pressure tactics",
    body: "You'll speak with a licensed agent, not a call-center script reading off a list.",
  },
  {
    Icon: IconZap,
    title: "Built for speed, from the start",
    body: "Most people finish comparing options in under two minutes and have a clear answer the same day.",
  },
  {
    Icon: IconLayers,
    title: "Multiple carriers, one comparison",
    body: "We line up quotes from several carriers at once, so you're choosing from real options instead of a single offer.",
  },
  {
    Icon: IconWallet,
    title: "Plans that fit your budget",
    body: "Whether you're on a fixed income or still working, we look for coverage that's genuinely affordable.",
  },
  {
    Icon: IconGlobe,
    title: "Guides for every state",
    body: "We've built dedicated resources for all 50 states and DC, since options and rules vary by where you live.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-canvas-alt">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-sans text-sm font-semibold tracking-[0.14em] text-brass uppercase">
            Why people compare with us
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
            Why choose FinalExpense.Contact
          </h2>
          <p className="mt-4 text-base leading-relaxed text-charcoal/75">
            Choosing insurance shouldn&apos;t take all day, and it shouldn&apos;t feel like
            you&apos;re being sold something you don&apos;t need. We believe in fast, honest
            comparisons, not sales pitches.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:order-2">
            <Image
              src="/photos/family-multigenerational-group.jpg"
              alt="Three generations of a family together in their kitchen"
              fill
              sizes="(min-width: 1024px) 540px, 100vw"
              className="object-cover"
            />
          </div>

          <div className="space-y-4 lg:order-1">
            {POINTS.map((p) => (
              <div key={p.title} className="flex gap-4 rounded-xl bg-canvas-raised p-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-canvas-alt text-harbor">
                  <p.Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-display text-base font-extrabold text-harbor">{p.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-charcoal/70">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
