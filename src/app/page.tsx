import HypothesisBanner from "@/components/HypothesisBanner";
import Citation from "@/components/Citation";
import ReceiptDiagram from "@/components/diagrams/ReceiptDiagram";
import LayerDiagram from "@/components/diagrams/LayerDiagram";
import ExperimentDiagram from "@/components/diagrams/ExperimentDiagram";
import USDeveloperChart from "@/components/charts/USDeveloperChart";
import ShiftChart from "@/components/charts/ShiftChart";
import TurkiyeChart from "@/components/charts/TurkiyeChart";
import ThermalPaperCrossSection from "@/components/charts/ThermalPaperCrossSection";
import BpaBpsStructure from "@/components/charts/BpaBpsStructure";
import DiffusionCell from "@/components/charts/DiffusionCell";
import HandlingFactors from "@/components/charts/HandlingFactors";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <HypothesisBanner />

      {/* HERO */}
      <section id="top" className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(1000px 500px at 80% -10%, var(--lavender) 0%, transparent 60%), radial-gradient(800px 500px at -10% 20%, var(--sage) 0%, transparent 60%)",
          }}
        />
        <div className="container-wide pt-10 pb-16 md:pt-16 md:pb-24">
          <div className="grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-7 fade-up">
              <span className="badge badge-safe mb-5">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M9 11l3 3L22 4" />
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                </svg>
                Student science research project
              </span>
              <h1 className="mb-4">
                <span className="block text-charcoal text-lg md:text-xl font-body font-normal tracking-wide mb-2">
                  BIO-SHIELD
                </span>
                Can a removable barrier film reduce transfer of <span className="text-forest">BPA/BPS</span> from thermal-paper receipts?
              </h1>
              <p className="text-lg md:text-xl text-charcoal-soft mb-7 max-w-2xl leading-relaxed">
                A careful, open look at an everyday surface we all touch — the
                checkout receipt. This site lays out what is published,
                what is proposed, what would need to be measured, and the
                hard limits on what a student project can honestly claim.
              </p>

              <div className="flex flex-wrap gap-3">
                <a href="#science" className="btn btn-primary">
                  Explore the science
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
                <a href="#experiment" className="btn btn-secondary">
                  View proposed experiment
                </a>
                <Link href="/sources" className="btn btn-secondary">
                  Research library
                </Link>
              </div>

              <p className="mt-6 text-sm text-charcoal-soft max-w-2xl">
                <strong>Project status:</strong> research hypothesis only. No Bio-Shield
                formulation has been demonstrated to protect skin, reduce
                absorption, or be safe for topical use.
              </p>
            </div>

            <div className="md:col-span-5">
              <ReceiptDiagram />
            </div>
          </div>
        </div>
      </section>

      {/* THE EVERYDAY PROBLEM */}
      <section id="problem" className="section bg-white border-y border-sage/60">
        <div className="container-wide">
          <div className="max-w-3xl mb-10">
            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-forest-light">
              01 — The everyday problem
            </span>
            <h2 className="mt-3 mb-4">Receipts are everywhere. What are they printed on?</h2>
            <p className="text-lg text-charcoal-soft">
              Thermal paper develops text and images through heat-sensitive
              chemistry — no conventional ink required. A coated layer on the
              paper reacts when the print head heats it, producing the dark
              print we read.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 mb-10">
            <div className="card">
              <div className="text-3xl mb-3">🧾</div>
              <h3 className="mb-2">Where receipts appear</h3>
              <p className="text-charcoal-soft text-[0.97rem]">
                Grocery checkouts, fast-food counters, pharmacies, clothing
                stores, fuel stations, cafés, parking and ticket machines,
                and card-payment terminals.
              </p>
            </div>
            <div className="card">
              <div className="text-3xl mb-3">🔥</div>
              <h3 className="mb-2">How thermal print works</h3>
              <p className="text-charcoal-soft text-[0.97rem]">
                A colourless dye and a chemical “developer” sit in the coating.
                Heat from the print head melts tiny particles; the developer
                donates protons to the dye, turning it dark.
              </p>
            </div>
            <div className="card">
              <div className="text-3xl mb-3">⚗️</div>
              <h3 className="mb-2">Chemistry varies</h3>
              <p className="text-charcoal-soft text-[0.97rem]">
                Some thermal papers have used bisphenol A (BPA), bisphenol S
                (BPS), or other developers such as Pergafast 201.
                <Citation n={1} /> Chemistry differs by paper, retailer,
                country and time. <strong>Not every receipt contains the same chemicals.</strong>
              </p>
            </div>
          </div>

          <div className="card bg-sage/30 border-sage-dark">
            <div className="flex flex-col md:flex-row gap-4 md:items-start">
              <div className="text-forest text-2xl shrink-0" aria-hidden="true">
                ⚠️
              </div>
              <div>
                <h4 className="mb-2 text-forest-dark">
                  Important: we have not tested any specific retailer
                </h4>
                <p className="text-[0.97rem] text-charcoal-soft">
                  Bio-Shield does not claim that a particular shop, restaurant,
                  pharmacy, or fuel station uses BPA or BPS in its receipts.
                  Published studies describe specific samples from specific
                  markets at specific times — for example U.S. receipts
                  <Citation n={1} />, a Sharjah (UAE) case study<Citation n={2} />,
                  and a Türkiye survey<Citation n={5} /> — and those findings
                  should not be extrapolated to every receipt, nor to India,
                  without local testing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BPA / BPS / DEVELOPERS */}
      <section id="chemicals" className="section">
        <div className="container-wide">
          <div className="max-w-3xl mb-10">
            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-forest-light">
              02 — Chemicals of interest
            </span>
            <h2 className="mt-3 mb-4">BPA, BPS, and alternative developers</h2>
            <p className="text-lg text-charcoal-soft">
              Bisphenol A (BPA) is a synthetic chemical widely used in
              polycarbonate plastics, epoxy resins, and historically as a
              developer in some thermal papers. Because of regulatory and
              market pressure, producers in several markets have substituted
              BPA with BPS or with non-bisphenol developers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 mb-10">
            <div className="card">
              <h3 className="text-forest mb-2">Bisphenol A (BPA)</h3>
              <p className="text-[0.97rem] text-charcoal-soft">
                A long-studied phenolic chemical. Health agencies have set
                exposure guidelines that have tightened over time, and it
                remains a focus of research and regulatory attention. BPA has
                become less common in tested U.S. receipts over time,
                <Citation n={1} /> but has still been detected in receipts
                from other markets.<Citation n={2} />
              </p>
            </div>
            <div className="card">
              <h3 className="text-forest mb-2">Bisphenol S (BPS)</h3>
              <p className="text-[0.97rem] text-charcoal-soft">
                A common replacement for BPA in thermal paper in multiple
                surveyed markets.<Citation n={1} /><Citation n={5} /> Because
                BPS is structurally similar, researchers are actively studying
                whether it shares biological activity with BPA. A “BPA-free”
                label does not mean a paper is free of bisphenols or of other
                developers.
              </p>
            </div>
            <div className="card">
              <h3 className="text-forest mb-2">Other developers</h3>
              <p className="text-[0.97rem] text-charcoal-soft">
                Non-bisphenol developers such as Pergafast 201 and newer
                alternatives (including NKK-1304) have appeared in tested
                receipts<Citation n={1} />. Their human-health profiles are
                less studied in independent public literature than BPA/BPS.
              </p>
            </div>
          </div>

          <div className="card bg-lavender/60 border-lavender-dark mb-8">
            <p className="text-[0.97rem]">
              <strong>Why this matters for a barrier project:</strong> a
              barrier that slows one chemical might behave differently with
              another. BPA, BPS and alternative developers differ in size,
              polarity, and how readily they move across a film or into skin.
              Any valid test has to <em>measure each chemical separately</em> and
              verify results with proper analytical chemistry.
            </p>
          </div>

          {/* Published data & explanatory visuals */}
          <div className="max-w-3xl mb-6">
            <h3 className="mb-2">Published evidence: what surveys have found</h3>
            <p className="text-[0.97rem] text-charcoal-soft">
              The charts below show numbers reported in published
              peer-reviewed surveys of thermal-paper receipts. Each chart is
              clearly labelled with <strong>where and when</strong> the
              samples were collected, because findings from one country
              cannot be generalised to every market.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <ThermalPaperCrossSection />
            <BpaBpsStructure />
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <USDeveloperChart />
            <ShiftChart />
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <TurkiyeChart />
            <HandlingFactors />
          </div>

          <div className="card bg-sage/30 border-sage-dark">
            <p className="text-[0.97rem]">
              <strong>Reading these charts responsibly:</strong> Miller et
              al.<Citation n={1} /> sampled U.S. receipts; Ozkaleli Akcetin et
              al.<Citation n={5} /> sampled receipts in Türkiye; Semerjian et
              al.<Citation n={2} /> was a smaller Sharjah (UAE) case study.
              None of these sampled Indian receipts. We have deliberately{" "}
              <em>not</em> shown a single "global" bar and have not extended
              these numbers to retailers or countries outside each study.
              Local receipt chemistry in India is a research gap this project
              flags as future work.
            </p>
          </div>
        </div>
      </section>

      {/* THE SCIENCE QUESTION */}
      <section id="science" className="section bg-white border-y border-sage/60">
        <div className="container-wide">
          <div className="max-w-3xl mb-10">
            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-forest-light">
              03 — The testable question
            </span>
            <h2 className="mt-3 mb-4">Four distinct stages — and why they matter</h2>
            <p className="text-lg text-charcoal-soft">
              A chemical <em>present on a receipt</em> is not the same as
              chemical <em>transferred to a finger</em>, which is not the same
              as chemical <em>retained by a film</em>, which is not the same as
              chemical <em>absorbed through skin</em>. Each step has to be
              measured separately — and none of them proves the next by
              assumption.
            </p>
          </div>

          <LayerDiagram />

          <div className="mt-10 grid md:grid-cols-2 gap-5">
            <div className="card">
              <h3 className="mb-2">What we <span className="text-danger">cannot</span> infer</h3>
              <ul className="list-disc pl-5 space-y-2 text-[0.97rem] text-charcoal-soft">
                <li>“The chemical is on the paper, so handling it is dangerous” — chemistry, dose and handling vary.</li>
                <li>“A coloured dye rubs off (or doesn’t), therefore BPA/BPS is blocked” — dye≠molecule.</li>
                <li>“The film looks intact, so exposure is prevented” — cracks, moisture and molecular-scale transfer happen below what we can see.</li>
                <li>“Less chemical on the finger means less absorption” — skin-absorption is a separate biological process.<Citation n={4} /></li>
              </ul>
            </div>
            <div className="card">
              <h3 className="mb-2">What we <span className="text-forest">can</span> actually ask</h3>
              <p className="text-[0.97rem] text-charcoal-soft mb-3">
                The project’s research question is deliberately narrow and measurable:
              </p>
              <p className="p-4 bg-sage/40 rounded-lg border border-sage-dark font-display text-forest-dark text-lg leading-snug">
                Under controlled contact conditions, does a removable barrier
                film change the amount of BPA and BPS that moves from a
                thermal-paper receipt to a contact surface (and, in a
                qualified lab, through a skin membrane)?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THE PROPOSED CONCEPT */}
      <section id="concept" className="section">
        <div className="container-wide">
          <div className="max-w-3xl mb-10">
            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-forest-light">
              04 — Proposed concept (untested)
            </span>
            <h2 className="mt-3 mb-4">Two ideas: physical barrier, and chemical capture</h2>
            <p className="text-lg text-charcoal-soft">
              The hypothesis combines two speculative mechanisms. Both are
              untested in the context of thermal receipts and neither should be
              treated as a working product.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="card border-l-4 border-l-forest">
              <span className="badge badge-safe mb-3">Untested hypothesis</span>
              <h3 className="mb-2">A — Physical removable film</h3>
              <p className="text-[0.97rem] text-charcoal-soft mb-3">
                A thin, peel-off layer placed between the receipt and the
                hand, intended to reduce direct surface-to-skin contact.
                Candidate film-forming ingredients that exist in other
                contexts include polymers used in cosmetic or peel-off
                products (e.g., polyvinyl alcohol-based films, certain
                cellulose derivatives) — but the fact that an ingredient is
                used in a cosmetic does <strong>not</strong> mean it is safe
                or effective here.
              </p>
              <p className="text-[0.97rem] text-charcoal-soft">
                Possible risks: incomplete coverage; pinholes; cracking on
                flex; moisture (sweat, wet hands) changing transfer; peeling
                incompletely and leaving residue; and even <em>increasing</em>{" "}
                exposure through occlusion.
              </p>
            </div>

            <div className="card border-l-4 border-l-gold">
              <span className="badge badge-warn mb-3">Untested hypothesis</span>
              <h3 className="mb-2">B — Candidate capture material</h3>
              <p className="text-[0.97rem] text-charcoal-soft mb-3">
                A substance within or under the film that might, in
                principle, bind bisphenol molecules and hold them in the film
                rather than letting them move through. Chemical-capture ideas
                (e.g., materials with molecular binding pockets) are real in
                analytical chemistry and environmental clean-up contexts.
              </p>
              <p className="text-[0.97rem] text-charcoal-soft">
                <strong>Critical caveat:</strong> performance in water
                treatment, packaging, or drug-delivery is{" "}
                <em>not evidence of performance on skin with BPA/BPS from
                receipts</em>. Capture can be reversible — the molecule could
                be released later. We are <strong>not</strong> publishing a
                recipe, ratios, or a skin-use recommendation.
              </p>
            </div>
          </div>

          <div className="card bg-lavender/50 border-lavender-dark">
            <h4 className="mb-2 text-forest-dark">Candidate materials — literature screening only</h4>
            <p className="text-[0.97rem] text-charcoal-soft mb-3">
              The following are listed <em>only</em> to show the kinds of
              ingredients that might be screened in a laboratory. They are
              <strong> not a formula, not a recommended topical product, and
              not endorsed as safe for this use.</strong> Do not mix, apply,
              or distribute these as a Bio-Shield product.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-[0.93rem]">
              <div className="bg-white rounded-md p-3 border border-lavender-dark">
                <strong>Film-formers (candidate physical layer):</strong>
                <ul className="list-disc pl-5 mt-1 text-charcoal-soft space-y-1">
                  <li>Polyvinyl alcohol (PVA) — water-soluble film former used in some peelable products.</li>
                  <li>Hydroxyethylcellulose / hydroxypropyl methylcellulose — cellulose thickener/film-formers.</li>
                  <li>Chitosan — a polysaccharide film former studied in other contexts.</li>
                </ul>
              </div>
              <div className="bg-white rounded-md p-3 border border-lavender-dark">
                <strong>Capture candidates (only if tested in this specific context):</strong>
                <ul className="list-disc pl-5 mt-1 text-charcoal-soft space-y-1">
                  <li>Cyclodextrins — ring-shaped molecules that can host small molecules; widely studied but NOT validated here.</li>
                  <li>Activated charcoal / clay adsorbents — strong binders in some contexts; no evidence for skin-safe receipt protection.</li>
                  <li>Other porous or functionalized polymers — require analytical chemistry verification.</li>
                </ul>
              </div>
            </div>
            <p className="mt-3 text-[0.88rem] text-charcoal-soft">
              None of these is a recommendation. Exact ratios, preservatives,
              plasticizers, pH, and skin compatibility all matter and require
              qualified cosmetic/toxicology oversight. We are not publishing a
              recipe.
            </p>
          </div>
        </div>
      </section>

      {/* PROPOSED EXPERIMENT */}
      <section id="experiment" className="section bg-white border-y border-sage/60">
        <div className="container-wide">
          <div className="max-w-3xl mb-10">
            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-forest-light">
              05 — Proposed experiment (planned, not run)
            </span>
            <h2 className="mt-3 mb-4">A four-group comparison, with proper controls</h2>
            <p className="text-lg text-charcoal-soft">
              Any test needs to compare conditions side by side, keep the
              contact conditions the same across groups, and include a control
              where no receipt is applied at all. The experiment described
              below is the <em>design</em> — no results exist yet.
            </p>
          </div>

          <ExperimentDiagram />

          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-left border-collapse text-[0.95rem]">
              <thead>
                <tr className="bg-sage/60 text-forest-dark">
                  <th className="p-3 font-semibold rounded-tl-lg">Group</th>
                  <th className="p-3 font-semibold">Condition</th>
                  <th className="p-3 font-semibold rounded-tr-lg">Question it answers</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-sage-dark/60">
                  <td className="p-3 font-semibold text-forest">A</td>
                  <td className="p-3">Receipt contact; no film</td>
                  <td className="p-3 text-charcoal-soft">Baseline: what transfers under the chosen contact conditions?</td>
                </tr>
                <tr className="border-b border-sage-dark/60 bg-sage/10">
                  <td className="p-3 font-semibold text-forest">B</td>
                  <td className="p-3">Receipt contact; plain candidate film (no capture material)</td>
                  <td className="p-3 text-charcoal-soft">Does the physical film alone change measured transfer?</td>
                </tr>
                <tr className="border-b border-sage-dark/60">
                  <td className="p-3 font-semibold text-forest">C</td>
                  <td className="p-3">Receipt contact; film + candidate capture material</td>
                  <td className="p-3 text-charcoal-soft">Does the capture addition change where the chemical ends up?</td>
                </tr>
                <tr className="bg-lavender/40">
                  <td className="p-3 font-semibold text-forest rounded-bl-lg">D</td>
                  <td className="p-3">No receipt; contact surface and film handled identically</td>
                  <td className="p-3 text-charcoal-soft rounded-br-lg">What background signal exists without receipt contact?</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-2 gap-5 mt-10">
            <div className="card">
              <h3 className="mb-2">Variables to control or record</h3>
              <ul className="list-disc pl-5 space-y-1.5 text-[0.95rem] text-charcoal-soft">
                <li>Receipt source and batch (do not mix batches between groups).</li>
                <li>Paper area, contact time, applied pressure, and temperature.</li>
                <li>Relative humidity and moisture (dry vs. damp conditions).</li>
                <li>Contact-surface type (non-living test surface first, skin membrane only in a qualified lab).</li>
                <li>Film thickness, coverage, drying time, and removal method.</li>
                <li>Number of independent repeats per group.</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="mb-2">Demonstration vs evidence</h3>
              <p className="text-[0.95rem] text-charcoal-soft mb-3">
                A <strong>school-safe visual proxy</strong> can show the idea
                of a layer changing visible transfer — for example, washable
                food colouring between a plastic sheet and paper.
              </p>
              <div className="p-3 bg-gold/10 border border-gold/40 rounded-md text-[0.93rem]">
                <strong>Label it clearly:</strong> “VISUAL PROXY ONLY — NOT
                BPA/BPS TESTING.” It proves only how that dye behaves in that
                setup. It cannot support claims about molecular capture, skin
                absorption, toxicity, or protection.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MEASUREMENTS */}
      <section id="measurements" className="section">
        <div className="container-wide">
          <div className="max-w-3xl mb-10">
            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-forest-light">
              06 — What to measure
            </span>
            <h2 className="mt-3 mb-4">Measurements are what separates a demo from evidence</h2>
            <p className="text-lg text-charcoal-soft">
              Real answers require real numbers, from validated instruments,
              with blanks and controls. A coloured-dye demonstration is a
              visual aid, not evidence. Skin-absorption claims require
              methods like OECD Test Guideline 428<Citation n={4} /> run in a
              suitable laboratory with qualified supervision.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <div className="card">
              <h3 className="mb-3">Chemical measurements</h3>
              <ul className="space-y-2 text-[0.95rem] text-charcoal-soft">
                <li><span className="text-forest font-semibold">BPA and BPS separately</span> (and ideally other known developers).</li>
                <li>Amount remaining on the receipt after contact.</li>
                <li>Amount that reaches the contact surface.</li>
                <li>Amount retained by the film (by extraction after the test).</li>
                <li>Amount that passes through the film, if any.</li>
                <li>Possible later release (a film might hold a chemical and then release it under sweat/moisture).</li>
                <li>Limits of detection and quantification; blanks; spike/recovery checks; mass balance.</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="mb-3">Physical & practical checks</h3>
              <ul className="space-y-2 text-[0.95rem] text-charcoal-soft">
                <li>Coverage: does the film coat the entire contact area without gaps?</li>
                <li>Cracking, peeling, and wear under realistic finger movement.</li>
                <li>Effect of sweat, hand cream, water, and oily food residue.</li>
                <li>Removal completeness (any residue left on the surface?).</li>
                <li>Ease of use, time to apply, time to dry/set.</li>
                <li>Duration of protection (seconds? minutes? until removed?).</li>
              </ul>
              <p className="mt-3 text-[0.9rem] text-charcoal-soft italic">
                These physical checks matter but <strong>do not substitute for chemical analysis.</strong>
              </p>
            </div>
          </div>

          <div className="mt-8">
            <DiffusionCell />
          </div>

          <div className="mt-8 card bg-sage/40 border-sage-dark">
            <h3 className="mb-2 text-forest-dark">Important distinction</h3>
            <p className="text-[0.97rem] text-charcoal-soft">
              A study on a non-living test surface (glass, metal, synthetic
              membrane) tells us about transfer to an inert surface. That is
              useful, but it is <strong>not the same as measuring absorption
              through skin</strong>. Skin-absorption testing typically uses a
              diffusion-cell setup with suitable skin membranes and validated
              analytical chemistry<Citation n={4} /> and should only be done
              with qualified oversight and ethical approval.
            </p>
          </div>
        </div>
      </section>

      {/* LIMITATIONS */}
      <section id="limitations" className="section bg-white border-y border-sage/60">
        <div className="container-wide">
          <div className="max-w-3xl mb-10">
            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-danger">
              07 — Limitations and risks
            </span>
            <h2 className="mt-3 mb-4">What could go wrong — and why honest science lists these first</h2>
            <p className="text-lg text-charcoal-soft">
              An unsuccessful barrier is not just “less effective” — some
              failure modes could make exposure worse, or create a false sense
              of safety. A responsible hypothesis lists those up front.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                t: "Occlusion / increased exposure",
                b: "A film could trap sweat, warm the skin, or increase contact time in a way that raises absorption rather than lowering it.",
              },
              {
                t: "Cracks and wear",
                b: "A film that looks intact to the eye may have micro-cracks, gaps at edges or fingernails, or rub off during handling.",
              },
              {
                t: "Moisture and sweat",
                b: "Water, hand sanitiser, lotion, or oily food can change how a film adheres and how a chemical moves through it.",
              },
              {
                t: "Capture then re-release",
                b: "A material that binds a chemical in dry conditions might release it when wet, warmed, or rubbed — moving exposure later rather than preventing it.",
              },
              {
                t: "BPA ≠ BPS ≠ alternatives",
                b: "A barrier that slows one molecule may not slow others; non-bisphenol developers may behave entirely differently.",
              },
              {
                t: "Incomplete coverage",
                b: "If the film misses even a small area of contact, that area dominates transfer and the user still touches the paper directly.",
              },
              {
                t: "Skin irritation & allergy",
                b: "A cosmetic ingredient is not automatically safe in a new combination, concentration, or on sensitive or broken skin.",
              },
              {
                t: "Residue on removal",
                b: "A film that does not peel cleanly may leave chemical-loaded residue on the fingers.",
              },
              {
                t: "False reassurance",
                b: "The biggest risk: believing it works and handling receipts longer or more often, increasing real exposure.",
              },
              {
                t: "Dye-proxy fallacy",
                b: "A coloured demo cannot prove molecular-scale protection. Visual ≠ chemical.",
              },
              {
                t: "Disposal & waste",
                b: "A film that captures a chemical must be disposed of safely; it becomes a contaminated item.",
              },
              {
                t: "Receipt variability",
                b: "Results from one receipt batch in one city cannot be generalised to other papers, retailers, or countries.",
              },
            ].map((r) => (
              <div key={r.t} className="card">
                <div className="flex items-start gap-2">
                  <span aria-hidden="true" className="text-danger mt-0.5">●</span>
                  <div>
                    <h4 className="mb-1 text-charcoal">{r.t}</h4>
                    <p className="text-[0.93rem] text-charcoal-soft">{r.b}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 p-5 bg-lavender border-l-4 border-l-forest-dark rounded-r-lg">
            <h4 className="text-forest-dark mb-2">Core safety statement</h4>
            <p className="text-[0.97rem] text-charcoal-soft">
              <strong>Do not apply an experimental formulation to skin and do
              not distribute it as a protective product.</strong> Do not
              manufacture or test with BPA/BPS chemical standards at a school
              booth. Any genuine efficacy or skin-absorption evaluation
              requires qualified laboratory oversight, approved materials, and
              suitable analytical methods such as those described in OECD
              Test Guideline 428.<Citation n={4} />
            </p>
          </div>
        </div>
      </section>

      {/* STATUS & NEXT STEPS */}
      <section id="status" className="section">
        <div className="container-wide">
          <div className="max-w-3xl mb-10">
            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-forest-light">
              08 — Project status
            </span>
            <h2 className="mt-3 mb-4">Where the project stands</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5 mb-10">
            <div className="card">
              <h3 className="mb-3 text-forest">✓ Completed</h3>
              <ul className="space-y-2 text-[0.95rem] text-charcoal-soft">
                <li>• Framing of a narrow, testable research question.</li>
                <li>• Literature review of peer-reviewed and official sources on thermal-paper chemistry and dermal exposure.</li>
                <li>• A proposed four-group experimental design with controls.</li>
                <li>• A clear separation between published evidence, hypothesis, and planned experiments.</li>
                <li>• This website, including an evidence library with verified links.</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="mb-3 text-gold">○ Proposed / planned</h3>
              <ul className="space-y-2 text-[0.95rem] text-charcoal-soft">
                <li>• Identify a qualified laboratory partner (analytical chemistry, environmental health, or pharmacology/toxicology).</li>
                <li>• Secure ethics and safety approval before any contact with human skin or handling of analytical standards.</li>
                <li>• Run transfer tests on inert surfaces first, with validated BPA/BPS quantification.</li>
                <li>• If inert-surface results justify it, pursue in vitro skin-absorption testing under OECD-style conditions<Citation n={4} />.</li>
                <li>• Investigate local (Indian) receipt chemistry, since published surveys are from other geographies.<Citation n={1} /><Citation n={2} /><Citation n={5} /></li>
              </ul>
            </div>
          </div>

          <div className="card bg-forest text-warm border-forest-dark">
            <h3 className="text-warm mb-3">Final safety note</h3>
            <p className="text-warm/90 leading-relaxed text-[1rem]">
              Until those studies are actually run, peer-reviewed, and
              replicated, BIO-SHIELD remains a <strong>research hypothesis</strong>.
              It is not a product. It is not a detox. It does not prevent
              absorption. It is not safe for skin. The honest answer to
              “does it work?” today is: <em>we do not yet know — and the only
              way to find out is to do the science carefully.</em>
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
