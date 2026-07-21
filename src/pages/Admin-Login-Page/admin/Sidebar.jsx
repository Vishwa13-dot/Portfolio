import ls from "../../utils/secureStorage";
import {
  FaHome,
  FaProjectDiagram,
  FaTools,
  FaBriefcase,
  FaGraduationCap,
  FaEnvelope,
  FaCog,
  FaSignOutAlt,
  FaTimes,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
} from "react-icons/fa";

import { NavLink, useNavigate } from "react-router-dom";

function Sidebar({
  desktopCollapsed,
  setDesktopCollapsed,
  mobileOpen,
  setMobileOpen,
}) {
  const navigate = useNavigate();

  const menu = [
    {
      name: "Dashboard",
      path: "/admin/dashboard",
      icon: <FaHome />,
    },
    {
      name: "Projects",
      path: "/admin/dashboard/projects",
      icon: <FaProjectDiagram />,
    },
    {
      name: "Skills",
      path: "/admin/dashboard/skills",
      icon: <FaTools />,
    },
    {
      name: "Experience",
      path: "/admin/dashboard/experience",
      icon: <FaBriefcase />,
    },
    {
      name: "Education",
      path: "/admin/dashboard/education",
      icon: <FaGraduationCap />,
    },
    {
      name: "Messages",
      path: "/admin/dashboard/messages",
      icon: <FaEnvelope />,
    },
    {
      name: "Settings",
      path: "/admin/dashboard/settings",
      icon: <FaCog />,
    },
  ];

  const logout = () => {
    ls.remove("adminLoggedIn");
    navigate("/admin");
  };

  return (
    <>
      {/* Overlay */}

      <div
        onClick={() => setMobileOpen(false)}
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 lg:hidden ${mobileOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
          }`}
      />

      {/* Sidebar */}

      <aside
        className={`
          fixed top-0 left-0 h-screen
          bg-slate-900 border-r border-slate-800
          flex flex-col
          z-50
          transition-all duration-300 ease-in-out

          ${mobileOpen
            ? "translate-x-0"
            : "-translate-x-full"
          }

          lg:translate-x-0
          ${desktopCollapsed ? "lg:w-20" : "lg:w-64"}

          w-64
        `}
      >
        {/* Desktop Collapse */}

        <button
          onClick={() =>
            setDesktopCollapsed(!desktopCollapsed)
          }
          className="hidden lg:flex absolute -right-4 top-8 w-8 h-8 rounded-full bg-blue-600 hover:bg-blue-700 text-white items-center justify-center shadow-lg transition"
        >
          {desktopCollapsed ? (
            <FaAngleDoubleRight />
          ) : (
            <FaAngleDoubleLeft />
          )}
        </button>

        {/* Mobile Close */}

        <button
          onClick={() => setMobileOpen(false)}
          className="lg:hidden absolute top-5 right-5 w-10 h-10 rounded-xl bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-white transition"
        >
          <FaTimes />
        </button>

        {/* Logo */}

        <div className="border-b border-slate-800 p-6">

          {desktopCollapsed ? (

            <div className="flex justify-center">

              <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-xl font-bold">
                A
              </div>

            </div>

          ) : (

            <>

              <h1 className="text-2xl xl:text-3xl font-bold text-blue-400">
                Admin Panel
              </h1>

              <p className="text-slate-400 mt-2 text-sm">
                Portfolio CMS
              </p>

            </>

          )}

        </div>

        {/* Navigation */}

        <div className="flex-1 overflow-y-auto py-4">

          {menu.map((item) => (

            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `
                flex items-center
                ${desktopCollapsed
                  ? "justify-center px-3"
                  : "gap-4 px-6"
                }
                py-3 my-1 mx-2 rounded-xl
                transition-all duration-300

                ${isActive
                  ? "bg-blue-600 text-white"
                  : "text-slate-400 hover:bg-slate-800 hover:text-white"
                }
              `
              }
            >
              <span className="text-xl flex-shrink-0">
                {item.icon}
              </span>

              {!desktopCollapsed && (
                <span className="font-medium whitespace-nowrap">
                  {item.name}
                </span>
              )}
            </NavLink>

          ))}

        </div>

        {/* Logout */}

        <div className="border-t border-slate-800 p-4">

          <button
            onClick={logout}
            className={`
              w-full
              flex items-center
              ${desktopCollapsed
                ? "justify-center"
                : "justify-center gap-3"
              }
              bg-red-600
              hover:bg-red-700
              rounded-xl
              py-3
              transition
            `}
          >
            <FaSignOutAlt className="text-lg" />

            {!desktopCollapsed && (
              <span className="font-medium">
                Logout
              </span>
            )}

          </button>

        </div>

      </aside>
    </>
  );
}

export default Sidebar;