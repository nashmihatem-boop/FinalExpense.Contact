import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TopicCard } from "@/components/topic-card";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Manage an Existing Policy: Fast Answers",
  description:
    "Already have a final expense or life insurance policy? Get fast, direct answers on claims, beneficiaries, missed payments, cash value, and more.",
  openGraph: { title: "Manage an Existing Policy: Fast Answers", description: "Already have a final expense or life insurance policy? Get fast, direct answers on claims, beneficiaries, missed payments, cash value, and more." },

  twitter: { title: "Manage an Existing Policy: Fast Answers", description: "Already have a final expense or life insurance policy? Get fast, direct answers on claims, beneficiaries, missed payments, cash value, and more." },
};

const TOPICS: { href: string; title: string; description: string; image?: string }[] = [
  {
    href: "/managing-your-policy/borrow-from-policy",
    title: "Borrow against your policy",
    description: "Fast rundown of how a policy loan works against cash value, and what it costs you.",
    image: "/photos/planning-seniors-conversation.jpg",
  },
  {
    href: "/managing-your-policy/beneficiary-dies-before-you",
    title: "Beneficiary died before you",
    description: "What happens next, and why a backup beneficiary saves you a headache later.",
  },
  {
    href: "/managing-your-policy/missed-premium-payment",
    title: "Missed a payment",
    description: "Grace periods, lapses, and the quickest fix if a payment slipped.",
    image: "/photos/planning-senior-phone-call.jpg",
  },
  {
    href: "/managing-your-policy/how-to-file-a-claim",
    title: "File a death benefit claim",
    description: "The exact steps to start and finish a claim, without the runaround.",
    image: "/photos/planning-hands-signing.jpg",
  },
  {
    href: "/managing-your-policy/how-long-a-claim-takes-to-pay",
    title: "How fast claims actually pay",
    description: "What speeds a payout up, and what slows it down.",
  },
  {
    href: "/managing-your-policy/find-a-lost-policy",
    title: "Find a lost policy",
    description: "The fastest places to look when the paperwork's gone missing.",
    image: "/photos/planning-senior-laptop.jpg",
  },
  {
    href: "/managing-your-policy/contestability-period",
    title: "The contestability period, explained",
    description: "Why the first two years get extra scrutiny from a carrier.",
  },
  {
    href: "/managing-your-policy/claim-denied",
    title: "Claim denied? Here's what's next",
    description: "The common reasons, and every option you have from here.",
  },
  {
    href: "/managing-your-policy/change-beneficiary",
    title: "Update your beneficiary",
    description: "Quick form, no new underwriting — here's exactly how.",
    image: "/photos/planning-advisor-senior-documents.jpg",
  },
  {
    href: "/managing-your-policy/cancel-policy",
    title: "Cancel a policy",
    description: "What actually happens, and what to check before you do.",
  },
];

export default function ManagingYourPolicyPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/" className="hover:text-harbor">Home</Link> / Managing Your Policy
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Manage an existing policy: fast answers
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Not shopping — already covered? This section skips the sales pitch and gets straight to
          it: a missed payment, a claim to file, a beneficiary to update, or a quick question
          about how your policy actually works. Find your topic and get your answer fast.
        </p>

        <h2 className="mt-14 font-display text-2xl font-extrabold text-harbor">
          Quick links
        </h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {TOPICS.map((topic) => (
            <TopicCard key={topic.href} href={topic.href} title={topic.title} description={topic.description} image={topic.image} />
          ))}
        </div>

        <h2 className="mt-14 font-display text-2xl font-extrabold text-harbor">
          Still comparing coverage instead?
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Wrong section if you don't have a policy yet — head back to the homepage to compare
          options fast, or, if a health condition is part of your decision, check our{" "}
          <Link href="/pre-existing-conditions" className="text-harbor-mid underline">
            pre-existing conditions guide
          </Link>{" "}
          first.
        </p>

        <div className="mt-14 text-center">
          <Button as="link" href={siteConfig.supportPhoneHref} variant="outline" size="lg">
            Call {siteConfig.supportPhoneDisplay}
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            No policy yet?{" "}
            <Link href="/get-quote" className="font-semibold text-harbor-mid hover:underline">
              See what you qualify for →
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
