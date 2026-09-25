"use client";

import { useEffect, useRef } from "react";

// The LeadForms widget (useleadbot.com) appends its own markup into #leadforms-embd-form
// rather than clearing it first, and on a cold cache (a visitor's first-ever load, before the
// pixel script itself has been fetched once) that append can take a few real seconds.
//
// Three earlier attempts at this all tried to time a *handoff* between this spinner and
// whatever the widget renders (hide on the wrapper appearing, hide on the zip field appearing,
// remove the node directly instead of via React state) — all three still showed both this
// spinner and the widget's own internal loading indicator on screen together, confirmed live
// with screenshots each time. Timing a handoff can't work reliably here: there's no signal that
// distinguishes "the widget has started rendering" from "the widget is fully ready," so hiding
// on any intermediate signal risks revealing the widget's own not-yet-ready state.
//
// This instead renders as an opaque, absolutely-positioned overlay that physically covers the
// entire container (the container gets position:relative + a min-height from the caller) —
// whatever the widget does underneath, including its own loading state, is hidden behind it
// regardless of timing, until input[name="zip-code"] (its first real field) actually exists.
// Only then is the overlay removed, revealing an already-complete form in one step.
export function GetQuoteLoadingState() {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = document.getElementById("leadforms-embd-form");
    if (!container) return;

    function checkLoaded() {
      if (overlayRef.current && container!.querySelector('input[name="zip-code"]')) {
        overlayRef.current.remove();
      }
    }

    checkLoaded();
    const observer = new MutationObserver(checkLoaded);
    observer.observe(container, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={overlayRef}
      className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-canvas-raised text-center"
    >
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-mist border-t-harbor" />
      <p className="text-sm text-charcoal/60">Loading your quote form…</p>
    </div>
  );
}
