interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="mb-16">
      <h1 className="font-serif text-4xl md:text-5xl text-ink mb-4">{title}</h1>
      <div className="w-8 h-px bg-blue mb-4" />
      {subtitle && (
        <p className="text-sm text-graphite tracking-wide">{subtitle}</p>
      )}
    </div>
  );
}
