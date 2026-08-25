import Image from "next/image";
import { stories } from "@/lib/site";

export function Featured() {
  return (
    <section className="bg-rv-cream py-20 sm:py-28">
      <div className="section-container">
        <p className="label-caps text-rv-ocean">Inspiração</p>
        <h2 className="section-title mt-3">Roteiros em destaque</h2>
        <div className="gold-rule-long mt-6 from-rv-sand" />

        <div className="mt-14 grid gap-10 lg:grid-cols-3">
          {stories.map((story) => (
            <article key={story.title} className="group">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  unoptimized
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
              <p className="mt-5 text-[11px] uppercase tracking-[0.22em] text-rv-ocean">
                {story.location}
              </p>
              <h3 className="mt-2 font-serif text-2xl text-rv-navy">{story.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-rv-muted">{story.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
