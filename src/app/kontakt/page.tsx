import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Finn Blue Frisør — Grønlandsleiret 18, Oslo. Ring +47 46 37 23 23 eller stikk innom. Drop in velkomment.",
};

export default function KontaktPage() {
  return (
    <>
      {/* Page header with exterior photo */}
      <section className="relative overflow-hidden bg-blue-primary">
        <div className="absolute inset-0 opacity-20" aria-hidden="true">
          <Image
            src="/images/exterior_dropin.jpg"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
            Kontakt oss
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white/80">
            Stikk innom, ring oss, eller finn veien hit. Drop in er alltid
            velkomment.
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section className="py-16 sm:py-24" aria-labelledby="kontakt-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="kontakt-heading" className="sr-only">
            Kontaktinformasjon
          </h2>

          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Left: Contact info */}
            <div>
              {/* Phone — primary CTA */}
              <div className="rounded-xl border border-blue-light bg-white p-6 shadow-sm">
                <h3 className="font-heading text-xl font-bold text-foreground">
                  Ring oss
                </h3>
                <a
                  href="tel:+4746372323"
                  className="mt-3 inline-flex items-center gap-3 text-3xl font-bold text-blue-primary transition-colors hover:text-blue-deep sm:text-4xl"
                >
                  <PhoneIcon size={32} />
                  +47 46 37 23 23
                </a>
                <p className="mt-2 text-foreground/60">
                  Raskeste måten å nå oss på. Vi svarer i åpningstiden.
                </p>
              </div>

              {/* Drop in badge */}
              <div className="mt-4 flex items-center gap-4 rounded-xl bg-blue-primary p-6 text-white">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/20 text-2xl">
                  🚶
                </div>
                <div>
                  <h3 className="text-lg font-bold">Drop in velkomment</h3>
                  <p className="text-sm text-white/80">
                    Ingen timebestilling nødvendig — bare stikk innom.
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="mt-6 space-y-4">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground/40">
                    Adresse
                  </h3>
                  <p className="mt-2 text-lg text-foreground">
                    Grønlandsleiret 18
                    <br />
                    0190 Oslo
                  </p>
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=Gr%C3%B8nlandsleiret+18+Oslo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex items-center gap-1 text-sm font-medium text-blue-primary transition-colors hover:text-blue-deep"
                  >
                    Få veibeskrivelse →
                  </a>
                </div>

                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground/40">
                    Åpningstider
                  </h3>
                  <div className="mt-2 space-y-1 text-foreground/80">
                    <div className="flex justify-between max-w-xs">
                      <span>Mandag – Fredag</span>
                      <span className="font-medium text-foreground">09:00 – 19:00</span>
                    </div>
                    <div className="flex justify-between max-w-xs">
                      <span>Lørdag</span>
                      <span className="font-medium text-foreground">09:00 – 17:00</span>
                    </div>
                    <div className="flex justify-between max-w-xs">
                      <span>Søndag</span>
                      <span className="font-medium text-foreground">Stengt</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground/40">
                    Betaling
                  </h3>
                  <p className="mt-2 text-foreground/80">
                    Kort og Vipps
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground/40">
                    Følg oss
                  </h3>
                  <a
                    href="https://www.instagram.com/bluefrisor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-2 text-foreground/80 transition-colors hover:text-blue-primary"
                  >
                    <InstagramIcon />
                    @bluefrisor på Instagram
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Map + exterior photo */}
            <div className="space-y-4">
              {/* Google Maps */}
              <div className="overflow-hidden rounded-xl border border-blue-light">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2000.4!2d10.7608!3d59.9124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416e7bfb0eab65%3A0x0!2sGr%C3%B8nlandsleiret%2018%2C%200190%20Oslo!5e0!3m2!1sno!2sno!4v1"
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Blue Frisør på Google Maps — Grønlandsleiret 18, Oslo"
                  className="w-full"
                />
              </div>

              {/* Exterior photo */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
                <Image
                  src="/images/exterior_dropin.jpg"
                  alt="Blue Frisør utendørs — blå møbler og Drop In-skilt"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-foreground backdrop-blur-sm">
                    <span className="inline-block h-2 w-2 rounded-full bg-green-500" aria-hidden="true" />
                    Drop in velkomment
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-blue-primary" aria-label="Ring oss nå">
        <div className="mx-auto max-w-4xl px-4 py-12 text-center sm:py-16">
          <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">
            Vi sees på Grønland
          </h2>
          <p className="mt-3 text-white/80">
            Bare stikk innom — eller ring oss på forhånd.
          </p>
          <a
            href="tel:+4746372323"
            className="mt-6 inline-flex items-center gap-3 rounded-lg bg-white px-8 py-4 text-lg font-bold text-blue-primary transition-all hover:bg-blue-light hover:shadow-lg"
          >
            <PhoneIcon size={20} />
            +47 46 37 23 23
          </a>
        </div>
      </section>
    </>
  );
}

function PhoneIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
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
