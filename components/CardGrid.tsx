interface CardGridProps {
  children: React.ReactNode;
}

export default function CardGrid({ children }: CardGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
      {children}
    </div>
  );
}
