// Schematic of an OECD 428 in-vitro diffusion (Franz) cell used to measure
// skin absorption. Not to any specific scale, and not an engineering drawing —
// it's here to explain WHAT is measured in a legitimate skin-absorption test,
// so visitors understand why a school demo can't prove absorption.

export default function DiffusionCell() {
  return (
    <figure className="card">
      <figcaption className="mb-3">
        <h4 className="text-forest-dark mb-1">
          Figure 6. What a real skin-absorption test looks like (conceptual)
        </h4>
        <p className="text-[0.88rem] text-charcoal-soft">
          OECD Test Guideline 428 describes an in-vitro diffusion-cell (Franz
          cell) setup: a skin membrane separates a donor chamber (where the
          chemical is applied) from a receptor chamber filled with a
          physiological fluid. Samples are taken from the receptor over time
          and measured analytically; mass balance is checked. This is
          specialist laboratory work, not a school experiment.
        </p>
      </figcaption>

      <div className="flex justify-center" role="img" aria-label="Schematic of an in-vitro diffusion Franz cell for skin absorption testing">
        <svg viewBox="0 0 520 360" className="w-full max-w-xl">
          <defs>
            <linearGradient id="receptor" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#d9eef7" />
              <stop offset="100%" stopColor="#a9d0e4" />
            </linearGradient>
            <linearGradient id="skinGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f3d7bb" />
              <stop offset="100%" stopColor="#e3b78c" />
            </linearGradient>
          </defs>

          {/* donor chamber */}
          <path d="M180 30 L340 30 L340 130 Q340 150 320 150 L200 150 Q180 150 180 130 Z" fill="#F7F8F5" stroke="#202A25" strokeWidth="2" />
          <text x="260" y="70" textAnchor="middle" fontSize="12" fill="#202A25" fontWeight="700" fontFamily="var(--font-body), sans-serif">DONOR CHAMBER</text>
          <text x="260" y="88" textAnchor="middle" fontSize="10" fill="#3a4640" fontFamily="var(--font-body), sans-serif">applied dose (BPA/BPS on receipt)</text>
          {/* molecules */}
          {Array.from({ length: 10 }).map((_, i) => (
            <circle key={`d${i}`} cx={200 + i * 14} cy={110 + (i % 2) * 6} r={3.5} fill="#244C3A" opacity={0.7} />
          ))}

          {/* skin membrane clamped */}
          <rect x="150" y="148" width="220" height="22" fill="url(#skinGrad)" stroke="#c79a70" strokeWidth="2" />
          <text x="400" y="163" fontSize="11" fill="#5a3a20" fontWeight="700" fontFamily="var(--font-body), sans-serif">Skin membrane</text>
          {/* clamps */}
          <rect x="145" y="140" width="14" height="38" fill="#202A25" />
          <rect x="361" y="140" width="14" height="38" fill="#202A25" />

          {/* receptor chamber */}
          <path d="M200 170 Q180 170 180 190 L180 290 Q180 320 260 320 Q340 320 340 290 L340 190 Q340 170 320 170 Z"
                fill="url(#receptor)" stroke="#202A25" strokeWidth="2" />
          {/* receptor fluid */}
          <path d="M188 210 L332 210 L332 288 Q332 312 260 312 Q188 312 188 288 Z" fill="#a9d0e4" opacity="0.6" />
          <text x="260" y="240" textAnchor="middle" fontSize="12" fill="#14324a" fontWeight="700" fontFamily="var(--font-body), sans-serif">RECEPTOR FLUID</text>
          <text x="260" y="258" textAnchor="middle" fontSize="10" fill="#14324a" fontFamily="var(--font-body), sans-serif">(sampled over time &amp; analysed)</text>

          {/* sampling port */}
          <line x1="340" y1="250" x2="410" y2="250" stroke="#202A25" strokeWidth="2" />
          <rect x="410" y="236" width="30" height="28" rx="3" fill="#F7F8F5" stroke="#202A25" strokeWidth="2" />
          <text x="425" y="255" textAnchor="middle" fontSize="9" fill="#202A25" fontWeight="700" fontFamily="var(--font-body), sans-serif">SAMPLE</text>

          {/* stir bar */}
          <rect x="235" y="298" width="50" height="6" rx="3" fill="#202A25" opacity="0.6" />
          <text x="260" y="350" textAnchor="middle" fontSize="10" fill="#3a4640" fontStyle="italic" fontFamily="var(--font-body), sans-serif">stirring + temperature control</text>

          {/* arrows indicating some molecules pass */}
          <g stroke="#C79A48" strokeWidth="1.8" fill="none" markerEnd="url(#arrCell)">
            <line x1="230" y1="145" x2="228" y2="200" strokeDasharray="2 3" />
            <line x1="260" y1="145" x2="260" y2="205" strokeDasharray="2 3" />
            <line x1="290" y1="145" x2="295" y2="200" strokeDasharray="2 3" />
          </g>
          <defs>
            <marker id="arrCell" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M0,0 L10,5 L0,10 z" fill="#C79A48" />
            </marker>
          </defs>

          <text x="100" y="100" fontSize="10" fill="#3a4640" fontFamily="var(--font-body), sans-serif">chemical</text>
          <text x="100" y="114" fontSize="10" fill="#3a4640" fontFamily="var(--font-body), sans-serif">applied here</text>
        </svg>
      </div>

      <p className="mt-3 text-[0.8rem] text-charcoal-soft italic">
        Conceptual schematic (after OECD TG 428)<span className="cite">[4]</span>.
        A real study validates the analytical method, runs blanks and
        spike-recovery checks, reports mass balance, and uses independent
        repeats. That is why a wipe on a table or a food-colouring demo
        cannot tell us about absorption through skin.
      </p>
    </figure>
  );
}
