import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 bg-forest-dark text-warm/90">
      <div className="container-wide py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span
                aria-hidden="true"
                className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-warm text-forest-dark text-[0.75rem] font-bold tracking-widest"
              >
                BIO
              </span>
              <span className="font-display text-2xl text-warm">SHIELD</span>
            </div>
            <p className="text-sm text-warm/80 leading-relaxed">
              A student research project exploring a scientific question.
              <br />
              <strong className="text-warm">Research hypothesis — not validated.</strong> No
              protective product or skin-use recommendation is presented.
            </p>
          </div>

          <div>
            <h4 className="text-warm font-display text-lg mb-3">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#problem" className="text-warm/85 hover:text-warm">The everyday problem</a></li>
              <li><a href="#science" className="text-warm/85 hover:text-warm">The science question</a></li>
              <li><a href="#concept" className="text-warm/85 hover:text-warm">Proposed concept</a></li>
              <li><a href="#experiment" className="text-warm/85 hover:text-warm">Proposed experiment</a></li>
              <li><a href="#limitations" className="text-warm/85 hover:text-warm">Limitations & safety</a></li>
              <li>
                <Link href="/sources" className="text-warm/85 hover:text-warm">
                  Research library
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-warm font-display text-lg mb-3">Safety & status</h4>
            <ul className="space-y-2 text-sm text-warm/85">
              <li>Do not apply experimental formulations to skin.</li>
              <li>No BPA/BPS handling at a school booth.</li>
              <li>Any genuine efficacy test needs qualified laboratory oversight.</li>
              <li><a href="#top" className="text-gold-soft hover:text-warm">Back to top ↑</a></li>
            </ul>
          </div>
        </div>

        <hr className="my-8 border-warm/15" />

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-warm/70">
          <p>© 2026 BIO-SHIELD — Student research proposal.</p>
          <p>
            No verified protective product or skin-use recommendation is being presented.
          </p>
        </div>
      </div>
    </footer>
  );
}
