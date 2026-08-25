import { Palmtree, Sparkles, Utensils } from "lucide-react";
import { experiences } from "@/lib/site";

const icons = {
  utensils: Utensils,
  sparkles: Sparkles,
  palm: Palmtree,
};

export function Experiences() {
  return (
    <section className="bg-rv-cream py-16 sm:py-20">
      <div className="section-container">
        <div className="grid gap-10 sm:grid-cols-3">
          {experiences.map((item) => {
            const Icon = icons[item.icon];
            return (
              <article key={item.title} className="text-center sm:text-left">
                <div className="mx-auto flex h-12 w-12 items-center justify-center border border-rv-sand/50 text-rv-ocean sm:mx-0">
                  <Icon size={20} />
                </div>
                <h2 className="mt-5 font-serif text-2xl text-rv-navy">{item.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-rv-muted">{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
