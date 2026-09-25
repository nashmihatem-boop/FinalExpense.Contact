import Link from "next/link";
import type { ReactNode } from "react";
import { embedsLeadFormsWidget } from "@/lib/leadforms-pages";

// Drop-in replacement for next/link's <Link>, for any href that might point to a page
// embedding the LeadForms widget — forces a real navigation there instead of a soft one (see
// embedsLeadFormsWidget for why), and behaves exactly like <Link> everywhere else.
export function SafeLink({ href, className, children }: { href: string; className?: string; children: ReactNode }) {
  if (embedsLeadFormsWidget(href)) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
