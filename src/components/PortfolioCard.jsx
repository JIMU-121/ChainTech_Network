export default function PortfolioCard({ title, tags, image, onViewDetail }) {
  return (
    <div className="bg-[#111] border border-white/10 rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-white/20">

      <div className="rounded-xl overflow-hidden mb-4">
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      <h2 className="text-lg font-semibold mb-3">{title}</h2>

      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="text-xs bg-[#E9DFFC] text-[#784DC7] px-3 py-1 rounded-xl border border-white/10"
          >
            {tag}
          </span>
        ))}
      </div>

      <button
        onClick={onViewDetail}
        className="w-full bg-[#2F2F2F] text-white text-sm py-2 hover:bg-[#3a3a3a] border border-white/10 transition-all duration-200"
      >
        View Product Detail
      </button>
    </div>
  );
}
