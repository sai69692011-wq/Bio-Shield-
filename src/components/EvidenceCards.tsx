import Citation from "@/components/Citation";

type Card = {
  eyebrow: string;
  badge: string;
  stat: string;
  statLabel: string;
  headline: string;
  body: string;
  context: string;
  year: string;
  href: string;
  citeNum: number;
};

const cards: Card[] = [
  {
    eyebrow: "PUBLISHED STUDY — NOT A BIO-SHIELD TEST",
    badge: "U.S. RECEIPT SAMPLE",
    stat: "≈85%",
    statLabel: "of tested 2022 U.S. receipts used BPS as developer",
    headline: "BPS is the dominant developer in this U.S. survey",
    body:
      "In the 2022 U.S. sample, BPS was the most frequently detected developer, followed by Pergafast 201 (~12%), while BPA was rare (~1%). Non-bisphenol alternatives rose between 2017 and 2022.",
    context: "U.S. retail receipts collected 2017 and 2022; developer chemistry identified via FTIR.",
    year: "2023",
    href: "https://pubmed.ncbi.nlm.nih.gov/37481030/",
    citeNum: 1,
  },
  {
    eyebrow: "PUBLISHED STUDY — NOT A BIO-SHIELD TEST",
    badge: "U.S. SHIFT OVER TIME",
    stat: "5% → 14%",
    statLabel: "non-bisphenol developers (2017 → 2022)",
    headline: "The market is shifting, but slowly",
    body:
      "In the same U.S. study, bisphenol-based developers (BPA+BPS combined) decreased from ~93% of receipts in 2017 to ~86% in 2022, while non-bisphenol alternatives increased, especially among large national retailers.",
    context: "Same U.S. sample as the card above — direction of change, not a global trend.",
    year: "2023",
    href: "https://pubmed.ncbi.nlm.nih.gov/37481030/",
    citeNum: 1,
  },
  {
    eyebrow: "PUBLISHED STUDY — NOT A BIO-SHIELD TEST",
    badge: "TÜRKIYE SURVEY",
    stat: "99–100%",
    statLabel: "of 152 Turkish receipts had detectable BPA and BPS",
    headline: "BPA and BPS co-occurred across this Turkish sample",
    body:
      "In 152 thermal receipts from commercial settings in Türkiye, BPA was detected in 99% of samples (1.98–1061 µg/g) and BPS in 100% (0.07–210 µg/g); other analogues (BPB, BPZ, BPF, BPP) were also present at lower rates.",
    context: "Commercial receipts in Türkiye, 2025; not a measure of Indian receipts.",
    year: "2025",
    href: "https://pubs.rsc.org/en/content/articlelanding/2025/va/d4va00132j",
    citeNum: 5,
  },
  {
    eyebrow: "PUBLISHED STUDY — NOT A BIO-SHIELD TEST",
    badge: "EXPOSURE MODELLING",
    stat: "6",
    statLabel: "behavioural factors shape how much chemical transfers",
    headline: "Handling behaviour changes exposure",
    body:
      "Observed receipt-handling — contact time, area, hand moisture/grease, repeat handling, and hand-to-face contact — all change how much chemical may transfer; models depend on these assumptions.",
    context: "U.S. behaviour + modelling study; not a barrier test.",
    year: "2017",
    href: "https://pubmed.ncbi.nlm.nih.gov/28570582/",
    citeNum: 3,
  },
  {
    eyebrow: "OFFICIAL METHOD",
    badge: "SKIN-ABSORPTION METHOD",
    stat: "OECD 428",
    statLabel: "the recognised in-vitro skin-absorption guideline",
    headline: "Skin absorption needs a diffusion cell and analytics",
    body:
      "In-vitro skin-absorption testing uses a skin membrane in a diffusion (Franz) cell, validated analytical chemistry, blanks, spike/recovery checks, and mass-balance reporting. It is specialist lab work.",
    context: "International standard method — not a DIY school protocol.",
    year: "2004",
    href: "https://www.oecd.org/en/publications/test-no-428-skin-absorption-in-vitro-method_9789264071087-en.html",
    citeNum: 4,
  },
  {
    eyebrow: "GEOGRAPHIC CAVEAT",
    badge: "READ CAREFULLY",
    stat: "0",
    statLabel: "peer-reviewed Indian receipt datasets in our starter library",
    headline: "Local (Indian) receipt chemistry is a gap",
    body:
      "The verified starter references cover the U.S., Sharjah (UAE), and Türkiye. We found no verified starter source specifically characterising Indian thermal-paper chemistry — so we do not claim any prevalence figure for Indian receipts.",
    context: "A candidate local study is proposed as future work with a lab partner.",
    year: "—",
    href: "#status",
    citeNum: 0,
  },
];

export default function EvidenceCards() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5" role="list">
      {cards.map((c, i) => (
        <a
          key={i}
          href={c.href}
          target={c.href.startsWith("http") ? "_blank" : undefined}
          rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
          className="card group block no-underline transition-all hover:-translate-y-0.5 hover:shadow-lg hover:border-forest/40"
          role="listitem"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-[0.65rem] font-bold tracking-[0.15em] uppercase text-danger">
              {c.eyebrow}
            </span>
            <span className="text-[0.68rem] font-mono text-charcoal-soft">{c.year}</span>
          </div>
          <span className="badge badge-hypothesis mb-3 text-[0.7rem]">{c.badge}</span>
          <div className="my-3">
            <div className="font-display text-4xl text-forest-dark leading-none mb-1 tracking-tight">
              {c.stat}
            </div>
            <p className="text-[0.85rem] text-charcoal-soft leading-snug">{c.statLabel}</p>
          </div>
          <h4 className="text-charcoal text-[1rem] mb-1 leading-snug">{c.headline}</h4>
          <p className="text-[0.88rem] text-charcoal-soft leading-relaxed">{c.body}</p>
          <p className="mt-3 text-[0.75rem] text-charcoal-soft italic border-t border-sage-dark/70 pt-2">
            {c.context}
            {c.citeNum > 0 && (
              <> <Citation n={c.citeNum} /></>
            )}
          </p>
          <span className="mt-3 inline-flex items-center gap-1 text-[0.8rem] font-semibold text-forest group-hover:text-forest-dark">
            {c.href.startsWith("http") ? "Read source" : "See future work"}
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              {c.href.startsWith("http") ? (
                <>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </>
              ) : (
                <>
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </>
              )}
            </svg>
          </span>
        </a>
      ))}
    </div>
  );
}
