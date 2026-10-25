import type { Metadata } from "next";
import Link from "next/link";
import { references } from "@/data/references";
import HypothesisBanner from "@/components/HypothesisBanner";

export const metadata: Metadata = {
  title: "Research library & verified sources",
  description:
    "Verified scientific references used by the BIO-SHIELD student research project, with plain-language summaries, study context, and what each source does and does not prove.",
};

export default function SourcesPage() {
  return (
    <>
      <HypothesisBanner />
      <section className="section">
        <div className="container-wide">
          <div className="max-w-3xl mb-8">
            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-forest-light">
              Research library
            </span>
            <h1 className="mt-3 mb-4">Verified sources</h1>
            <p className="text-lg text-charcoal-soft">
              Every reference below links to a real peer-reviewed paper or
              official guideline. We summarise what each source actually
              studied, in what setting, what it supports on this site, and —
              importantly — what it <em>cannot</em> tell us about Bio-Shield.
              Links were last checked on the date listed.
            </p>
            <p className="mt-4 text-[0.95rem]">
              <Link href="/" className="font-semibold">← Back to project overview</Link>
            </p>
          </div>

          <div className="card mb-8 bg-sage/40 border-sage-dark">
            <h3 className="text-forest-dark mb-2">How to read this library</h3>
            <ul className="list-disc pl-5 space-y-1.5 text-[0.95rem] text-charcoal-soft">
              <li><strong>Geography/sample:</strong> findings from one country do not automatically apply elsewhere.</li>
              <li><strong>What it supports:</strong> specific claims on this site this evidence is used for.</li>
              <li><strong>What it does NOT prove:</strong> guardrails to prevent over-claiming.</li>
              <li>None of these sources validates Bio-Shield, measures a barrier film, or recommends skin application.</li>
            </ul>
          </div>

          <ol className="space-y-6">
            {references.map((r) => (
              <li
                key={r.id}
                id={`ref-${r.id}`}
                className="card scroll-mt-20"
              >
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <span className="badge badge-safe">Source [{r.num}]</span>
                  <span className="text-xs text-charcoal-soft">
                    Last checked: {r.accessed}
                  </span>
                </div>
                <h3 className="text-forest-dark mb-1 text-[1.15rem] leading-snug">
                  {r.title}
                </h3>
                <p className="text-[0.95rem] text-charcoal-soft mb-2">
                  <strong>{r.authors}</strong> ({r.year}). <em>{r.venue}</em>.
                  {r.doi && (
                    <> DOI: <span className="font-mono text-xs">{r.doi}</span></>
                  )}
                </p>
                <p className="mb-3">
                  <a
                    href={r.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary inline-flex text-sm py-2 px-3 min-h-0"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                    Open source
                    <span className="text-xs opacity-70">(external, new tab)</span>
                  </a>
                </p>

                <div className="grid md:grid-cols-2 gap-4 mt-4 text-[0.95rem]">
                  <div>
                    <h4 className="text-charcoal text-sm tracking-wider uppercase mb-2">
                      Setting & sample
                    </h4>
                    <p className="text-charcoal-soft text-[0.93rem]">
                      <strong>Geography:</strong> {r.geography}
                    </p>
                    <p className="text-charcoal-soft text-[0.93rem] mt-1">
                      {r.sampleOrSetting}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-charcoal text-sm tracking-wider uppercase mb-2">
                      Plain-language summary
                    </h4>
                    <p className="text-charcoal-soft text-[0.93rem]">
                      {r.plainSummary}
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mt-4 text-[0.95rem]">
                  <div>
                    <h4 className="text-forest-dark text-sm tracking-wider uppercase mb-2">
                      ✓ What it supports
                    </h4>
                    <ul className="list-disc pl-5 space-y-1 text-charcoal-soft text-[0.93rem]">
                      {r.supports.map((s, i) => (
                        <li key={i}>{s}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-danger text-sm tracking-wider uppercase mb-2">
                      ✗ What it does NOT prove
                    </h4>
                    <ul className="list-disc pl-5 space-y-1 text-charcoal-soft text-[0.93rem]">
                      {r.doesNotProve.map((s, i) => (
                        <li key={i}>{s}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-10 card bg-lavender border-lavender-dark">
            <h3 className="text-forest-dark mb-2">Citation notes</h3>
            <ul className="list-disc pl-5 space-y-1.5 text-[0.95rem] text-charcoal-soft">
              <li>In-text numbers like <span className="cite">[1]</span> link to the corresponding entry above.</li>
              <li>We deliberately do NOT cite cyclodextrin water-treatment studies, general cosmetic film-former patents, or drug-delivery papers as evidence that a topical film blocks BPA/BPS on skin — those are different contexts.</li>
              <li>We do not cite any Indian-retailer-specific claims, because we have no verified local testing to cite.</li>
              <li>If you are a researcher and would like us to add a peer-reviewed source (especially studies of thermal-paper chemistry in India), please get in touch with the project lead and we will review it.</li>
            </ul>
          </div>

          <div className="mt-8 text-sm text-charcoal-soft">
            <Link href="/">← Back to the project overview</Link>
          </div>
        </div>
      </section>
    </>
  );
}
