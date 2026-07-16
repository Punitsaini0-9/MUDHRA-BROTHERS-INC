import { Link } from "@tanstack/react-router";
import { Truck, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 bg-[var(--navy-deep)] text-white/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-4 lg:px-10">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-sm bg-white/10 text-[var(--gold)]">
              <Truck className="h-5 w-5" />
            </span>
            <span className="font-display text-lg font-bold text-white">MUDHRA BROTHERS INC</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/60">
            Full-service logistics across the United States and cross-border into Canada. Reliable freight, on time, every time.
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--gold)]">Company</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/services" className="hover:text-white">Services</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--gold)]">Services</h4>
          <ul className="space-y-2.5 text-sm">
            <li>Full Truckload (FTL)</li>
            <li>Less-than-Truckload (LTL)</li>
            <li>Cross-Border USA / Canada</li>
            <li>Specialized & Managed Transport</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--gold)]">Reach Us</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2.5"><MapPin className="h-4 w-4 mt-0.5 text-[var(--gold)]" /> Fort Wayne, IN 46835, USA</li>
            <li className="flex gap-2.5"><Phone className="h-4 w-4 mt-0.5 text-[var(--gold)]" /> 260.289.3007</li>
            <li className="flex gap-2.5"><Mail className="h-4 w-4 mt-0.5 text-[var(--gold)]" /> <span>mudhrabrothersinc@gmail.com<br />mudhrabrothers@gmail.com</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6 text-xs text-white/50 lg:px-10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <span>© {new Date().getFullYear()} MUDHRA BROTHERS INC. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <Link
              to="/privacy-policy"
              className="hover:text-[var(--gold)] text-white/60 cursor-pointer transition-colors underline underline-offset-4 decoration-white/20 hover:decoration-[var(--gold)]"
            >
              Privacy Policy
            </Link>
            <span className="text-white/20">•</span>
            <Link
              to="/terms-conditions"
              className="hover:text-[var(--gold)] text-white/60 cursor-pointer transition-colors underline underline-offset-4 decoration-white/20 hover:decoration-[var(--gold)]"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}


