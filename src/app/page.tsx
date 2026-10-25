import HypothesisBanner from "@/components/HypothesisBanner";
import Citation from "@/components/Citation";
import LayerDiagram from "@/components/diagrams/LayerDiagram";
import ExperimentDiagram from "@/components/diagrams/ExperimentDiagram";
import USDeveloperChart from "@/components/charts/USDeveloperChart";
import ShiftChart from "@/components/charts/ShiftChart";
import TurkiyeChart from "@/components/charts/TurkiyeChart";
import ThermalPaperCrossSection from "@/components/charts/ThermalPaperCrossSection";
import BpaBpsStructure from "@/components/charts/BpaBpsStructure";
import DiffusionCell from "@/components/charts/DiffusionCell";
import HandlingFactors from "@/components/charts/HandlingFactors";
import HeroFlow from "@/components/diagrams/HeroFlow";
import SourcesGrid from "@/components/SourcesGrid";
import EvidenceCards from "@/components/EvidenceCards";
import StagesFlow from "@/components/diagrams/StagesFlow";
import CandidateMaterials from "@/components/CandidateMaterials";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <HypothesisBanner />

      {/* ===================== HERO ===================== */}
      <section id="top" className="relative overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 -z-10" style={{
          background:
            "radial-gradient(1000px 500px at 85% -10%, var(--lavender) 0%, transparent 60%), radial-gradient(800px 500px at -10% 20%, var(--sage) 0%, transparent 60%)",
        }} />
        <div className="container-wide pt-10 pb-14 md:pt-16 md:pb-20">
          <div className="grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-7 fade-up">
              <span className="badge badge-safe mb-5">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M9 11l3 3L22 4" />
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                </svg>
                Student science research project · Amrita Vidyalayam
              </span>
              <h1 className="mb-4">
                <span className="block text-charcoal text-xl md:text-2xl font-body font-normal tracking-[0.2em] uppercase mb-3">
                  BIO-SHIELD
                </span>
                Can a removable barrier film reduce transfer of <span className="text-forest">BPA/BPS</span> from thermal-paper receipts?
              </h1>
              <p className="text-lg text-charcoal-soft mb-7 max-w-2xl leading-relaxed">
                An everyday surface we all touch — the checkout receipt —
                meets a carefully bounded scientific question. This site lays
                out published evidence, a proposed experiment, what must be
                measured, and the limits on what a student project can
                honestly claim.
              </p>

              <div className="flex flex-wrap gap-3">
                <a href="#evidence" className="btn btn-primary">
                  See the evidence
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
                <a href="#experiment" className="btn btn-secondary">Proposed experiment</a>
                <Link href="/sources" className="btn btn-secondary">Research library</Link>
              </div>
            </div>

            <div className="md:col-span-5">
              <HeroFlow />
            </div>
          </div>
        </div>
      </section>

      {/* ===================== THE EVERYDAY PROBLEM ===================== */}
      <section id="problem" className="section section-tinted border-y border-sage/60">
        <div className="container-wide">
          <div className="max-w-3xl mb-8">
            <span className="section-kicker">01 — The everyday problem</span>
            <h2 className="mt-0 mb-3">Receipts are everywhere.</h2>
            <p className="section-lede">
              Thermal paper develops text using heat-sensitive chemistry — no
              conventional ink. A coated layer reacts when the print head
              heats it.
            </p>
          </div>

          <SourcesGrid />

          <p className="mt-6 text-center text-[0.95rem] text-charcoal-soft max-w-2xl mx-auto">
            Thermal-paper receipts are common, but their chemical composition
            varies by paper, market and time.
          </p>

          <div className="grid md:grid-cols-3 gap-5 mt-10">
            <div className="card">
              <div className="w-10 h-10 rounded-lg bg-sage/70 flex items-center justify-center mb-3 text-forest">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
              </div>
              <h3 className="mb-2 text-forest-dark">How thermal print works</h3>
              <p className="text-[0.94rem] text-charcoal-soft">
                A colourless <em>leuco dye</em> and a chemical developer sit
                in the coating. Heat melts particles; the developer donates
                protons to the dye, turning it dark.
              </p>
            </div>
            <div className="card">
              <div className="w-10 h-10 rounded-lg bg-lavender flex items-center justify-center mb-3" style={{color:"#5a4a80"}}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 2a7 7 0 0 0-4 12.7V17a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2.3A7 7 0 0 0 12 2z" />
                  <line x1="9" y1="22" x2="15" y2="22" />
                </svg>
              </div>
              <h3 className="mb-2 text-forest-dark">What’s in the coating?</h3>
              <p className="text-[0.94rem] text-charcoal-soft">
                Some thermal papers have used BPA, BPS, or alternative
                developers such as Pergafast 201.<Citation n={1} /> Not every
                receipt contains the same chemicals.
              </p>
            </div>
            <div className="card bg-sage/30 border-sage-dark">
              <div className="flex items-start gap-2 mb-2">
                <span className="text-gold text-xl" aria-hidden="true">⚠</span>
                <h3 className="text-forest-dark m-0">No retailer-specific claims</h3>
              </div>
              <p className="text-[0.9rem] text-charcoal-soft">
                We have not tested any specific shop, restaurant or pharmacy.
                Studies describe specific samples at specific times — U.S.<Citation n={1}/>, UAE<Citation n={2}/>, Türkiye<Citation n={5}/> —
                and do not establish the chemistry of Indian receipts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== CHEMICALS + EVIDENCE ===================== */}
      <section id="chemicals" className="section">
        <div className="container-wide">
          <div className="max-w-3xl mb-6">
            <span className="section-kicker">02 — Chemicals of interest</span>
            <h2 className="mt-0 mb-3">BPA, BPS, and alternative developers</h2>
            <p className="section-lede">
              Regulatory and market pressure have pushed producers in some
              markets from BPA toward BPS and other developers. A “BPA-free”
              label doesn’t mean “bisphenol-free.”
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 mb-10">
            <div className="card">
              <h3 className="text-forest mb-2">Bisphenol A (BPA)</h3>
              <p className="text-[0.94rem] text-charcoal-soft">
                Long-studied phenolic chemical; exposure guidelines have
                tightened over time. BPA became less common in tested U.S.
                receipts over time<Citation n={1}/> but is still detected in
                other markets.<Citation n={2}/>
              </p>
            </div>
            <div className="card">
              <h3 className="text-forest mb-2">Bisphenol S (BPS)</h3>
              <p className="text-[0.94rem] text-charcoal-soft">
                Common replacement in multiple surveyed
                markets.<Citation n={1}/><Citation n={5}/> Because BPS is
                structurally similar, researchers are studying whether it
                shares biological activity with BPA.
              </p>
            </div>
            <div className="card">
              <h3 className="text-forest mb-2">Other developers</h3>
              <p className="text-[0.94rem] text-charcoal-soft">
                Non-bisphenol developers (e.g. Pergafast 201;
                NKK-1304)<Citation n={1}/> are appearing; their human-health
                profiles are less independently studied than BPA/BPS.
              </p>
            </div>
          </div>

          {/* explanatory visuals */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <ThermalPaperCrossSection />
            <BpaBpsStructure />
          </div>

          {/* ---- EVIDENCE CARDS (priority) ---- */}
          <div id="evidence" className="scroll-mt-24">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-6">
              <div>
                <span className="section-kicker">Evidence</span>
                <h3 className="text-2xl md:text-3xl text-forest-dark m-0">What peer-reviewed surveys report</h3>
                <p className="text-charcoal-soft mt-2 max-w-2xl">
                  Each card below shows a single finding with its geography
                  and year. <strong>None</strong> of these tested Bio-Shield.
                  All numbers are tied to the sample actually studied.
                </p>
              </div>
              <span className="eyebrow eyebrow-danger self-start md:self-end">PUBLISHED STUDIES ONLY — NOT BIO-SHIELD RESULTS</span>
            </div>
            <EvidenceCards />
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-10">
            <USDeveloperChart />
            <ShiftChart />
          </div>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <TurkiyeChart />
            <HandlingFactors />
          </div>

          <div className="mt-8 safety-ribbon">
            <strong>Read the charts responsibly.</strong> Miller et al.<Citation n={1}/> sampled U.S. receipts; Ozkaleli Akcetin et al.<Citation n={5}/> sampled Türkiye; Semerjian et al.<Citation n={2}/> was a Sharjah (UAE) case study. None sampled Indian receipts. We do not show a “global” average.
          </div>
        </div>
      </section>

      {/* ===================== THE SCIENCE QUESTION ===================== */}
      <section id="science" className="section section-alt border-y border-sage/60">
        <div className="container-wide">
          <div className="max-w-3xl mb-8">
            <span className="section-kicker">03 — The testable question</span>
            <h2 className="mt-0 mb-3">Five stages, five different measurements</h2>
            <p className="section-lede">
              A chemical present on a receipt is not the same as chemical
              transferred to a finger, retained by a film, passing through,
              or absorbed through skin. Each step must be measured separately.
            </p>
          </div>

          <StagesFlow />

          <div className="mt-10 grid md:grid-cols-2 gap-5">
            <div className="card">
              <h3 className="mb-2 text-forest-dark">What we <span style={{color:"var(--danger)"}}>cannot</span> infer</h3>
              <ul className="list-disc pl-5 space-y-1.5 text-[0.93rem] text-charcoal-soft">
                <li>“It’s on the paper, so touching it is dangerous” — dose and handling vary.</li>
                <li>“A dye rubs off (or not), therefore BPA/BPS is blocked” — dye ≠ molecule.</li>
                <li>“A film looks intact, so exposure is prevented” — micro-cracks and moisture matter.</li>
                <li>“Less chemical on the finger means less absorption” — skin absorption is a separate biological step.<Citation n={4}/></li>
              </ul>
            </div>
            <div className="card">
              <h3 className="mb-2 text-forest-dark">The actual research question</h3>
              <div className="p-4 bg-sage/40 rounded-lg border border-sage-dark font-display text-forest-dark text-lg leading-snug">
                Under controlled contact conditions, does a removable barrier
                film change the amount of BPA and BPS that moves from a
                thermal-paper receipt to a contact surface (and, in a
                qualified lab, through a skin membrane)?
              </div>
            </div>
          </div>

          <div className="mt-8">
            <LayerDiagram />
          </div>
        </div>
      </section>

      {/* ===================== PROPOSED CONCEPT & CANDIDATES ===================== */}
      <section id="concept" className="section">
        <div className="container-wide">
          <div className="max-w-3xl mb-8">
            <span className="section-kicker">04 — Proposed concept (untested)</span>
            <h2 className="mt-0 mb-3">Two hypothetical mechanisms</h2>
            <p className="section-lede">
              A physical removable film, and a candidate capture material
              that might in principle bind bisphenols. Both are untested in
              this context; neither is a product.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 mb-8">
            <div className="card border-l-4" style={{borderLeftColor:"var(--forest)"}}>
              <span className="badge badge-hypothesis mb-2">Untested hypothesis</span>
              <h3 className="mb-2 text-forest-dark">A — Physical removable film</h3>
              <p className="text-[0.94rem] text-charcoal-soft">
                A thin peel-off layer between receipt and hand intended to
                reduce direct contact. Film-formers exist in other cosmetic
                or peelable products, but that does not make them safe or
                effective here.
              </p>
              <p className="text-[0.9rem] text-charcoal-soft mt-2">
                Risks: pinholes, cracking, moisture changing transfer,
                incomplete peeling, and possibly <em>increasing</em> exposure
                via occlusion.
              </p>
            </div>
            <div className="card border-l-4" style={{borderLeftColor:"var(--gold)"}}>
              <span className="badge badge-warn mb-2">Untested hypothesis</span>
              <h3 className="mb-2 text-forest-dark">B — Candidate capture material</h3>
              <p className="text-[0.94rem] text-charcoal-soft">
                A substance within or under the film that might bind
                bisphenols and hold them. Capture ideas are real in analytical
                chemistry and environmental clean-up — but performance
                elsewhere is not evidence here.
              </p>
              <p className="text-[0.9rem] text-charcoal-soft mt-2">
                Capture can be reversible. We publish <strong>no recipe,
                ratios, or skin-use recommendation.</strong>
              </p>
            </div>
          </div>

          <CandidateMaterials />

          <div className="mt-6 safety-ribbon">
            <strong>Do not mix, apply, or distribute these as a “Bio-Shield” product.</strong> The categories above are literature-screening candidates only — not a formula. Skin compatibility and efficacy require qualified oversight.
          </div>
        </div>
      </section>

      {/* ===================== PROPOSED EXPERIMENT ===================== */}
      <section id="experiment" className="section section-tinted border-y border-sage/60">
        <div className="container-wide">
          <div className="max-w-3xl mb-8">
            <span className="section-kicker">05 — Proposed experiment</span>
            <h2 className="mt-0 mb-3">Four comparison groups</h2>
            <p className="section-lede">
              Conditions run side-by-side, with matched contact time,
              pressure, temperature and humidity. No results exist yet.
            </p>
            <div className="mt-4 inline-flex eyebrow eyebrow-danger">PROPOSED EXPERIMENT — NO RESULTS YET</div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8" role="list">
            {[
              { l:"A", color:"var(--forest)", title:"Receipt only (no film)", body:"Baseline transfer under chosen conditions." },
              { l:"B", color:"var(--forest-light)", title:"Plain candidate film", body:"Does the film alone change measured transfer?" },
              { l:"C", color:"var(--gold)", title:"Film + capture candidate", body:"Does the capture addition change where chemical ends up?" },
              { l:"D", color:"#7f6aa3", title:"No-receipt control", body:"What background signal exists without a receipt?" },
            ].map((g) => (
              <div key={g.l} role="listitem" className="card flex flex-col items-start">
                <div className="letter-chip mb-3" style={{background:g.color}} aria-hidden="true">{g.l}</div>
                <h4 className="text-charcoal mb-1">{g.title}</h4>
                <p className="text-[0.88rem] text-charcoal-soft">{g.body}</p>
              </div>
            ))}
          </div>

          <ExperimentDiagram />

          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-left border-collapse text-[0.93rem] bg-white rounded-xl overflow-hidden border border-sage-dark">
              <thead>
                <tr className="bg-sage/70 text-forest-dark">
                  <th className="p-3 font-semibold w-16">Group</th>
                  <th className="p-3 font-semibold">Condition</th>
                  <th className="p-3 font-semibold">Question it answers</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-sage-dark/60"><td className="p-3 font-bold text-forest">A</td><td className="p-3">Receipt contact; no film</td><td className="p-3 text-charcoal-soft">Baseline transfer.</td></tr>
                <tr className="border-t border-sage-dark/60 bg-sage/10"><td className="p-3 font-bold text-forest">B</td><td className="p-3">Receipt; plain candidate film</td><td className="p-3 text-charcoal-soft">Film effect alone.</td></tr>
                <tr className="border-t border-sage-dark/60"><td className="p-3 font-bold text-forest">C</td><td className="p-3">Receipt; film + capture material</td><td className="p-3 text-charcoal-soft">Added capture effect.</td></tr>
                <tr className="border-t border-sage-dark/60 bg-lavender/40"><td className="p-3 font-bold text-forest">D</td><td className="p-3">No receipt (handled identically)</td><td className="p-3 text-charcoal-soft">Background / contamination.</td></tr>
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-2 gap-5 mt-8">
            <div className="card">
              <h3 className="mb-2 text-forest-dark">Variables to control</h3>
              <ul className="list-disc pl-5 space-y-1 text-[0.92rem] text-charcoal-soft">
                <li>Receipt source/batch, area, contact time, pressure, temperature.</li>
                <li>Relative humidity / moisture (dry vs. damp).</li>
                <li>Film thickness, coverage, drying time, removal method.</li>
                <li>Independent repeats; BPA and BPS measured separately.</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="mb-2 text-forest-dark">Demonstration ≠ evidence</h3>
              <p className="text-[0.92rem] text-charcoal-soft mb-2">A school-safe visual proxy (e.g. food colouring between a sheet and paper) can show the idea of a layer.</p>
              <div className="p-3 rounded-md bg-gold/10 border border-gold/40 text-[0.88rem] font-semibold" style={{color:"#8a4c17"}}>
                LABEL IT: “VISUAL PROXY ONLY — NOT BPA/BPS TESTING.”
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== MEASUREMENTS ===================== */}
      <section id="measurements" className="section">
        <div className="container-wide">
          <div className="max-w-3xl mb-8">
            <span className="section-kicker">06 — What to measure</span>
            <h2 className="mt-0 mb-3">Measurements turn a demo into evidence</h2>
            <p className="section-lede">
              Real answers need real numbers, validated instruments, blanks,
              and mass balance. Skin-absorption claims need OECD 428-style
              work<Citation n={4}/> under qualified supervision.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 mb-8">
            <div className="card">
              <h3 className="mb-3 text-forest-dark">Chemical measurements</h3>
              <ul className="space-y-1.5 text-[0.92rem] text-charcoal-soft list-disc pl-5">
                <li>BPA and BPS <strong>separately</strong> (and any other known developer of interest).</li>
                <li>Chemical remaining on receipt after contact.</li>
                <li>Chemical on the contact surface.</li>
                <li>Chemical retained in/on the film (by extraction).</li>
                <li>Chemical passing through; later release under moisture.</li>
                <li>Limits of detection/quantification, blanks, spike/recovery, mass balance.</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="mb-3 text-forest-dark">Physical & practical checks</h3>
              <ul className="space-y-1.5 text-[0.92rem] text-charcoal-soft list-disc pl-5">
                <li>Coverage (gaps?); cracking/peeling on flex.</li>
                <li>Effects of sweat, lotion, water, oily food.</li>
                <li>Removal completeness; residue.</li>
                <li>Use-time; durability until removed.</li>
              </ul>
              <p className="mt-3 text-[0.88rem] italic text-charcoal-soft">
                Physical checks do not substitute for chemical analysis.
              </p>
            </div>
          </div>

          <DiffusionCell />

          <div className="mt-6 safety-ribbon">
            Inert-surface tests tell us about transfer to an inert surface — that is useful, but it is <strong>not the same as absorption through skin</strong>.
          </div>
        </div>
      </section>

      {/* ===================== LIMITATIONS ===================== */}
      <section id="limitations" className="section section-alt border-y border-sage/60">
        <div className="container-wide">
          <div className="max-w-3xl mb-8">
            <span className="section-kicker" style={{color:"var(--danger)"}}>07 — Limitations & risks</span>
            <h2 className="mt-0 mb-3">What could go wrong</h2>
            <p className="section-lede">
              A barrier that looks fine could make exposure worse — or
              create false confidence. Honest science lists failure modes
              up front.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {t:"Cracking or incomplete coverage", b:"Gaps at edges, micro-cracks, or rubbed-off areas dominate transfer.", i:"⚇"},
              {t:"Moisture & wear", b:"Sweat, lotion, sanitiser, water, or oily food change adhesion and transfer.", i:"💧"},
              {t:"Capture then re-release", b:"A molecule bound in dry conditions may release when wet, warm, or rubbed.", i:"⟲"},
              {t:"Occlusion risk", b:"A film can trap sweat and warm skin, possibly increasing absorption.", i:"⚠"},
              {t:"BPA ≠ BPS ≠ alternatives", b:"A barrier that slows one molecule may not slow others.", i:"≠"},
              {t:"Irritation & residue", b:"Cosmetic ingredients aren't automatically safe in a new combination.", i:"✋"},
              {t:"Disposal", b:"Capture films become contaminated items — disposal matters.", i:"♻"},
              {t:"Receipt variability", b:"One batch, one city, one retailer can't represent all receipts.", i:"▤"},
              {t:"False reassurance", b:"The biggest risk: handling receipts more because you 'feel protected'.", i:"!"},
            ].map((r) => (
              <div key={r.t} className="card p-4 flex gap-3 items-start">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center text-white shrink-0" style={{background:"var(--danger)", fontSize:"1rem"}} aria-hidden="true">{r.i}</div>
                <div>
                  <h4 className="text-charcoal mb-1 leading-tight">{r.t}</h4>
                  <p className="text-[0.85rem] text-charcoal-soft leading-snug">{r.b}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 p-5 rounded-xl border-2 border-danger/40 bg-white">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-warm shrink-0" style={{background:"var(--danger)"}} aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 9v4"/><path d="M12 17h.01"/><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                </svg>
              </div>
              <div>
                <h3 className="m-0 text-danger text-forest-dark">Core safety statement</h3>
                <p className="text-[0.95rem] text-charcoal-soft mt-1 mb-0 leading-relaxed">
                  <strong>No Bio-Shield formulation has been demonstrated to prevent skin absorption or to be safe for skin use.</strong> Do not apply experimental formulations to skin or distribute them as a protective product. Do not handle BPA/BPS chemical standards at a school booth. Real efficacy and skin-absorption evaluation requires qualified laboratory oversight and validated analytical methods.<Citation n={4}/>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== STATUS ===================== */}
      <section id="status" className="section">
        <div className="container-wide">
          <div className="max-w-3xl mb-8">
            <span className="section-kicker">08 — Project status & next steps</span>
            <h2 className="mt-0 mb-3">Where things stand</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5 mb-8">
            <div className="card">
              <h3 className="mb-3 text-forest-dark">✓ Completed</h3>
              <ul className="space-y-1.5 text-[0.93rem] text-charcoal-soft list-disc pl-5">
                <li>Narrow, testable research question framed.</li>
                <li>Literature review of peer-reviewed and official sources.</li>
                <li>Four-group experimental design with controls.</li>
                <li>Separation of published evidence, hypothesis, and planned work.</li>
                <li>Public-facing website with verified source links.</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="mb-3" style={{color:"var(--gold)"}}>○ Proposed / planned</h3>
              <ul className="space-y-1.5 text-[0.93rem] text-charcoal-soft list-disc pl-5">
                <li>Identify a qualified lab partner (analytical chemistry / environmental health / toxicology).</li>
                <li>Ethics and safety approval before any skin or analytical-standard work.</li>
                <li>Transfer tests on inert surfaces first, with validated BPA/BPS quantification.</li>
                <li>If justified, OECD-428-style in vitro skin-absorption testing.<Citation n={4}/></li>
                <li>Investigate local (Indian) receipt chemistry.</li>
              </ul>
            </div>
          </div>

          <div className="card p-6 bg-forest text-warm border-forest-dark">
            <h3 className="text-warm mb-2">Final safety note</h3>
            <p className="text-warm/90 leading-relaxed">
              BIO-SHIELD is a <strong>research hypothesis</strong>. It is not
              a product; it does not prevent absorption; it is not safe for
              skin. The honest answer to “does it work?” is: <em>we do not yet know — and the only way to find out is to do the science carefully.</em>
            </p>
          </div>

          <div className="mt-8 text-center">
            <Link href="/sources" className="btn btn-primary">
              Browse the research library
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
