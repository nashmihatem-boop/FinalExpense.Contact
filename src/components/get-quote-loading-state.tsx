"use client";

import { useEffect, useState } from "react";

// The LeadForms widget (useleadbot.com) appends its own markup into #leadforms-embd-form
// rather than clearing it first, and on a cold cache (a visitor's first-ever load, before the
// pixel script itself has been fetched once) that append can take a few real seconds — long
// enough that the page looks broken/blank with nothing else here. This renders a spinner as
// the container's only initial child, then hides itself the moment the widget renders anything
// at all, so a slow first load never reads as an empty page.
//
// Deliberately hides on .leadforms-general-wrapper appearing, NOT on a specific field like
// input[name="zip-code"]: tried waiting for the real field first, but the widget can render its
// OWN internal loading spinner inside that wrapper while it fetches its form config from its own
// backend (a separate, non-cacheable request) — waiting for the field meant this spinner stayed
// up for that whole gap too, so both spinners showed at once instead of in sequence, which
// looked worse (confirmed live: reported as visible simultaneously, not one-then-the-other).
// Hiding on the wrapper alone means at most one spinner is ever visible at a time — briefly
// this one, then the widget's own if it has one, never both together. The widget's own loading
// state, if any, isn't something this component can suppress; it's outside this container's
// control once the widget takes over rendering.
export function GetQuoteLoadingState() {
  const [widgetLoaded, setWidgetLoaded] = useState(false);

  useEffect(() => {
    const container = document.getElementById("leadforms-embd-form");
    if (!container) return;

    function checkLoaded() {
      if (container!.querySelector(".leadforms-general-wrapper")) {
        setWidgetLoaded(true);
      }
    }

    checkLoaded();
    const observer = new MutationObserver(checkLoaded);
    observer.observe(container, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  if (widgetLoaded) return null;

  return (
    <div className="flex flex-col items-center justify-center gap-3 py-16 text-center">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-mist border-t-harbor" />
      <p className="text-sm text-charcoal/60">Loading your quote form…</p>
    </div>
  );
}
