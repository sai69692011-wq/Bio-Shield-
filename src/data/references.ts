// Single source of truth for the research library.
// Every reference links to a real, verifiable scholarly or official page.
// Summaries describe what each source actually studied and what it does NOT say about Bio-Shield.

export type Reference = {
  id: string;
  num: number;
  authors: string;
  year: number;
  title: string;
  venue: string;
  doi?: string;
  url: string;
  accessed: string; // YYYY-MM-DD (only when actually checked)
  geography: string;
  sampleOrSetting: string;
  plainSummary: string;
  supports: string[];
  doesNotProve: string[];
};

export const references: Reference[] = [
  {
    id: "miller2023",
    num: 1,
    authors: "Miller, G. Z., Tapia Pitzzu, D., Cooper Sargent, M., & Gearhart, J.",
    year: 2023,
    title:
      "Bisphenols and alternative developers in thermal paper receipts from the U.S. market assessed by Fourier transform infrared spectroscopy",
    venue: "Environmental Pollution, 335, 122232",
    doi: "10.1016/j.envpol.2023.122232",
    url: "https://pubmed.ncbi.nlm.nih.gov/37481030/",
    accessed: "2026-10-25",
    geography: "United States (2017 and 2022 samples)",
    sampleOrSetting:
      "Receipts collected from U.S. stores, restaurants, and gas stations; identified color-developer chemistry via FTIR.",
    plainSummary:
      "In the tested U.S. receipts, bisphenol S (BPS) was the most frequently detected developer (about 85% of tested receipts in 2022), followed by the non-bisphenol Pergafast 201 (~12%), while BPA was rare (~1%). The study documented a shift away from BPA between 2017 and 2022, particularly among large national retailers, and reported an increase in non-bisphenol alternatives.",
    supports: [
      "BPS has become a common replacement developer for BPA in at least one studied market (the U.S.).",
      "Receipt chemistry changes over time and differs between paper sources and retailers.",
      "Non-bisphenol alternative developers are already in use.",
    ],
    doesNotProve: [
      "It does not describe Indian or any other non-U.S. market.",
      "It does not test any barrier film or Bio-Shield concept.",
      "It does not measure dermal absorption or protection.",
      "It does not identify which chemicals are present in any particular retailer’s current receipts.",
    ],
  },
  {
    id: "semerjian2023",
    num: 2,
    authors: "Semerjian, L., Alawadhi, N., & Nazer, K.",
    year: 2023,
    title:
      "Detection of bisphenol A in thermal paper receipts and assessment of human exposure: A case study from Sharjah, United Arab Emirates",
    venue: "PLOS ONE, 18(3), e0283675",
    doi: "10.1371/journal.pone.0283675",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10047534/",
    accessed: "2026-10-25",
    geography: "Sharjah, United Arab Emirates",
    sampleOrSetting:
      "30 thermal-paper receipts collected from various local retailers; BPA measured and modelled exposure calculated using stated assumptions.",
    plainSummary:
      "In this small local sample from Sharjah, BPA was detected in the tested thermal receipts and the authors published estimated daily intakes using assumptions about handling frequency, transfer rate, and body weight.",
    supports: [
      "BPA was still used in at least some thermal receipts in Sharjah at the time of sampling.",
      "Local receipt chemistry can differ substantially from other regions.",
      "Exposure estimates depend strongly on the assumptions used (handling time, transfer coefficient, etc.).",
    ],
    doesNotProve: [
      "It does not provide a global or Indian prevalence figure.",
      "It does not test BPS or newer alternative developers in that sample.",
      "It does not evaluate any barrier, glove, cream, or film.",
      "Its modelled exposures are not measurements of absorbed dose.",
    ],
  },
  {
    id: "bernier2017",
    num: 3,
    authors: "Bernier, M. R. & Vandenberg, L. N.",
    year: 2017,
    title:
      "Handling of thermal paper: Implications for dermal exposure to bisphenol A and its alternatives",
    venue: "PLOS ONE, 12(6), e0178449",
    doi: "10.1371/journal.pone.0178449",
    url: "https://pubmed.ncbi.nlm.nih.gov/28570582/",
    accessed: "2026-10-25",
    geography: "United States (laboratory and behaviour study)",
    sampleOrSetting:
      "Observed receipt-handling behaviour of participants; combined with prior transfer data to model potential dermal exposure.",
    plainSummary:
      "The paper documented how people actually handle receipts (duration, fingers used, contact with wet/greasy hands, subsequent hand-to-face contact) and used those observations to discuss variables that shape dermal exposure to bisphenols from thermal paper.",
    supports: [
      "Contact time, contact area, hand condition (dry vs wet/greasy), and handling behaviour matter for how much chemical can transfer.",
      "Real-world handling is highly variable between people and situations.",
    ],
    doesNotProve: [
      "It does not establish that a barrier film reduces exposure.",
      "Its exposure estimates are model-based and depend on the chosen transfer coefficients.",
      "It does not measure skin absorption in vivo.",
      "It does not test BPS transfer in the same detail as BPA.",
    ],
  },
  {
    id: "oecd428",
    num: 4,
    authors: "OECD",
    year: 2004,
    title: "Test No. 428: Skin Absorption: In Vitro Method",
    venue: "OECD Guidelines for the Testing of Chemicals, Section 4",
    doi: "10.1787/9789264071087-en",
    url: "https://www.oecd.org/en/publications/test-no-428-skin-absorption-in-vitro-method_9789264071087-en.html",
    accessed: "2026-10-25",
    geography: "International standard method",
    sampleOrSetting:
      "OECD guideline describing in vitro skin-absorption testing using appropriate skin membranes and diffusion cells.",
    plainSummary:
      "This is the official test guideline describing how dermal absorption of a chemical is measured in a qualified laboratory: using a suitable skin membrane (human or animal, per ethical rules), a diffusion-cell setup, validated analytical chemistry, mass-balance reporting, and careful controls.",
    supports: [
      "Skin-absorption measurement is a specialized laboratory procedure — not a school demonstration.",
      "Mass balance (applied, on skin, in receptor fluid, washed off, etc.) is required to interpret results.",
      "Any legitimate claim about skin absorption requires validated analytical methods and appropriate oversight.",
    ],
    doesNotProve: [
      "It does not evaluate any particular barrier film or recipe.",
      "It does not provide data on BPA/BPS transfer from receipts specifically.",
      "It is not a do-it-yourself protocol for a school booth.",
    ],
  },
  {
    id: "ozkaleli2025",
    num: 5,
    authors:
      "Ozkaleli Akcetin, M., Gul, H. K., Goren, I. E., Daglioglu, N., & Kurt-Karakus, P. B.",
    year: 2025,
    title:
      "BPA and its analogues in thermal papers: an assessment of presence and dermal exposure",
    venue: "Environmental Science: Advances, 4, 489–502",
    doi: "10.1039/D4VA00132J",
    url: "https://pubs.rsc.org/en/content/articlelanding/2025/va/d4va00132j",
    accessed: "2026-10-25",
    geography: "Türkiye",
    sampleOrSetting:
      "152 thermal-paper receipts from various commercial settings in Türkiye; concentrations of bisphenols measured and deterministic/probabilistic dermal-exposure estimates calculated.",
    plainSummary:
      "In the tested Turkish receipts, BPA and BPS were the most frequently detected bisphenols (99% and 100% of samples respectively), with other analogues (BPB, BPZ, BPF, BPP) also present at lower rates. The authors modelled dermal exposure for the general public and for workers, and compared estimates to various health-based guidance values.",
    supports: [
      "BPS appears to be a major technical alternative to BPA in yet another studied market.",
      "A single receipt can contain multiple bisphenol analogues, not just BPA.",
      "Occupational (cashier-style) exposure scenarios can differ from occasional consumer handling.",
    ],
    doesNotProve: [
      "It does not describe India specifically.",
      "It does not test any barrier concept.",
      "Its exposure estimates are still model-based, not direct measurements of absorbed dose in people.",
      "Concentrations cannot be generalized to every receipt or retailer.",
    ],
  },
];

// Helper to get a reference by numeric marker
export function getRef(num: number) {
  return references.find((r) => r.num === num);
}
