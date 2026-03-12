import { REVIEWS } from '@/lib/constants';

function StarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-[18px] h-[18px]"
      style={{ color: '#FBBF24' }}
      aria-hidden="true"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="bg-white py-16 px-4 lg:py-24 lg:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: '#F97316', letterSpacing: '0.1em' }}
          >
            Reviews
          </p>
          <h2
            className="font-heading font-bold text-3xl lg:text-4xl text-text-dark"
            style={{ letterSpacing: '-0.01em' }}
          >
            What Our Customers Say
          </h2>
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((review) => (
            <article
              key={review.id}
              className="flex flex-col p-6 bg-white border border-neutral-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-150"
            >
              {/* Stars */}
              <div className="flex gap-1" aria-label={`${review.stars} out of 5 stars`}>
                {[...Array(review.stars)].map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>

              {/* Review text */}
              <blockquote className="mt-4 text-base text-text-dark leading-relaxed flex-1">
                &ldquo;{review.text}&rdquo;
              </blockquote>

              {/* Reviewer */}
              <footer className="mt-6 flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0"
                  style={{ backgroundColor: '#DBEAFE', color: '#1138A3' }}
                  aria-hidden="true"
                >
                  {review.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-text-dark">{review.name}</p>
                  <p className="text-xs text-text-muted">{review.location}</p>
                </div>
              </footer>
            </article>
          ))}
        </div>

        {/* Google reviews badge */}
        <p className="mt-8 text-center text-sm text-text-muted">
          Read more reviews on{' '}
          <a
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary-600 hover:text-primary-700 transition-colors duration-150 underline underline-offset-2"
          >
            Google
          </a>
        </p>
      </div>
    </section>
  );
}
