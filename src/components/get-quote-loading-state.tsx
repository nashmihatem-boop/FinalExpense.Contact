"use client";

import { useEffect, useRef } from "react";

// The LeadForms widget (useleadbot.com) appends its own markup into #leadforms-embd-form
// rather than clearing it first, and on a cold cache (a visitor's first-ever load, before the
// pixel script itself has been fetched once) that append can take a few real seconds — long
// enough that the page looks broken/blank with nothing else here. This renders a spinner as
// the container's only initial child, then removes it the instant the widget renders anything.
//
// Removes the spinner node directly via the DOM ref inside the MutationObserver callback,
// rather than going through React state + a re-render: two prior attempts (hiding on
// .leadforms-general-wrapper via setState, then on input[name="zip-code"] via setState) both
// still showed this spinner and the widget's own internal loading indicator visible at the same
// time, reported live with a screenshot. The likely cause is React's state-update/re-render
// cycle isn't synchronous with the DOM mutation that triggers the observer — the widget can
// paint its own wrapper *and* its own loading UI in the same tick the observer fires, before
// React gets around to removing this component. Removing the node directly, in the same
// callback, closes that gap instead of routing the removal through a render cycle.
export function GetQuoteLoadingState() {
  const spinnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = document.getElementById("leadforms-embd-form");
    if (!container) return;

    function checkLoaded() {
      if (spinnerRef.current && container!.querySelector(".leadforms-general-wrapper")) {
        spinnerRef.current.remove();
      }
    }

    checkLoaded();
    const observer = new MutationObserver(checkLoaded);
    observer.observe(container, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={spinnerRef} className="flex flex-col items-center justify-center gap-3 py-16 text-center">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-mist border-t-harbor" />
      <p className="text-sm text-charcoal/60">Loading your quote form…</p>
    </div>
  );
}
