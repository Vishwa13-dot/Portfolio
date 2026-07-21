import { useEffect, useState } from "react";
import ls from "../../../utils/secureStorage";

import { Link } from "react-router-dom";
import {
  FaProjectDiagram,
  FaTools,
  FaBriefcase,
  FaGraduationCap,
  FaEnvelope,
  FaArrowUp,
  FaPlus,
  FaEye,
  FaChartLine,
  FaClock,
} from "react-icons/fa";

function DashboardHome() {
  const [stats, setStats] = useState({
    projects: 0,
    skills: 0,
    experience: 0,
    education: 0,
    messages: 0,
  });

  const [activities, setActivities] = useState([]);

  useEffect(() => {
    try {
      const projects = ls.get("projects") || [];
      const skills = ls.get("skills") || [];
      const experience = ls.get("experience") || [];
      const education = ls.get("education") || [];
      const messages = ls.get("messages") || [];

      setStats({
        projects: projects.length,
        skills: skills.length,
        experience: experience.length,
        education: education.length,
        messages: messages.length,
      });

      const recent = [];

      if (projects.length) {
        recent.push({
          title: "Project Added",
          description: projects[0].title || "New project created.",
          color: "border-blue-500",
        });
      }

      if (skills.length) {
        recent.push({
          title: "Skill Updated",
          description: skills[0].name || "Skill added.",
          color: "border-green-500",
        });
      }

      if (messages.length) {
        recent.push({
          title: "New Contact Message",
          description: messages[0].name || "Portfolio visitor",
          color: "border-pink-500",
        });
      }

      if (education.length) {
        recent.push({
          title: "Education Updated",
          description: education[0].degree || "Education details",
          color: "border-yellow-500",
        });
      }

      setActivities(recent);
    } catch (error) {
      console.error("SecureLS:", error);
    }
  }, []);
  
  const cards = [
    {
      title: "Projects",
      value: stats.projects,
      icon: <FaProjectDiagram />,
      gradient: "from-blue-600 to-cyan-500",
    },
    {
      title: "Skills",
      value: stats.skills,
      icon: <FaTools />,
      gradient: "from-green-600 to-emerald-500",
    },
    {
      title: "Experience",
      value: stats.experience,
      icon: <FaBriefcase />,
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: "Education",
      value: stats.education,
      icon: <FaGraduationCap />,
      gradient: "from-pink-500 to-purple-600",
    },
    {
      title: "Messages",
      value: stats.messages,
      icon: <FaEnvelope />,
      gradient: "from-indigo-500 to-violet-600",
    },
  ];

  const quickActions = [
    {
      title: "Add Project",
      icon: <FaPlus />,
      color: "bg-blue-600 hover:bg-blue-700",
      path: "/admin/dashboard/projects",
    },
    {
      title: "Add Skill",
      icon: <FaPlus />,
      color: "bg-green-600 hover:bg-green-700",
      path: "/admin/dashboard/skills",
    },
    {
      title: "Add Experience",
      icon: <FaPlus />,
      color: "bg-orange-600 hover:bg-orange-700",
      path: "/admin/dashboard/experience",
    },
    {
      title: "Add Education",
      icon: <FaPlus />,
      color: "bg-yellow-600 hover:bg-yellow-700",
      path: "/admin/dashboard/education",
    },
    {
      title: "View Messages",
      icon: <FaEnvelope />,
      color: "bg-pink-600 hover:bg-pink-700",
      path: "/admin/dashboard/messages",
    },
    {
      title: "View Portfolio",
      icon: <FaEye />,
      color: "bg-purple-600 hover:bg-purple-700",
      path: "/",
    },
  ];

  return (
    <div className="space-y-6 lg:space-y-8 px-2 sm:px-4 lg:px-0">

      {/* Welcome Banner */}

      <div className="relative overflow-hidden rounded-2xl lg:rounded-3xl bg-gradient-to-r from-blue-700 via-cyan-600 to-indigo-700 p-5 sm:p-8 lg:p-10">

        <div className="absolute right-0 top-0 h-40 w-40 sm:h-52 sm:w-52 rounded-full bg-white/10 blur-3xl"></div>

        <div className="relative z-10 flex flex-col xl:flex-row items-start xl:items-center justify-between gap-8">

          <div className="max-w-3xl">

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Welcome Back, Vishwa 👋
            </h1>

            <p className="mt-4 text-blue-100 text-sm sm:text-base lg:text-lg leading-7">
              Manage your complete portfolio from one dashboard.
              Add projects, skills, education, experience and
              monitor contact messages easily.
            </p>

          </div>

          <div className="w-full sm:w-auto bg-white/10 backdrop-blur-md rounded-2xl lg:rounded-3xl px-8 py-6 text-center">

            <FaChartLine className="mx-auto text-4xl sm:text-5xl mb-4" />

            <h2 className="text-3xl sm:text-4xl font-bold">
              {stats.projects +
                stats.skills +
                stats.experience +
                stats.education}
            </h2>

            <p className="text-blue-100 mt-2 text-sm sm:text-base">
              Portfolio Records
            </p>

          </div>

        </div>

      </div>

      {/* Statistics */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-5 lg:gap-6">

        {cards.map((card, index) => (

          <div
            key={index}
            className="group rounded-2xl lg:rounded-3xl bg-slate-900 border border-slate-800 hover:border-blue-500 transition-all duration-300 hover:-translate-y-1 lg:hover:-translate-y-2 p-5 lg:p-6"
          >

            <div
              className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-r ${card.gradient} flex items-center justify-center text-2xl sm:text-3xl`}
            >
              {card.icon}
            </div>

            <p className="text-slate-400 mt-5 text-sm sm:text-base">
              {card.title}
            </p>

            <div className="flex items-center justify-between mt-2">

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                {card.value}
              </h2>

              <FaArrowUp className="text-green-400 text-xl sm:text-2xl" />

            </div>

          </div>

        ))}

      </div>

      {/* Bottom Section */}

      <div className="grid grid-cols-1 2xl:grid-cols-3 gap-6">

        {/* Quick Actions */}

        <div className="2xl:col-span-1 bg-slate-900 border border-slate-800 rounded-2xl lg:rounded-3xl p-5 lg:p-6">

          <div className="flex items-center justify-between mb-6">

            <h2 className="text-xl sm:text-2xl font-bold">
              Quick Actions
            </h2>

            <FaPlus className="text-blue-400 text-xl" />

          </div>

          <div className="space-y-4">

            {quickActions.map((item, index) => (

              <Link
                key={index}
                to={item.path}
                className={`flex items-center justify-between w-full ${item.color} rounded-2xl p-4 transition hover:scale-[1.02]`}
              >

                <div className="flex items-center gap-3">

                  <div className="text-lg sm:text-xl">
                    {item.icon}
                  </div>

                  <span className="font-medium text-sm sm:text-base">
                    {item.title}
                  </span>

                </div>

                <FaArrowUp className="rotate-45 text-sm" />

              </Link>

            ))}

          </div>

        </div>

        {/* Recent Activity */}

        <div className="2xl:col-span-2 bg-slate-900 border border-slate-800 rounded-2xl lg:rounded-3xl p-5 lg:p-6">

          <div className="flex items-center gap-3 mb-6">

            <FaClock className="text-blue-400 text-xl" />

            <h2 className="text-xl sm:text-2xl font-bold">
              Recent Activity
            </h2>

          </div>

          {activities.length ? (

            <div className="space-y-4 lg:space-y-5">

              {activities.map((activity, index) => (

                <div
                  key={index}
                  className={`border-l-4 ${activity.color} bg-slate-800 rounded-r-2xl p-4 lg:p-5`}
                >

                  <h3 className="font-semibold text-base lg:text-lg">
                    {activity.title}
                  </h3>

                  <p className="text-slate-400 mt-2 text-sm sm:text-base break-words">
                    {activity.description}
                  </p>

                </div>

              ))}

            </div>

          ) : (

            <div className="flex flex-col items-center justify-center py-12 lg:py-16 text-center">

              <FaClock className="text-4xl lg:text-5xl text-slate-600 mb-5" />

              <h3 className="text-xl lg:text-2xl font-bold">
                No Recent Activity
              </h3>

              <p className="text-sm sm:text-base text-slate-400 mt-3 max-w-md">
                Start adding projects, skills, education,
                experience or receive contact messages to
                see activity here.
              </p>

            </div>

          )}

        </div>

      </div>

      {/* System Overview */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">

        <div className="rounded-2xl lg:rounded-3xl bg-gradient-to-r from-slate-900 to-slate-800 border border-slate-700 p-5 lg:p-6">

          <h3 className="text-lg font-semibold mb-3">
            Portfolio Status
          </h3>

          <p className="text-3xl lg:text-4xl font-bold text-green-400">
            Active
          </p>

          <p className="text-sm sm:text-base text-slate-400 mt-2">
            Your portfolio is live and ready to receive
            visitors.
          </p>

        </div>

        <div className="rounded-2xl lg:rounded-3xl bg-gradient-to-r from-slate-900 to-slate-800 border border-slate-700 p-5 lg:p-6">

          <h3 className="text-lg font-semibold mb-3">
            Contact Messages
          </h3>

          <p className="text-3xl lg:text-4xl font-bold text-cyan-400">
            {stats.messages}
          </p>

          <p className="text-sm sm:text-base text-slate-400 mt-2">
            Total messages received from your portfolio.
          </p>

        </div>

        <div className="rounded-2xl lg:rounded-3xl bg-gradient-to-r from-slate-900 to-slate-800 border border-slate-700 p-5 lg:p-6">

          <h3 className="text-lg font-semibold mb-3">
            Total Records
          </h3>

          <p className="text-3xl lg:text-4xl font-bold text-yellow-400">
            {stats.projects +
              stats.skills +
              stats.experience +
              stats.education}
          </p>

          <p className="text-sm sm:text-base text-slate-400 mt-2">
            Combined portfolio entries currently stored.
          </p>

        </div>

      </div>

    </div>
  );
}

export default DashboardHome;