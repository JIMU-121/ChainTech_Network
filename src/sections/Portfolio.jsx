export default function PortfolioSection() {
  const items = Array(8).fill({
    title: "Chaintech Product",
    tags: ["UX Design", "Angular", "JavaScript"],
  });

  return (
    <section className="bg-black text-white px-10 py-16 min-h-screen">
      <h1 className="text-4xl font-extrabold mb-10">PORTFOLIO</h1>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {items.map((item, index) => (
          <PortfolioCard key={index} data={item} />
        ))}
      </div>
    </section>
  );
}

function PortfolioCard({ data }) {
  return (
    <div className="bg-[#111] border border-white/10 rounded-2xl p-4 shadow-lg hover:shadow-xl transition">
      
      {/* Top Image */}
      <div className="rounded-xl overflow-hidden mb-4">
        <img
          src="src\assets\Frame 7.png"
          alt="Portfolio"
          className="w-full h-40 object-cover"
        />
      </div>

      {/* Title */}
      <h2 className="text-lg font-semibold">{data.title}</h2>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-3">
        {data.tags.map((tag, i) => (
          <span
            key={i}
            className="text-xs bg-[#E9DFFC] text-[#784DC7] px-3 py-1 rounded-xl border border-white/10"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Button */}
      <button className="w-full bg-[#2F2F2F] text-white text-sm py-2  mt-5 hover:bg-[#3a3a3a] border border-white/10 transition">
        View Product Detail
      </button>
    </div>
  );
}
