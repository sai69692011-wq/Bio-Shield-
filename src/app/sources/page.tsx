import type { Metadata } from "next";
import Link from "next/link";
import { references } from "@/data/references";
import HypothesisBanner from "@/components/HypothesisBanner";

export const metadata: Metadata = {
  title: "Research library & verified sources",
  description:
    "Verified scientific references used by the BIO-SHIELD student research project, with plain-language summaries, study context, and what each source does and does not prove.",
};

const BADGE_MAP: Record<string, string> = {
  miller2023: "U.S. RECEIPT SAMPLE",
  semerjian2023: "UAE CASE STUDY",
  bernier2017: "EXPOSURE MODELLING",
  oecd428: "SKIN-ABSORPTION METHOD",
  ozkaleli2025: "TÜRKIYE SURVEY",
};

export default function SourcesPage() {
  return (
    <>
      <HypothesisBanner />
      <section className="section">
        <div className="container-wide">
          <div className="max-w-3xl mb-8">
            <span className="section-kicker">Research library</span>
            <h1 className="mt-0 mb-3">Verified sources</h1>
            <p className="section-lede">
              Every reference links to a real peer-reviewed paper or official
              guideline, with plain-language summaries and clear guardrails on
              what each can and cannot tell us about Bio-Shield.
            </p>
            <p className="mt-3 text-[0.92rem]">
              <Link href="/" className="font-semibold">← Back to project overview</Link>
            </p>
          </div>

          <div className="card mb-8 bg-sage/35 border-sage-dark p-4">
            <p className="text-[0.93rem] text-charcoal-soft mb-0">
              <strong>How to read each card:</strong> geography and sample
              matter. A U.S. survey does not describe India; a modelling paper
              is not a barrier test; an OECD guideline is not a DIY protocol.
              In-text numbers like <span className="cite">[1]</span> link to
              the matching card below.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {references.map((r) => (
              <article
                key={r.id}
                id={`ref-${r.id}`}
                className="card scroll-mt-24 flex flex-col"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <span className="eyebrow eyebrow-safe self-start">{BADGE_MAP[r.id] ?? "SOURCE"}</span>
                  <span className="font-mono text-xs text-charcoal-soft shrink-0">Source [{r.num}] · {r.year}</span>
                </div>
                <h3 className="text-forest-dark text-[1.05rem] leading-snug mb-2">
                  {r.title}
                </h3>
                <p className="text-[0.88rem] text-charcoal-soft mb-2">
                  <strong>{r.authors}</strong>. <em>{r.venue}</em>.
                </p>
                <p className="text-[0.82rem] text-charcoal-soft mb-3">
                  <strong>Sample/setting:</strong> {r.geography}. {r.sampleOrSetting}
                </p>
                <p className="text-[0.9rem] text-charcoal-soft mb-3">
                  {r.plainSummary}
                </p>

                <div className="grid grid-cols-1 gap-3 text-[0.88rem] mt-auto">
                  <div className="p-3 rounded-lg bg-sage/40 border border-sage-dark/70">
                    <div className="text-[0.72rem] font-bold uppercase tracking-wider text-forest-dark mb-1">✓ What it supports</div>
                    <ul className="list-disc pl-4 m-0 space-y-0.5 text-charcoal-soft">
                      {r.supports.map((s, i) => <li key={i}>{s}</li>)}
                    </ul>
                  </div>
                  <div className="p-3 rounded-lg bg-lavender/60 border border-lavender-dark">
                    <div className="text-[0.72rem] font-bold uppercase tracking-wider" style={{color:"#5a4a80"}}>✗ What it does NOT prove</div>
                    <ul className="list-disc pl-4 m-0 space-y-0.5 text-charcoal-soft">
                      {r.doesNotProve.map((s, i) => <li key={i}>{s}</li>)}
                    </ul>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-[0.75rem] text-charcoal-soft">Last checked: {r.accessed}</span>
                  <a
                    href={r.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[0.88rem] font-semibold text-forest hover:text-forest-dark"
                  >
                    Read source
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 card bg-lavender border-lavender-dark">
            <h3 className="text-forest-dark mb-2">Citation notes</h3>
            <ul className="list-disc pl-5 space-y-1.5 text-[0.92rem] text-charcoal-soft m-0">
              <li>We do not cite water-treatment, general cosmetic film-former, or drug-delivery papers as evidence that a topical film blocks BPA/BPS on skin — those are different contexts.</li>
              <li>We cite no Indian-retailer-specific claims, as we have no verified local testing to cite.</li>
              <li>If you are a researcher and want to suggest an additional peer-reviewed source (especially an Indian thermal-paper study), please contact the project lead.</li>
            </ul>
          </div>

          <p className="mt-8 text-sm text-charcoal-soft"><Link href="/">← Back to project overview</Link></p>
        </div>
      </section>
    </>
  );
}
