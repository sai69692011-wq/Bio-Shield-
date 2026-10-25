// Detection-frequency / concentration-range chart from the Türkiye 2025 study.
// Source: Ozkaleli Akcetin et al. 2025, Environ. Sci.: Adv. 4, 489–502.
// Numbers taken from the abstract (RSC page):
//   BPA detected in 99% of 152 samples, range 1.98–1061 µg/g
//   BPS detected in 100% of 152 samples, range 0.070–210 µg/g  (abstract says 0.070;
//     pdf text shows 0.007 in one line — we use the abstract's 0.070 figure).
// Other analogues (BPB, BPZ, BPF, BPP) were present at lower rates (not charted individually).
// The chart shows detection frequency AND a log-scale-style concentration bar.
// We deliberately keep it simple and non-scary.

const chem = [
  { name: "BPA", detected: 99, min: 1.98, max: 1061, color: "#244C3A" },
  { name: "BPS", detected: 100, min: 0.07, max: 210, color: "#C79A48" },
];

// Log axis: 0.1, 1, 10, 100, 1000 µg/g
const axisMarks = [0.1, 1, 10, 100, 1000];
const logMax = Math.log10(1000);

function toLogWidth(v: number) {
  const l = Math.max(Math.log10(Math.max(v, 0.05)), -1.3);
  return ((l + 1.3) / (logMax + 1.3)) * 100;
}

export default function TurkiyeChart() {
  return (
    <figure className="card">
      <figcaption className="mb-3">
        <h4 className="text-forest-dark mb-1">
          Figure 3. BPA and BPS in tested thermal-paper receipts, Türkiye (2025)
        </h4>
        <p className="text-[0.88rem] text-charcoal-soft">
          Detection frequency (in % of 152 samples) and the reported
          concentration range (µg per gram of paper). Concentrations vary
          widely between receipts — a single average does not describe every
          piece of paper.
        </p>
      </figcaption>

      <div className="space-y-5" role="img" aria-label="Detection frequency and concentration range of BPA and BPS in Turkiye receipts 2025">
        {chem.map((c) => (
          <div key={c.name}>
            <div className="flex justify-between items-baseline mb-1 text-[0.9rem]">
              <span className="font-semibold text-charcoal">{c.name}</span>
              <span className="font-mono text-xs text-charcoal-soft">
                detected in <strong style={{ color: c.color }}>{c.detected}%</strong> of samples
              </span>
            </div>
            {/* Range bar (log scale) */}
            <div className="relative h-7 w-full rounded-md bg-sage/40 border border-sage-dark overflow-hidden">
              <div
                className="absolute top-0 bottom-0 rounded-md opacity-70"
                style={{
                  left: `${toLogWidth(c.min)}%`,
                  width: `${Math.max(toLogWidth(c.max) - toLogWidth(c.min), 4)}%`,
                  background: c.color,
                }}
                title={`${c.name}: ${c.min}–${c.max} µg/g`}
              />
              {/* axis ticks */}
              {axisMarks.map((m) => (
                <div
                  key={m}
                  className="absolute top-0 bottom-0 border-l border-charcoal/15"
                  style={{ left: `${toLogWidth(m)}%` }}
                />
              ))}
            </div>
            <div className="relative h-4 text-[0.65rem] text-charcoal-soft font-mono">
              {axisMarks.map((m) => (
                <span
                  key={m}
                  className="absolute"
                  style={{ left: `${toLogWidth(m)}%`, transform: "translateX(-50%)" }}
                >
                  {m}
                </span>
              ))}
              <span className="absolute right-0 text-[0.7rem] italic font-sans">µg/g (log scale)</span>
            </div>
            <p className="text-[0.8rem] text-charcoal-soft">
              Range: <strong>{c.min}–{c.max} µg/g</strong> paper
            </p>
          </div>
        ))}
      </div>

      <p className="mt-4 text-[0.8rem] text-charcoal-soft italic">
        Source: Ozkaleli Akcetin, Gul, Goren, Daglioglu &amp; Kurt-Karakus
        (2025), <em>Environmental Science: Advances</em> 4, 489–502<span className="cite">[5]</span>.
        Sample of 152 receipts from commercial settings in Türkiye.
        <strong> Türkiye sample only</strong>; not a global figure and not a
        measurement of Indian receipts.
      </p>
    </figure>
  );
}
