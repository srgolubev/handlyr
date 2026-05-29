import { getGoogleReviews } from '@/lib/googleReviews';
import { StarIcon } from '@/components/icons';

/** Multicolor Google "G" mark. */
function GoogleG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path
        fill="#4285F4"
        d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"
      />
      <path
        fill="#34A853"
        d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"
      />
      <path
        fill="#FBBC05"
        d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34A21.99 21.99 0 0 0 2 24c0 3.55.85 6.91 2.34 9.88l7.35-5.7z"
      />
      <path
        fill="#EA4335"
        d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"
      />
    </svg>
  );
}

/**
 * Live Google reviews card. Async server component — fetches via the Places
 * API on the server (key never reaches the client) and renders the most recent
 * review alongside the overall rating. Renders nothing if reviews are
 * unavailable, so the surrounding section degrades gracefully.
 */
export default async function GoogleReviewsWidget() {
  const data = await getGoogleReviews();
  if (!data) return null;

  const latest = data.reviews[0];
  const fullStars = Math.round(latest.rating);

  return (
    <div className="google-review-widget">
      <div className="grw-header">
        <GoogleG className="grw-logo" />
        <div>
          <div className="grw-title">Google Reviews</div>
          <div className="grw-rating">
            <span className="grw-score">{data.rating.toFixed(1)}</span>
            <span className="grw-stars" aria-label={`${data.rating.toFixed(1)} out of 5`}>
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="grw-star" />
              ))}
            </span>
            <span className="grw-count">({data.total})</span>
          </div>
        </div>
      </div>

      <div className="grw-review">
        <div className="grw-author-row">
          <span className="grw-stars" aria-label={`${fullStars} out of 5 stars`}>
            {[...Array(fullStars)].map((_, i) => (
              <StarIcon key={i} className="grw-star" />
            ))}
          </span>
          {latest.relativeTime && <span className="grw-time">{latest.relativeTime}</span>}
        </div>
        <p className="grw-text">&ldquo;{latest.text}&rdquo;</p>
        <p className="grw-name">— {latest.author}</p>
      </div>

      <a
        className="grw-link"
        href={data.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        See all reviews
      </a>
    </div>
  );
}
