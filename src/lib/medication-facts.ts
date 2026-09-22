export type MedicationFact = {
  slug: string;
  name: string;
  examples: string;
  summary: string;
  detail: string;
};

export const MEDICATIONS: MedicationFact[] = [
  {
    slug: "anti-seizure-medication",
    name: "Anti-Seizure Medication",
    examples: "e.g., Keppra, Dilantin, Lamictal",
    summary: "Read mainly as a flag for epilepsy or a seizure history — not a concern in its own right.",
    detail:
      "The drug itself isn't really what carriers are after. What they want to know: your seizure-free stretch, and whether things are controlled. A long gap since the last seizure on a stable dose commonly clears for level coverage. A seizure recently, or a dosage change recently, and expect more questions or a graded result instead.",
  },
  {
    slug: "antidepressants",
    name: "Antidepressants",
    examples: "e.g., Zoloft, Lexapro, Wellbutrin",
    summary: "About as common a prescription as carriers see — rarely a barrier on its own.",
    detail:
      "Depression and anxiety show up constantly in these files, and most carriers treat a stable prescription as routine, not a warning sign. Stability is what actually carries weight: time on the medication, any recent dosage changes, any history of hospitalization. Long-standing and well-managed, and it's usually a non-issue.",
  },
  {
    slug: "blood-thinners",
    name: "Blood Thinners",
    examples: "e.g., Eliquis, Xarelto, Warfarin",
    summary: "What it's prescribed for counts for more than the prescription itself.",
    detail:
      "AFib, a past clot, a mechanical heart valve — reasons for being on a blood thinner run wide, and carriers look straight past the drug to whatever condition sits underneath it. Tied to something well-managed like AFib, and level rates are often still in play; tied to a serious, recent cardiac event, and a graded outcome becomes more likely instead.",
  },
  {
    slug: "opioid-pain-medication",
    name: "Opioid Pain Medication",
    examples: "e.g., Oxycodone, Hydrocodone, Tramadol",
    summary: "The category carriers scrutinize hardest — they're specifically screening for dependency.",
    detail:
      "Short-term use tied to one event — recovering from surgery, say — reads nothing like an open-ended, ongoing prescription. What carriers are really screening for: substance dependency, and the more serious chronic-pain conditions that sometimes sit behind an opioid prescription. Stable and long-standing for a known condition beats recent or indefinite, every time.",
  },
];

export function findMedication(slug: string): MedicationFact | undefined {
  return MEDICATIONS.find((m) => m.slug === slug);
}
