// 8 receipt sources with simple generic line-art icons
const items = [
  {
    key: "grocery",
    title: "Grocery checkout",
    icon: (
      <g stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 8h13l-2 12H8L6 8z" />
        <circle cx="9" cy="23" r="1.5" fill="currentColor" />
        <circle cx="15" cy="23" r="1.5" fill="currentColor" />
        <path d="M4 8L2 3H0" />
      </g>
    ),
  },
  {
    key: "fastfood",
    title: "Fast-food counter",
    icon: (
      <g stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="10" width="18" height="12" rx="2" />
        <path d="M3 14h18" />
        <path d="M7 10V6a3 3 0 0 1 6 0v4" />
        <path d="M8 6l1-3M11 6l1-3M14 6l1-3" />
      </g>
    ),
  },
  {
    key: "cafe",
    title: "Cafés",
    icon: (
      <g stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 8h13v7a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8z" />
        <path d="M17 10h2a2 2 0 0 1 0 4h-2" />
        <path d="M8 3c0 1.5-1 1.5-1 3M12 3c0 1.5-1 1.5-1 3" />
      </g>
    ),
  },
  {
    key: "pharmacy",
    title: "Pharmacies",
    icon: (
      <g stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M9 9h6M12 6v12" strokeWidth="2.5" />
      </g>
    ),
  },
  {
    key: "clothing",
    title: "Clothing stores",
    icon: (
      <g stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 7l4-3 2 2 2-2 4 3-2 3v10H8V10z" />
      </g>
    ),
  },
  {
    key: "fuel",
    title: "Fuel stations",
    icon: (
      <g stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="11" height="16" rx="1" />
        <rect x="6" y="8" width="5" height="4" fill="#dce8dd" />
        <path d="M14 10h2a2 2 0 0 1 2 2v6a2 2 0 0 0 2 2" />
        <path d="M17 15l3-3v-4" />
      </g>
    ),
  },
  {
    key: "parking",
    title: "Parking / tickets",
    icon: (
      <g stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="6" width="20" height="12" rx="2" />
        <circle cx="7" cy="12" r="2" />
        <path d="M11 9h9M11 12h7M11 15h9" />
      </g>
    ),
  },
  {
    key: "card",
    title: "Card terminals",
    icon: (
      <g stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="6" width="20" height="13" rx="2" />
        <rect x="5" y="9" width="6" height="4" fill="#dce8dd" />
        <path d="M14 15h5" />
        <path d="M5 22h14" />
      </g>
    ),
  },
];

export default function SourcesGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4" role="list">
      {items.map((it) => (
        <div
          key={it.key}
          role="listitem"
          className="group relative p-4 bg-white border border-sage-dark rounded-xl text-center transition-all hover:-translate-y-0.5 hover:shadow-md hover:border-forest/30"
        >
          <div className="mx-auto mb-2 w-12 h-12 rounded-full bg-sage/50 flex items-center justify-center text-forest group-hover:bg-forest group-hover:text-warm transition-colors">
            <svg viewBox="0 0 24 26" width="26" height="26" aria-hidden="true" className="block">
              {it.icon}
            </svg>
          </div>
          <div className="text-[0.85rem] font-semibold text-charcoal leading-tight">
            {it.title}
          </div>
        </div>
      ))}
    </div>
  );
}
