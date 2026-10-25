// Hero three-step visual: RECEIPT → CANDIDATE FILM → MEASURED TRANSFER
// Clean scientific illustration — does NOT imply the film works.
export default function HeroFlow() {
  return (
    <div className="fade-up" role="img" aria-label="Three-step concept diagram: receipt, candidate film, measured transfer">
      <svg viewBox="0 0 520 360" className="w-full max-w-md mx-auto">
        <defs>
          <linearGradient id="hfPaper" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#f0f2ee" />
          </linearGradient>
          <linearGradient id="hfFilm" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#eee8f7" />
            <stop offset="100%" stopColor="#d9cee9" />
          </linearGradient>
          <linearGradient id="hfLens" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#dce8dd" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#244c3a" stopOpacity="0.15" />
          </linearGradient>
          <filter id="hfShadow" x="-10%" y="-10%" width="120%" height="130%">
            <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#202a25" floodOpacity="0.18" />
          </filter>
          <marker id="hfArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
            <path d="M0,0 L10,5 L0,10 z" fill="#244c3a" />
          </marker>
        </defs>

        {/* Stage 1: receipt */}
        <g transform="translate(20 40)" filter="url(#hfShadow)">
          <rect x="0" y="10" width="120" height="180" rx="6" fill="url(#hfPaper)" stroke="#b8cfba" />
          {/* serrated top */}
          <path d="M0 10 L10 2 L20 10 L30 2 L40 10 L50 2 L60 10 L70 2 L80 10 L90 2 L100 10 L110 2 L120 10" fill="none" stroke="#b8cfba" strokeWidth="1.5" />
          {/* text lines */}
          <g fill="#202a25" opacity="0.85">
            <rect x="12" y="35" width="70" height="4" rx="2" />
            <rect x="12" y="48" width="90" height="3" rx="1.5" opacity="0.7" />
            <rect x="12" y="58" width="80" height="3" rx="1.5" opacity="0.7" />
            <rect x="12" y="68" width="60" height="3" rx="1.5" opacity="0.7" />
            <rect x="12" y="86" width="96" height="1" fill="#202a25" />
            <rect x="12" y="96" width="50" height="4" rx="2" />
            <rect x="12" y="106" width="96" height="8" rx="2" fill="#244c3a" opacity="0.85" />
            {/* barcode */}
            <g transform="translate(12 130)">
              {Array.from({ length: 15 }).map((_, i) => (
                <rect key={i} x={i * 6.4} y={0} width={i % 3 === 0 ? 2 : 3} height={30} fill="#202a25" opacity={i % 4 === 0 ? 0.9 : 0.55} />
              ))}
            </g>
          </g>
          {/* chemical dots */}
          {[
            { x: 80, y: 120 }, { x: 40, y: 120 }, { x: 60, y: 145 }, { x: 95, y: 145 }, { x: 25, y: 150 }
          ].map((d, i) => (
            <circle key={i} cx={d.x} cy={d.y} r="3.2" fill="#244c3a" opacity="0.65" />
          ))}
          {/* magnifier circle highlighting coating */}
          <g transform="translate(85 80)">
            <circle r="34" fill="url(#hfLens)" stroke="#C79A48" strokeWidth="2" />
            <circle r="28" fill="none" stroke="#C79A48" strokeWidth="0.5" strokeDasharray="2 2" opacity="0.5" />
            {/* zoomed coating layer */}
            <g>
              <rect x="-22" y="-12" width="44" height="6" fill="#eee8f7" stroke="#d9cee9" />
              <rect x="-22" y="-6" width="44" height="8" fill="#f0f2ee" />
              <circle cx="-10" cy="-3" r="2" fill="#244c3a" />
              <circle cx="4" cy="-3" r="2" fill="#C79A48" />
              <circle cx="14" cy="-3" r="1.6" fill="#244c3a" />
            </g>
            {/* handle */}
            <line x1="24" y1="24" x2="38" y2="38" stroke="#C79A48" strokeWidth="4" strokeLinecap="round" />
          </g>
        </g>
        <text x="80" y="252" textAnchor="middle" fontSize="12" fontWeight="700" fill="#244c3a" fontFamily="var(--font-body), sans-serif">RECEIPT</text>
        <text x="80" y="268" textAnchor="middle" fontSize="10" fill="#3a4640" fontFamily="var(--font-body), sans-serif">heat-sensitive coating</text>

        {/* arrow */}
        <line x1="160" y1="140" x2="200" y2="140" stroke="#244c3a" strokeWidth="2" markerEnd="url(#hfArrow)" />

        {/* Stage 2: candidate film */}
        <g transform="translate(210 60)" filter="url(#hfShadow)">
          <rect x="0" y="20" width="120" height="140" rx="6" fill="url(#hfPaper)" stroke="#b8cfba" opacity="0.5" />
          {/* film layer peel */}
          <path d="M0 40 Q60 20 120 40 L120 120 Q60 140 0 120 Z" fill="url(#hfFilm)" stroke="#d9cee9" strokeDasharray="4 3" />
          <path d="M10 40 Q60 22 110 40" fill="none" stroke="#7f6aa3" strokeWidth="1" opacity="0.4" />
          {/* peel tab */}
          <path d="M100 20 Q116 4 120 -6 L130 2 Q118 18 112 30 Z" fill="#eee8f7" stroke="#d9cee9" />
          <text x="60" y="85" textAnchor="middle" fontSize="12" fontWeight="700" fill="#5a4a80" fontFamily="var(--font-body), sans-serif">CANDIDATE</text>
          <text x="60" y="100" textAnchor="middle" fontSize="12" fontWeight="700" fill="#5a4a80" fontFamily="var(--font-body), sans-serif">FILM</text>
          {/* capture dots */}
          <circle cx="30" cy="60" r="2.5" fill="#C79A48" />
          <circle cx="80" cy="70" r="2.5" fill="#C79A48" />
          <circle cx="50" cy="110" r="2.5" fill="#C79A48" />
          <circle cx="95" cy="105" r="2" fill="#C79A48" />
        </g>
        <text x="270" y="252" textAnchor="middle" fontSize="12" fontWeight="700" fill="#7f6aa3" fontFamily="var(--font-body), sans-serif">CANDIDATE FILM</text>
        <text x="270" y="268" textAnchor="middle" fontSize="10" fill="#3a4640" fontFamily="var(--font-body), sans-serif">hypothetical — untested</text>

        {/* arrow */}
        <line x1="350" y1="140" x2="390" y2="140" stroke="#244c3a" strokeWidth="2" markerEnd="url(#hfArrow)" />

        {/* Stage 3: measurement */}
        <g transform="translate(400 50)" filter="url(#hfShadow)">
          {/* flask */}
          <path d="M45 20 L45 55 L20 130 Q10 160 40 160 L80 160 Q110 160 100 130 L75 55 L75 20 Z"
                fill="#ffffff" stroke="#244c3a" strokeWidth="2" />
          <rect x="38" y="12" width="34" height="10" rx="2" fill="#ffffff" stroke="#244c3a" strokeWidth="2" />
          {/* liquid */}
          <path d="M28 120 Q50 112 72 120 L92 130 Q106 150 85 150 L35 150 Q14 150 28 128 Z" fill="#dce8dd" opacity="0.8" />
          <circle cx="55" cy="135" r="2.5" fill="#244c3a" />
          <circle cx="70" cy="140" r="2" fill="#244c3a" />
          {/* bubbles */}
          <circle cx="50" cy="100" r="2" fill="#2f6449" opacity="0.4" />
          <circle cx="72" cy="90" r="1.5" fill="#2f6449" opacity="0.4" />
          {/* measurement marks */}
          <line x1="22" y1="100" x2="28" y2="100" stroke="#202a25" strokeWidth="1" />
          <line x1="22" y1="120" x2="28" y2="120" stroke="#202a25" strokeWidth="1" />
        </g>
        <text x="450" y="252" textAnchor="middle" fontSize="12" fontWeight="700" fill="#244c3a" fontFamily="var(--font-body), sans-serif">MEASURED</text>
        <text x="450" y="268" textAnchor="middle" fontSize="10" fill="#3a4640" fontFamily="var(--font-body), sans-serif">lab analysis required</text>

        {/* caption under diagram */}
        <rect x="0" y="295" width="520" height="45" rx="10" fill="#fbe9d7" stroke="#e9c9a0" />
        <text x="260" y="314" textAnchor="middle" fontSize="11" fontWeight="700" fill="#8a4c17" fontFamily="var(--font-body), sans-serif">CONCEPT UNDER INVESTIGATION</text>
        <text x="260" y="330" textAnchor="middle" fontSize="10" fill="#8a4c17" fontFamily="var(--font-body), sans-serif">Effectiveness not established — diagram is not evidence of protection.</text>
      </svg>
    </div>
  );
}
