import { offices, partners, values } from "@/lib/site";

export function About() {
  return (
    <section id="quem-somos" className="scroll-mt-24 bg-white py-20 sm:py-28">
      <div className="section-container">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="label-caps text-rv-ocean">Quem somos</p>
            <h2 className="section-title mt-3">Realizando sonhos</h2>
            <div className="gold-rule-long mt-6" />
            <p className="mt-6 text-base leading-relaxed text-rv-muted sm:text-lg">
              A Realizzare nasceu de dois amigos apaixonados por viajar, com o objetivo
              de ajudar outras pessoas a conhecerem novos lugares. Em pouco tempo as
              indicações cresceram — e com elas, as bases de apoio em Porto Alegre,
              Balneário Camboriú e Porto, em Portugal.
            </p>
            <p className="mt-4 text-base leading-relaxed text-rv-muted sm:text-lg">
              Hoje, com segurança e tecnologia, oferecemos atendimento exclusivo e
              personalizado: da comodidade da sua casa até o fechamento do pacote,
              com mais dinamismo e menos burocracia, sem abrir mão da qualidade Realizzare.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-1">
            {values.map((item) => (
              <article key={item.title} className="border-l border-rv-sand pl-5">
                <h3 className="font-serif text-xl text-rv-navy">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-rv-muted">{item.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-8 border-t border-rv-mist pt-16 sm:grid-cols-2">
          {partners.map((partner) => (
            <blockquote key={partner.name} className="bg-rv-cream p-8">
              <p className="font-serif text-xl leading-relaxed text-rv-navy">
                “{partner.quote}”
              </p>
              <footer className="mt-6">
                <p className="text-sm font-semibold text-rv-navy">{partner.name}</p>
                <p className="text-xs uppercase tracking-[0.18em] text-rv-muted">
                  {partner.role}
                </p>
                <a
                  href={partner.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-sm text-rv-ocean hover:text-rv-navy"
                >
                  @{partner.handle}
                </a>
              </footer>
            </blockquote>
          ))}
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {offices.map((office) => (
            <div key={office.city} className="border border-rv-mist px-5 py-6">
              <p className="text-[11px] uppercase tracking-[0.22em] text-rv-sand">Base</p>
              <p className="mt-2 font-serif text-xl text-rv-navy">{office.city}</p>
              <p className="mt-1 text-sm text-rv-muted">
                {office.region}
                {office.cep ? ` · ${office.cep}` : ""}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
