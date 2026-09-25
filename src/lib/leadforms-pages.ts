// Pages that embed the LeadForms widget (useleadbot.com). The widget only initializes on a
// real page load, not a Next.js client-side transition — clicking through via next/link's soft
// routing leaves #leadforms-embd-form empty forever (confirmed by waiting 20+ seconds), because
// the pixel script that populates it only runs once, on the original document load, and never
// reruns on a client-side route change. Any link or redirect landing on one of these needs a
// real navigation (a plain <a> or window.location.href), not next/link's soft routing.
export function embedsLeadFormsWidget(href: string): boolean {
  const path = href.split("?")[0].split("#")[0];
  return path === "/" || path === "/get-quote";
}
