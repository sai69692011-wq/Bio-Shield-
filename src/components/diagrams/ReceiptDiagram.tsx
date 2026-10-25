// Stylised illustration of a thermal receipt emerging from a print head,
// with faint molecular dots on its surface. Pure SVG — no external images.
// No brand logos; generic checkout icons only.

export default function ReceiptDiagram() {
  return (
    <div className="w-full fade-up">
      <svg
        viewBox="0 0 420 480"
        className="w-full max-w-sm mx-auto"
        role="img"
        aria-labelledby="receiptTitle receiptDesc"
      >
        <title id="receiptTitle">Stylised illustration of a thermal receipt</title>
        <desc id="receiptDesc">
          A receipt emerging from a checkout printer, with dots on its surface
          representing heat-sensitive developer chemistry. Illustrative only —
          not a chemical test.
        </desc>

        <defs>
          <linearGradient id="printerBody" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2f6449" />
            <stop offset="100%" stopColor="#183628" />
          </linearGradient>
          <linearGradient id="paperShade" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#f0f2ee" />
          </linearGradient>
          <filter id="softShadow" x="-10%" y="-10%" width="120%" height="130%">
            <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#202a25" floodOpacity="0.18" />
          </filter>
        </defs>

        {/* Printer body */}
        <rect x="40" y="20" width="340" height="110" rx="14" fill="url(#printerBody)" filter="url(#softShadow)" />
        <rect x="60" y="40" width="300" height="16" rx="4" fill="#183628" />
        <circle cx="95" cy="48" r="4" fill="#C79A48" />
        <circle cx="112" cy="48" r="4" fill="#DCE8DD" opacity="0.6" />
        <circle cx="129" cy="48" r="4" fill="#DCE8DD" opacity="0.6" />
        {/* Slot */}
        <rect x="70" y="90" width="280" height="8" rx="3" fill="#0f241b" />
        <text x="210" y="80" textAnchor="middle" fill="#DCE8DD" opacity="0.75" fontSize="11" fontFamily="ui-monospace, monospace" letterSpacing="2">
          THERMAL PRINTER
        </text>

        {/* Receipt paper */}
        <g filter="url(#softShadow)">
          <path
            d="M90 98 L90 430 Q105 420 120 430 Q135 440 150 430 Q165 420 180 430 Q195 440 210 430 Q225 420 240 430 Q255 440 270 430 Q285 420 300 430 Q315 440 330 430 L330 98 Z"
            fill="url(#paperShade)"
            stroke="#b8cfba"
            strokeWidth="1"
          />
          {/* top tear line */}
          <line x1="90" y1="108" x2="330" y2="108" stroke="#b8cfba" strokeDasharray="3 4" strokeWidth="1" />

          {/* Text lines on receipt */}
          <g fill="#202a25" opacity="0.85">
            <text x="210" y="135" textAnchor="middle" fontSize="13" fontWeight="700" fontFamily="var(--font-body), sans-serif">THANK YOU</text>
            <line x1="110" y1="150" x2="310" y2="150" stroke="#202a25" strokeWidth="0.8" />
            <rect x="110" y="165" width="140" height="5" rx="2" />
            <rect x="265" y="165" width="45" height="5" rx="2" />
            <rect x="110" y="180" width="100" height="5" rx="2" />
            <rect x="265" y="180" width="45" height="5" rx="2" />
            <rect x="110" y="195" width="170" height="5" rx="2" />
            <rect x="265" y="195" width="45" height="5" rx="2" />
            <rect x="110" y="210" width="120" height="5" rx="2" />
            <rect x="265" y="210" width="45" height="5" rx="2" />
            <line x1="110" y1="230" x2="310" y2="230" stroke="#202a25" strokeWidth="0.8" />
            <rect x="110" y="245" width="90" height="6" rx="2" />
            <rect x="265" y="245" width="45" height="6" rx="2" fill="#244c3a" />
            {/* barcode-ish bars */}
            <g transform="translate(110 275)">
              {Array.from({ length: 28 }).map((_, i) => (
                <rect key={i} x={i * 7} y={0} width={i % 3 === 0 ? 2 : 3} height={38} fill="#202a25" opacity={i % 5 === 0 ? 0.9 : 0.6} />
              ))}
            </g>
            <text x="210" y="340" textAnchor="middle" fontSize="9" opacity="0.6" fontFamily="ui-monospace, monospace">*** HEAT-SENSITIVE PAPER ***</text>
          </g>

          {/* Chemical dots (abstract) */}
          <g>
            {[
              { x: 130, y: 260, c: "#244c3a" },
              { x: 155, y: 290, c: "#C79A48" },
              { x: 200, y: 255, c: "#244c3a" },
              { x: 245, y: 280, c: "#C79A48" },
              { x: 280, y: 262, c: "#244c3a" },
              { x: 175, y: 310, c: "#C79A48" },
              { x: 220, y: 320, c: "#244c3a" },
              { x: 270, y: 325, c: "#C79A48" },
              { x: 120, y: 365, c: "#244c3a", s: 0.7 },
              { x: 190, y: 370, c: "#C79A48", s: 0.7 },
              { x: 260, y: 372, c: "#244c3a", s: 0.7 },
              { x: 305, y: 360, c: "#C79A48", s: 0.7 },
            ].map((d, i) => (
              <g key={i}>
                <circle cx={d.x} cy={d.y} r={4 * (d.s ?? 1)} fill={d.c} opacity="0.75" />
                <circle cx={d.x - 3 * (d.s ?? 1)} cy={d.y - 2 * (d.s ?? 1)} r={1.6 * (d.s ?? 1)} fill={d.c} opacity="0.4" />
                <circle cx={d.x + 3 * (d.s ?? 1)} cy={d.y + 2 * (d.s ?? 1)} r={1.6 * (d.s ?? 1)} fill={d.c} opacity="0.4" />
              </g>
            ))}
          </g>
        </g>

        {/* Callout labels */}
        <g>
          <line x1="355" y1="260" x2="405" y2="220" stroke="#244c3a" strokeWidth="1.2" />
          <circle cx="355" cy="260" r="3" fill="#244c3a" />
          <text x="408" y="216" fill="#244c3a" fontSize="11" fontWeight="600" fontFamily="var(--font-body), sans-serif">Some papers use</text>
          <text x="408" y="230" fill="#244c3a" fontSize="11" fontWeight="600" fontFamily="var(--font-body), sans-serif">BPA, BPS, or</text>
          <text x="408" y="244" fill="#244c3a" fontSize="11" fontWeight="600" fontFamily="var(--font-body), sans-serif">other developers</text>
        </g>

        {/* Small disclaimer */}
        <text x="210" y="465" textAnchor="middle" fontSize="10" fill="#3a4640" opacity="0.7" fontFamily="var(--font-body), sans-serif">
          Illustrative — not a chemical test of any real receipt.
        </text>
      </svg>
    </div>
  );
}
