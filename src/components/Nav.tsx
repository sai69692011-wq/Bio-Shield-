"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const links = [
  { href: "#problem", label: "The problem" },
  { href: "#science", label: "The science" },
  { href: "#concept", label: "The concept" },
  { href: "#experiment", label: "Experiment" },
  { href: "#measurements", label: "Measurements" },
  { href: "#limitations", label: "Limitations" },
  { href: "/sources", label: "Sources" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-colors ${
        scrolled
          ? "bg-warm/90 backdrop-blur border-b border-sage-dark"
          : "bg-warm/70 backdrop-blur-sm"
      }`}
    >
      <div className="container-wide flex items-center justify-between h-16">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-forest text-lg tracking-tight no-underline"
          onClick={() => setOpen(false)}
        >
          <span
            aria-hidden="true"
            className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-forest text-warm text-[0.75rem] font-bold tracking-widest"
          >
            BIO
          </span>
          <span className="font-display text-xl">SHIELD</span>
          <span className="hidden sm:inline-block ml-2 text-[0.7rem] uppercase tracking-[0.18em] text-charcoal-soft font-semibold border-l border-sage-dark pl-2">
            Student research
          </span>
        </Link>

        <nav
          aria-label="Primary"
          className="hidden md:flex items-center gap-1"
        >
          {links.map((l) =>
            l.href.startsWith("/") ? (
              <Link key={l.href} href={l.href} className="pill-nav-link">
                {l.label}
              </Link>
            ) : (
              <a key={l.href} href={l.href} className="pill-nav-link">
                {l.label}
              </a>
            )
          )}
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-md border border-sage-dark bg-white"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="text-forest"
          >
            {open ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-sage-dark bg-warm">
          <nav
            aria-label="Mobile"
            className="container-wide py-3 flex flex-col"
          >
            {links.map((l) => {
              const cls =
                "py-3 px-2 text-base font-medium text-charcoal border-b border-sage-dark last:border-b-0";
              return l.href.startsWith("/") ? (
                <Link
                  key={l.href}
                  href={l.href}
                  className={cls}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              ) : (
                <a
                  key={l.href}
                  href={l.href}
                  className={cls}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
