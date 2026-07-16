import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Truck } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link to="/" className="flex items-center gap-3 group">
          <span className="flex h-10 w-10 items-center justify-center rounded-sm bg-[var(--navy)] text-[var(--gold)] transition-colors group-hover:bg-[var(--navy-deep)]">
            <Truck className="h-5 w-5" strokeWidth={2.2} />
          </span>
          <span className="font-display text-base font-bold text-[var(--navy)]">MUDHRA BROTHERS INC</span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm font-medium text-foreground/75 transition-colors hover:text-[var(--navy)]"
              activeProps={{ className: "text-[var(--navy)] font-semibold" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="inline-flex items-center rounded-sm bg-[var(--navy)] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[var(--navy-deep)] hover:shadow-md"
          >
            Request a Quote
          </Link>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[var(--navy)]"
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border md:hidden">
          <div className="flex flex-col px-6 py-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-2.5 text-sm font-medium text-foreground/80"
              >
                {n.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
