/**
 * Server-side fetch of Google reviews via the Places API (New).
 *
 * The API key stays on the server — this module is only imported by server
 * components. Results are cached for a day via Next's fetch revalidation.
 * Returns `null` on any failure (missing config, network, non-OK response) so
 * callers can degrade gracefully and render nothing.
 *
 * Required env vars:
 *   GOOGLE_PLACES_API_KEY  — Google Cloud key with "Places API (New)" enabled
 *   GOOGLE_PLACE_ID        — the business Place ID (e.g. ChIJ...)
 */

export interface GoogleReview {
  author: string;
  rating: number;
  text: string;
  relativeTime: string;
  photoUri?: string;
  publishTime?: string;
}

export interface GooglePlaceReviews {
  rating: number;
  total: number;
  reviews: GoogleReview[];
  mapsUrl: string;
}

interface PlacesApiReview {
  rating?: number;
  text?: { text?: string };
  originalText?: { text?: string };
  relativePublishTimeDescription?: string;
  publishTime?: string;
  authorAttribution?: { displayName?: string; photoUri?: string };
}

export async function getGoogleReviews(): Promise<GooglePlaceReviews | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;
  if (!apiKey || !placeId) return null;

  try {
    const res = await fetch(`https://places.googleapis.com/v1/places/${placeId}`, {
      headers: {
        'X-Goog-Api-Key': apiKey,
        'X-Goog-FieldMask': 'id,rating,userRatingCount,googleMapsUri,reviews',
      },
      // Refresh at most once a day; key never reaches the client.
      next: { revalidate: 86400 },
    });
    if (!res.ok) return null;

    const data = await res.json();
    const raw: PlacesApiReview[] = Array.isArray(data.reviews) ? data.reviews : [];

    const reviews: GoogleReview[] = raw
      .map((r) => ({
        author: r.authorAttribution?.displayName ?? 'Google user',
        rating: r.rating ?? 5,
        text: r.text?.text ?? r.originalText?.text ?? '',
        relativeTime: r.relativePublishTimeDescription ?? '',
        photoUri: r.authorAttribution?.photoUri,
        publishTime: r.publishTime,
      }))
      .filter((r) => r.text.trim().length > 0)
      // Most recent first.
      .sort((a, b) => (b.publishTime ?? '').localeCompare(a.publishTime ?? ''));

    if (reviews.length === 0) return null;

    return {
      rating: typeof data.rating === 'number' ? data.rating : 5,
      total: typeof data.userRatingCount === 'number' ? data.userRatingCount : reviews.length,
      reviews,
      mapsUrl:
        typeof data.googleMapsUri === 'string'
          ? data.googleMapsUri
          : `https://www.google.com/maps/place/?q=place_id:${placeId}`,
    };
  } catch {
    return null;
  }
}
