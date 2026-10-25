// Cross-section of thermal paper showing the heat-sensitive coating.
// Based on standard descriptions: paper base, undercoat (often clay/porous layer),
// thermal coating (leuco dye + developer sensitiser), top/protective overcoat (varies).
// This is a schematic — not an engineering drawing of any specific product.

export default function ThermalPaperCrossSection() {
  const layers = [
    { label: "Protective overcoat", sub: "(optional; polymer)", color: "#e7d7b6", h: 16 },
    { label: "Thermal coating", sub: "leuco dye + developer (BPA / BPS / other)", color: "#EEE8F7", h: 26 },
    { label: "Undercoat / primer", sub: "improves heat sensitivity", color: "#DCE8DD", h: 16 },
    { label: "Paper base", sub: "plain paper fibre", color: "#f0e6d2", h: 50 },
    { label: "Back coat (optional)", sub: "anti-curl / barrier", color: "#e7d7b6", h: 10 },
  ];
  return (
    <figure className="card">
      <figcaption className="mb-3">
        <h4 className="text-forest-dark mb-1">
          Figure 4. Stylised cross-section of thermal paper
        </h4>
        <p className="text-[0.88rem] text-charcoal-soft">
          Thermal paper is not just paper — it is a multi-layer coating. The
          heat-sensitive layer contains a colourless (leuco) dye and a
          developer chemical. Heat from the printer head melts tiny particles,
          allowing the developer to donate a proton to the dye, which turns it
          dark.
        </p>
      </figcaption>
      <div className="flex flex-col items-center" role="img" aria-label="Cross-section diagram of thermal paper layers">
        <svg viewBox="0 0 420 170" className="w-full max-w-md">
          {(() => {
            let y = 10;
            const rects = layers.map((l, i) => {
              const r = (
                <g key={i}>
                  <rect x="30" y={y} width="360" height={l.h} fill={l.color} stroke="#202A25" strokeOpacity="0.25" />
                  <text x="400" y={y + l.h / 2 + 4} textAnchor="start" fontSize="10" fill="#202A25" fontWeight="600" fontFamily="var(--font-body), sans-serif">
                    {l.label}
                  </text>
                  <text x="20" y={y + l.h / 2 + 4} textAnchor="end" fontSize="9" fill="#3a4640" fontFamily="var(--font-body), sans-serif">
                    {l.sub}
                  </text>
                </g>
              );
              y += l.h;
              return r;
            });
            return rects;
          })()}
          {/* heat arrows from below? from above (print head) */}
          <g stroke="#b3453a" strokeWidth="1.8" fill="none" markerEnd="url(#arrowHeat)">
            <line x1="80" y1="2" x2="80" y2="10" />
            <line x1="140" y1="2" x2="140" y2="10" />
            <line x1="200" y1="2" x2="200" y2="10" />
            <line x1="260" y1="2" x2="260" y2="10" />
            <line x1="320" y1="2" x2="320" y2="10" />
          </g>
          <text x="210" y="8" textAnchor="middle" fontSize="10" fill="#b3453a" fontWeight="700" fontFamily="var(--font-body), sans-serif">
            HEAT from print head
          </text>
          <defs>
            <marker id="arrowHeat" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M0,0 L10,5 L0,10 z" fill="#b3453a" />
            </marker>
          </defs>
        </svg>
      </div>
      <p className="mt-3 text-[0.8rem] text-charcoal-soft italic">
        Schematic only — layer thicknesses and exact chemistry vary between
        manufacturers and grades. Where BPA, BPS or alternative developers
        sit depends on the formulation; they are not always a uniform powder
        on the surface.
      </p>
    </figure>
  );
}
