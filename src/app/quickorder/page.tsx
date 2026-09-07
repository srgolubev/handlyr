import Link from 'next/link';
import Image from 'next/image';
import { BUSINESS, PRICING, GALLERY_ITEMS, RATING, REVIEWS } from '@/lib/constants';
import { PhoneIcon, StarIcon } from '@/components/icons';

const JOBBER_FORM_URL =
  'https://clienthub.getjobber.com/hubs/d414ffea-724d-4732-bb6f-884d8b3b05e6/public/requests/2259100/new';
const SMS_HREF = `sms:+13477998402?body=${encodeURIComponent(
  'Hi Serge! I would like a quote.\nService needed: \nZIP code: \nPreferred day: \nI will attach a photo of the job.',
)}`;
const RECENT_WORK = GALLERY_ITEMS.filter((project) =>
  ['tv-mounting.webp', 'floating-shelves.webp'].some((file) => project.image.endsWith(`/${file}`)),
);
const REVIEW = REVIEWS.find((review) => review.id === 12);

export default function QuickOrderPage() {
  return (
    <main className="min-h-[100svh] bg-neutral-50 px-5 py-7 sm:py-10">
      <div className="mx-auto w-full max-w-md">
        <header className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2.5 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-800" aria-label="Handlyr — go to homepage">
            <Image src="/favicon/android-chrome-192x192.png" alt="" width={40} height={40} className="rounded-xl" />
            <span className="font-heading text-xl font-extrabold text-primary-800">Handlyr</span>
          </Link>
          <span className="text-xs font-medium text-text-muted">{BUSINESS.experience} years of experience</span>
        </header>

        <section className="pt-8" aria-labelledby="quote-heading">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary-700">Brooklyn · Queens · Manhasset</p>
          <h1 id="quote-heading" className="mt-3 font-heading text-3xl font-extrabold leading-tight tracking-tight text-primary-800 sm:text-4xl">
            Small home projects.<br />One reliable handyman.
          </h1>
          <p className="mt-3 text-base leading-relaxed text-text-muted">
            Furniture assembly, TV mounting, shelves, blinds &amp; small repairs. Text Serge a photo for a free quote.
          </p>

          <div className="mt-6 flex flex-col gap-3">
            <a href={SMS_HREF} className="flex min-h-14 items-center justify-center gap-2 rounded-xl bg-primary-800 px-4 py-4 text-center text-lg font-bold text-white shadow-sm transition-colors hover:bg-primary-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-800">
              Text a Photo for a Quote
              <span aria-hidden="true">↗</span>
            </a>
            <p className="text-center text-xs leading-relaxed text-text-muted">Add a photo, your ZIP code and a preferred day in your messaging app.</p>
            <div className="grid grid-cols-2 gap-3">
              <a href={BUSINESS.phoneHref} className="flex min-h-12 items-center justify-center gap-2 rounded-xl border border-primary-800 bg-white px-3 py-3 text-sm font-bold text-primary-800 hover:bg-primary-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-800">
                <PhoneIcon className="h-4 w-4" />Call Serge
              </a>
              <a href={JOBBER_FORM_URL} className="flex min-h-12 items-center justify-center rounded-xl border border-neutral-300 bg-white px-3 py-3 text-center text-sm font-bold text-primary-800 hover:bg-primary-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-800">
                Request Quote Online
              </a>
            </div>
          </div>

          <div className="mt-5 border-y border-neutral-200 py-4 text-sm leading-relaxed text-text-muted">
            <p><strong className="text-primary-800">${PRICING.hourlyRate}/hour · {PRICING.minimumHours}-hour minimum (${PRICING.hourlyRate * PRICING.minimumHours})</strong></p>
            <p>Have a few small jobs? Bundle them into one visit.</p>
            <p className="mt-1 text-xs">Free quotes by photo. On-site assessment: ${PRICING.estimateFee}, credited toward your job.</p>
          </div>
        </section>

        <section className="pt-6" aria-labelledby="work-heading">
          <div className="mb-3 flex items-center justify-between gap-3">
            <h2 id="work-heading" className="font-heading text-base font-bold text-primary-800">Work by Handlyr</h2>
            <Link href="/projects" className="text-sm text-primary-800 underline underline-offset-4">See projects</Link>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {RECENT_WORK.map((project) => (
              <figure key={project.id}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-neutral-200">
                  <Image src={project.image} alt={project.alt} fill sizes="(max-width: 480px) 45vw, 220px" className="object-cover" />
                </div>
                <figcaption className="mt-2 text-xs font-medium text-text-muted">{project.label}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="mt-6 rounded-xl border border-neutral-200 bg-white p-5" aria-label="Customer review">
          <div className="flex items-center gap-2 text-sm font-semibold text-primary-800">
            <StarIcon className="h-4 w-4 text-amber-600" />
            <span>{RATING.value}/5 · {RATING.count} customer reviews</span>
          </div>
          {REVIEW && <>
            <blockquote className="mt-3 text-sm leading-relaxed text-text-muted">&ldquo;{REVIEW.text}&rdquo;</blockquote>
            <p className="mt-2 text-xs font-semibold text-primary-800">{REVIEW.name} · {REVIEW.service}</p>
          </>}
          <Link href="/#reviews" className="mt-3 inline-block text-sm text-primary-800 underline underline-offset-4">Read customer reviews</Link>
        </section>

        <footer className="pt-6 text-center text-xs leading-relaxed text-text-muted">
          <p>{BUSINESS.guarantee}</p>
          <p className="mt-1">Call or text <a href={BUSINESS.phoneHref} className="text-primary-800 underline underline-offset-2">{BUSINESS.phone}</a> · 8 am–8 pm</p>
        </footer>
      </div>
    </main>
  );
}
