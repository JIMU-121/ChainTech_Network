import PortfolioCard from "../components/PortfolioCard";
import { portfolioItems } from "../data/content";

export default function PortfolioSection() {
  const handleViewDetail = (id) => {
    console.log(`View details for item ${id}`);
  };

  return (
    <section id="portfolio" className="bg-black text-white px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-20 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-8 sm:mb-12">
          PORTFOLIO
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {portfolioItems.map((item) => (
            <PortfolioCard
              key={item.id}
              title={item.title}
              tags={item.tags}
              image={item.image}
              onViewDetail={() => handleViewDetail(item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
