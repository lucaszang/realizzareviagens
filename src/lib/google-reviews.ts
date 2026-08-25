import { siteConfig, testimonials as fallbackTestimonials } from "@/lib/site";

export type Review = {
  author: string;
  quote: string;
  source: string;
  rating?: number;
  relativeTime?: string;
  authorUrl?: string;
  photoUrl?: string;
};

export type ReviewsPayload = {
  source: "google" | "fallback";
  rating?: number;
  total?: number;
  mapsUrl: string;
  reviews: Review[];
};

type PlaceSearchResponse = {
  status: string;
  candidates?: { place_id: string }[];
};

type PlaceDetailsResponse = {
  status: string;
  result?: {
    rating?: number;
    user_ratings_total?: number;
    url?: string;
    reviews?: {
      author_name: string;
      author_url?: string;
      profile_photo_url?: string;
      rating: number;
      relative_time_description?: string;
      text?: string;
    }[];
  };
};

function fallbackPayload(): ReviewsPayload {
  return {
    source: "fallback",
    mapsUrl: siteConfig.googleMapsSearchUrl,
    reviews: fallbackTestimonials.map((item) => ({
      author: item.author,
      quote: item.quote,
      source: item.source,
    })),
  };
}

async function findPlaceId(apiKey: string): Promise<string | null> {
  const fromEnv = process.env.GOOGLE_PLACE_ID?.trim();
  if (fromEnv) return fromEnv;

  const url = new URL("https://maps.googleapis.com/maps/api/place/findplacefromtext/json");
  url.searchParams.set("input", siteConfig.googleMapsQuery);
  url.searchParams.set("inputtype", "textquery");
  url.searchParams.set("fields", "place_id");
  url.searchParams.set("language", "pt-BR");
  url.searchParams.set("key", apiKey);

  const response = await fetch(url, { next: { revalidate: 86400 } });
  if (!response.ok) return null;

  const data = (await response.json()) as PlaceSearchResponse;
  return data.status === "OK" ? data.candidates?.[0]?.place_id ?? null : null;
}

export async function getGoogleReviews(): Promise<ReviewsPayload> {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY?.trim();
  if (!apiKey) return fallbackPayload();

  try {
    const placeId = await findPlaceId(apiKey);
    if (!placeId) return fallbackPayload();

    const url = new URL("https://maps.googleapis.com/maps/api/place/details/json");
    url.searchParams.set("place_id", placeId);
    url.searchParams.set("fields", "rating,user_ratings_total,reviews,url");
    url.searchParams.set("reviews_sort", "newest");
    url.searchParams.set("language", "pt-BR");
    url.searchParams.set("key", apiKey);

    const response = await fetch(url, { next: { revalidate: 21600 } });
    if (!response.ok) return fallbackPayload();

    const data = (await response.json()) as PlaceDetailsResponse;
    const reviews = (data.result?.reviews ?? [])
      .filter((review) => review.text?.trim())
      .map((review) => ({
        author: review.author_name,
        quote: review.text!.trim(),
        source: "Google",
        rating: review.rating,
        relativeTime: review.relative_time_description,
        authorUrl: review.author_url,
        photoUrl: review.profile_photo_url,
      }));

    if (!reviews.length) return fallbackPayload();

    return {
      source: "google",
      rating: data.result?.rating,
      total: data.result?.user_ratings_total,
      mapsUrl: data.result?.url || siteConfig.googleMapsSearchUrl,
      reviews,
    };
  } catch {
    return fallbackPayload();
  }
}
