// Quick-reference notes on how simplified-issue underwriting typically handles common health
// conditions — broad market patterns, not a guarantee, not medical advice, and not any single
// carrier's rulebook. Every carrier sets its own questions and look-back windows, and actual
// eligibility always comes down to full underwriting of an applicant's real history.
//
// Deliberately left out: a carrier-by-carrier acceptance table and specific dollar pricing.
// Both would require verified, current data on named companies' actual underwriting rules and
// rates — not something to estimate on a commercial site. A licensed agent is the right source
// for that.

export type Tier = "level" | "time-dependent" | "graded-modified" | "guaranteed";

export const TIER_INFO: Record<Tier, { label: string; blurb: string }> = {
  level: {
    label: "Typically Level",
    blurb: "Stable and under control, this one rarely gets in the way — full day-one coverage, with at least one carrier, for most who apply.",
  },
  "time-dependent": {
    label: "Depends on Timing",
    blurb: "How long ago it happened, how severe it was — that's what decides this one. The same condition can land at level or graded, purely on timing.",
  },
  "graded-modified": {
    label: "Graded or Modified",
    blurb: "Insurable, most of the time — just not for the full death benefit on day one. Expect a waiting period before natural-cause claims pay out in full.",
  },
  guaranteed: {
    label: "Mostly Guaranteed Acceptance",
    blurb: "Most simplified-issue carriers pass on this one outright. Guaranteed-acceptance coverage, two-year wait attached, is the usual fallback.",
  },
};

// The general categories nearly every simplified-issue application asks about, regardless of
// which specific condition is involved. Genuinely common across the market, not tied to one
// carrier's proprietary question wording.
export const COMMON_QUESTION_CATEGORIES: { question: string; why: string }[] = [
  { question: "When were you first diagnosed?", why: "Every carrier runs its own look-back clock — your answer sorts you inside or outside of it." },
  { question: "Is it currently controlled or stable?", why: "Stable reads nothing like worsening. Same diagnosis, different outcome." },
  { question: "Have you been hospitalized or had a related procedure recently?", why: "Few signals carry more weight with underwriters than a recent hospital stay." },
  { question: "What medications do you take for it?", why: "Carriers check this against your actual prescription records — mismatches raise flags." },
  { question: "Have you had any related complications?", why: "The complications frequently outweigh the diagnosis itself in how this gets underwritten." },
];

export type Scenario = { situation: string; outcome: string };

export type ConditionFact = {
  slug: string;
  name: string;
  tier: Tier;
  note: string;
  scenarios: Scenario[];
  medications?: { name: string; note: string }[];
};

export const CONDITIONS: ConditionFact[] = [
  { slug: "adl-limitations", name: "ADL Limitations", tier: "guaranteed", note: "Regular help with basics — bathing, dressing — reads as a high-risk signal to most carriers.",
    scenarios: [
      { situation: "Independent most days, occasional help with a task or two", outcome: "Some carriers still offer level or graded" },
      { situation: "Regular help needed across multiple daily activities", outcome: "Usually guaranteed acceptance" },
    ] },
  { slug: "alcohol-use-history", name: "Alcohol-Use History", tier: "time-dependent", note: "Fresh out of treatment, expect a wait. Years of stable sobriety behind you, and the outlook improves a lot.",
    scenarios: [
      { situation: "5+ years sober, no related health fallout", outcome: "Often level" },
      { situation: "Treatment or a related hospital stay in the past 1–2 years", outcome: "Usually lands graded, modified, or guaranteed acceptance" },
    ] },
  { slug: "aortic-aneurysm", name: "Aortic Aneurysm", tier: "time-dependent", note: "Get it surgically repaired and stay stable a couple of years — more carriers come into play after that.",
    scenarios: [
      { situation: "Repaired 2+ years back, stable ever since", outcome: "Often level with select carriers" },
      { situation: "Recently diagnosed, or not yet repaired", outcome: "Usually graded or modified" },
    ] },
  { slug: "asthma", name: "Asthma", tier: "level", note: "Controlled without oxygen, and this barely moves the needle on your outcome.",
    scenarios: [
      { situation: "Inhaler-managed, no oxygen involved", outcome: "Almost always level" },
      { situation: "Frequent flare-ups or ER visits", outcome: "Can shift to graded with some carriers" },
    ] },
  { slug: "afib", name: "Atrial Fibrillation (AFib)", tier: "level", note: "Stable and treated, this one commonly lands at level rates.",
    scenarios: [
      { situation: "Medication-controlled, no other heart conditions in the picture", outcome: "Usually level" },
      { situation: "Recently diagnosed, or paired with other cardiac issues", outcome: "Can move to graded or modified" },
    ] },
  { slug: "bipolar-disorder", name: "Bipolar Disorder", tier: "level", note: "Treated the same as most well-managed mental health conditions — commonly a yes.",
    scenarios: [
      { situation: "Medication-stable, no recent hospitalization", outcome: "Usually level" },
      { situation: "Recent hospitalization or a medication change", outcome: "Can move to graded or modified" },
    ] },
  { slug: "blood-clots-dvt-pe", name: "Blood Clots / DVT / PE", tier: "level", note: "Usually not a problem on its own — what's behind the blood-thinner prescription matters more than the clot did.",
    scenarios: [
      { situation: "One past event, resolved and stable since", outcome: "Often level" },
      { situation: "Recurring clots, or an unresolved condition underneath", outcome: "Can move to graded or modified" },
    ] },
  { slug: "bypass-surgery", name: "Bypass Surgery", tier: "time-dependent", note: "About a year out from surgery, stable, and level coverage becomes the norm.",
    scenarios: [
      { situation: "12+ months post-op, stable, nothing further since", outcome: "Often level" },
      { situation: "Under a year out, or additional procedures since", outcome: "Usually graded or modified" },
    ] },
  { slug: "cancer-history", name: "Cancer History", tier: "time-dependent", note: "The two-year remission mark is what opens up full coverage with many carriers; still in treatment, or the cancer has spread, and guaranteed acceptance is the likelier path.",
    scenarios: [
      { situation: "2+ years in remission, no recurrence", outcome: "Often level with several carriers" },
      { situation: "In treatment now, or diagnosed within the past year", outcome: "Usually guaranteed acceptance" },
    ] },
  { slug: "chronic-pancreatitis", name: "Chronic Pancreatitis", tier: "graded-modified", note: "Graded is the typical landing spot; a related history of alcohol use narrows things further.",
    scenarios: [
      { situation: "Managed, flare-ups infrequent", outcome: "Often graded" },
      { situation: "Frequent flare-ups or a hospital stay", outcome: "Can move to modified or guaranteed acceptance" },
    ] },
  { slug: "cirrhosis-liver-disease", name: "Cirrhosis / Liver Disease", tier: "level", note: "Mild cases often clear fine. Liver failure, or a transplant recommendation on file? The wait gets a lot longer.",
    scenarios: [
      { situation: "Early-stage, stable, complication-free", outcome: "Sometimes level" },
      { situation: "Advanced disease, or a transplant recommended", outcome: "Usually guaranteed acceptance" },
    ] },
  { slug: "congestive-heart-failure", name: "Congestive Heart Failure", tier: "guaranteed", note: "With this diagnosis, dodging a waiting period is nearly impossible.",
    scenarios: [
      { situation: "Mild, well-managed, lower classification", outcome: "Occasionally graded with select carriers" },
      { situation: "Moderate to advanced", outcome: "Usually guaranteed acceptance" },
    ] },
  { slug: "copd", name: "COPD", tier: "graded-modified", note: "A few carriers still offer level rates. Add home oxygen to the picture, though, and it's a near-universal decline.",
    scenarios: [
      { situation: "Mild, inhaler-managed, no oxygen", outcome: "Sometimes level with select carriers" },
      { situation: "On home oxygen", outcome: "Almost always guaranteed acceptance" },
    ],
    medications: [{ name: "Albuterol, Spiriva, Symbicort", note: "Standard maintenance inhalers — usually read as a moderate, well-managed case." }] },
  { slug: "crohns-colitis-ibd", name: "Crohn's / Colitis (IBD)", tier: "level", note: "Manage it well, and approval tends to follow.",
    scenarios: [
      { situation: "Medication-managed, in remission", outcome: "Usually level" },
      { situation: "Active flare-ups, or recent surgery", outcome: "Can move to graded" },
    ] },
  { slug: "dementia-alzheimers", name: "Dementia or Alzheimer's", tier: "guaranteed", note: "A near-automatic decline for simplified issue — if you're reading this entry, it's likely on behalf of a family member, not yourself.",
    scenarios: [
      { situation: "Early-stage, mild cognitive impairment", outcome: "Occasionally graded with select carriers" },
      { situation: "Moderate to advanced diagnosis", outcome: "Almost always guaranteed acceptance" },
    ] },
  { slug: "depression-anxiety", name: "Depression or Anxiety", tier: "level", note: "Get it treated, and acceptance follows — very much the norm here.",
    scenarios: [
      { situation: "Medication or therapy managed, stable", outcome: "Usually level" },
      { situation: "Recent hospitalization, or a history of self-harm", outcome: "Can move to graded or guaranteed acceptance" },
    ],
    medications: [{ name: "Zoloft, Lexapro, Wellbutrin", note: "Stable, everyday prescriptions — read as routine, not a red flag, in most files." }] },
  { slug: "diabetes", name: "Diabetes", tier: "level", note: "Stable, well-controlled type 2 diabetes very commonly still lands at level despite being a chronic condition — complications are what shift the tier.",
    scenarios: [
      { situation: "Diet, pills, or insulin keep it controlled, no complications", outcome: "Often level, sometimes even at standard non-diabetic rates" },
      { situation: "Neuropathy or retinopathy present, otherwise stable", outcome: "Often still level with the right carrier, sometimes graded" },
      { situation: "Insulin shock, diabetic coma, or amputation in the past 2 years", outcome: "Usually graded, modified, or guaranteed acceptance" },
    ],
    medications: [
      { name: "Metformin, glipizide, Januvia", note: "Standard oral medications — typically read as well-controlled type 2 diabetes." },
      { name: "Insulin (Lantus, Novolog, and similar)", note: "Points to a more advanced or longer-running case; plenty of carriers still offer level anyway." },
    ] },
  { slug: "diabetic-amputation", name: "Diabetic Amputation", tier: "time-dependent", note: "Give it roughly two stable years, and level coverage comes back into reach.",
    scenarios: [
      { situation: "2+ years since amputation, stable, no further complications", outcome: "Often level with select carriers" },
      { situation: "Inside the 2-year mark", outcome: "Usually graded, modified, or guaranteed acceptance" },
    ] },
  { slug: "enlarged-prostate", name: "Enlarged Prostate", tier: "level", note: "Rarely tips the outcome either way.",
    scenarios: [{ situation: "Typical case, managed or not", outcome: "Almost always level" }] },
  { slug: "epilepsy-seizures", name: "Epilepsy / Seizures", tier: "level", note: "Commonly a yes, especially with seizures under medication control.",
    scenarios: [
      { situation: "1+ years seizure-free on a stable medication", outcome: "Usually level" },
      { situation: "A recent seizure, or a medication change", outcome: "Can move to graded" },
    ],
    medications: [{ name: "Keppra, Dilantin, Lamictal", note: "The medication matters less than the seizure-free stretch behind you — that's what carriers actually weigh." }] },
  { slug: "fibromyalgia", name: "Fibromyalgia", tier: "level", note: "Rarely a sticking point for underwriters.",
    scenarios: [{ situation: "Typical case, managed or not", outcome: "Usually level" }] },
  { slug: "heart-attack", name: "Heart Attack", tier: "time-dependent", note: "Stay stable for roughly a year out, and level coverage commonly comes back into play.",
    scenarios: [
      { situation: "12+ months out, stable, no cardiac events since", outcome: "Often level with select carriers" },
      { situation: "Inside the 12-month mark", outcome: "Usually graded or modified" },
    ] },
  { slug: "heart-valve-disease", name: "Heart Valve Disease", tier: "time-dependent", note: "Freshly diagnosed or repaired usually means waiting before full coverage kicks in.",
    scenarios: [
      { situation: "Repaired and stable, 1+ years out", outcome: "Often level with select carriers" },
      { situation: "Recently diagnosed, or recently repaired", outcome: "Usually graded or modified" },
    ] },
  { slug: "hepatitis-c", name: "Hepatitis C", tier: "level", note: "Clear it with successful treatment, and more carriers open their doors.",
    scenarios: [
      { situation: "Treated and cleared, undetectable", outcome: "Often level" },
      { situation: "Currently active, or untreated", outcome: "Can move to graded or modified" },
    ] },
  { slug: "high-blood-pressure", name: "High Blood Pressure", tier: "level", note: "Underwriters see this constantly — kept under control, it's treated as routine, not a red flag.",
    scenarios: [{ situation: "Controlled by medication or lifestyle", outcome: "Almost always level" }],
    medications: [{ name: "Lisinopril, losartan, amlodipine", note: "An everyday prescription for underwriting — rarely a concern by itself." }] },
  { slug: "high-cholesterol", name: "High Cholesterol", tier: "level", note: "This one barely registers as a concern in underwriting.",
    scenarios: [{ situation: "Typical case, treated or not", outcome: "Almost always level" }],
    medications: [{ name: "Statins (Lipitor, Crestor, and similar)", note: "Common enough that it barely counts as an underwriting concern." }] },
  { slug: "hiv-aids", name: "HIV / AIDS", tier: "graded-modified", note: "Well-managed HIV can find partial coverage; an AIDS diagnosis tends to push things toward guaranteed acceptance instead.",
    scenarios: [
      { situation: "HIV, well-managed, viral load undetectable", outcome: "Sometimes graded with select carriers" },
      { situation: "AIDS diagnosis", outcome: "Usually guaranteed acceptance" },
    ] },
  { slug: "home-oxygen", name: "Home Oxygen", tier: "guaranteed", note: "Close to an automatic decline, with one exception — oxygen used only for treated sleep apnea.",
    scenarios: [
      { situation: "Oxygen strictly for treated sleep apnea", outcome: "Often still level or graded" },
      { situation: "Oxygen for a lung or heart condition", outcome: "Almost always guaranteed acceptance" },
    ] },
  { slug: "kidney-disease", name: "Kidney Disease", tier: "level", note: "Early-stage disease is usually fine; dialysis or kidney failure points toward a much longer wait.",
    scenarios: [
      { situation: "Early stage, stable, no dialysis", outcome: "Often level" },
      { situation: "On dialysis, or in kidney failure", outcome: "Usually guaranteed acceptance" },
    ] },
  { slug: "lupus", name: "Lupus", tier: "level", note: "A handful of carriers offer level coverage outright; more active or severe cases tend toward graded instead.",
    scenarios: [
      { situation: "Mild, well-managed, flares infrequent", outcome: "Often level with select carriers" },
      { situation: "Active, or affecting major organs", outcome: "Usually graded or modified" },
    ] },
  { slug: "multiple-sclerosis", name: "Multiple Sclerosis", tier: "level", note: "A number of carriers offer level coverage; needing real help with daily activities tends to add a wait instead.",
    scenarios: [
      { situation: "Stable, independent, symptoms mild", outcome: "Often level with select carriers" },
      { situation: "Real mobility limits, or help needed with daily activities", outcome: "Usually graded or guaranteed acceptance" },
    ] },
  { slug: "neuropathy", name: "Neuropathy", tier: "level", note: "On its own, usually a non-issue; as a complication of diabetes, some carriers grade it instead.",
    scenarios: [
      { situation: "Mild, no serious underlying condition behind it", outcome: "Usually level" },
      { situation: "A complication of advancing diabetes or another condition", outcome: "Can move to graded" },
    ] },
  { slug: "obesity-bmi-over-40", name: "Obesity / BMI Over 40", tier: "level", note: "A number of carriers skip build entirely in simplified-issue underwriting.",
    scenarios: [{ situation: "Typical case, related conditions or not", outcome: "Often still level with the right carrier" }] },
  { slug: "organ-transplant", name: "Organ Transplant", tier: "time-dependent", note: "The further out from the transplant, the more options open up — closer to it typically means a longer wait.",
    scenarios: [
      { situation: "5+ years post-transplant, stable", outcome: "Sometimes level with select carriers" },
      { situation: "A few years out or less, or still on the waiting list", outcome: "Usually guaranteed acceptance" },
    ] },
  { slug: "osteoporosis", name: "Osteoporosis", tier: "level", note: "Rarely moves the outcome at all.",
    scenarios: [{ situation: "Typical case, treated or not", outcome: "Almost always level" }] },
  { slug: "pacemaker-defibrillator", name: "Pacemaker / Defibrillator", tier: "time-dependent", note: "About a year out, level coverage is common — unless heart failure is part of the diagnosis.",
    scenarios: [
      { situation: "12+ months out, stable, no heart-failure diagnosis", outcome: "Often level" },
      { situation: "Recently placed, or heart failure is part of the diagnosis", outcome: "Usually graded or guaranteed acceptance" },
    ] },
  { slug: "parkinsons-disease", name: "Parkinson's Disease", tier: "level", note: "Some carriers offer level coverage; real mobility limits are usually the tipping point toward a wait.",
    scenarios: [
      { situation: "Early stage, independent, symptoms mild", outcome: "Often level with select carriers" },
      { situation: "Significant mobility limits, or wheelchair use", outcome: "Usually graded or guaranteed acceptance" },
    ] },
  { slug: "peripheral-artery-disease", name: "Peripheral Artery Disease", tier: "level", note: "Usually not an issue on its own; recent vascular surgery is what adds a wait.",
    scenarios: [
      { situation: "Medication-managed, no recent surgery", outcome: "Often level" },
      { situation: "Recent vascular surgery, or amputation", outcome: "Usually graded or modified" },
    ] },
  { slug: "rheumatoid-arthritis", name: "Rheumatoid Arthritis", tier: "level", note: "One of the more straightforward yeses on this list.",
    scenarios: [{ situation: "Medication-managed", outcome: "Usually level" }] },
  { slug: "sarcoidosis", name: "Sarcoidosis", tier: "level", note: "Commonly approved, as long as oxygen isn't part of the picture.",
    scenarios: [
      { situation: "Mild, no oxygen involved", outcome: "Usually level" },
      { situation: "Home oxygen required", outcome: "Usually guaranteed acceptance" },
    ] },
  { slug: "sleep-apnea", name: "Sleep Apnea", tier: "level", note: "On a CPAP machine, this is usually a non-issue rather than a red flag.",
    scenarios: [
      { situation: "Diagnosed, using a CPAP machine", outcome: "Almost always level" },
      { situation: "Diagnosed, not treated", outcome: "Can move to graded with some carriers" },
    ] },
  { slug: "smokers-tobacco-users", name: "Smokers & Tobacco Users", tier: "level", note: "Tobacco changes your rate, not whether you qualify — day-one coverage is still there, just priced at the tobacco rate.",
    scenarios: [{ situation: "Typical case", outcome: "Level coverage, tobacco-rated premium" }] },
  { slug: "social-security-disability", name: "Social Security Disability", tier: "time-dependent", note: "The disability status itself isn't what sets the tier — the underlying diagnosis is.",
    scenarios: [{ situation: "Entirely dependent on the underlying condition", outcome: "See that condition's own guide" }] },
  { slug: "stent-placement", name: "Stent Placement", tier: "time-dependent", note: "About a year past the procedure, stable, and level coverage is back on the table.",
    scenarios: [
      { situation: "12+ months out, stable, nothing further since", outcome: "Often level" },
      { situation: "Inside the 12-month mark", outcome: "Usually graded or modified" },
    ] },
  { slug: "stroke", name: "Stroke", tier: "time-dependent", note: "About a year out, level coverage commonly opens up; a TIA — a mini-stroke — usually gets gentler treatment.",
    scenarios: [
      { situation: "12+ months out and stable, or a TIA (mini-stroke)", outcome: "Often level with select carriers" },
      { situation: "Inside 12 months, or repeat events", outcome: "Usually graded or modified" },
    ] },
  { slug: "thyroid-disease", name: "Thyroid Disease", tier: "level", note: "An easy approval in most files.",
    scenarios: [{ situation: "Medication-managed", outcome: "Almost always level" }],
    medications: [{ name: "Levothyroxine (Synthroid)", note: "A routine, everyday prescription — essentially a non-issue for underwriting." }] },
];

export function findCondition(slug: string): ConditionFact | undefined {
  return CONDITIONS.find((c) => c.slug === slug);
}

// Groups the A–Z list by body system / condition type for the browse-by-condition widgets.
// A different axis than Tier above (which groups by underwriting outcome) — this one is purely
// for scanability, so visitors can jump to the area relevant to them instead of reading straight
// down an alphabetical wall.
export const CONDITION_CATEGORIES: { label: string; slugs: string[] }[] = [
  { label: "Heart & Circulatory", slugs: [
    "aortic-aneurysm", "afib", "blood-clots-dvt-pe", "bypass-surgery", "congestive-heart-failure",
    "heart-attack", "heart-valve-disease", "high-blood-pressure", "high-cholesterol",
    "pacemaker-defibrillator", "peripheral-artery-disease", "stent-placement", "stroke",
  ] },
  { label: "Respiratory", slugs: ["asthma", "copd", "home-oxygen", "sleep-apnea", "smokers-tobacco-users"] },
  { label: "Diabetes & Metabolic", slugs: ["diabetes", "diabetic-amputation", "obesity-bmi-over-40", "thyroid-disease"] },
  { label: "Cancer", slugs: ["cancer-history"] },
  { label: "Neurological", slugs: ["dementia-alzheimers", "epilepsy-seizures", "multiple-sclerosis", "neuropathy", "parkinsons-disease"] },
  { label: "Mental & Behavioral Health", slugs: ["alcohol-use-history", "bipolar-disorder", "depression-anxiety"] },
  { label: "Digestive & Liver", slugs: ["chronic-pancreatitis", "cirrhosis-liver-disease", "crohns-colitis-ibd", "hepatitis-c"] },
  { label: "Kidney, Organs & Immune", slugs: ["kidney-disease", "organ-transplant", "hiv-aids"] },
  { label: "Autoimmune & Joint", slugs: ["fibromyalgia", "lupus", "osteoporosis", "rheumatoid-arthritis", "sarcoidosis"] },
  { label: "Other", slugs: ["adl-limitations", "enlarged-prostate", "social-security-disability"] },
];
