// Horizontal bar chart of developer frequency in Miller et al. 2023 (U.S., 2022).
// Source: Miller et al. 2023, Environmental Pollution 335:122232.
// Numbers are taken from the paper's abstract/highlights:
// BPS ~85%, Pergafast 201 ~12%, BPA ~1%, other alternatives <1%.
// These describe a U.S. 2022 sample ONLY — not India, not every retailer.

const bars = [
  { label: "BPS (Bisphenol S)", value: 85, color: "#244C3A", note: "≈ 85%" },
  { label: "Pergafast 201 (non-bisphenol)", value: 12, color: "#C79A48", note: "≈ 12%" },
  { label: "BPA (Bisphenol A)", value: 1, color: "#7f6aa3", note: "≈ 1%" },
  { label: "Other non-bisphenol alternatives", value: 2, color: "#6b8f7a", note: "< 2% combined" },
];

export default function USDeveloperChart() {
  return (
    <figure className="card">
      <figcaption className="mb-3">
        <h4 className="text-forest-dark mb-1">
          Figure 1. Developer chemicals in tested U.S. receipts (2022)
        </h4>
        <p className="text-[0.88rem] text-charcoal-soft">
          Approximate frequency of the detected color-developer, among receipts
          tested in Miller et al. (2023). BPS was the dominant developer in
          this U.S. sample; BPA was rare (~1%); non-bisphenol alternatives were
          increasing since 2017.
        </p>
      </figcaption>
      <div className="space-y-3" role="img" aria-label="Bar chart of developer chemical frequency in tested US receipts 2022">
        {bars.map((b) => (
          <div key={b.label}>
            <div className="flex justify-between text-[0.9rem] mb-1">
              <span className="font-medium text-charcoal">{b.label}</span>
              <span className="font-mono text-xs text-charcoal-soft">{b.note}</span>
            </div>
            <div className="h-6 w-full bg-sage/40 rounded-md overflow-hidden border border-sage-dark">
              <div
                className="h-full rounded-md flex items-center justify-end pr-2 text-[0.75rem] text-warm font-semibold"
                style={{ width: `${Math.max(b.value, 4)}%`, background: b.color }}
              >
                {b.value >= 8 ? `${b.value}%` : ""}
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-3 text-[0.8rem] text-charcoal-soft italic">
        Source: Miller, Tapia Pitzzu, Cooper Sargent &amp; Gearhart (2023),
        Environmental Pollution 335:122232<span className="cite">[1]</span>.
        <strong> U.S. sample only.</strong> Does not describe Indian receipts
        or any specific retailer today.
      </p>
    </figure>
  );
}
