import Image from "next/image";
import Link from "next/link";
import {
  Star,
  MapPin,
  Phone,
  ArrowRight,
  Scissors,
  DoorOpen,
  Smile,
  Clock,
  Package,
  Baby,
  UserRound,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

/* ────────────────────────────────────────────────────────────────────────────
   Data
   ────────────────────────────────────────────────────────────────────────── */

interface ServiceItem {
  name: string;
  description: string;
  price: string;
  icon: React.ReactNode;
}

const services: ServiceItem[] = [
  {
    name: "Herreklipp",
    description: "Klassisk klipp tilpasset din stil.",
    price: "fra 350 kr",
    icon: <Scissors className="h-6 w-6" aria-hidden="true" />,
  },
  {
    name: "Skinfade",
    description: "Presis fade med ren finish.",
    price: "fra 380 kr",
    icon: <Scissors className="h-6 w-6" aria-hidden="true" />,
  },
  {
    name: "Skjegg",
    description: "Trimming og forming av skjegg.",
    price: "fra 200 kr",
    icon: <UserRound className="h-6 w-6" aria-hidden="true" />,
  },
  {
    name: "Pakke klipp + skjegg",
    description: "Full behandling i en gang.",
    price: "fra 500 kr",
    icon: <Package className="h-6 w-6" aria-hidden="true" />,
  },
  {
    name: "Barneklipp",
    description: "Rolig og hyggelig opplevelse for barn.",
    price: "fra 280 kr",
    icon: <Baby className="h-6 w-6" aria-hidden="true" />,
  },
  {
    name: "Pensjonist",
    description: "Herreklipp til redusert pris.",
    price: "fra 280 kr",
    icon: <Clock className="h-6 w-6" aria-hidden="true" />,
  },
];

interface Testimonial {
  quote: string;
  name: string;
  location: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Alltid bra klipp her. Stikker innom uten å bestille time, og det går alltid fint.",
    name: "Magnus",
    location: "Oslo",
  },
  {
    quote:
      "Beste barberen jeg har vært hos. Presist arbeid og hyggelig stemning.",
    name: "Tariq",
    location: "Oslo",
  },
  {
    quote:
      "Tok med sønnen min første gang. Rolig og profesjonell behandling.",
    name: "Silje",
    location: "Oslo",
  },
];

interface FaqItem {
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    question: "Trenger jeg å bestille time?",
    answer:
      "Nei, vi tar drop in. Bare stikk innom når det passer.",
  },
  {
    question: "Hva koster en klipp?",
    answer:
      "Herreklipp fra 350 kr, skinfade fra 380 kr. Se full prisliste på Tjenester-siden.",
  },
  {
    question: "Klipper dere barn?",
    answer: "Ja, vi tar barneklipp fra 280 kr.",
  },
  {
    question: "Hva er åpningstidene?",
    answer:
      "Mandag til fredag 10-19, lørdag 10-17, søndag stengt.",
  },
  {
    question: "Tar dere Vipps?",
    answer: "Ja, vi tar Vipps, kort og kontanter.",
  },
];

interface Step {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: "01",
    icon: <DoorOpen className="h-7 w-7" aria-hidden="true" />,
    title: "Stikk innom",
    description: "Ingen timebestilling. Kom når det passer deg.",
  },
  {
    number: "02",
    icon: <Scissors className="h-7 w-7" aria-hidden="true" />,
    title: "Velg din stil",
    description: "Fortell hva du vil ha. Vi rådgir gjerne.",
  },
  {
    number: "03",
    icon: <Smile className="h-7 w-7" aria-hidden="true" />,
    title: "Gå ut fornøyd",
    description: "Ferdig på 30 minutter. Alltid fast pris.",
  },
];

/* ────────────────────────────────────────────────────────────────────────────
   Page
   ────────────────────────────────────────────────────────────────────────── */

export default function HomePage() {
  return (
    <>
      {/* ═══════ HERO ═══════ */}
      <section
        className="relative overflow-hidden bg-[var(--black)]"
        aria-label="Hero"
      >
        {/* Desktop hero */}
        <div className="hidden md:block">
          <div className="relative h-[85vh] min-h-[600px]">
            <Image
              src="/images/barber_action_1.jpg"
              alt="Frisør hos Blue Frisør styler en kundes hår"
              fill
              className="object-cover object-[center_top]"
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
                    <span
                      className="inline-block h-2 w-2 rounded-full bg-green-400"
                      aria-hidden="true"
                    />
                    Drop in. Ingen timebestilling nødvendig
                  </div>
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                    <a
                      href="tel:+4746372323"
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-primary px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-blue-deep hover:shadow-lg hover:shadow-blue-primary/25"
                    >
                      <Phone className="h-5 w-5" aria-hidden="true" />
                      +47 46 37 23 23
                    </a>
                    <Link
                      href="/tjenester"
                      className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 px-8 py-4 text-lg font-semibold text-white transition-colors hover:border-white/60 hover:bg-white/10"
                    >
                      Se priser
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile hero */}
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
                <span
                  className="inline-block h-1.5 w-1.5 rounded-full bg-green-400"
                  aria-hidden="true"
                />
                Drop in velkommen
              </div>
              <div className="mt-6">
                <a
                  href="tel:+4746372323"
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-primary px-6 py-4 text-lg font-semibold text-white transition-colors hover:bg-blue-deep"
                >
                  <Phone className="h-5 w-5" aria-hidden="true" />
                  Ring oss: 46 37 23 23
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ VIBE STRIP ═══════ */}
      <section
        className="border-b border-blue-light bg-blue-lighter"
        aria-label="Fakta om Blue Frisør"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-blue-light sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          <div className="flex items-center justify-center gap-3 px-6 py-5">
            <Star
              className="h-6 w-6 text-blue-primary"
              aria-hidden="true"
            />
            <div>
              <p className="text-lg font-bold text-foreground">4.8 / 5</p>
              <p className="text-sm text-foreground/60">
                118+ Google-anmeldelser
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 px-6 py-5">
            <MapPin
              className="h-6 w-6 text-blue-primary"
              aria-hidden="true"
            />
            <div>
              <p className="text-lg font-bold text-foreground">
                Grønland, Oslo
              </p>
              <p className="text-sm text-foreground/60">
                Grønlandsleiret 18
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 px-6 py-5">
            <DoorOpen
              className="h-6 w-6 text-blue-primary"
              aria-hidden="true"
            />
            <div>
              <p className="text-lg font-bold text-foreground">Drop in</p>
              <p className="text-sm text-foreground/60">
                Ingen timebestilling nødvendig
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ HOW IT WORKS ═══════ */}
      <section className="py-16 sm:py-24" aria-labelledby="process-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2
              id="process-heading"
              className="font-heading text-3xl font-bold text-foreground sm:text-4xl"
            >
              Slik fungerer det
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-lg text-foreground/60">
              Tre enkle steg. Ingen stress.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-0">
            {steps.map((step, index) => (
              <div key={step.number} className="relative flex flex-col items-center text-center">
                {/* Connector line (desktop only, not on last item) */}
                {index < steps.length - 1 && (
                  <div
                    className="absolute left-[calc(50%+3rem)] top-8 hidden h-[2px] w-[calc(100%-6rem)] bg-[var(--blue-light)] md:block"
                    aria-hidden="true"
                  />
                )}

                {/* Step number + icon */}
                <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[var(--blue-lighter)] text-[var(--blue-primary)]">
                  {step.icon}
                  <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-[var(--blue-primary)] text-xs font-bold text-white">
                    {step.number}
                  </span>
                </div>

                {/* Text */}
                <h3 className="mt-5 text-xl font-bold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-xs text-foreground/60">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SERVICES ═══════ */}
      <section
        className="bg-blue-lighter py-16 sm:py-24"
        aria-labelledby="services-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2
              id="services-heading"
              className="font-heading text-3xl font-bold text-foreground sm:text-4xl"
            >
              Våre tjenester
            </h2>
            <p className="mt-3 text-lg text-foreground/60">
              Profesjonell frisør for alle. Fra klassisk klipp til presise
              fades.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.name}
                className="group rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--blue-lighter)] text-[var(--blue-primary)] transition-colors group-hover:bg-[var(--blue-primary)] group-hover:text-white">
                  {service.icon}
                </div>
                <h3 className="mt-4 text-lg font-bold text-foreground">
                  {service.name}
                </h3>
                <p className="mt-1 text-sm text-foreground/60">
                  {service.description}
                </p>
                <p className="mt-3 text-lg font-bold text-[var(--blue-primary)]">
                  {service.price}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/tjenester"
              className="inline-flex items-center gap-2 font-semibold text-[var(--blue-primary)] transition-colors hover:text-[var(--blue-deep)]"
            >
              Se alle tjenester med detaljer
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════ GALLERY PREVIEW ═══════ */}
      <section
        className="py-16 sm:py-24"
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
              Et glimt inn i salongen på Grønlandsleiret 18.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl sm:col-span-2 lg:col-span-1 lg:row-span-2 lg:aspect-auto lg:h-full">
              <Image
                src="/images/interior_4.jpg"
                alt="Blue Frisør interiør med takdekor, lysekrone og blå vegger"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 100vw, 100vw"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src="/images/interior_1.jpg"
                alt="Oversiktsbilde av Blue Frisør med frisører i arbeid"
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
              className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-[var(--blue-primary)] shadow-sm transition-all hover:bg-[var(--blue-primary)] hover:text-white hover:shadow-md"
            >
              Se hele galleriet
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════ TESTIMONIALS ═══════ */}
      <section
        className="bg-[var(--black)] py-16 sm:py-24"
        aria-labelledby="testimonials-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2
              id="testimonials-heading"
              className="font-heading text-3xl font-bold text-white sm:text-4xl"
            >
              Hva kundene sier
            </h2>
            <p className="mt-3 text-lg text-white/60">
              Ekte anmeldelser fra Google.
            </p>
          </div>

          {/* Desktop: 3-col grid. Mobile: horizontal scroll */}
          <div className="mt-10 flex gap-6 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:overflow-visible md:pb-0">
            {testimonials.map((t) => (
              <article
                key={t.name}
                className="flex min-w-[280px] flex-shrink-0 flex-col rounded-xl bg-white/5 p-6 backdrop-blur-sm md:min-w-0"
              >
                {/* Stars */}
                <div className="flex gap-1" aria-label="5 av 5 stjerner">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-[var(--gold-accent)] text-[var(--gold-accent)]"
                      aria-hidden="true"
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="mt-4 flex-1 text-white/90">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                {/* Attribution */}
                <div className="mt-5 border-t border-white/10 pt-4">
                  <p className="font-semibold text-white">
                    {t.name}, {t.location}
                  </p>
                  <p className="mt-1 text-sm text-white/50">
                    Verifisert Google-anmeldelse
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ FAQ ═══════ */}
      <section className="py-16 sm:py-24" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2
              id="faq-heading"
              className="font-heading text-3xl font-bold text-foreground sm:text-4xl"
            >
              Vanlige spørsmål
            </h2>
            <p className="mt-3 text-lg text-foreground/60">
              Det du lurer på, besvart.
            </p>
          </div>

          <div className="mt-10">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`faq-${index}`}>
                  <AccordionTrigger className="text-left text-base font-medium sm:text-lg">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* ═══════ CTA BAND ═══════ */}
      <section
        className="relative overflow-hidden bg-blue-primary"
        aria-label="Ring oss"
      >
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
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:py-24">
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
            {/* Left: headline + CTA */}
            <div className="text-center md:text-left">
              <h2 className="font-heading text-3xl font-bold text-white sm:text-5xl">
                Kom innom i dag
              </h2>
              <p className="mt-4 text-lg text-white/80">
                Bare stikk innom. Vi tar drop in, eller ring oss direkte.
              </p>
              <div className="mt-8">
                <a
                  href="tel:+4746372323"
                  className="inline-flex items-center gap-3 rounded-lg bg-white px-10 py-5 text-xl font-bold text-[var(--blue-primary)] transition-all hover:bg-blue-light hover:shadow-lg"
                >
                  <Phone className="h-5 w-5" aria-hidden="true" />
                  Ring oss: 46 37 23 23
                </a>
              </div>
            </div>

            {/* Right: trust mini-stats */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-6">
              <div className="rounded-lg bg-white/15 px-6 py-5 text-center backdrop-blur-sm">
                <p className="text-2xl font-bold text-white">4.8 / 5</p>
                <p className="mt-1 text-sm text-white/70">Google</p>
              </div>
              <div className="rounded-lg bg-white/15 px-6 py-5 text-center backdrop-blur-sm">
                <p className="text-2xl font-bold text-white">7 dager</p>
                <p className="mt-1 text-sm text-white/70">Åpent i uken</p>
              </div>
              <div className="rounded-lg bg-white/15 px-6 py-5 text-center backdrop-blur-sm">
                <p className="text-2xl font-bold text-white">Drop in</p>
                <p className="mt-1 text-sm text-white/70">Alltid OK</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
