export default function HypothesisBanner() {
  return (
    <div className="bg-lavender border-y border-lavender-dark">
      <div className="container-wide py-3 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 text-sm">
        <span className="badge badge-hypothesis shrink-0">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 9v4" />
            <path d="M12 17h.01" />
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
          </svg>
          HYPOTHESIS — NOT VALIDATED
        </span>
        <p className="text-charcoal">
          Bio-Shield is an untested student research idea. <strong className="text-forest-dark">No formulation has been demonstrated to prevent skin absorption or to be safe for skin use.</strong>
        </p>
      </div>
    </div>
  );
}
