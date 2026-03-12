const valueProps = [
  {
    id: 'experience',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    title: '15+ Years Experience',
    description: 'Over a decade and a half of hands-on work across NYC homes and apartments.',
  },
  {
    id: 'response',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8" aria-hidden="true">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: 'Fast Response',
    description: 'We reply quickly and show up when we say we will. Your time is respected.',
  },
  {
    id: 'clean',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8" aria-hidden="true">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    title: 'Clean Work',
    description: 'We clean up after every job. Your home is left better than we found it.',
  },
  {
    id: 'pricing',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8" aria-hidden="true">
        <line x1="12" x2="12" y1="2" y2="22" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: 'Fair, Transparent Pricing',
    description: 'No hidden fees, no surprises. You know what it costs before work begins.',
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="py-16 px-4 lg:py-20 lg:px-6"
      style={{ backgroundColor: '#F9FAFB' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: '#1A4FD0', letterSpacing: '0.1em' }}
          >
            Why Handlyr
          </p>
          <h2
            className="font-heading font-bold text-3xl lg:text-4xl text-text-dark"
            style={{ letterSpacing: '-0.01em' }}
          >
            What Makes Us Different
          </h2>
          <p className="mt-3 text-lg text-text-muted">
            15 years of experience, professional tools, and a reputation built on clean, reliable work.
          </p>
        </div>

        {/* Value props grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {valueProps.map((prop) => (
            <div key={prop.id} className="text-center p-6">
              {/* Icon container */}
              <div
                className="w-16 h-16 mx-auto rounded-full flex items-center justify-center"
                style={{ backgroundColor: '#DBEAFE', color: '#1A4FD0' }}
              >
                {prop.icon}
              </div>

              {/* Title */}
              <h3 className="mt-4 text-xl font-heading font-bold text-text-dark">
                {prop.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm text-text-muted leading-relaxed max-w-xs mx-auto">
                {prop.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
