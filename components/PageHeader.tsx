interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-semibold mb-4 text-gray-100">{title}</h1>
      {subtitle && <p className="text-base text-gray-500 leading-6">{subtitle}</p>}
    </div>
  );
}
