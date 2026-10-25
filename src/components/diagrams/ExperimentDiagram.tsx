// Four-group experiment diagram (A, B, C, D) with the same visual grammar.

type Group = {
  letter: string;
  label: string;
  desc: string;
  showFilm: boolean;
  showCapture: boolean;
  receipt: boolean;
  accent: string;
};

const groups: Group[] = [
  {
    letter: "A",
    label: "Receipt only (no film)",
    desc: "Baseline transfer",
    showFilm: false,
    showCapture: false,
    receipt: true,
    accent: "#244c3a",
  },
  {
    letter: "B",
    label: "Plain film",
    desc: "Film effect alone",
    showFilm: true,
    showCapture: false,
    receipt: true,
    accent: "#2f6449",
  },
  {
    letter: "C",
    label: "Film + candidate capture",
    desc: "Capture addition",
    showFilm: true,
    showCapture: true,
    receipt: true,
    accent: "#C79A48",
  },
  {
    letter: "D",
    label: "No receipt control",
    desc: "Background signal",
    showFilm: false,
    showCapture: false,
    receipt: false,
    accent: "#7f6aa3",
  },
];

function GroupCard({ g }: { g: Group }) {
  return (
    <div className="card flex-1 min-w-[220px]">
      <div className="flex items-center justify-between mb-2">
        <span
          className="inline-flex items-center justify-center w-9 h-9 rounded-full text-warm font-bold text-lg"
          style={{ background: g.accent }}
          aria-hidden="true"
        >
          {g.letter}
        </span>
        <span className="text-xs uppercase tracking-wider text-charcoal-soft font-semibold">
          Group {g.letter}
        </span>
      </div>
      <h4 className="mb-1 text-charcoal">{g.label}</h4>
      <p className="text-[0.88rem] text-charcoal-soft mb-3">{g.desc}</p>

      <svg viewBox="0 0 200 110" className="w-full" aria-hidden="true">
        <defs>
          <linearGradient id={`paper-${g.letter}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#f0f2ee" />
          </linearGradient>
          <linearGradient id={`film-${g.letter}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#eee8f7" />
            <stop offset="100%" stopColor="#d9cee9" />
          </linearGradient>
          <linearGradient id={`skin-${g.letter}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f3d7bb" />
            <stop offset="100%" stopColor="#e3b78c" />
          </linearGradient>
        </defs>

        {/* Receipt */}
        {g.receipt && (
          <>
            <rect x="20" y="10" width="160" height="22" rx="3" fill={`url(#paper-${g.letter})`} stroke="#b8cfba" />
            <text x="100" y="25" textAnchor="middle" fontSize="10" fontWeight="700" fill="#202a25" fontFamily="var(--font-body), sans-serif">RECEIPT</text>
            {Array.from({ length: 8 }).map((_, i) => (
              <circle key={i} cx={50 + i * 14} cy={21} r={1.6} fill={g.accent} opacity={0.6} />
            ))}
          </>
        )}
        {!g.receipt && (
          <rect x="20" y="10" width="160" height="22" rx="3" fill="#f7f8f5" stroke="#b8cfba" strokeDasharray="3 3" />
        )}

        {/* Down arrow */}
        <line x1="100" y1="36" x2="100" y2={g.showFilm ? 44 : 60} stroke={g.accent} strokeWidth="1.6" markerEnd="url(#arrowExp)" />

        {/* Capture layer (dots inside film) */}
        {g.showFilm && (
          <>
            <rect x="20" y="46" width="160" height="18" rx="3" fill={`url(#film-${g.letter})`} stroke="#d9cee9" />
            <text x="100" y="58" textAnchor="middle" fontSize="9" fontWeight="700" fill="#5a4a80" fontFamily="var(--font-body), sans-serif">
              FILM {g.showCapture ? "+ CAPTURE" : "(plain)"}
            </text>
            {g.showCapture &&
              Array.from({ length: 6 }).map((_, i) => (
                <circle key={i} cx={55 + i * 18} cy={55} r={2} fill="#C79A48" opacity={0.8} />
              ))}
            <line x1="100" y1="66" x2="100" y2="78" stroke={g.accent} strokeWidth="1.6" markerEnd="url(#arrowExp)" />
          </>
        )}

        {/* Contact / skin surface */}
        <rect x="20" y="80" width="160" height="22" rx="3" fill={`url(#skin-${g.letter})`} stroke="#c79a70" />
        <text x="100" y="95" textAnchor="middle" fontSize="10" fontWeight="700" fill="#5a3a20" fontFamily="var(--font-body), sans-serif">CONTACT SURFACE</text>
      </svg>

      <p className="text-[0.82rem] text-charcoal-soft mt-2">
        {g.letter === "A" && "How much chemical transfers with nothing in the way?"}
        {g.letter === "B" && "Does the plain film itself change transfer?"}
        {g.letter === "C" && "Does adding a capture material change where chemical ends up?"}
        {g.letter === "D" && "How much background signal is there without a receipt?"}
      </p>
    </div>
  );
}

export default function ExperimentDiagram() {
  return (
    <div>
      <svg viewBox="0 0 10 10" width="0" height="0" aria-hidden="true">
        <defs>
          <marker id="arrowExp" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 z" fill="#244c3a" />
          </marker>
        </defs>
      </svg>

      <div className="flex flex-col md:flex-row gap-4">
        {groups.map((g) => (
          <GroupCard key={g.letter} g={g} />
        ))}
      </div>

      <p className="text-[0.9rem] text-charcoal-soft mt-4">
        Every group must run under the <strong>same</strong> contact time,
        pressure, temperature, humidity, and paper area. Repeat each group
        independently. Measure BPA and BPS separately, and always run blanks
        and spike-recovery checks.
      </p>
    </div>
  );
}
