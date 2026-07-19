function StatCard({ title, value, color }) {
  return (
    <div
      className="
        rounded-2xl lg:rounded-3xl
        p-5 sm:p-6 lg:p-8
        bg-slate-900
        border border-slate-800
        hover:border-blue-500
        hover:-translate-y-1
        lg:hover:-translate-y-2
        transition-all
        duration-300
      "
    >
      <h3 className="text-slate-400 text-sm sm:text-base">
        {title}
      </h3>

      <h1
        className={`mt-3 sm:mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold break-words ${color}`}
      >
        {value}
      </h1>
    </div>
  );
}

export default StatCard;