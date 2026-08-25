import { Star } from "lucide-react";
import { getGoogleReviews } from "@/lib/google-reviews";

function Stars({ rating }: { rating: number }) {
  return (
    <span className="inline-flex items-center gap-0.5" aria-label={`${rating} de 5`}>
      {Array.from({ length: 5 }, (_, index) => {
        const filled = index + 1 <= Math.round(rating);
        return (
          <Star
            key={index}
            size={14}
            className={filled ? "fill-rv-sand text-rv-sand" : "text-white/25"}
          />
        );
      })}
    </span>
  );
}

export async function Testimonials() {
  const { source, rating, total, mapsUrl, reviews } = await getGoogleReviews();

  return (
    <section id="depoimentos" className="scroll-mt-24 bg-rv-navy py-20 sm:py-28">
      <div className="section-container">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="label-caps">Depoimentos</p>
            <h2 className="section-title-light mt-3">Quem viajou conta</h2>
            <div className="gold-rule-long mt-6" />
            {source === "google" && rating ? (
              <p className="mt-5 flex flex-wrap items-center gap-3 text-sm text-white/70">
                <Stars rating={rating} />
                <span className="font-semibold text-rv-sandLight">{rating.toFixed(1)}</span>
                {total ? <span>em {total} avaliações no Google</span> : null}
              </p>
            ) : (
              <p className="mt-5 text-sm text-white/60">Avaliações publicadas no Google</p>
            )}
          </div>
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline !border-rv-sand/40 !text-rv-sandLight hover:!border-rv-sand"
          >
            Ver no Google
          </a>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {reviews.map((item) => (
            <blockquote
              key={`${item.author}-${item.relativeTime ?? item.quote.slice(0, 24)}`}
              className="border border-white/10 bg-white/5 p-8 sm:p-10"
            >
              {item.rating ? (
                <div className="mb-5">
                  <Stars rating={item.rating} />
                </div>
              ) : null}
              <p className="font-serif text-xl leading-relaxed text-white sm:text-2xl">
                “{item.quote}”
              </p>
              <footer className="mt-8 flex items-center gap-3">
                {item.photoUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={item.photoUrl}
                    alt=""
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                ) : null}
                <div>
                  {item.authorUrl ? (
                    <a
                      href={item.authorUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-rv-sandLight hover:text-white"
                    >
                      {item.author}
                    </a>
                  ) : (
                    <p className="text-sm font-semibold text-rv-sandLight">{item.author}</p>
                  )}
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-white/50">
                    {item.relativeTime ? `${item.relativeTime} · ` : ""}
                    {item.source}
                  </p>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>

        <p className="mt-8 text-center text-[11px] uppercase tracking-[0.18em] text-white/35">
          {source === "google" ? "Avaliações obtidas via Google" : "Google Avaliações"}
        </p>
      </div>
    </section>
  );
}
