import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Galleri",
  description:
    "Se interiøret hos Blue Frisør — et glimt inn i Oslos vakreste frisørsalong på Grønland.",
};

const photos = [
  {
    src: "/images/barber_action_1.jpg",
    alt: "Frisøren hos Blue Frisør styler en kundes hår — profesjonelt håndverk",
    span: "sm:col-span-2 sm:row-span-2",
    aspect: "aspect-[4/3] sm:aspect-[3/2]",
  },
  {
    src: "/images/interior_4.jpg",
    alt: "Blue Frisør interiør — dekorert tak med lysekrone og blå vegger",
    span: "",
    aspect: "aspect-[4/3]",
  },
  {
    src: "/images/barber_action_2.jpg",
    alt: "Skjeggtrimming hos Blue Frisør — presisjon med saks",
    span: "",
    aspect: "aspect-[4/3]",
  },
  {
    src: "/images/interior_1.jpg",
    alt: "Oversiktsbilde av Blue Frisør — frisører i arbeid med kunder",
    span: "sm:col-span-2",
    aspect: "aspect-[4/3] sm:aspect-[21/9]",
  },
  {
    src: "/images/interior_3.jpg",
    alt: "Frisørstasjon med belyst rundt speil og blå stol",
    span: "",
    aspect: "aspect-[4/3]",
  },
  {
    src: "/images/interior_5.jpg",
    alt: "Frisørene jobber under lysekronen hos Blue Frisør",
    span: "",
    aspect: "aspect-[4/3]",
  },
  {
    src: "/images/exterior_dropin.jpg",
    alt: "Blue Frisør utendørs — blå møbler og Drop In-skilt i vinduet",
    span: "",
    aspect: "aspect-[4/3]",
  },
  {
    src: "/images/interior_2.jpg",
    alt: "Resepsjon med prisliste, uglekust og norsk dekor",
    span: "",
    aspect: "aspect-[4/3]",
  },
];

export default function GalleriPage() {
  return (
    <>
      {/* Page header */}
      <section className="relative overflow-hidden bg-blue-primary">
        <div className="absolute inset-0 opacity-15" aria-hidden="true">
          <Image
            src="/images/interior_5.jpg"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
            Galleri
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white/80">
            Velkommen inn — et glimt av salongen på Grønlandsleiret 18.
          </p>
        </div>
      </section>

      {/* Photo grid */}
      <section className="py-16 sm:py-24" aria-labelledby="gallery-grid-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="gallery-grid-heading" className="sr-only">
            Bilder fra salongen
          </h2>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 sm:gap-4">
            {photos.map((photo) => (
              <div
                key={photo.src}
                className={`relative overflow-hidden rounded-xl bg-blue-lighter ${photo.span} ${photo.aspect}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-lighter" aria-label="Besøk oss">
        <div className="mx-auto max-w-4xl px-4 py-12 text-center sm:py-16">
          <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
            Vil du se salongen selv?
          </h2>
          <p className="mt-3 text-foreground/60">
            Stikk innom — drop in er alltid velkomment.
          </p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href="tel:+4746372323"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-primary px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-blue-deep"
            >
              <PhoneIcon />
              +47 46 37 23 23
            </a>
            <a
              href="https://www.instagram.com/bluefrisor"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-blue-primary px-8 py-4 text-lg font-semibold text-blue-primary transition-colors hover:bg-blue-primary hover:text-white"
            >
              <InstagramIcon />
              Følg oss på Instagram
            </a>
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

function InstagramIcon() {
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
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}
