interface PageHeroProps {
  label: string;
  title: string;
  description?: string;
}
export default function PageHero({ label, title, description }: PageHeroProps) {
  return (
    <section
      className="py-20 px-4 text-center"
      style={{ background: 'linear-gradient(135deg, #0B1F4A 0%, #0D2860 100%)' }}
    >
      <div className="max-w-3xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest mb-4 text-white/60">
          {label}
        </p>
        <h1
          className="font-heading font-extrabold text-4xl lg:text-5xl text-white mb-4"
          style={{ letterSpacing: '-0.02em' }}
        >
          {title}
        </h1>
        {description && (
          <p className="text-lg text-white/80 max-w-xl mx-auto">{description}</p>
        )}
      </div>
    </section>
  );
}
