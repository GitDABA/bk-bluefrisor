import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[var(--black)] text-white" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" aria-label="Blue Frisør — Forsiden">
              <span className="font-heading text-2xl font-bold tracking-tight text-blue-primary">
                BLUE FRISØR
              </span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-white/60">
              Premium herrfrisør på Grønland i Oslo. Tradisjonelt håndverk,
              moderne stil.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40">
              Sider
            </h3>
            <nav className="mt-4 flex flex-col gap-2" aria-label="Bunnnavigasjon">
              <Link
                href="/"
                className="text-sm text-white/70 transition-colors hover:text-blue-primary"
              >
                Hjem
              </Link>
              <Link
                href="/tjenester"
                className="text-sm text-white/70 transition-colors hover:text-blue-primary"
              >
                Tjenester
              </Link>
              <Link
                href="/galleri"
                className="text-sm text-white/70 transition-colors hover:text-blue-primary"
              >
                Galleri
              </Link>
              <Link
                href="/kontakt"
                className="text-sm text-white/70 transition-colors hover:text-blue-primary"
              >
                Kontakt
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40">
              Kontakt
            </h3>
            <div className="mt-4 flex flex-col gap-2 text-sm text-white/70">
              <a
                href="tel:+4746372323"
                className="transition-colors hover:text-blue-primary"
              >
                +47 46 37 23 23
              </a>
              <p>Grønlandsleiret 18</p>
              <p>0190 Oslo</p>
            </div>
          </div>

          {/* Social + Hours */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40">
              Følg oss
            </h3>
            <div className="mt-4 flex flex-col gap-2">
              <a
                href="https://www.instagram.com/bluefrisor"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-blue-primary"
              >
                <InstagramIcon />
                @bluefrisor
              </a>
            </div>
            <h3 className="mt-6 text-sm font-semibold uppercase tracking-wider text-white/40">
              Åpningstider
            </h3>
            <div className="mt-3 flex flex-col gap-1 text-sm text-white/70">
              <p>Man – Fre: 09:00 – 19:00</p>
              <p>Lør: 09:00 – 17:00</p>
              <p>Søn: Stengt</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-white/40">
          <p>
            © {new Date().getFullYear()} Blue Frisør. Alle rettigheter
            forbeholdt.
          </p>
        </div>
      </div>
    </footer>
  );
}

function InstagramIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}
