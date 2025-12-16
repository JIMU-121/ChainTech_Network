export default function StatCard({ value, label }) {
  return (
    <div className="text-[#C7FFB0] text-center sm:text-left">
      <h2 className="text-4xl sm:text-5xl lg:text-[70px] font-bold leading-none">{value}</h2>
      <p className="text-sm sm:text-base lg:text-[20px] leading-tight mt-2 whitespace-pre-line">
        {label}
      </p>
    </div>
  );
}
