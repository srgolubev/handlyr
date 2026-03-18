import { ShieldCheckIcon, ClockIcon, StarIcon, DollarSignIcon } from '@/components/icons';

const valueProps = [
  {
    id: 'experience',
    icon: <ShieldCheckIcon className="w-8 h-8" />,
    title: '15+ Years Experience',
    description: 'Over a decade and a half of hands-on work — now serving homes and apartments across NYC.',
  },
  {
    id: 'response',
    icon: <ClockIcon className="w-8 h-8" />,
    title: 'Fast Response',
    description: 'We reply quickly and show up when we say we will. Your time is respected.',
  },
  {
    id: 'clean',
    icon: <StarIcon className="w-8 h-8" />,
    title: 'Clean Work',
    description: 'We clean up after every job. Your home is left better than we found it.',
  },
  {
    id: 'pricing',
    icon: <DollarSignIcon className="w-8 h-8" />,
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
            15+ years of experience, professional tools, and a commitment to clean, reliable work.
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
