import Link from 'next/link';

const JOBBER_FORM_URL =
  'https://clienthub.getjobber.com/hubs/d414ffea-724d-4732-bb6f-884d8b3b05e6/public/requests/2259100/new';

const SMS_HREF = 'sms:+13477998402?&body=Hi%20Serge!%20I%20need%20help%20with%20';

export default function QuickOrderPage() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center px-6 py-12"
      style={{ backgroundColor: '#F8F9FB' }}
    >
      <div className="w-full max-w-sm flex flex-col items-center gap-10">

        {/* Logo + home link */}
        <Link
          href="/"
          className="flex flex-col items-center gap-3 group"
          aria-label="Handlyr — go to homepage"
        >
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center text-white font-heading font-extrabold text-3xl shadow-lg group-hover:scale-105 transition-transform duration-200"
            style={{ backgroundColor: '#0D2860' }}
          >
            H
          </div>
          <span
            className="font-heading font-extrabold text-2xl tracking-tight group-hover:opacity-80 transition-opacity"
            style={{ color: '#0D2860' }}
          >
            Handlyr
          </span>
          <span
            className="text-sm font-medium -mt-1 underline underline-offset-2"
            style={{ color: '#6B7280' }}
          >
            handlyr.org
          </span>
        </Link>

        {/* Tagline */}
        <div className="text-center">
          <p className="text-lg font-semibold text-gray-800 leading-snug">
            NYC Handyman — Fast & Reliable
          </p>
          <p className="text-sm text-gray-500 mt-1">
            Furniture assembly · TV mounting · Repairs & more
          </p>
        </div>

        {/* CTA buttons */}
        <div className="w-full flex flex-col gap-4">

          {/* SMS button */}
          <a
            href={SMS_HREF}
            className="flex items-center justify-center gap-3 w-full py-5 rounded-2xl text-white text-lg font-bold shadow-lg active:scale-95 transition-transform duration-150"
            style={{ backgroundColor: '#0D2860' }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-3 3v-3z"
              />
            </svg>
            Send SMS
          </a>

          {/* Jobber form button */}
          <a
            href={JOBBER_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full py-5 rounded-2xl text-white text-lg font-bold shadow-lg active:scale-95 transition-transform duration-150"
            style={{ backgroundColor: '#F97316' }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
            Fast Quote
          </a>
        </div>

        {/* Trust footer */}
        <p className="text-xs text-gray-400 text-center leading-relaxed">
          15+ years experience · Brooklyn · Manhattan · Jersey City · Hoboken
        </p>
      </div>
    </main>
  );
}
