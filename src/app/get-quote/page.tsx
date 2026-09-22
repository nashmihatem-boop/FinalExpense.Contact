import type { Metadata } from "next";
import { Suspense } from "react";
import { Quiz } from "@/components/quote-quiz/quiz";

export const metadata: Metadata = {
  title: "Compare Your Quote in Minutes",
  openGraph: { title: "Compare Your Quote in Minutes — FinalExpense.Contact" },
  twitter: { title: "Compare Your Quote in Minutes — FinalExpense.Contact" },
};

export default function GetQuotePage() {
  return (
    <Suspense fallback={null}>
      <Quiz />
    </Suspense>
  );
}
