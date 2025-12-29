interface MainSectionProps {
  title: string;
  children: React.ReactNode;
}

export default function MainSection({ title, children }: MainSectionProps) {
  return (
    <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
      <h2 className="text-xl font-medium mb-3">{title}</h2>
      <div className="text-sm text-gray-500 leading-5">{children}</div>
    </div>
  );
}
