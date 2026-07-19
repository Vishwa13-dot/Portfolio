function StatCard({ title, value, color }) {
  return (
    <div
      className={`rounded-3xl p-8 bg-slate-900 border border-slate-800 hover:scale-105 transition duration-300`}
    >
      <h3 className="text-slate-400">{title}</h3>

      <h1 className={`text-5xl font-bold mt-4 ${color}`}>
        {value}
      </h1>
    </div>
  );
}

export default StatCard;