import { services } from "@/lib/site";

export function Services() {
  return (
    <section id="servicos" className="scroll-mt-24 bg-rv-cream py-20 sm:py-28">
      <div className="section-container">
        <div className="max-w-2xl">
          <p className="label-caps text-rv-ocean">Serviços</p>
          <h2 className="section-title mt-3">Serviços exclusivos</h2>
          <div className="gold-rule-long mt-6" />
          <p className="section-subtitle">
            Tudo o que a viagem precisa, em um só atendimento: do primeiro contato
            até o retorno para casa.
          </p>
        </div>

        <div className="mt-14 divide-y divide-rv-mist border-y border-rv-mist">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="grid gap-3 py-8 sm:grid-cols-[5rem_1fr] sm:items-start sm:gap-8 sm:py-10"
            >
              <span className="font-serif text-3xl text-rv-sand sm:text-4xl">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-serif text-2xl text-rv-navy">{service.title}</h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-rv-muted sm:text-base">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
