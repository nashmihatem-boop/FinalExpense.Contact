import type { Metadata } from "next";
import { Suspense } from "react";
import { GetQuotePrefill } from "@/components/get-quote-prefill";
import { GetQuoteLoadingState } from "@/components/get-quote-loading-state";

export const metadata: Metadata = {
  title: "Compare Your Quote in Minutes",
  openGraph: { title: "Compare Your Quote in Minutes — FinalExpense.Contact" },
  twitter: { title: "Compare Your Quote in Minutes — FinalExpense.Contact" },
};

// The form itself is rendered into #leadforms-embd-form by the LeadForms pixel (useleadbot.com)
// — see the Script tags in the root layout. Plain white background on purpose: the widget's own
// design (configured in the useleadbot dashboard) already carries the page, no extra framing.
export default function GetQuotePage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
      <div id="leadforms-embd-form">
        <GetQuoteLoadingState />
      </div>
      <Suspense fallback={null}>
        <GetQuotePrefill />
      </Suspense>
    </div>
  );
}
