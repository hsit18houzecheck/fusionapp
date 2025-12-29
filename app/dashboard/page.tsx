import Card from "@/components/Card";
import CardGrid from "@/components/CardGrid";
import MainSection from "@/components/MainSection";
import PageHeader from "@/components/PageHeader";

export default function Dashboard() {
  const cards = [
    { title: "Card One", description: "Add your content here" },
    { title: "Card Two", description: "Add your content here" },
    { title: "Card Three", description: "Add your content here" },
  ];

  return (
    <div className="min-h-screen bg-black text-gray-100">
      <div className="flex flex-col p-5 sm:p-10">
        <PageHeader
          title="Dashboard"
          subtitle="Welcome to your dashboard. This is a simple layout page where you can add your content."
        />

        <CardGrid>
          {cards.map((card, index) => (
            <Card key={index} title={card.title} description={card.description} />
          ))}
        </CardGrid>

        <MainSection title="Main Content Section">
          This is the main content area. You can replace this with your dashboard data, charts,
          tables, or any other content you need to display.
        </MainSection>
      </div>
    </div>
  );
}
