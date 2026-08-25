import { testimonials } from "@/lib/site";

export function Testimonials() {
  return (
    <section id="depoimentos" className="scroll-mt-24 bg-rv-navy py-20 sm:py-28">
      <div className="section-container">
        <p className="label-caps">Depoimentos</p>
        <h2 className="section-title-light mt-3">Quem viajou conta</h2>
        <div className="gold-rule-long mt-6" />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {testimonials.map((item) => (
            <blockquote key={item.author} className="border border-white/10 bg-white/5 p-8 sm:p-10">
              <p className="font-serif text-xl leading-relaxed text-white sm:text-2xl">
                “{item.quote}”
              </p>
              <footer className="mt-8">
                <p className="text-sm font-semibold text-rv-sandLight">{item.author}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-white/50">
                  {item.source}
                </p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
