// Contact-behaviour factors that shape how much chemical transfers to fingers,
// adapted from Bernier & Vandenberg 2017.

const factors = [
  { icon: "⏱️", title: "Contact time", desc: "How long the receipt is held, whether it is tucked in a pocket, folded, or rubbed." },
  { icon: "🤲", title: "Contact area", desc: "How many fingers and how much skin surface touch the printed side." },
  { icon: "💧", title: "Hand condition", desc: "Dry, moist, greasy (hand cream/food), sanitized, or sweaty hands can change transfer." },
  { icon: "🌡️", title: "Temperature", desc: "Warmth from hands and ambient temperature can affect how easily chemicals move." },
  { icon: "🔁", title: "Repeat handling", desc: "Cashiers or people who handle many receipts a day have a different exposure pattern than a consumer." },
  { icon: "✋", title: "Hand-to-face contact", desc: "Touching mouth, eyes, or food after handling receipts is a separate route." },
];

export default function HandlingFactors() {
  return (
    <figure className="card">
      <figcaption className="mb-3">
        <h4 className="text-forest-dark mb-1">
          Figure 7. Why exposure is not just “on/off”
        </h4>
        <p className="text-[0.88rem] text-charcoal-soft">
          How much chemical actually moves to the skin depends on behaviour as
          much as on the paper itself. Bernier &amp; Vandenberg (2017) studied
          how people really handle receipts and used that to model potential
          dermal exposure.
        </p>
      </figcaption>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3" role="list">
        {factors.map((f) => (
          <div key={f.title} className="p-3 rounded-lg bg-sage/30 border border-sage-dark">
            <div className="text-2xl mb-1" aria-hidden="true">{f.icon}</div>
            <div className="font-semibold text-charcoal text-[0.95rem]">{f.title}</div>
            <p className="text-[0.85rem] text-charcoal-soft mt-1">{f.desc}</p>
          </div>
        ))}
      </div>
      <p className="mt-3 text-[0.8rem] text-charcoal-soft italic">
        Source: Bernier &amp; Vandenberg (2017), PLOS ONE 12(6): e0178449<span className="cite">[3]</span>.
        Exposure-model estimates depend on assumptions about these factors,
        and this paper does <strong>not</strong> test any barrier film.
      </p>
    </figure>
  );
}
