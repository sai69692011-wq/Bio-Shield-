// Candidate-material categories as a compact visual panel.
// Labelled as literature-screening, not a formulation/recipe.

const cats = [
  {
    title: "Film-former candidate",
    eg: "e.g. polyvinyl alcohol (PVA)",
    note: "Forms a peelable continuous layer; used in other peelable products.",
    color: "#244c3a",
    icon: (
      <g stroke="currentColor" strokeWidth="1.5" fill="none">
        <rect x="5" y="4" width="14" height="18" rx="2" fill="#ffffff" />
        <rect x="5" y="10" width="14" height="12" rx="0" fill="#EEE8F7" strokeDasharray="2 2" />
        <path d="M5 10h14" />
      </g>
    ),
  },
  {
    title: "Flexibility / plasticizer",
    eg: "e.g. a polyol or glycol",
    note: "Could reduce cracking — but must be checked for compatibility and skin safety.",
    color: "#2f6449",
    icon: (
      <g stroke="currentColor" strokeWidth="1.5" fill="none">
        <path d="M8 4h8v4h-8z" fill="#dce8dd" />
        <path d="M6 8h12l-1 14H7z" fill="#ffffff" />
        <path d="M10 14h4" />
      </g>
    ),
  },
  {
    title: "Capture candidate",
    eg: "e.g. a cyclodextrin",
    note: "Might bind bisphenols in principle — NOT validated here; capture may release later.",
    color: "#C79A48",
    icon: (
      <g stroke="currentColor" strokeWidth="1.5" fill="none">
        <circle cx="12" cy="13" r="7" fill="#fbe9d7" />
        <circle cx="12" cy="13" r="3" fill="#ffffff" />
        <circle cx="12" cy="13" r="1" fill="currentColor" stroke="none" />
      </g>
    ),
  },
  {
    title: "Adsorbent alternative",
    eg: "e.g. activated charcoal / clay",
    note: "Strong binders in other contexts; no evidence they provide skin-safe receipt protection.",
    color: "#5a4a80",
    icon: (
      <g stroke="currentColor" strokeWidth="1.5" fill="none">
        <path d="M7 20c-1-4 1-8 5-8s6 4 5 8z" fill="#3a4640" opacity="0.9" />
        <circle cx="10" cy="13" r="0.8" fill="currentColor" stroke="none" />
        <circle cx="13" cy="11" r="0.8" fill="currentColor" stroke="none" />
        <circle cx="15" cy="15" r="0.8" fill="currentColor" stroke="none" />
      </g>
    ),
  },
  {
    title: "Processing medium",
    eg: "e.g. purified water or a permitted solvent",
    note: "Required to cast a uniform film from dry ingredients; solvent choice matters for safety.",
    color: "#3a6f8c",
    icon: (
      <g stroke="currentColor" strokeWidth="1.5" fill="none">
        <path d="M8 4h8v10l3 6H5l3-6z" fill="#d9eef7" />
        <path d="M10 18c0-2 2-2 2-4 0 2 2 2 2 4" />
      </g>
    ),
  },
];

export default function CandidateMaterials() {
  return (
    <div className="relative">
      <div className="absolute inset-x-0 top-3 flex items-center justify-center pointer-events-none">
        <div className="text-[0.68rem] font-bold tracking-[0.2em] uppercase text-danger bg-warm px-3 py-1 rounded-full border border-danger/30 z-10">
          LITERATURE SCREENING — NOT A RECIPE OR SKIN-USE FORMULATION
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 pt-8">
        {cats.map((c) => (
          <div key={c.title} className="p-3 rounded-lg bg-white border border-sage-dark text-center hover:border-forest/30 transition-colors">
            <div className="mx-auto mb-2 w-12 h-12 rounded-lg flex items-center justify-center" style={{ background: `${c.color}15`, color: c.color }}>
              <svg viewBox="0 0 24 26" width="26" height="26" aria-hidden="true">{c.icon}</svg>
            </div>
            <div className="text-[0.82rem] font-bold text-charcoal leading-tight">{c.title}</div>
            <div className="text-[0.72rem] italic text-forest mb-1">{c.eg}</div>
            <p className="text-[0.74rem] text-charcoal-soft leading-snug mt-1">{c.note}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
