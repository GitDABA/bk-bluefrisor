import Image from "next/image";
import Link from "next/link";

const services = [
  { name: "Herreklipp", price: "400,-" },
  { name: "Skinfade", price: "450,-" },
  { name: "Hårklipp og skjegg", price: "650,-" },
  { name: "Skinfade barn", price: "400,-" },
  { name: "Barneklipp (under 12)", price: "350,-" },
  { name: "Pensjonist (herre)", price: "350,-" },
  { name: "Skjegg", price: "350,-" },
  { name: "Vask", price: "50,-" },
];

export default function HomePage() {
  return (
    <>
      {/* ═══════════════════════════════════════════ HERO ═══════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[var(--black)]" aria-label="Hero">
        {/* Desktop hero: barber_action_1 — hairdresser + customer */}
        <div className="hidden md:block">
          <div className="relative h-[85vh] min-h-[600px]">
            <Image
              src="/images/barber_action_1.jpg"
              alt="Frisør hos Blue Frisør styler en kundes hår"
              fill
              className="object-cover object-[center_20%]"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
                <div className="max-w-xl">
                  <h1 className="font-heading text-5xl font-bold leading-tight text-white lg:text-7xl">
                    BLUE
                    <br />
                    <span className="text-blue-primary">FRISØR</span>
                  </h1>
                  <p className="mt-4 text-lg text-white/80 lg:text-xl">
                    Frisørsalong på Grønland i Oslo
                  </p>
                  <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
                    <span className="inline-block h-2 w-2 rounded-full bg-green-400" aria-hidden="true" />
                    Drop in. Ingen timebestilling nødvendig
                  </div>
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                    <a
                      href="tel:+4746372323"
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-primary px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-blue-deep hover:shadow-lg hover:shadow-blue-primary/25"
                    >
                      <PhoneIcon />
                      +47 46 37 23 23
                    </a>
                    <Link
                      href="/tjenester"
                      className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 px-8 py-4 text-lg font-semibold text-white transition-colors hover:border-white/60 hover:bg-white/10"
                    >
                      Se priser
                      <ArrowIcon />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile hero: interior_3 — intimate single station */}
        <div className="md:hidden">
          <div className="relative h-[75vh] min-h-[500px]">
            <Image
              src="/images/interior_3.jpg"
              alt="Frisørstol med belyst speil hos Blue Frisør"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 px-4 pb-10">
              <h1 className="font-heading text-4xl font-bold leading-tight text-white">
                BLUE <span className="text-blue-primary">FRISØR</span>
              </h1>
              <p className="mt-2 text-base text-white/80">
                Frisørsalong på Grønland, Oslo
              </p>
              <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-green-400" aria-hidden="true" />
                Drop in velkommen
              </div>
              <div className="mt-6">
                <a
                  href="tel:+4746372323"
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-primary px-6 py-4 text-lg font-semibold text-white transition-colors hover:bg-blue-deep"
                >
                  <PhoneIcon />
                  Ring oss: 46 37 23 23
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ VIBE STRIP ═══════════════════════════════════════════ */}
      <section className="border-b border-blue-light bg-blue-lighter" aria-label="Fakta om Blue Frisør">
        <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-blue-light sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          <div className="flex items-center justify-center gap-3 px-6 py-5">
            <span className="text-2xl" aria-hidden="true">★</span>
            <div>
              <p className="text-lg font-bold text-foreground">4.8 / 5</p>
              <p className="text-sm text-foreground/60">118+ Google-anmeldelser</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 px-6 py-5">
            <span className="text-2xl" aria-hidden="true">📍</span>
            <div>
              <p className="text-lg font-bold text-foreground">Grønland, Oslo</p>
              <p className="text-sm text-foreground/60">Grønlandsleiret 18</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 px-6 py-5">
            <span className="text-2xl" aria-hidden="true">🚶</span>
            <div>
              <p className="text-lg font-bold text-foreground">Drop in</p>
              <p className="text-sm text-foreground/60">Ingen timebestilling nødvendig</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ SERVICES ═══════════════════════════════════════════ */}
      <section className="py-16 sm:py-24" aria-labelledby="services-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div>
              <h2
                id="services-heading"
                className="font-heading text-3xl font-bold text-foreground sm:text-4xl"
              >
                Våre tjenester
              </h2>
              <p className="mt-3 text-lg text-foreground/60">
                Profesjonell frisør for alle. Fra klassisk klipp til presise fades.
              </p>

              <div className="mt-8 grid gap-2">
                {services.map((service) => (
                  <div
                    key={service.name}
                    className="flex items-center justify-between rounded-lg border-l-4 border-blue-primary bg-white px-5 py-4 shadow-sm"
                  >
                    <span className="font-medium text-foreground">
                      {service.name}
                    </span>
                    <span className="font-heading text-lg font-bold text-blue-primary">
                      {service.price}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <Link
                  href="/tjenester"
                  className="inline-flex items-center gap-2 text-blue-primary font-semibold transition-colors hover:text-blue-deep"
                >
                  Se alle tjenester med detaljer
                  <ArrowIcon />
                </Link>
              </div>
            </div>

            {/* Barber action image */}
            <div className="relative hidden lg:block">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                <Image
                  src="/images/barber_action_2.jpg"
                  alt="Skjeggtrimming hos Blue Frisør — presisjon og håndverk"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
              {/* Decorative blue block */}
              <div className="absolute -bottom-4 -left-4 -z-10 h-full w-full rounded-2xl bg-blue-light" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ GALLERY PREVIEW ═══════════════════════════════════════════ */}
      <section
        className="bg-blue-lighter py-16 sm:py-24"
        aria-labelledby="gallery-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2
              id="gallery-heading"
              className="font-heading text-3xl font-bold text-foreground sm:text-4xl"
            >
              Fra salongen
            </h2>
            <p className="mt-3 text-lg text-foreground/60">
              Et glimt inn i Blue Frisør. Tradisjonelt håndverk møter
              moderne Oslo.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl sm:col-span-2 lg:col-span-1 lg:row-span-2 lg:aspect-auto lg:h-full">
              <Image
                src="/images/interior_4.jpg"
                alt="Blue Frisør interiør — takdekor, lysekrone og blå vegger"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 100vw, 100vw"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src="/images/interior_1.jpg"
                alt="Oversiktsbilde av Blue Frisør — frisører i arbeid"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src="/images/interior_5.jpg"
                alt="Frisører jobber under lysekronen hos Blue Frisør"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              />
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/galleri"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-blue-primary shadow-sm transition-all hover:bg-blue-primary hover:text-white hover:shadow-md"
            >
              Se hele galleriet
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ CTA BAND ═══════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-blue-primary" aria-label="Ring oss">
        {/* Subtle texture */}
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <Image
            src="/images/interior_4.jpg"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 py-16 text-center sm:py-24">
          <h2 className="font-heading text-3xl font-bold text-white sm:text-5xl">
            Klar for en ny stil?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Bare stikk innom. Vi tar drop in, eller ring oss direkte.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="tel:+4746372323"
              className="inline-flex items-center gap-3 rounded-lg bg-white px-10 py-5 text-xl font-bold text-blue-primary transition-all hover:bg-blue-light hover:shadow-lg"
            >
              <PhoneIcon />
              +47 46 37 23 23
            </a>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-white/40 px-8 py-5 text-lg font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
            >
              Finn oss
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function PhoneIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
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

function ArrowIcon() {
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
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
