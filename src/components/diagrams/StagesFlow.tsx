// 5-stage flow diagram replacing long paragraphs in the science section:
// on paper → transferred to surface → retained in film → passes through → absorbed through skin
const stages = [
  {
    label: "1. On the paper",
    desc: "Chemical is present in the receipt's heat-sensitive coating.",
    color: "#244c3a",
    icon: (
      <g>
        <rect x="4" y="6" width="16" height="16" rx="1" fill="#F7F8F5" stroke="currentColor" />
        <line x1="7" y1="10" x2="17" y2="10" stroke="currentColor" strokeWidth="1" />
        <line x1="7" y1="13" x2="14" y2="13" stroke="currentColor" strokeWidth="1" />
        <line x1="7" y1="16" x2="16" y2="16" stroke="currentColor" strokeWidth="1" />
      </g>
    ),
  },
  {
    label: "2. Transferred",
    desc: "Chemical moves to a contact surface (finger or test surface).",
    color: "#2f6449",
    icon: (
      <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M6 20c0-3 0-8 3-8 1 0 1 1 2 1 1-2 3-2 4 0 2-1 4 0 3 4" />
        <circle cx="12" cy="8" r="2" fill="#C79A48" stroke="none" />
      </g>
    ),
  },
  {
    label: "3. Retained in film",
    desc: "Candidate film may hold some chemical back (hypothetical).",
    color: "#7f6aa3",
    icon: (
      <g fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="10" width="16" height="8" rx="2" fill="#EEE8F7" />
        <line x1="4" y1="14" x2="20" y2="14" strokeDasharray="2 2" />
        <circle cx="9" cy="14" r="1.3" fill="#C79A48" stroke="none" />
        <circle cx="15" cy="14" r="1.3" fill="#C79A48" stroke="none" />
      </g>
    ),
  },
  {
    label: "4. Passes through",
    desc: "Chemical may continue past the film; mass balance is needed.",
    color: "#C79A48",
    icon: (
      <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M4 10h16M4 14h16M4 18h16" strokeDasharray="3 2" />
        <circle cx="8" cy="14" r="1.2" fill="currentColor" stroke="none" />
        <circle cx="14" cy="14" r="1.2" fill="currentColor" stroke="none" />
        <path d="M18 12l3 2-3 2" />
      </g>
    ),
  },
  {
    label: "5. Absorbed through skin",
    desc: "A separate biological step — requires OECD 428 methods.<Citation n={4} />",
    color: "#b3453a",
    icon: (
      <g fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 18c2-6 6-10 8-12 2 2 6 6 8 12" fill="#f3d7bb" />
        <path d="M4 18c2-6 6-10 8-12 2 2 6 6 8 12" />
      </g>
    ),
  },
];

export default function StagesFlow() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-3 md:gap-4 relative" role="list">
        {stages.map((s, i) => (
          <div key={i} role="listitem" className="relative">
            <div className="card h-full p-4 flex flex-col items-center text-center border-l-4" style={{ borderLeftColor: s.color }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ background: `${s.color}15`, color: s.color }}>
                <svg viewBox="0 0 24 26" width="26" height="26" aria-hidden="true">{s.icon}</svg>
              </div>
              <div className="text-[0.85rem] font-bold leading-snug mb-1" style={{ color: s.color }}>{s.label}</div>
              <p className="text-[0.82rem] text-charcoal-soft leading-snug">{s.desc}</p>
            </div>
            {i < stages.length - 1 && (
              <div aria-hidden="true" className="hidden md:flex absolute top-1/2 -right-3 w-6 h-6 items-center justify-center text-forest -translate-y-1/2 z-10">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 rounded-lg bg-lavender border border-lavender-dark text-[0.9rem] text-forest-dark font-semibold text-center">
        These are different measurements. One cannot be assumed from another.
      </div>
    </div>
  );
}
