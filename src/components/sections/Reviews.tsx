import { REVIEWS, RATING } from '@/lib/constants';
import { StarIcon } from '@/components/icons';
import ThumbtackReviewWidget from '@/components/sections/ThumbtackReviewWidget';
import GoogleReviewsWidget from '@/components/sections/GoogleReviewsWidget';

export default function Reviews() {
  return (
    <section id="reviews" className="bg-white py-16 px-4 lg:py-24 lg:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="eyebrow mb-3">Reviews</p>
          <h2
            className="font-heading font-bold text-3xl lg:text-4xl text-text-dark"
            style={{ letterSpacing: '-0.01em' }}
          >
            What Our Customers Say
          </h2>
          <p className="mt-3 text-lg text-text-muted">
            <span className="font-semibold text-text-dark">{RATING.value} ★</span>{' '}
            average from {RATING.count} verified reviews on Thumbtack &amp; Google.
          </p>
        </div>

        {/* Latest verified reviews — live from Thumbtack & Google */}
        <div className="mb-12 flex flex-wrap justify-center items-start gap-6">
          <ThumbtackReviewWidget />
          <GoogleReviewsWidget />
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((review) => (
            <article
              key={review.id}
              className="flex flex-col p-6 bg-white border border-neutral-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-150"
            >
              {/* Stars */}
              <div className="flex gap-1" aria-label={`${review.stars} out of 5 stars`}>
                {[...Array(review.stars)].map((_, i) => (
                  <StarIcon key={i} className="w-[18px] h-[18px] text-yellow-400" />
                ))}
              </div>

              {/* Review text */}
              <blockquote className="mt-4 text-base text-text-dark leading-relaxed flex-1">
                &ldquo;{review.text}&rdquo;
              </blockquote>

              {/* Reviewer */}
              <footer className="mt-6 flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 bg-primary-100 text-primary-700"
                  aria-hidden="true"
                >
                  {review.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-text-dark">{review.name}</p>
                  <p className="text-xs text-text-muted">{review.service}</p>
                </div>
              </footer>
            </article>
          ))}
        </div>

        {/* Leave a review CTA */}
        <div className="mt-10 flex justify-center">
          <a
            href="https://g.page/r/CZAXmeyU7f5eEAE/review"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-md btn-primary rounded-full"
          >
            <StarIcon className="w-5 h-5" />
            Leave a Review
          </a>
        </div>
      </div>
    </section>
  );
}
