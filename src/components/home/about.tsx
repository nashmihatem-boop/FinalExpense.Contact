import Link from "next/link";

export function About() {
  return (
    <section className="bg-canvas">
      <div className="mx-auto max-w-4xl px-5 py-20 text-center sm:px-8 sm:py-24">
        <p className="font-sans text-sm font-semibold tracking-[0.14em] text-brass uppercase">
          Who we are
        </p>
        <h2 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          About FinalExpense.Contact
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-charcoal/80">
          FinalExpense.Contact exists to make comparing final expense insurance fast.
          We work with multiple carriers so you can see real, side-by-side quotes instead of
          calling around yourself — most people finish in under two minutes and have a clear
          answer the same day.
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-charcoal/70">
          Every option we show you comes from a licensed carrier — we don&apos;t underwrite
          policies ourselves. Our job is to line up the choices quickly and connect you with a
          licensed agent who can confirm the details, at no cost to you.
        </p>
        <Link
          href="/final-expense-insurance"
          className="mt-7 inline-block text-sm font-bold text-harbor-mid hover:underline"
        >
          See how final expense insurance works →
        </Link>
      </div>
    </section>
  );
}
