// Four-layer diagram: receipt -> contact -> film barrier -> skin.
// Three arrows labelled "on the paper", "transferred to a surface",
// and "absorbed through skin?" to show these are different stages.

export default function LayerDiagram() {
  return (
    <div className="card bg-warm border-sage-dark overflow-x-auto">
      <div className="min-w-[640px] md:min-w-0">
        <svg
          viewBox="0 0 900 340"
          className="w-full"
          role="img"
          aria-labelledby="layerTitle layerDesc"
        >
          <title id="layerTitle">Layer diagram: paper, contact, barrier, skin</title>
          <desc id="layerDesc">
            Four stacked layers — thermal paper, direct contact surface,
            optional barrier film, and skin — with arrows showing that
            chemical on paper, transfer to a surface, retention by a film,
            and absorption through skin are separate stages.
          </desc>

          <defs>
            <linearGradient id="paperLyr" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#f0f2ee" />
            </linearGradient>
            <linearGradient id="filmLyr" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#eee8f7" />
              <stop offset="100%" stopColor="#d9cee9" />
            </linearGradient>
            <linearGradient id="skinLyr" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f3d7bb" />
              <stop offset="100%" stopColor="#e3b78c" />
            </linearGradient>
            <marker id="arrowForest" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M0,0 L10,5 L0,10 z" fill="#244c3a" />
            </marker>
            <marker id="arrowGold" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M0,0 L10,5 L0,10 z" fill="#C79A48" />
            </marker>
            <marker id="arrowQ" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M0,0 L10,5 L0,10 z" fill="#b3453a" />
            </marker>
          </defs>

          {/* Layer: Paper */}
          <rect x="40" y="40" width="820" height="50" rx="6" fill="url(#paperLyr)" stroke="#b8cfba" />
          <text x="60" y="62" fill="#202a25" fontSize="13" fontWeight="700" fontFamily="var(--font-body), sans-serif">THERMAL PAPER</text>
          <text x="60" y="80" fill="#3a4640" fontSize="11" fontFamily="var(--font-body), sans-serif">Coated with heat-sensitive chemistry (dye + developer). Some papers may use BPA, BPS, Pergafast 201, or other developers.</text>
          {/* chemical dots */}
          {Array.from({ length: 18 }).map((_, i) => (
            <circle key={i} cx={540 + i * 16} cy={65} r={3} fill="#244c3a" opacity="0.55" />
          ))}

          {/* Arrow 1 */}
          <line x1="180" y1="95" x2="180" y2="135" stroke="#244c3a" strokeWidth="2" markerEnd="url(#arrowForest)" />
          <text x="195" y="118" fill="#244c3a" fontSize="12" fontWeight="600" fontFamily="var(--font-body), sans-serif">① Present on the paper</text>

          {/* Layer: Contact surface */}
          <rect x="40" y="140" width="820" height="46" rx="6" fill="#DCE8DD" stroke="#b8cfba" />
          <text x="60" y="162" fill="#202a25" fontSize="13" fontWeight="700" fontFamily="var(--font-body), sans-serif">CONTACT SURFACE</text>
          <text x="60" y="180" fill="#3a4640" fontSize="11" fontFamily="var(--font-body), sans-serif">(e.g., finger or test surface) — chemical may transfer on contact, depending on time, pressure, moisture, and paper chemistry.</text>
          {Array.from({ length: 8 }).map((_, i) => (
            <circle key={i} cx={560 + i * 20} cy={163} r={2.4} fill="#244c3a" opacity="0.45" />
          ))}

          {/* Arrow 2 */}
          <line x1="430" y1="190" x2="430" y2="225" stroke="#C79A48" strokeWidth="2" markerEnd="url(#arrowGold)" />
          <text x="445" y="212" fill="#8a4c17" fontSize="12" fontWeight="600" fontFamily="var(--font-body), sans-serif">② Transferred to a surface (measurable)</text>

          {/* Layer: Optional film barrier */}
          <rect x="40" y="230" width="820" height="40" rx="6" fill="url(#filmLyr)" stroke="#d9cee9" strokeDasharray="6 4" />
          <text x="60" y="255" fill="#202a25" fontSize="13" fontWeight="700" fontFamily="var(--font-body), sans-serif">
            OPTIONAL REMOVABLE BARRIER FILM <tspan fill="#8a4c17" fontWeight="600">(hypothetical — untested)</tspan>
          </text>

          {/* Arrow 3 */}
          <line x1="740" y1="275" x2="740" y2="305" stroke="#b3453a" strokeWidth="2" markerEnd="url(#arrowQ)" />
          <text x="620" y="297" fill="#b3453a" fontSize="12" fontWeight="700" fontFamily="var(--font-body), sans-serif">
            ③ Absorbed through skin?
          </text>
          <text x="540" y="312" fill="#b3453a" fontSize="10.5" fontFamily="var(--font-body), sans-serif">
            Requires lab measurement — not the same as surface transfer.
          </text>

          {/* Layer: Skin */}
          <rect x="40" y="305" width="820" height="28" rx="6" fill="url(#skinLyr)" stroke="#c79a70" />
          <text x="60" y="324" fill="#5a3a20" fontSize="12" fontWeight="700" fontFamily="var(--font-body), sans-serif">
            SKIN / SKIN MEMBRANE — absorption is a separate biological step, measured with validated OECD-style methods in a qualified lab.
          </text>
        </svg>
      </div>

      <p className="text-[0.9rem] text-charcoal-soft mt-3">
        <strong>Reading this diagram:</strong> going down each layer is a
        separate question that must be measured separately. A chemical can be
        on the paper but not transfer; transfer to a surface but not be
        retained by a film; be retained but then released later; or sit on
        the skin surface without being absorbed.
      </p>
    </div>
  );
}
