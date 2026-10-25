// Shift-in-developer-chemistry chart for the U.S. 2017 → 2022.
// From Miller et al. 2023 highlights:
//   Bisphenol-based receipts (BPS or BPA as developer) ~93% in 2017 → ~86% in 2022.
//   Non-bisphenol alternatives ~5% in 2017 → ~14% in 2022.
// (Rounding; paper states 5%→16% in highlights but also 5%→14% in abstract text;
// we use the abstract's 14% to stay conservative.)
// Geographically scoped to the U.S. sample only.

const groups = [
  {
    year: "2017",
    bis: 93,
    non: 5,
    other: 2,
  },
  {
    year: "2022",
    bis: 86,
    non: 14,
    other: 0,
  },
];

export default function ShiftChart() {
  return (
    <figure className="card">
      <figcaption className="mb-3">
        <h4 className="text-forest-dark mb-1">
          Figure 2. Shift in developer class in the same study (U.S., 2017 vs 2022)
        </h4>
        <p className="text-[0.88rem] text-charcoal-soft">
          Bisphenol-based developers (BPA + BPS combined) decreased modestly,
          while non-bisphenol alternatives such as Pergafast 201 increased,
          particularly among large national retailers.
        </p>
      </figcaption>
      <div className="grid grid-cols-2 gap-6" role="img" aria-label="Stacked bar comparing 2017 and 2022 US receipt developer class">
        {groups.map((g) => (
          <div key={g.year}>
            <div className="text-sm font-semibold text-charcoal mb-2">{g.year}</div>
            <div className="h-8 w-full flex rounded-md overflow-hidden border border-sage-dark">
              <div
                className="h-full flex items-center justify-center text-[0.75rem] text-warm font-semibold"
                style={{ width: `${g.bis}%`, background: "#244C3A" }}
                title={`Bisphenol (BPA/BPS): ${g.bis}%`}
              >
                {g.bis}%
              </div>
              <div
                className="h-full flex items-center justify-center text-[0.75rem] text-charcoal font-semibold"
                style={{ width: `${g.non}%`, background: "#C79A48" }}
                title={`Non-bisphenol: ${g.non}%`}
              >
                {g.non}%
              </div>
              {g.other > 0 && (
                <div
                  className="h-full flex items-center justify-center text-[0.7rem] text-charcoal"
                  style={{ width: `${g.other}%`, background: "#b8cfba" }}
                  title={`Other/unidentified: ${g.other}%`}
                >
                  {g.other}%
                </div>
              )}
            </div>
            <div className="flex gap-3 text-[0.75rem] mt-2 text-charcoal-soft flex-wrap">
              <span className="inline-flex items-center gap-1">
                <span className="inline-block w-3 h-3 rounded-sm" style={{ background: "#244C3A" }} />
                Bisphenol (BPA+BPS)
              </span>
              <span className="inline-flex items-center gap-1">
                <span className="inline-block w-3 h-3 rounded-sm" style={{ background: "#C79A48" }} />
                Non-bisphenol
              </span>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-3 text-[0.8rem] text-charcoal-soft italic">
        Source: Miller et al. (2023)<span className="cite">[1]</span>.
        U.S. retail receipt sample, 2017 vs 2022. Rounded percentages from
        published text. <strong>U.S. sample only</strong>; not a global trend
        and not an Indian figure.
      </p>
    </figure>
  );
}
