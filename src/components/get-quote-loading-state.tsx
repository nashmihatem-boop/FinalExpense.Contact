"use client";

import { useEffect, useState } from "react";

// The LeadForms widget (useleadbot.com) appends its own markup into #leadforms-embd-form
// rather than clearing it first, and on a cold cache (a visitor's first-ever load, before the
// pixel script itself has been fetched once) that append can take a few real seconds — long
// enough that the page looks broken/blank with nothing else here. This renders a spinner as
// the container's only initial child, then watches for the widget's own wrapper to appear and
// hides itself the moment it does, so a slow first load never reads as an empty page.
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
