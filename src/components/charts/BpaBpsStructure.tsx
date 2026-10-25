// Simple skeletal chemical structures for BPA and BPS.
// These are schematic, 2D, bond-line style SVGs — not to scale, but structurally recognizable.
// BPA:  two phenol rings joined by a propane (C(CH3)2) bridge.
// BPS:  two phenol rings joined by a sulfone (SO2) bridge.

function Phenol({ x, y, rotate = 0, mirror = false }: { x: number; y: number; rotate?: number; mirror?: boolean }) {
  // hexagon with -OH at the para position
  const s = mirror ? -1 : 1;
  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate}) scale(${s} 1)`}>
      <polygon
        points="0,-26 22.5,-13 22.5,13 0,26 -22.5,13 -22.5,-13"
        fill="#F7F8F5"
        stroke="#202A25"
        strokeWidth="1.6"
      />
      {/* OH at top (para to bridge) */}
      <line x1="0" y1="-26" x2="0" y2="-40" stroke="#202A25" strokeWidth="1.8" />
      <text x="3" y="-46" fontSize="11" fill="#244C3A" fontWeight="700" fontFamily="var(--font-body), sans-serif">OH</text>
    </g>
  );
}

export default function BpaBpsStructure() {
  return (
    <figure className="card">
      <figcaption className="mb-3">
        <h4 className="text-forest-dark mb-1">
          Figure 5. BPA and BPS — schematic structures
        </h4>
        <p className="text-[0.88rem] text-charcoal-soft">
          BPA and BPS are both small phenolic molecules with two phenol rings
          — hence “bisphenol.” They differ in the chemical bridge between the
          rings. BPA uses an isopropylidene bridge (–C(CH₃)₂–); BPS uses a
          sulfone bridge (–SO₂–). Their structural similarity is why researchers
          ask whether BPS shares biological activity with BPA.
        </p>
      </figcaption>

      <div className="grid md:grid-cols-2 gap-6 items-center" role="img" aria-label="Schematic chemical structures of BPA and BPS">
        {/* BPA */}
        <div className="flex flex-col items-center">
          <svg viewBox="0 0 240 170" className="w-full max-w-[240px]">
            <Phenol x={60} y={85} />
            {/* bridge -C(CH3)2- */}
            <line x1="82.5" y1="98" x2="157.5" y2="98" stroke="#202A25" strokeWidth="2" />
            <circle cx="120" cy="98" r="3" fill="#202A25" />
            {/* methyl groups up and down */}
            <line x1="120" y1="98" x2="120" y2="70" stroke="#202A25" strokeWidth="2" />
            <text x="126" y="72" fontSize="10" fill="#C79A48" fontWeight="700" fontFamily="var(--font-body), sans-serif">CH₃</text>
            <line x1="120" y1="98" x2="120" y2="126" stroke="#202A25" strokeWidth="2" />
            <text x="126" y="134" fontSize="10" fill="#C79A48" fontWeight="700" fontFamily="var(--font-body), sans-serif">CH₃</text>
            <Phenol x={180} y={85} mirror />
            <text x="120" y="165" textAnchor="middle" fontSize="13" fill="#244C3A" fontWeight="700" fontFamily="var(--font-body), sans-serif">
              Bisphenol A (BPA)
            </text>
          </svg>
          <p className="text-[0.8rem] text-charcoal-soft mt-2 text-center max-w-xs">
            Two phenols connected by a <em>propane</em> bridge — the “A” in BPA
            stands for <em>acetone</em>, used in its manufacture.
          </p>
        </div>

        {/* BPS */}
        <div className="flex flex-col items-center">
          <svg viewBox="0 0 240 170" className="w-full max-w-[240px]">
            <Phenol x={60} y={85} />
            <line x1="82.5" y1="98" x2="105" y2="98" stroke="#202A25" strokeWidth="2" />
            {/* S atom */}
            <circle cx="120" cy="98" r="12" fill="#EEE8F7" stroke="#7f6aa3" strokeWidth="1.6" />
            <text x="120" y="102" textAnchor="middle" fontSize="11" fill="#5a4a80" fontWeight="700" fontFamily="var(--font-body), sans-serif">S</text>
            {/* two =O oxygens off the sulfone */}
            <line x1="114" y1="88" x2="108" y2="74" stroke="#202A25" strokeWidth="1.6" />
            <line x1="126" y1="88" x2="132" y2="74" stroke="#202A25" strokeWidth="1.6" />
            <text x="100" y="72" fontSize="10" fill="#b3453a" fontWeight="700" fontFamily="var(--font-body), sans-serif">O</text>
            <text x="132" y="72" fontSize="10" fill="#b3453a" fontWeight="700" fontFamily="var(--font-body), sans-serif">O</text>
            <line x1="135" y1="98" x2="157.5" y2="98" stroke="#202A25" strokeWidth="2" />
            <Phenol x={180} y={85} mirror />
            <text x="120" y="165" textAnchor="middle" fontSize="13" fill="#244C3A" fontWeight="700" fontFamily="var(--font-body), sans-serif">
              Bisphenol S (BPS)
            </text>
          </svg>
          <p className="text-[0.8rem] text-charcoal-soft mt-2 text-center max-w-xs">
            Two phenols connected by a <em>sulfone</em> (SO₂) group — the “S”
            in BPS. Used as a BPA replacement in several markets.
          </p>
        </div>
      </div>

      <p className="mt-4 text-[0.8rem] text-charcoal-soft italic">
        Schematic bond-line illustrations (not a quantum-accurate model).
        These structures illustrate why “BPA-free” does not automatically mean
        “bisphenol-free”: a substitute can be a closely related molecule.
      </p>
    </figure>
  );
}
