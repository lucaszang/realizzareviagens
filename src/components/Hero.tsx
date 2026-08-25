import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site";

const HERO_IMAGE = "/images/hero.jpg";

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-[100svh] scroll-mt-24 overflow-hidden bg-rv-navyDeep">
      <Image
        src={HERO_IMAGE}
        alt="Estrada aberta rumo a um novo destino"
        fill
        priority
        className="object-cover object-center"
        unoptimized
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-hero-overlay-mobile lg:bg-hero-overlay" />
      <div className="absolute inset-0 bg-gradient-to-t from-rv-navyDeep via-transparent to-rv-navyDeep/40" />

      <div className="section-container-wide relative flex min-h-[100svh] flex-col justify-end pb-16 pt-32 sm:pb-20 lg:justify-center lg:pb-24">
        <p className="label-caps text-rv-sandLight">Realizzare Viagens · Cadastur</p>
        <h1 className="mt-5 max-w-3xl font-serif text-5xl font-medium leading-[1.05] text-white sm:text-6xl lg:text-8xl">
          Perca-se.
          <br />
          <span className="italic text-rv-sandLight">Descubra-se.</span>
        </h1>
        <p className="mt-6 max-w-lg text-base leading-relaxed text-white/80 sm:text-lg">
          Pacotes nacionais e internacionais com atendimento exclusivo.
          Da comodidade de casa até as nossas bases no Brasil e em Portugal.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a href="#monte-seu-tour" className="btn-primary">
            Monte seu tour
          </a>
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <MessageCircle size={16} />
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
