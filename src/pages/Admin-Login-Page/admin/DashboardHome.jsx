import {
  FaProjectDiagram,
  FaTools,
  FaBriefcase,
  FaGraduationCap,
  FaArrowUp,
  FaPlus,
  FaEye,
} from "react-icons/fa";

function DashboardHome() {
  const stats = [
    {
      title: "Projects",
      value: "12",
      icon: <FaProjectDiagram />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Skills",
      value: "18",
      icon: <FaTools />,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Experience",
      value: "3",
      icon: <FaBriefcase />,
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Education",
      value: "2",
      icon: <FaGraduationCap />,
      color: "from-pink-500 to-purple-500",
    },
  ];

  return (
    <div className="space-y-6 lg:space-y-8">

      {/* Welcome */}

      <div className="rounded-2xl lg:rounded-3xl bg-gradient-to-r from-blue-600 via-cyan-600 to-indigo-700 p-5 sm:p-6 lg:p-8">

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
          Welcome Back, Vishwa 👋
        </h1>

        <p className="mt-3 text-sm sm:text-base lg:text-lg text-blue-100">
          Manage your portfolio, projects and skills from one place.
        </p>

      </div>

      {/* Stats */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">

        {stats.map((item, index) => (

          <div
            key={index}
            className="bg-slate-900 border border-slate-800 rounded-2xl lg:rounded-3xl p-5 lg:p-7 hover:-translate-y-2 hover:border-blue-500 transition duration-300"
          >

            <div
              className={`w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center text-2xl lg:text-3xl`}
            >
              {item.icon}
            </div>

            <p className="text-slate-400 mt-5 text-sm lg:text-base">
              {item.title}
            </p>

            <div className="flex justify-between items-center mt-3">

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                {item.value}
              </h2>

              <FaArrowUp className="text-green-400 text-xl lg:text-2xl" />

            </div>

          </div>

        ))}

      </div>

      {/* Bottom */}

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8">

        {/* Quick Actions */}

        <div className="bg-slate-900 border border-slate-800 rounded-2xl lg:rounded-3xl p-5 lg:p-8">

          <h2 className="text-xl lg:text-2xl font-bold mb-5">
            Quick Actions
          </h2>

          <div className="space-y-4">

            <button className="w-full flex items-center gap-3 bg-blue-600 hover:bg-blue-700 rounded-xl lg:rounded-2xl px-4 py-3 lg:p-4 transition">

              <FaPlus />

              <span className="text-sm sm:text-base">
                Add New Project
              </span>

            </button>

            <button className="w-full flex items-center gap-3 bg-green-600 hover:bg-green-700 rounded-xl lg:rounded-2xl px-4 py-3 lg:p-4 transition">

              <FaPlus />

              <span className="text-sm sm:text-base">
                Add New Skill
              </span>

            </button>

            <button className="w-full flex items-center gap-3 bg-purple-600 hover:bg-purple-700 rounded-xl lg:rounded-2xl px-4 py-3 lg:p-4 transition">

              <FaEye />

              <span className="text-sm sm:text-base">
                View Portfolio
              </span>

            </button>

          </div>

        </div>

        {/* Recent Activity */}

        <div className="bg-slate-900 border border-slate-800 rounded-2xl lg:rounded-3xl p-5 lg:p-8">

          <h2 className="text-xl lg:text-2xl font-bold mb-5">
            Recent Activity
          </h2>

          <div className="space-y-5">

            <div className="border-l-4 border-blue-500 pl-4">

              <h3 className="font-semibold text-sm sm:text-base">
                Portfolio Updated
              </h3>

              <p className="text-slate-400 text-xs sm:text-sm">
                New project added.
              </p>

            </div>

            <div className="border-l-4 border-green-500 pl-4">

              <h3 className="font-semibold text-sm sm:text-base">
                Skills Updated
              </h3>

              <p className="text-slate-400 text-xs sm:text-sm">
                React & Tailwind added.
              </p>

            </div>

            <div className="border-l-4 border-pink-500 pl-4">

              <h3 className="font-semibold text-sm sm:text-base">
                Dashboard Created
              </h3>

              <p className="text-slate-400 text-xs sm:text-sm">
                Admin panel initialized.
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default DashboardHome;