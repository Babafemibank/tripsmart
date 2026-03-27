function StatCard({ title, value, subtitle, icon, accent = "border-blue-500" }) {
  return (
    <div
      className={`border  rounded-xl p-4 flex-1 min-w-[130px] border-l-4 ${accent}`}
    >
      {/* Top row: label + icon */}
      <div className="flex justify-between items-center">
        <p className="text-blue-800 text-[10px] uppercase tracking-widest font-bold">
          {title}
        </p>
        {icon && <span className="text-lg">{icon}</span>}
      </div>

      {/* Big value */}
      <p className="text-black text-2xl font-black tracking-tight mt-2">
        {value}
      </p>

      {/* Small subtitle */}
      {subtitle && (
        <p className="text-slate-500 text-[10px] mt-1">{subtitle}</p>
      )}
    </div>
  );
}

export default StatCard;
