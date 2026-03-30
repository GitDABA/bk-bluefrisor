import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Tjenester og priser",
  description:
    "Komplett prisliste for Blue Frisør. Hårklipp, skinfade, skjegg og mer. Drop in på Grønland i Oslo.",
};

interface Service {
  name: string;
  price: string;
  description: string;
}

const services: Service[] = [
  {
    name: "Herreklipp",
    price: "400,-",
    description:
      "Klassisk klipp tilpasset ditt ansikt og stil. Inkluderer konsultasjon, klipp og styling.",
  },
  {
    name: "Skinfade",
    price: "450,-",
    description:
      "Presis skinfade fra null og opp. Ren overgang, skarpe linjer. Vår mest populære tjeneste.",
  },
  {
    name: "Hårklipp og skjegg",
    price: "650,-",
    description:
      "Komplett pakke: hårklipp kombinert med skjeggtrimming og -forming. Full makeover.",
  },
  {
    name: "Skinfade barn",
    price: "400,-",
    description:
      "Skinfade for barn. Samme presisjon som for voksne, med tålmodighet og god stemning.",
  },
  {
    name: "Barneklipp (under 12)",
    price: "350,-",
    description:
      "Klipp for barn under 12 år. Vi gjør det enkelt og hyggelig for de minste.",
  },
  {
    name: "Pensjonist (herre)",
    price: "350,-",
    description:
      "Klipp til redusert pris for pensjonister. Samme kvalitet, lavere pris.",
  },
  {
    name: "Skjegg",
    price: "350,-",
    description:
      "Profesjonell skjeggtrimming og -forming. Skarpe kanter, ren finish.",
  },
  {
    name: "Vask",
    price: "50,-",
    description:
      "Tilleggstjeneste: hårvask med kvalitetsprodukter.",
  },
];

export default function TjenesterPage() {
  return (
    <>
      {/* Page header */}
      <section className="relative overflow-hidden bg-blue-primary">
        <div className="absolute inset-0 opacity-15" aria-hidden="true">
          <Image
            src="/images/interior_1.jpg"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
            Tjenester & priser
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white/80">
            Alt du trenger. Fra en enkel trim til komplett makeover. Faste
            priser, ingen overraskelser.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-16 sm:py-24" aria-labelledby="prisliste-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="prisliste-heading" className="sr-only">
            Prisliste
          </h2>

          <div className="grid gap-4 sm:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.name}
                className="group relative overflow-hidden rounded-xl border border-blue-light bg-white p-6 transition-all hover:border-blue-primary hover:shadow-lg hover:shadow-blue-primary/10"
              >
                <div className="absolute left-0 top-0 h-full w-1 bg-blue-primary transition-all group-hover:w-1.5" aria-hidden="true" />
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground">
                      {service.name}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-foreground/60">
                      {service.description}
                    </p>
                  </div>
                  <span className="shrink-0 font-heading text-2xl font-bold text-blue-primary">
                    {service.price}
                  </span>
                </div>
              </article>
            ))}
          </div>

          {/* Additional info */}
          <div className="mt-12 rounded-xl bg-blue-lighter p-6 sm:p-8">
            <h3 className="font-heading text-xl font-bold text-foreground">
              Godt å vite
            </h3>
            <ul className="mt-4 grid gap-3 text-foreground/70 sm:grid-cols-2">
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-blue-primary" aria-hidden="true" />
                Vi tar drop in. Ingen timebestilling nødvendig
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-blue-primary" aria-hidden="true" />
                Betaling med kort og Vipps
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-blue-primary" aria-hidden="true" />
                Alle priser inkluderer konsultasjon
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-blue-primary" aria-hidden="true" />
                Vi bruker profesjonelle produkter av høy kvalitet
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-primary" aria-label="Ring oss">
        <div className="mx-auto max-w-4xl px-4 py-12 text-center sm:py-16">
          <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">
            Vi tar drop in
          </h2>
          <p className="mt-3 text-white/80">
            Ring oss eller stikk innom. Vi tar drop in.
          </p>
          <a
            href="tel:+4746372323"
            className="mt-6 inline-flex items-center gap-3 rounded-lg bg-white px-8 py-4 text-lg font-bold text-blue-primary transition-all hover:bg-blue-light hover:shadow-lg"
          >
            <PhoneIcon />
            +47 46 37 23 23
          </a>
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
