import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { destinations, siteConfig } from "@/lib/site";

export function Destinations() {
  return (
    <section id="destinos" className="scroll-mt-24 bg-rv-navyDeep py-20 sm:py-28">
      <div className="section-container-wide">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="label-caps">Destinos</p>
            <h2 className="section-title-light mt-3">Para onde você quer ir?</h2>
            <div className="gold-rule-long mt-6" />
          </div>
          <p className="max-w-md text-sm leading-relaxed text-white/65 sm:text-base">
            Pacotes prontos ou um tour sob medida. Rio, Nordeste, Europa, Estados Unidos,
            Dubai, Saara e muito mais.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((destination) => (
            <a
              key={destination.slug}
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block overflow-hidden"
            >
              <div className="relative aspect-[4/5]">
                <Image
                  src={destination.image}
                  alt={destination.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rv-navyDeep/90 via-rv-navyDeep/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-rv-sandLight">
                    {destination.region}
                  </p>
                  <h3 className="mt-2 font-serif text-2xl text-white sm:text-3xl">
                    {destination.title}
                  </h3>
                  <p className="mt-1 text-sm text-white/75">{destination.subtitle}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-rv-sandLight">
                    Saiba mais
                    <ArrowUpRight size={14} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-10 border border-white/10 bg-white/5 p-8 text-center sm:p-12">
          <p className="label-caps">Sob medida</p>
          <h3 className="mt-3 font-serif text-3xl text-white sm:text-4xl">Monte o seu tour</h3>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-white/70 sm:text-base">
            Conte o destino, o ritmo e o orçamento. Montamos um roteiro exclusivo com
            passagens, hospedagem, passeios e transfers.
          </p>
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-8"
          >
            Começar agora
          </a>
        </div>
      </div>
    </section>
  );
}
